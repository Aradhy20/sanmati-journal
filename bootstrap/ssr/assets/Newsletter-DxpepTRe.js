import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
import { useForm, Link } from "@inertiajs/react";
import { Download, Users, Search, Mail, Calendar, Trash2 } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-D-2UQ6yb.js";
function Newsletter({ subscribers }) {
  const { post } = useForm();
  const deleteSubscriber = (id) => {
    if (confirm("Are you sure you want to remove this subscriber?")) {
      post(`/admin/newsletter/${id}`, { _method: "delete" });
    }
  };
  const exportToCSV = () => {
    const headers = ["Email", "Subscribed At"];
    const rows = subscribers.data.map((s) => [s.email, new Date(s.created_at).toLocaleString()]);
    const csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n" + rows.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "newsletter_subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-[1600px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3", children: [
          "Audience Network",
          /* @__PURE__ */ jsxs("div", { className: "px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black text-blue-600 uppercase tracking-widest", children: [
            subscribers.total,
            " Enrolled"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-1 font-medium italic", children: '"Stay connected with the scholars and researchers who value your updates."' })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: exportToCSV,
          className: "px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
            "Export CSV"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/30", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900", children: "Subscriber List" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Find subscriber...",
              className: "pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none w-64 shadow-sm"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest", children: "Email Identity" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center", children: "Engagement Date" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-slate-100", children: [
          subscribers.data.map((s, i) => /* @__PURE__ */ jsxs(
            motion.tr,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: i * 0.02 },
              className: "hover:bg-slate-50/80 transition-colors group",
              children: [
                /* @__PURE__ */ jsx("td", { className: "px-8 py-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-slate-800", children: s.email })
                ] }) }),
                /* @__PURE__ */ jsx("td", { className: "px-8 py-5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-slate-500 text-xs font-bold", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
                    new Date(s.created_at).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 mt-1 uppercase font-black tracking-tighter", children: new Date(s.created_at).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" }) })
                ] }) }),
                /* @__PURE__ */ jsx("td", { className: "px-8 py-5", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[9px] font-black uppercase tracking-wider", children: "Subscribed" })
                ] }) }) }),
                /* @__PURE__ */ jsx("td", { className: "px-8 py-5", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end gap-2", children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => deleteSubscriber(s.id),
                    className: "p-2.5 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-100 transition-all shadow-sm",
                    title: "Remove Subscriber",
                    children: /* @__PURE__ */ jsx(Trash2, { className: "w-4.5 h-4.5" })
                  }
                ) }) })
              ]
            },
            s.id
          )),
          subscribers.data.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "4", className: "px-8 py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3 opacity-30", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-12 h-12" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-widest", children: "No active subscribers found" })
          ] }) }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500 font-bold uppercase tracking-widest", children: [
        "Showing ",
        /* @__PURE__ */ jsx("span", { className: "text-slate-900", children: subscribers.from }),
        " to ",
        /* @__PURE__ */ jsx("span", { className: "text-slate-900", children: subscribers.to }),
        " of ",
        /* @__PURE__ */ jsx("span", { className: "text-slate-900", children: subscribers.total })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: subscribers.links.map((link, i) => /* @__PURE__ */ jsx(
        Link,
        {
          href: link.url || "#",
          dangerouslySetInnerHTML: { __html: link.label },
          className: `px-4 py-2 rounded-xl text-xs font-black transition-all ${link.active ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"} ${!link.url && "opacity-30 cursor-not-allowed"}`
        },
        i
      )) })
    ] })
  ] }) });
}
export {
  Newsletter as default
};
