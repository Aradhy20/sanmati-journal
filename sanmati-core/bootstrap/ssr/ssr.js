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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-C-_JSQJv.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-wEmmEUnl.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-CvqqHln_.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-NkGpL2TD.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-BaY-S-47.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-BnX2pxQk.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-DIIXjaE8.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-Brq5-Igo.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-DsefjNtJ.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-hr49Bojz.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-VK_Vik_u.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BRQv0j3y.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-DA3T0jJj.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-D0aFeNKZ.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-Da5NpKXu.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Cpf08yad.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-BS3r6iUV.js"), "./Pages/Article.jsx": () => import("./assets/Article-BKmgfZoI.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DrP2RLKY.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-DlAkB150.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BU9uxgFJ.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-NCITVba4.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-CCQ4VJhj.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DPnBIe3t.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-CacmGBCb.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-C72VSh_2.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-BOcs2M6O.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-CzW_FoVr.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-O4Ffn6sR.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-W1v86wTo.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-Bnky0mfP.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-C9AGz3X2.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-BO5rRXu6.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BixybNxL.js"), "./Pages/Home.jsx": () => import("./assets/Home-cbSTxHhc.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-C1GB2fVL.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-AWw7KNK4.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-DM1hcTA-.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-c3LqjQdg.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-RZAeneUa.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-DUMfFQvi.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-CagME5GF.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CzxWYORn.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-C6VepETQ.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-_ZPj1oq9.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-CXjHYSBM.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-KxpcjTVH.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
