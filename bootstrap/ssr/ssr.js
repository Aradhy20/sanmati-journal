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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-DyeZG2d9.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-CPZSRX5p.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BThKqEJM.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-40S3jtJv.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-CUbPxsEU.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Bn_Mqmba.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-CYkk0QPT.js"), "./Pages/Article.jsx": () => import("./assets/Article-yEEMGsyk.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DluXhQWh.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-mdA4dlEq.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-DjLx7rQo.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-DoNKxDup.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-CHFlG8bn.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-PjHNbebN.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-kiAbxoEY.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-D7JoT9bq.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-C4J1knnP.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-BG9PzeYa.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-Cb_ouEyF.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-DmMPI3Pn.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-CXLSghDp.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-B1Tyb0DQ.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-CtrlWCgp.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BPSA91Xo.js"), "./Pages/Home.jsx": () => import("./assets/Home-Df0Ue_8g.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-LcGLkjyN.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-DP1jPvtW.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-a0ujO6xf.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-BCCHPY8Y.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-Cla82oFl.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-XwIHZTQV.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-CCbmfIKw.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-BdcuORXF.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-BFFd8-AR.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-CWj4mjr_.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-DEzgOeak.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-DWRwO7Zt.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
