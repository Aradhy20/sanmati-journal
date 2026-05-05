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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-DG1BGw9k.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-Dkms6GvB.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-23a__u7T.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-DZh8KQpn.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-C5Wel9WX.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-DlFKbx02.js"), "./Pages/Article.jsx": () => import("./assets/Article-CXNYfmmm.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-wPWrOMen.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-svv3pTmo.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-B9VP3yEO.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-QfPA0p9x.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-Mo2YgvW4.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-CggQ1f9b.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-FQotb0Nh.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-j0JCq24L.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-DloCT4vG.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-BLDybtvd.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-DgIiC7Qi.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-BW-fD-gG.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-CGuQcU4X.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-BgEkVi1G.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-B9ciONMP.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-D12pR_WX.js"), "./Pages/Home.jsx": () => import("./assets/Home-BtgLu9SK.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-CUeW92M5.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-BclNfvZv.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-C8dJbZub.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-ChMBpf8t.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-DEj9ckWk.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-BR9UH1Qb.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-Cop6-9ze.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-0rKVA0kE.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-BCudgj8a.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-DOOYD4nq.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-C0iE5s5b.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-Dr2S0PQY.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
