import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Award, 
    GraduationCap, 
    ChevronRight, 
    BookOpen, 
    Quote, 
    Sparkles, 
    Mail, 
    Phone, 
    ExternalLink, 
    UserCircle2, 
    Search, 
    Filter, 
    RefreshCw, 
    X, 
    Landmark, 
    MapPin, 
    Globe,
    LibraryBig
} from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';
import Modal from '../Components/ui/Modal';

// fadeInUp animation presets
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// Rich Structured Advisory Board Members Data
const ADVISORY_MEMBERS = [
    {
        name: "Dr. Sarita Devi",
        title: "Advisory Member",
        designation: "Assistant Professor",
        department: "Education",
        institution: "Shri Umiya Girls College",
        city: "Mandleshwar, Khargone",
        state: "Madhya Pradesh",
        country: "India",
        image: "/images/team/Dr. Sarita.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Girls Education", "Empowerment Studies", "Social Pedagogy"],
        biography: "Dr. Sarita Devi is an Assistant Professor at Shri Umiya Girls College. She has published numerous papers on girls' academic participation and inclusive curriculum design."
    },
    {
        name: "Prof. S. P. Subashini",
        title: "Advisory Member",
        designation: "Dean",
        department: "Nursing",
        institution: "Teerthanker Mahaveer University",
        city: "Moradabad",
        state: "Uttar Pradesh",
        country: "India",
        image: "/images/team/Dr. S. P. Subashini.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Nursing Education", "Healthcare Ethics", "Clinical Care"],
        biography: "Prof. S. P. Subashini serves as the Dean of the Faculty of Nursing at Teerthanker Mahaveer University. She is a prominent advocate of professional nursing standards and medical research."
    },
    {
        name: "Dr. Sushil Kumar",
        title: "Advisory Member",
        designation: "Associate Professor & H.O.D. (B.Ed.)",
        department: "Teacher Training",
        institution: "B. N. Mandal University",
        city: "Madhepura",
        state: "Bihar",
        country: "India",
        image: "/images/team/dr_sushil_kumar_2.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Teacher Mentorship", "Secondary Education", "Instructional Systems"],
        biography: "Dr. Sushil Kumar is the Head of Department for B.Ed. and an Associate Professor at B. N. Mandal University. His work targets the enhancement of teacher training and evaluation methodologies."
    },
    {
        name: "Dr. Rakesh Kumar",
        title: "Advisory Member",
        designation: "Associate Professor",
        department: "Law & Legal Studies",
        institution: "Teerthanker Mahaveer University",
        city: "Moradabad",
        state: "Uttar Pradesh",
        country: "India",
        image: "", // Will gracefully fallback to standard premium avatar
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Constitutional Law", "Corporate Governance", "Legal Ethics"],
        biography: "Dr. Rakesh Kumar is an Associate Professor in the Faculty of Law & Legal Studies at Teerthanker Mahaveer University. He researches international judicial systems and constitutional frameworks."
    },
    {
        name: "Dr. Harishchandra Verma",
        title: "Advisory Member",
        designation: "Principal / Director",
        department: "Pharmacy",
        institution: "Shri Vishwanath College of Pharmacy",
        city: "Sultanpur",
        state: "Uttar Pradesh",
        country: "India",
        image: "/images/team/Dr_Harish_chand.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Pharmacology", "Pharma Administration", "Medicinal Chemistry"],
        biography: "Dr. Harishchandra Verma is the Principal and Director of Shri Vishwanath College of Pharmacy. He specializes in pharmacological formulations and pharmaceutical ethics."
    },
    {
        name: "Dr. Vipin Kumar",
        title: "Advisory Member",
        designation: "Associate Professor",
        department: "Academic Research",
        institution: "Teerthanker Mahaveer University",
        city: "Moradabad",
        state: "Uttar Pradesh",
        country: "India",
        image: "/images/team/Dr. Vipin.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Multidisciplinary Methodology", "Business Ethics", "Applied Economics"],
        biography: "Dr. Vipin Kumar is an Associate Professor at Teerthanker Mahaveer University. He has published extensive work on the economic impacts of digital academic tools and systems."
    }
];

