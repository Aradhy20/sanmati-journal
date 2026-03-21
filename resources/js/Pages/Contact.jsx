import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Seo from '../Components/Seo';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function Contact() {
    return (
        <MainLayout>
            <Seo
                title="Contact Us"
                description="Get in touch with the Sanmati Journal Editorial Office for submissions and queries."
            />

            <PageHeader
                title="Contact Us"
                breadcrumb="Contact"
                subtitle="Reach out to our Editorial Office"
            />

            {/* ─── CONTACT INFO CARDS (Direct Access) ─── */}
            <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 mb-10 lg:mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: MapPin, title: "Registry Office", desc: "B-002 Faculty Block TMU Campus, Delhi Road Moradabad (U.P) 244001", color: "from-dark to-dark/90", iconColor: "text-secondary" },
                        { icon: Phone, title: "Strategic Liaison", desc: "+91 8979782949\n+91 7999525735", color: "from-primary to-primary-dark", iconColor: "text-white" },
                        { icon: Mail, title: "Manuscript Queries", desc: "sanmatijournal@gmail.com", color: "from-secondary to-secondary-dark", iconColor: "text-white" },
                        { icon: Clock, title: "Operational Hours", desc: "Mon - Fri\n10:00 AM - 6:00 PM (IST)", color: "from-surface to-white", iconColor: "text-primary", border: "border-gray-100" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-8 rounded-[2rem] shadow-xl group overflow-hidden bg-gradient-to-br ${item.color} ${item.border || ''}`}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                                <item.icon className="w-20 h-20" />
                            </div>
                            <div className={`w-12 h-12 mb-6 rounded-xl flex items-center justify-center ${item.color === 'from-surface to-white' ? 'bg-primary/10' : 'bg-white/10'}`}>
                                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                            </div>
                            <h3 className={`text-sm font-black uppercase tracking-widest mb-3 ${item.color === 'from-surface to-white' ? 'text-dark' : 'text-white'}`}>{item.title}</h3>
                            <p className={`text-xs font-medium leading-relaxed whitespace-pre-line ${item.color === 'from-surface to-white' ? 'text-muted' : 'text-white/60'}`}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── CONTACT FORM & VISUALS (The Dialogue) ─── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Visual Section */}
                    <motion.div {...fadeInUp} className="lg:col-span-12 xl:col-span-5 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-dark">
                            <img
                                src="/fistudy-assets/resources/about-3.jpg"
                                alt="Editorial Office"
                                className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px] opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="h-px w-8 bg-secondary" />
                                    <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em]">Administration</span>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-4">The Editorial Office</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6 font-medium italic">
                                    "Transparent communication is the cornerstone of scholarly integrity. Our team is dedicated to supporting authors at every stage of the peer-review journey."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden">
                                        <img src="/fistudy-assets/team/team-1-1.jpg" alt="Editor" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm leading-none mb-1">Dr. Namrta Jain</p>
                                        <p className="text-white/30 text-[10px] uppercase font-black tracking-widest leading-none">Editor-in-Chief</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="lg:col-span-12 xl:col-span-7">
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-px w-10 bg-primary" />
                                <span className="text-primary font-black text-[11px] uppercase tracking-[0.4em]">Inquiry Protocol</span>
                            </div>
                            
                            <h2 className="text-2xl md:text-3xl lg:text-4xl md:text-5xl font-serif font-bold text-dark mb-4 leading-tight">
                                Start a <span className="text-secondary italic">Scholarly Dialogue</span>
                            </h2>
                            <p className="text-muted text-lg mb-12 max-w-xl">
                                For manuscript submissions, institutional subscriptions, or editorial inquiries, please utilize the secure channel below.
                            </p>

                            <div className="bg-white/50 backdrop-blur-sm border border-gray-100 p-8 md:p-12 rounded-[3rem] shadow-sm">
                                <ContactForm />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}

function ContactForm() {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => reset(),
        });
    };

    const inputClass = "w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all outline-none disabled:opacity-50 text-sm font-medium placeholder:text-gray-300";
    const labelClass = "block text-[10px] font-black text-dark/40 uppercase tracking-[0.2em] mb-3 ml-1";

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {recentlySuccessful && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 bg-primary/5 text-primary rounded-2xl border border-primary/10 font-bold mb-6 text-sm flex items-center gap-3"
                >
                    <Send className="w-5 h-5" />
                    Protocol Engaged: Your message has been transmitted successfully.
                </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className={labelClass}>First Dimension</label>
                    <input id="firstName" name="firstName" required type="text" placeholder="Given Name" className={inputClass}
                        value={data.firstName} onChange={e => setData('firstName', e.target.value)} disabled={processing} />
                    {errors.firstName && <div className="text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.firstName}</div>}
                </div>
                <div>
                    <label htmlFor="lastName" className={labelClass}>Last Dimension</label>
                    <input id="lastName" name="lastName" required type="text" placeholder="Family Name" className={inputClass}
                        value={data.lastName} onChange={e => setData('lastName', e.target.value)} disabled={processing} />
                    {errors.lastName && <div className="text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.lastName}</div>}
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className={labelClass}>Email Channel</label>
                    <input id="email" name="email" required type="email" placeholder="author@institute.edu" className={inputClass}
                        value={data.email} onChange={e => setData('email', e.target.value)} disabled={processing} />
                    {errors.email && <div className="text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="subject" className={labelClass}>Inquiry Node</label>
                    <select id="subject" name="subject" title="Subject" className={inputClass}
                        value={data.subject} onChange={e => setData('subject', e.target.value)} disabled={processing}>
                        <option>General Inquiry</option>
                        <option>Submission Query</option>
                        <option>Payment Issue</option>
                        <option>Technical Support</option>
                    </select>
                    {errors.subject && <div className="text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.subject}</div>}
                </div>
            </div>

            <div>
                <label htmlFor="message" className={labelClass}>Discourse Content</label>
                <textarea id="message" name="message" required rows={5} placeholder="Describe your inquiry with scholarly precision..." className={inputClass}
                    value={data.message} onChange={e => setData('message', e.target.value)} disabled={processing}></textarea>
                {errors.message && <div className="text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.message}</div>}
            </div>

            <button
                type="submit"
                className="w-full py-5 bg-dark text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-secondary transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed text-xs shadow-2xl hover:-translate-y-1"
                disabled={processing}
            >
                {processing ? 'Transmitting...' : 'Dispatch Inquiry'} 
                <Send className={`w-4 h-4 transition-transform duration-500 ${processing ? 'translate-x-12 opacity-0' : ''}`} />
            </button>
        </form>
    );
}
