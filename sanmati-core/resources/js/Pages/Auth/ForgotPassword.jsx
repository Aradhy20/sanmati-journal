import { motion } from 'framer-motion';
import { useForm, Link } from '@inertiajs/react';
import { Mail, ArrowRight, BookOpen, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({ email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/forgot-password');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md space-y-6">

                {/* Logo */}
                <div className="flex flex-col items-center gap-3">
                    <Link href="/" className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                        <BookOpen className="w-6 h-6 text-white" />
                    </Link>
                    <div className="text-center">
                        <div className="text-sm font-heading font-bold text-slate-900">Sanmati Spectrum</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest">of Knowledge</div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6"
                >
                    <div className="space-y-2">
                        <h1 className="text-2xl font-heading font-bold text-slate-900">Reset Password</h1>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Enter your registered email address and we'll send you a link to reset your password.
                        </p>
                    </div>

                    {status && (
                        <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                            <p className="text-sm font-medium text-emerald-700">{status}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        <div className="space-y-1.5">
                            <label htmlFor="forgot-email" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <input
                                    id="forgot-email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    placeholder="author@university.edu"
                                    className={`w-full bg-slate-50 border pl-10 pr-4 py-3 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-300 transition-all duration-200 ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-600 font-medium">{errors.email}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing || !data.email}
                            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
                        >
                            {processing ? (
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Send Reset Link
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <Link
                        href="/login"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-white hover:border-slate-300 text-sm font-bold transition-all duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Sign In
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
