import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Search, BookOpen, Clock, CheckCircle, Send, AlertCircle, UploadCloud, FileCheck, RefreshCw, Globe, ArrowRight } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';
import PageHeader from '../Components/PageHeader';
import Seo from '../Components/Seo';

const PIPELINE_STAGES = [
    { key: 'received',  label: 'Received',        icon: UploadCloud, color: 'text-[#687EFF]', bg: 'bg-[#687EFF]/10' },
    { key: 'review',   label: 'Under Review',     icon: Search,      color: 'text-[#F87A53]', bg: 'bg-[#F87A53]/10' },
    { key: 'revision', label: 'Revision',         icon: RefreshCw,   color: 'text-amber-500',  bg: 'bg-amber-50'     },
    { key: 'decision', label: 'Decision',         icon: FileCheck,   color: 'text-emerald-600',bg: 'bg-emerald-50'   },
    { key: 'published',label: 'Published',        icon: Globe,       color: 'text-[#052143]', bg: 'bg-[#052143]/10' },
];

export default function TrackManuscript() {
    const [trackingId, setTrackingId] = useState('');
    const [email, setEmail] = useState('');
    const [searched, setSearched] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleTrack = (e) => {
        e.preventDefault();
        if (!trackingId.trim() || !email.trim()) return;
        setLoading(true);
        // Simulate async lookup (real implementation hooks to DB)
        setTimeout(() => {
            setLoading(false);
            setSearched(true);
        }, 1200);
    };

    return (
        <MainLayout>
            <Seo
                title="Track Your Manuscript"
                description="Check the real-time status of your manuscript submission to Sanmati Journal."
            />

            <PageHeader
                title="Track Your Manuscript"
                breadcrumb="Manuscript Tracker"
                subtitle="Enter your submission details to check the current review status"
            />

            <section className="max-w-4xl mx-auto px-6 py-20 lg:py-32">

                {/* Lookup Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-14 mb-12"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-[#687EFF]/10 flex items-center justify-center">
                            <Search className="w-6 h-6 text-[#687EFF]" />
                        </div>
                        <div>
                            <h2 className="text-xl font-serif font-bold text-[#052143]">Submission Lookup</h2>
                            <p className="text-sm text-gray-400 font-medium">Enter the tracking ID from your confirmation email</p>
                        </div>
                    </div>

                    <form onSubmit={handleTrack} className="space-y-5">
                        <div>
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Tracking ID *</label>
                            <input
                                type="text"
                                value={trackingId}
                                onChange={e => setTrackingId(e.target.value)}
                                placeholder="e.g. SJ-123456"
                                className="w-full px-6 py-4 bg-[#f5f7ff] border border-gray-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#687EFF]/10 focus:border-[#687EFF]/40 transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Registered Email *</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="author@institute.edu"
                                className="w-full px-6 py-4 bg-[#f5f7ff] border border-gray-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#687EFF]/10 focus:border-[#687EFF]/40 transition-all"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 bg-[#687EFF] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#052143] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#687EFF]/25 disabled:opacity-60"
                        >
                            {loading ? (
                                <><RefreshCw className="w-4 h-4 animate-spin" /> Locating Submission...</>
                            ) : (
                                <><Search className="w-4 h-4" /> Track Manuscript</>
                            )}
                        </button>
                    </form>
                </motion.div>

                {/* Status Result (shown after search) */}
                {searched && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-14 mb-12"
                    >
                        {/* Status info */}
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center">
                                <Clock className="w-7 h-7 text-amber-500" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Status for {trackingId.toUpperCase()}</p>
                                <h3 className="text-xl font-serif font-bold text-[#052143]">Currently Under Review</h3>
                                <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mt-1">Estimated: 4–6 weeks from submission</p>
                            </div>
                        </div>

                        {/* Pipeline progress bar */}
                        <div className="relative">
                            {/* Connector line */}
                            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-100 mx-[5%]" />
                            <div className="absolute top-8 left-0 h-0.5 bg-[#687EFF] mx-[5%]" style={{ width: '30%' }} />

                            <div className="grid grid-cols-5 gap-2 relative z-10">
                                {PIPELINE_STAGES.map((stage, i) => {
                                    const isActive = i < 2;
                                    const isCurrent = i === 1;
                                    return (
                                        <div key={stage.key} className="flex flex-col items-center text-center gap-3">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${isActive ? stage.bg : 'bg-gray-50'}`}>
                                                <stage.icon className={`w-7 h-7 ${isActive ? stage.color : 'text-gray-300'}`} />
                                            </div>
                                            <p className={`text-[10px] font-black uppercase tracking-wider leading-tight ${isActive ? 'text-[#052143]' : 'text-gray-300'}`}>
                                                {stage.label}
                                            </p>
                                            {isCurrent && (
                                                <span className="bg-[#F87A53] text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Info note */}
                        <div className="mt-10 p-5 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
                            <AlertCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                            <p className="text-sm text-blue-700 font-medium leading-relaxed">
                                Status updates are sent directly to your registered email. If you have any urgent queries, please contact us at <strong>sanmatijournal@gmail.com</strong> with your tracking ID.
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* Info cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {[
                        { icon: Send, title: 'Acknowledge', desc: 'Confirmation email sent within 24 hours of submission.', color: 'text-[#687EFF]', bg: 'bg-[#687EFF]/10' },
                        { icon: Clock, title: 'Review Time', desc: 'Double-blind peer review takes 4–6 weeks on average.', color: 'text-[#F87A53]', bg: 'bg-[#F87A53]/10' },
                        { icon: CheckCircle, title: 'Decision', desc: 'Accept/revise/reject decision mailed to author directly.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-[2rem] border border-gray-100 p-8 text-center shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                                <card.icon className={`w-7 h-7 ${card.color}`} />
                            </div>
                            <h4 className="font-bold text-[#052143] mb-2">{card.title}</h4>
                            <p className="text-xs text-gray-400 font-medium leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-400 text-sm font-medium mb-4">Haven't submitted yet?</p>
                    <Link
                        href="/submission-guidelines/call-for-papers"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#052143] text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#687EFF] transition-all shadow-xl"
                    >
                        Submit Manuscript <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </MainLayout>
    );
}
