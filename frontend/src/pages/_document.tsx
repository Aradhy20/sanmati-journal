import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Phase 3: Resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className="antialiased">
        {/* Phase 4: Accessibility Skip Link */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white p-4 z-50 rounded">
          Skip to main content
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
