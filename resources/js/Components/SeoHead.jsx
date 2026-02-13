import { Head } from '@inertiajs/react';

export default function SeoHead({ title, description, keywords }) {
    const siteName = "Sanmati Journal";
    const defaultDescription = "National Multidisciplinary Peer Reviewed Refereed Journal - Sanmati Spectrum of Knowledge";
    const defaultKeywords = "journal, research, multidisciplinary, peer reviewed, refereed, sanmati, education";

    return (
        <Head>
            <title>{title ? `${title} | ${siteName}` : siteName}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
            <meta property="og:description" content={description || defaultDescription} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
            <meta name="twitter:description" content={description || defaultDescription} />
        </Head>
    );
}
