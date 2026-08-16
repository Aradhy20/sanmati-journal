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

const BOARD_MEMBERS = [
    {
        name: "Prof. Pralhad Joshi",
        title: "Chief Board Member",
        designation: "Vice-Chancellor",
        department: "Sanskrit & Ancient Studies",
        institution: "Kumar Bhaskar Varma Sanskrit and Ancient Studies University",
        city: "Nalbari",
        state: "Assam",
        country: "India",
        image: "/images/team/Prof. Prahlad joshi.webp",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Ancient Indian Studies", "Sanskrit Literature", "Educational Leadership"],
        biography: "Prof. Pralhad Joshi is an eminent academic leader serving as the Vice-Chancellor of Kumar Bhaskar Varma Sanskrit and Ancient Studies University, Nalbari, Assam. He has over three decades of research and administrative experience."
    },
    {
        name: "Dr. Kalpna Jain",
        title: "Editorial Board Member",
        designation: "Senior Researcher",
        department: "Emerging Discourse",
        institution: "Sanmati Spectrum of Knowledge Research Foundation",
        city: "Moradabad",
        state: "Uttar Pradesh",
        country: "India",
        image: "/images/team/dr-kalpana-jain.jpeg",
        email: "Kalpnajain69@gmail.com",
        phone: "",
        profileUrl: "https://www.researchgate.net/profile/Dr-Jain-23",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "https://www.researchgate.net/profile/Dr-Jain-23",
        website: "",
        researchInterests: ["Multidisciplinary Research", "Social Values", "Traditional Wisdom"],
        biography: "Dr. Kalpna Jain is an active reviewer and researcher focusing on synthesis of traditional knowledge systems with modern academic discourse."
    },
    {
        name: "Dr. Smriti Kumari Singh",
        title: "Editorial Board Member",
        designation: "Assistant Professor",
        department: "Hindi",
        institution: "Sophia College for Women (Empowered Autonomous)",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        image: "/images/team/Dr_Smriti_kumari.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Hindi Literature", "Gender Studies", "Folk Culture"],
        biography: "Dr. Smriti Kumari Singh serves as an Assistant Professor in the Department of Hindi at Sophia College for Women, Mumbai. Her research work covers contemporary women novelists and regional cultural studies."
    },
    {
        name: "Dr. Amita Kumari",
        title: "Editorial Board Member",
        designation: "Assistant Professor",
        department: "Education",
        institution: "Vinoba Bhave University",
        city: "Hazaribagh",
        state: "Jharkhand",
        country: "India",
        image: "/images/team/Amita kumari.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Teacher Education", "Pedagogical Innovations", "Inclusive Learning"],
        biography: "Dr. Amita Kumari is an Assistant Professor in the University Department of Education at Vinoba Bhave University, focusing on transforming primary and higher education pedagogy."
    },
    {
        name: "Dr. Parikshit Layek",
        title: "Editorial Board Member",
        designation: "Vice Principal",
        department: "Teacher Training",
        institution: "Shri Ramakrishna Sarada Ashrama Teacher's Training College",
        city: "Hazaribagh",
        state: "Jharkhand",
        country: "India",
        image: "/images/team/Parikshit Layek.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Educational Psychology", "Value-based Education", "Curriculum Design"],
        biography: "Dr. Parikshit Layek serves as the Vice Principal of Shri Ramakrishna Sarada Ashrama T.T. College. He has authored several papers on student mentorship and social-emotional learning."
    },
    {
        name: "Dr. Vaishali Ranjit Vichare",
        title: "Editorial Board Member",
        designation: "Associate Professor",
        department: "Homeopathic Medicine",
        institution: "Dr. GD Pol Foundation, YMT Homeopathic Medical College & PG Centre",
        city: "Kharghar, Navi Mumbai",
        state: "Maharashtra",
        country: "India",
        image: "/images/team/Vaishali Ranjeet vichare.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Alternative Medicine", "Homeopathic Research", "Clinical Repertory"],
        biography: "Dr. Vaishali Ranjit Vichare is an Associate Professor at YMT Homeopathic Medical College & PG Centre, Navi Mumbai, with over 15 years of clinical teaching and research experience."
    },
    {
        name: "Dr. A. Shashank. Rao",
        title: "Editorial Board Member",
        designation: "Assistant Professor",
        department: "Political Science",
        institution: "Naveen Govt. College Nagpura",
        city: "Durg",
        state: "Chhattisgarh",
        country: "India",
        image: "/images/team/Dr_Shashank_Rao.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Public Administration", "State Politics", "Socio-Economic Development"],
        biography: "Dr. A. Shashank Rao is an Assistant Professor at Naveen Govt. College Nagpura, Durg, specializing in contemporary Indian politics and rural administrative frameworks."
    },
    {
        name: "Dr. Deepika Atreya",
        title: "Editorial Board Member",
        designation: "In-Charge Principal",
        department: "Girls Higher Education",
        institution: "Chandrawati Tiwari Girls P.G. College",
        city: "Kashipur, Udham Singh Nagar",
        state: "Uttarakhand",
        country: "India",
        image: "/images/team/Dr. Deepika Atreya.jpeg",
        email: "",
        phone: "",
        profileUrl: "",
        orcid: "",
        googleScholar: "",
        linkedin: "",
        researchGate: "",
        website: "",
        researchInterests: ["Women Empowerment", "Higher Education Policies", "Institutional Management"],
        biography: "Dr. Deepika Atreya is the In-Charge Principal of Chandrawati Tiwari Girls P.G. College, Kashipur. She is a dedicated academic administrator advocating for women's higher education."
    }
];

