import { ScrollReveal, revealVariants } from './ScrollReveal';
import { DotPattern } from './DecorativeElements';
import { Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle2, Zap, Globe, Lock } from 'lucide-react';

const FeatureBlock = ({ title, description, image, align = 'left', icon: Icon, delay = 0 }) => {
    return (
        <div className="py-16 md:py-24 relative z-10">
            <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                    <ScrollReveal variants={align === 'left' ? revealVariants.left : revealVariants.right} delay={delay}>
                        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white">
                            <div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>
                            {/* Floating Stats Card on Image */}
                            <div className={`absolute bottom-6 ${align === 'left' ? 'right-6' : 'left-6'} bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 max-w-[200px]`}>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-slate-900 text-sm">Key Benefit</span>
                                </div>
                                <p className="text-xs text-slate-600 font-medium">Optimized for maximum impact and reach.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="flex-1">
                    <ScrollReveal variants={revealVariants.fadeUp} delay={delay + 0.1}>
                        <div className="p-2 bg-blue-50 text-blue-700 rounded-lg inline-block mb-4">
                            <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                            {title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                            {description}
                        </p>

                        <ul className="space-y-3 mb-6">
                            {[1, 2, 3].map((_, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <span className="text-slate-700 text-sm">Detailed feature point demonstrating value proposition {i + 1}.</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/basic-info/about-journal" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 group transition-colors">
                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default function HomeFeatures() {
    return (
        <section className="relative overflow-hidden bg-slate-50">
            {/* Wave Divider Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
                <DotPattern className="opacity-30 absolute top-0 right-0 w-1/2 h-full z-0" />

                <FeatureBlock
                    title="Rapid Review & Publication"
                    description="Don't let your research gather dust. Our streamlined editorial process ensures your work is reviewed by experts and published faster than traditional journals."
                    image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                    align="left"
                    icon={Zap}
                />

                <FeatureBlock
                    title="Global Reach & Indexing"
                    description="Maximize your impact. We ensure your research is indexed in major databases and accessible to scholars worldwide through open access."
                    image="https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=2070&auto=format&fit=crop"
                    align="right"
                    icon={Globe}
                    delay={0.1}
                />
                <FeatureBlock
                    title="Secure & Compliant"
                    description="We adhere to the highest standards of data privacy and publication ethics (COPE), ensuring your intellectual property is safe."
                    image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
                    align="left"
                    icon={Lock}
                    delay={0.2}
                />
            </div>

            {/* Wave Divider Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
}
