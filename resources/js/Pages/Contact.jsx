import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Seo from '../Components/Seo';
import FloatInput from '../Components/ui/FloatInput';

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
                            <img loading="lazy"
                                src="/images/contact/editorial_office.png"
                                alt="Editorial Office"
                                className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px] opacity-80 group-hover:opacity-70 transition-opacity duration-700"
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
                                        <img loading="lazy" src="/images/contact/dr_namrta_jain_avatar.png" alt="Editor" className="w-full h-full object-cover" />
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
            onSuccess: () => {
                reset();
                toast.success('Protocol Engaged: Your message has been transmitted successfully.');
            },
            onError: () => {
                toast.error('Transmission Failed: Please check your inputs and try again.');
            }
        });
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FloatInput
                    id="firstName"
                    name="firstName"
                    type="text"
                    label="Given Name"
                    value={data.firstName}
                    onChange={e => setData('firstName', e.target.value)}
                    error={errors.firstName}
                    disabled={processing}
                    required
                />
                <FloatInput
                    id="lastName"
                    name="lastName"
                    type="text"
                    label="Family Name"
                    value={data.lastName}
                    onChange={e => setData('lastName', e.target.value)}
                    error={errors.lastName}
                    disabled={processing}
                    required
                />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FloatInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email Channel"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    error={errors.email}
                    disabled={processing}
                    required
                />
                <div className="relative">
                    <select 
                        id="subject" 
                        name="subject" 
                        title="Subject" 
                        className="block w-full px-4 h-14 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50"
                        value={data.subject} 
                        onChange={e => setData('subject', e.target.value)} 
                        disabled={processing}
                    >
                        <option>General Inquiry</option>
                        <option>Submission Query</option>
                        <option>Payment Issue</option>
                        <option>Technical Support</option>
                    </select>
                    <label htmlFor="subject" className="absolute left-4 -top-2.5 bg-white dark:bg-slate-900 px-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                        Inquiry Node
                    </label>
                    {errors.subject && <div className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.subject}</div>}
                </div>
            </div>

            <FloatInput
                id="message"
                name="message"
                textarea
                rows={5}
                label="Discourse Content"
                value={data.message}
                onChange={e => setData('message', e.target.value)}
                error={errors.message}
                disabled={processing}
                required
            />

            <button
                type="submit"
                className="w-full py-5 bg-dark dark:bg-primary-dark text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-secondary dark:hover:bg-primary transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed text-xs shadow-2xl hover:-translate-y-1"
                disabled={processing}
            >
                {processing ? 'Transmitting...' : 'Dispatch Inquiry'} 
                <Send className={`w-4 h-4 transition-transform duration-500 ${processing ? 'translate-x-12 opacity-0' : ''}`} />
            </button>
        </form>
    );
}
