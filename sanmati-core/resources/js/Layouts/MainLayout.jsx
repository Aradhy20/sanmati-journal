import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Seo from '../Components/Seo';
import CustomCursor from '../Components/CustomCursor';
import Preloader from '../Components/Preloader';
import { Toaster } from 'react-hot-toast';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import SmartSearchModal from '../Components/SmartSearchModal';

export default function MainLayout({ children, title, description, keywords, jsonLd, aiSummary }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleOpenSearch = () => setIsSearchOpen(true);
        window.addEventListener('open-search', handleOpenSearch);
        
        const handleScroll = () => setIsScrolled(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('open-search', handleOpenSearch);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-warm-bg font-sans antialiased relative overflow-x-hidden selection:bg-primary/10 selection:text-primary">
            {/* Scroll Progress Bar */}
            <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-0.5 bg-blue-600 origin-left z-[110]" />
            
            <Seo title={title} description={description} keywords={keywords} jsonLd={jsonLd} aiSummary={aiSummary} />
            
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-md font-bold">
                Skip to main content
            </a>
            
            <Toaster position="top-center" toastOptions={{
                duration: 5000,
                style: { background: '#FFFFFF', color: '#0F172A', border: '1px solid #E2E8F0', fontSize: '13px' }
            }} />
            
            <CustomCursor />
            <Preloader />
            
            <header role="banner" className="overflow-x-visible">
                <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
            </header>

            <SmartSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            
            <main id="main-content" className="flex-grow relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
            
            <footer role="contentinfo">
                <Footer />
            </footer>

            {/* WhatsApp Contact Action */}
            <motion.a
                href="https://wa.me/918979782949"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, translateY: -3 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 bg-primary text-white rounded-full shadow-md flex items-center justify-center z-[60] border border-white/20 focus:outline-none"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </motion.a>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileHover={{ scale: 1.05, translateY: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="fixed bottom-22 right-6 lg:bottom-26 lg:right-10 w-10 h-10 bg-slate-100 border border-slate-200 text-dark rounded-full shadow-md flex items-center justify-center z-[60] focus:outline-none"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 text-dark" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
