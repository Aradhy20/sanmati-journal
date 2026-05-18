import { jsxs, jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { S as ScrollReveal } from "./ScrollReveal-1c_Su25q.js";
const defaultTestimonials = [
  {
    quote: "The peer-review process at Sanmati Spectrum was incredibly rigorous yet efficient. The feedback from reviewers significantly improved my paper.",
    name: "Dr. Elena Rossi",
    role: "Associate Professor, University of Milan",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "A truly multidisciplinary platform. It's rare to find a journal that values cross-domain dialogue with such academic integrity.",
    name: "Prof. James Chen",
    role: "Head of Research, Global Tech Institute",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Publishing my case study here gave me visibility I hadn't seen elsewhere. The open-access policy is a game changer for researchers in developing countries.",
    name: "Dr. Amina Mansour",
    role: "Academic Researcher, Cairo University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];
const Testimonials = ({ testimonials: dbTestimonials = [] }) => {
  const testimonials = dbTestimonials.length > 0 ? dbTestimonials.map((t) => ({
    quote: t.text,
    name: t.name,
    role: t.role,
    image: t.image_url.startsWith("/") || t.image_url.startsWith("http") ? t.image_url : `/storage/${t.image_url}`
  })) : defaultTestimonials;
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev2) => (prev2 + 1) % testimonials.length);
    }, 8e3);
    return () => clearInterval(timer);
  }, []);
  const next = () => setCurrent((prev2) => (prev2 + 1) % testimonials.length);
  const prev = () => setCurrent((prev2) => (prev2 - 1 + testimonials.length) % testimonials.length);
  return /* @__PURE__ */ jsxs("section", { className: "py-16 bg-dark text-white overflow-hidden relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx(Quote, { className: "w-12 h-12 text-primary mx-auto mb-6 opacity-50" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-serif font-bold mb-4", children: "Voice of Researchers" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-amber-500 text-amber-500" }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto relative px-12", children: [
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            transition: { duration: 0.5 },
            className: "text-center",
            children: [
              /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-3xl font-light italic leading-relaxed mb-12 text-slate-300", children: [
                "“",
                testimonials[current].quote,
                "”"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full border-2 border-primary/30 p-1 mb-6 relative overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src: testimonials[current].image,
                    alt: testimonials[current].name,
                    className: "object-cover rounded-full w-full h-full"
                  }
                ) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: testimonials[current].name }),
                /* @__PURE__ */ jsx("p", { className: "text-primary-light font-medium text-sm tracking-wide", children: testimonials[current].role })
              ] })
            ]
          },
          current
        ) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: prev,
            className: "absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10",
            "aria-label": "Previous testimonial",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: next,
            className: "absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10",
            "aria-label": "Next testimonial",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-3 mt-16", children: testimonials.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setCurrent(i),
          title: `Go to slide ${i + 1}`,
          className: "group py-3 px-2 -my-3 -mx-2 transition-all duration-200 cursor-pointer outline-none",
          "aria-label": `Go to slide ${i + 1}`,
          children: /* @__PURE__ */ jsx("div", { className: `h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-8 bg-primary" : "w-2 bg-slate-700 group-hover:bg-slate-500"}` })
        },
        i
      )) })
    ] })
  ] });
};
export {
  Testimonials as default
};
