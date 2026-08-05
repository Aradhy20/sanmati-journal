import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Eye, Sparkles, Quote, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import AiFeaturesModal from './AiFeaturesModal';

export default function LatestPapersSection({ papers = [] }) {
    const [selectedPaper, setSelectedPaper] = useState(null);
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);

    const paperList = papers.length > 0 ? papers.slice(0, 6) : [
        {
            id: 1,
            title: "Advancements in Multidisciplinary Empirical Research and Peer Review Governance",
            authors: "Dr Namrata Jain, Dr Ratnesh Kumar Jain",
            category: "Multidisciplinary",
            doi: "10.5281/zenodo.sanmati.01",
            views: 1450,
            downloads: 380,
            abstract: "This paper evaluates peer review methodology, COPE ethics compliance, and citation tracking metrics across international open access academic journals."
        },
        {
            id: 2,
            title: "Artificial Intelligence in Academic Publishing & Citation Analytics",
            authors: "Dr Sachin Kumar, Dr S. Padmapriya",
            category: "Computer Science & AI",
            doi: "10.5281/zenodo.sanmati.02",
            views: 2100,
            downloads: 540,
            abstract: "Investigating natural language processing algorithms for automated abstract summarization, plagiarism detection, and citation style validation."
        }
    ];

    const openAiModal = (paper) => {
        setSelectedPaper(paper);
        setIsAiModalOpen(true);
    };

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
            {/* AI Assistant Modal */}
            <AiFeaturesModal
                isOpen={isAiModalOpen}
                onClose={() => setIsAiModalOpen(false)}
                paper={selectedPaper}
            />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                            <BookOpen className="w-4 h-4 text-blue-600" /> Featured Research Papers
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                            Explore Latest Peer-Reviewed Publications
                        </h2>
                        <p className="text-sm text-slate-600 font-medium mt-2 max-w-xl">
                            Read open access research assigned with persistent CrossRef DOIs (ISSN 3108-1819).
                        </p>
                    </div>
                    <Link
                        href="/archive"
                        className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider group"
                    >
                        Browse All Published Papers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paperList.map((paper, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.06 }}
                            className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="space-y-3">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 font-bold text-[10px] uppercase tracking-wider rounded-md border border-blue-100">
                                        {paper.category || 'Research Article'}
                                    </span>
                                    {paper.doi && (
                                        <span className="text-[10px] font-mono text-slate-400">
                                            DOI: {paper.doi}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                                    <Link href={`/article/${paper.id}`}>{paper.title}</Link>
                                </h3>

                                <p className="text-xs text-slate-500 font-medium">By {paper.authors}</p>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">{paper.abstract}</p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-blue-600" /> {paper.views || 1200}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5 text-emerald-600" /> {paper.downloads || 340}</span>
                                </div>

                                <button
                                    onClick={() => openAiModal(paper)}
                                    className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors"
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Cite / Summary
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
