<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Dark mode init: read localStorage before first paint to avoid FOUC -->
        <!-- Rebranding initialization to ensure pure editorial light theme display -->
        <script nonce="{{ Vite::cspNonce() }}">
            try { localStorage.removeItem('theme'); document.documentElement.classList.remove('dark'); } catch(e) {}
        </script>
        <link rel="icon" type="image/jpeg" href="/logo.jpg">


        <title inertia>{{ config('app.name', 'Sanmati Journal') }} | Spectrum of Knowledge</title>

        @if(isset($page['props']['meta']))
            <meta name="description" content="{{ $page['props']['meta']['description'] ?? 'Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.' }}">
            <meta property="og:title" content="{{ $page['props']['meta']['title'] ?? 'Sanmati Journal | Spectrum of Knowledge' }}">
            <meta property="og:description" content="{{ $page['props']['meta']['description'] ?? 'Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.' }}">
            <meta property="og:image" content="{{ $page['props']['meta']['image'] ?? url('/logo.jpg') }}">
            
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="{{ $page['props']['meta']['title'] ?? 'Sanmati Journal | Spectrum of Knowledge' }}">
            <meta name="twitter:description" content="{{ $page['props']['meta']['description'] ?? 'Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.' }}">
            <meta name="twitter:image" content="{{ $page['props']['meta']['image'] ?? url('/logo.jpg') }}">
        @else
            <meta name="description" content="Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.">
            <meta property="og:title" content="Sanmati Journal | Spectrum of Knowledge">
            <meta property="og:description" content="Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.">
            <meta property="og:image" content="{{ url('/logo.jpg') }}">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="Sanmati Journal | Spectrum of Knowledge">
            <meta name="twitter:description" content="Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.">
            <meta name="twitter:image" content="{{ url('/logo.jpg') }}">
        @endif
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" media="print" onload="this.media='all'">

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
