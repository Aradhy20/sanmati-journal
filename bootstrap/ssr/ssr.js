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
const appName = "Sanmati Journal";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-DA31OnWx.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-BCluIvmb.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-DRTXhIW2.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-DpaIpChD.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-BETeZHFq.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-D0SUei_3.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-XNtsXtF-.js"), "./Pages/Article.jsx": () => import("./assets/Article-DlmMCPKu.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-cz3-VW1k.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-BHlZzteW.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-DCT32tUH.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-TPr4jYbL.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-C0Xz-4y_.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-Qzmpk2-T.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-B5x9rfOx.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-B26X2tp3.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-BPk-Fo4B.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-B1j2Wt0t.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CI3ueHiZ.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-IEVyo-Ty.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-BhENoY4W.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CVLfkebN.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-DToVxF7I.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-EtcRSE6t.js"), "./Pages/Home.jsx": () => import("./assets/Home-DGDt84DE.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-BDdAQcCq.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-DQc_RpCB.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-B_sLif8k.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-Uevy9C0-.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CjZwJofp.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-CVNQJeDX.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DFfj9wl3.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-BNap5lld.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-BY1W4Ct9.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-Ca3KZpSw.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-BMBDgRnK.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-uTDm6MPf.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
