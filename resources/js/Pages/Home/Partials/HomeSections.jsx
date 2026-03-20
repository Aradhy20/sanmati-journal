import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    ArrowRight, BookOpen, Users, Globe, Award, FileText, Send, Star,
    Lightbulb, GraduationCap, Microscope, Scale, Palette, Calculator, Cpu,
    ChevronRight, ArrowUpRight, Quote, UploadCloud, FileCheck, RefreshCw, 
    BookMarked, Package, Truck, Heart, Feather
} from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const Zap = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;

export const FeaturesBar = () => (
    <section className="py-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
                {[
                    { icon: BookMarked, stat: '500+', label: 'Exclusive Titles' },
                    { icon: Truck, stat: 'Global', label: 'Shipping Available' },
                    { icon: Heart, stat: 'Signed', label: 'Author Editions' },
                    { icon: Zap, stat: 'Early', label: 'Access Programs' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 px-8 py-4">
                        <item.icon className="w-8 h-8 text-white/70 shrink-0" />
                        <div>
                            <p className="text-white font-black text-xl leading-none">{item.stat}</p>
                    <p className="text-white/80 text-[11px] font-bold uppercase tracking-widest">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const FeaturedAuthors = () => (
    <section className="py-24 bg-warm-bg relative overflow-hidden">
        <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                    <span className="h-px w-10 bg-secondary" />
                    <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Author Corner</span>
                    <span className="h-px w-10 bg-secondary" />
                </motion.div>
                <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">
                    Our <span className="text-primary italic">Featured Authors</span>
                </motion.h2>
                <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted font-medium text-lg leading-relaxed">
                    Brilliant minds whose published works have shaped academic discourse across disciplines.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { name: 'Dr. Amit Sharma', field: 'Quantum Physics', books: '3 Published', img: '/fistudy-assets/team/team-1-2.jpg' },
                    { name: 'Prof. Ritu Verma', field: 'Behavioral Science', books: '5 Published', img: '/fistudy-assets/team/team-2-1.jpg' },
                    { name: 'Dr. Pradeep Kumar', field: 'Urban Studies', books: '2 Published', img: '/fistudy-assets/team/team-2-2.jpg' },
                    { name: 'Dr. Sunita Rao', field: 'Sustainability', books: '4 Published', img: '/fistudy-assets/team/team-1-1.jpg' },
                ].map((author, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.7 }}
                        className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center"
                    >
                        <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-6 border-2 border-white shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
                            <img src={author.img} alt={author.name} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="h-px w-4 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">{author.field}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors">{author.name}</h3>
                        <div className="flex items-center justify-center gap-2">
                            <BookOpen className="w-3.5 h-3.5 text-primary/50" />
                            <span className="text-muted text-[12px] font-bold uppercase tracking-widest">{author.books}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export const AcademicDomains = () => (
    <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[120px] -ml-96" />
        <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                    <span className="h-px w-10 bg-secondary" />
                    <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Our Academic Scope</span>
                    <span className="h-px w-10 bg-secondary" />
                </motion.div>
                <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">
                    Explore <span className="text-primary italic">Intellectual Domains</span>
                </motion.h2>
                <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted font-medium text-lg leading-relaxed">
                    We publish books and papers across the full spectrum of modern and traditional scholarly inquiry.
                </motion.p>
            </div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="initial" whileInView="whileInView" viewport={{ once: true }}
                variants={{ whileInView: { transition: { staggerChildren: 0.05 } } }}
            >
                {[
                    { name: "Science & Technology", icon: Microscope, color: "bg-blue-50 text-blue-600", count: "15+" },
                    { name: "Social Sciences", icon: Users, color: "bg-emerald-50 text-emerald-600", count: "12+" },
                    { name: "Arts & Humanities", icon: Palette, color: "bg-purple-50 text-purple-600", count: "10+" },
                    { name: "Commerce & Management", icon: Calculator, color: "bg-orange-50 text-orange-600", count: "8+" },
                    { name: "Law & Governance", icon: Scale, color: "bg-red-50 text-red-600", count: "6+" },
                    { name: "Education", icon: GraduationCap, color: "bg-cyan-50 text-cyan-600", count: "9+" },
                    { name: "Computer Science", icon: Cpu, color: "bg-indigo-50 text-indigo-600", count: "11+" },
                    { name: "Innovation Research", icon: Lightbulb, color: "bg-yellow-50 text-yellow-600", count: "7+" },
                ].map((cat, idx) => (
                    <motion.div
                        key={idx}
                        variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } }}
                        className="group p-8 rounded-[2.5rem] bg-warm-bg border border-gray-100 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(79,119,255,0.08)] transition-all duration-500 flex flex-col items-center text-center"
                    >
                        <div className={'w-20 h-20 rounded-[1.75rem] ' + cat.color + ' flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm'}>
                            <cat.icon className="w-9 h-9" />
                        </div>
                        <h3 className="font-bold text-dark text-base mb-2 px-2 group-hover:text-primary transition-colors tracking-tight leading-tight">{cat.name}</h3>
                        <div className="mt-auto pt-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {cat.count} Publications
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

export const AcademicImpact = () => (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {[
                    { icon: FileText, num: "500+", label: "Artifacts Published" },
                    { icon: Users, num: "200+", label: "Global Scholars" },
                    { icon: Award, num: "50+", label: "Expert Reviewers" },
                    { icon: Globe, num: "25+", label: "Domain Disciplines" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="group"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                            <stat.icon className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">{stat.num}</div>
                        <p className="text-white/70 text-[11px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export const WhyChooseOurBooks = () => (
    <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group"
                >
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                        <img src="/fistudy-assets/resources/research_library.png" alt="Premium Books" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(79,119,255,0.12)] border border-gray-100"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <div className="text-3xl font-black text-dark tracking-tighter">Gold Standard</div>
                                <p className="text-muted text-xs font-bold uppercase tracking-widest mt-1">Peer Review Quality</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div {...fadeInUp}>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-px w-10 bg-secondary" />
                        <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-[1.15] mb-8">
                        Premium <span className="text-primary italic">Publishing Excellence</span> for Every Author
                    </h2>
                    <p className="text-muted font-medium text-lg leading-relaxed mb-12">
                        We deliver world-class book publishing services — from manuscript review and design to global distribution. Every title we publish carries the stamp of academic integrity and premium production quality.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                        {[
                            { icon: Globe, label: "Global Shipping", desc: "Delivered to 50+ countries worldwide." },
                            { icon: Feather, label: "Signed Editions", desc: "Exclusive author-signed collector copies." },
                            { icon: Zap, label: "Early Access", desc: "Pre-order before official launch dates." },
                            { icon: Package, label: "Premium Hardcover", desc: "High-quality binding and print production." },
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-4 p-6 rounded-3xl bg-warm-bg border border-gray-50 hover:border-primary/20 transition-all group">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-dark mb-1">{feature.label}</h4>
                                    <p className="text-muted text-[11px] font-bold uppercase tracking-wide">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="/book-publication" className="inline-flex items-center gap-4 text-dark font-black text-xs uppercase tracking-[0.2em] group">
                        <span className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white group-hover:bg-primary transition-all">
                            <ArrowRight className="w-6 h-6" />
                        </span>
                        Browse All Books
                    </Link>
                </motion.div>
            </div>
        </div>
    </section>
);

export const PublicationProcess = () => (
    <section className="py-32 bg-warm-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -mr-96 -mt-96" />
        <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24">
                <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                    <span className="h-px w-10 bg-secondary" />
                    <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Publication Pipeline</span>
                    <span className="h-px w-10 bg-secondary" />
                </motion.div>
                <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">
                    The <span className="text-primary italic">Scholarly Journey</span>
                </motion.h2>
                <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted font-medium text-lg">
                    From your manuscript to a published masterpiece — a transparent, rigorous process.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
                {[
                    { step: "01", title: "Manuscript Submission", desc: "Digital intake with initial ethics and originality validation.", icon: UploadCloud },
                    { step: "02", title: "Peer Review", desc: "Double-blind evaluation by distinguished domain experts.", icon: FileCheck },
                    { step: "03", title: "Refinement", desc: "Collaborative revision based on empirical rigor and expert feedback.", icon: RefreshCw },
                    { step: "04", title: "Publication & Archival", desc: "Final curation, DOI registration, global indexing, and shipping.", icon: Globe },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.8 }}
                        className="relative group p-10 flex flex-col items-center text-center"
                    >
                        <div className="z-10 w-28 h-28 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full">{item.step}</div>
                            <item.icon className="w-10 h-10 text-secondary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-serif font-bold text-dark mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted text-[13px] leading-relaxed font-medium">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export const NewsletterCTA = () => (
    <section className="py-16 bg-coral relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
                <div className="text-white text-center lg:text-left">
                    <p className="text-white/80 font-black text-[11px] uppercase tracking-[0.35em] mb-2 flex items-center gap-2 justify-center lg:justify-start">
                        <Send className="w-3.5 h-3.5" /> Stay Updated
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold">Subscribe for New Releases & Launch Events</h3>
                </div>
                <div className="flex gap-3 flex-shrink-0 w-full lg:w-auto">
                    <input
                        id="newsletter-email"
                        name="newsletter_email"
                        type="email"
                        placeholder="Enter your email address..."
                        className="flex-1 lg:w-72 px-6 py-4 rounded-2xl bg-white/15 border border-white/25 text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all font-medium text-sm"
                    />
                    <button className="px-8 py-4 bg-white text-coral font-black rounded-2xl text-sm uppercase tracking-widest hover:shadow-2xl hover:-translate-y-0.5 transition-all shrink-0">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export const Testimonials = ({ testimonials = [] }) => {
    return (
        <section className="py-32 bg-white">
            <div className="container-custom">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <span className="h-px w-10 bg-secondary" />
                        <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Voice of Scholars</span>
                        <span className="h-px w-10 bg-secondary" />
                    </motion.div>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark">
                        What Our <span className="text-primary italic">Readers Say</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                {testimonials.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {testimonials.map((testimonial, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 rounded-[2.5rem] bg-warm-bg border border-gray-100 hover:shadow-2xl hover:border-primary/15 hover:-translate-y-1 transition-all duration-500 relative"
                            >
                                <Quote className="absolute top-10 right-10 w-16 h-16 text-primary/5 group-hover:text-primary/10 transition-colors" />
                                
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.stars || 5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                                    ))}
                                </div>

                                <p className="text-muted font-medium text-lg italic leading-relaxed mb-10 relative z-10">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-primary/10">
                                        <img 
                                            src={testimonial.image_url} 
                                            alt={testimonial.name}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-base">{testimonial.name}</h4>
                                        <p className="text-muted text-[10px] font-black uppercase tracking-widest">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export const InvitationCTA = () => (
    <section className="py-24">
        <div className="container-custom">
            <div className="relative rounded-[3.5rem] bg-gradient-to-br from-primary via-primary-dark to-[#0a0f2e] p-14 lg:p-24 overflow-hidden text-center shadow-[0_50px_100px_rgba(79,119,255,0.25)]">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/15 rounded-full blur-[100px]" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-coral/10 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="inline-block px-5 py-2 bg-white/8 border border-white/15 rounded-full text-[10px] text-secondary font-black tracking-[0.3em] uppercase mb-8">Ready for Publication</span>
                    <h2 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-10 leading-[1.1] tracking-tight">
                        Shaping the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">Global Research</span>
                    </h2>
                    <p className="text-white/70 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join our community of scholars and authors. Submit your manuscript or explore our latest book releases.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/submission-guidelines/call-for-papers" className="group px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-dark transition-all flex items-center gap-3 shadow-2xl">
                            Submit Manuscript <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                        <Link href="/book-publication" className="px-12 py-6 border border-white/15 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/8 transition-all flex items-center gap-3">
                            <BookOpen className="w-4 h-4" /> Browse Publications
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
