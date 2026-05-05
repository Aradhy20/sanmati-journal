import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { M as MainLayout } from "./MainLayout-CB7w1Kzm.js";
import { motion } from "framer-motion";
import "@inertiajs/react";
import "react";
import "react-hot-toast";
function TeamMember({ name, role, title, phone, email, scholar, image, variant = "grid" }) {
  const isLarge = variant === "large";
  const containerClasses = isLarge ? "flex flex-col items-center p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 max-w-xl mx-auto w-full group relative overflow-hidden" : "flex flex-col items-center p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden h-full";
  const photoContainerClasses = isLarge ? "w-48 h-48 rounded-full bg-dark mb-8 overflow-hidden border-4 border-white shadow-2xl relative z-10" : "w-28 h-28 rounded-3xl bg-dark mb-6 overflow-hidden border-2 border-white shadow-lg relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-500";
  return /* @__PURE__ */ jsxs("div", { className: containerClasses, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-secondary/10 transition-colors duration-700" }),
    /* @__PURE__ */ jsx("div", { className: photoContainerClasses, children: image ? /* @__PURE__ */ jsx("img", { loading: "lazy", src: image, alt: name, className: "object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" }) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-3xl font-serif font-black text-white", children: name.charAt(0) }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center flex flex-col items-center h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsx("span", { className: "h-px w-4 bg-secondary" }),
        /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[9px] uppercase tracking-[0.3em]", children: role })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: `${isLarge ? "text-3xl" : "text-xl"} font-serif font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300`, children: name }),
      title && /* @__PURE__ */ jsx("p", { className: "text-muted text-xs font-semibold leading-relaxed mb-6 max-w-[200px]", children: title }),
      /* @__PURE__ */ jsx("div", { className: "mt-auto flex flex-col items-center gap-4 w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-2 bg-surface rounded-full border border-gray-50", children: [
        email && /* @__PURE__ */ jsx("a", { href: `mailto:${email}`, className: "w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark/40 hover:text-primary hover:shadow-md transition-all", title: email, children: /* @__PURE__ */ jsx(Mail, { className: "w-3.5 h-3.5" }) }),
        phone && /* @__PURE__ */ jsx("a", { href: `tel:${phone.split(",")[0].trim()}`, className: "w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark/40 hover:text-secondary hover:shadow-md transition-all", title: phone, children: /* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5" }) }),
        scholar && /* @__PURE__ */ jsx("a", { href: typeof scholar === "string" ? scholar : "#", target: "_blank", rel: "noopener noreferrer", className: "w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark/40 hover:text-emerald-600 hover:shadow-md transition-all", title: "Google Scholar", children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5" }) })
      ] }) })
    ] })
  ] });
}
function EditorialTeam({ teamMembers = [] }) {
  const editorsInChief = teamMembers.filter(
    (m) => m.role === "Editor-in-Chief" || m.role === "Co-Editor-in-Chief"
  );
  const editorialBoard = teamMembers.filter(
    (m) => m.role !== "Editor-in-Chief" && m.role !== "Co-Editor-in-Chief" && m.role !== "Advisor"
  );
  const advisoryBoard = teamMembers.filter((m) => m.role === "Advisor");
  const sectionHeader = (title, color) => /* @__PURE__ */ jsxs(
    motion.h2,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-12 flex items-center gap-4",
      children: [
        /* @__PURE__ */ jsx("div", { className: `w-12 h-1 ${color} rounded-full` }),
        title
      ]
    }
  );
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Editorial Team",
        breadcrumb: "Board Members",
        subtitle: "Meet the distinguished scholars guiding our publication"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative", children: [
      editorsInChief.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-10 lg:mb-20", children: [
        sectionHeader("Editors-in-Chief", "bg-primary"),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-4xl mx-auto", children: editorsInChief.map((member, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.2 },
            className: "card-modern p-2 overflow-hidden",
            children: /* @__PURE__ */ jsx(
              TeamMember,
              {
                name: member.name,
                role: member.role,
                phone: member.phone || "",
                email: member.email || "",
                scholar: member.role === "Editor-in-Chief",
                image: member.photo_url || "/default-avatar.png"
              }
            )
          },
          member.id
        )) })
      ] }),
      editorialBoard.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-10 lg:mb-20", children: [
        sectionHeader("Editorial Board Members", "bg-secondary"),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: editorialBoard.map((member, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "card-modern p-6 h-full",
            children: /* @__PURE__ */ jsx(
              TeamMember,
              {
                name: member.name,
                role: "Member",
                title: member.qualifications || member.role,
                image: member.photo_url || "/default-avatar.png"
              }
            )
          },
          member.id
        )) })
      ] }),
      advisoryBoard.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
        sectionHeader("Advisory Board", "bg-accent"),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: advisoryBoard.map((member, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "card-modern p-6 h-full",
            children: /* @__PURE__ */ jsx(
              TeamMember,
              {
                name: member.name,
                role: "Advisor",
                title: member.qualifications || member.role
              }
            )
          },
          member.id
        )) })
      ] })
    ] })
  ] });
}
export {
  EditorialTeam as default
};
