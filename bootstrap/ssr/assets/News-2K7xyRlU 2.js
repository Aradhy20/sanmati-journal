import { jsx, jsxs } from "react/jsx-runtime";
import { useForm, router } from "@inertiajs/react";
import { Plus, Newspaper, PowerOff, Power, Trash2, Calendar, Info, AlertCircle } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-D-2UQ6yb.js";
import "framer-motion";
function News({ news = [] }) {
  const { data, setData, post, reset, processing } = useForm({
    content: "",
    type: "info"
  });
  const submit = (e) => {
    e.preventDefault();
    post("/admin/news", {
      onSuccess: () => reset()
    });
  };
  const toggleActive = (id) => {
    router.patch(`/admin/news/${id}/toggle`);
  };
  const deleteItem = (id) => {
    if (confirm("Are you sure you want to delete this news item?")) {
      router.delete(`/admin/news/${id}`);
    }
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-2", children: "News & Announcements" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Manage the news ticker and site-wide alerts." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-3xl border border-gray-200 shadow-sm", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-dark mb-6 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Plus, { className: "text-primary w-5 h-5" }),
        " Create New Announcement"
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col md:flex-row gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-grow", children: /* @__PURE__ */ jsx(
          "input",
          {
            value: data.content,
            onChange: (e) => setData("content", e.target.value),
            required: true,
            type: "text",
            placeholder: "Type news content here (e.g., 'Call for Papers for Volume 2 is now open!')",
            className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full md:w-48", children: /* @__PURE__ */ jsxs(
          "select",
          {
            value: data.type,
            onChange: (e) => setData("type", e.target.value),
            className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none",
            children: [
              /* @__PURE__ */ jsx("option", { value: "info", children: "Information" }),
              /* @__PURE__ */ jsx("option", { value: "urgent", children: "Urgent Alert" }),
              /* @__PURE__ */ jsx("option", { value: "event", children: "Event News" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            disabled: processing,
            type: "submit",
            className: "bg-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all disabled:opacity-50",
            children: "Post News"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-warm-bg/50 border-b border-slate-100", children: [
        /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Type" }),
        /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Content" }),
        /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest", children: "Date" }),
        /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-50", children: news.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 5, className: "px-8 py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-gray-400", children: [
        /* @__PURE__ */ jsx(Newspaper, { className: "w-12 h-12 mb-4 opacity-10" }),
        /* @__PURE__ */ jsx("p", { className: "font-bold italic", children: "No news items found." })
      ] }) }) }) : news.map((item) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-warm-bg/50 transition-colors group", children: [
        /* @__PURE__ */ jsx("td", { className: "px-8 py-6", children: /* @__PURE__ */ jsx(TypeBadge, { type: item.type }) }),
        /* @__PURE__ */ jsx("td", { className: "px-8 py-6 max-w-xl", children: /* @__PURE__ */ jsx("p", { className: "font-bold text-dark leading-relaxed", children: item.content }) }),
        /* @__PURE__ */ jsx("td", { className: "px-8 py-6", children: /* @__PURE__ */ jsx("span", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${item.is_active ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-warm-bg text-gray-400 border-gray-200"}`, children: item.is_active ? "Active" : "Disabled" }) }),
        /* @__PURE__ */ jsx("td", { className: "px-8 py-6 text-sm text-gray-500 font-medium whitespace-nowrap", children: new Date(item.created_at).toLocaleDateString() }),
        /* @__PURE__ */ jsx("td", { className: "px-8 py-6 text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => toggleActive(item.id),
              className: `p-2.5 rounded-xl transition-all ${item.is_active ? "text-amber-600 hover:bg-amber-50" : "text-emerald-600 hover:bg-emerald-50"}`,
              title: item.is_active ? "Deactivate" : "Activate",
              children: item.is_active ? /* @__PURE__ */ jsx(PowerOff, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Power, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => deleteItem(item.id),
              className: "p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl transition-all",
              title: "Delete News",
              children: /* @__PURE__ */ jsx(Trash2, { className: "w-5 h-5" })
            }
          )
        ] }) })
      ] }, item.id)) })
    ] }) }) })
  ] }) });
}
function TypeBadge({ type }) {
  const configs = {
    urgent: { icon: AlertCircle, color: "text-rose-600", bg: "bg-rose-50 border-rose-100" },
    info: { icon: Info, color: "text-primary", bg: "bg-primary/5 border-blue-100" },
    event: { icon: Calendar, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" }
  };
  const config = configs[type] || configs.info;
  const Icon = config.icon;
  return /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${config.color} ${config.bg}`, children: [
    /* @__PURE__ */ jsx(Icon, { className: "w-3.5 h-3.5" }),
    type
  ] });
}
export {
  News as default
};
