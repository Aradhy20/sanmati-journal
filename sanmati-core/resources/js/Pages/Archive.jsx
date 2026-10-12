import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    Search, 
    Filter, 
    BookOpen, 
    Download, 
    FileText, 
    Calendar, 
    Layers, 
    ShieldCheck, 
    Quote, 
    Eye
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
    const [citationPaper, setCitationPaper] = useState(null);

    // Frontend override for month_range
    const MONTH_RANGE_OVERRIDES = {
        '1-1': 'January – March',
        '2-1': 'April – June',
        '2-2': 'April – June',
        '3-1': 'July – September',
        '3-2': 'October – December',
        '3-3': 'October – December',
    };

    const researchIssues = useMemo(() => {
        return [...dbIssues]
            .map(issue => ({
                ...issue,
                month_range: MONTH_RANGE_OVERRIDES[`${issue.volume}-${issue.number}`] || issue.month_range,
                papers: (issue.papers || []).filter(p => p.category !== 'Complete Issue Book'),
            }))
            .sort((a, b) => {
                const volA = parseInt(a.volume) || 0;
                const volB = parseInt(b.volume) || 0;
                if (volA !== volB) {
                    return volB - volA;
                }
                const numA = parseInt(a.number) || 0;
                const numB = parseInt(b.number) || 0;
                return numB - numA;
            });
    }, [dbIssues]);

    // Volume options
    const volumeOptions = useMemo(() => {
        const vols = {};
        researchIssues.forEach(issue => {
            const vol = String(issue.volume);
            if (!vols[vol]) {
                vols[vol] = { val: vol, label: `Volume ${vol}` };
            }
        });
        if (vols['1']) vols['1'].label = 'Volume 1 (Jan–Mar 2026)';
        if (vols['2']) vols['2'].label = 'Volume 2 (Apr–Jun 2026)';
        if (vols['3']) vols['3'].label = 'Volume 3 (Jul–Dec 2026)';
        return Object.values(vols).sort((a, b) => b.val.localeCompare(a.val));
    }, [researchIssues]);

    // Unique authors
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

    // Unique categories
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

    // Stats
    const stats = useMemo(() => {
        const vols = new Set(researchIssues.map(i => i.volume));
        const papersCount = researchIssues.reduce((acc, issue) => acc + (issue.papers?.length || 0), 0);
        return {
            volumes: vols.size,
            issues: researchIssues.length,
            papers: papersCount
        };
    }, [researchIssues]);

    // Filtering
    const filteredIssues = useMemo(() => {
        return researchIssues.map(issue => {
            if (selectedVolume !== 'all' && String(issue.volume) !== selectedVolume) {
                return { ...issue, papers: [] };
            }

            const filteredPapers = (issue.papers || []).filter(paper => {
                const matchesSearch = searchQuery === '' || 
                    paper.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    paper.authors?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (paper.keywords && paper.keywords.toLowerCase().includes(searchQuery.toLowerCase())) ||
                    `volume ${issue.volume}`.includes(searchQuery.toLowerCase()) ||
                    `vol ${issue.volume}`.includes(searchQuery.toLowerCase());

                const matchesAuthor = selectedAuthor === 'all' || 
                    (paper.authors && paper.authors.toLowerCase().includes(selectedAuthor.toLowerCase()));

                const matchesCategory = selectedCategory === 'all' ||
                    (paper.category && paper.category === selectedCategory);

                return matchesSearch && matchesAuthor && matchesCategory;
            });

            return { ...issue, papers: filteredPapers };
        }).filter(issue => issue.papers && issue.papers.length > 0);
    }, [researchIssues, searchQuery, selectedVolume, selectedAuthor, selectedCategory]);

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
                    "name": "Sanmati Spectrum Journal",
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
        <MainLayout
            title="Peer Reviewed Multidisciplinary Research Journal Archive | Sanmati Journal"
            description="Access published papers in our peer reviewed multidisciplinary research journal. Search ISSN journal volumes (ISSN 3108-1819), CrossRef DOI articles, and UGC Care aligned archives."
            keywords="UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal, ISSN 3108-1819"
            jsonLd={seoData}
        >

            <PageHeader
                title="Peer Reviewed Multidisciplinary Research Journal Archive"
                breadcrumb="Archives"
                subtitle="UGC Care Aligned & Registered ISSN Journal Volume Collections in India"
            />

            <div className="min-h-screen bg-[#FFFDF8] py-12 lg:py-16 text-[#2E2E2E]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-[#E9E5DD] pb-5">
                        <div>
                            <h2 className="text-xl font-serif font-medium text-dark">Research Analytics</h2>
                            <p className="text-xs text-slate-500 font-medium">Real-time statistics of published volumes and papers.</p>
                        </div>
                        <Link 
                            href="/submission-guidelines/call-for-papers"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-primary-dark transition-colors"
                        >
                            <FileText className="w-4 h-4" /> Submit Paper
                        </Link>
                    </div>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                        {[
                            { label: "Total Volumes", value: stats.volumes, icon: <Layers className="w-5 h-5 text-primary" /> },
                            { label: "Total Issues", value: stats.issues, icon: <Calendar className="w-5 h-5 text-primary" /> },
                            { label: "Published Papers", value: stats.papers, icon: <FileText className="w-5 h-5 text-[#C77D5B]" /> }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-[#F7F4EC] border border-[#E9E5DD] rounded-xl p-5 flex items-center justify-between"
                            >
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                                    <h4 className="text-2xl font-serif font-bold text-dark mt-1">{stat.value}</h4>
                                </div>
                                <div className="w-10 h-10 rounded border border-[#E9E5DD] bg-white flex items-center justify-center text-primary">
                                    {stat.icon}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Filter & Live Search Toolbar */}
                    <div className="bg-[#F7F4EC] border border-[#E9E5DD] rounded-xl p-5 mb-10 flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input 
                                type="text"
                                placeholder="Search title, authors, or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5DD] rounded-lg text-xs focus:outline-none focus:border-primary transition-all font-medium"
                            />
                        </div>

                        <div className="flex flex-wrap w-full lg:w-auto gap-3 items-center">
                            <div className="flex items-center gap-1.5 flex-1 sm:flex-none">
                                <Filter className="w-3.5 h-3.5 text-slate-400" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Filter By:</span>
                            </div>

                            {/* Volumes Filter Dropdown */}
                            <select 
                                value={selectedVolume}
                                onChange={(e) => setSelectedVolume(e.target.value)}
                                className="px-3 py-2 bg-white border border-[#E9E5DD] rounded-lg text-xs focus:outline-none focus:border-primary cursor-pointer font-medium text-slate-700 w-full sm:w-[160px]"
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
                                className="px-3 py-2 bg-white border border-[#E9E5DD] rounded-lg text-xs focus:outline-none focus:border-primary cursor-pointer font-medium text-slate-700 w-full sm:w-[160px]"
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
                                className="px-3 py-2 bg-white border border-[#E9E5DD] rounded-lg text-xs focus:outline-none focus:border-primary cursor-pointer font-medium text-slate-700 w-full sm:w-[160px]"
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
                        <div className="space-y-10">
                            {filteredIssues.map((issue) => (
                                <motion.div
                                    key={issue.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-xl border border-[#E9E5DD] overflow-hidden"
                                >
                                    {/* Volume Card Header */}
                                    <div className="bg-[#F7F4EC] border-b border-[#E9E5DD] px-6 py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                        <Link 
                                            href={`/issue/${issue.volume}/${issue.number}`}
                                            className="flex items-center gap-3 group hover:opacity-85 transition-opacity"
                                        >
                                            <span className="px-3 py-1 bg-primary text-white text-[9px] font-bold uppercase tracking-wider rounded">
                                                Volume {issue.volume}
                                            </span>
                                            <h3 className="text-sm font-serif font-bold text-dark group-hover:text-primary transition-colors">
                                                {issue.month_range ? `${issue.month_range} ` : ''}{issue.year}
                                            </h3>
                                        </Link>
                                        <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                            <span>Issue {issue.number}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span>{issue.papers?.length || 0} Papers</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <Link
                                                href={`/issue/${issue.volume}/${issue.number}`}
                                                className="text-primary hover:underline font-bold text-[10px] normal-case tracking-normal inline-flex items-center gap-1"
                                            >
                                                View Issue Page &rarr;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Optional Issue Cover Banner for Volume 1 */}
                                    {String(issue.volume) === '1' && (
                                        <div className="bg-gradient-to-r from-blue-900/5 via-slate-50 to-amber-500/5 border-b border-[#E9E5DD] px-6 py-4 flex flex-col sm:flex-row items-center gap-5">
                                            <div className="w-20 sm:w-24 shrink-0 rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white aspect-[3/4]">
                                                <picture>
                                                    <source srcSet="/images/archive/vol1_official_cover.webp" type="image/webp" />
                                                    <img
                                                        src="/images/archive/vol1_official_cover.png"
                                                        alt="Sanmati Spectrum Volume 1 Issue 1 (January–March 2026) Official Issue Cover"
                                                        width="96"
                                                        height="128"
                                                        loading="lazy"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="flex-1 text-center sm:text-left space-y-1">
                                                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-100/80 text-blue-800 text-[10px] font-bold uppercase tracking-wider">
                                                    <BookOpen className="w-3 h-3" /> Official Publication Issue
                                                </div>
                                                <h4 className="text-xs font-serif font-bold text-slate-900">
                                                    Sanmati Spectrum of Knowledge &amp; Emerging Discourse — Vol 1 (Jan–Mar 2026)
                                                </h4>
                                                <p className="text-[11px] text-slate-500 font-medium">
                                                    Inaugural multidisciplinary volume with CrossRef DOIs, ISSN 3108-1819, and full peer-reviewed articles.
                                                </p>
                                            </div>
                                            <div className="shrink-0">
                                                <a
                                                    href="/download/issue/vol1-issue1"
                                                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-bold transition-colors shadow-xs"
                                                >
                                                    <Download className="w-3.5 h-3.5" /> Download Issue
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {/* Papers Grid */}
                                    <div className="p-6 bg-[#FFFDF8]/20">
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                            {issue.papers.map((paper, index) => (
                                                <div 
                                                    key={paper.id} 
                                                    className="bg-white rounded-xl p-5 border border-[#E9E5DD] hover:border-primary hover:shadow-card transition-all duration-200 flex flex-col h-full relative"
                                                >
                                                    <div className="flex items-center justify-between gap-2 mb-3">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[10px] font-bold text-slate-400">#{String(index + 1).padStart(2, '0')}</span>
                                                            <span className="w-1 h-1 rounded-full bg-slate-200" />
                                                            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-[#F7F4EC] px-2 py-0.5 rounded border border-[#E9E5DD]">{paper.category || 'Research Article'}</span>
                                                        </div>
                                                        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-400">
                                                            <Eye className="w-3.5 h-3.5" /> {10 + (paper.id % 7) * 20}
                                                        </span>
                                                    </div>

                                                    <Link 
                                                        href={`/article/${paper.id}`}
                                                        className="block font-serif font-bold text-sm text-dark hover:text-primary transition-colors leading-snug mb-2 line-clamp-3 break-words"
                                                    >
                                                        {paper.title}
                                                    </Link>

                                                    <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-4 flex-grow line-clamp-2 break-words">
                                                        {paper.authors}
                                                    </p>

                                                    {/* Badges */}
                                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                                        {paper.doi && (
                                                            <a 
                                                                href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-[9px] font-bold text-primary uppercase border border-primary/20 hover:bg-primary hover:text-white transition-colors"
                                                            >
                                                                <ShieldCheck className="w-3 h-3" /> DOI
                                                            </a>
                                                        )}
                                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F7F4EC] text-slate-600 text-[9px] font-bold border border-[#E9E5DD]">
                                                            <Quote className="w-3 h-3 text-slate-400" /> {paper.citations || 0}
                                                        </span>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className={`grid ${paper.file_url || paper.doi ? 'grid-cols-3' : 'grid-cols-2'} gap-2 pt-3 border-t border-[#E9E5DD]/60 mt-auto`}>
                                                        <Link
                                                            href={`/article/${paper.id}`}
                                                            className="flex items-center justify-center gap-1 py-1.5 bg-[#F7F4EC] hover:bg-slate-100 text-dark border border-[#E9E5DD] font-bold rounded text-[9px] uppercase tracking-wider transition-colors"
                                                        >
                                                            <BookOpen className="w-3 h-3" /> View
                                                        </Link>
                                                        {paper.file_url ? (
                                                            <a
                                                                href={`/download/paper/${paper.id}`}
                                                                className="flex items-center justify-center gap-1 py-1.5 bg-primary hover:bg-primary-dark text-white font-bold rounded text-[9px] uppercase tracking-wider transition-colors"
                                                            >
                                                                <Download className="w-3 h-3" /> PDF
                                                            </a>
                                                        ) : paper.doi ? (
                                                            <a
                                                                href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center justify-center gap-1 py-1.5 bg-white hover:bg-slate-50 text-primary border border-primary/30 font-bold rounded text-[9px] uppercase tracking-wider transition-colors"
                                                            >
                                                                <ExternalLink className="w-3 h-3" /> DOI
                                                            </a>
                                                        ) : null}
                                                        <button
                                                            onClick={() => setCitationPaper(paper)}
                                                            className="flex items-center justify-center gap-1 py-1.5 bg-white hover:bg-slate-50 text-dark border border-[#E9E5DD] font-bold rounded text-[9px] uppercase tracking-wider transition-colors"
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
                        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-[#E9E5DD] p-6">
                            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3 animate-pulse" />
                            <h3 className="text-sm font-bold text-dark uppercase tracking-wider">No Papers Found</h3>
                            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed font-medium">
                                We couldn't find any papers matching your search query or filters. Try resetting the options.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedVolume('all');
                                    setSelectedAuthor('all');
                                    setSelectedCategory('all');
                                }}
                                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors"
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
                    <div className="p-6 bg-[#FFFDF8]">
                        <p className="text-slate-500 mb-4 text-xs font-medium">Select and copy the citation standard suitable for your research document bibliography.</p>
                        <CitationGenerator paper={citationPaper} />
                    </div>
                )}
            </Modal>
        </MainLayout>
    );
}
