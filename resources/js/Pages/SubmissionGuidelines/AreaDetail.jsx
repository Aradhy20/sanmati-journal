import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { ScrollReveal, revealVariants } from '../../Components/ScrollReveal';
import { GridPattern, DotPattern } from '../../Components/Graphics';
import Seo from '../../Components/Seo';
import {
    Palette, Microscope, Newspaper, Cpu, BookOpen,
    Briefcase, Scale, HeartPulse, Leaf, Globe,
    CheckCircle2, ArrowRight, FileText, Share2
} from 'lucide-react';

const areasData = {
    "arts-humanities": {
        title: "Arts & Humanities",
        icon: Palette,
        color: "rose",
        heroImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=2071",
        desc: "Exploring human expression, cultural heritage, and creative thought across civilizations.",
        scope: "This section welcomes scholarly contributions that explore the human condition through critical, historical, and creative lenses. We encourage interdisciplinary research connecting literature, philosophy, and history with contemporary societal issues.",
        topics: [
            "Literature & Comparative Studies", "Philosophy, Ethics & Religion", "History & Archaeology",
            "Visual & Performing Arts", "Cultural & Media Studies", "Linguistics & Translation",
            "Digital Humanities", "Gender & Sexuality Studies"
        ]
    },
    "science-technology": {
        title: "Science & Technology",
        icon: Cpu,
        color: "blue",
        heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2070",
        desc: "Advancing the frontiers of innovation through rigorous scientific inquiry and technological development.",
        scope: "We publish cutting-edge research in fundamental and applied sciences. The focus is on transformative technologies and scientific discoveries that address global challenges in engineering, computing, and natural sciences.",
        topics: [
            "Computer Science & AI", "Engineering (Civil, Mech, Elec)", "Biotechnology & Bioinformatics",
            "Nanotechnology & Materials", "Physics & Chemistry", "Mathematics & Statistics",
            "Cybersecurity & Blockchain", "Renewable Energy Tech"
        ]
    },
    "social-sciences": {
        title: "Social Sciences",
        icon: Globe,
        color: "amber",
        heroImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2069",
        desc: "Analyzing social structures, human behavior, and policy to foster equitable societies.",
        scope: "Dedicated to the study of human society and social relationships. We seek empirical and theoretical papers on public policy, governance, sociology, and psychology that inform betterment of social welfare.",
        topics: [
            "Sociology & Social Anthropology", "Political Science & Governance", "Psychology & Behavioral Science",
            "Economics & Development", "Human Geography", "Social Work & Welfare",
            "International Relations", "Public Administration"
        ]
    },
    "management-commerce": {
        title: "Management & Commerce",
        icon: Briefcase,
        color: "emerald",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
        desc: "Shaping the future of business through strategic insights, financial acumen, and leadership.",
        scope: "Publishing high-quality research on organizational behavior, financial markets, and business strategy. We value studies that bridge the gap between management theory and corporate practice.",
        topics: [
            "Strategic Management", "Marketing & Consumer Behavior", "Finance, Accounting & Banking",
            "Human Resource Managment", "Entrepreneurship & Innovation", "Supply Chain & Operations",
            "Corporate Social Responsibility", "Digital Business Transformation"
        ]
    },
    "law-governance": {
        title: "Law & Governance",
        icon: Scale,
        color: "slate",
        heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2012",
        desc: "Examining the scales of justice, constitutional frameworks, and legal evolution.",
        scope: "A forum for critical analysis of legal systems, rights, and regulatory frameworks. We invite articles on constitutional law, criminal justice, and international law that contribute to legal reform.",
        topics: [
            "Constitutional & Administrative Law", "Criminal Law & Criminology", "International & Human Rights Law",
            "Corporate & Commercial Law", "Intellectual Property Rights", "Environmental Law",
            "Cyber Law & Digital Rights", "Alternative Dispute Resolution"
        ]
    },
    "health-medicine": {
        title: "Health & Medicine",
        icon: HeartPulse,
        color: "red",
        heroImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=2089",
        desc: "Promoting global well-being through medical research, public health, and clinical breakthroughs.",
        scope: "Addressing critical issues in healthcare, from clinical medicine to public health policy. We encourage research that improves patient outcomes, healthcare delivery, and disease prevention.",
        topics: [
            "Public Health & Epidemiology", "Clinical Medicine & Surgery", "Nursing & Patient Care",
            "Pharmacology & Drug Discovery", "Mental Health & Psychiatry", "Nutrition & Dietetics",
            "Health Policy & Management", "Integrative Medicine"
        ]
    },
    "education": {
        title: "Education",
        icon: BookOpen,
        color: "violet",
        heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2022",
        desc: "Transforming pedagogy, curriculum, and learning systems for the next generation.",
        scope: "Focused on the theory and practice of education. We seek innovation in teaching methodologies, educational psychology, educational technology, and policy analysis.",
        topics: [
            "Pedagogy & Curriculum Development", "Educational Psychology", "Higher Education Policy",
            "Educational Technology (EdTech)", "Special & Inclusive Education", "Teacher Education",
            "Assessment & Evaluation", "Early Childhood Education"
        ]
    },
    "environment-sustainability": {
        title: "Environment & Sustainability",
        icon: Leaf,
        color: "green",
        heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2174",
        desc: "Researching solutions for a greener planet, biodiversity, and sustainable development.",
        scope: "Interdisciplinary research on environmental conservation, climate change, and sustainable development. We welcome papers that propose scientific and policy solutions for ecological preservation.",
        topics: [
            "Climate Change & Mitigation", "Biodiversity & Conservation", "Sustainable Development Goals",
            "Environmental Pollution & Control", "Green Energy & Technologies", "Urban Ecology",
            "Waste Management", "Environmental Ethics"
        ]
    },
    "journalism-media": {
        title: "Journalism & Mass Media",
        icon: Newspaper,
        color: "fuchsia",
        heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2070",
        desc: "Investigating the power of media, communication effects, and digital journalism.",
        scope: "Exploring the role of media in society. Research areas include digital journalism, media ethics, communication theory, and the impact of social media on public discourse.",
        topics: [
            "Digital Journalism & New Media", "Media Ethics & Law", "Political Communication",
            "Advertising & Public Relations", "Film & Cinema Studies", "Broadcast Journalism",
            "Media Psychology", "Crisis Communication"
        ]
    },
    "indian-knowledge-systems": {
        title: "Indian Knowledge Systems",
        icon: Microscope, // Using Microscope as a placeholder for deep study
        color: "orange",
        heroImage: "https://images.unsplash.com/photo-1605218427306-635ba243971c?auto=format&fit=crop&q=80&w=2069",
        desc: "Reviving and applying ancient Indian wisdom in contemporary scientific and social contexts.",
        scope: "Dedicated to the scientific exploration of traditional Indian knowledge. We invite research on Ayurveda, Yoga, Vedic mathematics, Indian philosophy, and their relevance to modern challenges.",
        topics: [
            "Ayurveda & Traditional Medicine", "Yoga & Consciousness Studies", "Vedic Mathematics & Astronomy",
            "Indian Philosophy (Darshanas)", "Ancient Indian Architecture (Vastu)", "Sanskrit Heritage",
            "Arthashastra & Governance", "Sustainable Traditional Practices"
        ]
    }
};

