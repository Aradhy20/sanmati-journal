import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowRight, Star, ArrowUpRight, Search } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function LatestBooks() {
    return (
        <section className="py-32 bg-warm-bg">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
                    <motion.div {...fadeInUp} className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">New Arrivals</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                            Latest <span className="text-primary italic">Book Releases</span> & Publications
                        </h2>
                    </motion.div>
                    <motion.div {...fadeInUp}>
                        <Link href="/book-publication" className="group px-10 py-5 bg-white border border-gray-200 text-dark rounded-2xl font-bold text-xs hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 uppercase tracking-widest">
                            All Publications <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
                
                {/* Search and Filters UI */}
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-grow flex items-center bg-warm-bg rounded-xl px-4 py-3 border border-transparent focus-within:bg-white focus-within:border-primary/30 transition-all">
                        <Search className="w-5 h-5 text-muted mr-3" />
                        <label htmlFor="book-search" className="sr-only">Search books</label>
                        <input id="book-search" name="book_search" type="text" placeholder="Search by title, author, or keyword..." className="w-full bg-transparent border-none outline-none text-sm font-medium text-dark placeholder:text-muted/80" />
                    </div>
                    <div className="flex gap-4">
                        <select className="bg-warm-bg text-dark font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-3 border-none outline-none focus:ring-2 focus:ring-primary/20 appearance-none min-w-[140px] text-center">
                            <option>Any Year</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                        </select>
                        <select className="bg-warm-bg text-dark font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-3 border-none outline-none focus:ring-2 focus:ring-primary/20 appearance-none min-w-[140px] text-center">
                            <option>Subject</option>
                            <option>Physics</option>
                            <option>Economics</option>
                            <option>Sociology</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            genre: 'Quantum Physics',
                            format: 'Hardcover · 320 Pages',
                            title: 'Non-Linear Dynamics in Sub-Atomic Particles',
                            excerpt: 'Investigating quantum fields under high-stress gravitational simulations — a groundbreaking multi-disciplinary synthesis.',
                            img: '/fistudy-assets/resources/paper-physics.png',
                            badge: "Editor's Choice",
                            price: 'Order Now',
                            stars: 5,
                        },
                        {
                            genre: 'Behavioral Economics',
                            format: 'E-book · 280 Pages',
                            title: 'The Cognitive Architecture of Market Shifts',
                            excerpt: 'A multidisciplinary study on human heuristic biases in rapid digital-first economic environments.',
                            img: '/fistudy-assets/resources/paper-neuro.png',
                            badge: 'Bestseller',
                            price: 'Pre-Order',
                            stars: 5,
                        },
                        {
                            genre: 'Sustainability',
                            format: 'Hardcover · 350 Pages',
                            title: 'Urban Resilience in the Anthropocene Era',
                            excerpt: 'Analyzing the intersection of sociological patterns and environmental engineering in future megacities.',
                            img: '/fistudy-assets/resources/paper-social.png',
                            badge: 'New Release',
                            price: 'Order Now',
                            stars: 4,
                        },
                    ].map((book, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(79,119,255,0.12)] hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <img src={book.img} alt={book.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                                {book.badge && (
                                    <span className="absolute top-4 left-4 bg-secondary text-white text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                        {book.badge}
                                    </span>
                                )}
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                {/* Stars */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(book.stars)].map((_, k) => (
                                        <Star key={k} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                                    ))}
                                </div>
                                <p className="text-primary font-black text-[11px] tracking-[0.2em] uppercase mb-1">{book.genre}</p>
                                <p className="text-muted text-[12px] font-bold mb-4">{book.format}</p>
                                <h3 className="text-xl font-serif font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {book.title}
                               </h3>
                                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{book.excerpt}</p>
                                <Link href="/book-publication" className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-primary/8 text-primary rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all group/btn">
                                    {book.price} <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
