import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Clock, Star, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Link } from '@inertiajs/react';



const FeaturedPapers = ({ papers = [] }) => {
    // Helper to generate consistent colors based on category or index
    const getPaperStyle = (index) => {
        const styles = [
            { color: "from-blue-600 to-indigo-600", bg: "from-blue-500 to-indigo-600" },
            { color: "from-emerald-600 to-teal-600", bg: "from-emerald-500 to-teal-600" },
            { color: "from-purple-600 to-pink-600", bg: "from-purple-500 to-pink-600" },
            { color: "from-amber-500 to-orange-600", bg: "from-amber-500 to-orange-600" },
        ];
        return styles[index % styles.length];
    };

    if (!papers || papers.length === 0) return null;

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <ScrollReveal>
                        <div className="max-w-2xl">
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-xs uppercase mb-3 block">High Impact Research</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Featured Publications</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">Exploring groundbreaking findings across our latest issues.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Link
                            href="/archive"
                            className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
                        >
                            Explore Archives <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {papers.map((paper, index) => {
                        const style = getPaperStyle(index);
                        return (
                            <ScrollReveal key={paper.id} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-white dark:bg-slate-800 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col"
                                >
                                    {/* Paper Glow Background */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${style.color} opacity-[0.03] group-hover:opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl transition-opacity animate-pulse`} />

                                    <div className="mb-8 flex justify-between items-start">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${style.bg} text-white shadow-lg shadow-blue-500/20`}>
                                            {paper.category || 'General'}
                                        </span>
                                        <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-2xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                                            <FileText className="w-6 h-6 text-slate-400 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-900 dark:group-hover:text-indigo-300 transition-colors line-clamp-3">
                                        {paper.title}
                                    </h3>

                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                                            <Users className="w-5 h-5 text-slate-400 dark:text-slate-300" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{paper.authors}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Author(s)</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                            <Clock className="w-4 h-4" />
                                            <span>{new Date(paper.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm justify-end">
                                            <Star className="w-4 h-4 text-amber-500" />
                                            <span>{paper.citations || 0} Citations</span>
                                        </div>
                                    </div>

                                    {/* Interactive Hover Border */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/20 rounded-[2rem] transition-all pointer-events-none" />
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
