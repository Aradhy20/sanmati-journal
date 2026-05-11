import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { M as MainLayout, S as Seo } from "./MainLayout-CgOr05Na.js";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { motion } from "framer-motion";
import { Shield, Eye, Target, CheckCircle2 } from "lucide-react";
import "@inertiajs/react";
import "react-hot-toast";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
function AboutFoundation() {
  const objectives = [
    "To promote quality education, research, and publication activities.",
    "To publish and distribute books, journals, magazines, newsletters, and research papers.",
    "To organize seminars, workshops, conferences, award ceremonies, and awareness campaigns.",
    "To establish, manage, and support schools, colleges, libraries, and other new educational institutions.",
    "To promote education, vocational training, and skill development for underprivileged and economically weaker sections of society.",
    "To support inclusive and special education initiatives for differently abled children and individuals.",
    "To organize educational, health, and social awareness programs for public welfare.",
    "To confer awards and honors upon outstanding educators, researchers, social workers, and talented individuals for their contributions to society.",
    "To promote women empowerment, human rights, social justice, equality, and an inclusive society free from discrimination.",
    "To encourage activities related to environmental protection, renewable energy, animal welfare, and overall social development."
  ];
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "About the Foundation | Sanmati Spectrum of Knowledge",
        description: "Learn about the Sanmati Education & Research Foundation of India, dedicated to promoting holistic social development through education, research, and welfare activities."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "The Foundation",
        breadcrumb: "About Foundation",
        subtitle: "Building an educated, empowered, and harmonious society."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-white py-16 lg:py-24 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          ...fadeInUp,
          className: "max-w-4xl mx-auto text-center mb-16 lg:mb-24",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-serif font-bold text-dark mb-6", children: "Sanmati Education & Research Foundation of India" }),
            /* @__PURE__ */ jsxs("p", { className: "text-lg text-slate-600 leading-relaxed mb-6", children: [
              "The name reflects the objectives and core ideology of the organization. The word ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-primary", children: '"Sanmati"' }),
              " means wisdom, positive thinking, and right guidance, symbolizing education, knowledge, and moral values."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-lg text-slate-600 leading-relaxed", children: [
              "The terms ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-primary", children: '"Education & Research"' }),
              " represent the foundation's commitment towards education, research, innovation, book publication, and knowledge development. The word ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-primary", children: '"Foundation"' }),
              " highlights its social and welfare-oriented identity, while ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-primary", children: '"of India"' }),
              " signifies the organization's dedication to serving society, education, and human development at the national level."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:mb-32", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "relative",
            children: /* @__PURE__ */ jsxs("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative", children: [
              /* @__PURE__ */ jsx("img", { src: "/images/saraswati.jpeg", alt: "Foundation Activity", className: "w-full h-full object-cover" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/10 mix-blend-multiply" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "space-y-6",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" }),
                " About Us"
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-serif font-bold text-dark", children: "Promoting Holistic Social Development" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed", children: "Sanmati Education & Research Foundation of India is a social, educational, and research-oriented organization dedicated to promoting holistic social development through education, research, innovation, and welfare activities. The foundation works towards spreading knowledge and awareness by organizing quality educational programs, book publications, research activities, seminars, workshops, conferences, and skill development initiatives." }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed", children: "The foundation is especially committed to the upliftment of underprivileged communities, women, children, senior citizens, and differently abled individuals. It actively promotes human rights, women empowerment, equality, inclusive growth, and sustainable community development." }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed", children: "We also recognize and honor outstanding educators, researchers, social workers, and talented individuals for their remarkable contributions to society. Through continuous efforts in research, innovation, vocational training, and community welfare programs, the foundation aims to build an educated, empowered, self-reliant, and socially responsible nation." })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 lg:mb-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            ...fadeInUp,
            className: "bg-slate-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(Eye, { className: "w-7 h-7 text-blue-600" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark mb-4", children: "Our Vision" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed", children: "To build an educated, empowered, inclusive, and self-reliant society through education, research, book publication, seminars, workshops, innovation, and social welfare." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            ...fadeInUp,
            transition: { delay: 0.2 },
            className: "bg-primary/5 p-10 rounded-3xl border border-primary/10 shadow-sm hover:shadow-lg transition-shadow duration-300",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(Target, { className: "w-7 h-7 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark mb-4", children: "Our Mission" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed", children: "To promote education, research, book publication, seminars, workshops, and skill development activities for the social, educational, and cultural upliftment of underprivileged communities, women, children, and differently abled individuals, while encouraging innovation, environmental protection, human rights, equality, cultural values, and sustainable community development." })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-serif font-bold text-dark mb-4", children: "Objective & Scope" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "Key focus areas and strategic goals of the foundation." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12", children: /* @__PURE__ */ jsx("ul", { className: "space-y-6", children: objectives.map((obj, idx) => /* @__PURE__ */ jsxs(
          motion.li,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: idx * 0.05 },
            className: "flex items-start gap-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-600" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: obj })
            ]
          },
          idx
        )) }) })
      ] })
    ] }) })
  ] });
}
export {
  AboutFoundation as default
};
