import { jsx } from "react/jsx-runtime";
import "react";
const defaultVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
const revealVariants = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }
};
const ScrollReveal = ({ children, width = "100%", delay = 0, className = "", variants = defaultVariants }) => {
  return /* @__PURE__ */ jsx("div", { className: `relative ${width === "fit-content" ? "w-fit" : "w-full"} ${className}`.trim(), children });
};
const ScaleOnHover = ({ children, className = "" }) => {
  return /* @__PURE__ */ jsx("div", { className, children });
};
export {
  ScrollReveal as S,
  ScaleOnHover as a,
  revealVariants as r
};
