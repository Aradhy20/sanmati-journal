import { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;
        setStatus('loading');
        // Simulate API call
        await new Promise(r => setTimeout(r, 1000));
        setStatus('success');
        setEmail('');
    };

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden" aria-labelledby="newsletter-heading">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[80px]" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                        backgroundSize: '48px 48px',
                    }}
                />
            </div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl mx-auto text-center">

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-6">
                        <Mail className="w-7 h-7 text-blue-400" />
                    </div>

                    <div className="space-y-4 mb-8">
                        <h2 id="newsletter-heading" className="text-3xl sm:text-4xl font-heading font-bold text-white">
                            Stay Updated with
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Latest Research</span>
                        </h2>
                        <p className="text-slate-400 text-base leading-relaxed">
                            Subscribe to our newsletter and get notified when new issues are published, call for papers are opened, and research highlights are released.
                        </p>
                    </div>

                    {/* Form */}
                    <div>
                        {status === 'success' ? (
                            <div className="flex flex-col items-center gap-3 py-6">
                                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                                </div>
                                <p className="text-white font-bold text-lg">You're subscribed!</p>
                                <p className="text-slate-400 text-sm">Thank you for joining our research community.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full pl-11 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        aria-label="Email address for newsletter"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading' || !email}
                                    className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
                                >
                                    {status === 'loading' ? (
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Sparkles className="w-4 h-4" />
                                            Subscribe
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}

                        <p className="text-slate-500 text-xs mt-4">
                            No spam. Unsubscribe anytime. We respect your privacy.
                        </p>
                    </div>

                    {/* Stats row */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-8 border-t border-white/10">
                        {[
                            { label: 'Subscribers', value: '500+' },
                            { label: 'Issues Published', value: '4+' },
                            { label: 'Frequency', value: 'Quarterly' },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="text-xl font-heading font-bold text-white">{item.value}</div>
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
