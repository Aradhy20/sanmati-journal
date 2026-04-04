import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-B53y4pKW.js";
import { motion } from "framer-motion";
import { BookOpen, Target, Globe, Microscope, ShieldCheck, Award, Users } from "lucide-react";
import "@inertiajs/react";
import "react";
import "react-hot-toast";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
function AboutJournal() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "About Us",
        description: "Sanmati Spectrum of Knowledge - A leading national peer-reviewed journal fostering multidisciplinary research."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "About the Journal",
        breadcrumb: "Basic Information",
        subtitle: "Sanmati Spectrum of Knowledge & Emerging Discourse"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative", children: [
      /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "relative group mb-12 lg:mb-24", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" }),
        /* @__PURE__ */ jsxs("div", { className: "relative bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-16 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-6 lg:p-12 opacity-[0.03] rotate-12", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-dark" }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-10", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.4em]", children: "The Mandate" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl md:text-5xl font-serif font-bold text-dark mb-10 leading-[1.1]", children: [
              "Promoting ",
              /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "High-Quality" }),
              " Academic Research"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start", children: /* @__PURE__ */ jsxs("div", { className: "lg:col-span-12 prose prose-lg prose-slate max-w-none", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-xl text-dark/70 font-medium leading-relaxed mb-8", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-dark font-black", children: "“Sanmati Spectrum of Knowledge & Emerging Discourse”" }),
                " is a national-level multidisciplinary quarterly research journal established in 2026 with the objective of promoting high-quality academic research, intellectual dialogue, and innovative scholarship across diverse disciplines."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted leading-relaxed mb-4", children: [
                "Published in print (offline) format with ISSN (Print): ",
                /* @__PURE__ */ jsx("strong", { className: "text-dark", children: "3108-1819" }),
                ", the journal serves as a credible and structured platform for scholars, academicians, researchers, and practitioners to disseminate original research. It is bilingual in nature, accepting submissions in both English and Hindi, thereby ensuring inclusivity and accessibility for a wide academic audience."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: "In the contemporary global knowledge ecosystem, where disciplinary boundaries are increasingly fluid, the journal emphasizes multidisciplinary and interdisciplinary approaches that integrate insights from arts, humanities, social sciences, media studies, and scientific domains." }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 mt-10", children: ["Multidisciplinary", "Bilingual", "Peer-Reviewed", "Quarterly"].map((tag) => /* @__PURE__ */ jsx("span", { className: "px-5 py-2 bg-surface border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-secondary", children: tag }, tag)) })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 lg:mb-24", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "relative p-6 lg:p-12 lg:p-16 bg-white border border-gray-100 rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(10,37,64,0.05) 1px, transparent 0)", backgroundSize: "40px 40px" } }),
              /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-warm-bg shadow-sm border border-gray-50 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500", children: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-secondary group-hover:text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-6", children: "Our Mission" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted text-lg leading-relaxed font-medium", children: "To encourage original and impactful research, provide opportunities for early-career researchers and young scholars, and promote collaborative and interdisciplinary academic engagement, contributing to the broader goal of societal development and intellectual progress." })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "relative p-6 lg:p-12 lg:p-16 bg-surface border border-gray-100 rounded-[3rem] overflow-hidden group hover:shadow-2xl transition-all duration-700",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-50 flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors duration-500", children: /* @__PURE__ */ jsx(Globe, { className: "w-8 h-8 text-primary group-hover:text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-6", children: "Our Vision" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted text-lg leading-relaxed font-medium", children: "To emerge as a leading academic platform at both national and international levels, recognized for its scholarly rigor, ethical standards, and meaningful contributions to knowledge advancement." })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-12 lg:mb-24", children: /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, className: "bg-warm-bg border border-gray-100 rounded-[3rem] p-10 lg:p-16 shadow-inner relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-white border border-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(Microscope, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark", children: "Scope & Focus" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed mb-6", children: "The scope of the journal is broad and inclusive, covering a wide range of disciplines including arts and humanities, social sciences, media and communication studies, natural and applied sciences, and emerging interdisciplinary fields. It welcomes a variety of scholarly contributions such as research articles, review papers, case studies, thematic essays, book reviews, and papers presented at conferences and seminars." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: "A key strength lies in its focus on emerging research areas of contemporary academic and societal importance. These include fields such as artificial intelligence and society, digital humanities, climate change and sustainability, media and democracy, gender studies, social justice, globalization, and Indian knowledge systems." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-white border border-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6 text-secondary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark", children: "Editorial Philosophy & Ethics" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted leading-relaxed mb-6", children: [
            "To ensure the integrity and quality of published research, the journal follows a strict ",
            /* @__PURE__ */ jsx("strong", { children: "double-blind peer review system" }),
            ", in which the identities of both authors and reviewers are kept confidential. Submissions are assessed by subject experts based on originality, relevance, methodological rigor, clarity of presentation, and contribution to existing knowledge."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: "The journal also upholds a stringent policy against plagiarism. All manuscripts are screened using plagiarism detection tools, and only those that comply with the indexing guidelines prescribed by regulatory authorities such as UGC are considered for publication." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mb-12 lg:mb-24", children: /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "bg-white p-10 lg:p-16 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-700", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-serif font-bold text-dark mb-8 flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-sm", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6" }) }),
              "Submission Blueprint"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted leading-relaxed mb-6", children: [
              "The submission process is designed to be systematic and user-friendly. Authors are required to submit their manuscripts in ",
              /* @__PURE__ */ jsx("strong", { className: "text-dark", children: "MS Word format (.doc/.docx)" }),
              ", using ",
              /* @__PURE__ */ jsx("strong", { children: "Times New Roman" }),
              " font for English and ",
              /* @__PURE__ */ jsx("strong", { children: "Mangal Unicode" }),
              " for Hindi. The formatting guidelines specify a 14-point bold title, 12-point regular text, and 1.5-line spacing."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted leading-relaxed", children: [
              "Each manuscript must include an abstract of 150–250 words along with 4–6 keywords. The number of co-authors is limited to a maximum of two, and references must be formatted according to ",
              /* @__PURE__ */ jsx("strong", { children: "APA style" }),
              ". Submissions are accepted via email at ",
              /* @__PURE__ */ jsx("strong", { className: "text-primary hover:underline", children: /* @__PURE__ */ jsx("a", { href: "mailto:sanmatijournal@gmail.com", children: "sanmatijournal@gmail.com" }) }),
              ", along with complete author details, institutional affiliation, and contact information."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-serif font-bold text-dark mb-8 flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-sm", children: /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6" }) }),
              "Global Relevance & Future"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted leading-relaxed mb-6", children: [
              'A key strength of "Sanmati Spectrum" lies in its focus on emerging research areas of contemporary societal importance, including ',
              /* @__PURE__ */ jsx("strong", { className: "text-dark", children: "artificial intelligence, digital humanities, climate change, media and democracy, and Indian knowledge systems" }),
              ". It explores the rich diversity of Indian intellectual traditions while simultaneously engaging with global theories."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted leading-relaxed", children: [
              "Looking toward the future, the journal aspires to achieve international recognition by being indexed into reputed databases such as ",
              /* @__PURE__ */ jsx("strong", { children: "Scopus, Web of Science, and ABDC" }),
              ". Plans are underway to expand into digital platforms, establish collaborations with international institutions, and adopt advanced publishing standards such as ",
              /* @__PURE__ */ jsx("strong", { children: "DOI and Crossref" }),
              " integration."
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "bg-white border border-gray-100 rounded-[2.5rem] p-10 lg:p-14 shadow-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-12", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Award, { className: "w-7 h-7 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark", children: "Identity & Protocol" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            { label: "ISSN (Print)", value: "3108-1819" },
            { label: "Cycle Frequency", value: "Quarterly (4 Issues/Year)" },
            { label: "Dissemination", value: "Print / Physical Archives" },
            { label: "Linguistic Scope", value: "Bilingual (Hindi & English)" }
          ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-6 bg-surface rounded-2xl border border-gray-50 hover:border-primary/20 transition-all group", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-muted group-hover:text-secondary transition-colors", children: item.label }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-dark group-hover:text-primary transition-colors", children: item.value })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, transition: { delay: 0.2 }, className: "bg-white border border-gray-100 rounded-[2.5rem] p-10 lg:p-14 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-700", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-12", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-surface border border-gray-50 flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsx(Users, { className: "w-7 h-7 text-secondary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark", children: "Institutional Origin" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-6 bg-warm-bg rounded-2xl border border-gray-50", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-muted", children: "Inauguration" }),
                /* @__PURE__ */ jsx("span", { className: "font-bold text-dark", children: "Academic Cycle 2026" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-8 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl border border-primary/10 mt-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-secondary block mb-4", children: "Official Publisher Address" }),
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-dark mb-2", children: "JTS Publications" }),
                /* @__PURE__ */ jsxs("p", { className: "text-muted text-sm leading-relaxed", children: [
                  "V-508 Gali No. 17, Vijay Park,",
                  /* @__PURE__ */ jsx("br", {}),
                  "Delhi – 110053, Bharat (India)"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AboutJournal as default
};
