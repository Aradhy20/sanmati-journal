import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { Sparkles, LayoutDashboard, Newspaper, FileText, Inbox, Users, MessageSquare, Image, LogOut, Bell, Settings } from "lucide-react";
import { motion } from "framer-motion";
function AdminLayout({ children }) {
  var _a;
  const { url } = usePage();
  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard, color: "from-blue-500 to-indigo-600" },
    { href: "/admin/news", label: "News Ticker", icon: Newspaper, color: "from-amber-500 to-orange-600" },
    { href: "/admin/papers", label: "Issues & Papers", icon: FileText, color: "from-emerald-500 to-teal-600" },
    { href: "/admin/submissions", label: "Submissions", icon: Inbox, color: "from-violet-500 to-purple-600" },
    { href: "/admin/team", label: "Editorial Team", icon: Users, color: "from-purple-500 to-pink-600" },
    { href: "/admin/enquiries", label: "Enquiries", icon: MessageSquare, color: "from-rose-500 to-red-600" },
    { href: "/admin/gallery", label: "Gallery", icon: Image, color: "from-cyan-500 to-blue-600" }
  ];
  const isActive = (href) => {
    if (href === "/admin") return url === href;
    return url.startsWith(href);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 flex transition-colors duration-300", children: [
    /* @__PURE__ */ jsxs("aside", { className: "w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200/50 fixed h-screen overflow-y-auto shadow-2xl shadow-slate-900/5 transition-all", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-8 border-b border-slate-100/50 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-white/5 opacity-10" }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            className: "relative z-10",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6 text-yellow-300" }),
                /* @__PURE__ */ jsx("h1", { className: "text-2xl font-serif font-bold text-white", children: "Sanmati Admin" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-200 font-bold uppercase tracking-widest", children: "Control Panel" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "p-6 space-y-2", children: links.map((link, index) => {
        const Icon = link.icon;
        const active = isActive(link.href);
        return /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: index * 0.05 },
            children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: link.href,
                className: `group flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all relative overflow-hidden ${active ? "text-white shadow-xl" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md"}`,
                children: [
                  active && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      layoutId: "activeTab",
                      className: `absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl`,
                      transition: { type: "spring", bounce: 0.2, duration: 0.6 }
                    }
                  ),
                  /* @__PURE__ */ jsx(Icon, { className: `w-5 h-5 relative z-10 ${active ? "animate-pulse" : "group-hover:scale-110 transition-transform"}` }),
                  /* @__PURE__ */ jsx("span", { className: "relative z-10", children: link.label }),
                  active && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { scale: 0 },
                      animate: { scale: 1 },
                      className: "ml-auto w-2 h-2 bg-white rounded-full relative z-10"
                    }
                  )
                ]
              }
            )
          },
          link.href
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 border-t border-slate-100/50 bg-white/50 backdrop-blur", children: /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-rose-600 hover:bg-rose-50 hover:shadow-lg transition-all w-full group", children: [
        /* @__PURE__ */ jsx(LogOut, { className: "w-5 h-5 group-hover:rotate-12 transition-transform" }),
        "Sign Out"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "flex-grow pl-72", children: [
      /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 px-10 py-6 shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 flex items-center gap-2", children: [
                ((_a = links.find((l) => isActive(l.href))) == null ? void 0 : _a.label) || "Dashboard",
                /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-black uppercase tracking-wider", children: "Live" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mt-1", children: "Manage your content with ease" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: "relative p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all group",
              children: [
                /* @__PURE__ */ jsx(Bell, { className: "w-5 h-5 text-slate-600 group-hover:text-slate-900" }),
                /* @__PURE__ */ jsx("span", { className: "absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full animate-pulse" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.05, rotate: 90 },
              whileTap: { scale: 0.95 },
              className: "p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all",
              children: /* @__PURE__ */ jsx(Settings, { className: "w-5 h-5 text-slate-600" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pl-4 border-l border-slate-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-900", children: "Admin User" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "sanmatijournal@gmail.com" })
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                whileHover: { scale: 1.1 },
                className: "w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-xl shadow-blue-500/30 cursor-pointer",
                children: "A"
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "p-10", children })
    ] })
  ] });
}
export {
  AdminLayout as A
};
