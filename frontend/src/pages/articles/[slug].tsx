import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

interface Author {
  user: {
    firstName: string;
    lastName: string;
    affiliation: string;
    orcid?: string | null;
  };
  authorOrder: number;
  isCorresponding: boolean;
}

interface Issue {
  issueNumber: number;
  title?: string | null;
  publishedAt?: string | null;
  volume: {
    volumeNumber: number;
    year: number;
  };
}

interface Article {
  id: string;
  doi: string;
  startPage: number;
  endPage: number;
  pdfUrl: string;
  viewsCount: number;
  downloadsCount: number;
  citationCount: number;
  referencesList: string[];
  createdAt: string;
  updatedAt: string;
  issue: Issue;
  manuscript: {
    title: string;
    abstract: string;
    keywords: string[];
    authors: Author[];
  };
}

const CITATION_STYLES = ['APA', 'MLA', 'Chicago', 'BibTeX', 'Vancouver'] as const;
type CitStyle = (typeof CITATION_STYLES)[number];

function formatCitation(article: Article, style: CitStyle): string {
  const firstAuthor = article.manuscript.authors[0]?.user;
  const year = article.issue.publishedAt
    ? new Date(article.issue.publishedAt).getFullYear()
    : article.issue.volume.year;
  const lastName = firstAuthor?.lastName || 'Unknown';
  const firstName = firstAuthor?.firstName || '';
  const title = article.manuscript.title;
  const journal = 'Sanmati Spectrum of Knowledge';
  const vol = article.issue.volume.volumeNumber;
  const iss = article.issue.issueNumber;
  const pages = `${article.startPage}–${article.endPage}`;
  const doi = `https://doi.org/${article.doi}`;

  switch (style) {
    case 'APA':
      return `${lastName}, ${firstName.charAt(0)}. (${year}). ${title}. *${journal}*, *${vol}*(${iss}), ${pages}. ${doi}`;
    case 'MLA':
      return `${lastName}, ${firstName}. "${title}." *${journal}*, vol. ${vol}, no. ${iss}, ${year}, pp. ${pages}, ${doi}.`;
    case 'Chicago':
      return `${lastName}, ${firstName}. "${title}." *${journal}* ${vol}, no. ${iss} (${year}): ${pages}. ${doi}.`;
    case 'BibTeX':
      return `@article{${lastName.toLowerCase()}${year},\n  author = {${lastName}, ${firstName}},\n  title = {${title}},\n  journal = {${journal}},\n  year = {${year}},\n  volume = {${vol}},\n  number = {${iss}},\n  pages = {${pages}},\n  doi = {${article.doi}}\n}`;
    case 'Vancouver':
      return `${lastName} ${firstName.charAt(0)}. ${title}. ${journal}. ${year};${vol}(${iss}):${pages}. doi:${article.doi}`;
  }
}

