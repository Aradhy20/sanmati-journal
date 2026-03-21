import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera, Image } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function Gallery({ galleryItems = [] }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const goNext = useCallback(() => {
        if (selectedIndex !== null && galleryItems.length > 0) {
            setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
        }
    }, [selectedIndex, galleryItems.length]);

    const goPrev = useCallback(() => {
        if (selectedIndex !== null && galleryItems.length > 0) {
            setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
        }
    }, [selectedIndex, galleryItems.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, goNext, goPrev]);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedIndex]);

    const currentItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

    return (
        <MainLayout>
            <Seo 
                title="Visual Registry" 
                description="A curated visual archive of academic conferences, research assemblies, and scholarly milestones at Sanmati Journal."
            />

            <PageHeader
                title="The Visual Archive"
                breadcrumb="Gallery"
                subtitle="Documenting the collaborative intelligence and scholarly assembly of the research community."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative">
                {/* ─── HEADER SECTION ─── */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10 lg:mb-20 px-4">
                    <motion.div {...fadeInUp}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-10 bg-primary" />
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">Archival records</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl md:text-5xl font-serif font-bold text-dark leading-tight">
                            Captured <span className="text-secondary italic">Scholarly Moments</span>
                        </h2>
                    </motion.div>
                    
                    <motion.div 
                        {...fadeInUp} 
                        transition={{ delay: 0.2 }} 
                        className="flex items-center gap-4 text-dark font-black text-[10px] uppercase tracking-[0.3em] bg-surface px-8 py-4 rounded-2xl border border-gray-100 shadow-sm"
                    >
                        <Camera className="w-4 h-4 text-secondary" />
                        {galleryItems.length} Records Documented
                    </motion.div>
                </div>

                {galleryItems.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {galleryItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }}
                                className="relative group aspect-square rounded-[3rem] overflow-hidden cursor-pointer bg-surface border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700"
                                onClick={() => openLightbox(idx)}
                            >
                                <img
                                    src={item.image_url}
                                    alt={item.caption || `Registry Record ${idx + 1}`}
                                    className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                                        <ZoomIn className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {item.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 z-10">
                                        <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-loose">
                                            {item.caption}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="max-w-2xl mx-auto text-center py-32 px-10 bg-surface rounded-[4rem] border border-dashed border-gray-200"
                    >
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl border border-gray-50">
                            <Image className="w-8 h-8 text-gray-200" />
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-4">Registry In Progress</h3>
                        <p className="text-muted text-lg font-medium leading-relaxed italic">
                            Our team is currently documenting recent academic gatherings. The visual registry will be updated momentarily.
                        </p>
                    </motion.div>
                )}
            </div>

            {/* ─── ENHANCED LIGHTBOX ─── */}
            <AnimatePresence>
                {currentItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-dark/98 backdrop-blur-3xl flex items-center justify-center p-8 lg:p-24"
                        onClick={closeLightbox}
                    >
                        {/* Lightbox Controls */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-12 right-12 z-[110] w-16 h-16 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-all border border-white/10 shadow-2xl"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            className="absolute left-12 z-[110] w-16 h-16 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-all border border-white/10"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <div
                            className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                <img
                                    src={currentItem.image_url}
                                    alt={currentItem.caption || 'Archival image'}
                                    className="max-h-full max-w-full object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,0.6)] rounded-sm"
                                />
                                
                                {currentItem.caption && (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-12 py-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl text-center max-w-2xl">
                                        <p className="text-white text-lg font-serif font-medium leading-relaxed italic">
                                            {currentItem.caption}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            className="absolute right-12 z-[110] w-16 h-16 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-all border border-white/10"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Pagination Badge */}
                        <div className="absolute top-14 left-1/2 -translate-x-1/2 px-8 py-3 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                            Record {selectedIndex + 1} of {galleryItems.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </MainLayout>
    );
}
