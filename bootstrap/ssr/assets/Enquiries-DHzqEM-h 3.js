import { jsx, jsxs } from "react/jsx-runtime";
import { router } from "@inertiajs/react";
import { Search, Mail, CheckCircle2, Archive, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-D-2UQ6yb.js";
import "framer-motion";
function Enquiries({ enquiries = [] }) {
  const updateStatus = (id, status) => {
    router.patch(`/admin/enquiries/${id}/status`, { status });
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-2", children: "Message Center" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Manage and respond to all editorial enquiries." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Find a message...",
            className: "pl-11 pr-6 py-2.5 bg-white border border-gray-200 rounded-xl w-64 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm text-sm"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-warm-bg/50 border-b border-slate-100", children: [
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Sender" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Subject & Message" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Received Date" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-50", children: enquiries.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 5, className: "px-8 py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-gray-400", children: [
          /* @__PURE__ */ jsx(Mail, { className: "w-12 h-12 mb-4 opacity-10" }),
          /* @__PURE__ */ jsx("p", { className: "font-bold italic", children: "No enquiries found in the database." })
        ] }) }) }) : enquiries.map((enquiry) => {
          var _a, _b;
          return /* @__PURE__ */ jsxs("tr", { className: "hover:bg-warm-bg/50 transition-colors group", children: [
            /* @__PURE__ */ jsx("td", { className: "px-8 py-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold border border-blue-100", children: [
                (_a = enquiry.first_name) == null ? void 0 : _a[0],
                (_b = enquiry.last_name) == null ? void 0 : _b[0]
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("p", { className: "font-bold text-dark", children: [
                  enquiry.first_name,
                  " ",
                  enquiry.last_name
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 lowercase", children: enquiry.email })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("td", { className: "px-8 py-6 max-w-md", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-dark mb-1 truncate", children: enquiry.subject }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 line-clamp-2 leading-relaxed", children: enquiry.message })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "px-8 py-6 text-sm", children: /* @__PURE__ */ jsx(StatusBadge, { status: enquiry.status }) }),
            /* @__PURE__ */ jsx("td", { className: "px-8 py-6 text-sm text-gray-500 font-medium", children: new Date(enquiry.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric"
            }) }),
            /* @__PURE__ */ jsx("td", { className: "px-8 py-6 text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
              enquiry.status === "new" && /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => updateStatus(enquiry.id, "replied"),
                  className: "p-2.5 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all",
                  title: "Mark as Replied",
                  children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5" })
                }
              ),
              enquiry.status !== "archived" && /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => updateStatus(enquiry.id, "archived"),
                  className: "p-2.5 text-gray-400 hover:bg-gray-50 hover:text-dark rounded-xl transition-all",
                  title: "Archive Message",
                  children: /* @__PURE__ */ jsx(Archive, { className: "w-5 h-5" })
                }
              )
            ] }) })
          ] }, enquiry.id);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "px-8 py-5 bg-warm-bg/50 flex justify-between items-center border-t border-slate-100", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs font-bold text-gray-400 uppercase tracking-widest", children: [
          "Showing ",
          enquiries.length,
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
function StatusBadge({ status }) {
  const styles = {
    new: "bg-primary/5 text-primary-dark border-blue-100",
    replied: "bg-emerald-50 text-emerald-700 border-emerald-100",
    archived: "bg-warm-bg text-gray-500 border-gray-200"
  };
  const icons = {
    new: Clock,
    replied: CheckCircle2,
    archived: Archive
  };
  const Icon = icons[status] || Clock;
  return /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-tight border ${styles[status] || styles.new}`, children: [
    /* @__PURE__ */ jsx(Icon, { className: "w-3.5 h-3.5" }),
    status
  ] });
}
export {
  Enquiries as default
};
