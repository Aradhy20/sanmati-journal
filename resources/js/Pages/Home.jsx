import { MainLayout } from '../Components/Templates/MainLayout';
import Hero from '../Components/Hero';
import { StatsRow } from '../Components/Organisms/StatsRow';
import { GlassCard } from '../Components/Molecules/GlassCard';
import { Text } from '../Components/Atoms/Typography';
import { Button } from '../Components/Atoms/Button';
import { Mail, ArrowRight, Download, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home({ newsItems, featuredPapers }) {
    return (
        <MainLayout
            title="Home"
            description="Sanmati Spectrum: A National Multidisciplinary Research Journal"
        >
            {/* Hero Section */}
            <Hero />

            {/* Featured Research - Light Theme */}
            <section className="py-24 max-w-7xl mx-auto px-6 relative z-10 text-slate-900 border-b border-slate-200">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">Featured Research</h2>
                        <p className="text-slate-600 max-w-lg text-lg font-light leading-relaxed">Hand-picked breakthroughs from this quarter's global academic contributions.</p>
                    </div>
                    <button className="flex items-center gap-2 text-primary font-bold group bg-blue-50 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors">
                        Browse Full Archive <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Quantum Refraction in Modern Low-Energy Physics", domain: "Physics", doi: "10.1234/sj.2024.01", desc: "Exploring the boundaries of refractive indices in quantum states using high-frequency oscillators...", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop" },
                        { title: "Neuro-Acoustics: Brain Response to Synthetic Frequency", domain: "Neuroscience", doi: "10.1234/sj.2024.02", desc: "A study on how synthetic soundscapes affect cognitive load and neuro-plasticity in controlled clinical environments.", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop" },
                        { title: "Socio-Economic Impacts of Artificial Intelligence", domain: "Social Science", doi: "10.1234/sj.2024.03", desc: "Analyzing the shift in labor markets and wealth distribution following the rapid adoption of large language models.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" }
                    ].map((paper, idx) => (
                        <motion.div whileHover={{ y: -8 }} key={idx} className={`bg-white rounded-[2rem] p-8 flex flex-col h-full group border border-slate-200 transition-all duration-300 ${idx === 0 ? 'shadow-lg border-primary/20 ring-1 ring-primary/10' : 'shadow-sm hover:shadow-md hover:border-slate-300'}`}>
                            <div className="mb-6 rounded-2xl overflow-hidden aspect-video relative group-hover:shadow-lg transition-shadow">
                                <img src={paper.img} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Paper Thumbnail" />
                                {idx === 0 && (
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full shadow-md tracking-wider">New</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-widest">
                                    <span>{paper.domain}</span>
                                    <span className="size-1 rounded-full bg-slate-300"></span>
                                    <span className="truncate">DOI: {paper.doi}</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-display font-bold leading-tight mb-4 group-hover:text-primary transition-colors text-slate-900">{paper.title}</h3>
                                <p className="text-slate-600 text-sm line-clamp-3 font-light mb-6 leading-relaxed bg-slate-50 p-4 rounded-xl">{paper.desc}</p>
                            </div>
                            <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-2">
                                <div className="flex -space-x-3">
                                    <div className="size-8 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">DR</div>
                                    <div className="size-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-primary shadow-sm">SJ</div>
                                </div>
                                <button className="size-11 rounded-full bg-slate-50 text-slate-600 border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110 hover:border-transparent hover:shadow-md">
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Clean About Section */}
            <section className="py-32 bg-white relative overflow-hidden text-slate-900 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-50 p-2">
                            <img className="w-full aspect-[4/5] object-cover rounded-3xl" alt="Laboratory" src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-10 -right-4 lg:-right-10 bg-white border border-slate-200 p-8 rounded-[2rem] max-w-[280px] z-20 shadow-xl"
                        >
                            <p className="text-secondary font-display font-black text-5xl mb-2">50<span className="text-primary">+</span></p>
                            <p className="text-sm font-medium text-slate-500 leading-relaxed tracking-wide">Years of Peer-Reviewed Excellence across global institutions.</p>
                        </motion.div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 flex items-center gap-4 bg-blue-50 inline-flex px-4 py-2 rounded-full ring-1 ring-blue-100">
                            Our Mission
                        </h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8 text-slate-900">Bridging the Gap Between <span className="text-primary italic">Innovation</span> and Implementation.</h2>
                        <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg pb-6 border-b border-slate-100">
                            <p>Sanmati Journal is an international, peer-reviewed, open-access journal dedicated to publishing high-quality research that pushes the boundaries of human understanding. We focus on interdisciplinary approaches that combine hard sciences with social perspectives.</p>
                            <p>Our digital-first platform ensures that research is accessible instantly to millions of scholars worldwide, maintaining the highest standards of editorial integrity and academic rigor.</p>
                        </div>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button className="bg-slate-50 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all text-sm uppercase tracking-wider text-slate-600 shadow-sm">Learn More</button>
                            <button className="bg-primary text-white border border-transparent px-8 py-4 rounded-full font-bold hover:bg-blue-800 shadow-md transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">Submit Manuscript <ArrowUpRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Board */}
            <section className="py-32 max-w-7xl mx-auto px-6 overflow-hidden text-slate-900 relative z-10 border-b border-slate-200">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-slate-900">The Editorial Board</h2>
                    <p className="text-slate-600 text-lg font-light leading-relaxed">Led by world-renowned experts from top-tier research institutions, strictly maintaining academic integrity.</p>
                </div>
                <div className="flex flex-wrap justify-center lg:flex-nowrap lg:overflow-x-auto pb-12 gap-8 lg:gap-10 no-scrollbar p-2">
                    {[
                        { name: "Dr. Namrta Jain", role: "Editor-in-Chief", uni: "Teerthanker Mahaveer University", img: "/mam.jpg" },
                        { name: "Dr. Ratnesh Kumar Jain", role: "Managing Editor", uni: "Teerthanker Mahaveer University", img: "/sir.jpg" },
                        { name: "Dr. Kalpna Jain", role: "Executive Editor", uni: "Teerthanker Mahaveer University", img: "/dr_kalpana_jain.jpeg" }
                    ].map((member, i) => (
                        <motion.div whileHover={{ y: -5 }} key={i} className="flex-shrink-0 group w-full sm:w-[calc(50%-1rem)] lg:w-64 max-w-[280px]">
                            <div className="aspect-square rounded-[2rem] p-2 border border-slate-100 bg-white shadow-sm group-hover:shadow-lg transition-all mb-6 relative hover:border-blue-100">
                                <div className="size-full rounded-2xl overflow-hidden relative">
                                    <div className="absolute inset-0 bg-blue-900/10 z-10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src={member.img} alt={member.name} />
                                </div>
                                <div className="absolute -bottom-4 right-6 bg-primary text-white size-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md translate-y-2 group-hover:translate-y-0">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="text-left px-2">
                                <h4 className="text-xl font-bold font-display mb-1 text-slate-900">{member.name}</h4>
                                <p className="text-sm text-primary font-bold mb-3">{member.role}</p>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{member.uni}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action - Final Submission Hook */}
            <section className="py-24 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <GlassCard className="p-12 md:p-20 text-center relative overflow-hidden group">
                        {/* Background Gradients */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-colors duration-1000" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-colors duration-1000" />

                        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                            <Text variant="h2" color="heading">Ready to Contribute?</Text>
                            <Text variant="body" className="text-xl text-slate-600">
                                Join our community of scholars. We are currently accepting original research papers for Volume 1, Issue 1.
                            </Text>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" href="/submission-guidelines/call-for-papers">
                                    Submit Manuscript <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" size="lg" href="mailto:sanmatijournal@gmail.com">
                                    <Mail className="mr-2 w-5 h-5" /> Contact Editor
                                </Button>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </section>
        </MainLayout>
    );
}
