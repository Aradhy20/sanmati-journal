import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Banknote, CreditCard, Users, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { GridPattern, DotPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants, ScaleOnHover } from '../../Components/ScrollReveal';

export default function PublicationCharges() {
    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Publication Charges"
                    breadcrumb="Submission"
                    subtitle="Processing Fee & Payment Details"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
                    <DotPattern className="opacity-10" />
                    <div className="max-w-4xl mx-auto mt-12 relative z-10">
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                                <GridPattern className="opacity-5" />
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Banknote className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Publication Fees</h2>

                                    <div className="flex flex-col md:flex-row gap-12 items-stretch">
                                        {/* Pricing Card */}
                                        <ScrollReveal variants={revealVariants.left} className="w-full md:w-1/2">
                                            <div className="h-full p-10 bg-blue-900 text-white rounded-3xl shadow-xl shadow-blue-900/20 flex flex-col justify-between relative overflow-hidden group">
                                                <GridPattern className="opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                                                <div className="relative z-10">
                                                    <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-4">Registration Fee</p>
                                                    <div className="flex items-baseline gap-2 mb-8">
                                                        <span className="text-6xl font-black italic">₹1200</span>
                                                        <span className="text-blue-400 text-lg font-medium">/ Per Issue</span>
                                                    </div>
                                                    <div className="space-y-4">
                                                        {[
                                                            "Online open-access publication",
                                                            "Detailed peer review process",
                                                            "DOI and Indexing services",
                                                            "Certificate of Publication"
                                                        ].map((item, i) => (
                                                            <div key={i} className="flex items-center gap-3 text-sm">
                                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                                                <span className="opacity-90">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="relative z-10 mt-12 p-5 bg-blue-800/50 rounded-2xl border border-blue-700/50">
                                                    <p className="text-xs text-blue-200 uppercase font-bold mb-1">Status</p>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                                                        <span className="font-bold">Active for Vol 1, Issue 1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollReveal>

                                        {/* Payment Info */}
                                        <ScrollReveal variants={revealVariants.right} className="w-full md:w-1/2 space-y-10 py-4">
                                            <div>
                                                <h4 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
                                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                                        <CreditCard className="w-6 h-6" />
                                                    </div>
                                                    Payment Mode
                                                </h4>
                                                <div className="space-y-3 pl-14">
                                                    <p className="text-slate-700 flex items-center gap-3">
                                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                        <span className="font-bold">PhonePe</span>
                                                    </p>
                                                    <p className="text-slate-700 flex items-center gap-3">
                                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                        <span className="font-bold">Google Pay</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
                                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                                        <Users className="w-6 h-6" />
                                                    </div>
                                                    In the name of
                                                </h4>
                                                <div className="pl-14">
                                                    <p className="text-3xl font-black italic text-blue-900 leading-none">NAMRTA</p>
                                                    <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-3 relative overflow-hidden">
                                                        <GridPattern className="opacity-5" />
                                                        <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 relative z-10" />
                                                        <p className="text-xs text-amber-800 leading-relaxed font-medium relative z-10">
                                                            After payment, please send the transaction screenshot along with your manuscript to <strong className="text-amber-900">sanmatijournal@gmail.com</strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Navigation Footer */}
                        <div className="mt-12 flex justify-between items-center px-4">
                            <ScaleOnHover>
                                <Link href="/submission-guidelines/important-info" className="flex items-center gap-2 text-slate-500 hover:text-blue-900 font-bold transition-all group">
                                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-900">
                                        <ArrowRight className="w-4 h-4 rotate-180" />
                                    </div>
                                    Important Info
                                </Link>
                            </ScaleOnHover>
                            <ScaleOnHover>
                                <Link href="/contact" className="flex items-center gap-2 text-slate-500 hover:text-blue-900 font-bold transition-all group">
                                    Contact Us
                                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-900">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            </ScaleOnHover>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
