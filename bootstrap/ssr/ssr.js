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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-By9vv7h7.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-B54LYgtf.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-Dq55vuCS.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-D3dmbzOX.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-CH7mLJKF.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Doo_fIJd.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-DIsGz-8i.js"), "./Pages/Article.jsx": () => import("./assets/Article-Bkjfxtpn.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DE2cvzM6.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-C6uM8bzz.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-Dt6nu33u.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-B4qRVaEl.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BsBaYLXX.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-BaWBzyK8.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-B3xUM5AS.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-o3Nqs1KN.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-C3s4-HlX.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-DwZW9MIl.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-BFoSre5Q.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-Cbi_iOAc.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-C7prhNnk.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CJQEqXmg.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-HS9rwuub.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BcLyfaJx.js"), "./Pages/Home.jsx": () => import("./assets/Home-B7JY2pEn.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DQ6kke3r.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-C8kiqzLx.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-DMUW4kaW.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-Dodu-Kbp.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-B-O09Vu-.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers--JazsuMJ.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-dqSyEO4T.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CsJIXVur.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-CnuCDbYi.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-DgWhWbU1.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-HXIIGQQF.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-BtXMvyVM.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
