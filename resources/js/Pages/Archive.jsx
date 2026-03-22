import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Layers, Search, Archive as ArchiveIcon } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function Archive({ issues = [] }) {
    // Safely handle both array and Laravel paginator objects
    const issueList = Array.isArray(issues) ? issues : (issues?.data || []);
    
    const scholarlySchema = issueList.flatMap(issue => 
        (issue.papers || []).map(paper => ({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": paper.title,
            "author": [
                {
                    "@type": "Person",
                    "name": paper.authors
                }
            ],
            "url": `https://sanmatijournal.in/storage/${paper.file_path}`,
            "publisher": {
                "@type": "Organization",
                "name": "Sanmati Journal"
            },
            "issueNumber": issue.number,
            "volumeNumber": issue.volume,
            "datePublished": issue.year?.toString()
        }))
    );
    
    return (
        <MainLayout>
            <Seo 
                title="Journal Archive" 
                description="Access our repository of past volumes and peer-reviewed research issues."
                jsonLd={scholarlySchema.length > 0 ? scholarlySchema : undefined}
            />
            
            <PageHeader
                title="The Knowledge Repository"
                breadcrumb="Archives"
                subtitle="Curated collection of multidisciplinary scholarly discourse across previous volumes."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative">
                {/* ─── ARCHIVE FILTER/SEARCH (Mock UI for premium feel) ─── */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 lg:mb-20">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <ArchiveIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-dark">Chronological Access</h2>
                            <p className="text-muted text-xs font-medium uppercase tracking-widest mt-1">Found {issueList.length} Total Issues</p>
                        </div>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                        <input 
                            type="text" 
                            placeholder="Search archives..." 
                            className="w-full pl-12 pr-6 py-4 bg-surface border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                {issueList.length > 0 ? (
                    <div className="space-y-20">
                        {issueList.map((issue, idx) => (
                            <motion.div 
                                key={issue.id}
                                {...fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="relative"
                            >
                                {/* Volume Header */}
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="px-6 py-2 bg-dark text-white rounded-full text-xs font-black uppercase tracking-[0.2em]">
                                        Volume {issue.volume}
                                    </div>
                                    <div className="h-px flex-1 bg-gray-100" />
                                    <div className="flex items-center gap-3 text-muted text-sm font-bold">
                                        <Calendar className="w-4 h-4 text-secondary" />
                                        {issue.year}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                    {/* Issue Meta Card */}
                                    <div className="lg:col-span-4">
                                        <div className="bg-surface border border-gray-100 p-8 rounded-[2.5rem] sticky top-32 shadow-sm">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-secondary block mb-4">Current Issue</span>
                                            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-6">Issue No. {issue.number}</h3>
                                            <p className="text-muted text-sm leading-relaxed mb-8">
                                                This issue features a compilation of peer-reviewed research and analytical discourse focusing on emergent multidisciplinary themes.
                                            </p>
                                            <div className="flex items-center gap-3 text-dark font-black text-[10px] uppercase tracking-widest">
                                                <Layers className="w-4 h-4 text-primary" />
                                                {issue.papers?.length || 0} Research Papers
                                            </div>
                                        </div>
                                    </div>

                                    {/* Papers List */}
                                    <div className="lg:col-span-8 space-y-4">
                                        {issue.papers && issue.papers.map((paper) => (
                                            <motion.div 
                                                key={paper.id}
                                                whileHover={{ x: 10 }}
                                                className="group p-8 bg-white border border-gray-50 rounded-3xl hover:border-primary/20 hover:shadow-xl transition-all duration-500"
                                            >
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <FileText className="w-4 h-4 text-secondary" />
                                                            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Research Article</span>
                                                        </div>
                                                        <h4 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{paper.title}</h4>
                                                        <p className="text-muted font-medium italic text-sm">{paper.authors}</p>
                                                    </div>
                                                    <a 
                                                        href={`/storage/${paper.file_path}`} 
                                                        className="flex items-center gap-3 px-6 py-3 bg-dark text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-lg shadow-dark/10 group-hover:-translate-y-1"
                                                    >
                                                        <Download className="w-4 h-4" />
                                                        Manuscript
                                                    </a>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl mx-auto text-center py-32 px-10 bg-surface rounded-[3rem] border border-dashed border-gray-200"
                    >
                        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl border border-gray-50">
                            <Search className="w-10 h-10 text-secondary animate-pulse" />
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-4">The Vault is Preparing</h3>
                        <p className="text-muted text-lg leading-relaxed mb-10">
                            Our inaugural scholarship cycle is currently under review. The digital archives will be available shortly after the first quarterly publication.
                        </p>
                        <div className="inline-flex items-center gap-4 px-8 py-3 bg-dark text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                            Current Cycle: Spring 2026
                        </div>
                    </motion.div>
                )}
            </div>
        </MainLayout>
    );
}
