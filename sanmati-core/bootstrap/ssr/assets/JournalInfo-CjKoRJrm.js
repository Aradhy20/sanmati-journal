import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { BookOpen, Layers, Star, FileText, Calendar, Globe, Shield, Award, GraduationCap, MapPin, Users, Mail } from "lucide-react";
import { P as PageHeader } from "./PageHeader-DKpFkYbo.js";
import { M as MainLayout, S as Seo } from "./MainLayout-BdmIsu1R.js";
import "@inertiajs/react";
import "react";
import "react-hot-toast";
const INFO_ROWS = [
  { label: "Full Journal Title", value: "Sanmati Spectrum of Knowledge & Emerging Discourse", icon: BookOpen, highlight: false },
  { label: "ISSN (Online)", value: "3108-1819", icon: Layers, highlight: true, badge: "badge-issn" },
  { label: "Journal Impact Factor", value: "5.3 (CrossRef Indexed)", icon: Star, highlight: true, badge: "ds-badge-accent" },
  { label: "Publication Format", value: "Print & Online (Bilingual)", icon: FileText, highlight: false },
  { label: "Frequency", value: "Quarterly (4 issues per year)", icon: Calendar, highlight: false },
  { label: "Language", value: "Bilingual — Hindi & English", icon: Globe, highlight: false },
  { label: "Access Type", value: "Open Access (Free to Read)", icon: Shield, highlight: false },
  { label: "DOI", value: "CrossRef DOI assigned to every article", icon: Award, highlight: false },
  { label: "Peer Review", value: "Double-Blind Peer Review", icon: GraduationCap, highlight: false },
  { label: "Publisher", value: "Sanmati Publication, Haridwar, Uttarakhand, India", icon: MapPin, highlight: false },
  { label: "President & Editor-in-Chief", value: "Dr Namrata Jain", icon: Users, highlight: false },
  { label: "Contact Email", value: "sanmatijournal@gmail.com", icon: Mail, highlight: false, link: "mailto:sanmatijournal@gmail.com" }
];
function JournalInfo() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Journal Information — Sanmati Spectrum of Knowledge",
        description: "Key details and metadata about Sanmati Spectrum of Knowledge & Emerging Discourse — ISSN 3108-1819, Impact Factor 5.3, CrossRef DOI, Open Access, Quarterly."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Journal Information",
        subtitle: "Key details, metadata, and publishing standards of the Sanmati Spectrum Journal",
        breadcrumbs: [
          { name: "Home", url: "/" },
          { name: "Basic Information", url: "#" },
          { name: "Journal Information", url: "#" }
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-py bg-warm-bg", "aria-labelledby": "journal-info-title", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "flex flex-wrap gap-2 mb-8",
          children: [
            /* @__PURE__ */ jsx("span", { className: "badge-issn", children: "ISSN 3108-1819" }),
            /* @__PURE__ */ jsx("span", { className: "badge-open", children: "Open Access" }),
            /* @__PURE__ */ jsx("span", { className: "badge-peer", children: "Double-Blind Review" }),
            /* @__PURE__ */ jsx("span", { className: "ds-badge-accent", children: "Impact Factor 5.3" }),
            /* @__PURE__ */ jsx("span", { className: "badge-doi", children: "CrossRef DOI" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.1 },
          className: "bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[var(--shadow-card)]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-1 bg-gradient-to-r from-secondary via-accent to-emerald" }),
            INFO_ROWS.map((row, i) => {
              const Icon = row.icon;
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `flex items-start gap-4 px-6 py-5 border-b border-slate-50 hover:bg-slate-50/60 transition-colors duration-150 ${i === INFO_ROWS.length - 1 ? "border-b-0" : ""}`,
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4 text-primary" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-[11px] font-black uppercase tracking-wider text-muted mb-0.5", children: row.label }),
                      row.link ? /* @__PURE__ */ jsx("a", { href: row.link, className: "text-sm font-bold text-accent hover:text-primary transition-colors", children: row.value }) : /* @__PURE__ */ jsx("div", { className: `text-sm font-bold ${row.highlight ? "text-secondary" : "text-primary"}`, children: row.value })
                    ] })
                  ]
                },
                row.label
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.3 },
          className: "text-xs text-muted text-center mt-6",
          children: [
            "For complete submission guidelines, visit the",
            " ",
            /* @__PURE__ */ jsx("a", { href: "/submission-guidelines", className: "text-accent font-bold hover:underline", children: "Author Guidelines" }),
            " page."
          ]
        }
      )
    ] }) })
  ] });
}
export {
  JournalInfo as default
};
