import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Globe, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Copyright() {
    return (
        <MainLayout
            title="Copyright & Licensing Policy | Sanmati Spectrum Journal"
            description="Official copyright and Creative Commons licensing policy (CC-BY 4.0) of Sanmati Spectrum of Knowledge & Emerging Discourse (ISSN 3108-1819)."
            keywords="Copyright policy, CC-BY 4.0, Open Access licensing, Author rights, Academic publishing policy, Sanmati journal copyright"
        >
            <div className="bg-gradient-to-b from-slate-50 to-white py-12 lg:py-20 border-b border-slate-200/60">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-6">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-blue-600 font-bold">Copyright Policy</span>
                    </nav>

                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                            <Scale className="w-3.5 h-3.5" /> Open Access Licensing
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight">
                            Copyright & Licensing Policy
                        </h1>
                        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                            Sanmati Spectrum of Knowledge operates under the Creative Commons Attribution 4.0 International (CC-BY 4.0) License. Authors retain full copyright of their published work.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="bg-white py-12 lg:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                    <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                        <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-600" />
                            CC-BY 4.0 Open Access License
                        </h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            Under the CC-BY 4.0 license, anyone is free to copy, distribute, transmit, and adapt the work, provided the original author(s) and source are properly cited. This maximizes research visibility and global dissemination.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-heading font-bold text-slate-900">Author Rights & Permissions</h2>
                        <ul className="space-y-3 text-sm text-slate-700">
                            {[
                                'Authors retain full copyright without restrictions.',
                                'Authors grant Sanmati Spectrum of Knowledge the right of first publication.',
                                'Authors are free to deposit published PDFs in institutional or subject repositories.',
                                'Commercial and non-commercial re-use is permitted with proper attribution.',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="p-6 bg-blue-50 border border-blue-100 rounded-2xl space-y-3">
                        <h3 className="text-base font-heading font-bold text-slate-900 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                            Plagiarism & Originality
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            All manuscripts submitted to Sanmati Spectrum must be original works not under consideration elsewhere. Plagiarism or self-plagiarism in any form is strictly prohibited.
                        </p>
                    </section>

                </div>
            </div>
        </MainLayout>
    );
}
