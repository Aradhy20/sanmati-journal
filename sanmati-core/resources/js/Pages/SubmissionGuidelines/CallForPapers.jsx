import React, { useState, useEffect } from 'react';
import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { 
    FileText, ArrowRight, UploadCloud, CheckCircle, ShieldCheck, 
    AlertCircle, Sparkles, Plus, Trash2, Edit3, HelpCircle, 
    ChevronRight, ArrowLeft, RefreshCw, UserCheck, Globe, BookOpen, Layers
} from 'lucide-react';
import { useForm, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import DropZone from '../../Components/ui/DropZone';
import axios from 'axios';

/* ── Country List ── */
const COUNTRIES = [
    "India", "United States", "United Kingdom", "Canada", "Australia",
    "Germany", "France", "Japan", "China", "Singapore", "United Arab Emirates",
    "Saudi Arabia", "South Africa", "Brazil", "Nepal", "Bangladesh", "Sri Lanka",
    "Malaysia", "Indonesia", "Pakistan", "Other"
];

/* ── Article Types ── */
const ARTICLE_TYPES = [
    "Original Research",
    "Review Article",
    "Case Study",
    "Short Communication",
    "Other"
];

export default function CallForPapers() {
    const { flash } = usePage().props;
    const [step, setStep] = useState(1);
    const [trackingId, setTrackingId] = useState(null);
    
    // Additional Co-author State
    const [coAuthors, setCoAuthors] = useState([]);
    const [newAuthor, setNewAuthor] = useState({ name: '', email: '', affiliation: '', country: 'India', orcid: '' });
    const [showAuthorModal, setShowAuthorModal] = useState(false);

    // AI Pre-check State
    const [aiLoading, setAiLoading] = useState(false);
    const [aiResult, setAiResult] = useState(null);
    const [aiError, setAiError] = useState(null);
    const [ignoredSuggestions, setIgnoredSuggestions] = useState([]);

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        title: '',
        article_type: 'Original Research',
        abstract: '',
        keywords: '',
        author_name: '',
        author_email: '',
        author_phone: '',
        institution: '',
        country: 'India',
        subject_area: '',
        authors: [],
        manuscript: null,
        supplementary_file: null,
        consent: false,
        ai_precheck: '',
        website: '', // Honeypot: should always be empty
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

    useEffect(() => {
        if (flash?.success?.tracking_id) {
            setTrackingId(flash.success.tracking_id);
            setStep(5);
        }
    }, [flash]);

    // Analytics helper (safe, no paper content sent)
    const trackEvent = (eventName, params = {}) => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({ event: eventName, ...params });
        }
    };

    useEffect(() => {
        trackEvent('submission_started');
    }, []);

    const wordCount = (text) => {
        if (!text) return 0;
        return text.trim().split(/\s+/).filter(Boolean).length;
    };

    // Co-Author Handlers
    const handleAddAuthor = (e) => {
        e.preventDefault();
        if (!newAuthor.name || !newAuthor.email) {
            toast.error('Co-author name and email are required.');
            return;
        }
        const updated = [...coAuthors, { ...newAuthor }];
        setCoAuthors(updated);
        setData('authors', updated);
        setNewAuthor({ name: '', email: '', affiliation: '', country: 'India', orcid: '' });
        setShowAuthorModal(false);
        toast.success('Co-author added.');
    };

    const handleRemoveAuthor = (index) => {
        const updated = coAuthors.filter((_, i) => i !== index);
        setCoAuthors(updated);
        setData('authors', updated);
    };

    // Run AI Precheck Diagnostic
    const runAiPrecheck = async () => {
        setAiLoading(true);
        setAiError(null);
        trackEvent('ai_precheck_started');

        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('abstract', data.abstract);
            formData.append('keywords', data.keywords);
            formData.append('author_name', data.author_name);
            formData.append('author_email', data.author_email);
            formData.append('institution', data.institution);
            formData.append('country', data.country);
            formData.append('article_type', data.article_type);
            formData.append('authors', JSON.stringify(coAuthors));

            if (data.manuscript) {
                formData.append('manuscript', data.manuscript);
            }

            const response = await axios.post('/api/submission/precheck', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.data?.available !== false) {
                setAiResult(response.data);
                setData('ai_precheck', JSON.stringify(response.data));
                trackEvent('ai_precheck_completed', { checks_count: response.data.checks?.length });
            } else {
                setAiError(response.data?.message || 'AI pre-check is currently unavailable. You can still submit your manuscript normally.');
            }
        } catch (err) {
            setAiError('AI pre-check is currently unavailable. You can still submit your manuscript normally.');
        } finally {
            setAiLoading(false);
        }
    };

    // Navigation & Step Handlers
    const goToStep2 = (e) => {
        e.preventDefault();
        if (!data.title || !data.article_type || !data.abstract || !data.keywords || !data.author_name || !data.author_email || !data.country) {
            toast.error('Please fill in all mandatory paper and author information fields.');
            return;
        }
        setStep(2);
        trackEvent('submission_step_completed', { step: 1 });
    };

    const goToStep3 = (e) => {
        e.preventDefault();
        if (!data.manuscript) {
            toast.error('Please upload your manuscript file (DOC, DOCX, or PDF).');
            return;
        }
        if (!data.institution) {
            toast.error('Please enter your primary affiliated institution.');
            return;
        }
        trackEvent('manuscript_uploaded', { file_type: data.manuscript.name.split('.').pop() });
        setStep(3);
        trackEvent('submission_step_completed', { step: 2 });

        // Auto trigger AI precheck on first load of Step 3
        if (!aiResult && !aiLoading) {
            runAiPrecheck();
        }
    };

    const goToStep4 = (e) => {
        if (e) e.preventDefault();
        setStep(4);
        trackEvent('submission_step_completed', { step: 3 });
        trackEvent('submission_reviewed');
    };

    // Final Form Submission
    const handleFinalSubmit = (e) => {
        if (e) e.preventDefault();
        if (!data.consent) {
            toast.error('Please accept the publication policy declaration.');
            return;
        }

        post(route('submission-guidelines.call.store'), {
            forceFormData: true,
            onSuccess: (page) => {
                const successData = page.props.flash?.success;
                const finalTrackingId = successData?.tracking_id || 'SJ-' + Math.random().toString(36).substring(2, 8).toUpperCase();
                setTrackingId(finalTrackingId);
                reset();
                setStep(5);
                trackEvent('submission_completed', { tracking_id: finalTrackingId });

                Promise.all([
                    import('canvas-confetti'),
                    import('sweetalert2')
                ]).then(([confettiModule, SwalModule]) => {
                    const confetti = confettiModule.default || confettiModule;
                    const Swal = SwalModule.default || SwalModule;

                    confetti({
                        particleCount: 120,
                        spread: 60,
                        origin: { y: 0.7 },
                        colors: ['#2E6F57', '#C77D5B', '#2E2E2E', '#F7F4EC']
                    });

                    Swal.fire({
                        title: 'Manuscript Submitted Successfully!',
                        html: `Your manuscript has been securely registered.<br><br><b>Tracking ID: ${finalTrackingId}</b><br><small class="text-slate-500">Status: Submitted — Awaiting Editorial Screening</small>`,
                        icon: 'success',
                        confirmButtonColor: '#8B1538',
                        confirmButtonText: 'View Submission Details'
                    });
                }).catch(() => {
                    toast.success(`Manuscript submitted! Tracking ID: ${finalTrackingId}`);
                });
            },
            onError: (errs) => {
                trackEvent('submission_failed');
                const errorMessage = errs.error || 'Submission failed. Please check for input errors.';
                toast.error(errorMessage);

                const step1Fields = ['title', 'abstract', 'keywords', 'article_type', 'author_name', 'author_email', 'country'];
                const hasStep1Errors = Object.keys(errs).some(key => step1Fields.includes(key));
                
                if (hasStep1Errors) {
                    setStep(1);
                } else if (errs.manuscript || errs.institution) {
                    setStep(2);
                }
            },
            preserveScroll: true
        });
    };

    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Submit Manuscript - Sanmati Journal",
            "url": "https://sanmatijournal.in/submission-guidelines/call-for-papers",
            "description": "Submit your research paper for publication in Sanmati Spectrum of Knowledge with CrossRef DOI indexing and COPE compliant peer review."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Submission Guidelines', url: '/submission-guidelines' },
            { name: 'Submit Manuscript', url: '/submission-guidelines/call-for-papers' }
        ]
    };

    return (
        <MainLayout
            title="Submit Manuscript | Peer Reviewed Multidisciplinary Research Journal"
            description="Submit your academic research paper to Sanmati Spectrum of Knowledge (ISSN 3108-1819). Fast track peer review, CrossRef DOI indexing, and open access publishing."
            keywords="Submit Research Paper, Call for Papers, Publish Paper India, UGC Care Journal, Multidisciplinary Journal, ISSN 3108-1819"
            jsonLd={jsonLd}
        >
            <div className="bg-[#FFFDF8] min-h-screen">
                <PageHeader
                    title="Manuscript Submission Portal"
                    breadcrumb="Submit Manuscript"
                    subtitle="Fast-Track Academic Peer Review & CrossRef DOI Indexing"
                />

                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 text-[#2E2E2E]">
                    
                    {/* Stepper Progress Header */}
                    {step < 5 && (
                        <div className="max-w-4xl mx-auto mb-10">
                            {/* Desktop & Tablet Stepper */}
                            <div className="hidden sm:flex justify-between items-center relative">
                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#E9E5DD] -z-10 -translate-y-1/2 rounded-full"></div>
                                
                                {[
                                    { num: 1, label: 'Paper Info', icon: FileText },
                                    { num: 2, label: 'Authors & File', icon: UploadCloud },
                                    { num: 3, label: 'AI Pre-Check', icon: Sparkles },
                                    { num: 4, label: 'Review & Submit', icon: ShieldCheck }
                                ].map((s) => (
                                    <div key={s.num} className="flex flex-col items-center bg-[#FFFDF8] px-3">
                                        <button 
                                            type="button"
                                            onClick={() => { if(step > s.num) setStep(s.num); }}
                                            disabled={step < s.num}
                                            className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs border transition-all duration-200 ${
                                                step === s.num 
                                                    ? 'bg-primary border-primary text-white shadow-md scale-105' 
                                                    : step > s.num 
                                                        ? 'bg-emerald-600 border-emerald-600 text-white cursor-pointer' 
                                                        : 'bg-[#F7F4EC] text-slate-400 border-[#E9E5DD] cursor-not-allowed'
                                            }`}
                                            aria-label={`Step ${s.num}: ${s.label}`}
                                        >
                                            {step > s.num ? <CheckCircle className="w-5 h-5" /> : <s.icon className="w-4 h-4" />}
                                        </button>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider mt-2 ${step >= s.num ? 'text-primary' : 'text-slate-400'}`}>{s.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Sticky Stepper Indicator */}
                            <div className="sm:hidden bg-white border border-[#E9E5DD] rounded-xl p-3 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">
                                        {step}/4
                                    </span>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Current Step</p>
                                        <p className="text-xs font-bold text-slate-900">
                                            {step === 1 && "1. Paper Information"}
                                            {step === 2 && "2. Authors & Manuscript"}
                                            {step === 3 && "3. AI Manuscript Pre-Check"}
                                            {step === 4 && "4. Final Review & Submission"}
                                        </p>
                                    </div>
                                </div>
                                {step > 1 && (
                                    <button 
                                        type="button" 
                                        onClick={() => setStep(p => p - 1)}
                                        className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg"
                                    >
                                        Back
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
                        
                        {/* MAIN FORM CONTAINER */}
                        <div className={`bg-white rounded-2xl border border-[#E9E5DD] shadow-sm ${step < 5 ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
                            <div className="p-5 sm:p-8">
                                
                                {/* ── STEP 5: SUCCESS STATE ── */}
                                {step === 5 && (
                                    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-6 max-w-xl mx-auto">
                                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-100">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-full">Official Receipt</span>
                                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark mt-2 mb-1">Manuscript Submitted Successfully</h2>
                                            <p className="text-xs text-slate-500 font-medium">
                                                Your submission has been securely logged into the editorial registry.
                                            </p>
                                        </div>

                                        <div className="bg-[#F7F4EC] border border-[#E9E5DD] rounded-2xl p-6 text-left space-y-4">
                                            <div className="flex justify-between items-center border-b border-[#E9E5DD] pb-3">
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Submission Tracking ID</p>
                                                    <p className="font-mono text-dark font-bold text-lg text-primary">{trackingId || 'SJ-PENDING'}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Submission Date</p>
                                                    <p className="text-xs font-bold text-slate-800">{new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Editorial Status</p>
                                                <p className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg inline-block mt-1">
                                                    Submitted — Awaiting Editorial Screening
                                                </p>
                                            </div>

                                            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                                A confirmation email has been dispatched to <b>{data.author_email || 'your registered email'}</b>. Our editorial board will complete desk screening within 3–5 working days.
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                                            <button 
                                                onClick={() => { setStep(1); setTrackingId(null); reset(); setCoAuthors([]); setAiResult(null); clearErrors(); }} 
                                                className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors"
                                            >
                                                Submit Another Manuscript
                                            </button>
                                            <a 
                                                href="mailto:sanmatijournal@gmail.com" 
                                                className="w-full sm:w-auto px-6 py-3 bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-colors"
                                            >
                                                Contact Editorial Office
                                            </a>
                                        </div>
                                    </motion.div>
                                )}

                                {/* ── STEPS 1 to 4 FORM ── */}
                                {step < 5 && (
                                    <form onSubmit={step === 4 ? handleFinalSubmit : (e) => e.preventDefault()} encType="multipart/form-data">
                                        
                                        {/* Honeypot field */}
                                        <div style={{ display: 'none', visibility: 'hidden', position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true" tabIndex="-1">
                                            <label htmlFor="website_hp">Website (leave blank)</label>
                                            <input
                                                type="text"
                                                id="website_hp"
                                                name="website"
                                                value={data.website || ''}
                                                onChange={e => setData('website', e.target.value)}
                                                autoComplete="off"
                                                tabIndex="-1"
                                            />
                                        </div>

                                        <AnimatePresence mode="wait">
                                            
                                            {/* STEP 1: PAPER INFORMATION */}
                                            {step === 1 && (
                                                <motion.div key="step1" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-6">
                                                    <div className="border-b border-[#E9E5DD]/80 pb-4">
                                                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md">Step 1 of 4</span>
                                                        <h2 className="text-xl font-serif font-bold text-dark mt-2 mb-0.5">Paper & Author Metadata</h2>
                                                        <p className="text-xs text-slate-500 font-medium">Enter primary paper attributes and corresponding author identity.</p>
                                                    </div>

                                                    {/* Manuscript Title */}
                                                    <div>
                                                        <label htmlFor="title" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                                            Manuscript Title <span className="text-red-500">*</span>
                                                        </label>
                                                        <input 
                                                            type="text" 
                                                            id="title"
                                                            name="title"
                                                            value={data.title}
                                                            onChange={e => setData('title', e.target.value)}
                                                            className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium ${errors.title ? 'border-red-400 bg-red-50' : 'border-[#E9E5DD] bg-[#FFFDF8]'}`}
                                                            placeholder="e.g. Artificial Intelligence in Higher Education: A Multidisciplinary Analysis"
                                                            required
                                                        />
                                                        {errors.title && <p className="text-red-500 text-xs mt-1 font-bold">{errors.title}</p>}
                                                    </div>

                                                    {/* Article Type & Subject Domain */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <label htmlFor="article_type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                                                Article Type <span className="text-red-500">*</span>
                                                            </label>
                                                            <select
                                                                id="article_type"
                                                                name="article_type"
                                                                title="Article Type"
                                                                value={data.article_type}
                                                                onChange={e => setData('article_type', e.target.value)}
                                                                className="w-full px-4 py-3 rounded-xl border border-[#E9E5DD] bg-[#FFFDF8] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                                                                required
                                                            >
                                                                {ARTICLE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                                                            </select>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="subject_area" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                                                Primary Domain
                                                            </label>
                                                            <select
                                                                id="subject_area"
                                                                name="subject_area"
                                                                title="Primary Domain"
                                                                value={data.subject_area}
                                                                onChange={e => setData('subject_area', e.target.value)}
                                                                className="w-full px-4 py-3 rounded-xl border border-[#E9E5DD] bg-[#FFFDF8] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                                                            >
                                                                <option value="">Select Research Area</option>
                                                                <option value="Arts & Humanities">Arts & Humanities</option>
                                                                <option value="Social Sciences">Social Sciences</option>
                                                                <option value="Commerce & Management">Commerce & Management</option>
                                                                <option value="Science & Technology">Science & Technology</option>
                                                                <option value="Multidisciplinary">Multidisciplinary</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    {/* Abstract */}
                                                    <div>
                                                        <div className="flex justify-between items-center mb-1.5">
                                                            <label htmlFor="abstract" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                                                Summary / Abstract <span className="text-red-500">*</span>
                                                            </label>
                                                            <span className={`text-[11px] font-bold ${wordCount(data.abstract) < 150 ? 'text-amber-600' : 'text-emerald-600'}`}>
                                                                {wordCount(data.abstract)} words (Recommended: 150–300 words)
                                                            </span>
                                                        </div>
                                                        <textarea 
                                                            id="abstract"
                                                            name="abstract"
                                                            value={data.abstract}
                                                            onChange={e => setData('abstract', e.target.value)}
                                                            rows="6"
                                                            className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium resize-none ${errors.abstract ? 'border-red-400 bg-red-50' : 'border-[#E9E5DD] bg-[#FFFDF8]'}`}
                                                            placeholder="Provide a summary including background, research objective, methodology, key findings, and conclusion."
                                                            required
                                                        ></textarea>
                                                        {errors.abstract && <p className="text-red-500 text-xs mt-1 font-bold">{errors.abstract}</p>}
                                                    </div>

                                                    {/* Index Keywords */}
                                                    <div>
                                                        <label htmlFor="keywords" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                                            Index Keywords <span className="text-red-500">*</span>
                                                        </label>
                                                        <input 
                                                            type="text" 
                                                            id="keywords"
                                                            name="keywords"
                                                            value={data.keywords}
                                                            onChange={e => setData('keywords', e.target.value)}
                                                            className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium ${errors.keywords ? 'border-red-400 bg-red-50' : 'border-[#E9E5DD] bg-[#FFFDF8]'}`}
                                                            placeholder="Comma separated: Higher Education, Digital Pedagogy, Machine Learning"
                                                            required
                                                        />
                                                        {errors.keywords && <p className="text-red-500 text-xs mt-1 font-bold">{errors.keywords}</p>}
                                                    </div>

                                                    {/* Corresponding Author Information */}
                                                    <div className="bg-[#F7F4EC] rounded-xl p-5 border border-[#E9E5DD] space-y-4">
                                                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-[#E9E5DD] pb-2">
                                                            Corresponding Author Identity
                                                        </h3>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            <div>
                                                                <label htmlFor="author_name" className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">Full Legal Name *</label>
                                                                <input 
                                                                    type="text" 
                                                                    id="author_name"
                                                                    name="author_name"
                                                                    value={data.author_name}
                                                                    onChange={e => setData('author_name', e.target.value)}
                                                                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E5DD] bg-white text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary"
                                                                    placeholder="Dr. Aradhya Jain"
                                                                    required
                                                                />
                                                            </div>

                                                            <div>
                                                                <label htmlFor="author_email" className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">Official Email ID *</label>
                                                                <input 
                                                                    type="email" 
                                                                    id="author_email"
                                                                    name="author_email"
                                                                    value={data.author_email}
                                                                    onChange={e => setData('author_email', e.target.value)}
                                                                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E5DD] bg-white text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary"
                                                                    placeholder="author@university.edu"
                                                                    required
                                                                />
                                                            </div>

                                                            <div>
                                                                <label htmlFor="country" className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">Country *</label>
                                                                <select 
                                                                    id="country"
                                                                    name="country"
                                                                    title="Country"
                                                                    value={data.country}
                                                                    onChange={e => setData('country', e.target.value)}
                                                                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E5DD] bg-white text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                                                                    required
                                                                >
                                                                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <label htmlFor="author_phone" className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">Contact Phone</label>
                                                                <input 
                                                                    type="text" 
                                                                    id="author_phone"
                                                                    name="author_phone"
                                                                    value={data.author_phone}
                                                                    onChange={e => setData('author_phone', e.target.value)}
                                                                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E5DD] bg-white text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary"
                                                                    placeholder="+91 XXXXXXXXXX"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pt-4 flex justify-end">
                                                        <button 
                                                            type="button" 
                                                            onClick={goToStep2}
                                                            className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            Proceed to Authors & File <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* STEP 2: AUTHORS & MANUSCRIPT */}
                                            {step === 2 && (
                                                <motion.div key="step2" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-6">
                                                    <div className="border-b border-[#E9E5DD]/80 pb-4">
                                                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md">Step 2 of 4</span>
                                                        <h2 className="text-xl font-serif font-bold text-dark mt-2 mb-0.5">Authors & File Upload</h2>
                                                        <p className="text-xs text-slate-500 font-medium">Add co-authors and upload your blind manuscript file.</p>
                                                    </div>

                                                    {/* Primary Affiliation */}
                                                    <div>
                                                        <label htmlFor="institution" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                                            Primary Institution / University Affiliation <span className="text-red-500">*</span>
                                                        </label>
                                                        <input 
                                                            type="text" 
                                                            id="institution"
                                                            name="institution"
                                                            value={data.institution}
                                                            onChange={e => setData('institution', e.target.value)}
                                                            className="w-full px-4 py-3 rounded-xl border border-[#E9E5DD] bg-[#FFFDF8] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                            placeholder="Department of Computer Science, Central University of Delhi"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Co-Authors Management */}
                                                    <div className="bg-[#FFFDF8] border border-[#E9E5DD] rounded-2xl p-5 space-y-4">
                                                        <div className="flex justify-between items-center border-b border-[#E9E5DD] pb-3">
                                                            <div>
                                                                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Co-Authors ({coAuthors.length})</h3>
                                                                <p className="text-[11px] text-slate-500">Add all contributing researchers for citation indexing.</p>
                                                            </div>
                                                            <button 
                                                                type="button" 
                                                                onClick={() => setShowAuthorModal(true)}
                                                                className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary/20 transition-colors flex items-center gap-1"
                                                            >
                                                                <Plus className="w-3.5 h-3.5" /> Add Co-Author
                                                            </button>
                                                        </div>

                                                        {coAuthors.length === 0 ? (
                                                            <p className="text-xs text-slate-400 italic text-center py-2">
                                                                No co-authors added yet. (Corresponding author registered as primary).
                                                            </p>
                                                        ) : (
                                                            <div className="space-y-2">
                                                                {coAuthors.map((ca, idx) => (
                                                                    <div key={idx} className="flex items-center justify-between p-3 bg-white border border-[#E9E5DD] rounded-xl text-xs">
                                                                        <div>
                                                                            <p className="font-bold text-slate-900">{ca.name} <span className="text-slate-400 font-normal">({ca.country})</span></p>
                                                                            <p className="text-[11px] text-slate-500">{ca.email} • {ca.affiliation || 'No Affiliation'}</p>
                                                                            {ca.orcid && <p className="text-[10px] text-emerald-700 font-mono">ORCID: {ca.orcid}</p>}
                                                                        </div>
                                                                        <button 
                                                                            type="button" 
                                                                            onClick={() => handleRemoveAuthor(idx)}
                                                                            className="text-red-500 hover:text-red-700 p-1"
                                                                        >
                                                                            <Trash2 className="w-4 h-4" />
                                                                        </button>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Manuscript Dropzone */}
                                                    <DropZone
                                                        id="manuscript-upload"
                                                        label="Manuscript Document File"
                                                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                                        maxSizeMB={20}
                                                        required={true}
                                                        file={data.manuscript}
                                                        onFileSelect={(file) => setData('manuscript', file)}
                                                        error={errors.manuscript}
                                                    />

                                                    {/* Supplementary File (Optional) */}
                                                    <DropZone
                                                        id="supplementary-upload"
                                                        label="Supplementary Material (Optional)"
                                                        accept=".pdf,.doc,.docx,.zip"
                                                        maxSizeMB={20}
                                                        required={false}
                                                        file={data.supplementary_file}
                                                        onFileSelect={(file) => setData('supplementary_file', file)}
                                                        error={errors.supplementary_file}
                                                    />

                                                    <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-4 border-t border-[#E9E5DD]/80">
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setStep(1)}
                                                            className="w-full sm:w-auto px-5 py-2.5 bg-white text-slate-700 border border-[#E9E5DD] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-colors"
                                                        >
                                                            Back to Step 1
                                                        </button>
                                                        <button 
                                                            type="button" 
                                                            onClick={goToStep3}
                                                            className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            Proceed to AI Pre-Check <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* STEP 3: AI MANUSCRIPT PRE-CHECK */}
                                            {step === 3 && (
                                                <motion.div key="step3" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-6">
                                                    <div className="border-b border-[#E9E5DD]/80 pb-4">
                                                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md">Step 3 of 4</span>
                                                        <h2 className="text-xl font-serif font-bold text-dark mt-2 mb-0.5 flex items-center gap-2">
                                                            <Sparkles className="w-5 h-5 text-amber-500" />
                                                            AI Manuscript Pre-Check
                                                        </h2>
                                                        <p className="text-xs text-slate-500 font-medium">
                                                            Use our automated pre-check to identify common submission issues before sending your manuscript to the editorial team.
                                                        </p>
                                                    </div>

                                                    {/* AI Disclaimer Alert */}
                                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex items-start gap-3">
                                                        <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <p className="font-bold mb-0.5">Automated Formatting Assistant Notice</p>
                                                            <p className="text-[11px] text-blue-800 leading-relaxed font-medium">
                                                                The AI pre-check assists with file readability, title/abstract metrics, and keyword completeness. <b>It NEVER makes editorial decisions and does NOT evaluate peer review acceptance.</b>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Loading State */}
                                                    {aiLoading && (
                                                        <div className="text-center py-10 bg-[#F7F4EC] rounded-2xl border border-[#E9E5DD] space-y-3">
                                                            <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto" />
                                                            <p className="text-xs font-bold text-slate-800">Analyzing manuscript metadata & file format...</p>
                                                            <p className="text-[11px] text-slate-500">Checking readability, word counts, and indexing tags.</p>
                                                        </div>
                                                    )}

                                                    {/* AI Error Fallback State */}
                                                    {aiError && (
                                                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-900 space-y-3">
                                                            <div className="flex items-center gap-2 font-bold text-xs">
                                                                <AlertCircle className="w-4 h-4 text-amber-600" />
                                                                <span>AI Service Status</span>
                                                            </div>
                                                            <p className="text-xs font-medium">{aiError}</p>
                                                        </div>
                                                    )}

                                                    {/* AI Results Display */}
                                                    {aiResult && !aiLoading && (
                                                        <div className="space-y-6">
                                                            <div className="bg-[#FFFDF8] border border-[#E9E5DD] rounded-2xl p-5 space-y-3">
                                                                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-[#E9E5DD] pb-2 flex justify-between items-center">
                                                                    <span>Pre-Check Diagnostic Results</span>
                                                                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">100% Readable</span>
                                                                </h3>

                                                                <div className="space-y-2">
                                                                    {aiResult.checks?.map((chk) => (
                                                                        <div key={chk.id} className="flex items-start gap-3 p-3 bg-white border border-[#E9E5DD] rounded-xl text-xs">
                                                                            {chk.status === 'pass' && <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />}
                                                                            {chk.status === 'warn' && <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />}
                                                                            {chk.status === 'info' && <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />}
                                                                            <div>
                                                                                <p className="font-bold text-slate-900">{chk.label}</p>
                                                                                <p className="text-[11px] text-slate-600 mt-0.5">{chk.message}</p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* AI Suggestions Cards */}
                                                            {aiResult.suggestions && aiResult.suggestions.length > 0 && (
                                                                <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5 space-y-3">
                                                                    <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                                                                        Suggestions Before Submission ({aiResult.suggestions.length})
                                                                    </h3>
                                                                    <div className="space-y-3">
                                                                        {aiResult.suggestions.map((sug) => {
                                                                            if (ignoredSuggestions.includes(sug.id)) return null;
                                                                            return (
                                                                                <div key={sug.id} className="p-4 bg-white border border-amber-200 rounded-xl space-y-2">
                                                                                    <p className="text-xs font-bold text-slate-900">{sug.title}</p>
                                                                                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{sug.description}</p>
                                                                                    <div className="flex items-center gap-2 pt-1">
                                                                                        <button 
                                                                                            type="button"
                                                                                            onClick={() => setStep(1)}
                                                                                            className="px-3 py-1 bg-primary text-white text-[11px] font-bold rounded-lg hover:bg-primary-dark"
                                                                                        >
                                                                                            Edit Manually
                                                                                        </button>
                                                                                        <button 
                                                                                            type="button"
                                                                                            onClick={() => setIgnoredSuggestions(p => [...p, sug.id])}
                                                                                            className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-lg hover:bg-slate-200"
                                                                                        >
                                                                                            Ignore
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}

                                                    <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-4 border-t border-[#E9E5DD]/80">
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setStep(2)}
                                                            className="w-full sm:w-auto px-5 py-2.5 bg-white text-slate-700 border border-[#E9E5DD] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-colors"
                                                        >
                                                            Back to Authors & File
                                                        </button>
                                                        <button 
                                                            type="button" 
                                                            onClick={goToStep4}
                                                            className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            Proceed to Final Review <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* STEP 4: FINAL REVIEW & SUBMISSION */}
                                            {step === 4 && (
                                                <motion.div key="step4" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-6">
                                                    <div className="border-b border-[#E9E5DD]/80 pb-4">
                                                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md">Step 4 of 4</span>
                                                        <h2 className="text-xl font-serif font-bold text-dark mt-2 mb-0.5">Final Verification & Submission</h2>
                                                        <p className="text-xs text-slate-500 font-medium">Verify all manuscript metadata and sign originality declaration.</p>
                                                    </div>

                                                    {/* Summary Card */}
                                                    <div className="bg-[#F7F4EC] rounded-2xl p-5 border border-[#E9E5DD] space-y-4">
                                                        <div className="flex justify-between items-center border-b border-[#E9E5DD] pb-3">
                                                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Submission Summary</h3>
                                                            <button 
                                                                type="button" 
                                                                onClick={() => setStep(1)} 
                                                                className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
                                                            >
                                                                <Edit3 className="w-3.5 h-3.5" /> Edit Information
                                                            </button>
                                                        </div>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                                            <div className="sm:col-span-2">
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Manuscript Title</p>
                                                                <p className="font-bold text-slate-900 leading-snug">{data.title}</p>
                                                            </div>

                                                            <div>
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Article Type</p>
                                                                <p className="font-bold text-slate-800">{data.article_type}</p>
                                                            </div>

                                                            <div>
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Primary Domain</p>
                                                                <p className="font-bold text-slate-800">{data.subject_area || 'Multidisciplinary'}</p>
                                                            </div>

                                                            <div>
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Corresponding Author</p>
                                                                <p className="font-bold text-slate-900">{data.author_name} ({data.country})</p>
                                                                <p className="text-[11px] text-slate-500">{data.author_email}</p>
                                                            </div>

                                                            <div>
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Institution / Affiliation</p>
                                                                <p className="font-bold text-slate-800">{data.institution}</p>
                                                            </div>

                                                            <div>
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Co-Authors</p>
                                                                <p className="font-bold text-slate-800">{coAuthors.length} co-author(s) registered</p>
                                                            </div>

                                                            <div>
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Attached File</p>
                                                                <p className="font-bold text-emerald-700 truncate">{data.manuscript?.name} ({(data.manuscript?.size / (1024*1024)).toFixed(2)} MB)</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Policy & Originality Consent */}
                                                    <div className="bg-[#FFFDF8] border border-[#E9E5DD] rounded-2xl p-5">
                                                        <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
                                                            <input 
                                                                type="checkbox" 
                                                                id="consent"
                                                                name="consent"
                                                                checked={data.consent}
                                                                onChange={e => setData('consent', e.target.checked)}
                                                                className="w-4 h-4 rounded border-[#E9E5DD] text-primary focus:ring-primary mt-0.5"
                                                                required
                                                            />
                                                            <div>
                                                                <p className="text-xs font-bold text-dark mb-0.5">Declaration of Originality & Publication Policy Agreement *</p>
                                                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                                                    I confirm that the information provided is accurate and that I agree to the journal's submission and publication policies. I certify that this manuscript is original, unpublished, and not under review elsewhere.
                                                                </p>
                                                            </div>
                                                        </label>
                                                    </div>

                                                    <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4 border-t border-[#E9E5DD]/80">
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setStep(3)}
                                                            disabled={processing}
                                                            className="w-full sm:w-auto px-5 py-2.5 bg-white text-slate-700 border border-[#E9E5DD] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-colors"
                                                        >
                                                            Back to AI Pre-Check
                                                        </button>
                                                        <button 
                                                            type="submit" 
                                                            disabled={processing || !data.consent}
                                                            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
                                                        >
                                                            {processing ? 'Submitting Manuscript...' : 'Submit Manuscript Officially'}
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}

                                        </AnimatePresence>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR: TRUST & SUBMISSION GUIDELINES */}
                        {step < 5 && (
                            <div className="lg:col-span-4 space-y-6">
                                {/* How Submission Works */}
                                <div className="bg-white rounded-2xl border border-[#E9E5DD] p-5 shadow-sm space-y-4">
                                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-[#E9E5DD] pb-3 flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-primary" />
                                        How Submission Works
                                    </h3>

                                    <div className="space-y-3">
                                        {[
                                            { step: '1', title: 'Submit manuscript', desc: 'Submit paper metadata and manuscript document.' },
                                            { step: '2', title: 'Editorial screening', desc: 'Desk review for scope and plagiarism compliance.' },
                                            { step: '3', title: 'Peer review', desc: 'Double-blind peer evaluation by subject reviewers.' },
                                            { step: '4', title: 'Revision if required', desc: 'Author updates manuscript per reviewer suggestions.' },
                                            { step: '5', title: 'Editorial decision', desc: 'Formal acceptance or revision outcome notification.' },
                                            { step: '6', title: 'Publication & DOI', desc: 'Published online with CrossRef DOI assignment.' },
                                        ].map(item => (
                                            <div key={item.step} className="flex items-start gap-3 text-xs">
                                                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    {item.step}
                                                </span>
                                                <div>
                                                    <p className="font-bold text-slate-800">{item.title}</p>
                                                    <p className="text-[11px] text-slate-500 leading-snug">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Need Help Support Banner */}
                                <div className="bg-[#F7F4EC] rounded-2xl border border-[#E9E5DD] p-5 space-y-3">
                                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                        <HelpCircle className="w-4 h-4 text-primary" />
                                        Need Help with Submission?
                                    </h4>
                                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                                        If you encounter issues during manuscript upload or have queries regarding publication guidelines, contact our editorial team:
                                    </p>
                                    <a 
                                        href="mailto:sanmatijournal@gmail.com" 
                                        className="inline-block text-xs font-bold text-primary hover:underline bg-white px-3 py-2 rounded-xl border border-[#E9E5DD]"
                                    >
                                        sanmatijournal@gmail.com
                                    </a>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* CO-AUTHOR ADD MODAL */}
            {showAuthorModal && (
                <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl border border-[#E9E5DD] p-6 max-w-md w-full shadow-2xl space-y-4">
                        <div className="flex justify-between items-center border-b border-[#E9E5DD] pb-3">
                            <h3 className="text-sm font-bold text-slate-900">Add Co-Author</h3>
                            <button type="button" onClick={() => setShowAuthorModal(false)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
                        </div>

                        <div className="space-y-3 text-xs">
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                                <input 
                                    type="text" 
                                    value={newAuthor.name}
                                    onChange={e => setNewAuthor({ ...newAuthor, name: e.target.value })}
                                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E5DD] focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="Prof. Sachin Kumar"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                                <input 
                                    type="email" 
                                    value={newAuthor.email}
                                    onChange={e => setNewAuthor({ ...newAuthor, email: e.target.value })}
                                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E5DD] focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="sachin@university.edu"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Institution / Affiliation</label>
                                <input 
                                    type="text" 
                                    value={newAuthor.affiliation}
                                    onChange={e => setNewAuthor({ ...newAuthor, affiliation: e.target.value })}
                                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E5DD] focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="Delhi University"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block font-bold text-slate-700 mb-1">Country</label>
                                    <select 
                                        value={newAuthor.country}
                                        onChange={e => setNewAuthor({ ...newAuthor, country: e.target.value })}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E5DD] cursor-pointer"
                                    >
                                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-bold text-slate-700 mb-1">ORCID (Optional)</label>
                                    <input 
                                        type="text" 
                                        value={newAuthor.orcid}
                                        onChange={e => setNewAuthor({ ...newAuthor, orcid: e.target.value })}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E5DD]"
                                        placeholder="0000-0002-1825-0097"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 pt-2 border-t border-[#E9E5DD]">
                            <button type="button" onClick={() => setShowAuthorModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl">Cancel</button>
                            <button type="button" onClick={handleAddAuthor} className="px-4 py-2 bg-primary text-white font-bold text-xs rounded-xl">Save Co-Author</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </MainLayout>
    );
}
