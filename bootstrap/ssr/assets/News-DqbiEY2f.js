import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Calendar, ExternalLink, Image, Camera, Mail, ArrowRight } from "lucide-react";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-xD0Rcxqj.js";
import "@inertiajs/react";
import "react-hot-toast";
function GalleryNews() {
  const [selectedImage, setSelectedImage] = useState(null);
  const newsItems = [
    {
      title: "Sanmati Journal Featured in Academic Times",
      date: "Jan 12, 2026",
      source: "Academic Press",
      excerpt: "Highlighting the journal's commitment to open access and multidisciplinary research excellence."
    },
    {
      title: "Upcoming Seminar Announcement: Research Ethics",
      date: "Dec 30, 2025",
      source: "Press Release",
      excerpt: "Sanmati Journal announces its first national level seminar focusing on modern academic ethics."
    }
  ];
  const newsPhotos = [
    "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.35 PM (2).jpeg",
    "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.36 PM (2).jpeg",
    "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.37 PM (1).jpeg",
    "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.39 PM (1).jpeg",
    "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.39 PM (2).jpeg",
    "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.40 PM (1).jpeg",
    "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.40 PM.jpeg",
    "/gallery/news/WhatsApp Image 2026-01-28 at 7.33.41 PM (2).jpeg"
  ];
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
      /* @__PURE__ */ jsx(
        PageHeader,
        {
          title: "News & Media",
          breadcrumb: "Gallery",
          subtitle: "Latest updates and coverage from the academic world"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 md:p-12 rounded-[40px] border border-gray-200 shadow-sm relative overflow-hidden h-fit", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Newspaper, { className: "w-32 h-32" }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-8 font-serif", children: "Journal in the Media" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              newsItems.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group p-8 bg-warm-bg rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary-dark text-[10px] font-black uppercase tracking-widest rounded-full", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3" }),
                    " ",
                    item.date
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold text-gray-400 italic", children: [
                    "Source: ",
                    item.source
                  ] })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-dark mb-3 group-hover:text-dark transition-colors font-serif", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-6", children: item.excerpt }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline transition-all", children: [
                  "Read Full Article ",
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
                ] })
              ] }, i)),
              /* @__PURE__ */ jsx("div", { className: "p-10 border-2 border-dashed border-gray-200 rounded-3xl text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400 font-medium italic", children: "More news and announcements coming soon." }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-serif font-bold text-dark flex items-center gap-3 font-serif", children: [
            /* @__PURE__ */ jsx(Image, { className: "text-primary" }),
            " Media Gallery"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: newsPhotos.map((src, idx) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: idx * 0.1 },
              className: "relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm bg-slate-200",
              onClick: () => setSelectedImage(src),
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src,
                    alt: `News Photo ${idx + 1}`,
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsx(Camera, { className: "text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all w-8 h-8" }) })
              ]
            },
            idx
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 bg-dark text-white rounded-[32px] mt-8", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "Media Inquiry?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-4", children: "For press kits or editorial interviews." }),
            /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "w-full py-3 bg-white text-dark font-bold rounded-xl hover:bg-primary/5 transition-all flex items-center justify-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
              " Contact PR"
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selectedImage && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out",
        onClick: () => setSelectedImage(null),
        children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.8, opacity: 0 },
              className: "relative max-w-5xl w-full h-[80vh] flex items-center justify-center",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  src: selectedImage,
                  alt: "Full view",
                  className: "max-w-full max-h-full object-contain rounded-xl"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-8 right-8 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6 rotate-45" }) })
        ]
      }
    ) })
  ] });
}
export {
  GalleryNews as default
};
