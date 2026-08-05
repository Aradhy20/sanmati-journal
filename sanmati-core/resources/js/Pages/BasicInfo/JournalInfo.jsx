import { motion } from 'framer-motion';
import {
    FileText, Globe, Shield, Award, Star, Users,
    BookOpen, Calendar, MapPin, Mail, GraduationCap, Layers
} from 'lucide-react';
import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import Seo from '../../Components/Seo';

const INFO_ROWS = [
    { label: 'Full Journal Title',        value: 'Sanmati Spectrum of Knowledge & Emerging Discourse', icon: BookOpen, highlight: false },
    { label: 'ISSN (Online)',              value: '3108-1819', icon: Layers, highlight: true },
    { label: 'Journal Impact Factor',     value: '5.3 (CrossRef Indexed)', icon: Star, highlight: true },
    { label: 'Publication Format',        value: 'Print & Online (Bilingual)', icon: FileText, highlight: false },
    { label: 'Frequency',                 value: 'Quarterly (4 issues per year)', icon: Calendar, highlight: false },
    { label: 'Language',                  value: 'Bilingual — Hindi & English', icon: Globe, highlight: false },
    { label: 'Access Type',               value: 'Open Access (Free to Read)', icon: Shield, highlight: false },
    { label: 'DOI',                       value: 'CrossRef DOI assigned to every article', icon: Award, highlight: false },
    { label: 'Peer Review',               value: 'Double-Blind Peer Review', icon: GraduationCap, highlight: false },
    { label: 'Publisher',                 value: "B-002 ‘Sanmati’ Faculty Block, TMU Campus, Delhi Road Moradabad", icon: MapPin, highlight: false },
    { label: 'President & Editor-in-Chief', value: 'Dr Namrata Jain', icon: Users, highlight: false },
    { label: 'Contact Email',             value: 'sanmatijournal@gmail.com', icon: Mail, highlight: false, link: 'mailto:sanmatijournal@gmail.com' },
];

export default function JournalInfo() {
    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Journal Information - Sanmati Spectrum of Knowledge",
            "url": "https://sanmatijournal.in/basic-info/journal-info",
            "description": "Essential metadata: ISSN 3108-1819, Impact Factor 5.3, CrossRef DOI, Quarterly bilingual publication details."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Basic Info', url: '/basic-info/about-journal' },
            { name: 'Journal Info', url: '/basic-info/journal-info' }
        ]
    };

    return (
        <MainLayout
            title="Journal Information & Metadata | Sanmati Journal"
            description="Key metadata and publishing details: ISSN 3108-1819, Impact Factor 5.3, CrossRef DOI, double-blind peer review, quarterly bilingual publication."
            keywords="journal info, ISSN 3108-1819, impact factor 5.3, publication frequency, sanmati journal metadata, bilingual research journal"
            jsonLd={jsonLd}
        >
            <PageHeader
                title="Journal Information"
                subtitle="Key details, metadata, and publishing standards of the Sanmati Spectrum Journal"
            />

            <section className="py-12 lg:py-16 bg-[#FFFDF8] text-[#2E2E2E]" aria-labelledby="journal-info-title">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-1.5 mb-8"
                    >
                        <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-[#E9E5DD] text-slate-700 rounded">ISSN 3108-1819</span>
                        <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-primary/15 text-primary rounded">Open Access</span>
                        <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-[#E9E5DD]/60 text-slate-500 rounded">Double-Blind Review</span>
                        <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-secondary/15 text-secondary rounded">Impact Factor 5.3</span>
                        <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-primary/10 text-primary rounded">CrossRef DOI</span>
                    </motion.div>

                    {/* Info Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-xl border border-[#E9E5DD] overflow-hidden"
                    >
                        {INFO_ROWS.map((row, i) => {
                            const Icon = row.icon;
                            return (
                                <div
                                    key={row.label}
                                    className={`flex items-start gap-4 px-6 py-4.5 border-b border-[#E9E5DD]/60 hover:bg-[#F7F4EC]/30 transition-colors duration-150 ${
                                        i === INFO_ROWS.length - 1 ? 'border-b-0' : ''
                                    }`}
                                >
                                    <div className="w-8 h-8 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">{row.label}</div>
                                        {row.link ? (
                                            <a href={row.link} className="text-xs font-bold text-primary hover:underline">
                                                {row.value}
                                            </a>
                                        ) : (
                                            <div className={`text-xs font-bold ${row.highlight ? 'text-secondary' : 'text-dark'}`}>
                                                {row.value}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[10px] font-bold text-center text-slate-400 uppercase tracking-wider mt-8"
                    >
                        For complete submission guidelines, visit the{' '}
                        <a href="/submission-guidelines" className="text-primary hover:underline">Author Guidelines</a> portal.
                    </motion.p>
                </div>
            </section>
        </MainLayout>
    );
}
