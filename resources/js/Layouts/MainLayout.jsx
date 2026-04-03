import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../Components/Seo';
import CustomCursor from '../Components/CustomCursor';
import Preloader from '../Components/Preloader';
import { Toaster } from 'react-hot-toast';
import { MessageCircle, FileText } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function MainLayout({ children, title, description, keywords }) {
    return (
        <div className="min-h-screen flex flex-col bg-warm-bg font-sans antialiased relative overflow-x-hidden selection:bg-primary/10 selection:text-primary">
            <Seo title={title} description={description} keywords={keywords} />
            <Toaster position="top-center" toastOptions={{
                duration: 5000,
                style: { background: '#fff', color: '#052143', fontWeight: 'bold' }
            }} />
            
            {/* Elegant Background Accents */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[140px] animate-blob animation-delay-4000" />
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] animate-blob animation-delay-2000" />
            </div>

            <CustomCursor />
            <Preloader />
            <Navbar />
            <main className="flex-grow relative z-10">
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
            <Footer />

            {/* Floating Conversion WhatsApp / Support CTA */}
            <motion.a
                href="https://wa.me/918979782949"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, translateY: -5 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-4 sm:bottom-6 lg:bottom-10 right-4 sm:right-6 lg:right-10 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center z-[60] border-2 border-white"
            >
                <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />
            </motion.a>

        </div>
    );
}

