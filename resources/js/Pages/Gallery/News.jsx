import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Calendar, ExternalLink, Mail, ArrowRight, Camera, Image as ImageIcon } from 'lucide-react';
import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';

export default function GalleryNews() {
    const [selectedImage, setSelectedImage] = useState(null);

    const newsItems = [
        {
            title: "Sanmati Journal Featured in Academic Times",
            date: "Jan 12, 2026",
            source: "Academic Press",
            excerpt: "Highlighting the journal's commitment to open access and multidisciplinary research excellence."
        },
        {
            title: "Upcoming Seminar Announcement: Research Ethics",
            date: "Dec 30, 2025",
            source: "Press Release",
            excerpt: "Sanmati Journal announces its first national level seminar focusing on modern academic ethics."
        }
    ];

    const newsPhotos = [
        "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.35 PM (2).jpeg",
        "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.36 PM (2).jpeg",
        "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.37 PM (1).jpeg",
        "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.39 PM (1).jpeg",
        "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.39 PM (2).jpeg",
        "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.40 PM (1).jpeg",
        "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.40 PM.jpeg",
        "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.41 PM (2).jpeg",
    ];

    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="News & Media"
                    breadcrumb="Gallery"
                    subtitle="Latest updates and coverage from the academic world"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Left Column: News Items */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden h-fit">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Newspaper className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 font-serif">Journal in the Media</h2>

                                    <div className="space-y-8">
                                        {newsItems.map((item, i) => (
                                            <div key={i} className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full">
                                                        <Calendar className="w-3 h-3" /> {item.date}
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-400 italic">Source: {item.source}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors font-serif">{item.title}</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.excerpt}</p>
                                                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline transition-all">
                                                    Read Full Article <ExternalLink className="w-4 h-4" />
                                                </div>
                                            </div>
                                        ))}

                                        <div className="p-10 border-2 border-dashed border-slate-200 rounded-3xl text-center">
                                            <p className="text-slate-400 font-medium italic">More news and announcements coming soon.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Photo Gallery */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-3 font-serif">
                                <ImageIcon className="text-blue-600" /> Media Gallery
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {newsPhotos.map((src, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm bg-slate-200"
                                        onClick={() => setSelectedImage(src)}
                                    >
                                        <img
                                            src={src}
                                            alt={`News Photo ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors flex items-center justify-center">
                                            <Camera className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all w-8 h-8" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-8 bg-slate-900 text-white rounded-[32px] mt-8">
                                <h4 className="font-bold text-lg mb-2">Media Inquiry?</h4>
                                <p className="text-slate-400 text-sm mb-4">For press kits or editorial interviews.</p>
                                <a href="mailto:sanmatijournal@gmail.com" className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-sm">
                                    <Mail className="w-4 h-4" /> Contact PR
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
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
                        >
                            <img
                                src={selectedImage}
                                alt="Full view"
                                className="max-w-full max-h-full object-contain rounded-xl"
                            />
                        </motion.div>
                        <div className="absolute top-8 right-8 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <ArrowRight className="w-6 h-6 rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </MainLayout>
    );
}
