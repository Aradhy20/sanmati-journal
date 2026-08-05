import{r as d,j as a,Y as c,av as p,D as m,aA as x}from"./vendor-DXjcPt1J.js";import{M as u}from"./MainLayout-xlfWx9EA.js";function g({paper:i=null}){const[o,r]=d.useState(null),e=i||{id:"1",title:"Advancements in Multidisciplinary Empirical Research and Peer Review Governance",authors:"Dr Namrata Jain, Dr Ratnesh Kumar Jain",year:"2026",volume:"1",issue:"1",pages:"1–12",doi:"10.5281/zenodo.sanmati.01"},l={apa:`${e.authors} (${e.year}). ${e.title}. Sanmati Spectrum of Knowledge, ${e.volume}(${e.issue}), ${e.pages}. https://doi.org/${e.doi}`,ieee:`${e.authors}, "${e.title}," Sanmati Spectrum of Knowledge, vol. ${e.volume}, no. ${e.issue}, pp. ${e.pages}, ${e.year}, doi: ${e.doi}.`,mla:`${e.authors}. "${e.title}." Sanmati Spectrum of Knowledge, vol. ${e.volume}, no. ${e.issue}, ${e.year}, pp. ${e.pages}.`,chicago:`${e.authors}. "${e.title}." Sanmati Spectrum of Knowledge ${e.volume}, no. ${e.issue} (${e.year}): ${e.pages}. https://doi.org/${e.doi}.`,harvard:`${e.authors}, ${e.year}. ${e.title}. Sanmati Spectrum of Knowledge, ${e.volume}(${e.issue}), pp.${e.pages}.`,bibtex:`@article{sanmati_${e.year}_${e.id},
  author = {${e.authors}},
  title = {${e.title}},
  journal = {Sanmati Spectrum of Knowledge & Emerging Discourse},
  volume = {${e.volume}},
  number = {${e.issue}},
  pages = {${e.pages}},
  year = {${e.year}},
  issn = {3108-1819},
  doi = {${e.doi}}
}`,ris:`TY  - JOUR
AU  - ${e.authors}
TI  - ${e.title}
JO  - Sanmati Spectrum of Knowledge & Emerging Discourse
VL  - ${e.volume}
IS  - ${e.issue}
SP  - ${e.pages}
PY  - ${e.year}
SN  - 3108-1819
DO  - ${e.doi}
ER  -`},n=(t,s)=>{navigator.clipboard.writeText(s),r(t),setTimeout(()=>r(null),2e3)};return a.jsx(u,{title:`Export Citation | ${e.title}`,description:"Export citation in APA 7, MLA 9, IEEE, Chicago, Harvard, BibTeX, and RIS formats.",children:a.jsx("div",{className:"py-12 bg-slate-50 min-h-[85vh]",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8",children:[a.jsxs(c,{href:`/article/${e.id}`,className:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline",children:[a.jsx(p,{className:"w-4 h-4"})," Back to Research Article"]}),a.jsxs("div",{className:"bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6",children:[a.jsxs("div",{className:"space-y-2 border-b border-slate-100 pb-4",children:[a.jsx("span",{className:"px-3 py-1 bg-indigo-100 text-indigo-700 font-bold text-[10px] uppercase tracking-wider rounded-full",children:"Multi-Format Reference Export"}),a.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-slate-900 leading-snug",children:e.title}),a.jsxs("p",{className:"text-xs text-slate-500 font-medium",children:["By ",e.authors," • DOI: ",e.doi]})]}),a.jsx("div",{className:"space-y-4",children:Object.entries(l).map(([t,s])=>a.jsxs("div",{className:"p-5 border border-slate-200 rounded-2xl bg-slate-50/60 space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"text-xs font-bold uppercase tracking-wider text-blue-600",children:[t.toUpperCase()," Format"]}),a.jsx("button",{onClick:()=>n(t,s),className:"px-3 py-1.5 bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-blue-600 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all",children:o===t?a.jsxs(a.Fragment,{children:[a.jsx(m,{className:"w-3.5 h-3.5 text-emerald-600"})," Copied!"]}):a.jsxs(a.Fragment,{children:[a.jsx(x,{className:"w-3.5 h-3.5"})," Copy Reference"]})})]}),a.jsx("pre",{className:"text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed select-all",children:s})]},t))})]})]})})})}export{g as default};
