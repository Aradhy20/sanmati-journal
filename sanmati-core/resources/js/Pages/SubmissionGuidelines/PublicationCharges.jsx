import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Banknote, CreditCard, Users, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { ScrollReveal } from '../../Components/ScrollReveal';

export default function PublicationCharges() {
    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Publication Charges & APC",
            "url": "https://sanmatijournal.in/submission-guidelines/publication-charges",
            "description": "Article Processing Charges (APC) and open access publication fee details for Sanmati Spectrum of Knowledge."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Submission Guidelines', url: '/submission-guidelines' },
            { name: 'Publication Charges', url: '/submission-guidelines/publication-charges' }
        ]
    };

    return (
        <MainLayout
            title="Publish Research Paper in India — Fee & APC Details | Sanmati Journal"
            description="Transparent APC fees to publish research paper in India with Sanmati peer reviewed journal (ISSN 3108-1819). Open access publishing, CrossRef DOI, and UGC Care quality compliance."
            keywords="UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal, APC fee India"
            jsonLd={jsonLd}
        >
            <div className="bg-[#FFFDF8] min-h-screen">
                <PageHeader
                    title="Publish Research Paper in India — Fee & APC Details"
                    breadcrumb="Submission"
                    subtitle="UGC Care Aligned Peer Reviewed Multidisciplinary ISSN Journal Fees"
                />

                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 relative">
                    <div className="max-w-3xl mx-auto mt-10">
                        <ScrollReveal>
                            <div className="bg-white p-6 md:p-10 rounded-xl border border-[#E9E5DD]">
                                <div className="absolute top-0 right-0 p-6 opacity-5">
                                    <Banknote className="w-24 h-24 text-primary" />
                                </div>

                                <div className="relative z-10 space-y-8">
                                    <h2 className="text-xl font-serif font-bold text-dark border-b border-[#E9E5DD] pb-3">Publication Fees</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                                        {/* Pricing Card */}
                                        <div className="h-full p-6 bg-[#F7F4EC] border border-[#E9E5DD] rounded-xl flex flex-col justify-between">
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Processing Fee</p>
                                                <div className="flex items-baseline gap-1.5">
                                                    <span className="text-4xl font-serif font-bold text-dark">₹1,200</span>
                                                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">/ Per Article</span>
                                                </div>
                                                <div className="space-y-2.5 pt-2 border-t border-[#E9E5DD]/60">
                                                    {[
                                                        "Online open-access publication",
                                                        "Blind peer review coordinator fee",
                                                        "CrossRef DOI & Metadata registry",
                                                        "Digital credentials certificate"
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                            <span>{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-6 p-3 bg-white rounded border border-[#E9E5DD] flex items-center gap-2">
                                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Active for Current Call</span>
                                            </div>
                                        </div>

                                        {/* Payment Info */}
                                        <div className="space-y-6 py-2">
                                            <div className="space-y-2">
                                                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dark">
                                                    <CreditCard className="w-4 h-4 text-primary" />
                                                    Payment Channels
                                                </h4>
                                                <ul className="space-y-1.5 pl-6 list-disc text-xs text-slate-500 font-medium">
                                                    <li>PhonePe QR / Handle</li>
                                                    <li>Google Pay</li>
                                                    <li>IMPS/UPI Bank Transfer</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dark">
                                                    <Users className="w-4 h-4 text-primary" />
                                                    Beneficiary Account
                                                </h4>
                                                <div className="pl-6 space-y-3">
                                                    <p className="text-lg font-serif font-bold text-dark">NAMRATA JAIN</p>
                                                    
                                                    <div className="p-3 bg-[#F7F4EC] border border-[#E9E5DD] rounded flex items-start gap-2.5">
                                                        <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                        <p className="text-[10px] text-slate-500 leading-relaxed font-bold">
                                                            Please send transaction confirmation screenshot with paper ID reference to <span className="text-primary hover:underline">sanmatijournal@gmail.com</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Navigation Footer */}
                        <div className="mt-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            <Link href="/submission-guidelines/important-info" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                                Important Info
                            </Link>
                            <Link href="/contact" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                Contact Us
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
