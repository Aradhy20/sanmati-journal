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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-B7naAcPC.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-CDee2QNm.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-D63FarxO.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-OUfJWkYt.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-BOIm_ShZ.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Cd8vIpue.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-CBAHPjDE.js"), "./Pages/Article.jsx": () => import("./assets/Article-ucfV6Ei4.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-7Y1geupz.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-CMKkoDfA.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BDRGfU88.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-SGg4lU3_.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BkmuxaqS.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-raGVDWsC.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-BdkWPDuv.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-Cg7ldDXW.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-Ddp75zXg.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-CnGENrWE.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-Cge548Ia.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CPOJe_DP.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-1lUUE3T0.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-BM6O0HDj.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-2qPy0TtB.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-CgooGbg6.js"), "./Pages/Home.jsx": () => import("./assets/Home-BHAJ6dEB.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-CxkOgmht.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-pKsMGiNW.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-BR3oIEbY.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-CTV459WY.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-pu_rvvCU.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-D1HgSGaf.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DagzCH4j.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-Cg6WNzVz.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-Dakutbp-.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-DQNMGCKc.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-DWW7bP_A.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-Bfh-FViu.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
