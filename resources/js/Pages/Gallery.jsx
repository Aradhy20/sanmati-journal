import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';

export default function Gallery({ galleryItems = [] }) {
    // Use dynamic items if available, otherwise empty or fallback logic could be added
    // The controller passes 'galleryItems' which are models.

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <MainLayout>
            <PageHeader
                title="Photo Gallery"
                breadcrumb="Events & Memories"
                subtitle="Capturing moments from our academic journey and conferences"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                {galleryItems.length > 0 ? (
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mx-auto">
                        {galleryItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer bg-slate-100 mb-4"
                                onClick={() => setSelectedImage(item.image_url)}
                            >
                                <img
                                    src={item.image_url}
                                    alt={item.caption || `Gallery Event ${idx + 1}`}
                                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                {item.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-white text-sm font-medium">{item.caption}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No visible gallery items found.</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={selectedImage}
                        alt="Full view"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                    />
                </div>
            )}
        </MainLayout>
    );
}
