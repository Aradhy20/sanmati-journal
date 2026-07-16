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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-Ccp1Ht21.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-ZpwQ-hqG.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-Bn_GghWJ.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BRfSjIDn.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-B0T4-TQH.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-BnX2pxQk.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-DIIXjaE8.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-Brq5-Igo.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-DsefjNtJ.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-hr49Bojz.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-VK_Vik_u.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BRQv0j3y.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-DA3T0jJj.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-D0aFeNKZ.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-Da5NpKXu.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-CdNVeVsp.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-Dum38TK5.js"), "./Pages/Article.jsx": () => import("./assets/Article-WDAG9QD1.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-D26jqKY3.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-DJkopqY3.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-Dg86uYl4.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-BEPd16Al.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-Bk4Ol8Qf.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-7Ve-6S5L.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DYJMXm32.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-DPWmZMGj.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-KFphL19y.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-D_NNF_9l.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CLivWQfl.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-zoWvV7hr.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-iQupFQlP.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CUSX5mBd.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-msC49r6d.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-AZJVtUZH.js"), "./Pages/Home.jsx": () => import("./assets/Home-B0SupEdc.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DGwyaXHl.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-CLvFXj1w.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-CBo8fCTp.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-j84PWSOO.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-B0rfLC3J.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-CzusDfM7.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-upteciEw.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-BapyCdjn.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-ByXbiany.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-CTBeOBnu.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-BPA3ojkk.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-pOSwxgGP.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
