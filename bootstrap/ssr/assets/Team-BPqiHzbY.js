import { jsx, jsxs } from "react/jsx-runtime";
import { useForm, router } from "@inertiajs/react";
import { UserPlus, Users, GraduationCap, Trash2, Briefcase } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-D-2UQ6yb.js";
import "framer-motion";
function Team({ team = [] }) {
  const { data, setData, post, reset, processing } = useForm({
    name: "",
    role: "",
    qualifications: "",
    experience: "",
    bio: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post("/admin/team", {
      onSuccess: () => reset()
    });
  };
  const deleteMember = (id) => {
    if (confirm("Are you sure you want to remove this member?")) {
      router.delete(`/admin/team/${id}`);
    }
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-2", children: "Editorial Board" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Manage the distinguished members of our editorial team." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-3xl border border-gray-200 shadow-sm", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-dark mb-6 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(UserPlus, { className: "text-primary w-5 h-5" }),
        " New Board Member"
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Full Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.name,
                onChange: (e) => setData("name", e.target.value),
                required: true,
                type: "text",
                placeholder: "e.g., Dr. Aradhya Jain",
                className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Designation / Role" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.role,
                onChange: (e) => setData("role", e.target.value),
                required: true,
                type: "text",
                placeholder: "e.g., Editor-in-Chief",
                className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Qualifications" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.qualifications,
                onChange: (e) => setData("qualifications", e.target.value),
                type: "text",
                placeholder: "e.g., PhD in Engineering",
                className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Affiliation / Experience" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.experience,
                onChange: (e) => setData("experience", e.target.value),
                type: "text",
                placeholder: "e.g., Professor at XYZ University",
                className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Profile Photo" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              onChange: (e) => setData("photo", e.target.files[0]),
              accept: "image/*",
              className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/5 file:text-primary-dark hover:file:bg-primary/10"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            disabled: processing,
            type: "submit",
            className: "w-full bg-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md disabled:opacity-50",
            children: "Add to Editorial Board"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: team.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "col-span-full bg-white p-20 flex flex-col items-center justify-center text-gray-400 border border-gray-200 rounded-3xl", children: [
      /* @__PURE__ */ jsx(Users, { className: "w-16 h-16 mb-4 opacity-10" }),
      /* @__PURE__ */ jsx("p", { className: "font-bold italic text-lg", children: "No board members added yet." })
    ] }) : team.map((member) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all group", children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-2xl bg-gray-50 border border-slate-100 flex items-center justify-center overflow-hidden", children: member.photo_url ? /* @__PURE__ */ jsx("img", { loading: "lazy", src: `/storage/${member.photo_url}`, alt: member.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsx(GraduationCap, { className: "w-10 h-10 text-slate-300" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => deleteMember(member.id),
            className: "p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-all",
            title: "Delete",
            children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-dark group-hover:text-dark transition-colors", children: member.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-primary uppercase tracking-widest", children: member.role })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-slate-50 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3 text-sm text-gray-500", children: [
            /* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("p", { className: "leading-tight", children: member.qualifications || "No qualifications listed" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3 text-sm text-gray-500", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("p", { className: "leading-tight", children: member.experience || "No experience listed" })
          ] })
        ] })
      ] })
    ] }) }, member.id)) })
  ] }) });
}
export {
  Team as default
};