export default function ArticlePage({ article }: { article: Article }) {
  const [selectedStyle, setSelectedStyle] = useState<CitStyle>('APA');
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d0d1a] text-white">
        <p>Article not found.</p>
      </div>
    );
  }

  const primaryAuthor = article.manuscript.authors[0]?.user;
  const allAuthors = article.manuscript.authors
    .sort((a, b) => a.authorOrder - b.authorOrder)
    .map((a) => `${a.user.firstName} ${a.user.lastName}`)
    .join(', ');

  const publishedDate = article.issue.publishedAt
    ? new Date(article.issue.publishedAt).toLocaleDateString('en-GB', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : String(article.issue.volume.year);

  const citation = formatCitation(article, selectedStyle);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: article.manuscript.title,
    abstract: article.manuscript.abstract,
    author: article.manuscript.authors.map((a) => ({
      '@type': 'Person',
      name: `${a.user.firstName} ${a.user.lastName}`,
      affiliation: { '@type': 'Organization', name: a.user.affiliation },
      ...(a.user.orcid ? { identifier: `https://orcid.org/${a.user.orcid}` } : {}),
    })),
    datePublished: article.issue.publishedAt || String(article.issue.volume.year),
    publisher: {
      '@type': 'Organization',
      name: 'Sanmati Spectrum Publications',
      url: 'https://sanmatijournal.in',
    },
    isPartOf: {
      '@type': 'PublicationIssue',
      issueNumber: article.issue.issueNumber,
      isPartOf: {
        '@type': 'PublicationVolume',
        volumeNumber: article.issue.volume.volumeNumber,
        isPartOf: {
          '@type': 'Periodical',
          name: 'Sanmati Spectrum of Knowledge',
          issn: process.env.NEXT_PUBLIC_JOURNAL_ISSN || '0000-0000',
        },
      },
    },
    pageStart: String(article.startPage),
    pageEnd: String(article.endPage),
    sameAs: `https://doi.org/${article.doi}`,
    url: `https://sanmatijournal.in/articles/${article.id}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTrack = async (isDownload: boolean) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, isDownload }),
    }).catch(() => {}); // Fire-and-forget
  };

  return (
    <>
      <Head>
        {/* Standard SEO */}
        <title>{article.manuscript.title} | Sanmati Journal</title>
        <meta name="description" content={article.manuscript.abstract.substring(0, 160)} />
        <link rel="canonical" href={`https://sanmatijournal.in/articles/${article.id}`} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.manuscript.title} />
        <meta property="og:description" content={article.manuscript.abstract.substring(0, 160)} />
        <meta property="og:url" content={`https://sanmatijournal.in/articles/${article.id}`} />
        <meta property="og:site_name" content="Sanmati Spectrum of Knowledge" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.manuscript.title} />
        <meta name="twitter:description" content={article.manuscript.abstract.substring(0, 160)} />

        {/* ── Google Scholar / Highwire Press Meta Tags ── */}
        <meta name="citation_title" content={article.manuscript.title} />
        {article.manuscript.authors.map((a, i) => (
          <meta key={i} name="citation_author" content={`${a.user.lastName}, ${a.user.firstName}`} />
        ))}
        {article.manuscript.authors.map((a, i) =>
          a.user.affiliation ? (
            <meta key={`aff-${i}`} name="citation_author_institution" content={a.user.affiliation} />
          ) : null
        )}
        <meta name="citation_journal_title" content="Sanmati Spectrum of Knowledge" />
        <meta name="citation_issn" content={process.env.NEXT_PUBLIC_JOURNAL_ISSN || '0000-0000'} />
        <meta name="citation_volume" content={String(article.issue.volume.volumeNumber)} />
        <meta name="citation_issue" content={String(article.issue.issueNumber)} />
        <meta name="citation_firstpage" content={String(article.startPage)} />
        <meta name="citation_lastpage" content={String(article.endPage)} />
        <meta
          name="citation_publication_date"
          content={
            article.issue.publishedAt
              ? new Date(article.issue.publishedAt).toISOString().split('T')[0].replace(/-/g, '/')
              : String(article.issue.volume.year)
          }
        />
        <meta name="citation_doi" content={article.doi} />
        <meta
          name="citation_abstract_html_url"
          content={`https://sanmatijournal.in/articles/${article.id}`}
        />
        {article.pdfUrl && (
          <meta name="citation_pdf_url" content={article.pdfUrl} />
        )}
        {article.manuscript.keywords.map((kw, i) => (
          <meta key={`kw-${i}`} name="citation_keywords" content={kw} />
        ))}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div style={{ fontFamily: "'Inter', sans-serif", background: '#f9f8ff', minHeight: '100vh' }}>

        {/* ── Journal Header Banner ── */}
        <header style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          color: 'white',
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '18px' }}>
              Sanmati <span style={{ color: '#a78bfa' }}>Spectrum</span>
            </div>
            <div style={{ fontSize: '11px', color: '#a0aec0', letterSpacing: '0.5px' }}>
              Peer-Reviewed Academic Journal
            </div>
          </a>
          <nav style={{ display: 'flex', gap: '24px' }}>
            {['Browse', 'Submit', 'For Reviewers', 'About'].map((item) => (
              <a key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}
                style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '14px' }}
              >{item}</a>
            ))}
          </nav>
        </header>

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" style={{ background: '#fff', borderBottom: '1px solid #e8e4f8', padding: '10px 40px' }}>
          <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', fontSize: '13px', color: '#7c3aed' }}>
            <li><a href="/" style={{ color: '#7c3aed' }}>Home</a></li>
            <li style={{ color: '#9ca3af' }}>›</li>
            <li><a href={`/volume/${article.issue.volume.volumeNumber}`} style={{ color: '#7c3aed' }}>
              Vol. {article.issue.volume.volumeNumber}
            </a></li>
            <li style={{ color: '#9ca3af' }}>›</li>
            <li style={{ color: '#374151' }}>Issue {article.issue.issueNumber}</li>
          </ol>
        </nav>

        <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>

          {/* ── Article Header ── */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 24px rgba(124,58,237,0.08)',
            border: '1px solid #ede9fe',
            marginBottom: '24px',
          }}>
            {/* Access badge */}
            <div style={{ marginBottom: '16px' }}>
              <span style={{
                background: '#ecfdf5', color: '#065f46', fontSize: '11px',
                fontWeight: 600, padding: '4px 10px', borderRadius: '20px',
                border: '1px solid #a7f3d0', textTransform: 'uppercase', letterSpacing: '0.5px'
              }}>
                ✓ Open Access
              </span>
              <span style={{
                background: '#eff6ff', color: '#1d4ed8', fontSize: '11px',
                fontWeight: 600, padding: '4px 10px', borderRadius: '20px',
                border: '1px solid #bfdbfe', marginLeft: '8px',
                textTransform: 'uppercase', letterSpacing: '0.5px'
              }}>
                CC BY 4.0
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '26px', fontWeight: 700, color: '#1a1a2e',
              lineHeight: 1.35, marginBottom: '16px'
            }}>
              {article.manuscript.title}
            </h1>

            <div style={{ fontSize: '15px', color: '#4b5563', marginBottom: '12px' }}>
              {article.manuscript.authors.map((a, i) => (
                <span key={i}>
                  {i > 0 && ', '}
                  <span style={{ color: '#7c3aed', fontWeight: 500 }}>
                    {a.user.firstName} {a.user.lastName}
                  </span>
                  {a.isCorresponding && <sup title="Corresponding author">✉</sup>}
                  {a.user.orcid && (
                    <a
                      href={`https://orcid.org/${a.user.orcid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`ORCID: ${a.user.orcid}`}
                      style={{ marginLeft: '4px', fontSize: '12px' }}
                    >
                      🆔
                    </a>
                  )}
                </span>
              ))}
            </div>

            <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
              {Array.from(new Set(article.manuscript.authors.map((a) => a.user.affiliation))).join('; ')}
            </div>

            {/* Meta bar */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '16px',
              padding: '12px 16px', background: '#f5f3ff',
              borderRadius: '10px', fontSize: '13px', color: '#5b21b6',
            }}>
              <span>📅 Published: <strong>{publishedDate}</strong></span>
              <span>📖 Vol. {article.issue.volume.volumeNumber}, Issue {article.issue.issueNumber}</span>
              <span>📄 pp. {article.startPage}–{article.endPage}</span>
              <span>👁 {article.viewsCount} views</span>
              <span>⬇ {article.downloadsCount} downloads</span>
              {article.citationCount > 0 && <span>🔗 {article.citationCount} citations</span>}
            </div>

            {/* DOI */}
            <div style={{ marginTop: '16px', fontSize: '13px' }}>
              <span style={{ color: '#6b7280' }}>DOI: </span>
              <a
                href={`https://doi.org/${article.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#7c3aed', fontWeight: 500 }}
              >
                {article.doi}
              </a>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
              <a
                href={article.pdfUrl}
                onClick={() => handleTrack(true)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                  color: 'white', padding: '10px 24px',
                  borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '14px',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  boxShadow: '0 4px 12px rgba(124,58,237,0.3)',
                  transition: 'transform 0.15s',
                }}
              >
                ⬇ Download PDF
              </a>
              <button
                onClick={() => handleTrack(false)}
                style={{
                  background: 'white', color: '#7c3aed',
                  border: '2px solid #7c3aed', padding: '10px 24px',
                  borderRadius: '8px', fontWeight: 600, fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                🔗 Share Article
              </button>
            </div>
          </div>

          {/* ── Abstract ── */}
          <section aria-labelledby="abstract-heading" style={{
            background: 'white', borderRadius: '16px',
            padding: '32px 40px', marginBottom: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            border: '1px solid #ede9fe',
          }}>
            <h2 id="abstract-heading" style={{
              fontFamily: "'Outfit', sans-serif", fontSize: '18px',
              fontWeight: 700, color: '#1a1a2e', marginBottom: '16px'
            }}>Abstract</h2>
            <p style={{ lineHeight: 1.8, color: '#374151', fontSize: '15px' }}>
              {article.manuscript.abstract}
            </p>

            {article.manuscript.keywords.length > 0 && (
              <div style={{ marginTop: '20px' }}>
                <strong style={{ fontSize: '13px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Keywords:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {article.manuscript.keywords.map((kw, i) => (
                    <span key={i} style={{
                      background: '#eff6ff', color: '#1d4ed8',
                      padding: '4px 12px', borderRadius: '20px', fontSize: '13px',
                      border: '1px solid #bfdbfe'
                    }}>{kw}</span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ── Citation Widget ── */}
          <section aria-labelledby="cite-heading" style={{
            background: 'white', borderRadius: '16px',
            padding: '32px 40px', marginBottom: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            border: '1px solid #ede9fe',
          }}>
            <h2 id="cite-heading" style={{
              fontFamily: "'Outfit', sans-serif", fontSize: '18px',
              fontWeight: 700, color: '#1a1a2e', marginBottom: '20px'
            }}>Cite this Article</h2>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {CITATION_STYLES.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  style={{
                    padding: '6px 16px', borderRadius: '20px', fontSize: '13px',
                    fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s',
                    background: selectedStyle === style ? '#7c3aed' : 'white',
                    color: selectedStyle === style ? 'white' : '#7c3aed',
                    border: '2px solid #7c3aed',
                  }}
                >
                  {style}
                </button>
              ))}
            </div>

            <pre style={{
              background: '#f5f3ff', border: '1px solid #ddd6fe',
              borderRadius: '10px', padding: '16px',
              fontSize: '13px', color: '#374151', whiteSpace: 'pre-wrap',
              fontFamily: selectedStyle === 'BibTeX' ? 'monospace' : 'inherit',
              lineHeight: 1.7
            }}>
              {citation}
            </pre>

            <button
              onClick={handleCopy}
              style={{
                marginTop: '12px', padding: '8px 20px',
                background: copied ? '#10b981' : '#7c3aed',
                color: 'white', border: 'none', borderRadius: '8px',
                cursor: 'pointer', fontWeight: 600, fontSize: '13px',
                transition: 'background 0.3s',
              }}
            >
              {copied ? '✓ Copied!' : '📋 Copy Citation'}
            </button>
          </section>

          {/* ── References ── */}
          {article.referencesList.length > 0 && (
            <section aria-labelledby="references-heading" style={{
              background: 'white', borderRadius: '16px',
              padding: '32px 40px', marginBottom: '24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              border: '1px solid #ede9fe',
            }}>
              <h2 id="references-heading" style={{
                fontFamily: "'Outfit', sans-serif", fontSize: '18px',
                fontWeight: 700, color: '#1a1a2e', marginBottom: '20px'
              }}>References</h2>
              <ol style={{ paddingLeft: '20px' }}>
                {article.referencesList.map((ref, i) => (
                  <li key={i} style={{
                    fontSize: '13px', color: '#4b5563',
                    marginBottom: '10px', lineHeight: 1.6
                  }}>
                    {ref}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </main>

        {/* ── Footer ── */}
        <footer style={{
          background: '#1a1a2e', color: '#9ca3af',
          textAlign: 'center', padding: '32px 40px', fontSize: '13px'
        }}>
          <p style={{ marginBottom: '8px', fontFamily: "'Outfit', sans-serif", color: 'white', fontWeight: 600 }}>
            Sanmati Spectrum of Knowledge & Emerging Discourse
          </p>
          <p>© {new Date().getFullYear()} Sanmati Spectrum Publications · Open Access · CC BY 4.0</p>
          <p style={{ marginTop: '8px' }}>
            <a href="https://sanmatijournal.in" style={{ color: '#a78bfa' }}>sanmatijournal.in</a>
            {' · '}
            <a href="/api/indexing/oai?verb=Identify" style={{ color: '#a78bfa' }}>OAI-PMH</a>
            {' · '}
            <a href="/sitemap-articles.xml" style={{ color: '#a78bfa' }}>Sitemap</a>
          </p>
        </footer>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const apiUrl = process.env.API_URL || 'http://localhost:4000';
    const res = await fetch(`${apiUrl}/api/manuscripts/${params?.slug}`);
    if (!res.ok) return { notFound: true };

    const article = await res.json();
    return { props: { article } };
  } catch {
    return { notFound: true };
  }
};
