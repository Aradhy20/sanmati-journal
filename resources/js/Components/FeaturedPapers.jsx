import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Clock, Star, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Link } from '@inertiajs/react';

const FeaturedPapers = ({ papers = [] }) => {
    // Helper to generate consistent colors based on category or index
    const getPaperStyle = (index) => {
        const styles = [
            { color: "from-blue-600/20 to-indigo-600/20", bg: "from-blue-500 to-indigo-600", accent: "text-blue-500" },
            { color: "from-emerald-600/20 to-teal-600/20", bg: "from-emerald-500 to-teal-600", accent: "text-emerald-500" },
            { color: "from-purple-600/20 to-pink-600/20", bg: "from-purple-500 to-pink-600", accent: "text-purple-500" },
            { color: "from-amber-500/20 to-orange-600/20", bg: "from-amber-500 to-orange-600", accent: "text-amber-500" },
        ];
        return styles[index % styles.length];
    };

    if (!papers || papers.length === 0) return null;

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <ScrollReveal>
                        <div className="max-w-2xl">
                            <span className="text-primary dark:text-primary-light font-black tracking-[0.25em] text-[10px] uppercase mb-3 block">High Impact Research</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-dark dark:text-white mb-4">Featured Publications</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium">Exploring groundbreaking findings across our latest peer-reviewed issues.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Link
                            href="/archive"
                            className="bg-white dark:bg-slate-900 text-dark dark:text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-sm hover:shadow-2xl border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                        >
                            Explore Insights <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {papers.map((paper, index) => {
                        const style = getPaperStyle(index);
                        return (
                            <ScrollReveal key={paper.id} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800/80 hover:border-primary/20 dark:hover:border-primary-light/20 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col"
                                >
                                    {/* Paper Glow Background */}
                                    <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${style.color} opacity-40 group-hover:opacity-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl transition-opacity duration-700 pointer-events-none`} />

                                    <div className="mb-8 flex justify-between items-start">
                                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-gradient-to-r ${style.bg} text-white shadow-lg shadow-blue-500/10`}>
                                            {paper.category || 'General'}
                                        </span>
                                        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl group-hover:bg-primary/5 dark:group-hover:bg-primary-light/5 transition-colors">
                                            <FileText className={`w-5 h-5 text-slate-400 group-hover:${style.accent} transition-colors`} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-serif font-black text-dark dark:text-white mb-4 leading-snug group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-3">
                                        {paper.title}
                                    </h3>

                                    <div className="flex items-center gap-3 mb-8 mt-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center border border-slate-100 dark:border-slate-700/50">
                                            <Users className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-dark dark:text-slate-200 line-clamp-1">{paper.authors}</p>
                                            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-0.5">Author(s)</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-slate-50 dark:border-slate-800/80">
                                        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-medium">
                                            <Clock className="w-4 h-4" />
                                            <span>{new Date(paper.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-medium justify-end">
                                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                            <span className="font-bold text-slate-500 dark:text-slate-400">{paper.citations || 0} Citations</span>
                                        </div>
                                    </div>

                                    {/* Interactive Hover Border Overlay */}
                                    <div className="absolute inset-0 border border-transparent group-hover:border-primary/10 dark:group-hover:border-primary-light/10 rounded-[2rem] transition-all duration-500 pointer-events-none" />
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPapers;
