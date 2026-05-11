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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-CVZtjs2N.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-CC8Inkn2.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-DDaX8X2o.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-Dnad9prU.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-D7p7L3GH.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-DAkpCYYp.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-Bf1iNqs4.js"), "./Pages/Article.jsx": () => import("./assets/Article-CFrnGXNV.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DpP5ET-s.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-BtMDpC7t.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-CDvaJJYw.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-DmJWWWSU.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BZC4tFwh.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-CIrlaUQx.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-RPJVnyiF.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-B1htUA-c.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-Ds_NDNsr.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-DOYfSGdI.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-Dmwl_SVB.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-D2kf9EUx.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-DsrBnBhV.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-xe1eXFF0.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-BYadF5Nf.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-CiJDSVBr.js"), "./Pages/Home.jsx": () => import("./assets/Home-CqjIH2Th.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-GV_OKm25.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-CbBPYjvH.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-0LZMNkC6.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-Ds9Iy0_t.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-DhR3heAd.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-or61UUgw.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DgotUCsN.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-C0kXFmCj.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-DNBH0teM.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-D6_-l1pU.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-onlxOoCH.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-CDLlyeVi.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