// Skeleton Card Loader Component
const SkeletonCard = () => (
    <div className="bg-white rounded-[20px] border border-slate-100 p-6 sm:p-8 flex flex-col h-full animate-pulse shadow-sm">
        <div className="flex items-center gap-5 mb-6">
            <div className="w-[90px] h-[90px] rounded-full bg-slate-100 shrink-0 shadow-sm" />
            <div className="space-y-3 flex-1">
                <div className="h-4 bg-slate-100 rounded-full w-20" />
                <div className="h-6 bg-slate-100 rounded-full w-3/4" />
            </div>
        </div>
        <div className="space-y-4 flex-grow mb-6">
            <div className="h-3.5 bg-slate-100 rounded-full w-5/6" />
            <div className="h-3.5 bg-slate-100 rounded-full w-2/3" />
            <div className="h-3.5 bg-slate-100 rounded-full w-1/2" />
        </div>
        <div className="h-10 bg-slate-100 rounded-xl w-full mt-auto" />
    </div>
);

// Premium AdvisoryMemberCard
const AdvisoryMemberCard = ({ member, onSelect, index }) => {
    const [imgError, setImgError] = useState(false);
    
    return (
        <motion.div 
            variants={fadeInUp}
            onClick={() => onSelect(member)}
            className="bg-white rounded-[20px] border border-slate-100 p-6 sm:p-8 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:border-slate-200 hover:-translate-y-2 transition-all duration-300 group cursor-pointer h-full relative focus-within:ring-2 focus-within:ring-secondary focus-within:outline-none"
            tabIndex="0"
            role="button"
            aria-label={`View academic profile of ${member.name}`}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelect(member);
                }
            }}
        >
            <div className="flex items-center gap-5 mb-6">
                <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] shrink-0 rounded-full overflow-hidden shadow-md border-2 border-white ring-2 ring-slate-100 relative bg-slate-50 flex items-center justify-center">
                    {member.image && !imgError ? (
                        <picture>
                            <source srcSet={member.image.replace(/\.(jpeg|jpg|png)$/i, '.webp')} type="image/webp" />
                            <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                                loading="lazy"
                                onError={() => setImgError(true)}
                            />
                        </picture>
                    ) : (
                        <UserCircle2 className="w-14 h-14 text-slate-300" />
                    )}
                </div>
                <div>
                    <span className="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full mb-2 bg-primary/5 text-primary border border-primary/10">
                        {member.title}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                        {member.name}
                    </h3>
                </div>
            </div>

            <div className="space-y-3.5 flex-grow mb-6 text-sm text-slate-600">
                {member.designation && (
                    <div className="flex items-start gap-2.5">
                        <GraduationCap className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-800 leading-snug">{member.designation}</span>
                    </div>
                )}
                {member.department && (
                    <div className="flex items-start gap-2.5">
                        <BookOpen className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="leading-snug">Department of {member.department}</span>
                    </div>
                )}
                {member.institution && (
                    <div className="flex items-start gap-2.5">
                        <Landmark className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-700 leading-snug">{member.institution}</span>
                    </div>
                )}
                <div className="flex items-start gap-2.5 text-xs text-slate-500 mt-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>
                        {member.city && `${member.city}, `}
                        {member.state && `${member.state}, `}
                        {member.country}
                    </span>
                </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-auto flex flex-wrap gap-2 items-center justify-between">
                {member.email ? (
                    <a 
                        href={`mailto:${member.email}`} 
                        onClick={(e) => e.stopPropagation()} 
                        className="text-xs text-slate-500 hover:text-primary transition-colors flex items-center gap-1.5 truncate max-w-[150px] font-sans"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        <span className="truncate">{member.email}</span>
                    </a>
                ) : (
                    <span className="text-[11px] text-slate-400 font-sans">Registry Verified</span>
                )}
                <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-secondary transition-colors inline-flex items-center gap-1">
                    Profile <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
            </div>
        </motion.div>
    );
};

