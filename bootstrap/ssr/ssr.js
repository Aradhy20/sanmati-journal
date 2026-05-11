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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-CzKJnhJ6.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-CHJJuNlc.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-J6_71dV3.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-DXjl2CWp.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-PHj50qu9.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-DrY0CIfI.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-DGhA_nW4.js"), "./Pages/Article.jsx": () => import("./assets/Article-CPfyuQ5m.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-BIlUziNz.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-C96ZgjtY.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-DLI3AhDa.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-CtPANbb4.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-CSs6KV8L.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-C6ERHxI3.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DbSrIqrX.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-CwOjqBPp.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-iOrcC9f4.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-DK7BVujp.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CF8IdE8I.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-DiC-wmnc.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-DJdRYkYU.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-ChtBA6M5.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-B3leOxEG.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-n_vjAq6o.js"), "./Pages/Home.jsx": () => import("./assets/Home-DzFoAah5.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DiZojLWM.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-BhRAQE5u.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-TRY9I54f.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-EjzHmnzo.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-6hJh32mt.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-DgucRutN.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-BHie4VHn.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CjR8ytC8.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-BFCKYlly.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-Bu60gURO.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-tDLrvLMz.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-mWLWDGCf.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
