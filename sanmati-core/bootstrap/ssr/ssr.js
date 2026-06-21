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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-CDfmF9hr.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-Cy4g73St.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-DkmtW1H8.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-D8EIVX-T.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-N3GmqHMQ.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-BnX2pxQk.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-DIIXjaE8.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-Brq5-Igo.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-DsefjNtJ.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-hr49Bojz.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-VK_Vik_u.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BRQv0j3y.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-DA3T0jJj.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-D0aFeNKZ.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-Da5NpKXu.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Bd20lCIe.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-B-PeZVGr.js"), "./Pages/Article.jsx": () => import("./assets/Article-CDuIXawE.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-BWKA7EnT.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-CW4mKQET.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-DuWV2cME.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-Byviix14.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BImLkK_1.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-C2xC4i8c.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-WZb7htPF.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-Bk3N0XpI.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-Ge71K95j.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-CMveKrH1.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CiozbCtN.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-DxUmSPzJ.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-ChvRffFe.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-O0wh_rCZ.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-BfVjb2SD.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BWiopC8n.js"), "./Pages/Home.jsx": () => import("./assets/Home-C_GNqXwS.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DcXsaN6V.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-C7XGZiBr.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-gFK9XTK4.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-CWaOC75W.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-VptFr-l5.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-DVG0Uvwv.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-D_KMkNph.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-BjQQTAcE.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-CZaTSfNs.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-CgEuZLp4.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-DMr_j3RW.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-CM9gcgDa.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
