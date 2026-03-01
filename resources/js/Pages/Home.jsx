import MainLayout from '../Layouts/MainLayout';
import Hero from '../Components/Hero';
import { ArrowRight, Download, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home({ newsItems, featuredPapers }) {
    return (
        <MainLayout
            title="Home"
            description="Sanmati Spectrum: A National Multidisciplinary Research Journal"
        >
            {/* Hero Section */}
            <Hero />

            {/* Featured Research - Pinterest/Masonry Inspired Grid */}
            <section className="py-32 max-w-[1400px] mx-auto px-6 relative z-10 text-slate-900 bg-white">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4"
                        >
                            Select Publications
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif font-bold tracking-tight"
                        >
                            Featured Research
                        </motion.h2>
                    </div>
                    <motion.button
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 text-slate-900 font-semibold group bg-slate-50 border border-slate-200 px-6 py-3 rounded-full hover:bg-slate-100 hover:border-slate-300 transition-all text-sm"
                    >
                        Browse Archive <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {[
                        { title: "Quantum Refraction in Modern Low-Energy Physics", domain: "Physics", doi: "10.1234/sj.2024.01", desc: "Exploring the boundaries of refractive indices in quantum states using high-frequency oscillators and their impact on future computational models.", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop", height: "h-[450px]" },
                        { title: "Neuro-Acoustics: Brain Response to Synthetic Frequency", domain: "Neuroscience", doi: "10.1234/sj.2024.02", desc: "A study on how synthetic soundscapes affect cognitive load.", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop", height: "h-[320px]" },
                        { title: "Socio-Economic Impacts of Artificial Intelligence", domain: "Social Science", doi: "10.1234/sj.2024.03", desc: "Analyzing the shift in labor markets and wealth distribution following the rapid adoption of large language models globally.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", height: "h-[500px]" }
                    ].map((paper, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            key={idx}
                            className={`flex flex-col group ${idx === 1 ? 'md:mt-24' : ''} ${idx === 2 ? 'lg:mt-12' : ''}`}
                        >
                            <div className={`mb-6 rounded-[2rem] overflow-hidden relative shadow-lg shadow-slate-200/50 group-hover:shadow-xl transition-all duration-500 ${paper.height}`}>
                                <img src={paper.img} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Paper Thumbnail" />
                                {idx === 0 && (
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase px-4 py-2 rounded-full shadow-sm tracking-widest">Editor's Pick</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="px-2">
                                <div className="flex items-center gap-3 mb-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    <span className="text-blue-600">{paper.domain}</span>
                                    <span className="size-1 rounded-full bg-slate-300"></span>
                                    <span>DOI: {paper.doi}</span>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-serif font-bold leading-tight mb-4 group-hover:text-blue-700 transition-colors text-slate-900">{paper.title}</h3>
                                <p className="text-slate-500 text-sm font-light mb-6 leading-relaxed line-clamp-3">{paper.desc}</p>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-2 px-2">
                                <div className="flex -space-x-3">
                                    <div className="size-8 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white shadow-sm hover:-translate-y-1 transition-transform">DR</div>
                                    <div className="size-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700 shadow-sm hover:-translate-y-1 transition-transform">SJ</div>
                                </div>
                                <button className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider group-hover:translate-x-1">
                                    Read Paper <ArrowUpRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Clean Mission Section */}
            <section className="py-32 bg-slate-50 relative overflow-hidden text-slate-900">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
                            <img className="w-full aspect-[4/5] object-cover" alt="Laboratory" src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-10 -right-4 lg:-right-10 bg-white border border-slate-100 p-10 rounded-[2rem] max-w-[300px] z-20 shadow-xl"
                        >
                            <p className="text-slate-900 font-serif font-bold text-6xl mb-2">50<span className="text-blue-600">+</span></p>
                            <p className="text-sm font-medium text-slate-500 leading-relaxed tracking-wide">Years of Peer-Reviewed Excellence across global institutions.</p>
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 inline-flex px-4 py-2 border border-blue-100 bg-white rounded-full shadow-sm"
                        >
                            Our Mission
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-8 text-slate-900"
                        >
                            Bridging the Gap Between <span className="italic text-slate-400 font-light">Innovation</span> and Implementation.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="space-y-6 text-slate-600 font-light leading-relaxed text-lg pb-10 border-b border-slate-200"
                        >
                            <p>Sanmati Journal is an international, peer-reviewed, open-access journal dedicated to publishing high-quality research that pushes the boundaries of human understanding. We focus on interdisciplinary approaches that combine hard sciences with social perspectives.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            className="mt-10 flex flex-col sm:flex-row gap-4"
                        >
                            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-slate-900/10 hover:shadow-xl hover:bg-slate-800 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 group">
                                Submit Manuscript <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <button className="bg-white border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-sm uppercase tracking-wider text-slate-700 shadow-sm">
                                Learn More
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action - Final Submission Hook */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden group shadow-2xl shadow-slate-200/50">
                        {/* Background Gradients */}
                        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] group-hover:bg-blue-200/50 transition-colors duration-1000" />

                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Ready to Contribute?</h2>
                            <p className="text-xl text-slate-500 font-light leading-relaxed">
                                Join our community of scholars. We are currently accepting original research papers for Volume 1, Issue 1.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-3 group">
                                    Submit Manuscript <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
