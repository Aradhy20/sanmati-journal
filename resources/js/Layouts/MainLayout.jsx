import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

import { GlassyBlob } from '../Components/Graphics';
import Seo from '../Components/Seo';

export default function MainLayout({ children, title, description, keywords }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased relative overflow-x-hidden transition-colors duration-300">
            <Seo title={title} description={description} keywords={keywords} />
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
                <GlassyBlob className="top-[-10%] left-[-10%] w-[500px] h-[500px]" color="bg-blue-200" />
                <GlassyBlob className="bottom-[-10%] right-[-10%] w-[600px] h-[600px]" color="bg-indigo-200" />
                <GlassyBlob className="top-[40%] right-[-5%] w-[400px] h-[400px]" color="bg-slate-200" />
            </div>

            <Navbar />
            <main className="flex-grow pt-[72px] relative z-10">
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
