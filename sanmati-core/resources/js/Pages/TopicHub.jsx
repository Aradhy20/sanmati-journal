import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, CheckCircle2, FileText, Download } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function TopicHub({ topic = 'publishing-guide' }) {
    const topicsData = {
        'publishing-guide': {
            title: "Academic Research Publishing Hub",
            tagline: "Comprehensive guides for manuscript preparation, UGC CARE standards, and peer review navigation.",
            articles: [
                {
                    slug: 'how-to-publish-research-paper-in-india',
                    title: 'How to Publish Research Paper in India: Complete Author Guide',
                    readTime: '6 min read',
                    author: 'Sanmati Editorial Directorate',
                    excerpt: 'Step-by-step guide covering manuscript formatting, journal selection, UGC CARE parameters, plagiarism checks, and double-blind peer review.'
                },
                {
                    slug: 'ugc-care-journal-guidelines-and-ethics',
                    title: 'UGC CARE Journal Guidelines & Academic Ethics Explained',
                    readTime: '8 min read',
                    author: 'Dr Namrata Jain',
                    excerpt: 'Understanding UGC CARE list parameters, COPE ethics compliance, and citation credibility for Indian academicians.'
                }
            ]
        }
    };

    const currentTopic = topicsData[topic] || topicsData['publishing-guide'];

    return (
        <MainLayout title={`${currentTopic.title} | Sanmati Spectrum Topic Hub`} description={currentTopic.tagline}>
            <div className="py-12 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    
                    {/* Topic Hero */}
                    <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-3">
                        <span className="px-3 py-1 bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Topic Knowledge Hub
                        </span>
                        <h1 className="text-2xl sm:text-4xl font-serif font-bold">{currentTopic.title}</h1>
                        <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl">{currentTopic.tagline}</p>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentTopic.articles.map((art, idx) => (
                            <div key={idx} className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-blue-700 uppercase bg-blue-50 px-2 py-0.5 rounded">Guide</span>
                                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                                </h3>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed">{art.excerpt}</p>
                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                                    <span>By {art.author}</span>
                                    <Link href={`/blog/${art.slug}`} className="font-bold text-blue-600 hover:underline flex items-center gap-1">
                                        Read Guide <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
