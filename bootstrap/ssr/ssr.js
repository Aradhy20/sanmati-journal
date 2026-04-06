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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-B00M3GrT.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-CTtUk56U.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-BznaTmcn.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-Cl9tQHDw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-BC8vPAOl.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-CC5J7lDx.js"), "./Pages/Article.jsx": () => import("./assets/Article-joa7fCQD.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-CxDUu5DB.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-CTNQok5W.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-DSp9ZyaH.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-Bb6_gwQN.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-CuYcqgwd.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-_uTzCJEe.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-BrRQUnZH.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-EMiHWQTs.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-Bmco7uAh.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-DyF3ZQpH.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-ChPe1E44.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-DZ_GbX1D.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-D1D4nZTt.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-C6brWXH1.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-BuD5ShIr.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-C6CTw_lc.js"), "./Pages/Home.jsx": () => import("./assets/Home-BPrGt_no.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DT34_eeI.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-DNoERZrb.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-D7pXrhnN.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-C4QbLOWk.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-C2VaQQr0.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-CbyWCo3r.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DafKtphu.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-BSgf4-XT.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-D8-Xh4H4.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-DqH99CIW.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-Da8jeAGb.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-CoUYF--J.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
