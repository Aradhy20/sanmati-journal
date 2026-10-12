import { Head, usePage } from '@inertiajs/react';

export default function Seo({
    title,
    description,
    keywords,
    image,
    type = 'website',
    author,
    publishedTime,
    jsonLd,
    aiSummary
}) {
    const siteName = "Sanmati Spectrum of Knowledge & Emerging Discourse";
    const defaultDescription = "International peer-reviewed multidisciplinary research journal (ISSN 3108-1819). Publish research papers fast in India with CrossRef DOI indexing, open access, and COPE publication ethics.";
    const defaultKeywords = "UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal 3108-1819, Open Access Journal, Research Publication, Academic Journal, International Journal, Research Paper Publication";
    const defaultImage = "/images/seo/sanmati-journal-og.webp";
    const siteUrl = "https://sanmatijournal.in";

    const { url } = usePage();
    const fullTitle = title ? `${title} | Sanmati Spectrum` : siteName;
    const finalDescription = description || aiSummary || defaultDescription;
    const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
    const finalImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}${defaultImage}`;
    const canonicalUrl = `${siteUrl}${url.split('?')[0]}`;

    // 1. Organization (Publisher) Schema
    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Sanmati Education & Research Foundation of India",
        "alternateName": "Sanmati Education and Research Foundation of India",
        "url": siteUrl,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/logo.webp`,
            "width": 512,
            "height": 512
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9870713912",
            "contactType": "editorial & foundation office",
            "email": "sanmatijournal@gmail.com",
            "availableLanguage": ["English", "Hindi"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "B-002, Faculty Block, TMU Campus, Teerthanker Mahaveer University",
            "addressLocality": "Moradabad",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "244001",
            "addressCountry": "IN"
        }
    };

    // 2. WebSite Schema with SearchAction
    const websiteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sanmati Journal",
        "alternateName": "Sanmati Spectrum of Knowledge",
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    // 3. AcademicJournal Schema
    const journalJsonLd = {
        "@context": "https://schema.org",
        "@type": "AcademicJournal",
        "name": siteName,
        "alternateName": "Sanmati Spectrum Journal",
        "url": siteUrl,
        "description": defaultDescription,
        "issn": "3108-1819",
        "publisher": organizationJsonLd
    };

    // 4. Breadcrumb Schema
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
            <link rel="alternate" type="application/rss+xml" title="Sanmati Spectrum Research Feed" href={`${siteUrl}/rss.xml`} />

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

            {/* Google Scholar Metadata */}
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}

            {/* JSON-LD Schemas */}
            <script type="application/ld+json">
                {JSON.stringify(organizationJsonLd)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteJsonLd)}
            </script>
            {Array.isArray(jsonLd) ? (
                jsonLd.map((schemaItem, idx) => (
                    <script key={idx} type="application/ld+json">
                        {JSON.stringify(schemaItem)}
                    </script>
                ))
            ) : (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd?.schema || journalJsonLd)}
                </script>
            )}
            {!Array.isArray(jsonLd) && breadcrumbJsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbJsonLd)}
                </script>
            )}
        </Head>
    );
}
