var _a, _b;
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
const appName = ((_b = (_a = window.document) == null ? void 0 : _a.getElementsByTagName("title")[0]) == null ? void 0 : _b.innerText) || "Sanmati Journal";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-BkdRpZEP.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-C-eDaqDu.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-9zhCcI1M.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-CUmlfZf6.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-BEeG9YT6.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-CgDKimqo.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-CrGtZJdR.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-CvnA9404.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-D6DBa43t.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-BpV5LlHq.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-C_p-UeLj.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-6fJCZ5AB.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-mluy-6nc.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-AbI4xurS.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-BZ6rqVsM.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-HU51EFlT.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CuAQ9hHN.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CT0ZwFxm.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-DYQh4rRy.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-pLrhAVgm.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BHqkNe07.js"), "./Pages/Home.jsx": () => import("./assets/Home-B6E5b4z7.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-BlmRhEO8.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-B7T0K-nZ.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-CzMcCTEM.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-CNX1tckp.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CK6cTOXS.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-Bk7ekjMV.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-CI6jLcQR.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-DRE0fkaQ.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-B3L_V8K-.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-Bjkw4uWR.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
