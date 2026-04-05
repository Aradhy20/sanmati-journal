import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote, Award, UserCircle2, Mail, Phone, ExternalLink } from "lucide-react";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-EqZlJ2m3.js";
import "@inertiajs/react";
import "react-hot-toast";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
const BoardMember = ({ name, title, affiliation, email, phone, profileUrl, image, role, index }) => {
  const [imgError, setImgError] = useState(false);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ...fadeInUp,
      transition: { delay: index * 0.1 },
      className: "bg-white rounded-[2rem] border border-gray-100 p-6 sm:p-8 flex flex-col hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-6 opacity-5 pointer-events-none transition-opacity duration-500 group-hover:opacity-10", children: /* @__PURE__ */ jsx(Award, { className: "w-24 h-24 text-primary rotate-12" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 mb-6 relative z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-[1.5rem] overflow-hidden shadow-md border-2 border-white ring-1 ring-gray-50 relative bg-surface flex items-center justify-center", children: image && !imgError ? /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: name,
              className: "w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700",
              loading: "lazy",
              onError: () => setImgError(true)
            }
          ) : /* @__PURE__ */ jsx(UserCircle2, { className: "w-12 h-12 text-primary/30" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded-full mb-2 border border-primary/10", children: title }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-dark leading-tight group-hover:text-primary transition-colors", children: name })
          ] })
        ] }),
        affiliation && /* @__PURE__ */ jsx("p", { className: "text-muted text-xs sm:text-sm leading-relaxed mb-6 flex-1 relative z-10 font-medium", children: affiliation }),
        (email || phone || profileUrl) && /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-5 border-t border-gray-50 flex flex-col gap-3 relative z-10", children: [
          email && /* @__PURE__ */ jsxs("a", { href: `mailto:${email}`, className: "text-[11px] sm:text-xs font-medium text-dark/70 hover:text-primary transition-colors flex items-center gap-2 truncate", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-primary/50 shrink-0" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "truncate", children: email })
          ] }),
          phone && /* @__PURE__ */ jsxs("span", { className: "text-[11px] sm:text-xs font-medium text-dark/70 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-primary/50 shrink-0" }),
            " ",
            phone
          ] }),
          profileUrl && /* @__PURE__ */ jsxs("a", { href: profileUrl, target: "_blank", rel: "noreferrer", className: "mt-3 inline-flex items-center justify-center w-full py-2.5 bg-surface hover:bg-primary/5 text-primary text-[10px] sm:text-[11px] font-black tracking-widest uppercase rounded-xl transition-colors border border-gray-100 hover:border-primary/20 group/btn gap-2 shadow-sm", children: [
            "View Academic Profile ",
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" })
          ] })
        ] })
      ]
    }
  );
};
function EditorialBoard() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Editorial Board",
        description: "Our distinguished board members are the guardians of scholarly excellence at Sanmati Journal."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Editorial Board",
        breadcrumb: "Leadership",
        subtitle: "The intellectual architects guiding our multidisciplinary peer-review framework."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-32", children: [
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "lg:col-span-12 xl:col-span-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
            /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.4em]", children: "Governance" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-8 leading-[1.05]", children: [
            "The Vanguard of ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Academic Rigor" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-dark/70 font-medium leading-relaxed mb-10 border-l-4 border-primary/20 pl-8", children: "Our editorial governance model is built on transparency, diversity, and an unwavering commitment to empirical excellence." }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
            { title: "Intellectual Integrity", text: "Upholding the highest standards of peer-review precision." },
            { title: "Global Perspective", text: "Bridging international discourse across multidisciplinary nodes." }
          ].map((feat, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-6 bg-surface rounded-3xl border border-gray-50 hover:shadow-xl transition-all duration-500", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-dark text-sm mb-1", children: feat.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted text-xs leading-relaxed", children: feat.text })
            ] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, transition: { delay: 0.2 }, className: "lg:col-span-12 xl:col-span-5 relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" }),
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-dark", children: [
            /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/fistudy-assets/resources/about-journal-2.png", alt: "Board", className: "w-full h-full object-cover opacity-60" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 lg:p-12 text-center", children: [
              /* @__PURE__ */ jsx(Quote, { className: "w-12 h-12 text-secondary mx-auto mb-6 opacity-50" }),
              /* @__PURE__ */ jsx("p", { className: "text-white text-lg font-serif italic font-medium leading-relaxed", children: '"Scholarship is most transformative when guided by the collective wisdom of diverse academic leaders."' })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-10 lg:mb-20", children: [
          /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-4", children: "Registry" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-dark mb-4", children: "Esteemed Board" }),
          /* @__PURE__ */ jsx("div", { className: "h-1 w-12 bg-primary rounded-full" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10", children: [
          {
            name: "Prof. Pralhad Joshi",
            title: "Chief Board Member",
            role: "Chief",
            affiliation: "Vice-Chancellor, Kumar Bhaskar Varma Sanskrit and Ancient Studies University Nalbari, (Assam)",
            image: "/images/team/Prof. Prahlad joshi.jpeg"
          },
          {
            name: "Dr. Kalpna Jain",
            title: "Executive Editor",
            affiliation: "",
            email: "Kalpnajain69@gmail.com",
            profileUrl: "https://www.researchgate.net/profile/Dr-Jain-23",
            image: "/dr kalpana jian.jpeg"
          },
          {
            name: "Dr. Smriti Kumari Singh",
            title: "Board Member",
            affiliation: "Assistant Professor (Department of Hindi) Sophia College for Women (Empowered Autonomous) Mumbai (Maharashtra)",
            image: "/images/team/Dr_Smriti_kumari.jpeg"
          },
          {
            name: "Dr. Amita Kumari",
            title: "Board Member",
            affiliation: "Assistant Professor, University Department of Education, Vinoba Bhave University, Hazaribagh (Jharkhand)",
            image: "/images/team/Amita kumari.jpeg"
          },
          {
            name: "Dr. Parikshit Layek",
            title: "Board Member",
            affiliation: "Vice Principal Shri Ramakrishna Sarada Ashrama, T.T.College Hazaribagh. (Jharkhand)",
            image: "/images/team/Parikshit Layek.jpeg"
          },
          {
            name: "Dr. Vaishali Ranjit Vichare",
            title: "Board Member",
            affiliation: "Associate Professor, Dr. GD POL FOUNDATION, YMT Homeopathic Medical College & PG Centre Kharghar. Navi Mumbai (Maharashtra)",
            image: "/images/team/Vaishali Ranjeet vichare.jpeg"
          },
          {
            name: "Dr. A. Shashank. Rao",
            title: "Board Member",
            affiliation: "Assistant Professor Naveen Govt. College Nagpura, Durg (Chhattisgarh)",
            image: "/images/team/Dr_Shashank_Rao.jpeg"
          }
        ].map((m, i) => /* @__PURE__ */ jsx(BoardMember, { ...m, index: i }, i)) })
      ] })
    ] })
  ] });
}
export {
  EditorialBoard as default
};
