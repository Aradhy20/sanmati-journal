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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-BoMTQLbh.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-Sq1CUaNv.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-CxfzXuH4.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-Bia8LVDE.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-C9jdqoWA.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-BnX2pxQk.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-DIIXjaE8.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-Brq5-Igo.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-DsefjNtJ.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-hr49Bojz.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-VK_Vik_u.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BRQv0j3y.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-DA3T0jJj.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-D0aFeNKZ.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-Da5NpKXu.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-CAOe70yP.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-7iDnhSzY.js"), "./Pages/Article.jsx": () => import("./assets/Article-BHtxjYxi.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DX1JrQeA.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-BEgFlH2Q.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BU9uxgFJ.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-PwksfUcC.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-DRDwAfRF.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-JuCbfEFK.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-7-KyQ_o3.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-DDJD-L36.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-C7Og6K8r.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-i5x4Umx5.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-B0d67dg1.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-90BgW71_.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-Bnky0mfP.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-B2T3Hh5S.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-Ca3ON8s7.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BU38__sB.js"), "./Pages/Home.jsx": () => import("./assets/Home-D5vkmX4o.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-gWm5Hlde.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-DgYPhvxy.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-CZfsYTp2.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-CQCke5ww.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-t5pTPU5_.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-DpXZAadM.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-xRv8Bete.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-C4GPFCn3.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-OeRSHVAS.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-CvCtib9x.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-CFWhLVQW.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-G4WlxyAh.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
