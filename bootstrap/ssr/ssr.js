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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-DcOROd_4.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-BAGoavUA.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-gfzgr4la.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-oZIJA8Zz.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-DMEtQXbz.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-D3sffrHT.js"), "./Pages/Article.jsx": () => import("./assets/Article-CpzYN-g-.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-Hl9jP5k-.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-DCXld-F6.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-DV3EvFmW.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-5mjtvmHk.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-DHui8LZi.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-EtssVQGX.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-lvHVxDzr.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-BpRUl9at.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-Bv41t-MX.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-B7yf0prh.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-sB4JDrF-.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-CfV9etiC.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-B87c7qde.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-Cpibdxnj.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-C3JB2EU5.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-BzNFYsRK.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-DybERQ2s.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-DPcaT1aI.js"), "./Pages/Home.jsx": () => import("./assets/Home-C5LXj8RZ.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-JOECJqfc.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-luOiyC4R.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-BI-1_v6M.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-2r7irjga.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-DW_Wh7zj.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-Cp3fJQyv.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-Doj7_Vpr.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-BbHK1DF9.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-D_1yJ-dG.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-CkSIQo9v.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-Dqn30cvk.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