// Detailed Profile Modal
const MemberDetailModal = ({ member, onClose }) => {
    if (!member) return null;
    
    return (
        <Modal
            isOpen={!!member}
            onClose={onClose}
            title={`${member.name} - Profile Details`}
            size="lg"
        >
            <div className="p-2 sm:p-4 space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left pb-6 border-b border-slate-100">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md border-4 border-white ring-4 ring-slate-100 relative bg-slate-50 flex items-center justify-center shrink-0">
                        {member.image ? (
                            <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover object-top"
                                onError={(e) => { e.target.src = ''; }}
                            />
                        ) : (
                            <UserCircle2 className="w-14 h-14 text-slate-350" />
                        )}
                    </div>
                    <div className="flex-1 space-y-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider rounded-full border border-primary/20">
                            {member.title}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                            {member.name}
                        </h3>
                        <p className="text-sm font-semibold text-secondary">{member.designation}</p>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                            {member.institution} {member.department && `· Dept. of ${member.department}`}
                        </p>
                        <p className="text-xs text-slate-400">
                            {member.city && `${member.city}, `}{member.state && `${member.state}, `}{member.country}
                        </p>
                    </div>
                </div>

                {member.biography && (
                    <div className="space-y-2">
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 font-poppins">Biography</h4>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                            {member.biography}
                        </p>
                    </div>
                )}

                {member.researchInterests && member.researchInterests.length > 0 && (
                    <div className="space-y-3">
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 font-poppins">Research Interests</h4>
                        <div className="flex flex-wrap gap-2">
                            {member.researchInterests.map((interest, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-3">
                        {member.email && (
                            <a 
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-primary/5 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-primary/20 transition-all font-sans"
                            >
                                <Mail className="w-4 h-4 text-primary" /> Email Member
                            </a>
                        )}
                        {member.profileUrl && (
                            <a 
                                href={member.profileUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-primary/5 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-primary/20 transition-all font-sans"
                            >
                                <Globe className="w-4 h-4 text-primary" /> Scholar Profile <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {member.researchGate && (
                            <a 
                                href={member.researchGate}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-primary/5 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-primary/20 transition-all font-sans"
                            >
                                <BookOpen className="w-4 h-4 text-primary" /> ResearchGate <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                    <button 
                        onClick={onClose}
                        className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md font-sans"
                    >
                        Close Profile
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default function AdvisoryBoard() {
    // State Management
    const [searchQuery, setSearchQuery] = useState('');
    const [designationFilter, setDesignationFilter] = useState('all');
    const [stateFilter, setStateFilter] = useState('all');
    const [selectedMember, setSelectedMember] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Simulate skeleton loading on filter changes
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 450);
        return () => clearTimeout(timer);
    }, [searchQuery, designationFilter, stateFilter]);

    // Unique Filter Options Extraction
    const filterOptions = useMemo(() => {
        const designations = new Set();
        const states = new Set();
        
        ADVISORY_MEMBERS.forEach(m => {
            if (m.designation) designations.add(m.designation);
            if (m.state) states.add(m.state);
        });

        return {
            designations: Array.from(designations).sort(),
            states: Array.from(states).sort()
        };
    }, []);

    // Filter Logic
    const filteredMembers = useMemo(() => {
        return ADVISORY_MEMBERS.filter(m => {
            const matchesSearch = searchQuery === '' || 
                m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                m.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (m.biography && m.biography.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesDesignation = designationFilter === 'all' || m.designation === designationFilter;
            const matchesState = stateFilter === 'all' || m.state === stateFilter;

            return matchesSearch && matchesDesignation && matchesState;
        });
    }, [searchQuery, designationFilter, stateFilter]);

    const hasActiveFilters = searchQuery !== '' || designationFilter !== 'all' || stateFilter !== 'all';

    const resetFilters = () => {
        setSearchQuery('');
        setDesignationFilter('all');
        setStateFilter('all');
    };

    return (
        <MainLayout>
            <Seo 
                title="Advisory Board | Sanmati Spectrum of Knowledge" 
                description="Eminent scholars and visionaries guiding the foundational strategies of Sanmati Journal."
            />
            
            <PageHeader 
                title="Advisory Board"
                breadcrumb="Leadership"
                subtitle="Cross-disciplinary luminaries ensuring global operational and research excellence."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative">
                
                {/* ─── INTRO SECTION ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-12 xl:col-span-7"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Advisory Vision</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark mb-6 leading-tight">
                            Guiding the Path to <br />
                            <span className="text-primary italic">Global Prominence</span>
                        </h2>
                        <p className="text-lg text-dark/70 font-medium leading-relaxed mb-8 border-l-4 border-primary/20 pl-6">
                            Our Advisory Board members are esteemed industry stalwarts who provide independent strategic counsel to the Editorial Leadership.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Strategic Mentorship", text: "Empowering structural shifts and expansive publishing policies." },
                                { title: "Research Incubation", text: "Seeding multidisciplinary initiatives and promoting high-impact metrics." }
                            ].map((feat, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
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

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-12 xl:col-span-5 relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-dark">
                            <img loading="lazy" src="/fistudy-assets/resources/about-journal-1.png" alt="Board" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                                <Quote className="w-10 h-10 text-secondary mx-auto mb-4 opacity-50" />
                                <p className="text-white text-base font-serif italic font-medium leading-relaxed">
                                    "Excellence is not an act, but a habit cultivated through the guidance of master practitioners."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ─── SEARCH & FILTER TOOLBAR ─── */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 mb-12 space-y-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Live Search */}
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                                type="text"
                                placeholder="Search advisors by name, university..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all font-sans"
                            />
                        </div>

                        {/* Multi-Filters */}
                        <div className="flex flex-wrap w-full lg:w-auto gap-3 items-center justify-end">
                            <div className="flex items-center gap-1.5 text-slate-400 font-sans">
                                <Filter className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Filters:</span>
                            </div>

                            {/* Designation */}
                            <select
                                value={designationFilter}
                                onChange={(e) => setDesignationFilter(e.target.value)}
                                className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-secondary/25 transition-all cursor-pointer w-full sm:w-[160px] font-sans"
                            >
                                <option value="all">Designations (All)</option>
                                {filterOptions.designations.map((d, i) => (
                                    <option key={i} value={d}>{d}</option>
                                ))}
                            </select>

                            {/* State */}
                            <select
                                value={stateFilter}
                                onChange={(e) => setStateFilter(e.target.value)}
                                className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-secondary/25 transition-all cursor-pointer w-full sm:w-[160px] font-sans"
                            >
                                <option value="all">States (All)</option>
                                {filterOptions.states.map((s, i) => (
                                    <option key={i} value={s}>{s}</option>
                                ))}
                            </select>

                            {/* Reset Button */}
                            {hasActiveFilters && (
                                <button 
                                    onClick={resetFilters}
                                    className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors font-semibold flex items-center justify-center gap-1.5 text-xs w-full sm:w-auto font-sans"
                                >
                                    <RefreshCw className="w-3.5 h-3.5" /> Reset
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* ─── THE REGISTRY GRID ─── */}
                <div className="relative">
                    <div className="flex flex-col items-center text-center mb-10">
                        <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-3">Advisory Registry</span>
                        <h2 className="text-3xl font-serif font-bold text-dark mb-4">Distinguished Advisors</h2>
                        <div className="h-1 w-12 bg-primary rounded-full" />
                    </div>

                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.div 
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <SkeletonCard key={i} />
                                ))}
                            </motion.div>
                        ) : filteredMembers.length > 0 ? (
                            <motion.div 
                                key="grid"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredMembers.map((m, i) => (
                                    <AdvisoryMemberCard 
                                        key={m.name} 
                                        member={m} 
                                        index={i} 
                                        onSelect={setSelectedMember} 
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="empty"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 p-8"
                            >
                                <Search className="w-12 h-12 text-slate-350 mx-auto mb-4 animate-pulse" />
                                <h3 className="text-lg font-bold text-slate-800 font-serif">No Advisory Board Members Found</h3>
                                <p className="text-sm text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed font-sans">
                                    No advisors matched your filter inputs. Try adjusting filters or resetting query options.
                                </p>
                                <button
                                    onClick={resetFilters}
                                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors font-sans"
                                >
                                    Reset Filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Profile Details Modal */}
            <MemberDetailModal 
                member={selectedMember} 
                onClose={() => setSelectedMember(null)} 
            />
        </MainLayout>
    );
}
