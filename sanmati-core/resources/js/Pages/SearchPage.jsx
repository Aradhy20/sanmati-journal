import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Download, Eye, Sparkles, User, Hash, ArrowRight } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import AiFeaturesModal from '../Components/AiFeaturesModal';

export default function SearchPage({ initialQuery = '' }) {
    const [query, setQuery] = useState(initialQuery);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [selectedPaper, setSelectedPaper] = useState(null);
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);

    const allPapers = [
        {
            id: 1,
            title: "Advancements in Multidisciplinary Empirical Research and Peer Review Governance",
            authors: "Dr Namrata Jain, Dr Ratnesh Kumar Jain",
            category: "Multidisciplinary",
            doi: "10.5281/zenodo.sanmati.01",
            views: 1450,
            downloads: 380,
            year: 2026,
            abstract: "Evaluating peer review methodology, COPE ethics compliance, and citation tracking metrics across international open access academic journals."
        },
        {
            id: 2,
            title: "Artificial Intelligence and Natural Language Processing in Academic Literature Reviews",
            authors: "Dr Sachin Kumar, Dr S. Padmapriya",
            category: "Computer Science & AI",
            doi: "10.5281/zenodo.sanmati.02",
            views: 2100,
            downloads: 540,
            year: 2026,
            abstract: "Investigating natural language processing algorithms for automated abstract summarization, plagiarism detection, and citation style validation."
        },
        {
            id: 3,
            title: "Indian Knowledge Systems (IKS) and Pedagogical Transformations under NEP 2020",
            authors: "Prof. Pralhad Joshi",
            category: "Education & Humanities",
            doi: "10.5281/zenodo.sanmati.03",
            views: 1890,
            downloads: 680,
            year: 2025,
            abstract: "Analyzing ancient knowledge systems, Sanskrit literary heritage, and modern curriculum integration in Indian universities."
        }
    ];

    const filteredPapers = allPapers.filter(paper => {
        const matchesQuery = !query || 
            paper.title.toLowerCase().includes(query.toLowerCase()) || 
            paper.authors.toLowerCase().includes(query.toLowerCase()) ||
            paper.category.toLowerCase().includes(query.toLowerCase()) ||
            paper.doi.toLowerCase().includes(query.toLowerCase());
        
        const matchesCat = categoryFilter === 'all' || paper.category.toLowerCase().includes(categoryFilter.toLowerCase());
        return matchesQuery && matchesCat;
    }).sort((a, b) => {
        if (sortBy === 'newest') return b.year - a.year;
        if (sortBy === 'downloads') return b.downloads - a.downloads;
        if (sortBy === 'views') return b.views - a.views;
        return 0;
    });

    const openAiModal = (paper) => {
        setSelectedPaper(paper);
        setIsAiModalOpen(true);
    };

    return (
        <MainLayout title="Universal Research Search | Sanmati Spectrum Journal" description="Search original research papers, authors, DOIs, and volumes across 10+ multidisciplinary tracks.">
            <AiFeaturesModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} paper={selectedPaper} />

            <div className="py-12 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    
                    {/* Header & Search Bar */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                        <div className="space-y-1">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Search Engine
                            </span>
                            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">Universal Research Search</h1>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Instant filter search by Title, Author, CrossRef DOI, Keyword, and Discipline.</p>
                        </div>

                        <div className="relative flex items-center">
                            <Search className="w-5 h-5 text-blue-600 absolute left-4 pointer-events-none" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search papers, authors, DOIs (e.g. 10.5281), or keywords..."
                                className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-4 rounded-2xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                            />
                        </div>

                        {/* Filters Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Filter className="w-3.5 h-3.5" /> Category:</span>
                                {[
                                    { id: 'all', label: 'All Disciplines' },
                                    { id: 'multidisciplinary', label: 'Multidisciplinary' },
                                    { id: 'computer science', label: 'Computer Science & AI' },
                                    { id: 'education', label: 'Education & Humanities' }
                                ].map(c => (
                                    <button
                                        key={c.id}
                                        onClick={() => setCategoryFilter(c.id)}
                                        className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                                            categoryFilter === c.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                    >
                                        {c.label}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sort By:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="newest">Newest First</option>
                                    <option value="downloads">Most Downloaded</option>
                                    <option value="views">Most Viewed</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results Container */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
                            <span>Found {filteredResults.length} Matching Research Papers</span>
                        </div>

                        {filteredResults.map((paper, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-2xs hover:shadow-lg transition-all duration-300 space-y-3"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 font-bold text-[10px] uppercase tracking-wider rounded-md">
                                        {paper.category}
                                    </span>
                                    <span className="text-[10px] font-mono text-slate-400">
                                        DOI: {paper.doi}
                                    </span>
                                </div>

                                <h3 className="text-base md:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                                    <Link href={`/article/${paper.id}`}>{paper.title}</Link>
                                </h3>

                                <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                    <User className="w-3.5 h-3.5 text-slate-400" /> By {paper.authors}
                                </p>

                                <p className="text-xs text-slate-600 font-medium leading-relaxed">{paper.abstract}</p>

                                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                                    <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                        <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-blue-600" /> {paper.views} Views</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5 text-emerald-600" /> {paper.downloads} Downloads</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Link href={`/article/${paper.id}`} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1 transition-colors">
                                            Read Paper <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                        <button onClick={() => openAiModal(paper)} className="px-3 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-xl hover:bg-indigo-100 flex items-center gap-1 transition-colors">
                                            <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Cite
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
