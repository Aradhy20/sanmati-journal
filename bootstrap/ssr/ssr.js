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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-BYNsiyUH.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-C3NllPnq.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-C6hdfARH.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-DVIt8_Bc.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-CUbPxsEU.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-BhaxVzku.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-D6B_zzB6.js"), "./Pages/Article.jsx": () => import("./assets/Article-BYAhwuDi.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DM8ROXcx.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-CVPiJUWs.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing--h5WIUIl.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-CdOXd1uo.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BTb19Vtx.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DybyatlP.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-BcvCa_cv.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-DJ61bNXm.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-TGIH26QO.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-DLq9mZnd.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-I_vTUw3H.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CPdF56db.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-BGPej0eJ.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-D_jtxNko.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-BcvDNjAm.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BgBE9xJd.js"), "./Pages/Home.jsx": () => import("./assets/Home-CA63nSLN.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-D_A2S_FU.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-Ck2No6bd.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-BCwfxCt-.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-DBs-9voY.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-BKTqQHQW.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-DAcsZDUm.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DlcEo-HH.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-COxia7YE.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-C6rCnvQ1.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-DsfRLBbT.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-D1k_oS5b.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-DjI4DlVE.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
