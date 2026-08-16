import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';

const defaultTestimonials = [
    {
        quote: "The peer-review process at Sanmati Spectrum was rigorous, fast, and constructive. The reviewers offered valuable suggestions that significantly elevated the quality of our case study.",
        name: "Dr. Elena Rossi",
        role: "Associate Professor, University of Milan",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        quote: "A truly multidisciplinary academic platform. It is refreshing to find a journal that prioritizes scholarly integrity, open-access visibility, and fast turnaround times.",
        name: "Prof. James Chen",
        role: "Head of Research, Global Tech Institute",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        quote: "Publishing my recent methodology paper here was a seamless experience. The editorial board was communicative, and the assigned CrossRef DOI was indexed quickly.",
        name: "Dr. Amina Mansour",
        role: "Academic Researcher, Cairo University",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

const Testimonials = ({ testimonials: dbTestimonials = [] }) => {
    const testimonials = dbTestimonials.length > 0
        ? dbTestimonials.map(t => ({
            quote: t.text,
            name: t.name,
            role: t.role,
            image: t.image_url.startsWith('/') || t.image_url.startsWith('http')
                ? t.image_url
                : `/storage/${t.image_url}`
          }))
        : defaultTestimonials;
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-16 bg-[#FFFDF8] border-b border-[#E9E5DD] overflow-hidden relative">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-serif font-medium text-dark mb-3">Author Testimonials</h2>
                        <div className="flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#C77D5B] text-[#C77D5B]" />)}
                        </div>
                    </div>
                </ScrollReveal>

                <div className="max-w-3xl mx-auto relative px-12">
                    <div className="text-center transition-all duration-300">
                        <p className="text-base md:text-lg font-serif italic leading-relaxed mb-6 text-slate-600">
                            &ldquo;{testimonials[current].quote}&rdquo;
                        </p>

                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full border border-[#E9E5DD] p-0.5 mb-3 overflow-hidden bg-white">
                                <img loading="lazy"
                                    src={testimonials[current].image}
                                    alt={testimonials[current].name}
                                    className="object-cover rounded-full w-full h-full"
                                />
                            </div>
                            <h3 className="text-sm font-bold text-dark mb-0.5">{testimonials[current].name}</h3>
                            <p className="text-primary font-bold text-[10px] uppercase tracking-wider">{testimonials[current].role}</p>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-[#F7F4EC] hover:bg-slate-100 border border-[#E9E5DD] text-dark transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-[#F7F4EC] hover:bg-slate-100 border border-[#E9E5DD] text-dark transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            title={`Go to slide ${i + 1}`}
                            className="group p-1"
                            aria-label={`Go to slide ${i + 1}`}
                        >
                            <div className={`h-1.5 transition-all duration-350 rounded-full ${i === current ? 'w-6 bg-primary' : 'w-1.5 bg-[#E9E5DD] group-hover:bg-slate-400'}`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
