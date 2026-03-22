import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { useForm } from "@inertiajs/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import toast from "react-hot-toast";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-Ci4s02ir.js";
import { motion } from "framer-motion";
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
  const inputClass = "w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all outline-none disabled:opacity-50 text-sm font-medium placeholder:text-gray-300";
  const labelClass = "block text-[10px] font-black text-dark/40 uppercase tracking-[0.2em] mb-3 ml-1";
  return /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "firstName", className: labelClass, children: "First Dimension" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "firstName",
            name: "firstName",
            required: true,
            type: "text",
            placeholder: "Given Name",
            className: inputClass,
            value: data.firstName,
            onChange: (e) => setData("firstName", e.target.value),
            disabled: processing
          }
        ),
        errors.firstName && /* @__PURE__ */ jsx("div", { className: "text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest", children: errors.firstName })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "lastName", className: labelClass, children: "Last Dimension" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "lastName",
            name: "lastName",
            required: true,
            type: "text",
            placeholder: "Family Name",
            className: inputClass,
            value: data.lastName,
            onChange: (e) => setData("lastName", e.target.value),
            disabled: processing
          }
        ),
        errors.lastName && /* @__PURE__ */ jsx("div", { className: "text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest", children: errors.lastName })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: labelClass, children: "Email Channel" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            name: "email",
            required: true,
            type: "email",
            placeholder: "author@institute.edu",
            className: inputClass,
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            disabled: processing
          }
        ),
        errors.email && /* @__PURE__ */ jsx("div", { className: "text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: labelClass, children: "Inquiry Node" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "subject",
            name: "subject",
            title: "Subject",
            className: inputClass,
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
        errors.subject && /* @__PURE__ */ jsx("div", { className: "text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest", children: errors.subject })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "message", className: labelClass, children: "Discourse Content" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          name: "message",
          required: true,
          rows: 5,
          placeholder: "Describe your inquiry with scholarly precision...",
          className: inputClass,
          value: data.message,
          onChange: (e) => setData("message", e.target.value),
          disabled: processing
        }
      ),
      errors.message && /* @__PURE__ */ jsx("div", { className: "text-rose-500 text-[10px] mt-2 font-bold uppercase tracking-widest", children: errors.message })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "submit",
        className: "w-full py-5 bg-dark text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-secondary transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed text-xs shadow-2xl hover:-translate-y-1",
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
