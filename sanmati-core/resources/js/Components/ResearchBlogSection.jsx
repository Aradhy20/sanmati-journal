import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, User, Tag, Sparkles } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function ResearchBlogSection() {
    const articles = [
        {
            title: "How to Publish Research Paper in India: Complete Author Guide",
            category: "Publishing Guide",
            readTime: "6 min read",
            author: "Editorial Team",
            desc: "Step-by-step guide covering manuscript formatting, journal selection, plagiarism checks, and peer review submission.",
            url: "/submission-guidelines/call-for-papers"
        },
        {
            title: "UGC CARE Journal Guidelines & Academic Ethics Explained",
            category: "UGC Standards",
            readTime: "8 min read",
            author: "Dr Namrata Jain",
            desc: "Understanding UGC CARE list parameters, COPE ethics compliance, and citation credibility for Indian academicians.",
            url: "/publication-policy/ethics"
        },
        {
            title: "APA 7th Edition vs IEEE Citation Styles: Complete Reference Guide",
            category: "Academic Writing",
            readTime: "5 min read",
            author: "Technical Editors",
            desc: "Detailed reference examples for formatting in-text citations, journal articles, books, and digital DOIs accurately.",
            url: "/submission-guidelines/important-info"
        },
        {
            title: "Scopus vs Web of Science vs Google Scholar: Indexing Metrics",
            category: "Research Metrics",
            readTime: "7 min read",
            author: "Research Directorate",
            desc: "Comparative analysis of Impact Factors, h-index calculation, and citation tracking databases for scholars.",
            url: "/basic-info/indexing"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
                            <BookOpen className="w-4 h-4 text-indigo-600" /> Academic Knowledge Base
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                            Research Blog & Author Resource Guides
                        </h2>
                        <p className="text-sm text-slate-600 font-medium mt-2 max-w-xl">
                            Expert articles on academic writing, UGC CARE standards, citation formatting, and research methodology.
                        </p>
                    </div>
                    <Link
                        href="/submission-guidelines"
                        className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider group"
                    >
                        Explore All Guides <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {articles.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 font-bold text-[10px] uppercase tracking-wider rounded-md">
                                        {item.category}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {item.readTime}
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors mb-2 leading-snug line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-3 mb-6">
                                    {item.desc}
                                </p>
                            </div>

                            <Link
                                href={item.url}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 pt-3 border-t border-slate-100"
                            >
                                Read Guide <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
