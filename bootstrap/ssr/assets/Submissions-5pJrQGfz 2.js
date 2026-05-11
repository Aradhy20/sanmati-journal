import { jsx, jsxs } from "react/jsx-runtime";
import "@inertiajs/react";
import { Search, FileText, Mail, BookOpen, Calendar, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-D-2UQ6yb.js";
import "framer-motion";
function Submissions({ submissions = { data: [] } }) {
  const data = submissions.data || [];
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-2", children: "Manuscript Submissions" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Review, download, and manage submitted papers securely." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Find a submission...",
            className: "pl-11 pr-6 py-2.5 bg-white border border-gray-200 rounded-xl w-64 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm text-sm"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-warm-bg/50 border-b border-slate-100", children: [
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Tracking ID" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Author / Contact" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Manuscript Details" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Submitted On" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-50", children: data.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 5, className: "px-8 py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-gray-400", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-12 h-12 mb-4 opacity-10" }),
          /* @__PURE__ */ jsx("p", { className: "font-bold italic", children: "No manuscripts submitted yet." })
        ] }) }) }) : data.map((sub) => {
          var _a;
          return /* @__PURE__ */ jsxs("tr", { className: "hover:bg-warm-bg/50 transition-colors group", children: [
            /* @__PURE__ */ jsx("td", { className: "px-8 py-6", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-tight border bg-blue-50 text-blue-700 border-blue-200", children: sub.tracking_id }) }),
            /* @__PURE__ */ jsx("td", { className: "px-8 py-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold border border-blue-100", children: (_a = sub.author_name) == null ? void 0 : _a[0] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-dark", children: sub.author_name }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 lowercase flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "w-3 h-3" }),
                  " ",
                  sub.author_email
                ] }),
                sub.institution && /* @__PURE__ */ jsx("p", { className: "text-[11px] text-gray-400 truncate w-32 mt-0.5", children: sub.institution })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("td", { className: "px-8 py-6 max-w-md", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-dark mb-1 truncate", children: sub.title }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs font-medium text-blue-600 mb-1 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "w-3 h-3" }),
                " ",
                sub.subject_area || "Uncategorized"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 line-clamp-1 leading-relaxed", children: sub.abstract })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "px-8 py-6 text-sm text-gray-500 font-medium", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-gray-400" }),
              new Date(sub.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            ] }) }),
            /* @__PURE__ */ jsx("td", { className: "px-8 py-6 text-right", children: /* @__PURE__ */ jsx("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: `/admin/submissions/${sub.id}/download`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 px-4 py-2 text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all shadow-sm hover:shadow",
                title: "Download Manuscript PDF",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                  "Download PDF"
                ]
              }
            ) }) })
          ] }, sub.id);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "px-8 py-5 bg-warm-bg/50 flex justify-between items-center border-t border-slate-100", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs font-bold text-gray-400 uppercase tracking-widest", children: [
          "Showing ",
          data.length,
          " results"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("button", { className: "p-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-white transition-all disabled:opacity-50", disabled: true, children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("button", { className: "p-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-white transition-all disabled:opacity-50", disabled: true, children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" }) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Submissions as default
};
