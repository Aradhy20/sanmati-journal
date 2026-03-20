import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

export default function CategoryGrid() {
    const categories = [
        { name: 'Tech & Programming', count: '10 Course', icon: '1' },
        { name: 'Art & Design', count: '50 Course', icon: '2' },
        { name: 'Online Marketing', count: '12 Course', icon: '3' },
        { name: 'Content Creation', count: '10 Course', icon: '4' }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    
                    {/* Left Title Area */}
                    <div className="w-full lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-3 h-3 rounded-full bg-[#ff764c]"></span>
                                <span className="text-[#ff764c] font-black uppercase tracking-widest text-sm">Category</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2b4c] leading-[1.2] tracking-tight font-outfit">
                                Browse Our Categories To <br /> Find Exactly <span className="text-[#3b5998]">Courses</span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Grid Area */}
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {categories.map((cat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group relative bg-[#f4f7fe] rounded-2xl p-6 overflow-hidden flex items-center justify-between hover:-translate-y-1 transition-transform border border-transparent hover:border-blue-100"
                                >
                                    {/* Base State */}
                                    <div className="flex items-center gap-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <img src={`/fistudy-assets/images/icon/categoyr-two-icon-${cat.icon}.png`} alt={cat.name} className="w-8 h-8 object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#1a2b4c] mb-1 leading-tight"><Link href="#">{cat.name}</Link></h3>
                                            <p className="text-gray-500 font-medium text-sm">{cat.count}</p>
                                        </div>
                                    </div>

                                    {/* Hover State Background Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff764c] to-[#ff9966] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                                    {/* Hover Content */}
                                    <div className="absolute inset-0 flex items-center gap-5 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner text-white font-black text-xl">
                                            <img src="/fistudy-assets/images/icon/category-one-hover-icon-1-1.png" alt="" className="w-8 h-8 object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1 leading-tight"><Link href="#">{cat.name}</Link></h3>
                                            <p className="text-white/80 font-medium text-sm">{cat.count}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Default Arrow */}
                                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors z-10">
                                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                                    </a>

                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
