import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

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

    // Keyboard navigation
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

    // Lock body scroll when lightbox is open
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
            <PageHeader
                title="Photo Gallery"
                breadcrumb="Events & Memories"
                subtitle="Capturing moments from our academic journey"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-8">
                {galleryItems.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                        {galleryItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.03, duration: 0.3 }}
                                className="relative group rounded-xl overflow-hidden cursor-pointer bg-slate-100 aspect-square"
                                onClick={() => openLightbox(idx)}
                            >
                                <img
                                    src={item.image_url}
                                    alt={item.caption || `Gallery ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                        <ZoomIn className="w-5 h-5 text-slate-800" />
                                    </div>
                                </div>
                                {item.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <p className="text-white text-xs font-medium truncate">{item.caption}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-sm">No gallery items found.</p>
                    </div>
                )}
            </div>

            {/* Clean Lightbox - Matches Screenshot */}
            <AnimatePresence>
                {currentItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                        onClick={closeLightbox} // Click outside to close
                    >
                        {/* Close Button - Top Right */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Prev Button - Left Edge */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            className="absolute left-4 md:left-8 z-50 p-3 text-white/70 hover:text-white transition-colors"
                        >
                            <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
                        </button>

                        {/* Image Container */}
                        <div
                            className="relative max-w-7xl max-h-[90vh] w-full p-4 flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent close on image click
                        >
                            <motion.img
                                key={selectedIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                src={currentItem.image_url}
                                alt={currentItem.caption || 'Gallery image'}
                                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
                                draggable="false"
                            />

                            {/* Floating Counter Badge - Bottom Right of Image */}
                            <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-white text-xs font-medium tracking-wide">
                                {selectedIndex + 1} of {galleryItems.length}
                            </div>
                        </div>

                        {/* Next Button - Right Edge */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            className="absolute right-4 md:right-8 z-50 p-3 text-white/70 hover:text-white transition-colors"
                        >
                            <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
                        </button>

                    </motion.div>
                )}
            </AnimatePresence>
        </MainLayout>
    );
}
