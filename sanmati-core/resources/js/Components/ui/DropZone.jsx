import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileText, X, AlertCircle, CheckCircle } from 'lucide-react';

export default function DropZone({
    id,
    label = 'Upload Manuscript Document',
    accept = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    maxSizeMB = 20,
    required = true,
    file,
    onFileSelect,
    error,
    className = ''
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [localError, setLocalError] = useState(null);
    const fileInputRef = useRef(null);

    const activeError = error || localError;

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const validateFile = (selectedFile) => {
        setLocalError(null);
        if (!selectedFile) return false;

        const nameLower = selectedFile.name.toLowerCase();
        const validExts = ['.pdf', '.doc', '.docx'];
        const isValidExt = validExts.some(ext => nameLower.endsWith(ext));

        if (!isValidExt) {
            setLocalError('Accepted formats: DOC, DOCX, PDF.');
            return false;
        }

        if (selectedFile.size > maxSizeMB * 1024 * 1024) {
            setLocalError(`File size must be less than ${maxSizeMB}MB.`);
            return false;
        }

        return true;
    };

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files?.[0];
        if (validateFile(droppedFile)) {
            onFileSelect(droppedFile);
        }
    }, [onFileSelect, maxSizeMB]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (validateFile(selectedFile)) {
            onFileSelect(selectedFile);
        }
    };

    return (
        <div className={`w-full ${className}`}>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <motion.div
                animate={{
                    borderColor: activeError ? '#ef4444' : isDragging ? '#687EFF' : '#cbd5e1',
                    backgroundColor: isDragging ? 'rgba(104, 126, 255, 0.05)' : 'rgba(255, 255, 255, 0)'
                }}
                className={`relative w-full rounded-2xl border-2 border-dashed p-8 text-center transition-colors cursor-pointer group ${
                    activeError ? 'bg-red-50 hover:bg-red-100 dark:bg-red-900/10' : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
            >
                <input
                    id={id}
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept={accept}
                    onChange={handleFileChange}
                />

                <AnimatePresence mode="wait">
                    {!file ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex flex-col items-center pointer-events-none"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                                activeError ? 'bg-red-100 text-red-500' : isDragging ? 'bg-primary/20 text-primary' : 'bg-slate-100 text-slate-400 group-hover:text-primary group-hover:bg-primary/10'
                            }`}>
                                <UploadCloud className="w-8 h-8" />
                            </div>
                            <h4 className="text-base font-bold text-slate-700 dark:text-slate-200 mb-1">
                                Drag & drop your file here, or click to browse
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Accepted formats: DOC, DOCX, PDF. Max file size: {maxSizeMB}MB.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="filled"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800"
                            onClick={(e) => e.stopPropagation()} // Prevent re-triggering file dialog when clicking card
                        >
                            <div className="flex items-center gap-4 flex-1 overflow-hidden">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800/50 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="text-left flex-1 min-w-0">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                                        {file.name}
                                    </p>
                                    <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold mt-0.5 flex items-center gap-2">
                                        <span>{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                                        <span>•</span>
                                        <span className="uppercase text-[10px] bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-bold">{file.name.split('.').pop()}</span>
                                        <span>•</span>
                                        <span className="text-emerald-600 font-bold">Ready to submit</span>
                                    </p>
                                </div>
                                <CheckCircle className="w-5 h-5 text-emerald-500 hidden sm:block flex-shrink-0" />
                            </div>
                            
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        fileInputRef.current?.click();
                                    }}
                                    className="px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                                >
                                    Replace
                                </button>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onFileSelect(null);
                                        if(fileInputRef.current) fileInputRef.current.value = '';
                                    }}
                                    className="px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 rounded-lg transition-colors flex items-center gap-1"
                                >
                                    <X className="w-3.5 h-3.5" /> Remove
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {activeError && (
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm font-medium text-red-500 mt-2 flex items-center gap-1.5"
                    >
                        <AlertCircle className="w-4 h-4" /> {activeError}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
