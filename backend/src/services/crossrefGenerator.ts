/**
 * Crossref DOI Deposit Generator
 * Produces schema-compliant Crossref XML version 5.3.0 payload
 * for DOI registration via https://doi.crossref.org/servlet/deposit
 */
import { create } from 'xmlbuilder2';

export interface CrossrefDepositData {
  doiPrefix: string;   // e.g. "10.12345"
  doiSuffix: string;   // e.g. "sanmati.2026.001"
  title: string;
  abstract: string;
  authors: Array<{
    firstName: string;
    lastName: string;
    orcid?: string | null;
    sequence: 'first' | 'additional';
  }>;
  journalTitle: string;
  issn: string;
  volumeNumber: number;
  issueNumber: number;
  startPage: number;
  endPage: number;
  publishedAt: Date;
  articleUrl: string;   // Canonical landing page URL
  references?: string[];
  depositorName: string;
  depositorEmail: string;
  registrant: string;
}

export function generateCrossrefXml(data: CrossrefDepositData): string {
  const batchId = `sanmati-deposit-${Date.now()}`;
  const doi = `${data.doiPrefix}/${data.doiSuffix}`;

  const doc = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('doi_batch', {
      version: '5.3.0',
      xmlns: 'http://www.crossref.org/schema/5.3.0',
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:schemaLocation':
        'http://www.crossref.org/schema/5.3.0 https://www.crossref.org/schemas/crossref5.3.0.xsd',
    });

  // ── <head> — Depositor Information ───────────────────────────────────────
  const head = doc.ele('head');
  head.ele('doi_batch_id').txt(batchId);
  head.ele('timestamp').txt(Date.now().toString());
  const depositor = head.ele('depositor');
  depositor.ele('depositor_name').txt(data.depositorName);
  depositor.ele('email_address').txt(data.depositorEmail);
  head.ele('registrant').txt(data.registrant);

  // ── <body> — Journal Article Data ────────────────────────────────────────
  const body = doc.ele('body');
  const journal = body.ele('journal');

  // Journal metadata
  const jMeta = journal.ele('journal_metadata', { language: 'en' });
  jMeta.ele('full_title').txt(data.journalTitle);
  jMeta.ele('issn', { media_type: 'electronic' }).txt(data.issn);

  // Issue/Volume
  const jIssue = journal.ele('journal_issue');
  jIssue.ele('publication_date', { media_type: 'online' }).ele('year').txt(
    String(data.publishedAt.getFullYear())
  );
  jIssue.ele('journal_volume').ele('volume').txt(String(data.volumeNumber));
  jIssue.ele('issue').txt(String(data.issueNumber));

  // Article
  const jArticle = journal.ele('journal_article', { publication_type: 'full_text' });

  // Title
  const titles = jArticle.ele('titles');
  titles.ele('title').txt(data.title);

  // Authors (JATS-style contributors)
  const contributors = jArticle.ele('contributors');
  data.authors.forEach((author) => {
    const person = contributors.ele('person_name', {
      contributor_role: 'author',
      sequence: author.sequence,
    });
    person.ele('given_name').txt(author.firstName);
    person.ele('surname').txt(author.lastName);
    if (author.orcid) {
      person
        .ele('ORCID', { authenticated: 'false' })
        .txt(`https://orcid.org/${author.orcid}`);
    }
  });

  // Abstract (JATS abstract format)
  const jatsAbstract = jArticle
    .ele('jats:abstract', { xmlns: 'http://www.ncbi.nlm.nih.gov/JATS1' });
  jatsAbstract.ele('jats:p').txt(data.abstract);

  // Publication date
  const pubDate = jArticle.ele('publication_date', { media_type: 'online' });
  pubDate.ele('year').txt(String(data.publishedAt.getFullYear()));
  pubDate.ele('month').txt(String(data.publishedAt.getMonth() + 1).padStart(2, '0'));
  pubDate.ele('day').txt(String(data.publishedAt.getDate()).padStart(2, '0'));

  // Pages
  const pages = jArticle.ele('pages');
  pages.ele('first_page').txt(String(data.startPage));
  pages.ele('last_page').txt(String(data.endPage));

  // DOI data (landing URL)
  const doiData = jArticle.ele('doi_data');
  doiData.ele('doi').txt(doi);
  doiData.ele('resource').txt(data.articleUrl);

  // Citation list
  if (data.references && data.references.length > 0) {
    const citList = jArticle.ele('citation_list');
    data.references.forEach((ref, idx) => {
      citList
        .ele('citation', { key: `ref${idx + 1}` })
        .ele('unstructured_citation')
        .txt(ref);
    });
  }

  return doc.end({ prettyPrint: true });
}
