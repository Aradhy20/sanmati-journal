import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

interface Article {
  id: number;
  title: string;
  abstract: string;
  author_name: string;
  doi: string;
  created_at: string;
  issue: {
    journal_name: string;
    issn: string;
  }
}

export default function ArticlePage({ article }: { article: Article }) {
  if (!article) return <div>Loading...</div>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": article.title,
    "abstract": article.abstract,
    "author": {
      "@type": "Person",
      "name": article.author_name
    },
    "datePublished": article.created_at,
    "isPartOf": {
      "@type": "PublicationIssue",
      "name": article.issue?.journal_name || 'Sanmati Journal',
      "issn": article.issue?.issn || 'XXXX-XXXX'
    },
    "identifier": article.doi
  };

  return (
    <div id="main-content" className="max-w-4xl mx-auto p-8">
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.abstract.substring(0, 157) + '...'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://sanmatijournal.in/articles/${article.id}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.abstract.substring(0, 157) + '...'} />
        <meta property="og:url" content={`https://sanmatijournal.in/articles/${article.id}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.abstract.substring(0, 157) + '...'} />

        {/* Preconnect Resource Hints for Phase 3 */}
        <link rel="preconnect" href="https://sanmatijournal.in" />

        {/* JSON-LD Schema.org Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <header role="banner" className="mb-8 border-b pb-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex text-sm text-gray-500 space-x-2">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li>&gt;</li>
            <li><a href={`/volume/${article.issue?.id}`} className="hover:text-blue-600">Volume X</a></li>
            <li>&gt;</li>
            <li aria-current="page" className="text-gray-900">{article.title.substring(0, 30)}...</li>
          </ol>
        </nav>
        
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="text-lg text-gray-600 font-semibold mb-4">{article.author_name}</div>
        
        <div className="flex gap-4 text-sm text-gray-500">
          {article.doi && <span>DOI: <a href={`https://doi.org/${article.doi}`} className="text-blue-600">{article.doi}</a></span>}
          <span>Published: {new Date(article.created_at).toLocaleDateString()}</span>
        </div>
      </header>

      <main>
        <section aria-labelledby="abstract-heading" className="mb-12">
          <h2 id="abstract-heading" className="text-2xl font-bold mb-4">Abstract</h2>
          <p className="leading-relaxed text-gray-800">{article.abstract}</p>
        </section>
      </main>

      {/* Citation Widget placeholder for Phase 5 */}
      <aside aria-label="Citation tools" className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Cite this article</h3>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white border rounded shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">APA</button>
          <button className="px-4 py-2 bg-white border rounded shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">MLA</button>
          <button className="px-4 py-2 bg-white border rounded shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">BibTeX</button>
        </div>
      </aside>
    </div>
  );
}

export const GetStaticPaths = async () => {
  // In a real migration, fetch from /api/articles to get all article slugs
  // For the sake of the migration structure, we fallback to blocking
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const GetStaticProps = async ({ params }: { params: { slug: string } }) => {
  // We fetch directly from the Laravel API running locally
  try {
    const res = await fetch(`http://localhost:8000/api/articles/${params.slug}`);
    if (!res.ok) {
      return { notFound: true };
    }
    const article = await res.json();

    return {
      props: { article },
      revalidate: 1800, // ISR: revalidate every 30 minutes
    };
  } catch (error) {
    return { notFound: true };
  }
};
