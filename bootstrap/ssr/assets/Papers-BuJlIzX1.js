import { jsx, jsxs } from "react/jsx-runtime";
import { useForm, router } from "@inertiajs/react";
import { FolderPlus, CheckCircle2, Trash2, FilePlus, FileText, Eye } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-B8jAos2V.js";
import "framer-motion";
function Papers({ papers = [], issues = [] }) {
  const issueForm = useForm({
    volume: "",
    number: "",
    year: (/* @__PURE__ */ new Date()).getFullYear(),
    month_range: "",
    is_current: false
  });
  const paperForm = useForm({
    issue_id: "",
    title: "",
    authors: "",
    category: "Research Paper",
    file_url: "",
    is_featured: false
  });
  const submitIssue = (e) => {
    e.preventDefault();
    issueForm.post("/admin/issues", {
      onSuccess: () => issueForm.reset()
    });
  };
  const submitPaper = (e) => {
    e.preventDefault();
    paperForm.post("/admin/papers", {
      onSuccess: () => paperForm.reset()
    });
  };
  const toggleIssueCurrent = (id) => {
    router.patch(`/admin/issues/${id}/toggle`);
  };
  const deleteIssue = (id) => {
    if (confirm("Are you sure you want to delete this issue? All papers in it might lead to errors.")) {
      router.delete(`/admin/issues/${id}`);
    }
  };
  const deletePaper = (id) => {
    if (confirm("Are you sure you want to delete this paper?")) {
      router.delete(`/admin/papers/${id}`);
    }
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-2", children: "Issues & Papers" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Manage journal volumes, issues, and research paper uploads." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1 space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-dark mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FolderPlus, { className: "text-primary w-5 h-5" }),
            " New Issue"
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submitIssue, className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  value: issueForm.data.volume,
                  onChange: (e) => issueForm.setData("volume", e.target.value),
                  required: true,
                  placeholder: "Volume",
                  className: "px-4 py-2.5 bg-warm-bg border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  value: issueForm.data.number,
                  onChange: (e) => issueForm.setData("number", e.target.value),
                  required: true,
                  placeholder: "Issue",
                  className: "px-4 py-2.5 bg-warm-bg border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: issueForm.data.year,
                onChange: (e) => issueForm.setData("year", e.target.value),
                required: true,
                type: "number",
                placeholder: "Year",
                className: "w-full px-4 py-2.5 bg-warm-bg border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: issueForm.data.month_range,
                onChange: (e) => issueForm.setData("month_range", e.target.value),
                placeholder: "Months (e.g., Jan-Mar)",
                className: "w-full px-4 py-2.5 bg-warm-bg border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
              }
            ),
            /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer pt-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  checked: issueForm.data.is_current,
                  onChange: (e) => issueForm.setData("is_current", e.target.checked),
                  type: "checkbox",
                  className: "w-4 h-4 rounded text-primary focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-gray-600 uppercase tracking-widest", children: "Mark as Current Issue" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                disabled: issueForm.processing,
                type: "submit",
                className: "w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-all text-sm shadow-lg shadow-blue-900/10 disabled:opacity-50",
                children: "Create New Issue"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-dark mb-6", children: "Existing Issues" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar", children: issues.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-gray-400 py-4 text-sm italic", children: "No issues created yet." }) : issues.map((issue) => /* @__PURE__ */ jsxs("div", { className: `p-4 rounded-2xl border transition-all flex justify-between items-center group ${issue.is_current ? "bg-primary/5 border-blue-100" : "bg-warm-bg border-slate-100 hover:border-gray-200"}`, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("p", { className: "font-bold text-dark text-sm", children: [
                "Vol. ",
                issue.volume,
                ", No. ",
                issue.number
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-gray-500 font-bold uppercase tracking-widest", children: [
                issue.month_range,
                " ",
                issue.year
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => toggleIssueCurrent(issue.id),
                  className: `p-2 rounded-lg transition-all ${issue.is_current ? "text-primary" : "text-gray-400 hover:text-primary"}`,
                  title: "Set as Current",
                  children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => deleteIssue(issue.id),
                  className: "p-2 text-gray-400 hover:text-rose-600 rounded-lg transition-all",
                  title: "Delete Issue",
                  children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
                }
              )
            ] })
          ] }, issue.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-3xl border border-gray-200 shadow-sm", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-dark mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FilePlus, { className: "text-emerald-600 w-5 h-5" }),
            " Upload New Research Paper"
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submitPaper, className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Select Issue" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    value: paperForm.data.issue_id,
                    onChange: (e) => paperForm.setData("issue_id", e.target.value),
                    required: true,
                    className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none text-sm",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Choose an issue..." }),
                      issues.map((issue) => /* @__PURE__ */ jsxs("option", { value: issue.id, children: [
                        "Vol. ",
                        issue.volume,
                        ", No. ",
                        issue.number,
                        " (",
                        issue.year,
                        ")"
                      ] }, issue.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Paper Category" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    value: paperForm.data.category,
                    onChange: (e) => paperForm.setData("category", e.target.value),
                    required: true,
                    className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none text-sm",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "Research Paper", children: "Research Paper" }),
                      /* @__PURE__ */ jsx("option", { value: "Review Paper", children: "Review Paper" }),
                      /* @__PURE__ */ jsx("option", { value: "Case Study", children: "Case Study" }),
                      /* @__PURE__ */ jsx("option", { value: "Short Communication", children: "Short Communication" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Paper Title" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  value: paperForm.data.title,
                  onChange: (e) => paperForm.setData("title", e.target.value),
                  required: true,
                  rows: 2,
                  placeholder: "Full title of the research paper",
                  className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "Authors" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    value: paperForm.data.authors,
                    onChange: (e) => paperForm.setData("authors", e.target.value),
                    required: true,
                    placeholder: "e.g., Dr. Jane Smith, Prof. Robert Brown",
                    className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs font-black text-gray-400 uppercase tracking-widest ml-1", children: "PDF File" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "file",
                    onChange: (e) => paperForm.setData("file_url", e.target.files[0]),
                    required: true,
                    accept: ".pdf,.doc,.docx",
                    className: "w-full px-5 py-3 bg-warm-bg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/5 file:text-primary-dark hover:file:bg-primary/10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: paperForm.data.is_featured,
                    onChange: (e) => paperForm.setData("is_featured", e.target.checked),
                    className: "w-4 h-4 rounded text-primary focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-dark/80", children: "Feature this paper on Homepage" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                disabled: paperForm.processing,
                type: "submit",
                className: "w-full bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/10 disabled:opacity-50",
                children: "Upload & Index Paper"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "p-8 border-b border-slate-100 flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-dark", children: "Recent Paper Uploads" }) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
            /* @__PURE__ */ jsx("thead", { className: "bg-warm-bg/50", children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-100", children: [
              /* @__PURE__ */ jsx("th", { className: "px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest", children: "Issue" }),
              /* @__PURE__ */ jsx("th", { className: "px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest", children: "Paper Details" }),
              /* @__PURE__ */ jsx("th", { className: "px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest", children: "Category" }),
              /* @__PURE__ */ jsx("th", { className: "px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-50", children: papers.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 4, className: "px-8 py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-gray-400", children: [
              /* @__PURE__ */ jsx(FileText, { className: "w-12 h-12 mb-4 opacity-10" }),
              /* @__PURE__ */ jsx("p", { className: "font-bold italic", children: "No papers uploaded yet." })
            ] }) }) }) : papers.map((paper) => {
              var _a, _b, _c;
              return /* @__PURE__ */ jsxs("tr", { className: "hover:bg-warm-bg/50 transition-colors group", children: [
                /* @__PURE__ */ jsxs("td", { className: "px-8 py-6 whitespace-nowrap", children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-xs font-bold text-dark", children: [
                    "Vol. ",
                    (_a = paper.issue) == null ? void 0 : _a.volume,
                    ", No. ",
                    (_b = paper.issue) == null ? void 0 : _b.number
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold text-gray-400", children: (_c = paper.issue) == null ? void 0 : _c.year })
                ] }),
                /* @__PURE__ */ jsxs("td", { className: "px-8 py-6 max-w-md", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-bold text-dark text-sm mb-1 leading-snug line-clamp-2", children: paper.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 line-clamp-1", children: paper.authors })
                ] }),
                /* @__PURE__ */ jsx("td", { className: "px-8 py-6", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-tight border border-emerald-100 italic", children: paper.category }) }),
                /* @__PURE__ */ jsx("td", { className: "px-8 py-6 text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
                  /* @__PURE__ */ jsx("a", { href: `/storage/${paper.file_url}`, target: "_blank", className: "p-2 text-primary hover:bg-primary/5 rounded-lg transition-all", title: "View PDF", children: /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => deletePaper(paper.id),
                      className: "p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-all",
                      title: "Delete Paper",
                      children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
                    }
                  )
                ] }) })
              ] }, paper.id);
            }) })
          ] }) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Papers as default
};
