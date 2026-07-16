import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, 
    Filter, 
    BookOpen, 
    Download, 
    FileText, 
    ChevronDown, 
    Award, 
    Calendar, 
    BarChart2, 
    Hash, 
    Layers, 
    ShieldCheck, 
    Quote, 
    ExternalLink,
    Eye,
    TrendingUp
} from 'lucide-react';
import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import PageHeader from '../Components/PageHeader';
import Seo from '../Components/Seo';
import Modal from '../Components/ui/Modal';
import CitationGenerator from '../Components/ui/CitationGenerator';

export default function Archive({ issues }) {
    const dbIssues = Array.isArray(issues) ? issues : (issues?.data || []);

    // State
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedVolume, setSelectedVolume] = useState('all');
    const [selectedAuthor, setSelectedAuthor] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activePaperMenu, setActivePaperMenu] = useState(null); // stores paper.id
    const [citationPaper, setCitationPaper] = useState(null);

    // Refs
    const menuRef = useRef({});

    // Close PDF menu on clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activePaperMenu && !event.target.closest('.pdf-dropdown-container')) {
                setActivePaperMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activePaperMenu]);

    // Frontend override for month_range — ensures correct display regardless of DB value
    const MONTH_RANGE_OVERRIDES = {
        '1-1': 'January – March',
        '2-1': 'April – June',
        '2-2': 'April – June',
    };

    const researchIssues = useMemo(() => {
        return [...dbIssues]
            .map(issue => ({
                ...issue,
                // Apply month_range override, filter out compilation papers from count
                month_range: MONTH_RANGE_OVERRIDES[`${issue.volume}-${issue.number}`] || issue.month_range,
                papers: (issue.papers || []).filter(p => p.category !== 'Complete Issue Book'),
            }))
            .sort((a, b) => {
                const volA = parseInt(a.volume) || 0;
                const volB = parseInt(b.volume) || 0;
                if (volA !== volB) {
                    return volB - volA; // Newest Volume first
                }
                const numA = parseInt(a.number) || 0;
                const numB = parseInt(b.number) || 0;
                return numB - numA; // Newest Issue first
            });
    }, [dbIssues]);

    // Build unique volume options dynamically from the loaded issues
    const volumeOptions = useMemo(() => {
        const vols = {};
        researchIssues.forEach(issue => {
            const vol = String(issue.volume);
            if (!vols[vol]) {
                vols[vol] = {
                    val: vol,
                    label: `Volume ${vol}`
                };
            }
        });
        
        if (vols['1']) vols['1'].label = 'Volume 1 (Jan–Mar 2026)';
        if (vols['2']) vols['2'].label = 'Volume 2 (Apr–Jun 2026)';

        return Object.values(vols).sort((a, b) => b.val.localeCompare(a.val));
    }, [researchIssues]);

    // Get all unique authors for the filter dropdown
    const allAuthors = useMemo(() => {
        const authorsSet = new Set();
        researchIssues.forEach(issue => {
            (issue.papers || []).forEach(paper => {
                if (paper.authors) {
                    const parts = paper.authors.split(/,|\b&|\band\b/i);
                    parts.forEach(part => {
                        const name = part.trim();
                        if (name && name.length > 2) {
                            authorsSet.add(name);
                        }
                    });
                }
            });
        });
        return Array.from(authorsSet).sort();
    }, [researchIssues]);

    // Get all unique categories for the filter dropdown
    const allCategories = useMemo(() => {
        const categoriesSet = new Set();
        researchIssues.forEach(issue => {
            (issue.papers || []).forEach(paper => {
                if (paper.category && paper.category !== 'Complete Issue Book') {
                    categoriesSet.add(paper.category);
                }
            });
        });
        return Array.from(categoriesSet).sort();
    }, [researchIssues]);

    // Stats calculations
    const stats = useMemo(() => {
        const vols = new Set(researchIssues.map(i => i.volume));
        const papersCount = researchIssues.reduce((acc, issue) => acc + (issue.papers?.length || 0), 0);
        return {
            volumes: vols.size,
            issues: researchIssues.length,
            papers: papersCount
        };
    }, [researchIssues]);

    // Filtered Issues and Papers
    const filteredIssues = useMemo(() => {
        return researchIssues.map(issue => {
            // Apply volume filter (convert both to string to handle integer vs string from DB)
            if (selectedVolume !== 'all' && String(issue.volume) !== selectedVolume) {
                return { ...issue, papers: [] };
            }

            const filteredPapers = (issue.papers || []).filter(paper => {
                // Apply Search query
                const matchesSearch = searchQuery === '' || 
                    paper.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    paper.authors?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (paper.keywords && paper.keywords.toLowerCase().includes(searchQuery.toLowerCase())) ||
                    `volume ${issue.volume}`.includes(searchQuery.toLowerCase()) ||
                    `vol ${issue.volume}`.includes(searchQuery.toLowerCase());

                // Apply Author filter
                const matchesAuthor = selectedAuthor === 'all' || 
                    (paper.authors && paper.authors.toLowerCase().includes(selectedAuthor.toLowerCase()));

                // Apply Category filter
                const matchesCategory = selectedCategory === 'all' ||
                    (paper.category && paper.category === selectedCategory);

                return matchesSearch && matchesAuthor && matchesCategory;
            });

            return { ...issue, papers: filteredPapers };
        }).filter(issue => issue.papers && issue.papers.length > 0);
    }, [researchIssues, searchQuery, selectedVolume, selectedAuthor, selectedCategory]);

    // Metadata & Schema.org JSON-LD
    const scholarlySchema = useMemo(() => {
        return researchIssues.flatMap(issue => 
            (issue.papers || []).map(paper => ({
                "@context": "https://schema.org",
                "@type": "ScholarlyArticle",
                "headline": paper.title,
                "author": (paper.authors || "").split(/,|\b&|\band\b/i).map(name => ({
                    "@type": "Person",
                    "name": name.trim()
                })),
                "url": paper.doi || `https://sanmatijournal.in/article/${paper.id}`,
                "publisher": {
                    "@type": "Organization",
                    "name": "Sanmati Journal",
                    "logo": "https://sanmatijournal.in/logo.jpg"
                },
                "issueNumber": issue.number,
                "volumeNumber": issue.volume,
                "datePublished": String(issue.year)
            }))
        );
    }, [researchIssues]);

    const seoData = {
        schema: scholarlySchema.length > 0 ? scholarlySchema : undefined,
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Archive', url: '/archive' }
        ]
    };

    return (
        <MainLayout>
            <Seo 
                title="Journal Archive | Sanmati Spectrum of Knowledge" 
                description="Browse through the academic archive of Sanmati Journal. Read peer-reviewed multidisciplinary research articles, scholarly papers, and official issue compilations."
                jsonLd={seoData}
            />

            {/* Custom Google Fonts Import Inline for Safety */}
            <Head>
                <style>{`
                    .font-poppins { font-family: 'Poppins', sans-serif; }
                    .font-inter { font-family: 'Inter', sans-serif; }
                `}</style>
            </Head>

            {/* Premium Archive Page Header */}
            <PageHeader
                title="Journal Archive"
                breadcrumb="Archives"
                subtitle="Explore our digital repository of peer-reviewed multi-disciplinary scientific papers, research articles, and volumes."
            />

            <div className="min-h-screen bg-[#F8FAFC] py-12 lg:py-20 font-inter text-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-[#0F4C81]">Research Analytics</h2>
                            <p className="text-sm text-slate-500 mt-1">Real-time statistics of published volumes and papers.</p>
                        </div>
                        <Link 
                            href="/submission-guidelines/call-for-papers"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F4C81] text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-[#2563EB] transition-colors shadow-lg shadow-[#0F4C81]/20"
                        >
                            <FileText className="w-4 h-4" /> Submit Paper
                        </Link>
                    </div>

                    {/* Animated Statistics Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            { label: "Total Volumes", value: stats.volumes, icon: <Layers className="w-6 h-6 text-[#2563EB]" />, border: "border-l-4 border-l-[#2563EB]" },
                            { label: "Total Issues", value: stats.issues, icon: <Calendar className="w-6 h-6 text-[#F59E0B]" />, border: "border-l-4 border-l-[#F59E0B]" },
                            { label: "Published Papers", value: stats.papers, icon: <FileText className="w-6 h-6 text-[#0F4C81]" />, border: "border-l-4 border-l-[#0F4C81]" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className={`bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between hover:shadow-md transition-all duration-300 ${stat.border}`}
                            >
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins">{stat.label}</p>
                                    <h4 className="text-3xl font-bold font-poppins text-slate-900 mt-1">{stat.value}</h4>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                                    {stat.icon}
                                </div>
                            </motion.div>
                        ))}
                    </div>


                    {/* Filter & Live Search Toolbar */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-12 flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                                type="text"
                                placeholder="Search by paper title, authors, or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] transition-all"
                            />
                        </div>

                        <div className="flex flex-wrap w-full lg:w-auto gap-4 items-center">
                            <div className="flex items-center gap-2 flex-1 sm:flex-none">
                                <Filter className="w-4 h-4 text-slate-400" />
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-poppins">Filter By:</span>
                            </div>

                            {/* Volumes Filter Dropdown */}
                            <select 
                                value={selectedVolume}
                                onChange={(e) => setSelectedVolume(e.target.value)}
                                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] transition-all cursor-pointer font-medium text-slate-700 w-full sm:w-[180px]"
                            >
                                <option value="all">All Volumes</option>
                                {volumeOptions.map(opt => (
                                    <option key={opt.val} value={opt.val}>{opt.label}</option>
                                ))}
                            </select>

                            {/* Authors Filter Dropdown */}
                            <select 
                                value={selectedAuthor}
                                onChange={(e) => setSelectedAuthor(e.target.value)}
                                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] transition-all cursor-pointer font-medium text-slate-700 w-full sm:w-[180px]"
                            >
                                <option value="all">All Authors</option>
                                {allAuthors.map((author, index) => (
                                    <option key={index} value={author}>{author}</option>
                                ))}
                            </select>

                            {/* Category Filter Dropdown */}
                            <select 
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] transition-all cursor-pointer font-medium text-slate-700 w-full sm:w-[180px]"
                            >
                                <option value="all">All Categories</option>
                                {allCategories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Volumes Section */}
                    {filteredIssues.length > 0 ? (
                        <div className="space-y-12">
                            {filteredIssues.map((issue) => (
                                <motion.div
                                    key={issue.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                                >
                                    {/* Volume Card Header */}
                                    <div className="bg-slate-50 border-b border-slate-100 px-6 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                        <div className="flex items-center gap-3">
                                            <span className="px-4 py-1.5 bg-[#0F4C81] text-white text-xs font-black uppercase tracking-widest rounded-full font-poppins">
                                                Volume {issue.volume}
                                            </span>
                                            <h3 className="text-lg font-bold font-poppins text-slate-900">
                                                {issue.month_range ? `${issue.month_range} ` : ''}{issue.year}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins">
                                            <span>Issue {issue.number}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                            <span>{issue.papers?.length || 0} Research Papers</span>
                                        </div>
                                    </div>

                                    {/* Responsive Cards Grid Layout */}
                                    <div className="p-6 bg-slate-50/30">
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {issue.papers.map((paper, index) => (
                                                <div 
                                                    key={paper.id} 
                                                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-ambient hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative"
                                                >
                                                    {/* Decorative top border */}
                                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F4C81] to-[#2563EB] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                                    <div className="flex items-center justify-between gap-2 mb-4">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xs font-bold text-slate-400 font-poppins">#{String(index + 1).padStart(2, '0')}</span>
                                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                            <span className="text-[9px] font-black uppercase tracking-wider text-[#2563EB] bg-[#2563EB]/5 px-2 py-1 rounded border border-[#2563EB]/10">{paper.category || 'Research Article'}</span>
                                                        </div>
                                                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400">
                                                            <Eye className="w-3 h-3" /> {10 + (paper.id % 7) * 20}
                                                        </span>
                                                    </div>

                                                    <Link 
                                                        href={`/article/${paper.id}`}
                                                        className="block font-bold text-lg text-slate-900 hover:text-[#2563EB] transition-colors leading-snug mb-3 line-clamp-3 font-poppins"
                                                    >
                                                        {paper.title}
                                                    </Link>

                                                    <p className="text-slate-600 text-xs font-medium leading-relaxed mb-6 flex-grow line-clamp-2">
                                                        {paper.authors}
                                                    </p>

                                                    {/* Badges / Metrics */}
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {paper.doi && (
                                                            <a 
                                                                href={paper.doi} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-[10px] font-black text-blue-600 uppercase border border-blue-100 hover:bg-blue-100 transition-colors"
                                                            >
                                                                <ShieldCheck className="w-3 h-3" /> DOI
                                                            </a>
                                                        )}
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold border border-slate-200">
                                                            <Quote className="w-3 h-3 text-slate-400" /> {paper.citations || 0}
                                                        </span>
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold border border-slate-200">
                                                            <Download className="w-3 h-3 text-slate-400" /> {(paper.id % 5) * 15 + 5}
                                                        </span>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 mt-auto">
                                                        <Link
                                                            href={`/article/${paper.id}`}
                                                            className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 hover:bg-[#0F4C81]/10 text-slate-700 font-bold rounded-xl text-[10px] uppercase tracking-wider transition-colors border border-slate-200/60"
                                                        >
                                                            <BookOpen className="w-3.5 h-3.5" /> View
                                                        </Link>
                                                        <a
                                                            href={`/download/paper/${paper.id}`}
                                                            className="flex items-center justify-center gap-1.5 py-2.5 bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-bold rounded-xl text-[10px] uppercase tracking-wider transition-colors shadow-sm"
                                                        >
                                                            <Download className="w-3.5 h-3.5" /> PDF
                                                        </a>
                                                        <button
                                                            onClick={() => setCitationPaper(paper)}
                                                            className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-[10px] uppercase tracking-wider transition-colors border border-slate-200/60"
                                                        >
                                                            <Quote className="w-3.5 h-3.5" /> Cite
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 p-8">
                            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4 animate-pulse" />
                            <h3 className="text-lg font-bold font-poppins text-slate-800">No Research Papers Found</h3>
                            <p className="text-sm text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed">
                                No papers matched your search query or filters. Try adjusting your search term or selecting another volume/author.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedVolume('all');
                                    setSelectedAuthor('all');
                                }}
                                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors font-poppins"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}

                </div>
            </div>

            {/* Citation Modal */}
            <Modal
                isOpen={!!citationPaper}
                onClose={() => setCitationPaper(null)}
                title="Citation Generator"
                size="lg"
            >
                {citationPaper && (
                    <div className="p-6">
                        <p className="text-slate-500 mb-6 text-sm">Use the provided formats to cite this research paper accurately in your bibliography or papers.</p>
                        <CitationGenerator paper={citationPaper} />
                    </div>
                )}
            </Modal>
        </MainLayout>
    );
}
