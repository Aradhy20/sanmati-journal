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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-DR-whUC5.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-BrYWr2gx.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-CImT7_yb.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-Di6KkcwH.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-CPeRkSWo.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-Ipxx80kh.js"), "./Pages/Article.jsx": () => import("./assets/Article-BMhmhAg5.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-dzIKpT-w.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-TTY3hBQe.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-C2365GpW.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-Ck40nHN8.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-Dxy2QWYt.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-1WYAzYZ7.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-KKKfCao_.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-BuFdmV2o.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-C-UfC4PR.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-Bs5YuXV-.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-IeKld5ry.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-DkWy8sGO.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-WblxCFy2.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CoeHQw1e.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-D-LYAbQG.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CiFczNXQ.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-Dkm983qn.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BZZ3sSZ0.js"), "./Pages/Home.jsx": () => import("./assets/Home-70-rwYYX.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-AYv8Ao5i.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-C5IK3U2n.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-D1ZyeSiQ.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-BT6KUtB9.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CbNKOM-F.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-5NXN4jfR.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-BEUe3P5L.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-DPxoKEGl.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-AVOfrord.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-BF9bIB1i.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-B0qlyoG5.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
