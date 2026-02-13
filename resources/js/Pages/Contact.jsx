import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { ScrollReveal, revealVariants } from '../Components/ScrollReveal';
import { DynamicCard, GradientText } from '../Components/DynamicCard';
import { GlassyBlob } from '../Components/Graphics';

export default function Contact() {
    return (
        <MainLayout>
            <div className="min-h-screen relative">
                <PageHeader
                    title="Contact Us"
                    breadcrumb="Contact"
                    subtitle="Reach out to our Editorial Office"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <ScrollReveal variants={revealVariants.left}>
                                <div>
                                    <div className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-xs font-bold uppercase mb-4">
                                        Section E
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                                        <GradientText gradient="from-slate-900 to-slate-700">Editorial Office</GradientText>
                                    </h2>
                                </div>
                            </ScrollReveal>

                            {[
                                {
                                    icon: MapPin,
                                    title: "Office Address",
                                    name: "Dr. Namrta Jain",
                                    desc: "Office – B-002 Faculty Block TMU Campus Teerthanker Mahaveer University Delhi Road Moradabad (U.P) 244001",
                                    color: "blue"
                                },
                                {
                                    icon: Phone,
                                    title: "Call Us",
                                    desc: "+91 8979782949, +91 7999525735",
                                    color: "indigo"
                                },
                                {
                                    icon: Mail,
                                    title: "Email Inquiry",
                                    desc: "sanmatijournal@gmail.com",
                                    color: "purple"
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} variants={revealVariants.left}>
                                    <DynamicCard className="p-8" gradient={`from-${item.color}-500 to-${item.color}-700`}>
                                        <div className="flex items-start gap-6">
                                            <div className={`p-4 bg-${item.color}-50 rounded-2xl text-${item.color}-600`}>
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                                                {item.name && <p className={`text-${item.color}-900 font-bold mb-3`}>{item.name}</p>}
                                                <p className="text-slate-600 leading-relaxed text-sm max-w-sm font-medium">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </DynamicCard>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Form */}

                        <div className="relative p-10 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 opacity-5" />
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                                        <MessageSquare className="text-blue-600" /> Send a Message
                                    </h3>
                                    <p className="text-slate-500 text-sm">Our team typically responds within 24-48 business hours.</p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>

                    </div>
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

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            {recentlySuccessful && (
                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 font-bold mb-4">
                    Your message has been sent successfully!
                </div>
            )}

            <div className="grid grid-cols-2 gap-5">
                <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        required
                        type="text"
                        placeholder="Aradhya"
                        className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none disabled:opacity-50"
                        value={data.firstName}
                        onChange={e => setData('firstName', e.target.value)}
                        disabled={processing}
                    />
                    {errors.firstName && <div className="text-rose-500 text-xs mt-1">{errors.firstName}</div>}
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        required
                        type="text"
                        placeholder="Jain"
                        className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none disabled:opacity-50"
                        value={data.lastName}
                        onChange={e => setData('lastName', e.target.value)}
                        disabled={processing}
                    />
                    {errors.lastName && <div className="text-rose-500 text-xs mt-1">{errors.lastName}</div>}
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="author@institute.edu"
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none disabled:opacity-50"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    disabled={processing}
                />
                {errors.email && <div className="text-rose-500 text-xs mt-1">{errors.email}</div>}
            </div>
            <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                <select
                    id="subject"
                    name="subject"
                    title="Subject"
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none disabled:opacity-50"
                    value={data.subject}
                    onChange={e => setData('subject', e.target.value)}
                    disabled={processing}
                >
                    <option>General Inquiry</option>
                    <option>Submission Query</option>
                    <option>Payment Issue</option>
                    <option>Technical Support</option>
                </select>
                {errors.subject && <div className="text-rose-500 text-xs mt-1">{errors.subject}</div>}
            </div>
            <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you today?"
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none disabled:opacity-50"
                    value={data.message}
                    onChange={e => setData('message', e.target.value)}
                    disabled={processing}
                ></textarea>
                {errors.message && <div className="text-rose-500 text-xs mt-1">{errors.message}</div>}
            </div>
            <button
                type="submit"
                className="w-full py-4 bg-blue-900 text-white font-black uppercase tracking-widest rounded-xl hover:bg-blue-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={processing}
            >
                {processing ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
            </button>
        </form>
    );
}
