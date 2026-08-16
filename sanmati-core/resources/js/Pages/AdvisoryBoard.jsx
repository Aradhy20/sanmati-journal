import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    GraduationCap, 
    ChevronRight, 
    BookOpen, 
    Quote, 
    Sparkles, 
    Mail, 
    ExternalLink, 
    UserCircle2, 
    Search, 
    Filter, 
    RefreshCw, 
    Landmark, 
    MapPin, 
    Globe
} from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';
import Modal from '../Components/ui/Modal';

const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 15 },
    transition: { duration: 0.4, ease: 'easeOut' }
};

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
        image: "", 
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

const SkeletonCard = () => (
    <div className="bg-[#FFFDF8] rounded-xl border border-[#E9E5DD] p-6 shadow-xs animate-pulse">
        <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-full bg-slate-200" />
            <div className="space-y-2 flex-1">
                <div className="h-3 w-16 bg-slate-200 rounded" />
                <div className="h-4 w-32 bg-slate-200 rounded" />
            </div>
        </div>
        <div className="space-y-2">
            <div className="h-3 w-full bg-slate-200 rounded" />
            <div className="h-3 w-4/5 bg-slate-200 rounded" />
        </div>
    </div>
);

const MemberCard = ({ member, onSelect, badgeClass = "bg-primary/10 text-primary" }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div
            className="group bg-[#FFFDF8] rounded-xl border border-[#E9E5DD] p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer hover:border-primary/30 relative focus:outline-none focus:ring-2 focus:ring-primary/20"
            onClick={() => onSelect(member)}
            role="button"
            tabIndex={0}
            aria-label={`View academic profile of ${member.name}, ${member.title}`}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelect(member);
                }
            }}
        >
            <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border border-[#E9E5DD] relative bg-[#F7F4EC] flex items-center justify-center">
                    {member.image && !imgError ? (
                        <picture>
                            <source srcSet={encodeURI(member.image.replace(/\.(jpeg|jpg|png)$/i, '.webp'))} type="image/webp" />
                            <img
                                src={encodeURI(member.image)}
                                alt={`${member.name}, ${member.title}`}
                                width="64"
                                height="64"
                                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                                onError={() => setImgError(true)}
                            />
                        </picture>
                    ) : (
                        <UserCircle2 className="w-10 h-10 text-slate-300" />
                    )}
                </div>
                <div>
                    <span className="inline-block px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded mb-1.5 bg-primary/10 text-primary">
                        {member.title}
                    </span>
                    <h3 className="text-base font-serif font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                        {member.name}
                    </h3>
                </div>
            </div>

            <div className="space-y-2.5 flex-grow mb-5 text-xs text-slate-600 font-medium">
                {member.designation && (
                    <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="font-bold text-dark leading-snug">{member.designation}</span>
                    </div>
                )}
                {member.department && (
                    <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">Department of {member.department}</span>
                    </div>
                )}
                {member.institution && (
                    <div className="flex items-start gap-2">
                        <Landmark className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-slate-600 leading-snug">{member.institution}</span>
                    </div>
                )}
                <div className="flex items-start gap-2 text-[10px] text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>
                        {member.city && `${member.city}, `}
                        {member.state && `${member.state}, `}
                        {member.country}
                    </span>
                </div>
            </div>

            <div className="pt-4 border-t border-[#E9E5DD]/60 mt-auto flex flex-wrap gap-2 items-center justify-between">
                {member.email ? (
                    <a 
                        href={`mailto:${member.email}`} 
                        onClick={(e) => e.stopPropagation()} 
                        className="text-[10px] text-slate-500 hover:text-primary transition-colors flex items-center gap-1 truncate max-w-[150px] font-sans"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        <span className="truncate">{member.email}</span>
                    </a>
                ) : (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-sans">Verified Registry</span>
                )}
                <span className="text-[9px] font-bold uppercase tracking-wider text-primary group-hover:text-primary-dark transition-colors inline-flex items-center gap-1">
                    Profile <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
            </div>
        </div>
    );
};

