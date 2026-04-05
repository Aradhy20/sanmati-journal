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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-Bi-yugo2.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-DAmf6lDR.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BBgx-RT3.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-D_1Qhfj8.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-CZydGv06.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-Cah6zxuj.js"), "./Pages/Article.jsx": () => import("./assets/Article-CLZCtyxj.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-C9b1U-NC.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-Cy0-AGQm.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-DjMoDvDg.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-DeYe4Xc-.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BDnCoFw1.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-J962vWFk.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DnZxR9eI.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-r_vlPSxe.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-DZRUoWI0.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-D1m7FX5d.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CNYHEM9X.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-DXz_NGdf.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-DaOI-fhs.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-BMx1aZf4.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-DlYLiUiT.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-DcjbzsUx.js"), "./Pages/Home.jsx": () => import("./assets/Home-DMHjI5UJ.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-C0xCnISb.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-BOsefHtY.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-DO_gITr_.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-Bjkgfy4f.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-DxWR57bb.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-deOjJU0i.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-C-CxHz-C.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CfmGD0mj.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-e2plpqk2.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-BenIQ9vS.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-DhFUG7a2.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-BbROgczV.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
