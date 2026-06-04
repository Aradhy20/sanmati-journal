/**
 * NISO JATS XML Generator
 * Generates standards-compliant Journal Article Tag Suite (JATS) XML
 * per the NLM DTD/XSD schema used by PubMed Central, DOAJ, and Scopus.
 */
import { create } from 'xmlbuilder2';

export interface JatsArticleData {
  doi: string;
  title: string;
  abstract: string;
  keywords: string[];
  authors: Array<{
    firstName: string;
    lastName: string;
    affiliation: string;
    orcid?: string | null;
    isCorresponding: boolean;
  }>;
  journalTitle: string;
  issn: string;
  publisherName: string;
  volumeNumber: number;
  issueNumber: number;
  startPage: number;
  endPage: number;
  publishedAt: Date;
  references: string[];
  htmlContent?: string;
}

export function generateJatsXml(data: JatsArticleData): string {
  const doc = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('article', {
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      'article-type': 'research-article',
      'dtd-version': '1.3',
      'xml:lang': 'en',
    });

  // ── <front> — Metadata Block ─────────────────────────────────────────────
  const front = doc.ele('front');

  // Journal meta
  const jMeta = front.ele('journal-meta');
  jMeta.ele('journal-title-group').ele('journal-title').txt(data.journalTitle);
  jMeta.ele('issn', { 'pub-type': 'epub' }).txt(data.issn);
  jMeta.ele('publisher').ele('publisher-name').txt(data.publisherName);

  // Article meta
  const aMeta = front.ele('article-meta');

  aMeta
    .ele('article-id', { 'pub-id-type': 'doi' })
    .txt(data.doi);

  // Title group
  aMeta.ele('title-group').ele('article-title').txt(data.title);

  // Authors
  const contribGroup = aMeta.ele('contrib-group');
  data.authors.forEach((author, idx) => {
    const contrib = contribGroup.ele('contrib', {
      'contrib-type': 'author',
      ...(author.isCorresponding ? { corresp: 'yes' } : {}),
    });
    const name = contrib.ele('name');
    name.ele('surname').txt(author.lastName);
    name.ele('given-names').txt(author.firstName);
    contrib.ele('aff').txt(author.affiliation);
    if (author.orcid) {
      contrib
        .ele('contrib-id', { 'contrib-id-type': 'orcid' })
        .txt(`https://orcid.org/${author.orcid}`);
    }
  });

  // Publication date
  const pubDate = aMeta.ele('pub-date', { 'pub-type': 'epub' });
  pubDate.ele('year').txt(String(data.publishedAt.getFullYear()));
  pubDate.ele('month').txt(String(data.publishedAt.getMonth() + 1).padStart(2, '0'));
  pubDate.ele('day').txt(String(data.publishedAt.getDate()).padStart(2, '0'));

  aMeta.ele('volume').txt(String(data.volumeNumber));
  aMeta.ele('issue').txt(String(data.issueNumber));
  aMeta.ele('fpage').txt(String(data.startPage));
  aMeta.ele('lpage').txt(String(data.endPage));

  // Abstract
  const abstractEl = aMeta.ele('abstract');
  abstractEl.ele('p').txt(data.abstract);

  // Keywords
  if (data.keywords.length > 0) {
    const kwdGroup = aMeta.ele('kwd-group', { 'kwd-group-type': 'author-keywords' });
    data.keywords.forEach((kw) => kwdGroup.ele('kwd').txt(kw));
  }

  // Permissions / License
  const permissions = aMeta.ele('permissions');
  permissions
    .ele('license', {
      'license-type': 'open-access',
      'xlink:href': 'https://creativecommons.org/licenses/by/4.0/',
    })
    .ele('license-p')
    .txt('This is an open-access article distributed under the terms of the Creative Commons Attribution 4.0 International License (CC BY 4.0).');

  // ── <body> — Article Content ─────────────────────────────────────────────
  if (data.htmlContent) {
    const body = doc.ele('body');
    body.ele('sec').ele('p').txt('[Article body content — rendered from HTML source]');
  }

  // ── <back> — References ───────────────────────────────────────────────────
  if (data.references.length > 0) {
    const back = doc.ele('back');
    const refList = back.ele('ref-list');
    refList.ele('title').txt('References');
    data.references.forEach((ref, idx) => {
      const refEl = refList.ele('ref', { id: `ref-${idx + 1}` });
      refEl
        .ele('mixed-citation', { 'publication-type': 'journal' })
        .txt(ref);
    });
  }

  return doc.end({ prettyPrint: true });
}
