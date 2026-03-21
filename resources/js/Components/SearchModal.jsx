import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2, BookOpen, FileText, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ papers: [], books: [] });
    const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setQuery('');
            setResults({ papers: [], books: [] });
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    useEffect(() => {
        if (query.trim().length < 2) {
            setResults({ papers: [], books: [] });
            return;
        }

        const fetchResults = async () => {
            setIsSearching(true);
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const data = await res.json();
                setResults(data);
            } catch (error) {
                console.error('Search failed', error);
            } finally {
                setIsSearching(false);
            }
        };

        const timeoutId = setTimeout(fetchResults, 400);
        return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-10 sm:pt-20 px-4 pb-20">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-dark/60 backdrop-blur-md"
                    />
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[85vh]"
                    >
                        {/* Search Input Area */}
                        <div className="relative flex items-center px-6 py-4 border-b border-gray-100 bg-surface/50">
                            <Search className="w-6 h-6 text-primary mr-4 opacity-50" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search papers, authors, books..."
                                className="w-full bg-transparent border-none outline-none text-xl font-medium text-dark placeholder:text-dark/20 focus:ring-0 p-0"
                            />
                            {isSearching ? (
                                <Loader2 className="w-5 h-5 text-primary animate-spin ml-4" />
                            ) : (
                                <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors ml-2">
                                    <X className="w-5 h-5 text-dark/50" />
                                </button>
                            )}
                        </div>

                        {/* Search Results Area */}
                        <div className="flex-1 overflow-y-auto p-2 scrollbar-hide">
                            {query.length > 0 && query.length < 2 && (
                                <div className="p-10 text-center text-muted text-sm font-medium">
                                    Please enter at least 2 characters...
                                </div>
                            )}

                            {query.length >= 2 && results.papers.length === 0 && results.books.length === 0 && !isSearching && (
                                <div className="p-10 text-center text-muted">
                                    <Search className="w-10 h-10 mx-auto text-gray-200 mb-4" />
                                    <p className="font-medium text-dark/70">No results found for "{query}"</p>
                                    <p className="text-sm mt-1">Try searching for a different author, title, or topic.</p>
                                </div>
                            )}

                            {(results.papers.length > 0 || results.books.length > 0) && (
                                <div className="space-y-6 p-4">
                                    {/* Papers Section */}
                                    {results.papers.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-2 mb-3 px-2">
                                                <FileText className="w-4 h-4 text-secondary" />
                                                <h4 className="text-xs font-black uppercase tracking-widest text-dark/40">Research Papers</h4>
                                            </div>
                                            <div className="space-y-2">
                                                {results.papers.map(paper => (
                                                    <Link 
                                                        key={paper.id} 
                                                        href="/archive" 
                                                        onClick={onClose}
                                                        className="block p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-colors group"
                                                    >
                                                        <h5 className="font-bold text-dark group-hover:text-primary transition-colors leading-tight mb-1">{paper.title}</h5>
                                                        <p className="text-xs text-muted truncate">{paper.authors}</p>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Books Section */}
                                    {results.books.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-2 mb-3 px-2">
                                                <BookOpen className="w-4 h-4 text-primary" />
                                                <h4 className="text-xs font-black uppercase tracking-widest text-dark/40">Published Volumes</h4>
                                            </div>
                                            <div className="space-y-2">
                                                {results.books.map(book => (
                                                    <Link 
                                                        key={book.id} 
                                                        href="/book-publication" 
                                                        onClick={onClose}
                                                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-secondary/5 border border-transparent hover:border-secondary/10 transition-colors group"
                                                    >
                                                        {book.cover_image && (
                                                            <div className="w-10 h-12 rounded border border-gray-100 overflow-hidden flex-shrink-0">
                                                                <img src={"/storage/" + book.cover_image} className="w-full h-full object-cover" loading="lazy"/>
                                                            </div>
                                                        )}
                                                        <div className="flex-1 min-w-0">
                                                            <h5 className="font-bold text-dark group-hover:text-secondary transition-colors leading-tight truncate">{book.title}</h5>
                                                            <p className="text-xs text-muted truncate">{book.author}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                        
                        <div className="bg-surface/50 border-t border-gray-100 px-6 py-3 flex items-center justify-between text-[11px] font-medium text-muted">
                            <span className="flex items-center gap-2">
                                <span className="px-2 py-0.5 bg-gray-200 rounded font-mono text-dark">ESC</span> to close
                            </span>
                            <span>Sanmati Spectrum Search Engine</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
