var _a, _b;
import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = ((_b = (_a = window.document) == null ? void 0 : _a.getElementsByTagName("title")[0]) == null ? void 0 : _b.innerText) || "Sanmati Journal";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-ChQu9kcw.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-C20tqGQg.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-qGRuNlf7.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-CpGYJZ6Y.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-BRu5pi4L.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-CgXuMcPa.js"), "./Pages/Article.jsx": () => import("./assets/Article-D7mrLB4s.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DMeTwWG5.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-Dnr6dHWE.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BplhDd6R.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-qyfZnaSp.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-Vtjtddmb.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-BPEsfa2x.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-BjJtd19e.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-Zp83Oobk.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-Br6sJaGx.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-viXOeKtO.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-De-DgmBg.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-D2H_Cgdp.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-CHsBhGEX.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-ChLk411f.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-DqbiEY2f.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-B9ex_O89.js"), "./Pages/Home.jsx": () => import("./assets/Home-DoaIWqKh.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-BNDdinWJ.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-D598Mk8c.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-Bjxz5HNP.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-Cddpu4SP.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CrjHsn08.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-CEEEwXIB.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-CD9Xg33A.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CWP--7Bf.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-ODKdtxke.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-zm_3yQ2A.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-ExhkPAlB.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
