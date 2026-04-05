import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-DUINli9S.js";
import { Compass, Target } from "lucide-react";
import "@inertiajs/react";
import "framer-motion";
import "react";
import "react-hot-toast";
function VisionMission() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Vision & Mission",
        breadcrumb: "Basic Information",
        subtitle: "Our core purpose and future direction"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-sm border border-slate-100", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-blue-800", children: /* @__PURE__ */ jsx(Compass, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-4", children: "Our Vision" }),
        /* @__PURE__ */ jsx("p", { className: "text-dark/80 leading-relaxed text-lg", children: "To promote high-quality, ethical, and multidisciplinary research that contributes to knowledge creation and addresses contemporary academic and societal challenges. We aim to be a beacon of scholarly excellence in the national landscape." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-sm border border-slate-100", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-700", children: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-4", children: "Our Mission" }),
        /* @__PURE__ */ jsx("p", { className: "text-dark/80 leading-relaxed text-lg", children: "To provide a credible platform for scholars, researchers, and academicians to publish original, peer-reviewed research. We strive to encourage innovation, inclusivity, and academic excellence across diverse disciplines including Arts, Humanities, and Sciences." })
      ] })
    ] }) })
  ] });
}
export {
  VisionMission as default
};
