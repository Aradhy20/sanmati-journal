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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-Dz_fJIRT.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-DDAaQCaP.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-Xc_n9ZFI.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-DnflR5xn.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-dPukpx2E.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-B7UjDRsJ.js"), "./Pages/Article.jsx": () => import("./assets/Article-CMWtfCDi.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-Cwcv4Wsb.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-BsYYAzq_.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BCHFZ6E7.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-Do9GEyb6.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-fuYAjgPM.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DIHxDKsL.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-D3OK0Gqz.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-D4Ag5jSF.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-BC8BcscX.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-CfWRaHjG.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-CcJ2a8oe.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-CElrlxKb.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-h0xzpCsH.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-DJIbcA8y.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-BvvADEjm.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-GNyBDXmN.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-jvi4MyH6.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-65LwjTGk.js"), "./Pages/Home.jsx": () => import("./assets/Home-B4P3opYS.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-d7FuGsJs.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-E2LnAWdQ.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-bdCSZkqZ.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-B50uWGYx.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-eHsQSIJ9.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-CXaSb_0U.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-Btfyjc8L.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CChQy5oM.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-sCMD-g60.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-WOfjRNgM.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-CrsVEUEm.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
