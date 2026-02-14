import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { BookOpen, PenTool, Globe, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function BookPublication() {
    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Book Publication"
                    breadcrumb="Services"
                    subtitle="Professional publishing services for authors and researchers"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="max-w-4xl mx-auto mt-12">
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <BookOpen className="w-32 h-32" />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 font-serif">Publish Your Book With Us</h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-12">
                                    Sanmati Journal expands its commitment to academic excellence through our dedicated Book Publication wing. we provide a comprehensive platform for authors to publish high-quality academic books, monographs, and edited volumes.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <PenTool className="w-8 h-8 text-blue-600 mb-4" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Editorial Support</h3>
                                        <p className="text-slate-600 text-sm">Professional editing and proofreading services to ensure your manuscript meets global standards.</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <Globe className="w-8 h-8 text-blue-600 mb-4" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Global Reach</h3>
                                        <p className="text-slate-600 text-sm">Worldwide distribution through digital platforms and indexing services for maximum visibility.</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Assurance</h3>
                                        <p className="text-slate-600 text-sm">Rigorous peer review of book proposals and manuscripts to maintain academic integrity.</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Customized Layout</h3>
                                        <p className="text-slate-600 text-sm">Expert interior layout and cover design tailored to the academic discipline.</p>
                                    </div>
                                </div>

                                <div className="p-8 bg-blue-900 text-white rounded-3xl text-center">
                                    <h4 className="text-2xl font-bold mb-4">Submission Proposal</h4>
                                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                                        We are currently accepting book proposals for the upcoming calendar year. Submit your abstract or full proposal today.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                                        <Mail className="w-5 h-5" /> Inquire About Publication
                                    </Link>
                                    <p className="mt-4 text-blue-200 text-sm">
                                        Or email us directly at{' '}
                                        <a href="mailto:sanmatijournal@gmail.com" className="underline text-white hover:text-blue-100">
                                            sanmatijournal@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
