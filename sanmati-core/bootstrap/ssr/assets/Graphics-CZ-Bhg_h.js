import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
const GridPattern = ({ className = "" }) => /* @__PURE__ */ jsxs("svg", { className: `absolute inset-0 h-full w-full stroke-slate-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] ${className}`.trim(), "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "grid", width: "40", height: "40", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M.5 40V.5H40", fill: "none" }) }) }),
  /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", strokeWidth: "0", fill: "url(#grid)" })
] });
const DotPattern = ({ className = "" }) => /* @__PURE__ */ jsxs("svg", { className: `absolute inset-0 h-full w-full fill-slate-300 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)] ${className}`.trim(), "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "dots", width: "20", height: "20", patternUnits: "userSpaceOnUse", x: "0", y: "0", children: /* @__PURE__ */ jsx("circle", { cx: "1", cy: "1", r: "1" }) }) }),
  /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", strokeWidth: "0", fill: "url(#dots)" })
] });
const FloatingGraphic = ({ children, delay = 0 }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    animate: {
      y: [0, -10, 0]
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    },
    children
  }
);
export {
  DotPattern as D,
  FloatingGraphic as F,
  GridPattern as G
};
