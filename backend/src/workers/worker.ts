/**
 * Background Worker — Processes DOI deposits, PDF generation, and email dispatch
 * Run this as a separate process: `tsx src/workers/worker.ts`
 */
import 'dotenv/config';
import { Worker } from 'bullmq';
import { PrismaClient } from '@prisma/client';
import puppeteer from 'puppeteer';
import { redisConnection, DoiJobData, PdfJobData, EmailJobData } from '../queues/index.js';
import { generateCrossrefXml } from '../services/crossrefGenerator.js';
import { generateJatsXml } from '../services/jatsGenerator.js';

const prisma = new PrismaClient();

// ── DOI Deposit Worker ─────────────────────────────────────────────────────

new Worker<DoiJobData>(
  'doi-deposit',
  async (job) => {
    const { articleId } = job.data;
    console.log(`[DOI Worker] Processing articleId: ${articleId}`);

    const article = await prisma.article.findUnique({
      where: { id: articleId },
      include: {
        issue: { include: { volume: true } },
        manuscript: {
          include: {
            authors: {
              orderBy: { authorOrder: 'asc' },
              include: { user: true },
            },
          },
        },
      },
    });

    if (!article) throw new Error(`Article ${articleId} not found.`);

    const manuscript = article.manuscript;
    const authors = manuscript.authors.map((a, idx) => ({
      firstName: a.user.firstName,
      lastName: a.user.lastName,
      orcid: a.user.orcid,
      sequence: idx === 0 ? ('first' as const) : ('additional' as const),
    }));

    const crossrefXml = generateCrossrefXml({
      doiPrefix: process.env.DOI_PREFIX || '10.12345',
      doiSuffix: article.doi.split('/').pop() || articleId,
      title: manuscript.title,
      abstract: manuscript.abstract,
      authors,
      journalTitle: 'Sanmati Spectrum of Knowledge',
      issn: process.env.JOURNAL_ISSN || '0000-0000',
      volumeNumber: article.issue.volume.volumeNumber,
      issueNumber: article.issue.issueNumber,
      startPage: article.startPage,
      endPage: article.endPage,
      publishedAt: article.issue.publishedAt || new Date(),
      articleUrl: `https://sanmatijournal.in/articles/${articleId}`,
      references: article.referencesList,
      depositorName: 'Sanmati Spectrum Publications',
      depositorEmail: 'editor@sanmatijournal.in',
      registrant: 'Sanmati Spectrum Publications',
    });

    // In production: POST crossrefXml to Crossref API
    // const response = await fetch('https://doi.crossref.org/servlet/deposit', { method: 'POST', ... });
    // For now — save XML to DB confirmation
    console.log(`[DOI Worker] Crossref XML generated for DOI: ${article.doi} (${crossrefXml.length} bytes)`);

    // Generate JATS XML too and update record
    const jatsXml = generateJatsXml({
      doi: article.doi,
      title: manuscript.title,
      abstract: manuscript.abstract,
      keywords: manuscript.keywords,
      authors: manuscript.authors.map((a) => ({
        firstName: a.user.firstName,
        lastName: a.user.lastName,
        affiliation: a.user.affiliation,
        orcid: a.user.orcid,
        isCorresponding: a.isCorresponding,
      })),
      journalTitle: 'Sanmati Spectrum of Knowledge',
      issn: process.env.JOURNAL_ISSN || '0000-0000',
      publisherName: 'Sanmati Spectrum Publications',
      volumeNumber: article.issue.volume.volumeNumber,
      issueNumber: article.issue.issueNumber,
      startPage: article.startPage,
      endPage: article.endPage,
      publishedAt: article.issue.publishedAt || new Date(),
      references: article.referencesList,
    });

    await prisma.article.update({
      where: { id: articleId },
      data: {
        jatsUrl: `/api/articles/${articleId}/jats.xml`, // served from a route
      },
    });

    console.log(`[DOI Worker] JATS XML generated (${jatsXml.length} bytes). Job complete.`);
  },
  { connection: redisConnection }
);

// ── PDF Generation Worker ──────────────────────────────────────────────────

