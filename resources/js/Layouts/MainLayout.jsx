import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../Components/Seo';

export default function MainLayout({ children, title, description, keywords }) {
    return (
        <div className="min-h-screen flex flex-col bg-warm-bg font-sans antialiased relative overflow-x-hidden transition-colors duration-300">
            <Seo title={title} description={description} keywords={keywords} />
            {/* Warm Decorative Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
            </div>

            <Navbar />
            <main className="flex-grow relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

