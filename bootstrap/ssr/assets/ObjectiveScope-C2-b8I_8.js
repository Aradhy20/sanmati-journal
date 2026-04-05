import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-EqZlJ2m3.js";
import { Microscope, Globe2 } from "lucide-react";
import "@inertiajs/react";
import "framer-motion";
import "react";
import "react-hot-toast";
function ObjectiveScope() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Objective & Scope",
        breadcrumb: "Basic Information",
        subtitle: "Defining our academic boundaries and goals"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-primary/10 rounded-lg text-primary-dark", children: /* @__PURE__ */ jsx(Microscope, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark", children: "Objectives" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-dark/80 text-lg leading-relaxed", children: "The objective of the journal is to provide a national multidisciplinary platform for scholars, researchers, and the academic community. We encourage:" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
          "Original research methodology",
          "Innovative perspectives",
          "Excellence in scholarly inquiry",
          "Cross-disciplinary collaboration"
        ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 p-4 bg-warm-bg rounded-lg border border-slate-100", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-dark/80", children: item })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-yellow-100 rounded-lg text-yellow-700", children: /* @__PURE__ */ jsx(Globe2, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark", children: "Scope" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-dark/80 text-lg leading-relaxed", children: "The journal publishes research papers, case studies, theme-based articles, and book reviews across a wide spectrum of disciplines, offering scholars an opportunity to share ideas and foster multidimensional discourse." }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 mt-6", children: [
          "Arts & Humanities",
          "Social Sciences",
          "Journalism & Mass Comm",
          "Sciences",
          "Technology",
          "Management",
          "Education",
          "Law"
        ].map((field, i) => /* @__PURE__ */ jsx("div", { className: "px-4 py-2 bg-white border border-gray-200 rounded text-sm text-gray-600 font-medium text-center hover:border-primary hover:text-primary transition-colors cursor-default", children: field }, i)) })
      ] })
    ] }) })
  ] });
}
export {
  ObjectiveScope as default
};
