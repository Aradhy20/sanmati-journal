import { Head, usePage } from '@inertiajs/react';

export default function Seo({ title, description, keywords, image, type = 'website', author, publishedTime, jsonLd, aiSummary }) {
    const siteName = "Sanmati Spectrum of Knowledge";
    const defaultDescription = "Top-ranking research journal in India (Impact Factor 5.3). Publish your research paper fast. A high-authority, peer-reviewed multidisciplinary academic journal indexing high-quality research and books.";
    const defaultKeywords = "peer reviewed journal India, multidisciplinary research journal, publish research paper India, international journal India, sanmati spectrum of knowledge, academic publishing, open access journal";
    const defaultImage = "/logo.jpg";
    const siteUrl = "https://sanmatijournal.in";

    const { url } = usePage();
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const finalDescription = description || aiSummary || defaultDescription;
    const finalKeywords = keywords || defaultKeywords;
    const finalImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}${defaultImage}`;
    const canonicalUrl = `${siteUrl}${url}`;

    // Default JSON-LD for Organization / Journal
    const defaultJsonLd = {
        "@context": "https://schema.org",
        "@type": "AcademicJournal",
        "name": siteName,
        "url": siteUrl,
        "description": defaultDescription,
        "issn": "3108-1819",
        "publisher": {
            "@type": "Organization",
            "name": "Sanmati Publication",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.jpg`
            }
        }
    };

    // Breadcrumb Schema
    const breadcrumbJsonLd = jsonLd?.breadcrumb ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLd.breadcrumb.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url ? (item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`) : undefined
        }))
    } : null;

    return (
        <Head>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            {aiSummary && <meta name="ai-agent-summary" content={aiSummary} />}
            {aiSummary && <meta name="summary" content={aiSummary} />}
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={finalKeywords} />
            <meta name="author" content={author || "Sanmati Journal"} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />

            {/* Article Specific (for Google Scholar) */}
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd?.schema || jsonLd || defaultJsonLd)}
            </script>
            {breadcrumbJsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbJsonLd)}
                </script>
            )}
        </Head>
    );
}
