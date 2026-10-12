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
        <link rel="apple-touch-icon" href="/logo.webp">

        <!-- Google Search Console Verification -->
        <meta name="google-site-verification" content="AcQoP-TT7gCtztCxTWO9mxGKdn0OFkRlUIaFKcwzINo" />

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
                $pTitle = data_get($paper, 'title', $defaultTitle);
                $pAbstract = data_get($paper, 'abstract', $pTitle);
                $pKeywords = data_get($paper, 'keywords', 'Research Paper, Academic Journal, ISSN 3108-1819');
                $metaTitle = $pTitle . ' | Sanmati Journal';
                $metaDescription = \Illuminate\Support\Str::limit(strip_tags($pAbstract ?: $defaultDesc), 160);
                $metaKeywords = $pKeywords;
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
                    'basic-info/vision-mission' => ['Vision & Mission | Sanmati Spectrum', 'Our vision to foster cross-disciplinary discourse and empirical inquiry across humanities, sciences, and law.'],
                    'basic-info/objective-scope' => ['Objective & Scope | Sanmati Spectrum', 'Aims and scope covering multidisciplinary research in arts, sciences, commerce, technology, and jurisprudence.'],
                    'basic-info/journal-info' => ['Journal Information | Sanmati Spectrum', 'Key journal metrics, frequency, peer review policy, and open access parameters (ISSN 3108-1819).'],
                    'basic-info/indexing' => ['Journal Indexing & CrossRef Registry | Sanmati Spectrum', 'Official indexing parameters, CrossRef DOI integration, and Google Scholar citation indexing (ISSN 3108-1819).'],
                    'about-foundation' => ['Sanmati Education & Research Foundation of India | Sanmati Journal', 'Sanmati Education & Research Foundation of India promotes education, research and knowledge dissemination through academic and research initiatives.'],
                    'editorial-team/editors' => ['Editorial Leadership & Editors-in-Chief | Sanmati Spectrum', 'Distinguished academic editors and editorial leadership guiding Sanmati Spectrum.'],
                    'editorial-team/editorial-board' => ['Editorial Board & Peer Reviewers | Sanmati Spectrum', 'Meet the international Editorial Board ensuring rigorous double-blind peer review.'],
                    'editorial-team/advisory-board' => ['Advisory Board | Sanmati Spectrum', 'Eminent scholars and visionaries guiding the strategic governance of Sanmati Spectrum.'],
                    'editorial-team/technical-team' => ['Technical Team & Systems | Sanmati Spectrum', 'Technical directorate maintaining digital publishing, DOI resolution, and archival systems.'],
                    'submission-guidelines' => ['Author Submission Guidelines | Sanmati Spectrum', 'Complete author guidelines for preparing and submitting manuscripts for double-blind peer review.'],
                    'submission-guidelines/call-for-papers' => ['Call for Papers 2026 | Submit Research Paper | Sanmati Spectrum', 'Call for original multidisciplinary research papers, review articles, and short communications with fast peer review.'],
                    'submission-guidelines/review-process' => ['Peer Review Process | Sanmati Spectrum', 'Transparent double-blind peer review workflow ensuring scholarly rigor and ethics within 15–30 days.'],
                    'submission-guidelines/areas' => ['Research Areas & Disciplines | Sanmati Spectrum', 'Multidisciplinary research domains eligible for publication across sciences, humanities, commerce, and law.'],
                    'submission-guidelines/publication-charges' => ['Publication Charges & APC Policy | Sanmati Spectrum', 'Transparent Article Processing Charges (APC) and waiver policies for open access research publication.'],
                    'submission-guidelines/important-info' => ['Important Information for Authors | Sanmati Spectrum', 'Essential manuscript guidelines, file formats, ethics criteria, and author responsibilities.'],
                    'publication-policy/ethics' => ['Publication Ethics & COPE Compliance | Sanmati Spectrum', 'Strict publication ethics and malpractice statements aligned with COPE guidelines.'],
                    'publication-policy/plagiarism' => ['Plagiarism Policy & Similarity Screening | Sanmati Spectrum', 'Zero tolerance plagiarism guidelines, similarity index thresholds under 10%, and verification procedures.'],
                    'publication-policy/copyright' => ['Copyright & Open Access Policy | Sanmati Spectrum', 'Creative Commons Attribution (CC-BY 4.0) open access license terms for published research.'],
                    'publication-policy/peer-review' => ['Peer Review Policy & Integrity | Sanmati Spectrum', 'Rigorous double-blind peer review evaluation criteria and ethical code of conduct.'],
                    'reviewer-guidelines' => ['Reviewer Guidelines & Evaluation Criteria | Sanmati Spectrum', 'Standards, evaluation rubrics, and confidentiality requirements for double-blind peer reviewers.'],
                    'archive' => ['Research Archive & Published Issues | Sanmati Spectrum', 'Browse all published volumes, issues, and peer-reviewed articles of Sanmati Spectrum.'],
                    'current-issue' => ['Current Published Issue | Sanmati Spectrum', 'Read the latest peer-reviewed research papers published in Volume 2, Issue 2 of Sanmati Spectrum.'],
                    'blog' => ['Academic Research Blog & Guides | Sanmati Spectrum', 'Guides on manuscript submission, UGC CARE ethics, APA/IEEE citations, and publishing in India.'],
                    'downloads' => ['Author Toolkit & Document Downloads | Sanmati Spectrum', 'Download official manuscript templates, copyright assignment forms, and submission checklists.'],
                    'contact' => ['Contact Editorial Directorate | Sanmati Spectrum', 'Get in touch with the editorial team and administrative secretariat of Sanmati Spectrum.'],
                    'book-publication' => ['Academic Book & Monograph Publication | Sanmati Spectrum', 'Publish academic edited volumes, conference proceedings, and scholarly monographs with ISBN.'],
                    'track-manuscript' => ['Track Manuscript Status | Sanmati Spectrum', 'Track real-time peer review status and editorial lifecycle of your submitted manuscript.'],
                    'announcements/international-seminar-gen-z-2026' => ['International Seminar on Gen Z, Education, Digital Culture & Innovation | Sanmati Journal', 'International seminar and research paper presentation on GEN Z: Education, Digital Culture, Innovation and Social Transformation organized by SERFI & Bhagwan Adinath College of Education on 05 September 2026.'],
                    'announcements' => ['Official Academic Announcements & Conferences | Sanmati Spectrum', 'Official academic announcements, calls for papers, international seminars, and conference notifications from Sanmati Spectrum of Knowledge.']
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
            @php
                $gsTitle = data_get($paper, 'title', '');
                $gsAuthors = data_get($paper, 'authors', '');
                $gsCreated = data_get($paper, 'created_at');
                $gsDate = is_string($gsCreated) ? date('Y/m/d', strtotime($gsCreated)) : ($gsCreated instanceof \DateTimeInterface ? $gsCreated->format('Y/m/d') : date('Y/m/d'));
                $gsId = data_get($paper, 'id', '');
                $gsDoi = data_get($paper, 'doi', '');
                $gsKeywords = data_get($paper, 'keywords', '');
            @endphp
            <meta name="citation_title" content="{{ $gsTitle }}">
            @if($gsAuthors)
                @foreach(preg_split('/[,&|]| and /i', $gsAuthors) as $authorName)
                    @if(trim($authorName))
                        <meta name="citation_author" content="{{ trim($authorName) }}">
                    @endif
                @endforeach
            @endif
            <meta name="citation_journal_title" content="Sanmati Spectrum of Knowledge & Emerging Discourse">
            <meta name="citation_issn" content="3108-1819">
            <meta name="citation_publication_date" content="{{ $gsDate }}">
            @if(!empty(data_get($paper, 'file_url')) || !empty(data_get($paper, 'file_path')) || (data_get($paper, 'issue.volume') !== null && (int)data_get($paper, 'issue.volume') < 3))
                <meta name="citation_pdf_url" content="https://sanmatijournal.in/download/paper/{{ $gsId }}">
            @endif
            @if(!empty(data_get($paper, 'issue.volume')))
                <meta name="citation_volume" content="{{ data_get($paper, 'issue.volume') }}">
            @endif
            @if(!empty(data_get($paper, 'issue.number')))
                <meta name="citation_issue" content="{{ data_get($paper, 'issue.number') }}">
            @endif
            @if(!empty($gsDoi))
                <meta name="citation_doi" content="{{ preg_replace('/^https?:\/\/(dx\.)?doi\.org\//i', '', $gsDoi) }}">
            @endif
            @if(!empty($gsKeywords))
                <meta name="citation_keywords" content="{{ $gsKeywords }}">
            @endif
            <meta name="DC.title" content="{{ $gsTitle }}">
            @if($gsAuthors)
                <meta name="DC.creator" content="{{ $gsAuthors }}">
            @endif
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
                        "telephone": "+91-9870713912",
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
        @php
            $pTitle = data_get($paper, 'title', '');
            $pAbstract = data_get($paper, 'abstract', '');
            $pId = data_get($paper, 'id', '');
            $pDoi = data_get($paper, 'doi', '');
            $pCreated = data_get($paper, 'created_at');
            $pDateStr = is_string($pCreated) ? $pCreated : ($pCreated instanceof \DateTimeInterface ? $pCreated->format('c') : now()->format('c'));
        @endphp
        <script type="application/ld+json" nonce="{{ Vite::cspNonce() }}">
        {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": {!! json_encode($pTitle) !!},
            "name": {!! json_encode($pTitle) !!},
            "abstract": {!! json_encode($pAbstract ?: '') !!},
            "description": {!! json_encode(\Illuminate\Support\Str::limit(strip_tags($pAbstract ?: $pTitle), 160)) !!},
            "datePublished": {!! json_encode($pDateStr) !!},
            "inLanguage": ["en", "hi"],
            "isAccessibleForFree": true,
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "isPartOf": {
                "@type": "Periodical",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "issn": "3108-1819"
            },
            @if(!empty($pDoi))
            "sameAs": {!! json_encode($pDoi) !!},
            @endif
            "url": {!! json_encode("https://sanmatijournal.in/article/" . $pId) !!},
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

        {{-- Direct preload of Space Grotesk 700 latin WOFF2 for instant H1 LCP paint --}}
        <link rel="preload" as="font" type="font/woff2" crossorigin
              href="https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2">

        {{-- Performance: DNS prefetch & preconnect for external domains --}}
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link rel="dns-prefetch" href="//www.googletagmanager.com">
        <link rel="dns-prefetch" href="//www.google-analytics.com">

        {{-- Fonts: Space Grotesk (Headings) & Inter (Body) loaded asynchronously --}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
        <noscript>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
        </noscript>

        <!-- Initialize Google Tag Manager / GA4 DataLayer early so queued events are never lost -->
        <script nonce="{{ Vite::cspNonce() }}">
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5HWBXKRHF4', { 'send_page_view': false });

            // Deferred Non-blocking Loader for GTM (GTM container executes GA4 without duplicate script fetch)
            (function() {
                var loaded = false;
                function loadAnalytics() {
                    if (loaded) return;
                    loaded = true;

                    var gtmScript = document.createElement('script');
                    gtmScript.async = true;
                    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K4FNSFHK';
                    document.head.appendChild(gtmScript);
                }

                if ('requestIdleCallback' in window) {
                    window.requestIdleCallback(function() { setTimeout(loadAnalytics, 4000); });
                } else {
                    window.addEventListener('load', function() { setTimeout(loadAnalytics, 4000); });
                }

                // Trigger immediately on first user interaction
                ['scroll', 'keydown', 'touchstart', 'click', 'mousemove'].forEach(function(e) {
                    window.addEventListener(e, loadAnalytics, { once: true, passive: true });
                });
            })();
        </script>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased min-h-screen flex flex-col bg-warm-bg">
        <div id="app" data-page="{{ json_encode($page) }}"></div>
    </body>
</html>