const MemberDetailModal = ({ member, onClose }) => {
    if (!member) return null;
    
    return (
        <Modal
            isOpen={!!member}
            onClose={onClose}
            title="Academic Profile"
            size="lg"
        >
            <div className="p-4 space-y-6 bg-[#FFFDF8]">
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left pb-5 border-b border-[#E9E5DD]">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-[#E9E5DD] relative bg-[#F7F4EC] flex items-center justify-center shrink-0">
                        {member.image ? (
                            <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover object-top"
                                onError={(e) => { e.target.src = ''; }}
                            />
                        ) : (
                            <UserCircle2 className="w-10 h-10 text-slate-350" />
                        )}
                    </div>
                    <div className="flex-1 space-y-1.5">
                        <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-wider rounded">
                            {member.title}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-dark leading-tight">
                            {member.name}
                        </h3>
                        <p className="text-xs font-bold text-[#C77D5B]">{member.designation}</p>
                        <p className="text-xs text-slate-500 font-medium">
                            {member.institution} {member.department && `· Dept. of ${member.department}`}
                        </p>
                        <p className="text-[10px] text-slate-400">
                            {member.city && `${member.city}, `}{member.state && `${member.state}, `}{member.country}
                        </p>
                    </div>
                </div>

                {member.biography && (
                    <div className="space-y-1.5">
                        <h4 className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Biography</h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            {member.biography}
                        </p>
                    </div>
                )}

                {member.researchInterests && member.researchInterests.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Research Interests</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {member.researchInterests.map((interest, i) => (
                                <span key={i} className="px-2.5 py-0.5 rounded bg-[#F7F4EC] border border-[#E9E5DD] text-slate-600 text-[10px] font-bold">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="pt-5 border-t border-[#E9E5DD] flex flex-wrap gap-3 items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {member.email && (
                            <a 
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F7F4EC] hover:bg-[#E9E5DD] text-dark text-xs font-bold rounded border border-[#E9E5DD] transition-colors"
                            >
                                <Mail className="w-4 h-4 text-primary" /> Email
                            </a>
                        )}
                        {member.profileUrl && (
                            <a 
                                href={member.profileUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 text-dark text-xs font-bold rounded border border-[#E9E5DD] transition-colors"
                            >
                                <Globe className="w-4 h-4 text-primary" /> Profile <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </div>
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default function AdvisoryBoard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [designationFilter, setDesignationFilter] = useState('all');
    const [stateFilter, setStateFilter] = useState('all');
    const [selectedMember, setSelectedMember] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 200);
        return () => clearTimeout(timer);
    }, [searchQuery, designationFilter, stateFilter]);

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

    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Advisory Board - Sanmati Spectrum of Knowledge",
            "url": "https://sanmatijournal.in/editorial-team/advisory-board",
            "description": "Eminent scholars and visionaries guiding the strategic governance of Sanmati Spectrum Journal."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Editorial Team', url: '/editorial-team/editors' },
            { name: 'Advisory Board', url: '/editorial-team/advisory-board' }
        ]
    };

    return (
        <MainLayout
            title="Advisory Board | Sanmati Spectrum Journal"
            description="Eminent senior scholars, deans, and visionaries guiding the strategic direction and academic integrity of Sanmati Spectrum of Knowledge."
            keywords="advisory board, journal advisors, academic leadership, research governance India, sanmati journal advisors"
            jsonLd={jsonLd}
        >
            
            <PageHeader 
                title="Advisory Board"
                breadcrumb="Leadership"
                subtitle="Cross-disciplinary luminaries ensuring global operational and research excellence."
            />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-[#FFFDF8] text-[#2E2E2E]">
                
                {/* ─── INTRO SECTION ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-12 xl:col-span-7 space-y-6"
                    >
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5" />
                            Advisory Vision
                        </div>
                        <h2 className="text-2xl md:text-4xl font-serif font-medium text-dark leading-tight">
                            Guiding the Path to <br />
                            <span className="text-primary italic">Global Prominence</span>
                        </h2>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed font-sans">
                            Our Advisory Board members provide independent strategic counsel, helping shape the long-term operational excellence, peer-review standards, and reach of our multidisciplinary journal.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Strategic Counsel", text: "Guiding research structures and long-term academic milestones." },
                                { title: "Global Reach", text: "Fostering academic bridges and cross-institutional opportunities." }
                            ].map((feat, i) => (
                                <div key={i} className="flex gap-3.5 p-4 bg-[#F7F4EC] border border-[#E9E5DD] rounded-xl">
                                    <div className="w-8 h-8 rounded bg-white border border-[#E9E5DD] flex items-center justify-center shrink-0 text-primary">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-xs mb-0.5">{feat.title}</h4>
                                        <p className="text-slate-500 text-[10px] leading-relaxed font-medium">{feat.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-12 xl:col-span-5 relative group"
                    >
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E9E5DD] bg-slate-900">
                            <img loading="lazy" src="/images/library-bg.webp" alt="Advisory Board Counsel" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                                <Quote className="w-8 h-8 text-primary mx-auto mb-2 opacity-60" />
                                <p className="text-white text-xs font-serif italic leading-relaxed">
                                    "Excellence is not an act, but a habit cultivated through the guidance of master practitioners."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ─── SEARCH & FILTER TOOLBAR ─── */}
                <div className="bg-[#F7F4EC] border border-[#E9E5DD] rounded-xl p-5 mb-10 space-y-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Live Search */}
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input 
                                type="text"
                                placeholder="Search advisors by name, university..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5DD] rounded-lg text-xs focus:outline-none focus:border-primary transition-all font-medium"
                            />
                        </div>

                        {/* Multi-Filters */}
                        <div className="flex flex-wrap w-full lg:w-auto gap-2.5 items-center justify-end">
                            <div className="flex items-center gap-1 text-slate-400">
                                <Filter className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Filters:</span>
                            </div>

                            {/* Designation */}
                            <select
                                value={designationFilter}
                                onChange={(e) => setDesignationFilter(e.target.value)}
                                className="px-2.5 py-2 bg-white border border-[#E9E5DD] rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:border-primary cursor-pointer w-full sm:w-[150px]"
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
                                className="px-2.5 py-2 bg-white border border-[#E9E5DD] rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:border-primary cursor-pointer w-full sm:w-[150px]"
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
                                    className="p-2 bg-white hover:bg-slate-50 text-slate-600 rounded-lg border border-[#E9E5DD] transition-colors font-bold flex items-center justify-center gap-1 text-xs w-full sm:w-auto"
                                >
                                    <RefreshCw className="w-3 h-3" /> Reset
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* ─── THE REGISTRY GRID ─── */}
                <div className="relative">
                    <div className="flex flex-col items-center text-center mb-8">
                        <span className="text-primary font-bold text-[9px] uppercase tracking-wider mb-2">Member Directory</span>
                        <h2 className="text-xl font-serif font-bold text-dark">Advisory Registry</h2>
                        <div className="h-0.5 w-8 bg-primary rounded-full mt-2" />
                    </div>

                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.div 
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {filteredMembers.map((m) => (
                                    <AdvisoryMemberCard 
                                        key={m.name} 
                                        member={m} 
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
                                className="text-center py-16 bg-white rounded-xl border border-dashed border-[#E9E5DD] p-6"
                            >
                                <Search className="w-10 h-10 text-slate-300 mx-auto mb-3 animate-pulse" />
                                <h3 className="text-sm font-bold text-dark font-serif">No Advisors Found</h3>
                                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed font-medium">
                                    No advisors matched your filter selections. Try resetting the options.
                                </p>
                                <button
                                    onClick={resetFilters}
                                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors"
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
