import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Head } from '@inertiajs/react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-[#E9E5DD] last:border-0">
            <button
                className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={`text-sm transition-colors font-serif font-bold ${isOpen ? 'text-primary' : 'text-dark group-hover:text-primary'}`}>
                    {question}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded border transition-all duration-300 flex items-center justify-center ${isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-[#F7F4EC] border-[#E9E5DD] text-slate-500 group-hover:border-primary group-hover:text-primary'}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-xs text-slate-500 leading-relaxed font-medium max-w-2xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "How can I publish research paper in India with Sanmati Journal?",
            a: "Authors can publish research paper in India by submitting their manuscript online via our Call for Papers portal or by emailing sanmatijournal@gmail.com. Submissions undergo rapid double-blind peer review with CrossRef DOI registration."
        },
        {
            q: "Is Sanmati Journal a peer reviewed journal?",
            a: "Yes, Sanmati Spectrum of Knowledge is a double-blind peer reviewed journal. Every submitted manuscript is reviewed by two independent subject matter experts within 15–30 days."
        },
        {
            q: "What is the ISSN journal registration number of Sanmati Journal?",
            a: "Sanmati Journal is a registered ISSN journal holding online ISSN 3108-1819, ensuring global recognition and permanent digital indexing."
        },
        {
            q: "What disciplines does this multidisciplinary research journal cover?",
            a: "As a leading multidisciplinary research journal, we publish peer-reviewed papers across Science & Technology, Social Sciences, Arts & Humanities, Law & Governance, Commerce & Management, Education, and Indian Knowledge Systems."
        },
        {
            q: "Is Sanmati Journal aligned with UGC Care journal quality standards?",
            a: "Yes, Sanmati Journal follows COPE publication ethics, strict double-blind peer review, CrossRef DOI indexing, and academic standards fully aligned with UGC Care journal criteria."
        },
        {
            q: "How fast is the peer review process for manuscript publication?",
            a: "Our peer reviewed journal maintains a fast turnaround timeline of 15–30 days from initial submission to final editorial decision."
        }
    ];

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section className="py-16 bg-[#FFFDF8] relative" aria-labelledby="faq-title">
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(faqJsonLd)}
                </script>
            </Head>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-2 mx-auto">
                            <HelpCircle className="w-3.5 h-3.5" /> FAQ Support
                        </div>
                        <h2 id="faq-title" className="text-2xl md:text-3xl font-serif font-medium text-dark">Frequently Asked Questions</h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <div className="bg-white rounded-xl border border-[#E9E5DD] p-6 md:p-8">
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={i}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
