import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, BookOpen, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CitationGenerator({ paper }) {
    const [activeFormat, setActiveFormat] = useState('apa');

    const isSpecialIssue = Boolean(paper.issue?.is_special_issue || paper.category === 'Special Issue Article' || (!paper.issue?.volume && !paper.issue?.number && paper.doi));

    // Helper functions to generate citation strings
    const generateAPA = () => {
        if (isSpecialIssue) {
            return `${paper.authors}. ${paper.title}. Sanmati Spectrum of Knowledge & Emerging Discourse (Special Issue). ${paper.doi || ''}`.trim();
        }
        const year = paper.issue?.year || new Date().getFullYear();
        const volumeStr = paper.issue?.volume ? `, ${paper.issue.volume}` : '';
        const numberStr = paper.issue?.number ? `(${paper.issue.number})` : '';
        return `${paper.authors} (${year}). ${paper.title}. Sanmati Spectrum of Knowledge & Emerging Discourse${volumeStr}${numberStr}. ${paper.doi || ''}`.trim();
    };

    const generateMLA = () => {
        if (isSpecialIssue) {
            return `${paper.authors}. "${paper.title}." Sanmati Spectrum of Knowledge & Emerging Discourse, Special Issue.${paper.doi ? ' ' + paper.doi : ''}`.trim();
        }
        const year = paper.issue?.year || new Date().getFullYear();
        const volumeStr = paper.issue?.volume ? `, vol. ${paper.issue.volume}` : '';
        const numberStr = paper.issue?.number ? `, no. ${paper.issue.number}` : '';
        return `${paper.authors}. "${paper.title}." Sanmati Spectrum of Knowledge & Emerging Discourse${volumeStr}${numberStr}, ${year}.${paper.doi ? ' ' + paper.doi : ''}`.trim();
    };

    const generateBibTeX = () => {
        const year = paper.issue?.year || (isSpecialIssue ? '' : new Date().getFullYear());
        const authorStr = paper.authors.replace(/,/g, ' and');
        const cleanAuthor = paper.authors.split(' ')[0].replace(/[^a-zA-Z]/g, '') || 'author';
        const citationKey = `${cleanAuthor}${year || 'special'}`;
        
        if (isSpecialIssue) {
            return `@article{${citationKey},
    title = {${paper.title}},
    author = {${authorStr}},
    journal = {Sanmati Spectrum of Knowledge & Emerging Discourse},
    note = {Special Issue},
    doi = {${paper.doi || ''}}
}`;
        }

        return `@article{${citationKey},
    title = {${paper.title}},
    author = {${authorStr}},
    journal = {Sanmati Spectrum of Knowledge & Emerging Discourse},
    year = {${year}},
    volume = {${paper.issue?.volume || ''}},
    number = {${paper.issue?.number || ''}},
    doi = {${paper.doi || ''}}
}`;
    };

    const citations = {
        apa: generateAPA(),
        mla: generateMLA(),
        bibtex: generateBibTeX()
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(citations[activeFormat])
            .then(() => toast.success('Citation copied to clipboard!'))
            .catch(() => toast.error('Failed to copy.'));
    };

    return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
            {/* Format Tabs */}
            <div className="flex border-b border-slate-200 bg-white">
                {['apa', 'mla', 'bibtex'].map((format) => (
                    <button
                        key={format}
                        onClick={() => setActiveFormat(format)}
                        className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                            activeFormat === format 
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' 
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                    >
                        {format}
                    </button>
                ))}
            </div>

            {/* Citation Output Box */}
            <div className="p-6 relative">
                <div className="absolute top-6 right-6">
                    <button 
                        onClick={handleCopy}
                        className="p-2 text-slate-400 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-lg transition-all"
                        title="Copy to Clipboard"
                        aria-label="Copy citation to clipboard"
                    >
                        <Copy className="w-5 h-5" />
                    </button>
                </div>
                
                <pre className="text-slate-800 font-serif leading-relaxed text-sm pr-12 whitespace-pre-wrap break-words">
                    {citations[activeFormat]}
                </pre>
            </div>
        </div>
    );
}
