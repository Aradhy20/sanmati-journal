import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ChevronRight, ThumbsUp, Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f4f7fe] min-h-[90vh] flex items-center">
            {/* Hexagon / Grid Background Pattern */}
            <div 
                className="absolute inset-0 z-0 opacity-40 mix-blend-multiply" 
                style={{ backgroundImage: 'url(/fistudy-assets/images/shapes/banner-one-bg-shape-1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            
            {/* Floating Elements */}
            <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-10 hidden lg:block z-0"
            >
                <img src="/fistudy-assets/images/icon/idea-bulb.png" alt="Idea" className="w-16 h-16 opacity-80" />
            </motion.div>
            
            <motion.div 
                animate={{ x: [0, 20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-10 hidden lg:block z-0"
            >
                <img src="/fistudy-assets/images/icon/3d-alarm.png" alt="Alarm" className="w-16 h-16 opacity-80" />
            </motion.div>

            <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-1/4 hidden lg:block z-0"
            >
                <img src="/fistudy-assets/images/icon/linke-icon.png" alt="Link" className="w-12 h-12 opacity-80" />
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl lg:text-[5.5rem] font-bold text-[#1a2b4c] leading-[1.1] mb-6 tracking-tight font-outfit relative">
                                Our Online Class <br />
                                Will Grow <span className="text-[#3b5998] relative inline-block">
                                    Your <br /> Creativity
                                    {/* Curved underline svg */}
                                    <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#3b5998]" viewBox="0 0 200 20" preserveAspectRatio="none">
                                        <path d="M0,15 C50,0 150,0 200,15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h1>
                            
                            <p className="text-gray-500 text-lg lg:text-xl font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Convenience of online education, allowing learners to acquire new skills at their own pace and from any location.
                            </p>
                            
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <Link 
                                    href="/course-details" 
                                    className="px-8 py-4 bg-gradient-to-r from-[#ff764c] to-[#ff9966] text-white rounded-full font-bold shadow-[0_10px_30px_rgba(255,118,76,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,118,76,0.4)] transition-all flex items-center gap-2"
                                >
                                    <ChevronRight className="w-5 h-5" /> Enroll Now
                                </Link>
                                
                                <a href="#" className="px-6 py-4 bg-white text-[#3b5998] rounded-full font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 border border-gray-100">
                                    <ThumbsUp className="w-4 h-4 text-[#3b5998]" /> Quality Video
                                </a>
                                
                                <a href="#" className="px-6 py-4 bg-white text-[#1a2b4c] rounded-full font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 border border-gray-100">
                                    <ThumbsUp className="w-4 h-4 text-[#ff764c]" /> Suitable Price
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image/Widget Area */}
                    <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative w-full max-w-[531px] mx-auto"
                        >
                            {/* Main Placeholder/Image */}
                            <div className="w-full aspect-[4/5] bg-gray-200 rounded-[3rem] overflow-hidden flex items-center justify-center relative z-10 shadow-2xl">
                                <span className="text-4xl lg:text-6xl font-black text-gray-800 tracking-tighter">531X665</span>
                                {/* In a real site, replacing placeholder: <img src="/assets/images/resources/banner-two-img-1.png" className="w-full h-full object-cover" /> */}
                            </div>

                            {/* Udemy Review Card Widget */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 z-20 border border-gray-100 w-72"
                            >
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                    <img src="/fistudy-assets/images/resources/banner-one-udemy-review-img.jpg" alt="Review" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="mb-1">
                                        <img src="/fistudy-assets/images/resources/banner-one-udemy-review-logo.png" alt="Udemy" className="h-4" />
                                    </div>
                                    <p className="text-sm font-bold text-[#1a2b4c]">Alisa Olivia /</p>
                                    <div className="flex text-yellow-400 mt-1">
                                        <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Success Student Card Widget */}
                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/4 -right-12 bg-white rounded-2xl p-5 shadow-xl z-20 border border-gray-100 w-48 text-center"
                            >
                                <div className="flex justify-center -space-x-4 mb-3">
                                    <img src="/fistudy-assets/images/resources/banner-one-student-trained-img-1-1.jpg" alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-gray-200" />
                                    <img src="/fistudy-assets/images/resources/banner-one-student-trained-img-1-2.jpg" alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-gray-300" />
                                </div>
                                <h4 className="text-2xl font-black text-[#3b5998]">2000+</h4>
                                <p className="text-xs font-bold text-gray-500 mt-1">Success Student</p>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
