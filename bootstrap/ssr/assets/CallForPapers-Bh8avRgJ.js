import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-EqZlJ2m3.js";
import { UploadCloud, FileText, CheckCircle, X, AlertCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { usePage, useForm } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
function DropZone({
  id,
  label = "Upload Manuscript PDF",
  accept = ".pdf,application/pdf",
  maxSizeMB = 10,
  file,
  onFileSelect,
  error,
  className = ""
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
    if (selectedFile.type !== "application/pdf" && !selectedFile.name.toLowerCase().endsWith(".pdf")) {
      setLocalError("Please upload a valid PDF file.");
      return false;
    }
    if (selectedFile.size > maxSizeMB * 1024 * 1024) {
      setLocalError(`File size must be less than ${maxSizeMB}MB.`);
      return false;
    }
    return true;
  };
  const handleDrop = useCallback((e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const droppedFile = (_a = e.dataTransfer.files) == null ? void 0 : _a[0];
    if (validateFile(droppedFile)) {
      onFileSelect(droppedFile);
    }
  }, [onFileSelect, maxSizeMB]);
  const handleFileChange = (e) => {
    var _a;
    const selectedFile = (_a = e.target.files) == null ? void 0 : _a[0];
    if (validateFile(selectedFile)) {
      onFileSelect(selectedFile);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `w-full ${className}`, children: [
    /* @__PURE__ */ jsxs("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2", children: [
      label,
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        animate: {
          borderColor: activeError ? "#ef4444" : isDragging ? "#687EFF" : "#cbd5e1",
          backgroundColor: isDragging ? "rgba(104, 126, 255, 0.05)" : "rgba(255, 255, 255, 0)"
        },
        className: `relative w-full rounded-2xl border-2 border-dashed p-8 text-center transition-colors cursor-pointer group ${activeError ? "bg-red-50 hover:bg-red-100 dark:bg-red-900/10" : "hover:bg-slate-50 dark:hover:bg-slate-800"}`,
        onDragEnter: handleDragEnter,
        onDragOver: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        onClick: () => {
          var _a;
          return (_a = fileInputRef.current) == null ? void 0 : _a.click();
        },
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id,
              type: "file",
              ref: fileInputRef,
              className: "hidden",
              accept,
              onChange: handleFileChange
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: !file ? /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              className: "flex flex-col items-center pointer-events-none",
              children: [
                /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${activeError ? "bg-red-100 text-red-500" : isDragging ? "bg-primary/20 text-primary" : "bg-slate-100 text-slate-400 group-hover:text-primary group-hover:bg-primary/10"}`, children: /* @__PURE__ */ jsx(UploadCloud, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ jsx("h4", { className: "text-base font-bold text-slate-700 dark:text-slate-200 mb-1", children: "Drag & drop your manuscript here" }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: [
                  "PDF format only. Maximum file size ",
                  maxSizeMB,
                  "MB."
                ] })
              ]
            },
            "empty"
          ) : /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              className: "flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 flex-1 overflow-hidden", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-emerald-100 dark:bg-emerald-800/50 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0", children: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "text-left flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-900 dark:text-white truncate", children: file.name }),
                    /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5", children: [
                      (file.size / (1024 * 1024)).toFixed(2),
                      " MB"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-emerald-500 hidden sm:block flex-shrink-0" })
                ] }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      onFileSelect(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    },
                    className: "px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-100 rounded-lg transition-colors flex items-center gap-1 flex-shrink-0",
                    children: [
                      /* @__PURE__ */ jsx(X, { className: "w-3.5 h-3.5" }),
                      " Remove"
                    ]
                  }
                )
              ]
            },
            "filled"
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: activeError && /* @__PURE__ */ jsxs(
      motion.p,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "text-sm font-medium text-red-500 mt-2 flex items-center gap-1.5",
        children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4" }),
          " ",
          activeError
        ]
      }
    ) })
  ] });
}
function CallForPapers() {
  var _a;
  const { flash } = usePage().props;
  const [step, setStep] = useState(1);
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    abstract: "",
    keywords: "",
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
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("abstract", data.abstract);
    formData.append("keywords", data.keywords);
    formData.append("consent", data.consent);
    formData.append("manuscript", data.manuscript);
    formData.append("_replyto", "sanmatijournal@gmail.com");
    try {
      const response = await fetch("https://formspree.io/f/PLACEHOLDER_ENDPOINT", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      if (response.ok) {
        reset();
        setStep(4);
        toast.success("Manuscript submitted successfully. Tracking ID generated.");
      } else {
        toast.error("Submission failed. Please check your Formspree configuration.");
      }
    } catch (error) {
      toast.error("An error occurred during submission.");
    }
  };
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-[#eef1ff] min-h-screen", children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Manuscript Submission System",
        breadcrumb: "Submission Portal",
        subtitle: "Secure End-to-End Peer Review Processing"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative", children: [
      step < 4 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 mb-12 relative z-0", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute top-1/2 left-0 h-1 bg-blue-600 -z-10 -translate-y-1/2 rounded-full transition-all duration-500", style: { width: `${(step - 1) * 50}%` } }),
        [
          { num: 1, label: "Metadata", icon: FileText },
          { num: 2, label: "Upload PDF", icon: UploadCloud },
          { num: 3, label: "Final Review", icon: ShieldCheck }
        ].map((s) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3 shadow-md transition-colors duration-500 ${step >= s.num ? "bg-blue-600 text-white border-4 border-blue-200" : "bg-white text-gray-400 border-4 border-gray-100"}`, children: /* @__PURE__ */ jsx(s.icon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("span", { className: `text-[11px] uppercase tracking-widest font-black ${step >= s.num ? "text-blue-900" : "text-gray-400"}`, children: s.label })
        ] }, s.num))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative", children: /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-12", children: [
        step === 4 && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "text-center py-12", children: [
          /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-12 h-12 text-green-600" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4", children: "Submission Successful!" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-lg max-w-lg mx-auto mb-10", children: "Your manuscript has been securely encrypted and routed to our editorial board. You will receive an email confirmation shortly." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8 max-w-sm mx-auto text-left", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-1", children: "Tracking ID" }),
            /* @__PURE__ */ jsxs("p", { className: "font-mono text-slate-900 font-bold text-lg", children: [
              "SJ-",
              Math.floor(1e5 + Math.random() * 9e5)
            ] })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => setStep(1), className: "text-blue-600 font-bold hover:underline", children: "Submit another paper" })
        ] }),
        step < 4 && /* @__PURE__ */ jsx("form", { onSubmit: step === 3 ? submit : handleNextStep, encType: "multipart/form-data", children: /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
          step === 1 && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-slate-900 mb-2", children: "Manuscript Details" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "Basic information for your paper." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-2xl w-full", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 mb-2", children: "Full Research Title *" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: data.title,
                    onChange: (e) => setData("title", e.target.value),
                    className: "w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none",
                    placeholder: "Example: Teaching with AI",
                    required: true
                  }
                ),
                errors.title && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-2 font-medium", children: errors.title })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 mb-2", children: "Summary of your work *" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    value: data.abstract,
                    onChange: (e) => setData("abstract", e.target.value),
                    rows: "5",
                    className: "w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none",
                    placeholder: "Provide a 200-300 word summary of methodology and findings.",
                    required: true
                  }
                ),
                errors.abstract && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-2 font-medium", children: errors.abstract })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 mb-2", children: "Index Keywords" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: data.keywords,
                    onChange: (e) => setData("keywords", e.target.value),
                    className: "w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none",
                    placeholder: "Comma separated: Education, AI, Pedagogy"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-start", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: handleNextStep, disabled: !data.title || !data.abstract, className: "px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed", children: [
              "Proceed to Upload ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
            ] }) })
          ] }, "step1"),
          step === 2 && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-slate-900 mb-2", children: "Secure File Transfer" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "Upload your blinded manuscript (PDF format only, max 10MB)." })
            ] }),
            /* @__PURE__ */ jsx(
              DropZone,
              {
                id: "manuscript-upload",
                label: "Upload Manuscript PDF",
                accept: ".pdf,application/pdf",
                maxSizeMB: 10,
                file: data.manuscript,
                onFileSelect: (file) => setData("manuscript", file),
                error: errors.manuscript
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col-reverse sm:flex-row justify-between gap-4", children: [
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setStep(1), className: "w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-gray-200 font-bold rounded-xl hover:bg-slate-50 transition-colors", children: "Back" }),
              /* @__PURE__ */ jsxs("button", { type: "submit", disabled: !data.manuscript, className: "w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex justify-center items-center gap-2 group disabled:opacity-50", children: [
                "Final Step ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
              ] })
            ] })
          ] }, "step2"),
          step === 3 && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-slate-900 mb-2", children: "Final Verification" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "Please review your submission and agree to our academic integrity policies." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "bg-slate-50 rounded-2xl p-8 mb-8 border border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-widest text-slate-400 mb-2", children: "Title" }),
                /* @__PURE__ */ jsx("p", { className: "font-medium text-slate-900 line-clamp-2", children: data.title })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-widest text-slate-400 mb-2", children: "Attached File" }),
                /* @__PURE__ */ jsxs("p", { className: "font-medium text-blue-600 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
                  " ",
                  (_a = data.manuscript) == null ? void 0 : _a.name
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mb-10", children: /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-4 cursor-pointer", children: [
              /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: data.consent,
                  onChange: (e) => setData("consent", e.target.checked),
                  className: "w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600",
                  required: true
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-slate-900 mb-1", children: "Declaration of Originality" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 leading-relaxed", children: "I certify that this manuscript is my original work, has not been published previously, and is not pending publication elsewhere. I agree to the Journal's open-access policies." })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-3 mb-8", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-green-600" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest", children: "Protected by reCAPTCHA Enterprise" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-gray-100 pt-8", children: [
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setStep(2), disabled: processing, className: "px-8 py-4 bg-white text-slate-700 border border-gray-200 font-bold rounded-xl hover:bg-slate-50 transition-colors disabled:opacity-50", children: "Back" }),
              /* @__PURE__ */ jsxs("button", { type: "submit", disabled: processing || !data.consent, className: "px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:shadow-none relative overflow-hidden group", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" }),
                processing ? "Encrypting & Submitting..." : "Submit Manuscript Officially"
              ] })
            ] })
          ] }, "step3")
        ] }) })
      ] }) })
    ] })
  ] }) });
}
export {
  CallForPapers as default
};
