import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import PageHeader from '../Components/PageHeader';
import { motion } from 'framer-motion';
import {
    CheckCircle2, Shield, Eye, Target, Award,
    Phone, Mail, MapPin,
    Users, Landmark, Building2, BadgeCheck
} from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function AboutFoundation() {
    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Sanmati Education & Research Foundation of India",
            "alternateName": "Sanmati Education and Research Foundation of India",
            "url": "https://sanmatijournal.in/about-foundation",
            "slogan": "Together for Education, Research & a Better Society.",
            "description": "Sanmati Education & Research Foundation of India promotes education, research and knowledge dissemination through academic and research initiatives.",
            "email": "foundationsanmati@gmail.com",
            "telephone": ["+91-9870713912", "+91-7999525735"],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "B-002, Faculty Block, TMU Campus, Teerthanker Mahaveer University",
                "addressLocality": "Moradabad",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "244001",
                "addressCountry": "IN"
            },
            "founder": [
                {
                    "@type": "Person",
                    "name": "Dr. Namrata Jain",
                    "jobTitle": "Founder & President"
                },
                {
                    "@type": "Person",
                    "name": "Dr. Ratnesh Jain",
                    "jobTitle": "Co-Founder & Secretary"
                }
            ],
            "identifier": [
                {
                    "@type": "PropertyValue",
                    "name": "Registration No.",
                    "value": "IV-203/26"
                },
                {
                    "@type": "PropertyValue",
                    "name": "DARPAN ID",
                    "value": "UP/2026/1109073"
                },
                {
                    "@type": "PropertyValue",
                    "name": "UDYAM Registration",
                    "value": "UP-59-0112825"
                }
            ]
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'About Foundation', url: '/about-foundation' }
        ]
    };

    const statutoryDetails = [
        {
            title: "Foundation Registration",
            value: "Registration No. — IV-203/26",
            subtext: "Registered under Indian Trust / Societies Act",
            icon: Landmark,
            tag: "Official Registration"
        },
        {
            title: "Quality Certification",
            value: "ISO Certified",
            subtext: "Registration No. — IV-203/26",
            icon: BadgeCheck,
            tag: "Quality Standard"
        },
        {
            title: "NITI Aayog / NGO DARPAN",
            value: "DARPAN ID — UP/2026/1109073",
            subtext: "Government of India NGO Portal",
            icon: Building2,
            tag: "National Recognition"
        },
        {
            title: "MSME / UDYAM Registration",
            value: "UDYAM — UP-59-0112825",
            subtext: "Ministry of MSME, Govt. of India",
            icon: Award,
            tag: "Statutory License"
        }
    ];

    const leadership = [
        {
            name: "Dr. Namrata Jain",
            role: "Founder & President",
            org: "Sanmati Education and Research Foundation of India",
            email: "foundationsanmati@gmail.com",
            phone: "+91 9870713912",
            image: "/images/team/mam.jpeg",
            desc: "Eminent academician, author, and researcher with 17+ years of experience leading educational, research, and social welfare initiatives across India."
        },
        {
            name: "Dr. Ratnesh Jain",
            role: "Co-Founder & Secretary",
            org: "Sanmati Education and Research Foundation of India",
            email: "foundationsanmati@gmail.com",
            phone: "+91 7999525735",
            image: "/images/team/sir.jpeg",
            desc: "Accomplished educationist, author, and researcher with 20+ years of expertise in higher education administration, youth empowerment, and research coordination."
        }
    ];

    const objectives = [
        "To promote quality education, research, and publication activities.",
        "To publish and distribute books, journals, magazines, newsletters, and research papers.",
        "To organize seminars, workshops, conferences, award ceremonies, and awareness campaigns.",
        "To establish, manage, and support schools, colleges, libraries, and other new educational institutions.",
        "To promote education, vocational training, and skill development for underprivileged and economically weaker sections of society.",
        "To support inclusive and special education initiatives for differently abled children and individuals.",
        "To organize educational, health, and social awareness programs for public welfare.",
        "To confer awards and honors upon outstanding educators, researchers, social workers, and talented individuals for their contributions to society.",
        "To promote women empowerment, human rights, social justice, equality, and an inclusive society free from discrimination.",
        "To encourage activities related to environmental protection, renewable energy, animal welfare, and overall social development."
    ];

    return (
        <MainLayout
            title="Sanmati Education & Research Foundation of India | Sanmati Journal"
            description="Sanmati Education & Research Foundation of India promotes education, research and knowledge dissemination through academic and research initiatives."
            keywords="Sanmati Education and Research Foundation of India, sanmati foundation, education research foundation, DARPAN UP/2026/1109073, UDYAM UP-59-0112825, ISO certified foundation, academic publisher India"
            jsonLd={jsonLd}
        >
            <PageHeader
                title="Sanmati Education & Research Foundation of India"
                breadcrumb="About Foundation"
                subtitle="Together for Education, Research & a Better Society."
            />

            <div className="bg-[#FFFDF8] py-12 lg:py-16 text-[#2E2E2E]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

                    {/* ─── STATUTORY RECOGNITION & CREDENTIALS ─── */}
                    <div>
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                                <Shield className="w-3.5 h-3.5" /> Official Registrations & Accreditations
                            </span>
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark">
                                Statutory Identity & Government Recognitions
                            </h2>
                            <p className="text-xs text-slate-500 font-medium mt-1">
                                Authoritative registrations and national accreditations of Sanmati Education & Research Foundation of India.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {statutoryDetails.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        {...fadeInUp}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-white border border-[#E9E5DD] rounded-xl p-5 hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between"
                                    >
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="w-9 h-9 rounded-lg bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary">
                                                    <Icon className="w-4.5 h-4.5" />
                                                </div>
                                                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">
                                                    {item.tag}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm font-serif font-bold text-dark leading-snug">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pt-3 mt-3 border-t border-[#E9E5DD]/60 text-[11px] text-slate-500 font-medium">
                                            {item.subtext}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ─── FOUNDATION NAME & MEANING ─── */}
                    <motion.div
                        {...fadeInUp}
                        className="bg-white border border-[#E9E5DD] rounded-2xl p-6 sm:p-10 shadow-xs max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded">
                                Foundation Ideology
                            </span>
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark mt-2 mb-1">
                                Sanmati Education & Research Foundation of India
                            </h2>
                            <p className="text-xs font-bold text-secondary italic">
                                "Together for Education, Research & a Better Society."
                            </p>
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed space-y-3 font-medium border-t border-[#E9E5DD]/60 pt-6">
                            <p>
                                The name reflects the objectives and core ideology of the organization. The word <strong className="text-primary font-bold">"Sanmati"</strong> means wisdom, positive thinking, and right guidance, symbolizing education, knowledge, and moral values.
                            </p>
                            <p>
                                The terms <strong className="text-primary font-bold">"Education & Research"</strong> represent the foundation's commitment towards education, research, innovation, book publication, and knowledge development. The word <strong className="text-primary font-bold">"Foundation"</strong> highlights its social and welfare-oriented identity, while <strong className="text-primary font-bold">"of India"</strong> signifies the organization's dedication to serving society, education, and human development at the national level.
                            </p>
                        </div>
                    </motion.div>

                    {/* ─── ABOUT US NARRATIVE ─── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E9E5DD] relative bg-[#F7F4EC] shadow-sm">
                                <img src="/images/saraswati.jpeg" alt="Sanmati Foundation Activities" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-[10px] font-bold uppercase tracking-wider">
                                <Shield className="w-3.5 h-3.5" /> About Us
                            </div>
                            <h3 className="text-lg sm:text-xl font-serif font-bold text-dark">
                                Promoting Holistic Social Development
                            </h3>
                            <div className="text-xs text-slate-600 leading-relaxed font-medium space-y-3">
                                <p>
                                    Sanmati Education & Research Foundation of India is a social, educational, and research-oriented organization dedicated to promoting holistic social development through education, research, innovation, and welfare activities. The foundation works towards spreading knowledge and awareness by organizing quality educational programs, book publications, research activities, seminars, workshops, conferences, and skill development initiatives.
                                </p>
                                <p>
                                    The foundation is especially committed to the upliftment of underprivileged communities, women, children, senior citizens, and differently abled individuals. It actively promotes human rights, women empowerment, equality, inclusive growth, and sustainable community development.
                                </p>
                                <p>
                                    We also recognize and honor outstanding educators, researchers, social workers, and talented individuals for their remarkable contributions to society. Through continuous efforts in research, innovation, vocational training, and community welfare programs, the foundation aims to build an educated, empowered, self-reliant, and socially responsible nation.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* ─── VISION & MISSION ─── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <motion.div
                            {...fadeInUp}
                            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E9E5DD] shadow-xs space-y-3"
                        >
                            <div className="w-10 h-10 bg-[#F7F4EC] border border-[#E9E5DD] rounded-xl flex items-center justify-center text-primary">
                                <Eye className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-serif font-bold text-dark">Our Vision</h3>
                            <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                To build an educated, empowered, inclusive, and self-reliant society through education, research, book publication, seminars, workshops, innovation, and social welfare.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E9E5DD] shadow-xs space-y-3"
                        >
                            <div className="w-10 h-10 bg-[#F7F4EC] border border-[#E9E5DD] rounded-xl flex items-center justify-center text-secondary">
                                <Target className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-serif font-bold text-dark">Our Mission</h3>
                            <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                To promote education, research, book publication, seminars, workshops, and skill development activities for the social, educational, and cultural upliftment of underprivileged communities, women, children, and differently abled individuals, while encouraging innovation, environmental protection, human rights, equality, cultural values, and sustainable community development.
                            </p>
                        </motion.div>
                    </div>

                    {/* ─── OBJECTIVE & SCOPE ─── */}
                    <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
                        <div className="text-center mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                                <Target className="w-3.5 h-3.5" /> Scope of Activities
                            </span>
                            <h3 className="text-xl font-serif font-bold text-dark">Objectives & Key Focus Areas</h3>
                            <p className="text-xs text-slate-500 font-medium mt-1">Strategic mandates guiding the foundation’s educational and welfare missions.</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-[#E9E5DD] p-6 md:p-8 shadow-xs">
                            <ul className="space-y-3.5">
                                {objectives.map((obj, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.02 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary mt-0.5">
                                            <CheckCircle2 className="w-3 h-3" />
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-medium">{obj}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* ─── FOUNDATION LEADERSHIP ─── */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                                <Users className="w-3.5 h-3.5" /> Organizational Governance
                            </span>
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-dark">Foundation Leadership</h3>
                            <p className="text-xs text-slate-500 font-medium mt-1">Guiding visionary leadership of Sanmati Education and Research Foundation of India.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {leadership.map((leader, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeInUp}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-white border border-[#E9E5DD] rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#E9E5DD] bg-slate-100 flex-shrink-0 shadow-xs">
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-full h-full object-cover object-top"
                                                onError={(e) => { e.target.onerror = null; e.target.src = "/images/contact/dr_namrta_jain_avatar.png"; }}
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-base font-serif font-bold text-dark leading-snug">
                                                {leader.name}
                                            </h4>
                                            <p className="text-xs font-bold text-primary">
                                                {leader.role}
                                            </p>
                                            <p className="text-[11px] text-slate-400 font-medium">
                                                {leader.org}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                        {leader.desc}
                                    </p>

                                    <div className="pt-3 border-t border-[#E9E5DD]/60 flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                                        <a href={`tel:${leader.phone.replace(/[\s-]/g, '')}`} className="inline-flex items-center gap-1 text-slate-600 hover:text-primary transition-colors">
                                            <Phone className="w-3.5 h-3.5 text-primary" /> {leader.phone}
                                        </a>
                                        <a href={`mailto:${leader.email}`} className="inline-flex items-center gap-1 text-slate-600 hover:text-primary transition-colors">
                                            <Mail className="w-3.5 h-3.5 text-primary" /> {leader.email}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ─── OFFICIAL FOUNDATION CONTACT & HEADQUARTERS ─── */}
                    <motion.div
                        {...fadeInUp}
                        className="bg-white border border-[#E9E5DD] rounded-2xl p-6 sm:p-10 shadow-xs max-w-4xl mx-auto space-y-6"
                    >
                        <div className="border-b border-[#E9E5DD]/70 pb-4">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded">
                                Official Secretariat
                            </span>
                            <h3 className="text-xl font-serif font-bold text-dark mt-2">
                                Foundation Office & Contact Information
                            </h3>
                            <p className="text-xs text-slate-500 font-medium mt-1">
                                For foundation partnerships, CSR initiatives, academic collaborations, awards, and trust governance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dark">
                                    <MapPin className="w-4 h-4 text-primary" /> Registered Address
                                </div>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                    B-002, Faculty Block,<br />
                                    TMU Campus,<br />
                                    Teerthanker Mahaveer University,<br />
                                    Moradabad, UP, India
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dark">
                                    <Phone className="w-4 h-4 text-primary" /> Official Helpline Numbers
                                </div>
                                <div className="space-y-1 text-xs font-medium text-slate-600">
                                    <div>
                                        <a href="tel:+919870713912" className="text-dark font-bold hover:text-primary transition-colors">
                                            +91 9870713912
                                        </a>
                                        <span className="text-[10px] text-slate-400 block">(President Office)</span>
                                    </div>
                                    <div>
                                        <a href="tel:+917999525735" className="text-dark font-bold hover:text-primary transition-colors">
                                            +91 7999525735
                                        </a>
                                        <span className="text-[10px] text-slate-400 block">(Secretary Office)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dark">
                                    <Mail className="w-4 h-4 text-primary" /> Official Email & Web
                                </div>
                                <div className="space-y-1.5 text-xs font-medium">
                                    <div>
                                        <span className="text-[10px] text-slate-400 block">Foundation Email:</span>
                                        <a href="mailto:foundationsanmati@gmail.com" className="text-primary font-bold hover:underline">
                                            foundationsanmati@gmail.com
                                        </a>
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-slate-400 block">Website:</span>
                                        <a href="https://sanmatijournal.in" className="text-primary font-bold hover:underline">
                                            https://sanmatijournal.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Note on Journal distinction */}
                        <div className="bg-[#F7F4EC]/60 border border-[#E9E5DD] rounded-xl p-4 text-[11px] text-slate-600 font-medium leading-relaxed">
                            <strong className="text-dark font-bold">Academic Journal Publication: </strong>
                            Sanmati Education & Research Foundation of India is the patron and publisher of <em>Sanmati Spectrum of Knowledge & Emerging Discourse</em> (ISSN 3108-1819). For journal submission, editorial queries, or manuscript tracking, please contact the editorial desk at <a href="mailto:sanmatijournal@gmail.com" className="text-primary font-bold hover:underline">sanmatijournal@gmail.com</a>.
                        </div>
                    </motion.div>

                </div>
            </div>
        </MainLayout>
    );
}
