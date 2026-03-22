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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-P3aggTSa.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-B5GKA8_j.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-DDxL02qi.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-B_8dQNXD.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-PUGJVjep.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-BoXCmCf5.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DhEC4_i2.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-GoXftdy3.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BZzEtV38.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-BNDQi2Rb.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-O6XKAVW5.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-ChyccHPW.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-CgH8Wo2x.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-BOwuz1-F.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-BXzNjXFd.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-DoJK_2sN.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-2G_EmGYH.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CIjOnDrp.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-DEdAsT_L.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-Sxyk2CT5.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-DOqxZLX_.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-DhK_NQ-8.js"), "./Pages/Home.jsx": () => import("./assets/Home-DQWyOW2o.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DlxNC6wq.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-HPuiJhcq.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-hEfsO3Rx.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-C_KhXaJE.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-WwvYRoZB.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-C8NFae6e.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DrdyWtCg.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-Cqsluz4T.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-CLhtpy0f.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-CTLiV2-R.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-Dwg1tXgC.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
