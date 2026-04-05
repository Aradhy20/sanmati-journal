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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-DKgyc8dP.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-BqrstSWK.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-D2OoWXXo.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-DZp137SI.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-DmVd2lEP.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-DjxjaU5g.js"), "./Pages/Article.jsx": () => import("./assets/Article-CYzhjUCz.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-BRZBchKB.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-D3ZFjkgl.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BOwzuI_z.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-BzBaWNoU.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-Dz-Js-x1.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DveJhNvu.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-1zy-QtUX.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-BEjKSbjH.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-lOyctrEy.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-BIH2uqSQ.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-hEEg-Fip.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-D4_sJUpx.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-DguSNPFW.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CawaNIdZ.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-2g2one7D.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-COufBXHx.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-CAF1Jgaw.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-DAtKRbB2.js"), "./Pages/Home.jsx": () => import("./assets/Home-DJt6z8cc.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-sYDgPZzc.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-CopRPzvM.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-B73kIbLU.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-DOyS8Fgm.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-C13oBGbQ.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-BRR5VBZh.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-CmLXLakB.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-cuQEz9QF.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-CRoVX1fl.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-hT-z_4MX.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-BB2gazOm.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
