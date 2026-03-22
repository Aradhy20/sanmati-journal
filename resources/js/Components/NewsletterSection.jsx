import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, BookOpen, Globe, Users } from 'lucide-react';
import toast from 'react-hot-toast';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const csrfToken = document.cookie
                .split('; ')
                .find(row => row.startsWith('XSRF-TOKEN='))
                ?.split('=')[1];

            const res = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': csrfToken ? decodeURIComponent(csrfToken) : '',
                },
                body: JSON.stringify({ email, name }),
            });

            const data = await res.json();

            if (res.ok || res.status === 200 || res.status === 201) {
                setStatus('success');
                const successMsg = data.message || 'You have successfully subscribed!';
                setMessage(successMsg);
                toast.success(successMsg);
                setEmail('');
                setName('');
            } else {
                const errMsg = data.errors?.email?.[0] || data.message || 'Something went wrong. Please try again.';
                setStatus('error');
                setMessage(errMsg);
                toast.error(errMsg);
            }
        } catch (err) {
            setStatus('error');
            setMessage('Network error. Please check your connection.');
            toast.error('Network error. Please check your connection.');
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-[#0a0f2e] via-primary-dark to-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)', backgroundSize: '36px 36px' }} />
            <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-[#F87A53]/8 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
                            <Mail className="w-3.5 h-3.5 text-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.35em]">Academic Newsletter</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                            Stay at the Forefront of <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#F87A53]">Scholarly Research</span>
                        </h2>
                        <p className="text-white/50 text-lg font-medium max-w-2xl mx-auto">
                            Subscribe to receive Call for Papers alerts, new book releases, and academic event announcements directly to your inbox.
                        </p>
                    </motion.div>

                    {/* Stat Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-6 mb-12"
                    >
                        {[
                            { icon: Users, label: '2,000+ Subscribers' },
                            { icon: BookOpen, label: 'Monthly Digest' },
                            { icon: Globe, label: 'Across India & Abroad' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-6 py-3">
                                <item.icon className="w-4 h-4 text-secondary" />
                                <span className="text-white/70 text-sm font-bold">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name (optional)"
                                    className="px-6 py-4 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-secondary/60 focus:bg-white/15 transition-all font-medium text-sm"
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle'); }}
                                    placeholder="Enter your email address *"
                                    required
                                    className="px-6 py-4 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-secondary/60 focus:bg-white/15 transition-all font-medium text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary-light transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <><Loader2 className="w-5 h-5 animate-spin" /> Subscribing...</>
                                    ) : status === 'success' ? (
                                        <><CheckCircle className="w-5 h-5" /> Subscribed!</>
                                    ) : (
                                        <><Send className="w-4 h-4" /> Subscribe</>
                                    )}
                                </button>
                            </div>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`flex items-center gap-3 mt-4 p-4 rounded-2xl text-sm font-bold ${
                                            status === 'success'
                                                ? 'bg-green-500/15 border border-green-500/30 text-green-400'
                                                : 'bg-red-500/15 border border-red-500/30 text-red-400'
                                        }`}
                                    >
                                        {status === 'success'
                                            ? <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                            : <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                        }
                                        {message}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <p className="text-white/30 text-center text-[11px] mt-6 font-medium">
                                No spam, ever. Unsubscribe anytime. Your email is safe with us.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