export default function AreaDetail({ slug }) {
    const area = areasData[slug];

    // Fallback if slug not found
    if (!area) {
        return (
            <MainLayout>
                <PageHeader title="Area Not Found" breadcrumb="Submission Guidelines" />
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-slate-800">Topic not found</h2>
                    <Link href="/submission-guidelines/areas" className="text-blue-600 hover:underline mt-4 block">
                        Back to Areas
                    </Link>
                </div>
            </MainLayout>
        );
    }

    const Icon = area.icon;

    return (
        <MainLayout>
            <Seo
                title={area.title}
                description={area.desc}
                keywords={area.topics.join(', ')}
            />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={area.heroImage} alt={area.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t from-${area.color}-900/95 via-${area.color}-900/70 to-black/30`} />
                    <GridPattern className="absolute top-0 right-0 text-white/10 w-full h-full opacity-30" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <ScrollReveal>
                        <Link href="/submission-guidelines/areas" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors">
                            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to All Areas
                        </Link>
                        <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 text-sm font-bold uppercase tracking-wider mb-6`}>
                            <Icon className="w-4 h-4" /> {area.title}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
                            {area.desc}
                        </h1>
                    </ScrollReveal>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Left: Scope & checklist */}
                        <div className="lg:col-span-2 space-y-12">
                            <ScrollReveal variants={revealVariants.fadeUp}>
                                <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <Microscope className={`text-${area.color}-600`} /> Scope of Research
                                    </h2>
                                    <p className="text-lg text-slate-600 leading-loose">
                                        {area.scope}
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal variants={revealVariants.fadeUp} delay={0.2}>
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 mt-4">Key Research Topics</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {area.topics.map((topic, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 transition-colors shadow-sm group">
                                            <div className={`mt-1 p-2 rounded-lg bg-${area.color}-50 text-${area.color}-600 group-hover:bg-${area.color}-600 group-hover:text-white transition-colors`}>
                                                <div className="w-2 h-2 rounded-full bg-current" />
                                            </div>
                                            <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                                                {topic}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right: Sticky Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Submission CTA */}
                                <ScrollReveal variants={revealVariants.left} delay={0.3}>
                                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative group">
                                        <div className={`absolute inset-0 bg-gradient-to-br from-${area.color}-600 to-${area.color}-800 opacity-90 transition-opacity group-hover:opacity-100`} />
                                        <div className="relative z-10 text-white">
                                            <FileText className="w-10 h-10 mb-4 opacity-80" />
                                            <h3 className="text-xl font-bold mb-2">Ready to Submit?</h3>
                                            <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                                Ensure your manuscript aligns with the topics listed. We review submissions on a rolling basis.
                                            </p>
                                            <Link href="/contact" className="block w-full py-3.5 bg-white text-slate-900 rounded-xl font-bold text-center hover:bg-slate-50 transition-colors">
                                                Submit Paper Now
                                            </Link>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Guidelines Summary */}
                                <ScrollReveal variants={revealVariants.left} delay={0.4}>
                                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                                        <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="text-green-500 w-5 h-5" /> Submission Requirements
                                        </h4>
                                        <ul className="space-y-3 text-sm text-slate-600">
                                            <li className="flex gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2" />
                                                APA 7th Edition Citation Style
                                            </li>
                                            <li className="flex gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2" />
                                                Max 15 pages (approx 5000 words)
                                            </li>
                                            <li className="flex gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2" />
                                                &lt;15% Plagiarism (Turnitin)
                                            </li>
                                            <li className="flex gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2" />
                                                Abstract (250 words) + Keywords
                                            </li>
                                        </ul>
                                    </div>
                                </ScrollReveal>

                                {/* Share */}
                                <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-medium cursor-pointer hover:text-blue-600 transition-colors">
                                    <Share2 className="w-4 h-4" /> Share this area
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
