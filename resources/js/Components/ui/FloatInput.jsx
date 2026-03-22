import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function FloatInput({
    id,
    type = 'text',
    label,
    value,
    onChange,
    error,
    success,
    required,
    className = '',
    textarea = false,
    rows = 4,
    ...props
}) {
    const [focused, setFocused] = useState(false);
    const hasValue = value !== undefined && value !== null && String(value).length > 0;
    const isFloating = focused || hasValue;

    // Styling based on state
    let borderColor = 'border-slate-300 dark:border-slate-600';
    let labelColor = 'text-slate-500 dark:text-slate-400';
    let ringColor = 'focus:ring-primary/20 dark:focus:ring-primary/30';
    
    if (error) {
        borderColor = 'border-red-500 dark:border-red-500';
        labelColor = 'text-red-500 dark:text-red-400';
        ringColor = 'focus:ring-red-500/20';
    } else if (success) {
        borderColor = 'border-emerald-500 dark:border-emerald-500';
        labelColor = 'text-emerald-600 dark:text-emerald-400';
        ringColor = 'focus:ring-emerald-500/20';
    } else if (focused) {
        borderColor = 'border-primary dark:border-primary';
        labelColor = 'text-primary dark:text-primary';
    }

    const InputComponent = textarea ? 'textarea' : 'input';

    return (
        <div className={`relative w-full ${className}`}>
            <div className="relative">
                <InputComponent
                    id={id}
                    type={textarea ? undefined : type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    required={required}
                    rows={textarea ? rows : undefined}
                    className={`block w-full px-4 ${textarea ? 'py-4' : 'h-14'} bg-white dark:bg-slate-900 border ${borderColor} rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-4 ${ringColor} transition-all duration-300 peer disabled:opacity-50 disabled:cursor-not-allowed`}
                    {...props}
                />
                
                {/* Floating Label */}
                <label
                    htmlFor={id}
                    className={`absolute left-4 transition-all duration-300 pointer-events-none bg-white dark:bg-slate-900 px-1 ${
                        isFloating 
                            ? `-top-2.5 text-xs font-bold ${labelColor}` 
                            : `${textarea ? 'top-4' : 'top-1/2 -translate-y-1/2'} text-base ${labelColor}`
                    }`}
                >
                    {label} {required && <span className="text-red-500 ml-0.5">*</span>}
                </label>

                {/* State Icons */}
                <AnimatePresence>
                    {(error || success) && !textarea && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        >
                            {error ? (
                                <AlertCircle className="w-5 h-5 text-red-500" />
                            ) : (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Helper Text / Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs font-medium text-red-500 mt-1.5 ml-1"
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
