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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-Cx2fwOCK.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-CnStMf_v.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-FJKZwyhg.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BoyJkBQa.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-DitynClS.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-BnX2pxQk.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-DIIXjaE8.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-Brq5-Igo.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-DsefjNtJ.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-hr49Bojz.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-VK_Vik_u.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BRQv0j3y.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-DA3T0jJj.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-D0aFeNKZ.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-Da5NpKXu.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-552Il7Lf.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-Dhg_klJw.js"), "./Pages/Article.jsx": () => import("./assets/Article-CIFSc3KY.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DZRCDwFh.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-D8eAoANd.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BL2bUqe4.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-Cv5QDCsq.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BUUWIVFb.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-Blg6OE6b.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-wu-uZbZf.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-D9ve8y4x.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-CP5j1B7q.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-D81NKeP0.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CC8u-YNk.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-Ben8-MKM.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-DbuPoZpF.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-r1cDa4Di.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-BUKyosRT.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-yuYKIkFY.js"), "./Pages/Home.jsx": () => import("./assets/Home-DxxUVYUs.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-BWpAyKXe.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-e6Grm708.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-CLDNuLXS.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-Bv35EB_o.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-BZgevl2z.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-BHNZ_sz4.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-D3GcEU7P.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-BhjoawM-.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-DA1OiFj7.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-NF5R8Dm0.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-ifW1yiqw.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-B_sUJt70.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
