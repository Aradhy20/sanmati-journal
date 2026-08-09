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
        <!-- Favicon & Web Manifest -->
        <link rel="manifest" href="/manifest.json">
        <meta name="theme-color" content="#8B1538">
        <link rel="icon" type="image/webp" href="/logo.webp">
        <link rel="shortcut icon" href="/logo.jpg">
        <link rel="apple-touch-icon" href="/logo.webp">

        <?php
            $metaTitle = $meta['title'] ?? 'Sanmati Spectrum of Knowledge & Emerging Discourse (ISSN 3108-1819)';
            $metaDescription = $meta['description'] ?? 'International peer-reviewed multidisciplinary research journal (ISSN 3108-1819). Publish research papers fast in India with CrossRef DOI indexing, open access, and COPE publication ethics.';
            $metaKeywords = $meta['keywords'] ?? 'UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal 3108-1819, Open Access Journal, Academic Journal';
            $metaImage = $meta['image'] ?? 'https://sanmatijournal.in/logo.webp';
            $rawCanonical = $meta['canonical'] ?? url()->current();
            $canonicalUrl = preg_replace('/^https?:\/\/[^\/]+/', 'https://sanmatijournal.in', $rawCanonical);
        ?>

        <title inertia><?php echo e($metaTitle); ?></title>
        <meta name="description" content="<?php echo e($metaDescription); ?>">
        <meta name="keywords" content="<?php echo e($metaKeywords); ?>">
        <meta name="author" content="Sanmati Spectrum of Knowledge">
        <link rel="canonical" href="<?php echo e($canonicalUrl); ?>">

        <!-- Open Graph / Facebook / WhatsApp -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="<?php echo e($metaTitle); ?>">
        <meta property="og:description" content="<?php echo e($metaDescription); ?>">
        <meta property="og:image" content="<?php echo e($metaImage); ?>">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:url" content="<?php echo e($canonicalUrl); ?>">
        <meta property="og:site_name" content="Sanmati Spectrum of Knowledge & Emerging Discourse">
        <meta property="og:locale" content="en_IN">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="<?php echo e($metaTitle); ?>">
        <meta name="twitter:description" content="<?php echo e($metaDescription); ?>">
        <meta name="twitter:image" content="<?php echo e($metaImage); ?>">

        <!-- Google Scholar Academic Citation Metadata -->
        <?php if(isset($paper)): ?>
            <meta name="citation_title" content="<?php echo e($paper->title); ?>">
            <?php $__currentLoopData = preg_split('/[,&|]| and /i', $paper->authors); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $authorName): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if(trim($authorName)): ?>
                    <meta name="citation_author" content="<?php echo e(trim($authorName)); ?>">
                <?php endif; ?>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <meta name="citation_journal_title" content="Sanmati Spectrum of Knowledge & Emerging Discourse">
            <meta name="citation_issn" content="3108-1819">
            <meta name="citation_publication_date" content="<?php echo e($paper->created_at ? $paper->created_at->format('Y/m/d') : date('Y/m/d')); ?>">
            <meta name="citation_pdf_url" content="https://sanmatijournal.in/download/paper/<?php echo e($paper->id); ?>">
            <?php if(!empty($paper->doi)): ?>
                <meta name="citation_doi" content="<?php echo e($paper->doi); ?>">
            <?php endif; ?>
            <?php if(!empty($paper->keywords)): ?>
                <meta name="citation_keywords" content="<?php echo e($paper->keywords); ?>">
            <?php endif; ?>
            <meta name="DC.title" content="<?php echo e($paper->title); ?>">
            <meta name="DC.creator" content="<?php echo e($paper->authors); ?>">
            <meta name="DC.publisher" content="Sanmati Spectrum of Knowledge & Emerging Discourse">
        <?php endif; ?>

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

        
        <script type="application/ld+json" nonce="<?php echo e(Vite::cspNonce()); ?>">
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

        <?php if(isset($paper)): ?>
        <script type="application/ld+json" nonce="<?php echo e(Vite::cspNonce()); ?>">
        {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": <?php echo json_encode($paper->title); ?>,
            "name": <?php echo json_encode($paper->title); ?>,
            "abstract": <?php echo json_encode($paper->abstract ?? ''); ?>,
            "description": <?php echo json_encode(\Illuminate\Support\Str::limit(strip_tags($paper->abstract ?? $paper->title), 160)); ?>,
            "datePublished": <?php echo json_encode($paper->created_at ? $paper->created_at->toISOString() : now()->toISOString()); ?>,
            "inLanguage": ["en", "hi"],
            "isAccessibleForFree": true,
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "isPartOf": {
                "@type": "Periodical",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "issn": "3108-1819"
            },
            <?php if(!empty($paper->doi)): ?>
            "sameAs": <?php echo json_encode($paper->doi); ?>,
            <?php endif; ?>
            "url": <?php echo json_encode("https://sanmatijournal.in/article/" . $paper->id); ?>,
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
        <?php endif; ?>

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