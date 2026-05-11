import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { G as GridPattern, D as DotPattern } from "./DecorativeElements-DDr-sYpo.js";
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post("/forgot-password");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-warm-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300", children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx(GridPattern, { className: "opacity-[0.03]" }),
      /* @__PURE__ */ jsx(DotPattern, { className: "opacity-[0.05]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-md relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-xl overflow-hidden shadow-lg bg-white p-2 border border-slate-100", children: /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          src: "/logo.jpg",
          alt: "Sanmati Journal Logo",
          className: "object-contain w-full h-full"
        }
      ) }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-center text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark", children: "Account Recovery" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-sm text-gray-600 px-4", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-100", children: [
        status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200", children: status }),
        /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: submit, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-dark/80", children: "Email address" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "email",
                  type: "email",
                  name: "email",
                  value: data.email,
                  onChange: (e) => setData("email", e.target.value),
                  autoComplete: "email",
                  required: true,
                  autoFocus: true,
                  className: "appearance-none block w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-primary bg-white text-dark sm:text-sm"
                }
              ),
              errors.email && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-600", children: errors.email })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: processing,
              className: "w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              children: processing ? "Sending Link..." : "Email Password Reset Link"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsx(Link, { href: "/login", className: "text-gray-500 hover:text-dark text-sm font-medium transition-colors", children: "← Back to Login" }) })
    ] })
  ] });
}
export {
  ForgotPassword as default
};
