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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-Bu4hP__S.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-DWCmYt1r.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-Cq7AtVVy.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-5EddmcEM.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-BWQcZn91.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-CZAaW48I.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-Dx8SwpRU.js"), "./Pages/Article.jsx": () => import("./assets/Article-BJF26-5y.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-C4MkASq9.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-754p1Cdz.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-Ba-Wpc_m.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-yU-iSltM.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-kK5W_aeB.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-B-EtV7ab.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DqQb7PtR.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-Cp6gln6s.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-B9NvhBD9.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-f-gf7lCM.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-C0hMCSQa.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-BdSNOvsC.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-DNs2kfOc.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CB1k2Qhq.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-BgzNgOJV.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-B0IR1Hja.js"), "./Pages/Home.jsx": () => import("./assets/Home-DzGZRRQA.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-BmbFreHP.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-COVn4X1X.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-CtIfv5cA.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-B0exfNeJ.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-DDcHbc5l.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-COcNLWOz.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DCKvkPs2.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-nkjy44ty.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-DG5TR3Gl.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-DxRB785Z.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-BP_j14Xl.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-DVwZ2tol.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
