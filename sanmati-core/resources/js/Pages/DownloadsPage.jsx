import { motion } from 'framer-motion';
import { Download, FileText, Award, FileSpreadsheet, CheckCircle2, ArrowRight } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import SEOBreadcrumb from '../Components/SEOBreadcrumb';

export default function DownloadsPage() {
    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Downloads & Author Toolkit', href: '/downloads' }
    ];

    const downloads = [
        {
            title: "Author Manuscript Formatting Template (MS Word)",
            type: "Word Template (.docx)",
            size: "245 KB",
            url: "/download/author-guidelines-template",
            category: "Submission Template"
        },
        {
            title: "Sanmati Spectrum Copyright & Author Declaration Form",
            type: "PDF Document (.pdf)",
            size: "180 KB",
            url: "/download/copyright-form",
            category: "Legal & Ethics"
        },
        {
            title: "Sanmati Spectrum Volume 1, Issue 1 (2026) Complete Issue PDF",
            type: "Complete Issue PDF",
            size: "4.2 MB",
            url: "/download/issue/vol1-issue1",
            category: "Full Issue"
        }
    ];

    return (
        <MainLayout title="Author Toolkit & Document Downloads | Sanmati Spectrum Journal" description="Download official manuscript templates, copyright assignment forms, and submission checklists for Sanmati Spectrum of Knowledge.">
            <div className="py-10 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    
                    <SEOBreadcrumb items={breadcrumbs} />

                    <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Downloads & Templates Hub
                        </span>
                        <h1 className="text-2xl sm:text-4xl font-serif font-bold">Author Templates & Official Files</h1>
                        <p className="text-xs sm:text-sm text-slate-300 font-medium">Download standardized MS Word manuscript templates, copyright forms, and complete volume issues.</p>
                    </div>

                    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
                        <h2 className="text-xl font-serif font-bold text-slate-900">Available Files for Download</h2>

                        <div className="space-y-4">
                            {downloads.map((item, idx) => (
                                <div key={idx} className="p-5 border border-slate-200 rounded-2xl bg-slate-50/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded">{item.category}</span>
                                        <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-xs text-slate-500 font-medium">{item.type} • {item.size}</p>
                                    </div>
                                    <a
                                        href={item.url}
                                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-1.5 shrink-0 transition-colors shadow-md shadow-blue-600/20"
                                    >
                                        <Download className="w-4 h-4" /> Download File
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
