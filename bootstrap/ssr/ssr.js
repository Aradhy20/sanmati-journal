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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-D6LxK0Vu.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-CAJfcrPT.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-CFkiIiPy.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-CnLJ2U2r.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Byw9xnjU.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-D_0fdzKL.js"), "./Pages/Article.jsx": () => import("./assets/Article-BxcWH4Mz.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-Djji99CY.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-USNWqwSW.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-CPwMS0_v.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-Em3CvAie.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-tma_EsGM.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-D2QqSeq2.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DbJAwnuc.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-C_WXbDR7.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-BgK-AyN2.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-BVYqBbKT.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-C8pUp2Py.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CYodgRoV.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-DI4c-bxa.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-C7VA5-Ic.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-Bf5AK0Ae.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-B4GmLmxn.js"), "./Pages/Home.jsx": () => import("./assets/Home-CXKr9TS9.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-jZm31Zvv.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-DeC3ET7Y.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-BPe1IrYv.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-BEWXG7Ik.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-C3Jo2cPG.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-Cssxw2bZ.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DwGyJOGx.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-Bm1m3PJi.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-B8ZFpxuA.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-B5Ph6l8A.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-B6rBN7zI.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
