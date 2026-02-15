import { useState } from 'react';
import { ScrollReveal, revealVariants } from './ScrollReveal';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                onClick={onClick}
            >
                <span className={`text-lg transition-colors font-medium ${isOpen ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'}`}>
                    {question}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-blue-600 border-blue-600 text-white rotate-180' : 'bg-white border-slate-200 text-slate-500 group-hover:border-blue-600 group-hover:text-blue-600'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-600 leading-relaxed max-w-2xl">
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
            q: "How fast is the peer review process?",
            a: "We pride ourselves on efficiency. Our typical turnaround time from submission to first decision is 4-6 weeks. We use an automated tracking system to keep reviews on schedule."
        },
        {
            q: "Is the journal indexed in Scopus/Web of Science?",
            a: "We are currently indexed in Google Scholar, CrossRef, and ResearchGate. Application for Scopus and Web of Science indexing is in progress and expected to be completed by late 2026."
        },
        {
            q: "What are the publication charges (APC)?",
            a: "We maintain a transparent Article Processing Charge (APC) policy to support open access. Detailed fee structures are available on our submission guidelines page. Partial waivers are available for researchers from low-income countries."
        },
        {
            q: "Can I submit a review paper?",
            a: "Yes! We welcome original research articles, review papers, case studies, and short communications across all our multidisciplinary tracks."
        },
        {
            q: "How do I track my submission?",
            a: "Once you submit, you will receive login credentials for our Author Dashboard, where you can see real-time updates on your manuscript's status."
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                            <HelpCircle className="w-4 h-4" /> Need Help?
                        </span>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Got questions? We've got answers.</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} variants={revealVariants.fadeUp}>
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
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
