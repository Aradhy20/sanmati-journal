import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud } from 'lucide-react';

export default function FloatingSubmitButton() {
    const [visible, setVisible] = useState(false);

    // Only show after user scrolls past the hero (200px)
    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="fixed bottom-6 right-6 z-50 lg:hidden"
                >
                    <Link
                        href="/submission-guidelines/call-for-papers"
                        className="group relative flex items-center gap-3 bg-[#687EFF] text-white px-5 py-3.5 rounded-2xl shadow-2xl shadow-[#687EFF]/40 transition-all active:scale-95"
                        aria-label="Submit Manuscript"
                    >
                        {/* Pulsing ring */}
                        <span className="absolute inset-0 rounded-2xl animate-ping bg-[#687EFF]/30" />

                        <UploadCloud className="w-5 h-5 relative z-10" />
                        <span className="text-[11px] font-black uppercase tracking-widest relative z-10">
                            Submit Paper
                        </span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
