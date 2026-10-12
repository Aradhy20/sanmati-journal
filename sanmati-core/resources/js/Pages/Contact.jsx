import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Mail, Phone, MapPin, Send, Clock, Building2 } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import FloatInput from '../Components/ui/FloatInput';

const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function Contact() {
    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Editorial & Foundation Office - Sanmati Journal",
            "url": "https://sanmatijournal.in/contact",
            "description": "Contact Sanmati Spectrum of Knowledge editorial board and Sanmati Education & Research Foundation of India secretariat office for manuscript submissions and inquiries."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' }
        ]
    };

    return (
        <MainLayout
            title="Contact Editorial & Foundation Office | Sanmati Journal"
            description="Contact Sanmati Spectrum of Knowledge and Sanmati Education & Research Foundation of India in TMU Campus, Moradabad (UP), India. Email: sanmatijournal@gmail.com, Phone: +91 9870713912, +91 7999525735."
            keywords="contact sanmati journal, editorial office contact, foundation contact, Dr Namrata Jain, Dr Ratnesh Jain, journal helpline, paper submission inquiry, Moradabad journal office"
            jsonLd={jsonLd}
        >

            <PageHeader
                title="Contact Us"
                breadcrumb="Contact"
                subtitle="Reach out to our Editorial Directorate & Foundation Secretariat"
            />

            {/* ─── CONTACT INFO CARDS (Direct Access) ─── */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-[#2E2E2E]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                    {[
                        { 
                            icon: MapPin, 
                            title: "Registered Secretariat", 
                            desc: "B-002, Faculty Block\nTMU Campus, Teerthanker Mahaveer University\nMoradabad, UP, India — 244001", 
                            bg: "bg-white", 
                            iconColor: "text-primary" 
                        },
                        { 
                            icon: Phone, 
                            title: "Official Helplines", 
                            desc: "+91 9870713912 (President)\n+91 7999525735 (Secretary)", 
                            bg: "bg-white", 
                            iconColor: "text-secondary", 
                            link: "tel:+919870713912" 
                        },
                        { 
                            icon: Mail, 
                            title: "Official Communications", 
                            desc: "Editorial: sanmatijournal@gmail.com\nFoundation: foundationsanmati@gmail.com", 
                            bg: "bg-white", 
                            iconColor: "text-primary", 
                            link: "mailto:sanmatijournal@gmail.com" 
                        },
                        { 
                            icon: Clock, 
                            title: "Operational Hours", 
                            desc: "Mon - Sat\n10:00 AM - 6:00 PM (IST)", 
                            bg: "bg-[#F7F4EC]/40", 
                            iconColor: "text-slate-400" 
                        },
                    ].map((item, i) => {
                        const CardContent = () => (
                            <>
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <item.icon className="w-16 h-16 text-primary" />
                                </div>
                                <div className="w-8 h-8 mb-4 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary">
                                    <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                                </div>
                                <h3 className="text-[10px] font-bold uppercase tracking-wider text-dark mb-2">{item.title}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed whitespace-pre-line">{item.desc}</p>
                            </>
                        );

                        return item.link ? (
                            <motion.a 
                                href={item.link}
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`relative p-6 rounded-xl border border-[#E9E5DD] overflow-hidden ${item.bg} block hover:border-primary transition-colors`}
                            >
                                <CardContent />
                            </motion.a>
                        ) : (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`relative p-6 rounded-xl border border-[#E9E5DD] overflow-hidden ${item.bg}`}
                            >
                                <CardContent />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Google Maps Integration */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full h-[320px] rounded-xl overflow-hidden border border-[#E9E5DD]"
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.595991873136!2d78.69466571500361!3d28.880650982322305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afb0a0bb53147%3A0xc3f12461b2bfa674!2sTeerthanker%20Mahaveer%20University!5e0!3m2!1sen!2sin!4v1708453459174!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Registry Office Location"
                    ></iframe>
                </motion.div>
            </section>

            {/* ─── CONTACT FORM & VISUALS (The Dialogue) ─── */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-[#2E2E2E]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-4xl mx-auto">
                    {/* Visual Section */}
                    <motion.div {...fadeInUp} className="lg:col-span-5 relative group hidden lg:block">
                        <div className="relative rounded-xl overflow-hidden border border-[#E9E5DD] bg-[#F7F4EC]">
                            <img loading="lazy"
                                src="/images/contact/editorial_office.png"
                                alt="Editorial Office"
                                className="w-full h-full object-cover min-h-[380px] opacity-70"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white via-white/80 to-transparent border-t border-[#E9E5DD]/20">
                                <span className="text-[9px] font-bold uppercase tracking-wider text-primary mb-1 block">Editorial & Foundation Directorate</span>
                                <h3 className="text-base font-serif font-bold text-dark mb-2">Office of the Secretariat</h3>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic mb-4">
                                    "Rigorous academic dialogue begins with clear, dedicated correspondence. Our support team responds to peer-review tracking and foundation registration inquiries daily."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full border border-[#E9E5DD] overflow-hidden bg-white">
                                        <img loading="lazy" src="/images/contact/dr_namrta_jain_avatar.png" alt="Dr Namrata Jain" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-dark font-bold text-xs leading-none mb-1">Dr Namrata Jain</p>
                                        <p className="text-slate-400 text-[8px] uppercase font-bold tracking-wider leading-none">President & Editor-in-Chief</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div {...fadeInUp} transition={{ delay: 0.05 }} className="lg:col-span-7">
                        <div className="space-y-6">
                            <div>
                                <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-[8px] font-bold uppercase tracking-wider rounded mb-2">
                                    Inquiry Channel
                                </span>
                                <h2 className="text-xl font-serif font-bold text-dark mb-2">
                                    Start a Scholarly or Foundation Inquiry
                                </h2>
                                <p className="text-xs text-slate-500 font-medium max-w-md leading-relaxed">
                                    For manuscript submissions, peer-review tracking status, foundation memberships, or academic collaborations, send a direct message.
                                </p>
                            </div>

                            <div className="bg-white border border-[#E9E5DD] p-6 rounded-xl">
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
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!data.firstName.trim() || !data.lastName.trim()) {
            toast.error('Please provide both your given and family names.');
            return;
        }
        
        if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            toast.error('Please provide a valid email address.');
            return;
        }
        
        if (!data.message.trim() || data.message.trim().length < 10) {
            toast.error('Please provide a more detailed message (min 10 characters).');
            return;
        }

        post('/contact', {
            onSuccess: () => {
                reset();
                toast.success('Your message has been transmitted successfully.');
            },
            onError: () => {
                toast.error('Transmission failed. Please verify form details.');
            }
        });
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatInput
                    id="firstName"
                    name="firstName"
                    type="text"
                    label="Given Name"
                    value={data.firstName}
                    onChange={e => setData('firstName', e.target.value)}
                    error={errors.firstName}
                    disabled={processing}
                    autoComplete="given-name"
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
                    autoComplete="family-name"
                    required
                />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email Channel"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    error={errors.email}
                    disabled={processing}
                    autoComplete="email"
                    required
                />
                <div className="relative">
                    <select 
                        id="subject" 
                        name="subject" 
                        title="Subject" 
                        className="block w-full px-3 h-12 bg-white border border-[#E9E5DD] rounded text-dark text-xs focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                        value={data.subject} 
                        onChange={e => setData('subject', e.target.value)} 
                        disabled={processing}
                    >
                        <option>General Inquiry</option>
                        <option>Submission Query</option>
                        <option>Foundation / Collaboration</option>
                        <option>Payment Issue</option>
                        <option>Technical Support</option>
                    </select>
                    <label htmlFor="subject" className="absolute left-3 -top-2 bg-white px-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        Inquiry Topic
                    </label>
                    {errors.subject && <div className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.subject}</div>}
                </div>
            </div>

            <FloatInput
                id="message"
                name="message"
                textarea
                rows={4}
                label="Message Text"
                value={data.message}
                onChange={e => setData('message', e.target.value)}
                error={errors.message}
                disabled={processing}
                required
            />

            <button
                type="submit"
                className="w-full py-2.5 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-primary-dark transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={processing}
            >
                {processing ? 'Transmitting...' : 'Send Message'} 
                <Send className="w-3.5 h-3.5" />
            </button>
        </form>
    );
}
