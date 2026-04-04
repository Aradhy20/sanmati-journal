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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-BZQgbHRR.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-uTuUXxC2.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-DsC0AkFD.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-CLCfcgAW.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-DNP1rSIX.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-D1fhSVGv.js"), "./Pages/Article.jsx": () => import("./assets/Article-cPCSIadi.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-B3OV0M41.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-BxgHPQRN.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-3NH-JLX_.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-X1wNEeAD.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-uSOthUab.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-BU8myQN-.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-D1WFFnXP.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-CUU7zdwM.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DS3Z7Ot_.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-BYKsD5ix.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-COU6qZg-.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-C4DR9wuW.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-BYz0Bk44.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-xTC-WfEW.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-CA0psiBY.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CMLTmK29.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-C_kj4A97.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-Dzg9VTli.js"), "./Pages/Home.jsx": () => import("./assets/Home-BbqNB3cL.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DvJRTkoY.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-Dp8QgB5_.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-BWCOVV-F.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-696K9j1e.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-C4FfPPOw.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-D3lPtM6G.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-BsYlY9L1.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CWBq3Pli.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-C_cuZZ7z.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-FPJ5K5Mo.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-DDuICEtD.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
