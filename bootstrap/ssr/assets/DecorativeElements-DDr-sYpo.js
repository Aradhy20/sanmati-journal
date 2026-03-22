import { jsx, jsxs } from "react/jsx-runtime";
const GridPattern = ({ className = "" }) => /* @__PURE__ */ jsx("div", { className: `absolute inset-0 ${className}`, children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "grid", width: "40", height: "40", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M 40 0 L 0 0 0 40", fill: "none", stroke: "currentColor", strokeWidth: "0.5", className: "text-slate-200" }) }) }),
  /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" })
] }) });
const DotPattern = ({ className = "" }) => /* @__PURE__ */ jsx("div", { className: `absolute inset-0 ${className}`, children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "dots", width: "20", height: "20", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("circle", { cx: "2", cy: "2", r: "1", fill: "currentColor", className: "text-slate-300" }) }) }),
  /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#dots)" })
] }) });
export {
  DotPattern as D,
  GridPattern as G
};
