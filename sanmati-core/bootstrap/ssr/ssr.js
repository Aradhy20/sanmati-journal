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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-BbyfkckQ.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-D_FeE339.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-Ddcl7r35.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-DwnriCjV.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-B5Rm-aKU.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-BnX2pxQk.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-DIIXjaE8.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-Brq5-Igo.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-DsefjNtJ.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-hr49Bojz.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-VK_Vik_u.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BRQv0j3y.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-DA3T0jJj.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-D0aFeNKZ.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-Da5NpKXu.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-qYLtXCe2.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-CZrMkqzL.js"), "./Pages/Article.jsx": () => import("./assets/Article-CTGoQSw4.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-B3g8-TWE.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-CjUgBr6K.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-CWredrL0.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-CjKoRJrm.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BImKdelX.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DgFmqO1o.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-BDdOM0yj.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-D3Md1EJG.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-CAW-FqV0.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-ChHY9zBA.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-Bu0SP0eX.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CNNKxaF7.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-CSTLM_Hi.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-8toSXb-6.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-BnaBHCR2.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-lkXi-AZR.js"), "./Pages/Home.jsx": () => import("./assets/Home-BolxVG8T.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DY-h1ukO.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-CdggiUR6.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-aP5ksoD-.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-rSJlLVF4.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-KnDj7yAV.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-DR1npnAu.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-CYfxozAS.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CKz0-FpD.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-CTrmnwXm.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-BTOcryNt.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-CdySYJDK.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-DwJIe4KE.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
