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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-BQCQwMmu.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-D9Ae4Tdx.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-CocviQ_j.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-JS7vvAki.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-DVCzgOWl.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-BnX2pxQk.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-DIIXjaE8.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-Brq5-Igo.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-DsefjNtJ.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-hr49Bojz.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-VK_Vik_u.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BRQv0j3y.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-DA3T0jJj.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-D0aFeNKZ.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-Da5NpKXu.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-pJlJZRto.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-DXFgDokH.js"), "./Pages/Article.jsx": () => import("./assets/Article-CdN-9EN9.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-BOyaqydV.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-Dv-NoOxR.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-C0rHmJBf.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-DosQi21o.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-k_Oh_LoL.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-Dj4Cbx0x.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-CneH6JQ-.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-B4JR98h9.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-XqEFizMG.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-Tbi2RY1_.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CUMWkD7r.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CLh9XIoT.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-CSz8DgoI.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-TOWxgh0c.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-CwEQnVZT.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-B47WQH0B.js"), "./Pages/Home.jsx": () => import("./assets/Home-BuOS3xav.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-DxHZGXma.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-BVVAI063.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-CCu3hFS6.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-DhrvaeuF.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-B3cOvqZr.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-uVfpNS1v.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-MGkT2BX8.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-BfmwpHMG.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-D_oTawVt.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-DyBNJL91.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-B4Y-qrCp.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-BCZBSg7C.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
