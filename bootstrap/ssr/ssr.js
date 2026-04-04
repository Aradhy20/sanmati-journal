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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-Bbv8JhpU.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-Bng1q7dY.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-C-g87JLP.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-DNDKrwbw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-B5ugQ6fa.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-CSw8xr6F.js"), "./Pages/Article.jsx": () => import("./assets/Article-CynRiZUe.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-D6Ie090K.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-kOl2DbqL.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BHrp1rc0.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-B54Sdg9r.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-5N4Pfqxk.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-BLdTm3WT.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-DxqvDfoX.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-oq-Z1IuM.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-D7TSx_nz.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-D9ApCPQq.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-Ft7k5UXs.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-C3TiKTJC.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CJb7KfIB.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-Bl3tZ1Nl.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-M5uhnSGo.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-D_3SXrfD.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-DgqlBZvI.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-CsYccKc_.js"), "./Pages/Home.jsx": () => import("./assets/Home-Cknx__YC.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-B6z-DHi1.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-BMGK_nC_.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-DJNpH9tY.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-CJenb7AI.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CHYryR5e.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-DMbjEPii.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DBlG855v.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CZr_p4lr.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-B3YFBaqj.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-C06zwA4H.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-DSeZkSAJ.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
