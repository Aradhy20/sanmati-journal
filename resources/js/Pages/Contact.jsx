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

            {/* Contact Info Cards */}
            <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: MapPin, title: "Our Address", desc: "B-002 Faculty Block TMU Campus, Delhi Road Moradabad (U.P) 244001", color: "from-blue-500 to-indigo-600" },
                        { icon: Phone, title: "Call Us", desc: "+91 8979782949\n+91 7999525735", color: "from-emerald-500 to-teal-600" },
                        { icon: Mail, title: "Email Us", desc: "sanmatijournal@gmail.com", color: "from-purple-500 to-violet-600" },
                        { icon: Clock, title: "Office Hours", desc: "Mon - Fri\n10:00 AM - 6:00 PM", color: "from-orange-500 to-amber-600" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card-modern p-6 text-center group"
                        >
                            <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm whitespace-pre-line">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Form + Image */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image */}
                    <motion.div {...fadeInUp} className="relative rounded-3xl overflow-hidden shadow-xl hidden lg:block">
                        <img
                            src="/fistudy-assets/resources/contact-three-img-1.jpg"
                            alt="Contact"
                            className="w-full h-full object-cover min-h-[500px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Editorial Office</h3>
                            <p className="text-white/70 text-sm">Dr. Namrta Jain, Editor-in-Chief</p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div {...fadeInUp} transition={{ delay: 0.1 }}
                        className="card-modern p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-secondary/3" />
                        <div className="relative z-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-dark mb-2 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <MessageSquare className="text-primary w-5 h-5" />
                                    </div>
                                    Send a Message
                                </h3>
                                <p className="text-gray-500 text-sm">Our team typically responds within 24-48 business hours.</p>
                            </div>
                            <ContactForm />
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

    const inputClass = "w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all outline-none disabled:opacity-50 text-sm";

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            {recentlySuccessful && (
                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 font-bold mb-4 text-sm">
                    Your message has been sent successfully!
                </div>
            )}

            <div className="grid grid-cols-2 gap-5">
                <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">First Name</label>
                    <input id="firstName" name="firstName" required type="text" placeholder="Aradhya" className={inputClass}
                        value={data.firstName} onChange={e => setData('firstName', e.target.value)} disabled={processing} />
                    {errors.firstName && <div className="text-rose-500 text-xs mt-1">{errors.firstName}</div>}
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Last Name</label>
                    <input id="lastName" name="lastName" required type="text" placeholder="Jain" className={inputClass}
                        value={data.lastName} onChange={e => setData('lastName', e.target.value)} disabled={processing} />
                    {errors.lastName && <div className="text-rose-500 text-xs mt-1">{errors.lastName}</div>}
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                <input id="email" name="email" required type="email" placeholder="author@institute.edu" className={inputClass}
                    value={data.email} onChange={e => setData('email', e.target.value)} disabled={processing} />
                {errors.email && <div className="text-rose-500 text-xs mt-1">{errors.email}</div>}
            </div>
            <div>
                <label htmlFor="subject" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Subject</label>
                <select id="subject" name="subject" title="Subject" className={inputClass}
                    value={data.subject} onChange={e => setData('subject', e.target.value)} disabled={processing}>
                    <option>General Inquiry</option>
                    <option>Submission Query</option>
                    <option>Payment Issue</option>
                    <option>Technical Support</option>
                </select>
                {errors.subject && <div className="text-rose-500 text-xs mt-1">{errors.subject}</div>}
            </div>
            <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                <textarea id="message" name="message" required rows={4} placeholder="How can we help you today?" className={inputClass}
                    value={data.message} onChange={e => setData('message', e.target.value)} disabled={processing}></textarea>
                {errors.message && <div className="text-rose-500 text-xs mt-1">{errors.message}</div>}
            </div>
            <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-sm shadow-lg shadow-primary/20"
                disabled={processing}
            >
                {processing ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
            </button>
        </form>
    );
}
