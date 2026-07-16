import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, FileText, Users, Clock, Globe, Star, CheckCircle } from "lucide-react";
function CountUp({ end, suffix = "", duration = 2e3, decimal = false }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setVal(decimal ? parseFloat((ease * end).toFixed(1)) : Math.floor(ease * end));
      if (p < 1) requestAnimationFrame(step);
      else setVal(end);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration, decimal]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    val,
    suffix
  ] });
}
const METRICS = [
  {
    icon: FileText,
    label: "Papers Published",
    value: 93,
    suffix: "+",
    desc: "Peer-reviewed articles across all disciplines",
    color: "from-blue-500/10 to-blue-600/5 border-blue-200/60",
    iconBg: "bg-blue-100 text-blue-600"
  },
  {
    icon: Users,
    label: "Contributing Authors",
    value: 200,
    suffix: "+",
    desc: "Scholars from institutions across India",
    color: "from-secondary/10 to-secondary/5 border-secondary/20",
    iconBg: "bg-amber-100 text-amber-700"
  },
  {
    icon: Clock,
    label: "Days Avg. Review",
    value: 21,
    suffix: "",
    desc: "Fast double-blind peer review process",
    color: "from-purple-500/10 to-purple-600/5 border-purple-200/60",
    iconBg: "bg-purple-100 text-purple-600"
  },
  {
    icon: Globe,
    label: "States Represented",
    value: 15,
    suffix: "+",
    desc: "Authors from across India",
    color: "from-teal-500/10 to-teal-600/5 border-teal-200/60",
    iconBg: "bg-teal-100 text-teal-600"
  },
  {
    icon: Star,
    label: "Impact Factor",
    value: 5.3,
    suffix: "",
    decimal: true,
    desc: "Recognised academic impact score",
    color: "from-orange-500/10 to-orange-600/5 border-orange-200/60",
    iconBg: "bg-orange-100 text-orange-600"
  },
  {
    icon: CheckCircle,
    label: "Acceptance Rate",
    value: 42,
    suffix: "%",
    desc: "Quality-focused selective acceptance",
    color: "from-emerald-500/10 to-emerald-600/5 border-emerald-200/60",
    iconBg: "bg-emerald-100 text-emerald-600"
  }
];
function JournalMetricsDashboard() {
  return /* @__PURE__ */ jsx("section", { className: "section-py bg-white", "aria-labelledby": "metrics-title", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-tagline-blue mx-auto w-fit", children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "w-3 h-3" }),
        "Journal Impact Dashboard"
      ] }),
      /* @__PURE__ */ jsx("h2", { id: "metrics-title", className: "section-title mb-4", children: "Research Metrics That Matter" }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle mx-auto", children: "Transparent publishing metrics that reflect our commitment to quality, speed, and academic rigor." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: METRICS.map((m, i) => {
      const Icon = m.icon;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.5, delay: i * 0.07 },
          className: `rounded-2xl border bg-gradient-to-br p-5 ${m.color} hover:-translate-y-1 transition-transform duration-300`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${m.iconBg}`, children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-primary font-serif leading-none mb-1", children: /* @__PURE__ */ jsx(CountUp, { end: m.value, suffix: m.suffix, decimal: m.decimal }) }),
            /* @__PURE__ */ jsx("div", { className: "text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1", children: m.label }),
            /* @__PURE__ */ jsx("div", { className: "text-[11px] text-slate-400 leading-snug", children: m.desc })
          ]
        },
        m.label
      );
    }) })
  ] }) });
}
export {
  JournalMetricsDashboard as default
};
