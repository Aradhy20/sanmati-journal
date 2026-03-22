import { jsx, jsxs } from "react/jsx-runtime";
import { useForm, router } from "@inertiajs/react";
import { Plus, Image, Trash2 } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-B8jAos2V.js";
import "framer-motion";
function Gallery({ gallery = [] }) {
  const { data, setData, post, reset, processing } = useForm({
    url: "",
    caption: "",
    category: "news"
  });
  const submit = (e) => {
    e.preventDefault();
    post("/admin/gallery", {
      onSuccess: () => reset()
    });
  };
  const deleteItem = (id) => {
    if (confirm("Are you sure you want to delete this photo?")) {
      router.delete(`/admin/gallery/${id}`);
    }
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-2", children: "Media Library" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Manage and categorize photos for the gallery and news sections." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-3xl border border-gray-200 shadow-sm", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-dark mb-6 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Plus, { className: "text-primary w-5 h-5" }),
        " Add New Photo"
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Upload Photo" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "file",
                onChange: (e) => setData("image", e.target.files[0]),
                required: true,
                accept: "image/*",
                className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/5 file:text-primary-dark hover:file:bg-primary/10"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Category" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: data.category,
                onChange: (e) => setData("category", e.target.value),
                required: true,
                className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "news", children: "News & Events" }),
                  /* @__PURE__ */ jsx("option", { value: "campus", children: "Campus Life" }),
                  /* @__PURE__ */ jsx("option", { value: "academic", children: "Academic Sessions" }),
                  /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Caption" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              value: data.caption,
              onChange: (e) => setData("caption", e.target.value),
              type: "text",
              placeholder: "Brief description of the photo",
              className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            disabled: processing,
            type: "submit",
            className: "w-full bg-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md disabled:opacity-50",
            children: "Add to Media Library"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: gallery.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "col-span-full bg-white p-20 flex flex-col items-center justify-center text-gray-400 border border-gray-200 rounded-3xl", children: [
      /* @__PURE__ */ jsx(Image, { className: "w-16 h-16 mb-4 opacity-10" }),
      /* @__PURE__ */ jsx("p", { className: "font-bold italic text-lg", children: "No photos in the library yet." })
    ] }) : gallery.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden group hover:shadow-xl transition-all", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative h-48 bg-gray-50", children: [
        /* @__PURE__ */ jsx("img", { loading: "lazy", src: `/storage/${item.url}`, alt: item.caption, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => deleteItem(item.id),
            className: "p-2 bg-white/90 backdrop-blur text-rose-600 rounded-lg shadow-sm hover:bg-rose-600 hover:text-white transition-all",
            title: "Delete Photo",
            children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/20 shadow-sm", children: item.category }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-5", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-dark/80 line-clamp-2 leading-relaxed", children: item.caption || "No caption provided" }) })
    ] }, item.id)) })
  ] }) });
}
export {
  Gallery as default
};
