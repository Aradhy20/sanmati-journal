import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Camera, Send, X, ZoomIn } from 'lucide-react';
import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';

export default function GalleryPhoto() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Mock data based on the original structure
    const photos = [
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.35 PM (1).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.35 PM.jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.36 PM (1).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.36 PM.jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.37 PM (2).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.37 PM (3).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.37 PM.jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.38 PM (1).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.38 PM (2).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.38 PM.jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.39 PM.jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.40 PM (2).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.41 PM (1).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.41 PM.jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.42 PM (1).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.42 PM (2).jpeg",
        "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.42 PM.jpeg",
    ];

    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Photo Gallery"
                    breadcrumb="Gallery"
                    subtitle="Visual documentation of our academic community"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="max-w-7xl mx-auto mt-12">
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {photos.map((src, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="break-inside-avoid relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-zoom-in"
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <img
                                        src={src}
                                        alt={`Academic Event ${idx + 1}`}
                                        className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/60 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <ZoomIn className="w-6 h-6" />
                                        </div>
                                        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            <div className="flex items-center justify-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest mb-1">
                                                <Camera className="w-3 h-3" /> Event Archive
                                            </div>
                                            <p className="text-white font-serif font-bold text-lg">Academic Discourse 2026</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 p-12 bg-white rounded-[48px] border border-slate-200 text-center relative overflow-hidden shadow-sm">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -ml-32 -mt-32 opacity-50 blur-3xl"></div>
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4 font-serif">Capturing Academic Moments</h3>
                                <p className="text-slate-500 mb-10 leading-relaxed italic">
                                    &quot;Our gallery documents the seminars, conferences, and collaborative sessions that define the Sanmati Journal spirit.&quot;
                                </p>
                                <a href="mailto:sanmatijournal@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20">
                                    Contribute Photos <Send className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[70]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-10 h-10" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={selectedImage}
                                alt="Full view"
                                className="max-w-full max-h-full object-contain rounded-xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </MainLayout>
    );
}
