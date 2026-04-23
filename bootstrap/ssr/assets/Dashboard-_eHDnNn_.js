import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { MessageSquare, FileText, Newspaper, Users, Server, Cpu, Database, HardDrive, Activity, Zap, ExternalLink, TrendingUp, ShieldCheck, AlertCircle, Clock, ImageIcon } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-D-2UQ6yb.js";
function Dashboard({ stats, systemHealth }) {
  const statCards = [
    {
      label: "Pending Enquiries",
      value: stats.pendingEnquiries,
      icon: MessageSquare,
      href: "/admin/enquiries",
      color: "blue",
      trend: "+5% since yesterday"
    },
    {
      label: "Total Papers",
      value: stats.totalPapers,
      icon: FileText,
      href: "/admin/papers",
      color: "emerald",
      trend: "+2 new issues"
    },
    {
      label: "Active News",
      value: stats.activeNews,
      icon: Newspaper,
      href: "/admin/news",
      color: "amber",
      trend: "Live updates on"
    },
    {
      label: "Team Members",
      value: stats.teamMembers,
      icon: Users,
      href: "/admin/team",
      color: "purple",
      trend: "All active"
    }
  ];
  const healthMetrics = [
    { label: "Laravel Version", value: systemHealth.laravel_version, icon: Server, status: "success" },
    { label: "PHP Engine", value: systemHealth.php_version, icon: Cpu, status: "success" },
    { label: "Database", value: systemHealth.database, icon: Database, status: systemHealth.database === "Connected" ? "success" : "error" },
    { label: "Storage", value: systemHealth.storage, icon: HardDrive, status: systemHealth.storage === "Writable" ? "success" : "error" }
  ];
  const quickActions = [
    { label: "Upload New Paper", href: "/admin/papers", icon: FileText, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Add News Item", href: "/admin/news", icon: Newspaper, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Manage Photos", href: "/admin/gallery", icon: ImageIcon, color: "text-blue-600", bg: "bg-blue-50" }
  ];
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-[1600px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3", children: [
              "Executive Overview",
              /* @__PURE__ */ jsx("div", { className: "px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black text-blue-600 uppercase tracking-widest", children: "v4.2.0-Alpha" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-1 font-medium italic", children: '"The advancement of science is the advancement of humanity."' })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("button", { className: "px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Activity, { className: "w-4 h-4" }),
          "System Audit"
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 fill-current" }),
          "Generate Report"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: statCards.map((card, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.1 },
        whileHover: { y: -4 },
        children: /* @__PURE__ */ jsx(Link, { href: card.href, className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] p-7 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-2xl bg-${card.color}-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`, children: /* @__PURE__ */ jsx(card.icon, { className: `w-6 h-6 text-${card.color}-600` }) }),
            /* @__PURE__ */ jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 text-slate-400" }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-4xl font-extrabold text-slate-900 mb-1", children: card.value }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-4", children: card.label }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5 text-emerald-500 font-bold" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-emerald-600", children: card.trend })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `absolute -right-4 -bottom-4 w-24 h-24 bg-${card.color}-500/5 rounded-full blur-2xl group-hover:bg-${card.color}-500/10 transition-colors` })
        ] }) })
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: 0.4 },
          className: "bg-white rounded-[2.5rem] p-8 border border-slate-200/60 shadow-sm flex flex-col",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6 text-emerald-500" }),
                  "Security & Health"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 font-medium mt-1", children: "Infrastructure status overview" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-slate-400" }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4 flex-grow", children: healthMetrics.map((metric, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group", children: [
              /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`, children: /* @__PURE__ */ jsx(metric.icon, { className: "w-5 h-5 text-slate-500" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest", children: metric.label }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-700", children: metric.value })
              ] }),
              /* @__PURE__ */ jsx("div", { className: `px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${metric.status === "success" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`, children: metric.status === "success" ? "Stable" : "Error" })
            ] }, i)) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-slate-100", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold text-slate-500", children: "Security Index" }),
                /* @__PURE__ */ jsx("span", { className: "font-black text-blue-600", children: "A+ Stable" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: "94%" },
                  transition: { duration: 1, delay: 1 },
                  className: "h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                }
              ) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.5 },
          className: "lg:col-span-2 bg-[#1E293B] rounded-[2.5rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] -ml-24 -mb-24" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white tracking-tight flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6 text-blue-400" }),
                  "Operational Stream"
                ] }),
                /* @__PURE__ */ jsxs("button", { className: "text-xs font-bold text-blue-400 hover:text-white transition-colors flex items-center gap-1", children: [
                  "View full logs ",
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                { time: "2 mins ago", msg: "System integrity check validated", user: "System" },
                { time: "1 hour ago", msg: 'New manuscript submission: "Quantum Cryptography"', user: "Dr. Jane Smith" },
                { time: "4 hours ago", msg: "Editorial board member update: Dr. Aradhya Jain", user: "Admin" },
                { time: "Yesterday", msg: "Backup cycle completed successfully", user: "Cron" }
              ].map((activity, i) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.6 + i * 0.1 },
                  className: "flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-default",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-sm tracking-wide", children: activity.msg }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase", children: activity.time }),
                        /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-slate-600" }),
                        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-blue-400 font-black", children: activity.user })
                      ] })
                    ] })
                  ]
                },
                i
              )) })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6", children: /* @__PURE__ */ jsx("div", { className: "md:col-span-2 lg:col-span-3 flex flex-wrap gap-4", children: quickActions.map((action, i) => /* @__PURE__ */ jsx(
      motion.button,
      {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: /* @__PURE__ */ jsxs(Link, { href: action.href, className: `flex items-center gap-3 px-6 py-4 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group`, children: [
          /* @__PURE__ */ jsx("div", { className: `p-2.5 rounded-xl ${action.bg} ${action.color}`, children: /* @__PURE__ */ jsx(action.icon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-slate-700 group-hover:text-blue-600 transition-colors whitespace-nowrap", children: action.label })
        ] })
      },
      i
    )) }) })
  ] }) });
}
export {
  Dashboard as default
};
