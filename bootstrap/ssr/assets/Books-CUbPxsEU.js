import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "@inertiajs/react";
import { Search, Plus, Book, ShoppingBag, Trash2, User, X, Image, Check } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-D-2UQ6yb.js";
function Books({ books }) {
  const [isAdding, setIsAdding] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    title: "",
    author: "",
    image: null,
    amazon_link: "",
    flipkart_link: "",
    is_published: true
  });
  const submit = (e) => {
    e.preventDefault();
    post("/admin/books", {
      onSuccess: () => {
        setIsAdding(false);
        reset();
      }
    });
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-[1600px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3", children: [
          "Publication Archive",
          /* @__PURE__ */ jsxs("div", { className: "px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black text-emerald-600 uppercase tracking-widest", children: [
            books.total,
            " Volumes"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-1 font-medium italic", children: '"Books are the quietest and most constant of friends; they are the most patient of teachers."' })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search publications...",
              className: "pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all w-64 shadow-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsAdding(true),
            className: "px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 group",
            children: [
              /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 group-hover:rotate-90 transition-transform" }),
              "Add New Volume"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "xl:col-span-3 space-y-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: /* @__PURE__ */ jsx(AnimatePresence, { children: books.data.map((book, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.05 },
          className: "group bg-white rounded-[2.5rem] p-6 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[3/4] rounded-[1.5rem] overflow-hidden mb-6 bg-slate-50 border border-slate-100 flex items-center justify-center", children: [
              book.image_url ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: book.image_url.startsWith("/") ? book.image_url : `/storage/${book.image_url}`,
                  alt: book.title,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                }
              ) : /* @__PURE__ */ jsx(Book, { className: "w-16 h-16 text-slate-200" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3", children: [
                book.amazon_link && /* @__PURE__ */ jsx("a", { href: book.amazon_link, target: "_blank", rel: "noreferrer", className: "w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-500 hover:scale-110 transition-transform shadow-lg", children: /* @__PURE__ */ jsx(ShoppingBag, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg",
                    onClick: () => {
                      if (confirm("Delete this volume?")) post(`/admin/books/${book.id}`, { _method: "delete" });
                    },
                    children: /* @__PURE__ */ jsx(Trash2, { className: "w-5 h-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsx("div", { className: `px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md ${book.is_published ? "bg-emerald-500/20 text-emerald-100 border border-emerald-500/30" : "bg-amber-500/20 text-amber-100 border border-amber-500/30"}`, children: book.is_published ? "Published" : "Draft" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors", children: book.title }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-slate-500 text-xs font-bold mb-4", children: [
                /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5" }),
                book.author || "Anonymous Author"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-slate-50 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest", children: "Added" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-700 uppercase tracking-widest", children: new Date(book.created_at).toLocaleDateString() })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black text-blue-600 uppercase tracking-widest", children: "Active" })
              ] })
            ] })
          ]
        },
        book.id
      )) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2.5rem] p-8 border border-slate-200/60 shadow-sm sticky top-32", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-slate-900 mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-amber-500" }),
          "Publication Stats"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-blue-50/50 border border-blue-100", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1", children: "Total Volumes" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-black text-blue-900", children: books.total })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1", children: "Live Online" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-black text-emerald-900", children: books.data.filter((b) => b.is_published).length })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-slate-100", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xs font-black text-slate-400 uppercase tracking-widest mb-4", children: "Platform Distribution" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs font-bold", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-600", children: "Amazon Marketplace" }),
              /* @__PURE__ */ jsxs("span", { className: "text-blue-600", children: [
                Math.round(books.data.filter((b) => b.amazon_link).length / books.total * 100) || 0,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full bg-slate-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-blue-500 rounded-full", style: { width: `${books.data.filter((b) => b.amazon_link).length / books.total * 100 || 0}%` } }) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isAdding && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-end p-4 md:p-8", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setIsAdding(false),
          className: "absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: { type: "spring", damping: 25, stiffness: 200 },
          className: "relative bg-white w-full max-w-xl h-full rounded-[3rem] shadow-2xl overflow-hidden flex flex-col",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "New Publication" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Fill in the professional details for the new volume" })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsAdding(false),
                  className: "w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm",
                  children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex-grow overflow-y-auto p-8 space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1", children: "Volume Title" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: data.title,
                    onChange: (e) => setData("title", e.target.value),
                    className: "w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300",
                    placeholder: "e.g. Advances in Scientific Research Vol. 4",
                    required: true
                  }
                ),
                errors.title && /* @__PURE__ */ jsx("p", { className: "text-rose-500 text-[10px] font-bold mt-1 ml-1", children: errors.title })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1", children: "Primary Author / Publication" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: data.author,
                    onChange: (e) => setData("author", e.target.value),
                    className: "w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300",
                    placeholder: "e.g. JTS Publications"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1", children: "Amazon Link" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "url",
                      value: data.amazon_link,
                      onChange: (e) => setData("amazon_link", e.target.value),
                      className: "w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none font-medium text-slate-700 text-sm",
                      placeholder: "https://amazon.in/..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1", children: "Flipkart Link" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "url",
                      value: data.flipkart_link,
                      onChange: (e) => setData("flipkart_link", e.target.value),
                      className: "w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none font-medium text-slate-700 text-sm",
                      placeholder: "https://flipkart.com/..."
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1", children: "Cover Artwork" }),
                /* @__PURE__ */ jsxs("div", { className: "relative group cursor-pointer", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "file",
                      onChange: (e) => setData("image", e.target.files[0]),
                      className: "absolute inset-0 opacity-0 z-10 cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 flex flex-col items-center justify-center gap-3 group-hover:bg-blue-50/50 group-hover:border-blue-200 transition-all", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Image, { className: "w-6 h-6" }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-slate-500", children: data.image ? data.image.name : "Click to upload cover image" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 uppercase font-black", children: "Max 2MB • JPG, PNG, WEBP" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-900", children: "Make Public Immediately?" }),
                  /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-500 font-medium italic", children: "Visible in the Books library section" })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setData("is_published", !data.is_published),
                    className: `w-14 h-8 rounded-full transition-all relative ${data.is_published ? "bg-blue-600" : "bg-slate-300"}`,
                    children: /* @__PURE__ */ jsx("div", { className: `absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-sm ${data.is_published ? "left-7" : "left-1"}` })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-8 border-t border-slate-100 bg-slate-50/50", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: submit,
                disabled: processing,
                className: "w-full py-4 bg-blue-600 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 disabled:opacity-50 flex items-center justify-center gap-3",
                children: processing ? /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Check, { className: "w-5 h-5" }),
                  "Publish Archive Volume"
                ] })
              }
            ) })
          ]
        }
      )
    ] }) })
  ] }) });
}
function Sparkles({ className }) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ jsx("path", { d: "M5 3v4" }),
    /* @__PURE__ */ jsx("path", { d: "M19 17v4" }),
    /* @__PURE__ */ jsx("path", { d: "M3 5h4" }),
    /* @__PURE__ */ jsx("path", { d: "M17 19h4" })
  ] });
}
export {
  Books as default
};
