import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Seo from '../Components/Seo';
import CustomCursor from '../Components/CustomCursor';
import Preloader from '../Components/Preloader';
import { Toaster } from 'react-hot-toast';
import { MessageCircle, FileText, ArrowUp } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import SearchModal from '../Components/SearchModal';

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
            <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[110]" />
            <Seo title={title} description={description} keywords={keywords} jsonLd={jsonLd} aiSummary={aiSummary} />
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-xl focus:shadow-xl font-bold">
                Skip to main content
            </a>
            <Toaster position="top-center" toastOptions={{
                duration: 5000,
                style: { background: '#fff', color: '#052143', fontWeight: 'bold' }
            }} />
            
            {/* Elegant Background Accents - hidden on mobile for massive performance gains */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
                <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-blob will-change-transform" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[140px] animate-blob animation-delay-4000 will-change-transform" />
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] animate-blob animation-delay-2000 will-change-transform" />
            </div>

            <CustomCursor />
            <Preloader />
            <header role="banner" className="overflow-x-visible">
                <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
            </header>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <main id="main-content" className="flex-grow relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, scale: 0.99, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.01, y: -5 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
            <footer role="contentinfo">
                <Footer />
            </footer>

            {/* Floating Conversion WhatsApp / Support CTA */}
            <motion.a
                href="https://wa.me/918979782949"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, translateY: -5 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center z-[60] border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="w-7 h-7" />
            </motion.a>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileHover={{ scale: 1.1, translateY: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="fixed bottom-24 right-6 lg:bottom-28 lg:right-10 w-12 h-12 bg-dark text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center z-[60] border border-white/20 focus:outline-none focus:ring-4 focus:ring-dark/50"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

        </div>
    );
}

