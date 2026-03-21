import React, { useState } from 'react';
import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Calendar, FileText, ArrowRight, UploadCloud, CheckCircle, ShieldCheck, User } from 'lucide-react';
import { useForm, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CallForPapers() {
    const { flash } = usePage().props;
    const [step, setStep] = useState(1);
    
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        abstract: '',
        keywords: '',
        manuscript: null,
        consent: false
    });

    const handleNextStep = (e) => {
        e.preventDefault();
        if (step === 1 && data.title && data.abstract) {
            setStep(2);
        } else if (step === 2 && data.manuscript) {
            setStep(3);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('submission-guidelines.call.store'), {
            onSuccess: () => {
                reset();
                setStep(4); // Success Step
            },
            forceFormData: true,
        });
    };

    return (
        <MainLayout>
            <div className="bg-[#eef1ff] min-h-screen">
                <PageHeader
                    title="Manuscript Submission System"
                    breadcrumb="Submission Portal"
                    subtitle="Secure End-to-End Peer Review Processing"
                />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative">
                    
                    {/* Stepper Wizard Header */}
                    {step < 4 && (
                        <div className="flex justify-between items-center mb-12 relative">
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full"></div>
                            <div className={`absolute top-1/2 left-0 h-1 bg-blue-600 -z-10 -translate-y-1/2 rounded-full transition-all duration-500`} style={{ width: `${(step - 1) * 50}%` }}></div>
                            
                            {[
                                { num: 1, label: 'Metadata', icon: FileText },
                                { num: 2, label: 'Upload PDF', icon: UploadCloud },
                                { num: 3, label: 'Final Review', icon: ShieldCheck }
                            ].map((s) => (
                                <div key={s.num} className="flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3 shadow-md transition-colors duration-500 ${step >= s.num ? 'bg-blue-600 text-white border-4 border-blue-200' : 'bg-white text-gray-400 border-4 border-gray-100'}`}>
                                        <s.icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-[11px] uppercase tracking-widest font-black ${step >= s.num ? 'text-blue-900' : 'text-gray-400'}`}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative">
                        <div className="p-8 md:p-12">
                            
                            {/* STEP 4: SUCCESS */}
                            {step === 4 && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle className="w-12 h-12 text-green-600" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Submission Successful!</h2>
                                    <p className="text-slate-600 text-lg max-w-lg mx-auto mb-10">
                                        Your manuscript has been securely encrypted and routed to our editorial board. You will receive an email confirmation shortly.
                                    </p>
                                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8 max-w-sm mx-auto text-left">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tracking ID</p>
                                        <p className="font-mono text-slate-900 font-bold text-lg">SJ-{Math.floor(100000 + Math.random() * 900000)}</p>
                                    </div>
                                    <button onClick={() => setStep(1)} className="text-blue-600 font-bold hover:underline">Submit another paper</button>
                                </motion.div>
                            )}

                            {/* STEPS 1-3 */}
                            {step < 4 && (
                                <form onSubmit={step === 3 ? submit : handleNextStep} encType="multipart/form-data">
                                    <AnimatePresence mode="wait">
                                        
                                        {/* STEP 1: METADATA */}
                                        {step === 1 && (
                                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <div className="mb-10">
                                                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Manuscript Details</h3>
                                                    <p className="text-slate-500">Provide the foundational metadata for indexing and peer-review matching.</p>
                                                </div>

                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Research Title *</label>
                                                        <input 
                                                            type="text" 
                                                            value={data.title}
                                                            onChange={e => setData('title', e.target.value)}
                                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                                                            placeholder="e.g. Pedagogical Impacts of Machine Learning..."
                                                            required
                                                        />
                                                        {errors.title && <p className="text-red-500 text-xs mt-2 font-medium">{errors.title}</p>}
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-bold text-slate-700 mb-2">Abstract Synopsis *</label>
                                                        <textarea 
                                                            value={data.abstract}
                                                            onChange={e => setData('abstract', e.target.value)}
                                                            rows="5"
                                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                                                            placeholder="Provide a 200-300 word summary of methodology and findings."
                                                            required
                                                        ></textarea>
                                                        {errors.abstract && <p className="text-red-500 text-xs mt-2 font-medium">{errors.abstract}</p>}
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-bold text-slate-700 mb-2">Index Keywords</label>
                                                        <input 
                                                            type="text" 
                                                            value={data.keywords}
                                                            onChange={e => setData('keywords', e.target.value)}
                                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                                                            placeholder="Comma separated: Education, AI, Pedagogy"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mt-10 flex justify-end">
                                                    <button type="submit" disabled={!data.title || !data.abstract} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed">
                                                        Proceed to Upload <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* STEP 2: FILE UPLOAD */}
                                        {step === 2 && (
                                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <div className="mb-10">
                                                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Secure File Transfer</h3>
                                                    <p className="text-slate-500">Upload your blinded manuscript (PDF format only, max 10MB).</p>
                                                </div>

                                                <div className="relative border-2 border-dashed border-gray-300 rounded-3xl p-6 lg:p-12 text-center hover:bg-slate-50 hover:border-blue-400 transition-colors group cursor-pointer">
                                                    <input 
                                                        type="file" 
                                                        accept=".pdf"
                                                        onChange={e => setData('manuscript', e.target.files[0])}
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                        required
                                                    />
                                                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                                        <UploadCloud className="w-10 h-10" />
                                                    </div>
                                                    
                                                    {data.manuscript ? (
                                                        <div>
                                                            <p className="text-lg font-bold text-slate-900 mb-2">{data.manuscript.name}</p>
                                                            <p className="text-sm font-medium text-green-600 bg-green-50 inline-block px-4 py-1 rounded-full border border-green-200"><CheckCircle className="w-4 h-4 inline mr-1" /> File Attached</p>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <p className="text-xl font-bold text-slate-700 mb-2 group-hover:text-blue-600 transition-colors">Drag &amp; Drop or Click to Browse</p>
                                                            <p className="text-slate-400 font-medium">Strictly .pdf files under 10MB</p>
                                                        </div>
                                                    )}
                                                    {errors.manuscript && <p className="text-red-500 text-sm mt-4 font-bold">{errors.manuscript}</p>}
                                                </div>

                                                <div className="mt-10 flex justify-between">
                                                    <button type="button" onClick={() => setStep(1)} className="px-8 py-4 bg-white text-slate-700 border border-gray-200 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                                                        Back
                                                    </button>
                                                    <button type="submit" disabled={!data.manuscript} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2 group disabled:opacity-50">
                                                        Final Step <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* STEP 3: FINAL REVIEW */}
                                        {step === 3 && (
                                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <div className="mb-10">
                                                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Final Verification</h3>
                                                    <p className="text-slate-500">Please review your submission and agree to our academic integrity policies.</p>
                                                </div>

                                                <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-gray-100">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                        <div>
                                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Title</p>
                                                            <p className="font-medium text-slate-900 line-clamp-2">{data.title}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Attached File</p>
                                                            <p className="font-medium text-blue-600 flex items-center gap-2"><FileText className="w-4 h-4"/> {data.manuscript?.name}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mb-10">
                                                    <label className="flex items-start gap-4 cursor-pointer">
                                                        <div className="pt-1">
                                                            <input 
                                                                type="checkbox" 
                                                                checked={data.consent}
                                                                onChange={e => setData('consent', e.target.checked)}
                                                                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-900 mb-1">Declaration of Originality</p>
                                                            <p className="text-sm text-slate-600 leading-relaxed">I certify that this manuscript is my original work, has not been published previously, and is not pending publication elsewhere. I agree to the Journal's open-access policies.</p>
                                                        </div>
                                                    </label>
                                                </div>

                                                {/* ReCAPTCHA UI visual simulation for trust */}
                                                <div className="flex items-center justify-end gap-3 mb-8">
                                                    <ShieldCheck className="w-5 h-5 text-green-600" />
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protected by reCAPTCHA Enterprise</span>
                                                </div>

                                                <div className="flex justify-between border-t border-gray-100 pt-8">
                                                    <button type="button" onClick={() => setStep(2)} disabled={processing} className="px-8 py-4 bg-white text-slate-700 border border-gray-200 font-bold rounded-xl hover:bg-slate-50 transition-colors disabled:opacity-50">
                                                        Back
                                                    </button>
                                                    <button type="submit" disabled={processing || !data.consent} className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:shadow-none relative overflow-hidden group">
                                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                                        {processing ? 'Encrypting & Submitting...' : 'Submit Manuscript Officially'}
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
