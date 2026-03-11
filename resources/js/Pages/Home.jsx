import MainLayout from '../Layouts/MainLayout';
import Hero from '../Components/Hero';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    ArrowRight, BookOpen, Users, Globe, Award, FileText, Send, Star,
    Lightbulb, GraduationCap, Microscope, Scale, Palette, Calculator, Cpu,
    CheckCircle, Zap, Shield, Search, Clock, ChevronRight
} from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 }
};

export default function Home() {
    return (
        <MainLayout title="Home" description="Sanmati Spectrum: A National Multidisciplinary Research Journal">
            <Hero />

            {/* ─── ABOUT SECTION (Fistudy about-one layout) ─── */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/3 rounded-full -ml-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mb-32 blur-3xl" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left — dual image layout from Fistudy about-one */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {/* Main tall image */}
                                <div className="relative">
                                    <div className="rounded-3xl overflow-hidden shadow-2xl h-80">
                                        <img src="/fistudy-assets/resources/abou-one-img-1.jpg" alt="Research" className="w-full h-full object-cover" />
                                    </div>
                                    {/* Awards badge */}
                                    <div className="absolute -bottom-6 left-4 bg-white rounded-2xl shadow-xl p-5 text-center border border-gray-100">
                                        <div className="flex items-baseline gap-1 justify-center">
                                            <span className="text-4xl font-black text-dark">25</span>
                                            <span className="text-secondary text-2xl font-black">+</span>
                                        </div>
                                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-1">Research Fields</p>
                                    </div>
                                </div>
                                {/* Right column */}
                                <div className="flex flex-col gap-4 pt-10">
                                    {/* Experience box */}
                                    <div className="bg-gradient-to-br from-primary to-dark rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-6 -mt-6" />
                                        <img src="/fistudy-assets/icon/about-one-experience-icon.png" alt="" className="w-10 h-10 mb-3 relative z-10" />
                                        <div className="flex items-baseline gap-1 relative z-10">
                                            <span className="text-4xl font-black">2</span>
                                            <span className="text-secondary text-2xl font-black">+</span>
                                        </div>
                                        <p className="text-white/70 text-sm">Years of Excellence</p>
                                    </div>
                                    {/* Second image */}
                                    <div className="rounded-3xl overflow-hidden shadow-xl h-44">
                                        <img src="/fistudy-assets/resources/abou-one-img-2.jpg" alt="Academic" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            {/* Floating shape */}
                            <img
                                src="/fistudy-assets/shapes/about-one-img-shape-1.png"
                                alt=""
                                className="absolute -bottom-4 -right-4 w-20 animate-float opacity-80"
                            />
                        </motion.div>

                        {/* Right — content */}
                        <motion.div {...fadeInUp} className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-0.5 bg-secondary" />
                                <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">About Us</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight mb-6">
                                Advancing Knowledge Through
                                <span className="text-primary"> Rigorous Inquiry</span>
                            </h2>
                            <p className="text-gray-500 leading-relaxed text-lg mb-8">
                                Sanmati Spectrum of Knowledge &amp; Emerging Discourse is a national, peer-reviewed quarterly journal dedicated to promoting multidisciplinary academic dialogue and advancing knowledge through original research.
                            </p>

                            {/* Mission & Vision */}
                            <div className="space-y-5 mb-10">
                                {[
                                    { icon: '/fistudy-assets/icon/mission-icon.png', title: 'Our Mission', desc: 'To foster a global ecosystem of knowledge sharing where academic rigor meets innovative thinking, empowering researchers to solve tomorrow\'s challenges.' },
                                    { icon: '/fistudy-assets/icon/vision-icon.png', title: 'Our Vision', desc: 'To become India\'s most trusted multidisciplinary citation index, bridging the gap between traditional wisdom and modern scientific inquiry.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-primary/3 transition-all">
                                        <img src={item.icon} alt={item.title} className="w-10 h-10 shrink-0 mt-0.5 object-contain" />
                                        <div>
                                            <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <Link href="/basic-info/about-journal"
                                    className="group px-8 py-3.5 bg-secondary text-white rounded-full font-bold text-sm hover:bg-secondary-dark transition-all flex items-center gap-2 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 uppercase tracking-wider">
                                    <ChevronRight className="w-4 h-4" /> Know More
                                </Link>
                                <span className="text-gray-400 text-sm font-semibold italic">ISSN: 3108-1819</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── JOURNAL CATEGORIES (Fistudy category-two style) ─── */}
            <section className="py-24 bg-warm-bg">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <motion.div {...fadeInUp} className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-0.5 bg-secondary" />
                            <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">Research Areas</span>
                            <div className="w-8 h-0.5 bg-secondary" />
                        </motion.div>
                        <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="section-title">
                            Explore Our <span className="text-primary">Disciplines</span>
                        </motion.h2>
                        <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-gray-500 mt-4 max-w-xl mx-auto">
                            We publish cutting-edge research across diverse academic fields
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {[
                            { name: "Science & Technology", icon: Microscope, color: "from-blue-500 to-indigo-600", count: "15+" },
                            { name: "Social Sciences", icon: Users, color: "from-emerald-500 to-teal-600", count: "12+" },
                            { name: "Arts & Humanities", icon: Palette, color: "from-purple-500 to-violet-600", count: "10+" },
                            { name: "Commerce & Management", icon: Calculator, color: "from-orange-500 to-amber-600", count: "8+" },
                            { name: "Law & Governance", icon: Scale, color: "from-red-500 to-rose-600", count: "6+" },
                            { name: "Education", icon: GraduationCap, color: "from-cyan-500 to-blue-600", count: "9+" },
                            { name: "Computer Science", icon: Cpu, color: "from-indigo-500 to-purple-600", count: "11+" },
                            { name: "Innovation Research", icon: Lightbulb, color: "from-yellow-500 to-orange-600", count: "7+" },
                        ].map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.07 }}
                                className="card-modern p-6 text-center group cursor-pointer"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    <cat.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-dark text-sm mb-1 leading-tight">{cat.name}</h3>
                                <p className="text-primary text-xs font-semibold">{cat.count} Papers</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── LATEST PUBLICATIONS (Fistudy courses-two style) ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-14 flex-wrap gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-0.5 bg-secondary" />
                                <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">Select Publications</span>
                            </div>
                            <h2 className="section-title !mb-0">
                                Featured <span className="text-primary">Research</span>
                            </h2>
                        </div>
                        <Link href="/archives" className="group px-6 py-3 border-2 border-gray-200 text-dark rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-all flex items-center gap-2">
                            Browse Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { field: "Physics", doi: "DOI: 10.1234/SJ.2024.01", title: "Quantum Refraction in Modern Low-Energy Physics", excerpt: "Exploring the boundaries of refractive indices in quantum states using high-frequency oscillators...", img: "/fistudy-assets/resources/courses-2-1.jpg", badge: "Editor's Pick" },
                            { field: "Neuroscience", doi: "DOI: 10.1234/SJ.2024.02", title: "Neuro-Acoustics: Brain Response to Synthetic Frequency", excerpt: "A study on how synthetic soundscapes affect cognitive load and neural pathways in controlled environments.", img: "/fistudy-assets/resources/courses-2-2.jpg" },
                            { field: "Social Science", doi: "DOI: 10.1234/SJ.2024.03", title: "Socio-Economic Impacts of Artificial Intelligence", excerpt: "Analyzing the shift in labor markets and wealth distribution following the rapid adoption of large language models.", img: "/fistudy-assets/resources/courses-2-3.jpg" },
                        ].map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="card-modern overflow-hidden group"
                            >
                                <div className="relative overflow-hidden aspect-video">
                                    <img src={paper.img} alt={paper.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    {paper.badge && (
                                        <span className="absolute top-3 left-3 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                                            {paper.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-primary text-xs font-black uppercase tracking-widest">{paper.field}</span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-gray-400 text-xs">{paper.doi}</span>
                                    </div>
                                    <h3 className="font-bold text-dark text-lg leading-snug mb-3 group-hover:text-primary transition-colors">{paper.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{paper.excerpt}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex -space-x-2">
                                            {['DR', 'SJ'].map((init, j) => (
                                                <div key={j} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-dark flex items-center justify-center text-white text-[9px] font-bold border-2 border-white">{init}</div>
                                            ))}
                                        </div>
                                        <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
                                            Read Paper <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── COUNTER (Fistudy counter style) ─── */}
            <section className="py-20 bg-gradient-to-br from-dark via-primary-dark to-primary relative overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
                        {[
                            { icon: FileText, num: "500+", label: "Research Papers" },
                            { icon: Users, num: "200+", label: "Global Authors" },
                            { icon: Award, num: "50+", label: "Expert Reviewers" },
                            { icon: Globe, num: "25+", label: "Research Fields" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <stat.icon className="w-7 h-7 text-secondary" />
                                </div>
                                <div className="text-5xl font-black mb-2">{stat.num}</div>
                                <p className="text-white/60 text-sm uppercase tracking-widest font-semibold">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PUBLICATION PROCESS (Fistudy process style) ─── */}
            <section className="py-24 bg-warm-bg">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-0.5 bg-secondary" />
                            <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">How It Works</span>
                            <div className="w-8 h-0.5 bg-secondary" />
                        </div>
                        <h2 className="section-title">Publication <span className="text-primary">Process</span></h2>
                        <p className="text-gray-500 max-w-xl mx-auto mt-3">From submission to publication — a transparent, peer-reviewed journey</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-14 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0" />

                        {[
                            { step: "01", title: "Submit Paper", desc: "Upload your research manuscript through our secure online portal with all required documents.", icon: Send, color: "from-blue-500 to-indigo-600" },
                            { step: "02", title: "Peer Review", desc: "Expert reviewers from relevant fields conduct rigorous double-blind evaluation of your work.", icon: Users, color: "from-emerald-500 to-teal-600" },
                            { step: "03", title: "Revisions", desc: "Incorporate reviewer feedback and submit your revised manuscript for final evaluation.", icon: FileText, color: "from-orange-500 to-amber-600" },
                            { step: "04", title: "Publication", desc: "Accepted papers are published in our journal with DOI assignment and global indexing.", icon: Award, color: "from-purple-500 to-violet-600" },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="card-modern p-8 text-center relative z-10"
                            >
                                <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-primary/40 text-xs font-black uppercase tracking-widest">Step {step.step}</span>
                                <h3 className="font-bold text-dark text-lg mt-1 mb-3">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WHY CHOOSE US (Fistudy why-choose style) ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left image with overlay card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                                <img src="/fistudy-assets/resources/about-three-img-1.jpg" alt="Research" className="w-full h-full object-cover" />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-8 right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
                            >
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-4xl font-black text-dark">50</span>
                                    <span className="text-secondary text-2xl font-black">+</span>
                                </div>
                                <p className="text-gray-500 text-sm font-semibold">Years of Peer-Reviewed<br />Excellence</p>
                            </motion.div>
                        </motion.div>

                        {/* Right content */}
                        <motion.div {...fadeInUp} className="lg:pl-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-0.5 bg-secondary" />
                                <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">Our Mission</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight mb-6">
                                Bridging the Gap Between <span className="text-primary">Innovation &amp; Implementation</span>
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Sanmati Journal is a national, peer-reviewed open-access journal dedicated to publishing high-quality research that pushes the boundaries of human understanding. We focus on interdisciplinary approaches that combine hard sciences with social perspectives.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {[
                                    { icon: Zap, label: "Fast Publication", desc: "Decisions within 4–6 weeks" },
                                    { icon: Globe, label: "Global Indexing", desc: "Wider academic visibility" },
                                    { icon: Shield, label: "DOI Support", desc: "Permanent paper identity" },
                                    { icon: Search, label: "Peer Review", desc: "Double-blind evaluation" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-warm-bg hover:bg-primary/5 transition-colors group">
                                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <item.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-dark text-sm">{item.label}</p>
                                            <p className="text-gray-400 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <Link href="/submission-guidelines/call-for-papers"
                                    className="group px-8 py-3.5 bg-secondary text-white rounded-full font-bold text-sm hover:bg-secondary-dark transition-all flex items-center gap-2 shadow-lg shadow-secondary/20 uppercase tracking-wider">
                                    <ChevronRight className="w-4 h-4" /> Submit Manuscript
                                </Link>
                                <Link href="/basic-info/about-journal"
                                    className="px-8 py-3.5 border-2 border-gray-200 hover:border-primary text-dark hover:text-primary rounded-full font-bold text-sm transition-all uppercase tracking-wider">
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="py-24 bg-warm-bg">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-0.5 bg-secondary" />
                            <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">Testimonials</span>
                            <div className="w-8 h-0.5 bg-secondary" />
                        </div>
                        <h2 className="section-title">What <span className="text-primary">Researchers Say</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. Amit Sharma", role: "Professor, IIT Delhi", text: "Sanmati Spectrum provides a rigorous and transparent peer-review process. The editorial team is highly responsive and supportive throughout the publication journey.", rating: 5 },
                            { name: "Prof. Ritu Verma", role: "Researcher, JNU", text: "Publishing with Sanmati Journal was seamless. The multidisciplinary focus allowed me to present my interdisciplinary research to a wider academic audience.", rating: 5 },
                            { name: "Dr. Pradeep Kumar", role: "Associate Professor, BHU", text: "The quality standards maintained by Sanmati Spectrum are commendable. Their commitment to promoting genuine academic research is truly inspiring.", rating: 5 },
                        ].map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="card-modern p-8 relative group"
                            >
                                {/* Quote mark */}
                                <div className="absolute top-6 right-6 text-5xl text-primary/8 font-serif select-none group-hover:text-primary/15 transition-colors">"</div>
                                <div className="flex gap-1 mb-4">
                                    {Array(t.rating).fill(0).map((_, j) => (
                                        <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-dark flex items-center justify-center text-white text-xs font-bold shrink-0">
                                        {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-dark text-sm">{t.name}</p>
                                        <p className="text-gray-400 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA BANNER (Fistudy newsletter style) ─── */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-dark via-primary-dark to-primary rounded-4xl p-14 relative overflow-hidden text-center shadow-2xl">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-16 -mb-16 blur-2xl" />
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-5">
                            <div className="w-8 h-0.5 bg-secondary" />
                            <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">Call For Papers</span>
                            <div className="w-8 h-0.5 bg-secondary" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
                            Ready to Contribute?
                        </h2>
                        <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                            Join our community of scholars. We are currently accepting original research papers for Volume 1, Issue 1.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/submission-guidelines/call-for-papers"
                                className="group px-10 py-4 bg-secondary text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-secondary-dark transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5">
                                Submit Manuscript <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/publication/book-publication"
                                className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5">
                                <BookOpen className="w-4 h-4" /> Publish Book
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
