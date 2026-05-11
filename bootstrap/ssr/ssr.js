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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-Cm8s8E5Y.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-CEt4vGK4.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-ClVr4MLe.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-mVYnZ6mj.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-Cg8X-Gj0.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-2oLi5U-a.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-Sqzm_Wto.js"), "./Pages/Article.jsx": () => import("./assets/Article-ThEq22LV.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-CNm6OXYZ.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-C-xejsc7.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BthkT8u4.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-BcbxBM1z.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-WfSe4D0N.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-Cr1YKNvD.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-Bc0GBJF0.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-CumUNWl4.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-5-T3jnay.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-Cddgrfb8.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-BjKSsmwS.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-DmP7Q08u.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-BmR_ciAu.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CiB_jsl7.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-DxKNTpG0.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-D-w7zjfR.js"), "./Pages/Home.jsx": () => import("./assets/Home-lJfGbJ-e.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-B513y84l.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-DMSAl0kP.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-DnXD-5ME.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-DL9XQAvk.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-FZIcnhsU.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-Cw1evlEV.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DXqGEwaU.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-hO73mSSe.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-EKrTgXed.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-SxrNGSZV.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-BiVET1Zp.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-mO5pS-Pd.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
