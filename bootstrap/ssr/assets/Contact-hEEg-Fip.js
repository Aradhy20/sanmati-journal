import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { AlertCircle, CheckCircle2, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import toast from "react-hot-toast";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-kJDDWJEG.js";
import { AnimatePresence, motion } from "framer-motion";
function FloatInput({
  id,
  type = "text",
  label,
  value,
  onChange,
  error,
  success,
  required,
  className = "",
  textarea = false,
  rows = 4,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value !== void 0 && value !== null && String(value).length > 0;
  const isFloating = focused || hasValue;
  let borderColor = "border-slate-300 dark:border-slate-600";
  let labelColor = "text-slate-500 dark:text-slate-400";
  let ringColor = "focus:ring-primary/20 dark:focus:ring-primary/30";
  if (error) {
    borderColor = "border-red-500 dark:border-red-500";
    labelColor = "text-red-500 dark:text-red-400";
    ringColor = "focus:ring-red-500/20";
  } else if (success) {
    borderColor = "border-emerald-500 dark:border-emerald-500";
    labelColor = "text-emerald-600 dark:text-emerald-400";
    ringColor = "focus:ring-emerald-500/20";
  } else if (focused) {
    borderColor = "border-primary dark:border-primary";
    labelColor = "text-primary dark:text-primary";
  }
  const InputComponent = textarea ? "textarea" : "input";
  return /* @__PURE__ */ jsxs("div", { className: `relative w-full ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        InputComponent,
        {
          id,
          type: textarea ? void 0 : type,
          value,
          onChange,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          required,
          rows: textarea ? rows : void 0,
          className: `block w-full px-4 ${textarea ? "py-4" : "h-14"} bg-white dark:bg-slate-900 border ${borderColor} rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-4 ${ringColor} transition-all duration-300 peer disabled:opacity-50 disabled:cursor-not-allowed`,
          ...props
        }
      ),
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: id,
          className: `absolute left-4 transition-all duration-300 pointer-events-none bg-white dark:bg-slate-900 px-1 ${isFloating ? `-top-2.5 text-xs font-bold ${labelColor}` : `${textarea ? "top-4" : "top-1/2 -translate-y-1/2"} text-base ${labelColor}`}`,
          children: [
            label,
            " ",
            required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(AnimatePresence, { children: (error || success) && !textarea && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.5 },
          className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none",
          children: error ? /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-red-500" }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-500" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0, y: -10, height: 0 },
        animate: { opacity: 1, y: 0, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "text-xs font-medium text-red-500 mt-1.5 ml-1",
        children: error
      }
    ) })
  ] });
}
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
function Contact() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Contact Us",
        description: "Get in touch with the Sanmati Journal Editorial Office for submissions and queries."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Contact Us",
        breadcrumb: "Contact",
        subtitle: "Reach out to our Editorial Office"
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-6 -mt-16 relative z-20 mb-10 lg:mb-20", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      { icon: MapPin, title: "Registry Office", desc: "B-002 Faculty Block TMU Campus, Delhi Road Moradabad (U.P) 244001", color: "from-dark to-dark/90", iconColor: "text-secondary" },
      { icon: Phone, title: "Strategic Liaison", desc: "+91 8979782949\n+91 7999525735", color: "from-primary to-primary-dark", iconColor: "text-white" },
      { icon: Mail, title: "Manuscript Queries", desc: "sanmatijournal@gmail.com", color: "from-secondary to-secondary-dark", iconColor: "text-white" },
      { icon: Clock, title: "Operational Hours", desc: "Mon - Fri\n10:00 AM - 6:00 PM (IST)", color: "from-surface to-white", iconColor: "text-primary", border: "border-gray-100" }
    ].map((item, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: `relative p-8 rounded-[2rem] shadow-xl group overflow-hidden bg-gradient-to-br ${item.color} ${item.border || ""}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-6 opacity-[0.05] group-hover:scale-110 transition-transform duration-700", children: /* @__PURE__ */ jsx(item.icon, { className: "w-20 h-20" }) }),
          /* @__PURE__ */ jsx("div", { className: `w-12 h-12 mb-6 rounded-xl flex items-center justify-center ${item.color === "from-surface to-white" ? "bg-primary/10" : "bg-white/10"}`, children: /* @__PURE__ */ jsx(item.icon, { className: `w-6 h-6 ${item.iconColor}` }) }),
          /* @__PURE__ */ jsx("h3", { className: `text-sm font-black uppercase tracking-widest mb-3 ${item.color === "from-surface to-white" ? "text-dark" : "text-white"}`, children: item.title }),
          /* @__PURE__ */ jsx("p", { className: `text-xs font-medium leading-relaxed whitespace-pre-line ${item.color === "from-surface to-white" ? "text-muted" : "text-white/60"}`, children: item.desc })
        ]
      },
      i
    )) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 pb-32", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "lg:col-span-12 xl:col-span-5 relative group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" }),
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-dark", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: "/fistudy-assets/resources/about-three-img-1.jpg",
              alt: "Editorial Office",
              className: "w-full h-full object-cover min-h-[500px] lg:min-h-[600px] opacity-60 group-hover:opacity-40 transition-opacity duration-700"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.4em]", children: "Administration" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-4", children: "The Editorial Office" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/40 text-sm leading-relaxed mb-6 font-medium italic", children: '"Transparent communication is the cornerstone of scholarly integrity. Our team is dedicated to supporting authors at every stage of the peer-review journey."' }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border border-white/10 overflow-hidden", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/fistudy-assets/team/team-1-1.jpg", alt: "Editor", className: "w-full h-full object-cover" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-sm leading-none mb-1", children: "Dr. Namrta Jain" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/30 text-[10px] uppercase font-black tracking-widest leading-none", children: "Editor-in-Chief" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, transition: { delay: 0.1 }, className: "lg:col-span-12 xl:col-span-7", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[11px] uppercase tracking-[0.4em]", children: "Inquiry Protocol" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl md:text-5xl font-serif font-bold text-dark mb-4 leading-tight", children: [
          "Start a ",
          /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Scholarly Dialogue" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted text-lg mb-12 max-w-xl", children: "For manuscript submissions, institutional subscriptions, or editorial inquiries, please utilize the secure channel below." }),
        /* @__PURE__ */ jsx("div", { className: "bg-white/50 backdrop-blur-sm border border-gray-100 p-8 md:p-12 rounded-[3rem] shadow-sm", children: /* @__PURE__ */ jsx(ContactForm, {}) })
      ] }) })
    ] }) })
  ] });
}
function ContactForm() {
  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/contact", {
      onSuccess: () => {
        reset();
        toast.success("Protocol Engaged: Your message has been transmitted successfully.");
      },
      onError: () => {
        toast.error("Transmission Failed: Please check your inputs and try again.");
      }
    });
  };
  return /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(
        FloatInput,
        {
          id: "firstName",
          name: "firstName",
          type: "text",
          label: "Given Name",
          value: data.firstName,
          onChange: (e) => setData("firstName", e.target.value),
          error: errors.firstName,
          disabled: processing,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        FloatInput,
        {
          id: "lastName",
          name: "lastName",
          type: "text",
          label: "Family Name",
          value: data.lastName,
          onChange: (e) => setData("lastName", e.target.value),
          error: errors.lastName,
          disabled: processing,
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(
        FloatInput,
        {
          id: "email",
          name: "email",
          type: "email",
          label: "Email Channel",
          value: data.email,
          onChange: (e) => setData("email", e.target.value),
          error: errors.email,
          disabled: processing,
          required: true
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "subject",
            name: "subject",
            title: "Subject",
            className: "block w-full px-4 h-14 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50",
            value: data.subject,
            onChange: (e) => setData("subject", e.target.value),
            disabled: processing,
            children: [
              /* @__PURE__ */ jsx("option", { children: "General Inquiry" }),
              /* @__PURE__ */ jsx("option", { children: "Submission Query" }),
              /* @__PURE__ */ jsx("option", { children: "Payment Issue" }),
              /* @__PURE__ */ jsx("option", { children: "Technical Support" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "absolute left-4 -top-2.5 bg-white dark:bg-slate-900 px-1 text-xs font-bold text-slate-500 dark:text-slate-400", children: "Inquiry Node" }),
        errors.subject && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-xs mt-1.5 ml-1 font-medium", children: errors.subject })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      FloatInput,
      {
        id: "message",
        name: "message",
        textarea: true,
        rows: 5,
        label: "Discourse Content",
        value: data.message,
        onChange: (e) => setData("message", e.target.value),
        error: errors.message,
        disabled: processing,
        required: true
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "submit",
        className: "w-full py-5 bg-dark dark:bg-primary-dark text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-secondary dark:hover:bg-primary transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed text-xs shadow-2xl hover:-translate-y-1",
        disabled: processing,
        children: [
          processing ? "Transmitting..." : "Dispatch Inquiry",
          /* @__PURE__ */ jsx(Send, { className: `w-4 h-4 transition-transform duration-500 ${processing ? "translate-x-12 opacity-0" : ""}` })
        ]
      }
    )
  ] });
}
export {
  Contact as default
};
