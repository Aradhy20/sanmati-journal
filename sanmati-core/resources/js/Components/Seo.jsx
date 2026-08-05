import { Head, usePage } from '@inertiajs/react';

export default function Seo({ title, description, keywords, image, type = 'website', author, publishedTime, jsonLd, aiSummary }) {
    const siteName = "Sanmati Spectrum of Knowledge";
    const defaultDescription = "Top-ranking peer-reviewed multidisciplinary research journal in India (Impact Factor 5.3). Publish research papers fast with CrossRef DOI indexing and COPE publication ethics.";
    const defaultKeywords = "peer reviewed journal India, multidisciplinary research journal, publish research paper India, international journal India, sanmati spectrum of knowledge, academic publishing, open access journal, CrossRef DOI, UGC CARE aligned journal";
    const defaultImage = "/logo.webp";
    const siteUrl = "https://sanmatijournal.in";

    const { url } = usePage();
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const finalDescription = description || aiSummary || defaultDescription;
    const finalKeywords = keywords || defaultKeywords;
    const finalImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}${defaultImage}`;
    const canonicalUrl = `${siteUrl}${url.split('?')[0]}`;

    // Default JSON-LD for Organization / Journal
    const defaultJsonLd = {
        "@context": "https://schema.org",
        "@type": "AcademicJournal",
        "name": siteName,
        "alternateName": "Sanmati Journal",
        "url": siteUrl,
        "description": defaultDescription,
        "issn": "3108-1819",
        "publisher": {
            "@type": "Organization",
            "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.webp`,
                "width": 512,
                "height": 512
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
            "item": item.url ? (item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`) : siteUrl
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
            <meta name="author" content={author || "Sanmati Spectrum of Knowledge"} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title || siteName} />
            <meta property="og:image:type" content={finalImage.endsWith('.webp') ? 'image/webp' : 'image/jpeg'} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />
            <meta name="twitter:image:alt" content={title || siteName} />

            {/* Article Specific (for Google Scholar) */}
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd?.schema || (jsonLd && !jsonLd.breadcrumb ? jsonLd : defaultJsonLd))}
            </script>
            {breadcrumbJsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbJsonLd)}
                </script>
            )}
        </Head>
    );
}
