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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-CAczSv5u.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-8kePxV6h.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BP4_ypgD.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-D0meaogs.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-CRDMTWEI.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-Dso4U-k_.js"), "./Pages/Article.jsx": () => import("./assets/Article-D84sCH3b.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-CllbgIkT.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-D4Dzi4E6.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-D3rry3nV.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-YdusPkff.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-pEm2qkM3.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-CZBv41EK.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DQo0Hyw2.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-kWjex37W.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-C8jGFdTc.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-Cz2GGPrj.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-BWL9zzPF.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-C1kbWALI.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-DRWcTWlg.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-B7bAlJGj.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-Bk0cmd5P.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-Bj84Q1Gg.js"), "./Pages/Home.jsx": () => import("./assets/Home-DVdPfiCb.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-CN2MeDU2.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-Bm3f32qL.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-BS8OTIRu.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-C32qIRHG.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-DQiIbxeh.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-BdSVgEW4.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-BiZGDqe1.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-DDjwpjbH.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-Bg4pEBvU.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-DBRRMTBt.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-CD92StN4.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-glP1GuzS.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
