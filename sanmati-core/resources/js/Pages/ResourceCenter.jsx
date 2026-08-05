import { motion } from 'framer-motion';
import { Download, FileText, CheckSquare, Award, BookOpen } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';

export default function ResourceCenter() {
    const resources = [
        {
            title: "Author Manuscript Formatting Template (MS Word)",
            desc: "Official MS Word manuscript template with pre-formatted typography, title page structure, abstract layout, and reference styles.",
            type: "Word Template (.docx)",
            size: "245 KB",
            url: "/download/author-guidelines-template",
            category: "Submission Template"
        },
        {
            title: "Pre-Submission Peer Review & Plagiarism Checklist",
            desc: "Comprehensive 15-point checklist covering abstract clarity, empirical methodology, reference completeness, and similarity index limits.",
            type: "PDF Checklist (.pdf)",
            size: "140 KB",
            url: "/download/submission-checklist",
            category: "Author Checklist"
        },
        {
            title: "APA 7th & IEEE Citation Cheat Sheet",
            desc: "Quick reference guide for formatting journal articles, books, online DOIs, and in-text citations.",
            type: "PDF Guide (.pdf)",
            size: "310 KB",
            url: "/download/citation-guide",
            category: "Reference Guide"
        }
    ];

    return (
        <MainLayout title="Resource Center & Downloadable Templates | Sanmati Spectrum" description="Free downloadable manuscript templates, pre-submission checklists, and APA 7th / IEEE citation cheat sheets for academic authors.">
            <div className="py-12 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Author Toolkit & Resources
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">Resource Center & Downloadable Templates</h1>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                            Standardized MS Word paper templates, peer review checklists, and citation reference guides for research authors.
                        </p>
                    </div>

                    {/* Resources Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {resources.map((res, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 font-bold text-[10px] uppercase rounded">
                                        {res.category}
                                    </span>
                                    <h3 className="text-base font-bold text-slate-900 leading-snug">{res.title}</h3>
                                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{res.desc}</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[11px] text-slate-400 font-medium">{res.size}</span>
                                    <a
                                        href={res.url}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-colors shadow-md shadow-blue-600/20"
                                    >
                                        <Download className="w-3.5 h-3.5" /> Download
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
