import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, FileText, ChevronRight, Scale, Clock, Award } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function ReviewerGuidelines() {
    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Reviewer Guidelines', href: '/reviewer-guidelines' }
    ];

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": crumb.name,
            "item": `https://sanmatijournal.in${crumb.href}`
        }))
    };

    return (
        <MainLayout
            title="Reviewer Guidelines & Evaluation Criteria | Sanmati Journal"
            description="Official peer reviewer guidelines, evaluation rubrics, confidentiality requirements, and ethical code of conduct for Sanmati Spectrum of Knowledge."
            keywords="Reviewer guidelines, Peer review guidelines, Reviewer ethics, Academic peer review criteria, Sanmati journal reviewer"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div className="bg-gradient-to-b from-slate-50 to-white py-12 lg:py-20 border-b border-slate-200/60">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-6">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-blue-600 font-bold">Reviewer Guidelines</span>
                    </nav>

                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-3.5 h-3.5" /> Peer Review Standards
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight">
                            Peer Reviewer Guidelines
                        </h1>
                        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                            Guidelines for subject experts evaluating research manuscripts for Sanmati Spectrum of Knowledge (ISSN 3108-1819).
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="bg-white py-12 lg:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                    <section className="grid sm:grid-cols-3 gap-4">
                        {[
                            { icon: Scale, label: 'Double-Blind Review', desc: 'Author & reviewer identities remain anonymous.' },
                            { icon: Clock, label: '15–30 Days Window', desc: 'Timely review completion for rapid dissemination.' },
                            { icon: Award, label: 'COPE Ethics', desc: 'Strict adherence to international peer review standards.' },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                    <div className="text-sm font-heading font-bold text-slate-900">{item.label}</div>
                                    <div className="text-xs text-slate-500">{item.desc}</div>
                                </div>
                            );
                        })}
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-heading font-bold text-slate-900">Key Evaluation Criteria</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: 'Originality & Contribution', text: 'Does the manuscript provide novel insights, methodologies, or findings?' },
                                { title: 'Methodological Rigor', text: 'Are the research design, data collection, and analysis scientifically sound?' },
                                { title: 'Clarity & Structure', text: 'Is the paper logically organized, clearly written, and properly cited?' },
                                { title: 'Ethical Compliance', text: 'Are ethics approvals, data privacy, and consent documented where applicable?' },
                            ].map((c, i) => (
                                <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm space-y-1.5">
                                    <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        {c.title}
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed pl-6">{c.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="p-6 bg-blue-600 text-white rounded-2xl space-y-4 text-center">
                        <h2 className="text-xl font-heading font-bold">Join Our Reviewer Panel</h2>
                        <p className="text-blue-100 text-sm max-w-lg mx-auto">
                            Academicians and domain experts are invited to join our international peer review panel.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-xs uppercase tracking-wider hover:bg-blue-50 transition-colors">
                            Apply as a Reviewer
                        </Link>
                    </section>

                </div>
            </div>
        </MainLayout>
    );
}
