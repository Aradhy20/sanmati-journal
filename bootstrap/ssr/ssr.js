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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-OH3g8RBn.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-Cfw-cnpL.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-Dx_uMwht.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-CjR0szWF.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-DcaQSqUn.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-DfnT_WS6.js"), "./Pages/Article.jsx": () => import("./assets/Article-uurW2tmH.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DW4SuUMy.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-BYirwwKk.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BEM4Dc8W.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-CwUyIJoH.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-B5mcYGAf.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DpiD0Y27.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-B1PLBVmP.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-DmNsYZVz.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-BXyiSJTC.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-CHOaJXXh.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-CsR8FcSg.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-D0_wi1X2.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CCZohSWQ.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-D1Nx1ruf.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-BTpTE_lH.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-6wgab3w7.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-C8i6QtRq.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BBfvQ0qD.js"), "./Pages/Home.jsx": () => import("./assets/Home-BJ_CPyBn.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-CN0GE770.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-CAbttSaR.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-qB-VGZjH.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-X2OmfB6i.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CQG9UQ_Z.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-Bv2kHYYS.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-CSKTUOcy.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-Rk-8mg98.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-CVJ571YT.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-DWi7k0-0.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-DeOU_j-A.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
