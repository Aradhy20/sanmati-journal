import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';

const testimonials = [
    {
        quote: "The peer-review process at Sanmati Spectrum was incredibly rigorous yet efficient. The feedback from reviewers significantly improved my paper.",
        name: "Dr. Elena Rossi",
        role: "Associate Professor, University of Milan",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        quote: "A truly multidisciplinary platform. It's rare to find a journal that values cross-domain dialogue with such academic integrity.",
        name: "Prof. James Chen",
        role: "Head of Research, Global Tech Institute",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        quote: "Publishing my case study here gave me visibility I hadn't seen elsewhere. The open-access policy is a game changer for researchers in developing countries.",
        name: "Dr. Amina Mansour",
        role: "Academic Researcher, Cairo University",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Texture - Using radial gradient */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6 opacity-50" />
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Voice of Researchers</h2>
                        <div className="flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                        </div>
                    </div>
                </ScrollReveal>

                <div className="max-w-4xl mx-auto relative px-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-xl md:text-3xl font-light italic leading-relaxed mb-12 text-slate-300">
                                &ldquo;{testimonials[current].quote}&rdquo;
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full border-2 border-blue-500/30 p-1 mb-6 relative overflow-hidden">
                                    <img
                                        src={testimonials[current].image}
                                        alt={testimonials[current].name}
                                        className="object-cover rounded-full w-full h-full"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-1">{testimonials[current].name}</h4>
                                <p className="text-blue-400 font-medium text-sm tracking-wide">{testimonials[current].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-16">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            title={`Go to slide ${i + 1}`}
                            className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
