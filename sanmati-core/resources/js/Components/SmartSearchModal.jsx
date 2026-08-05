import { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, User, FileText, Hash, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function SmartSearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = 'unset';
            setQuery('');
            setResults([]);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }
        const timer = setTimeout(async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const data = await res.json();
                setResults(data.results || []);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [query]);

    const filteredResults = results.filter(item => {
        if (activeTab === 'all') return true;
        if (activeTab === 'papers') return item.type === 'paper';
        if (activeTab === 'authors') return item.type === 'author';
        if (activeTab === 'doi') return item.type === 'doi' || item.doi;
        return true;
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] overflow-y-auto p-4 sm:p-6 md:p-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="relative mx-auto max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10"
                    >
                        {/* Search Input Bar */}
                        <div className="relative flex items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                            <Search className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search papers, authors, keywords, DOIs, volumes..."
                                className="w-full bg-transparent text-slate-900 placeholder-slate-400 font-medium text-base focus:outline-none"
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery('')}
                                    className="p-1 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 mr-2"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 rounded-md shadow-xs">
                                ESC
                            </kbd>
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="flex items-center gap-2 px-6 py-2.5 border-b border-slate-100 bg-white text-xs font-semibold overflow-x-auto scrollbar-none">
                            {[
                                { id: 'all', label: 'All Results' },
                                { id: 'papers', label: 'Research Papers' },
                                { id: 'authors', label: 'Authors' },
                                { id: 'doi', label: 'CrossRef DOIs' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-3 py-1 rounded-full transition-all ${
                                        activeTab === tab.id
                                            ? 'bg-blue-600 text-white shadow-xs'
                                            : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Search Results Container */}
                        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
                            {loading ? (
                                <div className="p-8 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
                                    <Sparkles className="w-4 h-4 animate-spin text-blue-600" /> Searching database...
                                </div>
                            ) : query.trim() && filteredResults.length === 0 ? (
                                <div className="p-12 text-center">
                                    <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                                    <p className="text-slate-900 font-semibold text-sm">No research papers or authors found</p>
                                    <p className="text-slate-500 text-xs mt-1">Try searching with keywords like "Computer Science", "ISSN 3108-1819", or author names.</p>
                                </div>
                            ) : !query.trim() ? (
                                <div className="p-6">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Popular Search Topics</p>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            'ISSN 3108-1819',
                                            'UGC Care Journal',
                                            'Artificial Intelligence',
                                            'Management Studies',
                                            'Legal Discourse',
                                            'Indian Knowledge Systems'
                                        ].map((tag, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setQuery(tag)}
                                                className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 transition-all flex items-center gap-1.5"
                                            >
                                                <Hash className="w-3 h-3 text-slate-400" /> {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                filteredResults.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.url || `/article/${item.id}`}
                                        onClick={onClose}
                                        className="group flex items-start justify-between p-3.5 hover:bg-blue-50/70 border border-transparent hover:border-blue-100 rounded-2xl transition-all"
                                    >
                                        <div className="space-y-1 pr-4">
                                            <div className="flex items-center gap-2">
                                                <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 rounded-md">
                                                    {item.category || 'Article'}
                                                </span>
                                                {item.doi && (
                                                    <span className="text-[10px] font-mono text-slate-400">
                                                        DOI: {item.doi}
                                                    </span>
                                                )}
                                            </div>
                                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {item.title}
                                            </h4>
                                            {item.authors && (
                                                <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                                    <User className="w-3 h-3 text-slate-400" /> {item.authors}
                                                </p>
                                            )}
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                                    </Link>
                                ))
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                            <span>Sanmati Spectrum of Knowledge (ISSN 3108-1819)</span>
                            <Link href="/archive" onClick={onClose} className="text-blue-600 font-bold hover:underline">
                                Browse Full Archive →
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
