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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-DzWBL3Nq.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-BpQUi2le.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-DKiwjPnN.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BbcUmOnT.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-h8BdsxI0.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-BnX2pxQk.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-DIIXjaE8.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DGVpAwmI.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-B4p_mkH3.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-Dkfi5Qqi.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-VK_Vik_u.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-B5bNdciC.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-DA3T0jJj.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-7aQyxfH9.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-Da5NpKXu.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-FGybXRWG.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-Dx4ucCAW.js"), "./Pages/Article.jsx": () => import("./assets/Article-Dw6_IMJZ.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-B-9Mc_52.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-Cc3FgOP1.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-B-LIISIe.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-D2vCaYB7.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-DNpQ3olM.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DURDxedX.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DDI6FhLG.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-DLNjHqkt.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-C4-q0Rq0.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-COsmnY-k.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-BEEa9yH6.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CO0QOyx1.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-Bh92NfnE.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-B7yYuVCO.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-D4hq3Snb.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-CJyVsXjj.js"), "./Pages/Home.jsx": () => import("./assets/Home-Dg7Yt_UW.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-D9ZBre6m.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-N2UZvzLN.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-Du_71C7s.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-dpVx9EFO.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-mthNTjbs.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-MC-HRx_b.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-IbMTu1Q6.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-DMVVBfYe.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-D0EIqD2u.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-CCoAwDBI.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-CTHIoASt.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-BXQpJUNe.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
