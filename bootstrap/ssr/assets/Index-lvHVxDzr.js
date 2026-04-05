import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { M as MainLayout, S as Seo } from "./MainLayout-DpDjnVwe.js";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import "react-hot-toast";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
function BlogIndex() {
  const posts = [
    {
      slug: "understanding-ugc-care-list-importance",
      title: "Why Publishing in a UGC CARE Listed Journal Matters",
      excerpt: "An in-depth look at how UGC CARE indexing impacts your academic career, API scores, and university promotions in India.",
      author: "Dr. Namrta Jain",
      date: "Oct 15, 2024",
      category: "Academic Publishing",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop"
    },
    {
      slug: "how-to-write-abstract-research-paper",
      title: "Crafting the Perfect Abstract for Your Research Paper",
      excerpt: "The abstract is the first thing reviewers read. Learn the 5 essential components of a winning research abstract.",
      author: "Editorial Board",
      date: "Sep 28, 2024",
      category: "Writing Tips",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=600&auto=format&fit=crop"
    },
    {
      slug: "multidisciplinary-research-future",
      title: "The Rise of Multidisciplinary Research in the 21st Century",
      excerpt: "Breaking down the silos between science, humanities, and commerce to solve complex global challenges.",
      author: "Dr. Ratnesh Kumar Jain",
      date: "Sep 10, 2024",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop"
    }
  ];
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Academic Blog & Research News",
        description: "Read the latest insights, submission tips, and news from the Sanmati Spectrum academic publishing ecosystem."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Journal Blog",
        breadcrumb: "Blog",
        subtitle: "Insights on academic publishing, research methodologies, and editorial news."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-8", children: /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
          /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.3em]", children: "Latest Articles" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-serif font-bold text-dark leading-tight", children: [
          "Publishing ",
          /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Insights" }),
          " & News"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post, index) => /* @__PURE__ */ jsxs(
        motion.article,
        {
          ...fadeInUp,
          transition: { delay: index * 0.1, duration: 0.6 },
          className: "bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group flex flex-col h-full",
          children: [
            /* @__PURE__ */ jsxs(Link, { href: `/blog/${post.slug}`, className: "block relative aspect-[16/10] overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: post.image,
                  alt: post.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "bg-white/90 backdrop-blur text-primary text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-sm", children: post.category }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-8 flex flex-col flex-grow", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-[11px] font-bold text-muted mb-4 uppercase tracking-widest", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5 text-secondary" }),
                  " ",
                  post.date
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5 text-secondary" }),
                  " ",
                  post.author
                ] })
              ] }),
              /* @__PURE__ */ jsx(Link, { href: `/blog/${post.slug}`, className: "block mb-4", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-dark group-hover:text-primary transition-colors leading-snug line-clamp-2", children: post.title }) }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3", children: post.excerpt }),
              /* @__PURE__ */ jsx("div", { className: "mt-auto pt-6 border-t border-gray-50", children: /* @__PURE__ */ jsxs(Link, { href: `/blog/${post.slug}`, className: "inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors group/link", children: [
                "Read Full Article ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover/link:translate-x-1 transition-transform" })
              ] }) })
            ] })
          ]
        },
        index
      )) })
    ] })
  ] });
}
export {
  BlogIndex as default
};
