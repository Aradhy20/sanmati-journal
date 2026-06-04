/**
 * OAI-PMH 2.0 Metadata Provider
 * Provides standard Open Archives Initiative Protocol for Metadata Harvesting.
 * Required for: OpenAlex, BASE, DOAJ, Crossref Event Data, Scopus harvesting.
 *
 * Supported verbs: Identify | ListMetadataFormats | ListRecords | GetRecord
 */
import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { create } from 'xmlbuilder2';

const router = Router();
const prisma = new PrismaClient();

const JOURNAL = {
  name: 'Sanmati Spectrum of Knowledge',
  baseUrl: 'https://sanmatijournal.in/api/indexing/oai',
  adminEmail: 'editor@sanmatijournal.in',
  issn: process.env.JOURNAL_ISSN || '0000-0000',
  publisherName: 'Sanmati Spectrum Publications',
};

function buildOaiRoot(verb: string) {
  return create({ version: '1.0', encoding: 'UTF-8' })
    .ele('OAI-PMH', {
      xmlns: 'http://www.openarchives.org/OAI/2.0/',
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:schemaLocation':
        'http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd',
    })
    .ele('responseDate')
    .txt(new Date().toISOString())
    .up()
    .ele('request', { verb })
    .txt(JOURNAL.baseUrl)
    .up();
}

/**
 * @route GET /api/indexing/oai
 * @desc OAI-PMH protocol endpoint
 * @param verb - OAI-PMH verb (Identify | ListMetadataFormats | ListRecords | GetRecord)
 */
