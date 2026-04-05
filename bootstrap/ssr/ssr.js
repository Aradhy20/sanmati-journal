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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-Bv81t90W.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-uAs-qHlY.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-maZBQtFj.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-BuHjfPct.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-CZICwZ-k.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-5b-4MPwY.js"), "./Pages/Article.jsx": () => import("./assets/Article-CTRSldHH.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-SLPOD9R0.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-CbWfAz-q.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-JLycLinc.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-BXHO-k53.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-Cxj_pAME.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-D5_nsWf7.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-Ch2iHZxW.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-ChgoqPZt.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-6iyENkzy.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-BKDXrpso.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-Ck_i9yGL.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-D2GRJKn_.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-B1o8J1D9.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-Cekk_sZe.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-C8PW7Km0.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CQVaHrcV.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-Bh7FJaAM.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-DR9C1S99.js"), "./Pages/Home.jsx": () => import("./assets/Home-D6Ehxh7Z.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-GlZm8URS.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-DsZEwxEc.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-DUGUIA6S.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-DIGUD_CM.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-DlAXMevs.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-SKRNPyrh.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-CBOtLqgD.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-DOBjhVVV.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-ByyoIICm.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-cC6HZPGc.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-lRP1HK0c.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-TV6mAePI.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
