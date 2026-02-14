import { Link } from '@inertiajs/react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { Trophy, Star, Award, Medal, Mail, ArrowRight } from 'lucide-react';
import { revealVariants, ScrollReveal } from '../Components/ScrollReveal';

export default function Awards() {
    const awards = [
        {
            title: "Researcher of the Year",
            category: "Individual Excellence",
            desc: "Recognizing outstanding contribution to knowledge and high-impact publications.",
            icon: <Trophy className="w-8 h-8 text-amber-500" />
        },
        {
            title: "Young Scholar Award",
            category: "Emerging Talent",
            desc: "Encouraging innovative research among postgraduate and doctoral students.",
            icon: <Star className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Best Paper Award",
            category: "Annual Issue",
            desc: "Awarded to the most impactful and rigorous research published in the journal.",
            icon: <Award className="w-8 h-8 text-emerald-500" />
        }
    ];

    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Academic Awards"
                    breadcrumb="Recognition"
                    subtitle="Celebrating excellence in research and scholarship"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="max-w-5xl mx-auto mt-12">
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Trophy className="w-32 h-32" />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 font-serif">Honoring Excellence</h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-16 max-w-3xl">
                                    Sanmati Journal is proud to recognize and honor scholars who push the boundaries of knowledge. Our annual awards celebrate academic rigor, innovation, and commitment to the global research community.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                                    {awards.map((award, i) => (
                                        <div key={i} className="group p-8 bg-slate-50 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-white rounded-3xl shadow-lg border border-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                                                {award.icon}
                                            </div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">{award.category}</div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4">{award.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{award.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                                    <div className="flex-1 p-10 bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-[48px] shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-6">
                                                <Medal className="w-10 h-10 text-amber-400" />
                                                <h4 className="text-2xl font-black uppercase italic tracking-wider">Nomination Open</h4>
                                            </div>
                                            <p className="text-blue-100 mb-10 leading-relaxed italic border-l-2 border-amber-400 pl-6">
                                                Nominations for the 2026 Academic Cycle are now being accepted. Self-nominations and institutional recommendations are welcome.
                                            </p>
                                            <div className="flex flex-col gap-4">
                                                <Link href="/contact" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                                                    Submit Nomination <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                                <p className="text-blue-200 text-xs italic text-center">
                                                    Or email directly: <a href="mailto:sanmatijournal@gmail.com" className="underline hover:text-white">sanmatijournal@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-80 p-8 border-2 border-slate-100 rounded-[48px] flex flex-col justify-center items-center text-center">
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Inquiry</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-serif px-4">
                                            Questions regarding eligibility criteria or submission process?
                                        </p>
                                        <a href="mailto:sanmatijournal@gmail.com" className="text-blue-600 font-bold flex items-center gap-2">
                                            <Mail className="w-4 h-4" /> Email Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
