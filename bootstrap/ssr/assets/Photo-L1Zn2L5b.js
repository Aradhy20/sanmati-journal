import { jsxs, jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ZoomIn, Camera, Send, X } from "lucide-react";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-EqZlJ2m3.js";
import "@inertiajs/react";
import "react-hot-toast";
function GalleryPhoto() {
  const [selectedImage, setSelectedImage] = useState(null);
  const photos = [
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.35 PM (1).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.35 PM.jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.36 PM (1).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.36 PM.jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.37 PM (2).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.37 PM (3).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.37 PM.jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.38 PM (1).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.38 PM (2).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.38 PM.jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.39 PM.jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.40 PM (2).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.41 PM (1).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.41 PM.jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.42 PM (1).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.42 PM (2).jpeg",
    "/gallery/photos/WhatsApp Image 2026-01-28 at 7.33.42 PM.jpeg"
  ];
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
      /* @__PURE__ */ jsx(
        PageHeader,
        {
          title: "Photo Gallery",
          breadcrumb: "Gallery",
          subtitle: "Visual documentation of our academic community"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto mt-12", children: [
        /* @__PURE__ */ jsx("div", { className: "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6", children: photos.map((src, idx) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: idx * 0.05 },
            className: "break-inside-avoid relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-zoom-in",
            onClick: () => setSelectedImage(src),
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  src,
                  alt: `Academic Event ${idx + 1}`,
                  className: "w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/60 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500", children: /* @__PURE__ */ jsx(ZoomIn, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest mb-1", children: [
                    /* @__PURE__ */ jsx(Camera, { className: "w-3 h-3" }),
                    " Event Archive"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-white font-serif font-bold text-lg", children: "Academic Discourse 2026" })
                ] })
              ] })
            ]
          },
          idx
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20 p-6 lg:p-12 bg-white rounded-[48px] border border-gray-200 text-center relative overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mt-32 opacity-50 blur-3xl" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-2xl mx-auto", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-4 font-serif", children: "Capturing Academic Moments" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-10 leading-relaxed italic", children: '"Our gallery documents the seminars, conferences, and collaborative sessions that define the Sanmati Journal spirit."' }),
            /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20", children: [
              "Contribute Photos ",
              /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" })
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
        className: "fixed inset-0 z-[60] bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out",
        onClick: () => setSelectedImage(null),
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[70]",
              onClick: () => setSelectedImage(null),
              children: /* @__PURE__ */ jsx(X, { className: "w-10 h-10" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scale: 0.9, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.9, opacity: 0 },
              className: "relative w-full h-full flex items-center justify-center",
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
          )
        ]
      }
    ) })
  ] });
}
export {
  GalleryPhoto as default
};
