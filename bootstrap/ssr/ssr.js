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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-Chzh9LTs.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-CCW-6xqW.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-DQ3SXggD.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BiQsZYfe.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-CJpfYNBz.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Dkb2Mnhf.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-BUFUKF87.js"), "./Pages/Article.jsx": () => import("./assets/Article-gKyfUugc.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-Bnml2fGp.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-B6ylJRMy.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-1Y-ihqdj.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-CCmy8jHO.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BzL1JA61.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-D5c6O3B_.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-Cf5HbIe_.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-DXJ7wnnc.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-CU4XxPZE.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-BDmiNZaA.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-DlCE5tBu.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-3bmCURum.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-Cc0Vj3u3.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-8QL-n5fW.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-D6p6ZPOS.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-DJXed8RT.js"), "./Pages/Home.jsx": () => import("./assets/Home-CWMgdbFS.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-zEC8N1AQ.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-5DxSsxC1.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-9hHe-has.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-_yhuIT53.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CutNkaEq.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-KhF3bueh.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DMb7cZPg.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-ASl3BX38.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-BS2VknKO.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-BOPEdulD.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-pYZkp4pJ.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-BXpa4Y2M.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
