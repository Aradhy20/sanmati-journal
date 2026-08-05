import React, { useState, useEffect } from 'react';
import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { FileText, ArrowRight, UploadCloud, CheckCircle, ShieldCheck } from 'lucide-react';
import { useForm, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import DropZone from '../../Components/ui/DropZone';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

export default function CallForPapers() {
    const { flash } = usePage().props;
    const [step, setStep] = useState(1);
    const [trackingId, setTrackingId] = useState(null);
    
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        title: '',
        abstract: '',
        keywords: '',
        author_name: '',
        author_email: '',
        author_phone: '',
        institution: '',
        subject_area: '',
        manuscript: null,
        consent: false,
        website: '', // Honeypot: should always be empty
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

    useEffect(() => {
        if (flash?.success?.tracking_id) {
            setTrackingId(flash.success.tracking_id);
            setStep(4);
        }
    }, [flash]);

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        
        if (step === 1) {
            if (data.title && data.abstract && data.author_name && data.author_email) {
                setStep(2);
            }
        } else if (step === 2) {
            if (data.manuscript) {
                setStep(3);
            }
        } else if (step === 3) {
            if (!data.consent) return;
            
            post(route('submission-guidelines.call.store'), {
                forceFormData: true,
                onSuccess: (page) => {
                    const successData = page.props.flash?.success;
                    if (successData?.tracking_id) {
                        setTrackingId(successData.tracking_id);
                        reset();
                        setStep(4);
                        
                        confetti({
                            particleCount: 120,
                            spread: 60,
                            origin: { y: 0.7 },
                            colors: ['#2E6F57', '#C77D5B', '#2E2E2E', '#F7F4EC']
                        });

                        Swal.fire({
                            title: 'Submission Successful!',
                            html: `Your manuscript has been securely routed.<br><br><b>Tracking ID: ${successData.tracking_id}</b>`,
                            icon: 'success',
                            confirmButtonColor: '#2E6F57',
                            confirmButtonText: 'Great, thanks!'
                        });
                    }
                },
                onError: (errs) => {
                    const errorMessage = errs.error || 'Submission failed. Please check for errors.';
                    toast.error(errorMessage);
                    
                    const step1Fields = ['title', 'abstract', 'author_name', 'author_email'];
                    const hasStep1Errors = Object.keys(errs).some(key => step1Fields.includes(key));
                    
                    if (hasStep1Errors) {
                        setStep(1);
                    } else if (errs.manuscript) {
                        setStep(2);
                    }
                },
                preserveScroll: true
            });
        }
    };

    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Call for Papers - Submit Research Paper",
            "url": "https://sanmatijournal.in/submission-guidelines/call-for-papers",
            "description": "Submit your research manuscript for publication in Sanmati Spectrum of Knowledge with CrossRef DOI and double-blind peer review."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Submission Guidelines', url: '/submission-guidelines' },
            { name: 'Call for Papers', url: '/submission-guidelines/call-for-papers' }
        ]
    };

    return (
        <MainLayout
            title="Publish Research Paper in India | Peer Reviewed ISSN Journal"
            description="Looking to publish research paper in India? Submit your manuscript to Sanmati Journal — a UGC Care aligned, peer reviewed multidisciplinary ISSN journal (ISSN 3108-1819) with CrossRef DOI indexing."
            keywords="UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal, ISSN 3108-1819"
            jsonLd={jsonLd}
        >
            <div className="bg-[#FFFDF8] min-h-screen">
                <PageHeader
                    title="Publish Research Paper in India — Online Submission"
                    breadcrumb="Submission Portal"
                    subtitle="UGC Care Aligned & Peer Reviewed Multidisciplinary ISSN Journal"
                />

                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-[#2E2E2E]">
                    
                    {/* Stepper Wizard Header */}
                    {step < 4 && (
                        <div className="max-w-xl mx-auto flex justify-between items-center mb-12 relative">
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#E9E5DD] -z-10 -translate-y-1/2 rounded-full"></div>
                            
                            {[
                                { num: 1, label: 'Metadata', icon: FileText },
                                { num: 2, label: 'Upload PDF', icon: UploadCloud },
                                { num: 3, label: 'Final Review', icon: ShieldCheck }
                            ].map((s) => (
                                <div key={s.num} className="flex flex-col items-center bg-[#FFFDF8] px-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border transition-colors duration-300 ${step >= s.num ? 'bg-primary border-primary text-white' : 'bg-[#F7F4EC] text-slate-400 border-[#E9E5DD]'}`}>
                                        <s.icon className="w-4 h-4" />
                                    </div>
                                    <span className={`text-[9px] font-bold uppercase tracking-wider mt-2 ${step >= s.num ? 'text-primary' : 'text-slate-400'}`}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="bg-white rounded-xl border border-[#E9E5DD] max-w-3xl mx-auto">
                        <div className="p-6 md:p-10">
                            
                            {/* STEP 4: SUCCESS */}
                            {step === 4 && (
                                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark mb-2">Submission Successful</h2>
                                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-medium">
                                        Your manuscript has been securely encrypted and routed to our editorial board. You will receive an email confirmation shortly.
                                    </p>
                                    <div className="bg-[#F7F4EC] border border-[#E9E5DD] rounded-lg p-5 max-w-xs mx-auto text-left">
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tracking ID</p>
                                        <p className="font-mono text-dark font-bold text-base">{trackingId || 'SJ-PENDING'}</p>
                                    </div>
                                    <button onClick={() => { setStep(1); setTrackingId(null); clearErrors(); }} className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">Submit another paper</button>
                                </motion.div>
                            )}

                            {/* STEPS 1-3 */}
                            {step < 4 && (
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                        
                                        {/* STEP 1: METADATA */}
                                        {step === 1 && (
                                            <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                    {/* Column 1: Manuscript Details */}
                                                    <div className="space-y-4">
                                                        <div className="border-b border-[#E9E5DD]/60 pb-3">
                                                            <h3 className="text-base font-serif font-bold text-dark mb-0.5">Manuscript Details</h3>
                                                            <p className="text-[10px] text-slate-500 font-medium">Core metadata for indexing your research paper.</p>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="title" className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Full Research Title *</label>
                                                            <input 
                                                                type="text" 
                                                                id="title"
                                                                name="title"
                                                                value={data.title}
                                                                onChange={e => setData('title', e.target.value)}
                                                                className={`w-full px-4 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-primary font-medium ${errors.title ? 'border-red-300 bg-red-50' : 'border-[#E9E5DD] bg-[#FFFDF8]'}`}
                                                                placeholder="Enter title of research paper"
                                                                required
                                                            />
                                                            {errors.title && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.title}</p>}
                                                        </div>

                                                        <div>
                                                            <label htmlFor="abstract" className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Summary / Abstract *</label>
                                                            <textarea 
                                                                id="abstract"
                                                                name="abstract"
                                                                value={data.abstract}
                                                                onChange={e => setData('abstract', e.target.value)}
                                                                rows="7"
                                                                className={`w-full px-4 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-primary font-medium resize-none ${errors.abstract ? 'border-red-300 bg-red-50' : 'border-[#E9E5DD] bg-[#FFFDF8]'}`}
                                                                placeholder="Provide a 200-300 word summary of scope, methodology, and findings."
                                                                required
                                                            ></textarea>
                                                            {errors.abstract && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.abstract}</p>}
                                                        </div>

                                                        <div>
                                                            <label htmlFor="keywords" className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Index Keywords</label>
                                                            <input 
                                                                type="text" 
                                                                id="keywords"
                                                                name="keywords"
                                                                value={data.keywords}
                                                                onChange={e => setData('keywords', e.target.value)}
                                                                className="w-full px-4 py-2.5 rounded-lg border border-[#E9E5DD] bg-[#FFFDF8] text-xs focus:outline-none focus:border-primary font-medium"
                                                                placeholder="Comma separated: Education, AI, Pedagogy"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Column 2: Author Details */}
                                                    <div className="space-y-4">
                                                        <div className="border-b border-[#E9E5DD]/60 pb-3">
                                                            <h3 className="text-base font-serif font-bold text-dark mb-0.5">Primary Author Identity</h3>
                                                            <p className="text-[10px] text-slate-500 font-medium">Registry contact details for corresponding peer review.</p>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="author_name" className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Full Legal Name *</label>
                                                            <input 
                                                                type="text" 
                                                                id="author_name"
                                                                name="author_name"
                                                                value={data.author_name}
                                                                onChange={e => setData('author_name', e.target.value)}
                                                                className={`w-full px-4 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-primary font-medium ${errors.author_name ? 'border-red-300 bg-red-50' : 'border-[#E9E5DD] bg-[#FFFDF8]'}`}
                                                                placeholder="Dr. Aradhya Jain"
                                                                required
                                                            />
                                                            {errors.author_name && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.author_name}</p>}
                                                        </div>

                                                        <div>
                                                            <label htmlFor="author_email" className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Official Email ID *</label>
                                                            <input 
                                                                type="email" 
                                                                id="author_email"
                                                                name="author_email"
                                                                value={data.author_email}
                                                                onChange={e => setData('author_email', e.target.value)}
                                                                className={`w-full px-4 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-primary font-medium ${errors.author_email ? 'border-red-300 bg-red-50' : 'border-[#E9E5DD] bg-[#FFFDF8]'}`}
                                                                placeholder="aradhya@university.edu"
                                                                required
                                                            />
                                                            {errors.author_email && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.author_email}</p>}
                                                        </div>

                                                        <div>
                                                            <label htmlFor="author_phone" className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Contact Number</label>
                                                            <input 
                                                                type="text" 
                                                                id="author_phone"
                                                                name="author_phone"
                                                                value={data.author_phone}
                                                                onChange={e => setData('author_phone', e.target.value)}
                                                                className="w-full px-4 py-2.5 rounded-lg border border-[#E9E5DD] bg-[#FFFDF8] text-xs focus:outline-none focus:border-primary font-medium"
                                                                placeholder="+91 XXXXXXXXXX"
                                                            />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="institution" className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Affiliated Institution</label>
                                                            <input 
                                                                type="text" 
                                                                id="institution"
                                                                name="institution"
                                                                value={data.institution}
                                                                onChange={e => setData('institution', e.target.value)}
                                                                className="w-full px-4 py-2.5 rounded-lg border border-[#E9E5DD] bg-[#FFFDF8] text-xs focus:outline-none focus:border-primary font-medium"
                                                                placeholder="University / Organization"
                                                            />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="subject_area" className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Primary Subject Area</label>
                                                            <select
                                                                id="subject_area"
                                                                name="subject_area"
                                                                title="Subject Area"
                                                                value={data.subject_area}
                                                                onChange={e => setData('subject_area', e.target.value)}
                                                                className="w-full px-4 py-2.5 rounded-lg border border-[#E9E5DD] bg-[#FFFDF8] text-xs focus:outline-none focus:border-primary font-medium cursor-pointer"
                                                            >
                                                                <option value="">Select Domain</option>
                                                                <option value="Arts & Humanities">Arts & Humanities</option>
                                                                <option value="Social Sciences">Social Sciences</option>
                                                                <option value="Commerce & Management">Commerce & Management</option>
                                                                <option value="Science & Technology">Science & Technology</option>
                                                                <option value="Other">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8 flex justify-end border-t border-[#E9E5DD]/60 pt-6">
                                                    <button type="submit" disabled={!data.title || !data.abstract || !data.author_name || !data.author_email} className="px-6 py-3 bg-primary text-white font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                                        Proceed to Upload <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* STEP 2: FILE UPLOAD */}
                                        {step === 2 && (
                                            <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                                <div className="border-b border-[#E9E5DD]/60 pb-3">
                                                    <h3 className="text-base font-serif font-bold text-dark mb-0.5">Secure File Transfer</h3>
                                                    <p className="text-[10px] text-slate-500 font-medium">Upload your blinded manuscript (PDF format only, max 10MB).</p>
                                                </div>

                                                <DropZone
                                                    id="manuscript-upload"
                                                    label="Upload Manuscript PDF"
                                                    accept=".pdf,application/pdf"
                                                    maxSizeMB={10}
                                                    file={data.manuscript}
                                                    onFileSelect={(file) => setData('manuscript', file)}
                                                    error={errors.manuscript}
                                                />

                                                <div className="mt-6 flex flex-col-reverse sm:flex-row justify-between gap-3">
                                                    <button type="button" onClick={() => setStep(1)} className="w-full sm:w-auto px-5 py-2.5 bg-white text-dark border border-[#E9E5DD] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-slate-50 transition-colors">
                                                        Back
                                                    </button>
                                                    <button type="submit" disabled={!data.manuscript} className="w-full sm:w-auto px-5 py-2.5 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-primary-dark transition-colors flex justify-center items-center gap-1.5 disabled:opacity-50">
                                                        Final Review <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* STEP 3: FINAL REVIEW */}
                                        {step === 3 && (
                                            <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                                <div className="border-b border-[#E9E5DD]/60 pb-3">
                                                    <h3 className="text-base font-serif font-bold text-dark mb-0.5">Final Verification</h3>
                                                    <p className="text-[10px] text-slate-500 font-medium">Please review details and sign originality consent statements.</p>
                                                </div>

                                                <div className="bg-[#F7F4EC] rounded-lg p-5 border border-[#E9E5DD]">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                                                        <div className="md:col-span-2">
                                                            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Manuscript Title</p>
                                                            <p className="text-xs font-bold text-dark leading-snug">{data.title}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Corresponding Author</p>
                                                            <p className="text-xs font-bold text-dark">{data.author_name}</p>
                                                            <p className="text-[10px] text-slate-400 mt-0.5">{data.author_email}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Institution</p>
                                                            <p className="text-xs font-bold text-dark">{data.institution || 'Not Specified'}</p>
                                                        </div>
                                                        {data.manuscript && (
                                                            <>
                                                                <div>
                                                                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Attached File</p>
                                                                    <p className="text-xs font-bold text-primary flex items-center gap-1.5 truncate max-w-[200px]">
                                                                        <FileText className="w-3.5 h-3.5"/> 
                                                                        <span>{data.manuscript?.name}</span>
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">File Size</p>
                                                                    <p className="text-xs font-bold text-dark">
                                                                        {data.manuscript?.size ? (data.manuscript.size / (1024 * 1024)).toFixed(2) : '0.00'} MB
                                                                    </p>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="bg-[#FFFDF8] border border-[#E9E5DD] rounded-lg p-5">
                                                    <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
                                                        <div className="pt-0.5">
                                                            <input 
                                                                type="checkbox" 
                                                                id="consent"
                                                                name="consent"
                                                                checked={data.consent}
                                                                onChange={e => setData('consent', e.target.checked)}
                                                                className="w-4 h-4 rounded border-[#E9E5DD] text-primary focus:ring-primary"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-bold text-dark mb-0.5">Declaration of Originality</p>
                                                            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">I certify that this manuscript is my original work, has not been published previously, and is not pending publication elsewhere. I agree to the Journal's open-access policies.</p>
                                                        </div>
                                                    </label>
                                                </div>

                                                <div className="flex items-center justify-end gap-2 text-slate-400">
                                                    <ShieldCheck className="w-4 h-4 text-primary" />
                                                    <span className="text-[9px] font-bold uppercase tracking-wider">Secure Academic Gateway</span>
                                                </div>

                                                <div className="flex flex-col sm:flex-row justify-between gap-3 border-t border-[#E9E5DD]/60 pt-6">
                                                    <button type="button" onClick={() => setStep(2)} disabled={processing} className="w-full sm:w-auto px-5 py-2.5 bg-white text-dark border border-[#E9E5DD] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-slate-50 transition-colors">
                                                        Back
                                                    </button>
                                                    <button type="submit" disabled={processing || !data.consent} className="w-full sm:w-auto px-5 py-2.5 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-primary-dark transition-colors flex justify-center items-center gap-1.5">
                                                        {processing ? 'Submitting...' : 'Submit Manuscript Officially'}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                    </AnimatePresence>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
