import React from 'react';
import { motion } from 'framer-motion';

export default function SlidingText() {
    return (
        <section className="bg-[#1a2b4c] py-8 overflow-hidden border-y border-white/10 relative z-20">
            <div className="flex w-[200%] md:w-[150%] lg:w-[120%]">
                <motion.div 
                    animate={{ x: [0, -1000] }} 
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex shrink-0 items-center justify-around whitespace-nowrap min-w-full"
                >
                    <FeatureItem text="20+ Instructor" />
                    <FeatureItem text="500+ Online Courses" />
                    <FeatureItem text="24 Hrs Support" />
                    <FeatureItem text="Courses Certificate" />
                </motion.div>
                
                {/* Duplicate for seamless infinite scroll */}
                <motion.div 
                    animate={{ x: [0, -1000] }} 
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex shrink-0 items-center justify-around whitespace-nowrap min-w-full"
                >
                    <FeatureItem text="20+ Instructor" />
                    <FeatureItem text="500+ Online Courses" />
                    <FeatureItem text="24 Hrs Support" />
                    <FeatureItem text="Courses Certificate" />
                </motion.div>
            </div>
        </section>
    );
}

function FeatureItem({ text }) {
    return (
        <div className="flex items-center gap-8 px-12">
            <h2 className="text-3xl lg:text-4xl font-black text-transparent stroke-text uppercase tracking-widest font-outfit" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                {text}
            </h2>
            <img src="/fistudy-assets/images/shapes/sliding-text-shape-1.png" alt="*" className="w-8 h-8 opacity-50" />
        </div>
    );
}
