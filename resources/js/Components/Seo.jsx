import { Head, usePage } from '@inertiajs/react';

export default function Seo({ title, description, keywords, image, type = 'website', author, publishedTime, jsonLd }) {
    const siteName = "Sanmati Spectrum of Knowledge";
    const defaultDescription = "Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.";
    const defaultKeywords = "research journal India, UGC approved journal, publish research paper fast, peer-reviewed journal, academic publishing, open access, sanmati spectrum";
    const defaultImage = "/logo.jpg";
    const siteUrl = "https://sanmatijournal.in";

    const { url } = usePage();
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const finalDescription = description || defaultDescription;
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
            "name": "JTS Publications",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.jpg`
            }
        }
    };

    return (
        <Head>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
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
                {JSON.stringify(jsonLd || defaultJsonLd)}
            </script>
        </Head>
    );
}