router.get('/', async (req: Request, res: Response) => {
  const verb = req.query.verb as string;
  res.setHeader('Content-Type', 'application/xml; charset=UTF-8');

  try {
    // ── Identify ──────────────────────────────────────────────────────────
    if (verb === 'Identify') {
      const earliestDatestamp = await prisma.article.findFirst({
        orderBy: { createdAt: 'asc' },
        select: { createdAt: true },
      });

      const root = buildOaiRoot('Identify');
      const identify = root.ele('Identify');
      identify.ele('repositoryName').txt(JOURNAL.name);
      identify.ele('baseURL').txt(JOURNAL.baseUrl);
      identify.ele('protocolVersion').txt('2.0');
      identify.ele('adminEmail').txt(JOURNAL.adminEmail);
      identify.ele('earliestDatestamp').txt(
        earliestDatestamp?.createdAt.toISOString().split('T')[0] || '2026-01-01'
      );
      identify.ele('deletedRecord').txt('no');
      identify.ele('granularity').txt('YYYY-MM-DD');

      return res.send(root.end({ prettyPrint: true }));
    }

    // ── ListMetadataFormats ────────────────────────────────────────────────
    if (verb === 'ListMetadataFormats') {
      const root = buildOaiRoot('ListMetadataFormats');
      const listMF = root.ele('ListMetadataFormats');

      // Dublin Core
      const mf1 = listMF.ele('metadataFormat');
      mf1.ele('metadataPrefix').txt('oai_dc');
      mf1.ele('schema').txt('http://www.openarchives.org/OAI/2.0/oai_dc.xsd');
      mf1.ele('metadataNamespace').txt('http://www.openarchives.org/OAI/2.0/oai_dc/');

      // JATS
      const mf2 = listMF.ele('metadataFormat');
      mf2.ele('metadataPrefix').txt('jats');
      mf2.ele('schema').txt('https://jats.nlm.nih.gov/publishing/1.3/xsd/JATS-journalpublishing1-3.xsd');
      mf2.ele('metadataNamespace').txt('https://jats.nlm.nih.gov/ns/archiving/1.3/');

      return res.send(root.end({ prettyPrint: true }));
    }

    // ── ListRecords ────────────────────────────────────────────────────────
    if (verb === 'ListRecords') {
      const metadataPrefix = req.query.metadataPrefix as string;
      if (!metadataPrefix) {
        return res.status(400).send(
          buildOaiRoot('ListRecords')
            .ele('error', { code: 'badArgument' })
            .txt('metadataPrefix is required.')
            .end()
        );
      }

      const articles = await prisma.article.findMany({
        include: {
          issue: { include: { volume: true } },
          manuscript: {
            include: {
              authors: { include: { user: true }, orderBy: { authorOrder: 'asc' } },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });

      const root = buildOaiRoot('ListRecords');
      const listRecords = root.ele('ListRecords');

      articles.forEach((article) => {
        const record = listRecords.ele('record');

        // OAI header
        const header = record.ele('header');
        header.ele('identifier').txt(`oai:sanmatijournal.in:${article.id}`);
        header.ele('datestamp').txt(article.createdAt.toISOString().split('T')[0]);
        header.ele('setSpec').txt('sanmati_journal');

        // Dublin Core metadata
        const metadata = record.ele('metadata');
        const dc = metadata.ele('oai_dc:dc', {
          'xmlns:oai_dc': 'http://www.openarchives.org/OAI/2.0/oai_dc/',
          'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
          'xsi:schemaLocation':
            'http://www.openarchives.org/OAI/2.0/oai_dc/ http://www.openarchives.org/OAI/2.0/oai_dc.xsd',
        });
        dc.ele('dc:title').txt(article.manuscript.title);
        article.manuscript.authors.forEach((a) => {
          dc.ele('dc:creator').txt(`${a.user.lastName}, ${a.user.firstName}`);
        });
        article.manuscript.keywords.forEach((kw) => dc.ele('dc:subject').txt(kw));
        dc.ele('dc:description').txt(article.manuscript.abstract);
        dc.ele('dc:publisher').txt(JOURNAL.publisherName);
        dc.ele('dc:date').txt(article.createdAt.toISOString().split('T')[0]);
        dc.ele('dc:type').txt('Text');
        dc.ele('dc:format').txt('application/pdf');
        dc.ele('dc:identifier').txt(`https://doi.org/${article.doi}`);
        dc.ele('dc:source').txt(`${JOURNAL.name}, Vol. ${article.issue.volume.volumeNumber}, No. ${article.issue.issueNumber}`);
        dc.ele('dc:language').txt('en');
        dc.ele('dc:rights').txt('https://creativecommons.org/licenses/by/4.0/');
      });

      return res.send(root.end({ prettyPrint: true }));
    }

    // ── GetRecord ─────────────────────────────────────────────────────────
    if (verb === 'GetRecord') {
      const identifier = req.query.identifier as string;
      const articleId = identifier?.split(':').pop();
      if (!articleId) {
        return res.status(400).send('Missing identifier.');
      }

      const article = await prisma.article.findUnique({
        where: { id: articleId },
        include: {
          issue: { include: { volume: true } },
          manuscript: { include: { authors: { include: { user: true } } } },
        },
      });
      if (!article) {
        return res.status(404).send(
          buildOaiRoot('GetRecord')
            .ele('error', { code: 'idDoesNotExist' })
            .txt('No record found with that identifier.')
            .end()
        );
      }

      const root = buildOaiRoot('GetRecord');
      const getRecord = root.ele('GetRecord').ele('record');
      const header = getRecord.ele('header');
      header.ele('identifier').txt(`oai:sanmatijournal.in:${article.id}`);
      header.ele('datestamp').txt(article.createdAt.toISOString().split('T')[0]);
      const meta = getRecord.ele('metadata');
      const dc = meta.ele('oai_dc:dc', {
        'xmlns:oai_dc': 'http://www.openarchives.org/OAI/2.0/oai_dc/',
        'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
      });
      dc.ele('dc:title').txt(article.manuscript.title);
      dc.ele('dc:identifier').txt(`https://doi.org/${article.doi}`);

      return res.send(root.end({ prettyPrint: true }));
    }

    // Unknown verb
    const root = buildOaiRoot(verb || 'unknown');
    root.ele('error', { code: 'badVerb' }).txt(`Illegal OAI-PMH verb: ${verb}`);
    return res.send(root.end({ prettyPrint: true }));
  } catch (error: any) {
    return res.status(500).send(`<error>Internal server error: ${error.message}</error>`);
  }
});

export default router;
