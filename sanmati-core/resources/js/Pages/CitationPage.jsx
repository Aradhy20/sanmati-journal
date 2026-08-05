import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Copy, Check, Download, ArrowLeft, BookOpen } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function CitationPage({ paper = null }) {
    const [copiedFormat, setCopiedFormat] = useState(null);

    const paperData = paper || {
        id: '1',
        title: "Advancements in Multidisciplinary Empirical Research and Peer Review Governance",
        authors: "Dr Namrata Jain, Dr Ratnesh Kumar Jain",
        year: "2026",
        volume: "1",
        issue: "1",
        pages: "1–12",
        doi: "10.5281/zenodo.sanmati.01"
    };

    const cleanDoi = (paperData.doi || '').replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');

    const citations = {
        apa: `${paperData.authors} (${paperData.year}). ${paperData.title}. Sanmati Spectrum of Knowledge, ${paperData.volume}(${paperData.issue}), ${paperData.pages}. https://doi.org/${cleanDoi}`,
        ieee: `${paperData.authors}, "${paperData.title}," Sanmati Spectrum of Knowledge, vol. ${paperData.volume}, no. ${paperData.issue}, pp. ${paperData.pages}, ${paperData.year}, doi: ${cleanDoi}.`,
        mla: `${paperData.authors}. "${paperData.title}." Sanmati Spectrum of Knowledge, vol. ${paperData.volume}, no. ${paperData.issue}, ${paperData.year}, pp. ${paperData.pages}.`,
        chicago: `${paperData.authors}. "${paperData.title}." Sanmati Spectrum of Knowledge ${paperData.volume}, no. ${paperData.issue} (${paperData.year}): ${paperData.pages}. https://doi.org/${cleanDoi}.`,
        harvard: `${paperData.authors}, ${paperData.year}. ${paperData.title}. Sanmati Spectrum of Knowledge, ${paperData.volume}(${paperData.issue}), pp.${paperData.pages}.`,
        bibtex: `@article{sanmati_${paperData.year}_${paperData.id},\n  author = {${paperData.authors}},\n  title = {${paperData.title}},\n  journal = {Sanmati Spectrum of Knowledge & Emerging Discourse},\n  volume = {${paperData.volume}},\n  number = {${paperData.issue}},\n  pages = {${paperData.pages}},\n  year = {${paperData.year}},\n  issn = {3108-1819},\n  doi = {${cleanDoi}}\n}`,
        ris: `TY  - JOUR\nAU  - ${paperData.authors}\nTI  - ${paperData.title}\nJO  - Sanmati Spectrum of Knowledge & Emerging Discourse\nVL  - ${paperData.volume}\nIS  - ${paperData.issue}\nSP  - ${paperData.pages}\nPY  - ${paperData.year}\nSN  - 3108-1819\nDO  - ${cleanDoi}\nER  -`
    };

    const handleCopy = (format, text) => {
        navigator.clipboard.writeText(text);
        setCopiedFormat(format);
        setTimeout(() => setCopiedFormat(null), 2000);
    };

    return (
        <MainLayout title={`Export Citation | ${paperData.title}`} description="Export citation in APA 7, MLA 9, IEEE, Chicago, Harvard, BibTeX, and RIS formats.">
            <div className="py-12 bg-slate-50 min-h-[85vh]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    
                    <Link href={`/article/${paperData.id}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline">
                        <ArrowLeft className="w-4 h-4" /> Back to Research Article
                    </Link>

                    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
                        <div className="space-y-2 border-b border-slate-100 pb-4">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 font-bold text-[10px] uppercase tracking-wider rounded-full">
                                Multi-Format Reference Export
                            </span>
                            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">{paperData.title}</h1>
                            <p className="text-xs text-slate-500 font-medium">By {paperData.authors} • DOI: {paperData.doi}</p>
                        </div>

                        <div className="space-y-4">
                            {Object.entries(citations).map(([fmt, text]) => (
                                <div key={fmt} className="p-5 border border-slate-200 rounded-2xl bg-slate-50/60 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{fmt.toUpperCase()} Format</span>
                                        <button
                                            onClick={() => handleCopy(fmt, text)}
                                            className="px-3 py-1.5 bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-blue-600 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
                                        >
                                            {copiedFormat === fmt ? (
                                                <>
                                                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-3.5 h-3.5" /> Copy Reference
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <pre className="text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed select-all">
                                        {text}
                                    </pre>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
