import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { P as PageHeader } from "./PageHeader-DKpFkYbo.js";
import { M as MainLayout } from "./MainLayout-CN4PiKyW.js";
import { UploadCloud, FileText, CheckCircle, X, AlertCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { usePage, useForm } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
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
  var _a, _b;
  const { flash } = usePage().props;
  const [step, setStep] = useState(1);
  const [trackingId, setTrackingId] = useState(null);
  const { data, setData, post, processing, errors, reset, setError, clearErrors } = useForm({
    title: "",
    abstract: "",
    keywords: "",
    author_name: "",
    author_email: "",
    author_phone: "",
    institution: "",
    subject_area: "",
    manuscript: null,
    consent: false,
    website: ""
    // Honeypot: should always be empty
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);
  useEffect(() => {
    var _a2;
    if ((_a2 = flash == null ? void 0 : flash.success) == null ? void 0 : _a2.tracking_id) {
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
      post(route("submission-guidelines.call.store"), {
        forceFormData: true,
        onSuccess: (page) => {
          var _a2;
          const successData = (_a2 = page.props.flash) == null ? void 0 : _a2.success;
          if (successData == null ? void 0 : successData.tracking_id) {
            setTrackingId(successData.tracking_id);
            reset();
            setStep(4);
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 }
            });
            Swal.fire({
              title: "Submission Successful!",
              html: `Your manuscript has been securely routed.<br><br><b>Tracking ID: ${successData.tracking_id}</b>`,
              icon: "success",
              confirmButtonColor: "#0b2038",
              confirmButtonText: "Great, thanks!"
            });
          }
        },
        onError: (errs) => {
          const errorMessage = errs.error || "Submission failed. Please check for errors.";
          toast.error(errorMessage);
          const step1Fields = ["title", "abstract", "author_name", "author_email"];
          const hasStep1Errors = Object.keys(errs).some((key) => step1Fields.includes(key));
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
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 min-h-screen", children: [
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
        /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute top-1/2 left-0 h-1 bg-secondary -z-10 -translate-y-1/2 rounded-full transition-all duration-500", style: { width: `${(step - 1) * 50}%` } }),
        [
          { num: 1, label: "Metadata", icon: FileText },
          { num: 2, label: "Upload PDF", icon: UploadCloud },
          { num: 3, label: "Final Review", icon: ShieldCheck }
        ].map((s) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3 shadow-md transition-colors duration-500 ${step >= s.num ? "bg-secondary text-white border-4 border-secondary/20" : "bg-white text-gray-400 border-4 border-gray-100"}`, children: /* @__PURE__ */ jsx(s.icon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("span", { className: `text-[11px] uppercase tracking-widest font-black ${step >= s.num ? "text-primary" : "text-gray-400"}`, children: s.label })
        ] }, s.num))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[2rem] shadow-xl border border-slate-100 relative", children: /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-12", children: [
        step === 4 && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "text-center py-12", children: [
          /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-12 h-12 text-green-600" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4", children: "Submission Successful!" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-lg max-w-lg mx-auto mb-10", children: "Your manuscript has been securely encrypted and routed to our editorial board. You will receive an email confirmation shortly." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8 max-w-sm mx-auto text-left", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-1", children: "Tracking ID" }),
            /* @__PURE__ */ jsx("p", { className: "font-mono text-slate-900 font-bold text-lg", children: trackingId || "SJ-PENDING" })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => {
            setStep(1);
            setTrackingId(null);
            clearErrors();
          }, className: "text-secondary font-bold hover:underline", children: "Submit another paper" })
        ] }),
        step < 4 && /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, encType: "multipart/form-data", children: [
          /* @__PURE__ */ jsxs("div", { style: { position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, pointerEvents: "none" }, "aria-hidden": "true", tabIndex: "-1", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "website_hp", children: "Website (leave blank)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "website_hp",
                name: "website",
                value: data.website || "",
                onChange: (e) => setData("website", e.target.value),
                autoComplete: "off",
                tabIndex: "-1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
            step === 1 && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-slate-900 mb-2", children: "Manuscript Details" }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "Provide the core metadata for your research paper." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "title", className: "block text-sm font-bold text-slate-700 mb-2", children: "Full Research Title *" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        id: "title",
                        name: "title",
                        value: data.title,
                        onChange: (e) => setData("title", e.target.value),
                        className: `w-full px-5 py-4 rounded-xl border ${errors.title ? "border-red-300 bg-red-50" : "border-gray-200 bg-slate-50"} focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none`,
                        placeholder: "Example: Teaching with AI",
                        required: true
                      }
                    ),
                    errors.title && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-2 font-medium", children: errors.title })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "abstract", className: "block text-sm font-bold text-slate-700 mb-2", children: "Summary of your work *" }),
                    /* @__PURE__ */ jsx(
                      "textarea",
                      {
                        id: "abstract",
                        name: "abstract",
                        value: data.abstract,
                        onChange: (e) => setData("abstract", e.target.value),
                        rows: "7",
                        className: `w-full px-5 py-4 rounded-xl border ${errors.abstract ? "border-red-300 bg-red-50" : "border-gray-200 bg-slate-50"} focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none resize-none`,
                        placeholder: "Provide a 200-300 word summary of methodology and findings.",
                        required: true
                      }
                    ),
                    errors.abstract && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-2 font-medium", children: errors.abstract })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "keywords", className: "block text-sm font-bold text-slate-700 mb-2", children: "Index Keywords" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        id: "keywords",
                        name: "keywords",
                        value: data.keywords,
                        onChange: (e) => setData("keywords", e.target.value),
                        className: "w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none",
                        placeholder: "Comma separated: Education, AI, Pedagogy"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-slate-900 mb-2", children: "Primary Author Identity" }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "Who should we contact regarding this manuscript?" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "author_name", className: "block text-sm font-bold text-slate-700 mb-2", children: "Full Legal Name *" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        id: "author_name",
                        name: "author_name",
                        value: data.author_name,
                        onChange: (e) => setData("author_name", e.target.value),
                        className: `w-full px-5 py-4 rounded-xl border ${errors.author_name ? "border-red-300 bg-red-50" : "border-gray-200 bg-slate-50"} focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none`,
                        placeholder: "Dr. Aradhya Jain",
                        required: true
                      }
                    ),
                    errors.author_name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-2 font-medium", children: errors.author_name })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "author_email", className: "block text-sm font-bold text-slate-700 mb-2", children: "Official Email ID *" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "email",
                        id: "author_email",
                        name: "author_email",
                        value: data.author_email,
                        onChange: (e) => setData("author_email", e.target.value),
                        className: `w-full px-5 py-4 rounded-xl border ${errors.author_email ? "border-red-300 bg-red-50" : "border-gray-200 bg-slate-50"} focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none`,
                        placeholder: "aradhya@university.edu",
                        required: true
                      }
                    ),
                    errors.author_email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-2 font-medium", children: errors.author_email })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "author_phone", className: "block text-sm font-bold text-slate-700 mb-2", children: "Contact Number" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        id: "author_phone",
                        name: "author_phone",
                        value: data.author_phone,
                        onChange: (e) => setData("author_phone", e.target.value),
                        className: "w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none",
                        placeholder: "+91 XXXXXXXXXX"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "institution", className: "block text-sm font-bold text-slate-700 mb-2", children: "Affiliated Institution" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        id: "institution",
                        name: "institution",
                        value: data.institution,
                        onChange: (e) => setData("institution", e.target.value),
                        className: "w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none",
                        placeholder: "University Name / Research Center"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "subject_area", className: "block text-sm font-bold text-slate-700 mb-2", children: "Primary Subject Area" }),
                    /* @__PURE__ */ jsxs(
                      "select",
                      {
                        id: "subject_area",
                        name: "subject_area",
                        title: "Subject Area",
                        value: data.subject_area,
                        onChange: (e) => setData("subject_area", e.target.value),
                        className: "w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none appearance-none",
                        children: [
                          /* @__PURE__ */ jsx("option", { value: "", children: "Select Domain" }),
                          /* @__PURE__ */ jsx("option", { value: "Arts & Humanities", children: "Arts & Humanities" }),
                          /* @__PURE__ */ jsx("option", { value: "Social Sciences", children: "Social Sciences" }),
                          /* @__PURE__ */ jsx("option", { value: "Commerce & Management", children: "Commerce & Management" }),
                          /* @__PURE__ */ jsx("option", { value: "Science & Technology", children: "Science & Technology" }),
                          /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-end border-t border-slate-100 pt-8", children: /* @__PURE__ */ jsxs("button", { type: "submit", disabled: !data.title || !data.abstract || !data.author_name || !data.author_email, className: "px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-secondary transition-all flex items-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-secondary/20", children: [
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
                /* @__PURE__ */ jsxs("button", { type: "submit", disabled: !data.manuscript, className: "w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-colors flex justify-center items-center gap-2 group disabled:opacity-50", children: [
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
              /* @__PURE__ */ jsx("div", { className: "bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12", children: [
                /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-widest text-slate-400 mb-2", children: "Manuscript Title" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-slate-900 leading-relaxed", children: data.title })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-widest text-slate-400 mb-2", children: "Corresponding Author" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-slate-900", children: data.author_name }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mt-1", children: data.author_email })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-widest text-slate-400 mb-2", children: "Institution" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-slate-900", children: data.institution || "Not Specified" })
                ] }),
                data.manuscript && /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-widest text-slate-400 mb-2", children: "Attached File" }),
                    /* @__PURE__ */ jsxs("p", { className: "font-medium text-secondary flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
                      /* @__PURE__ */ jsx("span", { className: "truncate max-w-[200px]", children: (_a = data.manuscript) == null ? void 0 : _a.name })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-widest text-slate-400 mb-2", children: "File Size" }),
                    /* @__PURE__ */ jsxs("p", { className: "font-medium text-slate-900", children: [
                      ((_b = data.manuscript) == null ? void 0 : _b.size) ? (data.manuscript.size / (1024 * 1024)).toFixed(2) : "0.00",
                      " MB"
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "bg-secondary/5 border border-secondary/10 rounded-2xl p-6 mb-10", children: /* @__PURE__ */ jsxs("label", { htmlFor: "consent", className: "flex items-start gap-4 cursor-pointer", children: [
                /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "consent",
                    name: "consent",
                    checked: data.consent,
                    onChange: (e) => setData("consent", e.target.checked),
                    className: "w-5 h-5 rounded border-gray-300 text-secondary focus:ring-secondary",
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
                /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest", children: "Protected by Secure Gate" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between gap-4 border-t border-slate-100 pt-8 mt-8", children: [
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setStep(2), disabled: processing, className: "w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-gray-200 font-bold rounded-xl hover:bg-slate-50 transition-colors disabled:opacity-50", children: "Back" }),
                /* @__PURE__ */ jsxs("button", { type: "submit", disabled: processing || !data.consent, className: "w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-colors flex justify-center items-center gap-2 group disabled:opacity-50 relative overflow-hidden", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" }),
                  processing ? "Submitting..." : "Submit Manuscript Officially"
                ] })
              ] })
            ] }, "step3")
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}
export {
  CallForPapers as default
};
