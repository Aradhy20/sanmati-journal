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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-EOpQpw38.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-DVJq3OLx.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-Bhu1H148.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-CKMcMn2n.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-DR34jwhS.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-DJOnYH2f.js"), "./Pages/Article.jsx": () => import("./assets/Article-C8cVTe7A.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-B1RTgFzo.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-Dp0OuKSA.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-CQA0oslw.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-BqTmhnxT.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-Dz0KIeqm.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DM_2ROi3.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-Ub8X0Joy.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-BvPBtAqs.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-Cx8L4GsT.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-C9islXDh.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-CehXnTvH.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-BIWAXHpY.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-BCSmxu0T.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CvIWw_vG.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-Egi2gKK3.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-DC3QgKdY.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-RVTC4qaZ.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-CvtEu3hL.js"), "./Pages/Home.jsx": () => import("./assets/Home-DbB-ZfI4.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-BbJ3Ko1o.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-DWIhBfoA.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-D4XPjbmh.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-C231292Z.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CVXf-7jG.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-NuKYwKRK.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-X32zQZqw.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-BE_0mbMS.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-DkhWwRhp.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-BSwznPgW.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-Dv7A8Mee.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
