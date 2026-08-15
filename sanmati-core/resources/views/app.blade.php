<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Dark mode init: read localStorage before first paint to avoid FOUC -->
        <script nonce="{{ Vite::cspNonce() }}">
            try { localStorage.removeItem('theme'); document.documentElement.classList.remove('dark'); } catch(e) {}
        </script>
        <!-- Favicon & Web Manifest -->
        <link rel="manifest" href="/manifest.json">
        <meta name="theme-color" content="#8B1538">
        <link rel="icon" type="image/webp" href="/logo.webp">
        <link rel="shortcut icon" href="/logo.jpg">
        <link rel="apple-touch-icon" href="/logo.webp">

        @php
            $pageProps = $page['props'] ?? [];
            $paper = $pageProps['paper'] ?? ($paper ?? null);
            $post = $pageProps['post'] ?? ($post ?? null);
            $customMeta = $pageProps['meta'] ?? ($meta ?? []);

            $currentPath = trim(request()->path(), '/');

            // Baseline Journal Metadata
            $defaultTitle = 'Sanmati Spectrum of Knowledge & Emerging Discourse (ISSN 3108-1819)';
            $defaultDesc = 'International peer-reviewed multidisciplinary research journal (ISSN 3108-1819). Publish research papers fast in India with CrossRef DOI indexing, open access, and COPE publication ethics.';
            $defaultImage = 'https://sanmatijournal.in/images/seo/sanmati-journal-og.webp';

            if ($paper) {
                $metaTitle = ($paper->title ?? $defaultTitle) . ' | Sanmati Journal';
                $metaDescription = \Illuminate\Support\Str::limit(strip_tags($paper->abstract ?? $paper->title ?? $defaultDesc), 160);
                $metaKeywords = $paper->keywords ?? 'Research Paper, Academic Journal, ISSN 3108-1819';
                $metaImage = $defaultImage;
            } elseif ($post) {
                $metaTitle = ($post['title'] ?? $defaultTitle) . ' | Sanmati Spectrum Blog';
                $metaDescription = $post['excerpt'] ?? $defaultDesc;
                $metaKeywords = 'Research Guide, Academic Publishing, UGC Guidelines, Citation Styles';
                $metaImage = !empty($post['image']) ? url($post['image']) : $defaultImage;
            } elseif (!empty($customMeta['title'])) {
                $metaTitle = $customMeta['title'];
                $metaDescription = $customMeta['description'] ?? $defaultDesc;
                $metaKeywords = $customMeta['keywords'] ?? 'Academic Journal';
                $metaImage = $customMeta['image'] ?? $defaultImage;
            } else {
                $routeTitles = [
                    'about-journal' => ['About the Journal | Sanmati Spectrum', 'Comprehensive overview of Sanmati Spectrum of Knowledge & Emerging Discourse, an international peer-reviewed multidisciplinary research journal.'],
                    'basic-info/about-journal' => ['About the Journal | Sanmati Spectrum', 'Comprehensive overview of Sanmati Spectrum of Knowledge & Emerging Discourse.'],
                    'basic-info/vision-mission' => ['Vision & Mission | Sanmati Spectrum', 'Our vision to foster cross-disciplinary discourse and empirical inquiry across humanities, sciences, and law.'],
                    'basic-info/objective-scope' => ['Objective & Scope | Sanmati Spectrum', 'Aims and scope covering multidisciplinary research in arts, sciences, commerce, technology, and jurisprudence.'],
                    'basic-info/journal-info' => ['Journal Information | Sanmati Spectrum', 'Key journal metrics, frequency, peer review policy, and open access parameters (ISSN 3108-1819).'],
                    'editorial-team/editors' => ['Editorial Leadership & Editors-in-Chief | Sanmati Spectrum', 'Distinguished academic editors and editorial leadership guiding Sanmati Spectrum.'],
                    'editorial-team/editorial-board' => ['Editorial Board & Peer Reviewers | Sanmati Spectrum', 'Meet the international Editorial Board ensuring rigorous double-blind peer review.'],
                    'editorial-team/advisory-board' => ['Advisory Board | Sanmati Spectrum', 'Eminent scholars and visionaries guiding the strategic governance of Sanmati Spectrum.'],
                    'submission-guidelines' => ['Author Submission Guidelines | Sanmati Spectrum', 'Complete author guidelines for preparing and submitting manuscripts for double-blind peer review.'],
                    'submission-guidelines/call-for-papers' => ['Call for Papers 2026 | Sanmati Spectrum', 'Call for original multidisciplinary research papers, review articles, and short communications.'],
                    'submission-guidelines/review-process' => ['Peer Review Process | Sanmati Spectrum', 'Transparent double-blind peer review workflow ensuring scholarly rigor and ethics.'],
                    'submission-guidelines/areas' => ['Research Areas & Disciplines | Sanmati Spectrum', 'Multidisciplinary research domains eligible for publication in Sanmati Spectrum.'],
                    'publication-policy/ethics' => ['Publication Ethics & COPE Compliance | Sanmati Spectrum', 'Strict publication ethics and malpractice statements aligned with COPE guidelines.'],
                    'publication-policy/plagiarism' => ['Plagiarism Policy | Sanmati Spectrum', 'Zero tolerance plagiarism guidelines, similarity index thresholds, and verification procedures.'],
                    'publication-policy/copyright' => ['Copyright & Open Access Policy | Sanmati Spectrum', 'Creative Commons Attribution (CC-BY 4.0) open access license terms for published research.'],
                    'reviewer-guidelines' => ['Reviewer Guidelines | Sanmati Spectrum', 'Standards and evaluation criteria for double-blind peer reviewers.'],
                    'archive' => ['Research Archive & Published Issues | Sanmati Spectrum', 'Browse all published volumes, issues, and peer-reviewed articles of Sanmati Spectrum.'],
                    'blog' => ['Academic Research Blog & Guides | Sanmati Spectrum', 'Guides on manuscript submission, UGC CARE ethics, APA/IEEE citations, and publishing in India.'],
                    'downloads' => ['Author Toolkit & Document Downloads | Sanmati Spectrum', 'Download official manuscript templates, copyright assignment forms, and submission checklists.'],
                    'contact' => ['Contact Editorial Directorate | Sanmati Spectrum', 'Get in touch with the editorial team and administrative secretariat of Sanmati Spectrum.']
                ];

                if (isset($routeTitles[$currentPath])) {
                    $metaTitle = $routeTitles[$currentPath][0];
                    $metaDescription = $routeTitles[$currentPath][1];
                } else {
                    $metaTitle = $defaultTitle;
                    $metaDescription = $defaultDesc;
                }
                $metaKeywords = 'UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal 3108-1819, Open Access Journal, Academic Journal';
                $metaImage = $defaultImage;
            }

            $rawCanonical = $customMeta['canonical'] ?? url()->current();
            $canonicalUrl = preg_replace('/^https?:\/\/[^\/]+/', 'https://sanmatijournal.in', $rawCanonical);
        @endphp

        <title inertia>{{ $metaTitle }}</title>
        <meta name="description" content="{{ $metaDescription }}">
        <meta name="keywords" content="{{ $metaKeywords }}">
        <meta name="author" content="Sanmati Spectrum of Knowledge">
        <link rel="canonical" href="{{ $canonicalUrl }}">

        <!-- Open Graph / Facebook / WhatsApp -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="{{ $metaTitle }}">
        <meta property="og:description" content="{{ $metaDescription }}">
        <meta property="og:image" content="{{ $metaImage }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:url" content="{{ $canonicalUrl }}">
        <meta property="og:site_name" content="Sanmati Spectrum of Knowledge & Emerging Discourse">
        <meta property="og:locale" content="en_IN">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $metaTitle }}">
        <meta name="twitter:description" content="{{ $metaDescription }}">
        <meta name="twitter:image" content="{{ $metaImage }}">

        <!-- Google Scholar Academic Citation Metadata -->
        @if(isset($paper))
            <meta name="citation_title" content="{{ $paper->title }}">
            @foreach(preg_split('/[,&|]| and /i', $paper->authors) as $authorName)
                @if(trim($authorName))
                    <meta name="citation_author" content="{{ trim($authorName) }}">
                @endif
            @endforeach
            <meta name="citation_journal_title" content="Sanmati Spectrum of Knowledge & Emerging Discourse">
            <meta name="citation_issn" content="3108-1819">
            <meta name="citation_publication_date" content="{{ $paper->created_at ? $paper->created_at->format('Y/m/d') : date('Y/m/d') }}">
            <meta name="citation_pdf_url" content="https://sanmatijournal.in/download/paper/{{ $paper->id }}">
            @if(!empty($paper->doi))
                <meta name="citation_doi" content="{{ $paper->doi }}">
            @endif
            @if(!empty($paper->keywords))
                <meta name="citation_keywords" content="{{ $paper->keywords }}">
            @endif
            <meta name="DC.title" content="{{ $paper->title }}">
            <meta name="DC.creator" content="{{ $paper->authors }}">
            <meta name="DC.publisher" content="Sanmati Spectrum of Knowledge & Emerging Discourse">
        @endif

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

        {{-- Sitewide Base Schema: Organization + WebSite + Periodical + AcademicJournal --}}
        <script type="application/ld+json" nonce="{{ Vite::cspNonce() }}">
        {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": "https://sanmatijournal.in/#organization",
                    "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                    "alternateName": ["Sanmati Journal", "Sanmati Spectrum"],
                    "url": "https://sanmatijournal.in",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://sanmatijournal.in/logo.webp",
                        "width": 512,
                        "height": 512,
                        "caption": "Sanmati Journal Logo"
                    },
                    "email": "sanmatijournal@gmail.com",
                    "description": "A high-authority, peer-reviewed national multidisciplinary research journal indexed with CrossRef DOI (ISSN 3108-1819) and compliant with COPE publication ethics.",
                    "areaServed": "IN",
                    "sameAs": [
                        "https://sanmatijournal.in"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "editorial",
                        "email": "sanmatijournal@gmail.com",
                        "telephone": "+91-8979782949",
                        "availableLanguage": ["English", "Hindi"]
                    }
                },
                {
                    "@type": "WebSite",
                    "@id": "https://sanmatijournal.in/#website",
                    "url": "https://sanmatijournal.in",
                    "name": "Sanmati Journal",
                    "description": "Sanmati Spectrum of Knowledge — India's leading peer-reviewed multidisciplinary academic research journal.",
                    "publisher": { "@id": "https://sanmatijournal.in/#organization" },
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://sanmatijournal.in/api/search?q={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    }
                },
                {
                    "@type": "Periodical",
                    "@id": "https://sanmatijournal.in/#periodical",
                    "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                    "issn": "3108-1819",
                    "url": "https://sanmatijournal.in",
                    "publisher": { "@id": "https://sanmatijournal.in/#organization" },
                    "inLanguage": ["en", "hi"]
                }
            ]
        }
        </script>

        @if(isset($paper))
        <script type="application/ld+json" nonce="{{ Vite::cspNonce() }}">
        {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": {!! json_encode($paper->title) !!},
            "name": {!! json_encode($paper->title) !!},
            "abstract": {!! json_encode($paper->abstract ?? '') !!},
            "description": {!! json_encode(\Illuminate\Support\Str::limit(strip_tags($paper->abstract ?? $paper->title), 160)) !!},
            "datePublished": {!! json_encode($paper->created_at ? $paper->created_at->toISOString() : now()->toISOString()) !!},
            "inLanguage": ["en", "hi"],
            "isAccessibleForFree": true,
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "isPartOf": {
                "@type": "Periodical",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "issn": "3108-1819"
            },
            @if(!empty($paper->doi))
            "sameAs": {!! json_encode($paper->doi) !!},
            @endif
            "url": {!! json_encode("https://sanmatijournal.in/article/" . $paper->id) !!},
            "publisher": {
                "@type": "Organization",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "url": "https://sanmatijournal.in",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://sanmatijournal.in/logo.webp"
                }
            }
        }
        </script>
        @endif

        {{-- ============================================================ --}}
        {{-- PERFORMANCE: CRITICAL RESOURCE PRELOADS                      --}}
        {{-- ============================================================ --}}

        {{-- Preload hero background image on homepage only.               --}}
        {{-- The <picture> tag is inside a React component — the browser   --}}
        {{-- preload scanner cannot discover it. This hint makes the       --}}
        {{-- browser fetch the image in parallel with CSS/JS parsing.      --}}
        @if($currentPath === '')
        {{-- Mobile (≤768px): preload the 35KB variant; desktop: preload the full 169KB --}}
        <link rel="preload" as="image" href="/images/hero-bg-mobile.webp" type="image/webp"
              imagesrcset="/images/hero-bg-mobile.webp 480w, /images/hero-bg.webp 1024w"
              imagesizes="100vw" fetchpriority="high">
        @endif

        {{-- Direct preload of Space Grotesk 700 latin WOFF2.             --}}
        {{-- Skips the 2-RTT Google Fonts chain (fonts.googleapis.com CSS  --}}
        {{-- → fonts.gstatic.com WOFF2). H1 is the LCP element and uses   --}}
        {{-- this exact font weight. Only the latin subset is needed.      --}}
        <link rel="preload" as="font" type="font/woff2" crossorigin
              href="https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVnskPMBBTyJL.woff2">

        {{-- Performance: DNS prefetch & preconnect for external domains --}}
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link rel="dns-prefetch" href="//www.googletagmanager.com">
        <link rel="dns-prefetch" href="//www.google-analytics.com">

        {{-- Fonts: Space Grotesk (Headings) & Inter (Body) loaded asynchronously --}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;600;700&display=swap">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
        <noscript>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
        </noscript>


        <!-- Delayed initialization for third party trackers -->
        <script nonce="{{ Vite::cspNonce() }}">
            window.addEventListener('load', function() {
                setTimeout(function() {
                    // GTM
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-K4FNSFHK');

                    // gtag.js
                    var gt = document.createElement('script');
                    gt.async = true;
                    gt.src = "https://www.googletagmanager.com/gtag/js?id=G-5HWBXKRHF4";
                    document.head.appendChild(gt);

                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-5HWBXKRHF4');
                }, 3500); // Execute fully after 3.5s of page idle
            });
        </script>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased min-h-screen flex flex-col bg-warm-bg">
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4FNSFHK"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        @inertia
    </body>
</html>
