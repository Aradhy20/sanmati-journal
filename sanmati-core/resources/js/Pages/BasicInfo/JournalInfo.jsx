import { motion } from 'framer-motion';
import {
    FileText, Globe, Zap, Shield, Award, Star, Users,
    BookOpen, Calendar, MapPin, Mail, GraduationCap, Layers
} from 'lucide-react';
import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import Seo from '../../Components/Seo';

const INFO_ROWS = [
    { label: 'Full Journal Title',        value: 'Sanmati Spectrum of Knowledge & Emerging Discourse', icon: BookOpen, highlight: false },
    { label: 'ISSN (Online)',              value: '3108-1819', icon: Layers, highlight: true, badge: 'badge-issn' },
    { label: 'Journal Impact Factor',     value: '5.3 (CrossRef Indexed)', icon: Star, highlight: true, badge: 'ds-badge-accent' },
    { label: 'Publication Format',        value: 'Print & Online (Bilingual)', icon: FileText, highlight: false },
    { label: 'Frequency',                 value: 'Quarterly (4 issues per year)', icon: Calendar, highlight: false },
    { label: 'Language',                  value: 'Bilingual — Hindi & English', icon: Globe, highlight: false },
    { label: 'Access Type',               value: 'Open Access (Free to Read)', icon: Shield, highlight: false },
    { label: 'DOI',                       value: 'CrossRef DOI assigned to every article', icon: Award, highlight: false },
    { label: 'Peer Review',               value: 'Double-Blind Peer Review', icon: GraduationCap, highlight: false },
    { label: 'Publisher',                 value: 'Sanmati Publication, Haridwar, Uttarakhand, India', icon: MapPin, highlight: false },
    { label: 'President & Editor-in-Chief', value: 'Dr Namrata Jain', icon: Users, highlight: false },
    { label: 'Contact Email',             value: 'sanmatijournal@gmail.com', icon: Mail, highlight: false, link: 'mailto:sanmatijournal@gmail.com' },
];

export default function JournalInfo() {
    return (
        <MainLayout>
            <Seo
                title="Journal Information — Sanmati Spectrum of Knowledge"
                description="Key details and metadata about Sanmati Spectrum of Knowledge & Emerging Discourse — ISSN 3108-1819, Impact Factor 5.3, CrossRef DOI, Open Access, Quarterly."
            />
            <PageHeader
                title="Journal Information"
                subtitle="Key details, metadata, and publishing standards of the Sanmati Spectrum Journal"
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Basic Information', url: '#' },
                    { name: 'Journal Information', url: '#' },
                ]}
            />

            <section className="section-py bg-warm-bg" aria-labelledby="journal-info-title">
                <div className="container-custom max-w-4xl">

                    {/* Header badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-2 mb-8"
                    >
                        <span className="badge-issn">ISSN 3108-1819</span>
                        <span className="badge-open">Open Access</span>
                        <span className="badge-peer">Double-Blind Review</span>
                        <span className="ds-badge-accent">Impact Factor 5.3</span>
                        <span className="badge-doi">CrossRef DOI</span>
                    </motion.div>

                    {/* Info Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[var(--shadow-card)]"
                    >
                        <div className="h-1 bg-gradient-to-r from-secondary via-accent to-emerald" />
                        {INFO_ROWS.map((row, i) => {
                            const Icon = row.icon;
                            return (
                                <div
                                    key={row.label}
                                    className={`flex items-start gap-4 px-6 py-5 border-b border-slate-50 hover:bg-slate-50/60 transition-colors duration-150 ${
                                        i === INFO_ROWS.length - 1 ? 'border-b-0' : ''
                                    }`}
                                >
                                    <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[11px] font-black uppercase tracking-wider text-muted mb-0.5">{row.label}</div>
                                        {row.link ? (
                                            <a href={row.link} className="text-sm font-bold text-accent hover:text-primary transition-colors">
                                                {row.value}
                                            </a>
                                        ) : (
                                            <div className={`text-sm font-bold ${row.highlight ? 'text-secondary' : 'text-primary'}`}>
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
                        transition={{ delay: 0.3 }}
                        className="text-xs text-muted text-center mt-6"
                    >
                        For complete submission guidelines, visit the{' '}
                        <a href="/submission-guidelines" className="text-accent font-bold hover:underline">Author Guidelines</a> page.
                    </motion.p>
                </div>
            </section>
        </MainLayout>
    );
}
