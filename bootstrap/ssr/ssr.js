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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-BWzKBxWs.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-D2vPzKNa.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-D1zDPBmG.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BR5AlSY8.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-CsyURG2I.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Cbjltz4S.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-6pT0sXWa.js"), "./Pages/Article.jsx": () => import("./assets/Article-k-K-YGxY.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-CAwZzwFk.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-d8m58mxj.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-DbDVofb7.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-CfyWp0t5.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-plf-Clss.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-CuztEJP5.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DgvTaicF.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-BbrHfP6J.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-hrw9mapz.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard--az7nVgv.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-D-7Unds2.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-lF19O2vi.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-KSXt70kp.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-qUbRTCcx.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-8lR1t-d5.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-qEUGPjgC.js"), "./Pages/Home.jsx": () => import("./assets/Home-Cci30UIx.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-Mjj6FvpC.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-D15RBtsY.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-BTK4RSts.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-BjdFEZZJ.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-o7pUmplr.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-BuNR8CjE.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-BRFAWeeU.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-C_SOEcyZ.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-B5MS72-F.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-BF6pOe20.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-DgsLGTR3.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-CJdTJn6c.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
