import{jsx as t,jsxs as a,Fragment as l}from"react/jsx-runtime";import{useState as m}from"react";import{ArrowLeft as u,Check as h,Copy as $}from"lucide-react";import{M as x}from"./MainLayout-CQoE1JJ6.js";import{Link as g}from"@inertiajs/react";import"react-hot-toast";function S({paper:n=null}){const[d,o]=m(null),e=n||{id:"1",title:"Advancements in Multidisciplinary Empirical Research and Peer Review Governance",authors:"Dr Namrata Jain, Dr Ratnesh Kumar Jain",year:"2026",volume:"1",issue:"1",pages:"1–12",doi:"10.5281/zenodo.sanmati.01"},i=(e.doi||"").replace(/^https?:\/\/(dx\.)?doi\.org\//i,""),c={apa:`${e.authors} (${e.year}). ${e.title}. Sanmati Spectrum of Knowledge, ${e.volume}(${e.issue}), ${e.pages}. https://doi.org/${i}`,ieee:`${e.authors}, "${e.title}," Sanmati Spectrum of Knowledge, vol. ${e.volume}, no. ${e.issue}, pp. ${e.pages}, ${e.year}, doi: ${i}.`,mla:`${e.authors}. "${e.title}." Sanmati Spectrum of Knowledge, vol. ${e.volume}, no. ${e.issue}, ${e.year}, pp. ${e.pages}.`,chicago:`${e.authors}. "${e.title}." Sanmati Spectrum of Knowledge ${e.volume}, no. ${e.issue} (${e.year}): ${e.pages}. https://doi.org/${i}.`,harvard:`${e.authors}, ${e.year}. ${e.title}. Sanmati Spectrum of Knowledge, ${e.volume}(${e.issue}), pp.${e.pages}.`,bibtex:`@article{sanmati_${e.year}_${e.id},
  author = {${e.authors}},
  title = {${e.title}},
  journal = {Sanmati Spectrum of Knowledge & Emerging Discourse},
  volume = {${e.volume}},
  number = {${e.issue}},
  pages = {${e.pages}},
  year = {${e.year}},
  issn = {3108-1819},
  doi = {${i}}
}`,ris:`TY  - JOUR
AU  - ${e.authors}
TI  - ${e.title}
JO  - Sanmati Spectrum of Knowledge & Emerging Discourse
VL  - ${e.volume}
IS  - ${e.issue}
SP  - ${e.pages}
PY  - ${e.year}
SN  - 3108-1819
DO  - ${i}
ER  -`},p=(r,s)=>{navigator.clipboard.writeText(s),o(r),setTimeout(()=>o(null),2e3)};return t(x,{title:`Export Citation | ${e.title}`,description:"Export citation in APA 7, MLA 9, IEEE, Chicago, Harvard, BibTeX, and RIS formats.",children:t("div",{className:"py-12 bg-slate-50 min-h-[85vh]",children:a("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8",children:[a(g,{href:`/article/${e.id}`,className:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline",children:[t(u,{className:"w-4 h-4"})," Back to Research Article"]}),a("div",{className:"bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6",children:[a("div",{className:"space-y-2 border-b border-slate-100 pb-4",children:[t("span",{className:"px-3 py-1 bg-indigo-100 text-indigo-700 font-bold text-[10px] uppercase tracking-wider rounded-full",children:"Multi-Format Reference Export"}),t("h1",{className:"text-xl sm:text-2xl font-bold text-slate-900 leading-snug",children:e.title}),a("p",{className:"text-xs text-slate-500 font-medium",children:["By ",e.authors," • DOI: ",e.doi]})]}),t("div",{className:"space-y-4",children:Object.entries(c).map(([r,s])=>a("div",{className:"p-5 border border-slate-200 rounded-2xl bg-slate-50/60 space-y-2",children:[a("div",{className:"flex items-center justify-between",children:[a("span",{className:"text-xs font-bold uppercase tracking-wider text-blue-600",children:[r.toUpperCase()," Format"]}),t("button",{onClick:()=>p(r,s),className:"px-3 py-1.5 bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-blue-600 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all",children:d===r?a(l,{children:[t(h,{className:"w-3.5 h-3.5 text-emerald-600"})," Copied!"]}):a(l,{children:[t($,{className:"w-3.5 h-3.5"})," Copy Reference"]})})]}),t("pre",{className:"text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed select-all",children:s})]},r))})]})]})})})}export{S as default};
