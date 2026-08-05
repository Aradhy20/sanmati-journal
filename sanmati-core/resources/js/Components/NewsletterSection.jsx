import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, BookOpen, Users } from 'lucide-react';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';

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
                
                confetti({
                    particleCount: 100,
                    spread: 60,
                    origin: { y: 0.7 },
                    colors: ['#2E6F57', '#C77D5B', '#2E2E2E', '#F7F4EC'],
                });
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
        <section className="py-16 relative overflow-hidden bg-[#F7F4EC] border-b border-[#E9E5DD]" aria-labelledby="newsletter-title">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2 text-center lg:text-left space-y-4"
                    >
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                            <Mail className="w-3.5 h-3.5" />
                            Academic Dispatch
                        </div>
                        <h2 id="newsletter-title" className="text-2xl md:text-3xl font-serif font-medium text-dark leading-tight">
                            Subscribe to the <span className="italic text-primary">Sanmati Dispatch</span>
                        </h2>
                        <p className="text-sm text-slate-500 font-medium max-w-md">
                            Receive notifications of call for papers, latest issue publications, and general updates.
                        </p>
                        
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-[#E9E5DD] text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                <Users className="w-3.5 h-3.5 text-primary" />
                                2,000+ Subs
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-[#E9E5DD] text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                <BookOpen className="w-3.5 h-3.5 text-primary" />
                                Monthly Digest
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:w-1/2 w-full"
                    >
                        <form onSubmit={handleSubmit} className="bg-white border border-[#E9E5DD] rounded-xl p-6 md:p-8 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="newsletter-name" className="sr-only">Name (Optional)</label>
                                    <input
                                        type="text"
                                        id="newsletter-name"
                                        name="newsletter-name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Name (Optional)"
                                        className="w-full px-4 py-3 bg-[#FFFDF8] border border-[#E9E5DD] rounded-lg text-dark placeholder:text-slate-400 focus:outline-none focus:border-primary font-medium text-xs"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="newsletter-email" className="sr-only">Email Address *</label>
                                    <input
                                        type="email"
                                        id="newsletter-email"
                                        name="newsletter-email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle'); }}
                                        placeholder="Email Address *"
                                        required
                                        className="w-full px-4 py-3 bg-[#FFFDF8] border border-[#E9E5DD] rounded-lg text-dark placeholder:text-slate-400 focus:outline-none focus:border-primary font-medium text-xs"
                                    />
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-primary-dark transition-all duration-200 disabled:opacity-60"
                            >
                                {status === 'loading' ? (
                                    <><Loader2 className="w-4.5 h-4.5 animate-spin" /> Subscribing...</>
                                ) : status === 'success' ? (
                                    <><CheckCircle className="w-4.5 h-4.5" /> Subscribed successfully</>
                                ) : (
                                    <><Send className="w-3.5 h-3.5" /> Join Dispatch</>
                                )}
                            </button>

                            <AnimatePresence>
                                {message && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`flex items-center gap-2.5 p-3 rounded-lg text-[10px] font-bold ${
                                            status === 'success'
                                                ? 'bg-primary/10 border border-primary/20 text-primary'
                                                : 'bg-red-500/10 border border-red-500/20 text-red-500'
                                        }`}
                                    >
                                        {status === 'success'
                                            ? <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                            : <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        }
                                        {message}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                            <p className="text-[10px] text-center tracking-wider uppercase text-slate-400 font-bold">
                                Secured Academic Gateway • Zero Spam Guarantee
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
