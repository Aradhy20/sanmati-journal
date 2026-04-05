import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "react";
import { M as MainLayout, S as Seo } from "./MainLayout-ahIB28Vb.js";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { motion } from "framer-motion";
import { Library, Star, ShoppingCart, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import "react-hot-toast";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};
function BookPublication({ books }) {
  const dbBooks = books || [];
  const hardcodedBooks = [
    {
      "id": 1,
      "title": "Published Volume 1",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.23 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 2,
      "title": "Published Volume 2",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.24 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 3,
      "title": "Published Volume 3",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.24 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 4,
      "title": "Published Volume 4",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.25 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 5,
      "title": "Published Volume 5",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.26 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 6,
      "title": "Published Volume 6",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.27 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 7,
      "title": "Published Volume 7",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.27 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 8,
      "title": "Published Volume 8",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.29 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 9,
      "title": "Published Volume 9",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.29 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 10,
      "title": "Published Volume 10",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.30 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 11,
      "title": "Published Volume 11",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.33 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 12,
      "title": "Published Volume 12",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.34 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 13,
      "title": "Published Volume 13",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.35 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 14,
      "title": "Published Volume 14",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.36 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 15,
      "title": "Published Volume 15",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.37 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 16,
      "title": "Published Volume 16",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.38 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 17,
      "title": "Published Volume 17",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.38 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 18,
      "title": "Published Volume 18",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.39 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 19,
      "title": "Published Volume 19",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.39 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 20,
      "title": "Published Volume 20",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.40 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 21,
      "title": "Published Volume 21",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.41 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 22,
      "title": "Published Volume 22",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.41 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 23,
      "title": "Published Volume 23",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.42 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 24,
      "title": "Published Volume 24",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.42 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 25,
      "title": "Published Volume 25",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.43 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 26,
      "title": "Published Volume 26",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.44 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 27,
      "title": "Published Volume 27",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.45 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 28,
      "title": "Published Volume 28",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.45 PM (2).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 29,
      "title": "Published Volume 29",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.45 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 30,
      "title": "Published Volume 30",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.46 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 31,
      "title": "Published Volume 31",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.47 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 32,
      "title": "Published Volume 32",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.47 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 33,
      "title": "Published Volume 33",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.48 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 34,
      "title": "Published Volume 34",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.48 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 35,
      "title": "Published Volume 35",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.49 PM (1).jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 36,
      "title": "Published Volume 36",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.49 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    },
    {
      "id": 37,
      "title": "Published Volume 37",
      "author": "Sanmati Journal Collections",
      "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.50 PM.jpeg",
      "amazon_link": "",
      "flipkart_link": ""
    }
  ];
  const displayBooks = dbBooks.length > 0 ? dbBooks : hardcodedBooks;
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Book Publications",
        description: "Explore the expansive library of academic books, treatises, and emerging discourse volumes published by Sanmati Journal."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Monographs & Books",
        breadcrumb: "Publications",
        subtitle: "Exclusive scholarly volumes, extensive research compilations, and foundational textbooks by leading international authors."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative", children: [
      /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "relative group mb-10 lg:mb-20", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" }),
        /* @__PURE__ */ jsxs("div", { className: "relative bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-14 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-6 lg:p-12 opacity-[0.03] rotate-12 pointer-events-none", children: /* @__PURE__ */ jsx(Library, { className: "w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-dark" }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 prose prose-lg prose-slate max-w-none", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
                /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.4em]", children: "The Digital Library" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-xl md:text-2xl lg:text-3xl md:text-5xl font-serif font-bold text-dark mb-6 leading-[1.1]", children: [
                "A Legacy of ",
                /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Published Excellence" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-dark/70 font-medium leading-relaxed mb-6", children: "Beyond our quarterly journals, JTS Publications curates and publishes highly specialized monographs and books focusing on multifaceted disciplines." }),
              /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: "Browse our extensive repository of beautifully bound academic books. Each publication undergoes rigorous peer-review and editorial formatting to meet global university press standards." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 flex justify-center lg:justify-end", children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg border border-primary/10 rounded-3xl p-8 text-center max-w-xs w-full shadow-inner", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary", children: /* @__PURE__ */ jsx(Star, { className: "w-8 h-8" }) }),
              /* @__PURE__ */ jsxs("h4", { className: "text-2xl md:text-3xl lg:text-4xl font-black text-dark mb-2", children: [
                displayBooks.length,
                "+"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-black uppercase tracking-widest text-muted", children: "Volumes Published" })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark", children: "Latest Releases" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted mt-2", children: "Discover our recently published titles across all major disciplines." })
      ] }),
      displayBooks.length > 0 ? /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: staggerContainer,
          initial: "initial",
          whileInView: "whileInView",
          viewport: { once: true, margin: "-100px" },
          className: "grid grid-cols-2 ml:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 xl:gap-8",
          children: displayBooks.map((book, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              variants: fadeInUp,
              className: "group relative bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-surface mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-white/10 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-24 h-full bg-white blur-[50px] opacity-0 group-hover:opacity-20 transform translate-x-full group-hover:-translate-x-full transition-all duration-1000 z-10" }),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: book.image_url,
                      alt: book.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-dark/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-4 gap-3", children: [
                    book.amazon_link && /* @__PURE__ */ jsxs("a", { href: book.amazon_link, target: "_blank", rel: "noreferrer", className: "w-full py-2.5 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white rounded-xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-md", children: [
                      /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-black tracking-wide", children: "AMAZON" })
                    ] }),
                    book.flipkart_link && /* @__PURE__ */ jsxs("a", { href: book.flipkart_link, target: "_blank", rel: "noreferrer", className: "w-full py-2.5 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white rounded-xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-md", children: [
                      /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-black tracking-wide", children: "FLIPKART" })
                    ] }),
                    !book.amazon_link && !book.flipkart_link && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx("button", { className: "w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl mb-3", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5" }) }),
                      /* @__PURE__ */ jsx("span", { className: "text-white text-xs font-bold tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75", children: "View Details" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-auto px-2 pb-2", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-dark text-sm line-clamp-2 leading-snug group-hover:text-primary transition-colors", children: book.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-muted text-[10px] uppercase font-black tracking-widest mt-2 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary inline-block" }),
                    book.author || "JTS Publications"
                  ] })
                ] })
              ]
            },
            book.id || index
          ))
        }
      ) : /* @__PURE__ */ jsxs("div", { className: "text-center py-32 bg-surface rounded-[2.5rem] border border-gray-100 border-dashed", children: [
        /* @__PURE__ */ jsx(Library, { className: "w-16 h-16 text-muted/30 mx-auto mb-6" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark mb-2", children: "Library Updating" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Digital scans of the physical volumes are currently being processed into the catalog." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 lg:mt-24", children: /* @__PURE__ */ jsxs("div", { className: "bg-dark rounded-[2.5rem] p-6 lg:p-12 relative overflow-hidden text-center group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-dark to-primary/40" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.4]", style: { backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 2px, transparent 0)", backgroundSize: "32px 32px" } }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl lg:text-3xl md:text-4xl font-serif font-bold text-white mb-6", children: "Want to Publish Your Manuscript?" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg mb-10", children: "JTS Publications offers comprehensive editorial, peer-review, and physical printing services for academic authors. Turn your thesis into a globally distributed book." }),
          /* @__PURE__ */ jsxs(Link, { href: "/contact", className: "inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-dark font-black tracking-widest text-xs uppercase rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,196,180,0.3)] hover:-translate-y-1", children: [
            "Contact Editorial Board ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  BookPublication as default
};
