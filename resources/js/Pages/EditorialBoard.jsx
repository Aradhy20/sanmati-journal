import { motion } from 'framer-motion';
import { Award, GraduationCap, ChevronRight, BookOpen, Quote, Sparkles } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const BoardMember = ({ name, title, affiliation, email, phone, profileUrl, image, role, index }) => {
    const isChief = role === 'Chief';
    
    return (
        <motion.div 
            {...fadeInUp} 
            transition={{ delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative h-full bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* Visual Area */}
                <div className="relative aspect-[4/5] overflow-hidden bg-dark">
                    <img 
                        src={image || `/fistudy-assets/team/team-1-${(index % 8) + 1}.jpg`} 
                        alt={name}
                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                    
                    {/* Role Badge */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl backdrop-blur-md ${isChief ? 'bg-secondary text-white' : 'bg-white/10 text-white/70 border border-white/10'}`}>
                            {isChief ? <Award className="w-3 h-3 inline mr-2 align-middle" /> : <GraduationCap className="w-3 h-3 inline mr-2 align-middle" />}
                            {title}
                        </span>
                    </div>

                    {/* Meta Label */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="h-px w-6 bg-secondary" />
                            <span className="text-secondary font-black text-[9px] uppercase tracking-[0.3em]">Board Member</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                            {name}
                        </h3>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col bg-white">
                    <p className="text-muted text-sm font-bold uppercase tracking-widest mb-4">Affiliation</p>
                    <p className="text-dark/70 text-sm leading-relaxed mb-6 flex-1">
                        {affiliation}
                    </p>

                    <div className="w-full bg-warm-bg rounded-2xl p-4 mb-6 border border-gray-50 text-xs">
                        {email && <p className="flex justify-between border-b border-gray-200 pb-2 mb-2"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Email</span> <a href={`mailto:${email}`} className="font-bold text-dark hover:text-primary transition-colors truncate ml-2">{email}</a></p>}
                        {phone && <p className="flex justify-between"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Mob</span> <span className="font-bold text-dark">{phone}</span></p>}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        {profileUrl ? (
                            <a href={profileUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full group/link">
                                <span className="text-[9px] font-black uppercase tracking-widest text-dark group-hover/link:text-primary transition-colors">View Academic Profile</span>
                                <div className="w-8 h-8 rounded-full bg-surface border border-gray-50 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors duration-500">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </a>
                        ) : (
                            <>
                                <span className="text-[9px] font-black uppercase tracking-widest text-dark/30">Sanmati Affiliate</span>
                                <div className="w-8 h-8 rounded-full bg-surface border border-gray-50 flex items-center justify-center text-primary transition-colors duration-500">
                                    <ChevronRight className="w-4 h-4 opacity-50" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function EditorialBoard() {
    return (
        <MainLayout>
            <Seo 
                title="Board of Governors" 
                description="Our distinguished board members are the guardians of scholarly excellence at Sanmati Journal."
            />
            
            <PageHeader 
                title="Board of Governors"
                breadcrumb="Leadership"
                subtitle="The intellectual architects guiding our multidisciplinary peer-review framework."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative">
                {/* ─── INTRO SECTION (The Strategic Vision) ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    <motion.div {...fadeInUp} className="lg:col-span-12 xl:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Governance</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-8 leading-[1.05]">
                            The Vanguard of <br />
                            <span className="text-primary italic">Academic Rigor</span>
                        </h2>
                        <p className="text-xl text-dark/70 font-medium leading-relaxed mb-10 border-l-4 border-primary/20 pl-8">
                            Our editorial governance model is built on transparency, diversity, and an unwavering commitment to empirical excellence.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Intellectual Integrity", text: "Upholding the highest standards of peer-review precision." },
                                { title: "Global Perspective", text: "Bridging international discourse across multidisciplinary nodes." }
                            ].map((feat, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-surface rounded-3xl border border-gray-50 hover:shadow-xl transition-all duration-500">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-sm mb-1">{feat.title}</h4>
                                        <p className="text-muted text-xs leading-relaxed">{feat.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:col-span-12 xl:col-span-5 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-dark">
                            <img src="/fistudy-assets/resources/about-journal-2.png" alt="Board" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-12 text-center">
                                <Quote className="w-12 h-12 text-secondary mx-auto mb-6 opacity-50" />
                                <p className="text-white text-lg font-serif italic font-medium leading-relaxed">
                                    "Scholarship is most transformative when guided by the collective wisdom of diverse academic leaders."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ─── THE GRID (Distinguished Members) ─── */}
                <div className="relative">
                    <div className="flex flex-col items-center text-center mb-20">
                        <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-4">Registry</span>
                        <h2 className="text-4xl font-serif font-bold text-dark mb-4">Esteemed Board</h2>
                        <div className="h-1 w-12 bg-primary rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                name: "Prof. Pralhad Joshi",
                                title: "Chief Governor",
                                role: "Chief",
                                affiliation: "Vice-Chancellor, Kumar Bhaskar Varma Sanskrit and Ancient Studies University Nalbari, (Assam)",
                                image: "/images/team/Prof. Prahlad joshi.jpeg"
                            },
                            {
                                name: "Dr. Smriti Kumari Singh",
                                title: "Board Member",
                                affiliation: "Assistant Professor (Department of Hindi), Sophia College for Women (Empowered Autonomous) Mumbai (Maharashtra)"
                            },
                            {
                                name: "Dr. Amita Kumari",
                                title: "Board Member",
                                affiliation: "Assistant Professor, University Department of Education, Vinoba Bhave University, Hazaribagh (Jharkhand)",
                                email: "masterofeducationvbu@gmail.com",
                                phone: "+91 9470159260",
                                profileUrl: "https://www.vbu.ac.in/directory",
                                image: "/images/team/Amita kumari.jpeg"
                            },
                            {
                                name: "Dr. Parikshit Layek",
                                title: "Board Member",
                                affiliation: "Vice Principal, Shri Ramakrishna Sarada Ashrama, T.T.College Hazaribagh. (Jharkhand)",
                                image: "/images/team/Parikshit Layek.jpeg"
                            },
                            {
                                name: "Dr. Vaishali Ranjit Vichare",
                                title: "Board Member",
                                affiliation: "Associate Professor, Dr. GD POL FOUNDATION, YMT Homeopathic Medical College & PG Centre Kharghar. Navi Mumbai (Maharashtra)",
                                image: "/images/team/Vaishali Ranjeet vichare.jpeg"
                            },
                            {
                                name: "Dr. A. Shashank. Rao",
                                title: "Board Member",
                                affiliation: "Assistant Professor, Naveen Govt. College Nagpura, Durg (Chhattisgarh)"
                            }
                        ].map((m, i) => (
                            <BoardMember key={i} {...m} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
