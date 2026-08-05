import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@inertiajs/react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, BookOpen, ShieldCheck, Globe, Award } from 'lucide-react';
import { Link } from '@inertiajs/react';

const TRUST = [
    { icon: ShieldCheck, text: 'Secure encrypted connection' },
    { icon: Globe, text: 'Open access journal' },
    { icon: Award, text: 'ISSN 3108-1819 registered' },
];

export default function Login({ canResetPassword = true, status }) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="min-h-screen flex bg-white">
            {/* ── Left brand panel ── */}
            <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 overflow-hidden p-12 text-white">
                {/* Background decorations */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-900/40 rounded-full blur-2xl" aria-hidden="true" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
                    aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 max-w-sm text-center space-y-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mx-auto shadow-xl">
                        <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-heading font-bold text-white leading-tight">
                            Sanmati Spectrum<br />of Knowledge
                        </h1>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            Your gateway to publishing peer-reviewed multidisciplinary research with global reach and CrossRef DOI support.
                        </p>
                    </div>

                    <div className="space-y-3">
                        {TRUST.map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-blue-100">
                                <Icon className="w-4 h-4 text-blue-300 shrink-0" />
                                {text}
                            </div>
                        ))}
                    </div>

                    <div className="pt-4 border-t border-white/15 text-[11px] text-blue-200 font-bold uppercase tracking-widest">
                        ISSN 3108-1819 · CrossRef DOI · CC-BY 4.0
                    </div>
                </div>
            </div>

            {/* ── Right form panel ── */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 bg-slate-50">
                <div className="w-full max-w-md space-y-8">

                    {/* Mobile logo */}
                    <div className="lg:hidden flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-center">
                            <div className="text-sm font-heading font-bold text-slate-900">Sanmati Spectrum</div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-widest">ISSN 3108-1819</div>
                        </div>
                    </div>

                    {/* Form card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6"
                    >
                        <div className="space-y-1">
                            <h2 className="text-2xl font-heading font-bold text-slate-900">Welcome back</h2>
                            <p className="text-sm text-slate-500 font-medium">Sign in to your author, reviewer, or editor portal.</p>
                        </div>

                        {status && (
                            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-700 font-medium">
                                {status}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label htmlFor="login-email" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                                    Academic Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                    <input
                                        id="login-email"
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

                            {/* Password */}
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="login-password" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                                        Password
                                    </label>
                                    {canResetPassword && (
                                        <Link href="/forgot-password" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                                            Forgot password?
                                        </Link>
                                    )}
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                    <input
                                        id="login-password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        autoComplete="current-password"
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        placeholder="••••••••••"
                                        className={`w-full bg-slate-50 border pl-10 pr-11 py-3 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-300 transition-all duration-200 ${errors.password ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(p => !p)}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-xs text-red-600 font-medium">{errors.password}</p>}
                            </div>

                            {/* Remember */}
                            <label className="flex items-center gap-2.5 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={e => setData('remember', e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                />
                                <span className="text-xs font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                                    Keep me signed in for 30 days
                                </span>
                            </label>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
                            >
                                {processing ? (
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Sign In to Portal
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-slate-200" />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-3 bg-white text-xs text-slate-400 font-medium">New to Sanmati Spectrum?</span>
                            </div>
                        </div>

                        <Link
                            href="/register"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:border-blue-300 hover:text-blue-700 font-bold text-sm transition-all duration-200"
                        >
                            Create a Researcher Account
                        </Link>
                    </motion.div>

                    <p className="text-center text-[11px] text-slate-400 font-medium">
                        By signing in, you agree to our{' '}
                        <Link href="/publication-policy/ethics" className="text-blue-600 hover:underline font-bold">Publication Ethics</Link>
                        {' '}and{' '}
                        <Link href="/compliance" className="text-blue-600 hover:underline font-bold">Terms of Use</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
