import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-dark flex flex-col items-center justify-center gap-8"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }}
                >
                    <div className="relative">
                        {/* Elegant Logo Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="w-20 h-20 rounded-2xl bg-primary/10 border border-white/5 flex items-center justify-center relative z-10 overflow-hidden"
                        >
                            <img src="/logo.jpg" alt="Logo" className="w-12 h-12 object-contain" />
                        </motion.div>

                        {/* Subtle Border Glow */}
                        <motion.div
                            className="absolute inset-0 border border-secondary/30 rounded-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.1, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        />
                    </div>

                    <div className="text-center">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white font-serif text-2xl font-bold tracking-tight mb-3"
                        >
                            Sanmati Journal
                        </motion.h3>
                        
                        {/* Precision Loading Line */}
                        <div className="w-32 h-[1px] bg-white/5 mx-auto relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-secondary"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ delay: 0.4 }}
                            className="text-white text-[9px] uppercase tracking-[0.4em] mt-5 font-black"
                        >
                            Academic Excellence
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
