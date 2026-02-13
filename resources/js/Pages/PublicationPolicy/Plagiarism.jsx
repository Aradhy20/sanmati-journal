import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { GridPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants } from '../../Components/ScrollReveal';

export default function Plagiarism() {
    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen relative">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                    <GridPattern className="w-[600px] h-[600px]" />
                </div>

                <PageHeader
                    title="Plagiarism Policy"
                    breadcrumb="Policy"
                    subtitle="Zero-tolerance policy towards academic dishonesty"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
                    <ScrollReveal variants={revealVariants.up}>
                        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 max-w-4xl mx-auto text-center mt-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500" />

                            <div className="inline-block p-4 bg-red-50 rounded-full text-red-600 mb-6 ring-4 ring-red-50/50">
                                <AlertTriangle className="w-12 h-12" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Strict Screening Process</h2>
                            <p className="text-slate-700 text-lg leading-relaxed mb-8">
                                The journal follows a strict zero-tolerance policy. All submissions are screened using industry-standard plagiarism detection software before the review process begins.
                            </p>

                            <div className="inline-block bg-slate-50 p-8 rounded-2xl border-2 border-dashed border-slate-200 mb-8">
                                <div className="text-6xl font-black text-slate-900 mb-2 tracking-tighter">20%</div>
                                <div className="text-blue-600 font-bold uppercase tracking-widest text-xs">Maximum Similarity Index</div>
                                <p className="text-sm text-slate-400 mt-2 font-medium">(Excluding References)</p>
                            </div>

                            <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-red-800 text-sm font-medium">
                                Manuscripts exceeding this limit will be <strong className="text-red-900 underline decoration-red-300 decoration-2 underline-offset-2">summarily rejected</strong> without peer review.
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </MainLayout>
    );
}
