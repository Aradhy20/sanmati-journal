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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-CzKNfWbb.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-Cc_eiafn.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-DDi6MiHw.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-CZ9KfIS_.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-DDzIl1Cs.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-nSg_FDty.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-BRoSnLml.js"), "./Pages/Article.jsx": () => import("./assets/Article-DLxzgVOx.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-CyLlYgjD.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-vI36UJfe.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-FPnffG33.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-CRiK0TTF.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-Bo8mACSo.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-PG_OFDeD.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-qqcBpocw.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-Bo_PdecR.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-O63I5MGM.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-D_3KmK2g.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-D0xn7Jlm.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CQICnhOw.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-D3MmAFmY.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CFmHFC4E.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-DxHpW6ng.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-JM24wzsI.js"), "./Pages/Home.jsx": () => import("./assets/Home-D5UH1VtO.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DSjJvwHZ.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-D-vgoptw.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-vVHyzP92.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-C_6SNn2w.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-BNEiRdBg.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-DfSwQ-k-.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-xPT5ZjAJ.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-1GN-QukG.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-D0b3EH9j.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-CLYJb3qZ.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-BOOkn79p.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-B3MuTu72.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
