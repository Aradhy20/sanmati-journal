import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "@inertiajs/react";
import { Plus, Quote, Star, User, Trash2, X, ThumbsUp } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-D-2UQ6yb.js";
function Testimonials({ testimonials }) {
  const [isAdding, setIsAdding] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    role: "",
    text: "",
    stars: 5
  });
  const submit = (e) => {
    e.preventDefault();
    post("/admin/testimonials", {
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
          "Academic Endorsements",
          /* @__PURE__ */ jsx("div", { className: "px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-black text-amber-600 uppercase tracking-widest", children: "Global Recognition" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-1 font-medium italic", children: '"Testimonials are the voice of satisfied stakeholders, building trust through lived experiences."' })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsAdding(true),
          className: "px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 group",
          children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 group-hover:rotate-90 transition-transform" }),
            "Add Testimonial"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: /* @__PURE__ */ jsx(AnimatePresence, { children: testimonials.data.map((item, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: i * 0.05 },
        className: "group bg-white rounded-[2.5rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative flex flex-col",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-8 right-8 text-slate-100 group-hover:text-blue-50 transition-colors", children: /* @__PURE__ */ jsx(Quote, { className: "w-12 h-12 fill-current" }) }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-6", children: [...Array(5)].map((_, i2) => /* @__PURE__ */ jsx(
            Star,
            {
              className: `w-4 h-4 ${i2 < item.stars ? "text-amber-400 fill-amber-400" : "text-slate-200"}`
            },
            i2
          )) }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 text-sm font-medium leading-relaxed mb-8 italic flex-grow relative z-10", children: [
            '"',
            item.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between items-end pt-6 border-t border-slate-50", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400", children: item.image_url ? /* @__PURE__ */ jsx("img", { src: item.image_url, alt: item.name, className: "w-full h-full object-cover rounded-2xl" }) : /* @__PURE__ */ jsx(User, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-slate-900 leading-tight uppercase tracking-wide", children: item.name }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold text-blue-600 uppercase tracking-widest", children: item.role })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  if (confirm("Remove this testimonial?")) post(`/admin/testimonials/${item.id}`, { _method: "delete" });
                },
                className: "w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 opacity-0 group-hover:opacity-100 hover:bg-rose-500 hover:text-white transition-all shadow-sm",
                children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
              }
            )
          ] })
        ]
      },
      item.id
    )) }) }),
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
          className: "relative bg-white w-full max-w-lg h-full rounded-[3rem] shadow-2xl overflow-hidden flex flex-col",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 tracking-tight", children: "Add Feedback" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Capture scholarly appreciation from mentors/authors" })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsAdding(false),
                  className: "w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-sm",
                  children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex-grow overflow-y-auto p-8 space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1", children: "Reviewer Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: data.name,
                    onChange: (e) => setData("name", e.target.value),
                    className: "w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none",
                    placeholder: "e.g. Dr. Ramesh Kumar",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1", children: "Professional Designation" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: data.role,
                    onChange: (e) => setData("role", e.target.value),
                    className: "w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none",
                    placeholder: "e.g. Professor at IIT Roorkee",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1", children: "Testimonial Content" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    value: data.text,
                    onChange: (e) => setData("text", e.target.value),
                    rows: "4",
                    className: "w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-medium text-slate-700 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none resize-none shadow-sm",
                    placeholder: "Describe their experience with Sanmati Journal...",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1", children: "Star Rating" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100", children: [
                  [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setData("stars", star),
                      className: "transition-transform active:scale-90",
                      children: /* @__PURE__ */ jsx(
                        Star,
                        {
                          className: `w-8 h-8 ${star <= data.stars ? "text-amber-400 fill-amber-400" : "text-slate-200"}`
                        }
                      )
                    },
                    star
                  )),
                  /* @__PURE__ */ jsxs("span", { className: "ml-auto text-sm font-black text-amber-600", children: [
                    data.stars,
                    ".0 / 5.0"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-8 border-t border-slate-100 bg-slate-50/50", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: submit,
                disabled: processing,
                className: "w-full py-4 bg-blue-600 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 disabled:opacity-50 flex items-center justify-center gap-3",
                children: processing ? /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(ThumbsUp, { className: "w-5 h-5" }),
                  "Publish Endorsement"
                ] })
              }
            ) })
          ]
        }
      )
    ] }) })
  ] }) });
}
export {
  Testimonials as default
};
