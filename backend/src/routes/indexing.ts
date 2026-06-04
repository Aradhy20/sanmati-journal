/**
 * Indexing & Discovery Routes
 * - LOCKSS archival manifest
 * - XML sitemap generation
 * - Analytics tracking
 * - Articles public listing & public article detail
 */
import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import * as crypto from 'crypto';

const router = Router();
const prisma = new PrismaClient();

// ── LOCKSS Archival Manifest ───────────────────────────────────────────────

/**
 * @route GET /lockss-manifest
 * @desc LOCKSS/CLOCKSS-compliant archival permission manifest
 *       Required for Scopus archiving compliance.
 */
router.get('/lockss-manifest', async (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');

  const volumes = await prisma.volume.findMany({
    where: { isPublished: true },
    include: { issues: { where: { isPublished: true } } },
    orderBy: { volumeNumber: 'desc' },
  });

  const volumeLinks = volumes
    .map(
      (v) =>
        `<li><a href="https://sanmatijournal.in/volume/${v.volumeNumber}">Volume ${v.volumeNumber} (${v.year})</a>
        <ul>${v.issues
          .map(
            (i) =>
              `<li><a href="https://sanmatijournal.in/volume/${v.volumeNumber}/issue/${i.issueNumber}">Issue ${i.issueNumber}: ${i.title || 'Regular Issue'}</a></li>`
          )
          .join('')}</ul>
        </li>`
    )
    .join('');

  const html = `<!DOCTYPE html>
<html>
<head><title>LOCKSS Manifest — Sanmati Journal</title></head>
<body>
<h1>LOCKSS Manifest Page</h1>
<p>LOCKSS system has permission to collect, preserve, and serve this Archival Unit.</p>
<p>CLOCKSS system has permission to ingest, preserve, and serve this Archival Unit.</p>
<h2>Published Volumes</h2>
<ul>${volumeLinks || '<li>No published volumes available.</li>'}</ul>
<p><small>Sanmati Spectrum Publications | sanmatijournal.in</small></p>
</body>
</html>`;

  return res.send(html);
});

// ── XML Sitemap ────────────────────────────────────────────────────────────

/**
 * @route GET /sitemap-articles.xml
 * @desc Dynamic sitemap of all published articles for Google Scholar indexing
 */
router.get('/sitemap-articles.xml', async (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/xml; charset=UTF-8');

  const articles = await prisma.article.findMany({
    select: { id: true, updatedAt: true },
    orderBy: { createdAt: 'desc' },
  });

  const urls = articles
    .map(
      (a) =>
        `  <url>
    <loc>https://sanmatijournal.in/articles/${a.id}</loc>
    <lastmod>${a.updatedAt.toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('\n');

  return res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`);
});

/**
 * @route GET /sitemap-issues.xml
 * @desc Dynamic sitemap of all published volumes and issues
 */
router.get('/sitemap-issues.xml', async (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/xml; charset=UTF-8');

  const issues = await prisma.issue.findMany({
    where: { isPublished: true },
    include: { volume: true },
    orderBy: { publishedAt: 'desc' },
  });

  const urls = issues
    .map(
      (i) =>
        `  <url>
    <loc>https://sanmatijournal.in/volume/${i.volume.volumeNumber}/issue/${i.issueNumber}</loc>
    <lastmod>${(i.publishedAt || i.createdAt).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('\n');

  return res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`);
});

// ── Analytics Tracking ─────────────────────────────────────────────────────

/**
 * @route POST /api/analytics/track
 * @desc Track article view or download (anonymized IP, Cloudflare geo)
 */
router.post('/analytics/track', async (req: Request, res: Response) => {
  const { articleId, isDownload } = req.body;
  if (!articleId) return res.status(400).json({ error: 'articleId required.' });

  try {
    // Use Cloudflare header if available, fallback to X-Forwarded-For
    const rawIp =
      (req.headers['cf-connecting-ip'] as string) ||
      (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
      req.ip ||
      'unknown';

    // Immediately hash IP to avoid storing PII
    const ipHash = crypto.createHash('sha256').update(rawIp).digest('hex');

    // Cloudflare provides country code directly
    const countryCode = (req.headers['cf-ipcountry'] as string) || 'XX';

    await prisma.analytics.create({
      data: { articleId, ipHash, countryCode, isDownload: !!isDownload },
    });

    // Increment counter
    if (isDownload) {
      await prisma.article.update({
        where: { id: articleId },
        data: { downloadsCount: { increment: 1 } },
      });
    } else {
      await prisma.article.update({
        where: { id: articleId },
        data: { viewsCount: { increment: 1 } },
      });
    }

    return res.json({ success: true });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * @route GET /api/analytics/articles/:id
 * @desc Get analytics summary for a specific article
 */
router.get('/analytics/articles/:id', async (req: Request, res: Response) => {
  try {
    const article = await prisma.article.findUnique({
      where: { id: req.params.id },
      select: { viewsCount: true, downloadsCount: true, citationCount: true },
    });
    if (!article) return res.status(404).json({ error: 'Article not found.' });

    // Geographic breakdown
    const geoData = await prisma.analytics.groupBy({
      by: ['countryCode'],
      where: { articleId: req.params.id },
      _count: true,
      orderBy: { _count: { countryCode: 'desc' } },
      take: 20,
    });

    return res.json({ ...article, geographicBreakdown: geoData });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
