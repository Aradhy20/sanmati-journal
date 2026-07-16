import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
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
export {
  Modal as M
};
