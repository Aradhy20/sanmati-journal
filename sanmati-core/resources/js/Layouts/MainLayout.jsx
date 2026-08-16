import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Seo from '../Components/Seo';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect, lazy, Suspense } from 'react';

const CustomCursor = lazy(() => import('../Components/CustomCursor'));
const SmartSearchModal = lazy(() => import('../Components/SmartSearchModal'));
const Toaster = lazy(() => import('react-hot-toast').then(m => ({ default: m.Toaster })));

export default function MainLayout({ children, title, description, keywords, image, jsonLd, aiSummary }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleOpenSearch = () => setIsSearchOpen(true);
        window.addEventListener('open-search', handleOpenSearch);
        
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 300);
            
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                setScrollPercent(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('open-search', handleOpenSearch);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white font-body antialiased relative overflow-x-hidden selection:bg-blue-100 selection:text-blue-700">
            {/* Scroll Progress Bar (Pure CSS Hardware Accelerated) */}
            <div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 origin-left z-[110] transition-transform duration-75 ease-out"
                style={{ transform: `scaleX(${scrollPercent / 100})` }}
            />
            
            <Seo title={title} description={description} keywords={keywords} image={image} jsonLd={jsonLd} aiSummary={aiSummary} />
            
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:shadow-xl font-bold text-sm">
                Skip to main content
            </a>
            
            <Suspense fallback={null}>
                <Toaster position="top-center" toastOptions={{
                    duration: 5000,
                    style: { background: '#FFFFFF', color: '#0F172A', border: '1px solid #E2E8F0', fontSize: '13px' }
                }} />
                <CustomCursor />
            </Suspense>
            
            <header role="banner" className="overflow-x-visible">
                <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
            </header>

            {isSearchOpen && (
                <Suspense fallback={null}>
                    <SmartSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
                </Suspense>
            )}
            
            <main id="main-content" className="flex-grow relative z-10">
                {children}
            </main>
            
            <footer role="contentinfo">
                <Footer />
            </footer>

            {/* WhatsApp Contact FAB */}
            <a
                href="https://wa.me/918979782949"
                target="_blank"
                rel="noreferrer noopener"
                className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center z-[60] border-2 border-white/30 hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                aria-label="Chat with us on WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </a>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-20 right-6 lg:bottom-24 lg:right-10 w-10 h-10 bg-white border border-slate-200 text-slate-600 rounded-full shadow-md flex items-center justify-center z-[60] focus:outline-none hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 ${
                    isScrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                aria-label="Scroll to top of page"
            >
                <ArrowUp className="w-4.5 h-4.5" />
            </button>
        </div>
    );
}
