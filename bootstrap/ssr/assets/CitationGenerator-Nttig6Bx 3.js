import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Copy } from "lucide-react";
import toast from "react-hot-toast";
function Modal({ isOpen, onClose, title, children, size = "md" }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, onClose]);
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
    full: "max-w-[95vw] h-[95vh]"
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6", role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-title", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm",
        onClick: onClose,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
        transition: { type: "spring", damping: 25, stiffness: 300 },
        className: `relative w-full ${sizeClasses[size]} bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800", children: [
            title && /* @__PURE__ */ jsx("h2", { id: "modal-title", className: "text-xl font-serif font-bold text-slate-900 dark:text-white", children: title }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "p-2 ml-auto -mr-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ds-accent/50",
                "aria-label": "Close modal",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto px-6 py-6 custom-scrollbar", children })
        ]
      }
    )
  ] }) });
}
function CitationGenerator({ paper }) {
  const [activeFormat, setActiveFormat] = useState("apa");
  const generateAPA = () => {
    var _a, _b, _c;
    const year = ((_a = paper.issue) == null ? void 0 : _a.year) || (/* @__PURE__ */ new Date()).getFullYear();
    const volumeStr = ((_b = paper.issue) == null ? void 0 : _b.volume) ? `, ${paper.issue.volume}` : "";
    const numberStr = ((_c = paper.issue) == null ? void 0 : _c.number) ? `(${paper.issue.number})` : "";
    return `${paper.authors} (${year}). ${paper.title}. Sanmati Journal${volumeStr}${numberStr}.`;
  };
  const generateMLA = () => {
    var _a, _b, _c;
    const year = ((_a = paper.issue) == null ? void 0 : _a.year) || (/* @__PURE__ */ new Date()).getFullYear();
    const volumeStr = ((_b = paper.issue) == null ? void 0 : _b.volume) ? `, vol. ${paper.issue.volume}` : "";
    const numberStr = ((_c = paper.issue) == null ? void 0 : _c.number) ? `, no. ${paper.issue.number}` : "";
    return `${paper.authors}. "${paper.title}." Sanmati Journal${volumeStr}${numberStr}, ${year}.`;
  };
  const generateBibTeX = () => {
    var _a, _b, _c;
    const year = ((_a = paper.issue) == null ? void 0 : _a.year) || (/* @__PURE__ */ new Date()).getFullYear();
    const authorStr = paper.authors.replace(/,/g, " and");
    const citationKey = `${paper.authors.split(" ")[0].replace(/[^a-zA-Z]/g, "")}${year}`;
    return `@article{${citationKey},
    title = {${paper.title}},
    author = {${authorStr}},
    journal = {Sanmati Journal},
    year = {${year}},
    volume = {${((_b = paper.issue) == null ? void 0 : _b.volume) || ""}},
    number = {${((_c = paper.issue) == null ? void 0 : _c.number) || ""}}
}`;
  };
  const citations = {
    apa: generateAPA(),
    mla: generateMLA(),
    bibtex: generateBibTeX()
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(citations[activeFormat]).then(() => toast.success("Citation copied to clipboard!")).catch(() => toast.error("Failed to copy."));
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "flex border-b border-slate-200 bg-white", children: ["apa", "mla", "bibtex"].map((format) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setActiveFormat(format),
        className: `flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${activeFormat === format ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
        children: format
      },
      format
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleCopy,
          className: "p-2 text-slate-400 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-lg transition-all",
          title: "Copy to Clipboard",
          children: /* @__PURE__ */ jsx(Copy, { className: "w-5 h-5" })
        }
      ) }),
      /* @__PURE__ */ jsx("pre", { className: "text-slate-800 font-serif leading-relaxed text-sm pr-12 whitespace-pre-wrap break-words", children: citations[activeFormat] })
    ] })
  ] });
}
export {
  CitationGenerator as C,
  Modal as M
};
