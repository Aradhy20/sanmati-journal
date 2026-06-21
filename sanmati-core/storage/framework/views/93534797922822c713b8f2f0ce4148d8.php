<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
        <!-- Dark mode init: read localStorage before first paint to avoid FOUC -->
        <script nonce="<?php echo e(Vite::cspNonce()); ?>">
            try { localStorage.removeItem('theme'); document.documentElement.classList.remove('dark'); } catch(e) {}
        </script>
        <link rel="icon" type="image/jpeg" href="/logo.jpg">

        <title inertia><?php echo e(config('app.name', 'Sanmati Journal')); ?> | Spectrum of Knowledge</title>

        <?php if(isset($page['props']['meta'])): ?>
            <meta name="description" content="<?php echo e($page['props']['meta']['description'] ?? 'Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.'); ?>">
            <meta name="robots" content="index, follow, max-image-preview:large">
            <link rel="canonical" href="<?php echo e(url()->current()); ?>">

            
            <meta property="og:title" content="<?php echo e($page['props']['meta']['title'] ?? 'Sanmati Journal | Spectrum of Knowledge'); ?>">
            <meta property="og:description" content="<?php echo e($page['props']['meta']['description'] ?? 'Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.'); ?>">
            <meta property="og:image" content="<?php echo e($page['props']['meta']['image'] ?? url('/logo.jpg')); ?>">
            <meta property="og:type" content="<?php echo e($page['props']['meta']['type'] ?? 'website'); ?>">
            <meta property="og:url" content="<?php echo e(url()->current()); ?>">
            <meta property="og:site_name" content="Sanmati Journal">
            <meta property="og:locale" content="en_IN">

            
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="<?php echo e($page['props']['meta']['title'] ?? 'Sanmati Journal | Spectrum of Knowledge'); ?>">
            <meta name="twitter:description" content="<?php echo e($page['props']['meta']['description'] ?? 'Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.'); ?>">
            <meta name="twitter:image" content="<?php echo e($page['props']['meta']['image'] ?? url('/logo.jpg')); ?>">
        <?php else: ?>
            <meta name="description" content="Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.">
            <meta name="robots" content="index, follow, max-image-preview:large">
            <link rel="canonical" href="<?php echo e(url()->current()); ?>">

            <meta property="og:title" content="Sanmati Journal | Spectrum of Knowledge">
            <meta property="og:description" content="Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.">
            <meta property="og:image" content="<?php echo e(url('/logo.jpg')); ?>">
            <meta property="og:type" content="website">
            <meta property="og:url" content="<?php echo e(url()->current()); ?>">
            <meta property="og:site_name" content="Sanmati Journal">
            <meta property="og:locale" content="en_IN">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="Sanmati Journal | Spectrum of Knowledge">
            <meta name="twitter:description" content="Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.">
            <meta name="twitter:image" content="<?php echo e(url('/logo.jpg')); ?>">
        <?php endif; ?>

        
        <script type="application/ld+json" nonce="<?php echo e(Vite::cspNonce()); ?>">
        {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": "https://sanmatijournal.in/#organization",
                    "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                    "alternateName": "Sanmati Journal",
                    "url": "https://sanmatijournal.in",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://sanmatijournal.in/logo.jpg"
                    },
                    "email": "sanmatijournal@gmail.com",
                    "description": "A peer-reviewed national multidisciplinary research journal indexed with CrossRef DOI and compliant with COPE publication ethics.",
                    "areaServed": "IN"
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

        <!-- Performance: DNS prefetch for external domains -->
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link rel="dns-prefetch" href="//www.googletagmanager.com">
        <link rel="dns-prefetch" href="//www.google-analytics.com">

        <!-- LCP Preload: Logo is the Largest Contentful Paint element -->
        <link rel="preload" as="image" href="/logo.jpg" fetchpriority="high">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">

        <!-- Delayed initialization for third party trackers -->
        <script nonce="<?php echo e(Vite::cspNonce()); ?>">
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
        <?php echo app('Tighten\Ziggy\BladeRouteGenerator')->generate(); ?>
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.jsx']); ?>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
    </head>
    <body class="font-sans antialiased min-h-screen flex flex-col bg-warm-bg">
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4FNSFHK"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>
    </body>
</html>
<?php /**PATH /Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My Drive/sanmati-journal/sanmati-core/resources/views/app.blade.php ENDPATH**/ ?>