import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
    {
        q: 'What types of research papers do you accept?',
        a: 'We accept original research articles, review papers, case studies, and short communications across all multidisciplinary fields including science, technology, engineering, mathematics, humanities, social sciences, arts, and commerce.',
    },
    {
        q: 'What is the peer review process at Sanmati Spectrum?',
        a: 'We follow a rigorous double-blind peer review process where both the author and reviewer identities are kept anonymous. Manuscripts are reviewed by two or more subject-matter experts. The review typically takes 15–30 days.',
    },
    {
        q: 'Is there a publication fee (APC)?',
        a: 'Yes, we charge an Article Processing Charge (APC) to cover editorial, typesetting, DOI assignment, and hosting costs. Specific fee details are available on our Publication Charges page. Fee waivers may be considered in certain cases.',
    },
    {
        q: 'Will my paper receive a DOI?',
        a: 'Yes. Every accepted paper is assigned a permanent CrossRef Digital Object Identifier (DOI), making your research permanently citable and discoverable across academic databases.',
    },
    {
        q: 'How do I submit my manuscript?',
        a: 'Download our author template from the Submission Guidelines page, prepare your manuscript according to the formatting requirements, and submit it via the online portal or by email to sanmatijournal@gmail.com.',
    },
    {
        q: 'Can I track the status of my submitted paper?',
        a: 'Yes. After submission, you can track the progress of your manuscript using the Track Manuscript feature on our website. You will also receive updates via email at each stage of the review process.',
    },
    {
        q: 'Is the journal open access?',
        a: 'Yes. Sanmati Spectrum of Knowledge is a fully open access journal. All published papers are freely accessible to readers worldwide under the Creative Commons CC-BY 4.0 license.',
    },
    {
        q: 'How long does it take from submission to publication?',
        a: 'From submission to final publication typically takes 4–8 weeks depending on the review timeline and revision requirements. Accepted papers are published in the next available issue without unnecessary delays.',
    },
];

function FAQItem({ faq, index }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-blue-200 transition-colors duration-200"
        >
            <button
                onClick={() => setOpen(p => !p)}
                className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${open ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                aria-expanded={open}
            >
                <span className={`text-sm font-bold leading-snug ${open ? 'text-blue-700' : 'text-slate-800'}`}>
                    {faq.q}
                </span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full ${open ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'} transition-colors duration-200`}
                >
                    <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function HomeFAQ() {
    // JSON-LD FAQ Schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60" aria-labelledby="faq-heading">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Header */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-5"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-heading font-bold text-slate-900">
                                Frequently Asked<br />
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
                            </h2>
                            <p className="text-slate-500 text-base leading-relaxed">
                                Everything you need to know about publishing with Sanmati Spectrum of Knowledge.
                            </p>
                            <div className="pt-2">
                                <p className="text-sm text-slate-500 mb-3">Still have questions?</p>
                                <a
                                    href="mailto:sanmatijournal@gmail.com"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                                >
                                    Contact Editorial Team
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: FAQ accordion */}
                    <div className="lg:col-span-8 space-y-3">
                        {FAQS.map((faq, i) => (
                            <FAQItem key={i} faq={faq} index={i} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
