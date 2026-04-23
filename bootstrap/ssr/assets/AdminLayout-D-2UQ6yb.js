import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { Sparkles, LayoutDashboard, Newspaper, FileText, Inbox, MessageSquareQuote, Mail, Users, MessageSquare, Image, ChevronRight, LogOut, Search, Bell, Settings } from "lucide-react";
import { motion } from "framer-motion";
function AdminLayout({ children }) {
  const { url, auth } = usePage().props;
  const user = auth.user || { full_name: "Admin User", email: "admin@sanmati.com" };
  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard, color: "from-blue-600 to-indigo-700" },
    { href: "/admin/news", label: "News Ticker", icon: Newspaper, color: "from-amber-600 to-orange-700" },
    { href: "/admin/papers", label: "Issues & Papers", icon: FileText, color: "from-emerald-600 to-teal-700" },
    { href: "/admin/submissions", label: "Submissions", icon: Inbox, color: "from-violet-600 to-purple-700" },
    { href: "/admin/books", label: "Books Library", icon: Sparkles, color: "from-blue-500 to-indigo-600" },
    { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote, color: "from-amber-400 to-orange-500" },
    { href: "/admin/newsletter", label: "Newsletters", icon: Mail, color: "from-rose-500 to-pink-600" },
    { href: "/admin/team", label: "Editorial Team", icon: Users, color: "from-purple-600 to-pink-700" },
    { href: "/admin/enquiries", label: "Enquiries", icon: MessageSquare, color: "from-rose-600 to-red-700" },
    { href: "/admin/gallery", label: "Gallery", icon: Image, color: "from-cyan-600 to-blue-700" }
  ];
  const isActive = (href) => {
    if (href === "/admin") return url === href;
    return url.startsWith(href);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-blue-100 selection:text-blue-700", children: [
    /* @__PURE__ */ jsxs("aside", { className: "w-80 bg-white border-r border-slate-200/60 fixed h-screen flex flex-col z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]", children: [
      /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          className: "flex items-center gap-4 group cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform duration-300", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-slate-900 tracking-tight", children: "Sanmati" }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-blue-600/80", children: "Control Center" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("nav", { className: "flex-grow px-4 space-y-1.5 overflow-y-auto py-4 custom-scrollbar", children: links.map((link, index) => {
        const Icon = link.icon;
        const active = isActive(link.href);
        return /* @__PURE__ */ jsxs(
          Link,
          {
            href: link.href,
            className: `group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl font-semibold transition-all duration-300 relative ${active ? "text-white shadow-lg shadow-blue-500/10" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`,
            children: [
              active && /* @__PURE__ */ jsx(
                motion.div,
                {
                  layoutId: "sidebarActiveTab",
                  className: `absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl`,
                  transition: { type: "spring", bounce: 0.2, duration: 0.6 }
                }
              ),
              /* @__PURE__ */ jsx(Icon, { className: `w-5 h-5 relative z-10 ${active ? "text-white" : "text-slate-400 group-hover:text-blue-600 transition-colors"}` }),
              /* @__PURE__ */ jsx("span", { className: "relative z-10 text-[0.9375rem]", children: link.label }),
              active && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  className: "ml-auto relative z-10",
                  children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-white/70" })
                }
              )
            ]
          },
          link.href
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "p-6 mt-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 rounded-3xl p-4 border border-slate-100 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold shadow-sm", children: user.full_name.charAt(0) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-900 truncate", children: user.full_name }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-500 truncate", children: user.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/logout",
            method: "post",
            as: "button",
            className: "flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors border border-rose-100",
            children: [
              /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4" }),
              "Sign Out"
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "flex-grow pl-80 min-h-screen", children: [
      /* @__PURE__ */ jsxs("header", { className: "h-24 sticky top-0 z-40 bg-white/70 backdrop-blur-2xl border-b border-slate-200/60 px-10 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ jsxs("div", { className: "relative group flex items-center", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-4 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search Command (⌘ K)",
              className: "bg-slate-100/50 border-none rounded-2xl pl-12 pr-6 py-2.5 text-sm w-80 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none text-slate-600 placeholder:text-slate-400 font-medium"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-emerald-600 uppercase tracking-widest", children: "Server Live" })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "relative w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all group", children: [
            /* @__PURE__ */ jsx(Bell, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { className: "absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all", children: /* @__PURE__ */ jsx(Settings, { className: "w-5 h-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-10 animate-in fade-in slide-in-from-bottom-4 duration-700", children })
    ] })
  ] });
}
export {
  AdminLayout as A
};
