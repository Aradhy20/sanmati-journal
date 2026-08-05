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

        <title inertia>Sanmati Spectrum of Knowledge</title>

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

        <!-- Performance: DNS prefetch & preconnect for external domains -->
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link rel="dns-prefetch" href="//www.googletagmanager.com">
        <link rel="dns-prefetch" href="//www.google-analytics.com">

        <!-- LCP Preload: Logo WebP format for fast paint -->
        <link rel="preload" as="image" href="/logo.webp" type="image/webp" fetchpriority="high">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">

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