const SkeletonCard = () => (
    <div className="bg-white rounded-xl border border-[#E9E5DD] p-6 animate-pulse">
        <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-full bg-slate-100 shrink-0" />
            <div className="space-y-2 flex-1">
                <div className="h-3 bg-slate-100 rounded w-16" />
                <div className="h-4 bg-slate-100 rounded w-3/4" />
            </div>
        </div>
        <div className="space-y-3 mb-5">
            <div className="h-3 bg-slate-100 rounded w-5/6" />
            <div className="h-3 bg-slate-100 rounded w-2/3" />
        </div>
        <div className="h-8 bg-slate-100 rounded w-full" />
    </div>
);

const BoardMemberCard = ({ member, onSelect }) => {
    const [imgError, setImgError] = useState(false);
    
    let badgeClass = "bg-primary/10 text-primary";
    if (member.title === "Chief Board Member") {
        badgeClass = "bg-[#C77D5B]/15 text-[#C77D5B]";
    }

    return (
        <motion.div 
            variants={fadeInUp}
            onClick={() => onSelect(member)}
            className="bg-white rounded-xl border border-[#E9E5DD] p-6 flex flex-col hover:border-primary hover:shadow-card transition-all duration-200 group cursor-pointer h-full relative focus-within:ring-2 focus-within:ring-primary focus-within:outline-none"
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
            <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border border-[#E9E5DD] relative bg-[#F7F4EC] flex items-center justify-center">
                    {member.image && !imgError ? (
                        <picture>
                            <source srcSet={member.image.replace(/\.(jpeg|jpg|png)$/i, '.webp')} type="image/webp" />
                            <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                                onError={() => setImgError(true)}
                            />
                        </picture>
                    ) : (
                        <UserCircle2 className="w-10 h-10 text-slate-300" />
                    )}
                </div>
                <div>
                    <span className={`inline-block px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded mb-1.5 ${badgeClass}`}>
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
        </motion.div>
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
                        <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                            onError={(e) => { e.target.src = ''; }}
                        />
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

export default function EditorialBoard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [designationFilter, setDesignationFilter] = useState('all');
    const [departmentFilter, setDepartmentFilter] = useState('all');
    const [stateFilter, setStateFilter] = useState('all');
    const [selectedMember, setSelectedMember] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 200);
        return () => clearTimeout(timer);
    }, [searchQuery, designationFilter, departmentFilter, stateFilter]);

    const filterOptions = useMemo(() => {
        const designations = new Set();
        const departments = new Set();
        const states = new Set();
        
        BOARD_MEMBERS.forEach(m => {
            if (m.designation) designations.add(m.designation);
            if (m.department) departments.add(m.department);
            if (m.state) states.add(m.state);
        });

        return {
            designations: Array.from(designations).sort(),
            departments: Array.from(departments).sort(),
            states: Array.from(states).sort()
        };
    }, []);

    const filteredMembers = useMemo(() => {
        return BOARD_MEMBERS.filter(m => {
            const matchesSearch = searchQuery === '' || 
                m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                m.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (m.biography && m.biography.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesDesignation = designationFilter === 'all' || m.designation === designationFilter;
            const matchesDepartment = departmentFilter === 'all' || m.department === departmentFilter;
            const matchesState = stateFilter === 'all' || m.state === stateFilter;

            return matchesSearch && matchesDesignation && matchesDepartment && matchesState;
        });
    }, [searchQuery, designationFilter, departmentFilter, stateFilter]);

    const hasActiveFilters = searchQuery !== '' || designationFilter !== 'all' || departmentFilter !== 'all' || stateFilter !== 'all';

    const resetFilters = () => {
        setSearchQuery('');
        setDesignationFilter('all');
        setDepartmentFilter('all');
        setStateFilter('all');
    };

    const boardJsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Editorial Board & Peer Reviewers - Sanmati Spectrum of Knowledge",
            "url": "https://sanmatijournal.in/editorial-team/editorial-board",
            "description": "Distinguished academic leaders, professors, and peer reviewers ensuring rigorous double-blind peer review for Sanmati Spectrum Journal."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Editorial Team', url: '/editorial-team/editors' },
            { name: 'Editorial Board', url: '/editorial-team/editorial-board' }
        ]
    };

    return (
        <MainLayout
            title="Editorial Board & Peer Reviewers | UGC Care Aligned Journal"
            description="Meet the international Editorial Board of Sanmati Spectrum — a peer reviewed multidisciplinary ISSN journal (ISSN 3108-1819) committed to quality research publishing in India."
            keywords="UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal, Editorial Board"
            jsonLd={boardJsonLd}
        >
            
            <PageHeader 
                title="Editorial Board & Peer Review Directorate"
                breadcrumb="Leadership"
                subtitle="UGC Care Aligned & Peer Reviewed Multidisciplinary Journal Reviewers"
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
                            Governance
                        </div>
                        <h2 className="text-2xl md:text-4xl font-serif font-medium text-dark leading-tight">
                            The Vanguard of <span className="text-primary italic">Academic Rigor</span>
                        </h2>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            Our editorial governance framework is built on absolute transparency, double-blind peer-review integrity, and multidisciplinary scientific excellence.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Intellectual Integrity", text: "Upholding double-blind peer-review objectivity." },
                                { title: "Global Scope", text: "Bridging diverse academic disciplines and research nodes." }
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
                            <img loading="lazy" src="/images/library-bg.webp" alt="Editorial Board Assembly" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                                <Quote className="w-8 h-8 text-primary mx-auto mb-2 opacity-60" />
                                <p className="text-white text-xs font-serif italic leading-relaxed">
                                    "Scholarly research is most transformative when guided by the collective governance of rigorous academic leaders."
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
                                placeholder="Search board members by name, university..."
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

                            {/* Department */}
                            <select
                                value={departmentFilter}
                                onChange={(e) => setDepartmentFilter(e.target.value)}
                                className="px-2.5 py-2 bg-white border border-[#E9E5DD] rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:border-primary cursor-pointer w-full sm:w-[150px]"
                            >
                                <option value="all">Departments (All)</option>
                                {filterOptions.departments.map((d, i) => (
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
                        <h2 className="text-xl font-serif font-bold text-dark">Board Registry</h2>
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
                                    <BoardMemberCard 
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
                                <h3 className="text-sm font-bold text-dark font-serif">No Board Members Found</h3>
                                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed font-medium">
                                    No board members matched your filter selections. Try resetting the options.
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
