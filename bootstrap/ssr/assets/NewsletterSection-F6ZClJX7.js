import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Users, BookOpen, Loader2, CheckCircle, Send, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    var _a, _b, _c;
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const csrfToken = (_a = document.cookie.split("; ").find((row) => row.startsWith("XSRF-TOKEN="))) == null ? void 0 : _a.split("=")[1];
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-XSRF-TOKEN": csrfToken ? decodeURIComponent(csrfToken) : ""
        },
        body: JSON.stringify({ email, name })
      });
      const data = await res.json();
      if (res.ok || res.status === 200 || res.status === 201) {
        setStatus("success");
        const successMsg = data.message || "You have successfully subscribed!";
        setMessage(successMsg);
        toast.success(successMsg);
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0F766E", "#F59E0B", "#111827", "#ffffff"]
        });
        setEmail("");
        setName("");
      } else {
        const errMsg = ((_c = (_b = data.errors) == null ? void 0 : _b.email) == null ? void 0 : _c[0]) || data.message || "Something went wrong. Please try again.";
        setStatus("error");
        setMessage(errMsg);
        toast.error(errMsg);
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please check your connection.");
      toast.error("Network error. Please check your connection.");
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-12 relative overflow-hidden bg-primary", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-60 mix-blend-screen",
        style: {
          backgroundImage: "url(/images/newsletter-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary mix-blend-multiply" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-10",
        style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "36px 36px" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] z-0" }),
    /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "lg:w-1/2 text-center lg:text-left",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-3 h-3 text-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[9px] uppercase tracking-[0.35em]", children: "Academic Newsletter" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-4 leading-tight", children: [
              "Stay Updated with ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light", children: "Latest Research" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm font-medium max-w-xl", children: "Receive Call for Papers alerts, book releases, and academic news directly in your inbox." }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center lg:justify-start gap-4 mt-8", children: [
              { icon: Users, label: "2,000+ Subs" },
              { icon: BookOpen, label: "Monthly Digest" }
            ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2", children: [
              /* @__PURE__ */ jsx(item.icon, { className: "w-3.5 h-3.5 text-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-white/60 text-[11px] font-bold uppercase tracking-wider", children: item.label })
            ] }, i)) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.2 },
          className: "lg:w-1/2 w-full",
          children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    placeholder: "Name (Optional)",
                    className: "px-5 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-secondary/60 focus:bg-white/15 transition-all font-medium text-xs"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    value: email,
                    onChange: (e) => {
                      setEmail(e.target.value);
                      if (status !== "idle") setStatus("idle");
                    },
                    placeholder: "Email Address *",
                    required: true,
                    className: "px-5 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-secondary/60 focus:bg-white/15 transition-all font-medium text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: status === "loading" || status === "success",
                  className: "w-full flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-white rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-secondary-light transition-all hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed",
                  children: status === "loading" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
                    " Subscribing..."
                  ] }) : status === "success" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
                    " Subscribed!"
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Send, { className: "w-3.5 h-3.5" }),
                    " Join Newsletter"
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(AnimatePresence, { children: message && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                className: `flex items-center gap-3 mt-4 p-3 rounded-xl text-[11px] font-bold ${status === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"}`,
                children: [
                  status === "success" ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 flex-shrink-0" }) : /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 flex-shrink-0" }),
                  message
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "text-white/20 text-center text-[10px] mt-4 font-medium uppercase tracking-widest", children: "Secure Academic Gateway • Encrypted Subscriptions" })
          ] })
        }
      )
    ] }) })
  ] });
}
export {
  NewsletterSection as default
};
