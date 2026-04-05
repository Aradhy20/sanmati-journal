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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-w1co3ErD.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-BRYAI9Cy.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BP466A4c.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-Bm_zgzcJ.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-CKuQ4vAP.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-I8ltj7LY.js"), "./Pages/Article.jsx": () => import("./assets/Article-DwExWdiI.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-CuSDVDCJ.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-DAPhSyVR.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BxElSYUe.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-C4QgzlL0.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-C2-b8I_8.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DEDKHCH2.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-6X1IgFnh.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-Svul5mF6.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-DYoOEuhL.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-CF1ZhdiB.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-DeD9A3G2.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-_K_1xx1P.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-DmN3a8am.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CpaJcbR4.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-a9pfeaJ8.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-Cz8TnnOG.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-C4a-xoc2.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-L1Zn2L5b.js"), "./Pages/Home.jsx": () => import("./assets/Home-B9f37yOn.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DlfseiZ2.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-BcmoTr_B.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-CybUljD1.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-CPBtgPOZ.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-coB7fUwX.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-Bh8avRgJ.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DkMT8Yss.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-zztA-WdO.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-BVfT95ut.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-s7ELMVLB.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-DiZuw_Uy.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
