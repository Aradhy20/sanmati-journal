import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";
function CitationGenerator({ paper }) {
  const [activeFormat, setActiveFormat] = useState("apa");
  const generateAPA = () => {
    var _a, _b, _c;
    const year = ((_a = paper.issue) == null ? void 0 : _a.year) || (/* @__PURE__ */ new Date()).getFullYear();
    const volumeStr = ((_b = paper.issue) == null ? void 0 : _b.volume) ? `, ${paper.issue.volume}` : "";
    const numberStr = ((_c = paper.issue) == null ? void 0 : _c.number) ? `(${paper.issue.number})` : "";
    return `${paper.authors} (${year}). ${paper.title}. Sanmati Journal${volumeStr}${numberStr}.`;
  };
  const generateMLA = () => {
    var _a, _b, _c;
    const year = ((_a = paper.issue) == null ? void 0 : _a.year) || (/* @__PURE__ */ new Date()).getFullYear();
    const volumeStr = ((_b = paper.issue) == null ? void 0 : _b.volume) ? `, vol. ${paper.issue.volume}` : "";
    const numberStr = ((_c = paper.issue) == null ? void 0 : _c.number) ? `, no. ${paper.issue.number}` : "";
    return `${paper.authors}. "${paper.title}." Sanmati Journal${volumeStr}${numberStr}, ${year}.`;
  };
  const generateBibTeX = () => {
    var _a, _b, _c;
    const year = ((_a = paper.issue) == null ? void 0 : _a.year) || (/* @__PURE__ */ new Date()).getFullYear();
    const authorStr = paper.authors.replace(/,/g, " and");
    const citationKey = `${paper.authors.split(" ")[0].replace(/[^a-zA-Z]/g, "")}${year}`;
    return `@article{${citationKey},
    title = {${paper.title}},
    author = {${authorStr}},
    journal = {Sanmati Journal},
    year = {${year}},
    volume = {${((_b = paper.issue) == null ? void 0 : _b.volume) || ""}},
    number = {${((_c = paper.issue) == null ? void 0 : _c.number) || ""}}
}`;
  };
  const citations = {
    apa: generateAPA(),
    mla: generateMLA(),
    bibtex: generateBibTeX()
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(citations[activeFormat]).then(() => toast.success("Citation copied to clipboard!")).catch(() => toast.error("Failed to copy."));
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "flex border-b border-slate-200 bg-white", children: ["apa", "mla", "bibtex"].map((format) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setActiveFormat(format),
        className: `flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${activeFormat === format ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
        children: format
      },
      format
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleCopy,
          className: "p-2 text-slate-400 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-lg transition-all",
          title: "Copy to Clipboard",
          "aria-label": "Copy citation to clipboard",
          children: /* @__PURE__ */ jsx(Copy, { className: "w-5 h-5" })
        }
      ) }),
      /* @__PURE__ */ jsx("pre", { className: "text-slate-800 font-serif leading-relaxed text-sm pr-12 whitespace-pre-wrap break-words", children: citations[activeFormat] })
    ] })
  ] });
}
export {
  CitationGenerator as C
};