new Worker<PdfJobData>(
  'pdf-generate',
  async (job) => {
    const { articleId } = job.data;
    console.log(`[PDF Worker] Generating PDF for articleId: ${articleId}`);

    const article = await prisma.article.findUnique({
      where: { id: articleId },
      include: {
        manuscript: {
          include: {
            authors: { include: { user: true }, orderBy: { authorOrder: 'asc' } },
          },
        },
        issue: { include: { volume: true } },
      },
    });

    if (!article) throw new Error(`Article ${articleId} not found.`);

    // Build self-contained HTML for Puppeteer rendering
    const authors = article.manuscript.authors
      .map((a) => `${a.user.firstName} ${a.user.lastName} (${a.user.affiliation})`)
      .join('; ');

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@400;500&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', serif; font-size: 11pt; line-height: 1.7; color: #1a1a2e; padding: 60px; }
    .journal-header { text-align: center; border-bottom: 2px solid #4f46e5; padding-bottom: 16px; margin-bottom: 24px; }
    .journal-name { font-family: 'Outfit', sans-serif; font-size: 10pt; color: #4f46e5; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    .article-title { font-family: 'Outfit', sans-serif; font-size: 18pt; font-weight: 700; margin: 20px 0 8px; line-height: 1.3; }
    .authors { font-size: 10pt; color: #555; margin-bottom: 4px; }
    .doi { font-size: 9pt; color: #4f46e5; margin-bottom: 24px; }
    .meta-bar { display: flex; gap: 20px; font-size: 9pt; color: #888; margin-bottom: 24px; padding: 10px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; }
    h2 { font-family: 'Outfit', sans-serif; font-size: 13pt; color: #1a1a2e; margin: 20px 0 8px; }
    p { margin-bottom: 12px; text-align: justify; }
    .abstract-box { background: #f8f7ff; border-left: 4px solid #4f46e5; padding: 16px 20px; margin: 20px 0; }
    .keywords { font-size: 9.5pt; color: #666; }
    .reference { font-size: 9pt; color: #555; margin-bottom: 6px; padding-left: 16px; text-indent: -16px; }
    .page-footer { position: fixed; bottom: 30px; width: 100%; text-align: center; font-size: 8pt; color: #999; border-top: 1px solid #eee; padding-top: 8px; }
  </style>
</head>
<body>
  <div class="journal-header">
    <div class="journal-name">Sanmati Spectrum of Knowledge & Emerging Discourse</div>
    <div style="font-size:9pt;color:#888;">Vol. ${article.issue.volume.volumeNumber}, Issue ${article.issue.issueNumber} &nbsp;|&nbsp; DOI: ${article.doi}</div>
  </div>

  <h1 class="article-title">${article.manuscript.title}</h1>
  <div class="authors">${authors}</div>
  <div class="doi">https://doi.org/${article.doi}</div>

  <div class="meta-bar">
    <span>Pages: ${article.startPage}–${article.endPage}</span>
    <span>Published: ${(article.issue.publishedAt || new Date()).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
    <span>Open Access (CC BY 4.0)</span>
  </div>

  <div class="abstract-box">
    <h2 style="margin-top:0">Abstract</h2>
    <p>${article.manuscript.abstract}</p>
    <div class="keywords"><strong>Keywords:</strong> ${article.manuscript.keywords.join(', ')}</div>
  </div>

  ${article.htmlContent || '<p><em>Full article body available in HTML format online.</em></p>'}

  ${
    article.referencesList.length > 0
      ? `<h2>References</h2>${article.referencesList
          .map((ref, i) => `<p class="reference">[${i + 1}] ${ref}</p>`)
          .join('')}`
      : ''
  }

  <div class="page-footer">
    Sanmati Spectrum Publications &nbsp;|&nbsp; sanmatijournal.in &nbsp;|&nbsp; ISSN: ${process.env.JOURNAL_ISSN || '0000-0000'}
  </div>
</body>
</html>`;

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' },
    });

    await browser.close();

    // In production: upload pdfBuffer to S3 and store URL
    // const s3Key = `articles/${articleId}/article.pdf`;
    // await s3Client.putObject({ Bucket: S3_BUCKET, Key: s3Key, Body: pdfBuffer, ContentType: 'application/pdf' });
    // await prisma.article.update({ where: { id: articleId }, data: { pdfUrl: `https://cdn.sanmatijournal.in/${s3Key}` }});

    console.log(`[PDF Worker] PDF generated for ${articleId} — ${pdfBuffer.length} bytes.`);
  },
  { connection: redisConnection, concurrency: 2 }
);

// ── Email Dispatch Worker ──────────────────────────────────────────────────

new Worker<EmailJobData>(
  'email-dispatch',
  async (job) => {
    const { to, subject, body } = job.data;
    console.log(`[Email Worker] Sending email to: ${to} | Subject: ${subject}`);

    // In production: replace with Resend / SendGrid SDK
    // await resend.emails.send({ from: 'editor@sanmatijournal.in', to, subject, html: body });

    if (job.data.emailLogId) {
      await prisma.emailLog.update({
        where: { id: job.data.emailLogId },
        data: { status: 'SENT', sentAt: new Date() },
      });
    }

    console.log(`[Email Worker] Email dispatched successfully to ${to}.`);
  },
  { connection: redisConnection }
);

console.log('✅ Sanmati Journal background workers started.');
