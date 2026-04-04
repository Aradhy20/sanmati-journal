import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Phase 4: Semantic HTML wrappers */}
      <div className="flex flex-col min-h-screen">
        <header role="banner" className="bg-white shadow">
          {/* Header content and Main Nav will go here */}
          <nav aria-label="Primary navigation" className="container mx-auto p-4 flex justify-between">
            <div className="text-xl font-bold">Sanmati Journal</div>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/archive" className="hover:text-blue-600">Archive</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main id="main-content" className="flex-grow">
          <Component {...pageProps} />
        </main>

        <footer role="contentinfo" className="bg-gray-800 text-white p-8 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Sanmati Journal. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
