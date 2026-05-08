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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutFoundation.jsx": () => import("./assets/AboutFoundation-Blo-pjyx.js"), "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-Xn53PFML.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-BSH2d6-x.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-C8RISlvQ.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-jlc7gxlV.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Dgg0prRG.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-DAyhBZqo.js"), "./Pages/Article.jsx": () => import("./assets/Article-CsPDP_fw.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-DEduBjSJ.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-DUs358IS.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-BHb-E8WO.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-j3qIooqI.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-BvyAfLvk.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-ApLpTNjj.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-8y4oMUHL.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-NXMUNfXJ.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-Djkzmlew.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-saKaInZ0.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CMHupVbs.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CarE--aq.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-DNfybsK2.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-DC5rzZWW.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-CfhyJuG_.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-BuiAi-Lg.js"), "./Pages/Home.jsx": () => import("./assets/Home-BxUvyvfe.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-B7bMZlo3.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-C-vkAi0n.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-_65fxp5Q.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-Fw3zwQ5c.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CFLC63Hx.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-DpBv8KRI.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-BdWs5n90.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-CsnMn5wm.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-Bfuyj2OF.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-lpq_3sIb.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-Bv4-pqPl.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-CLqE4iGQ.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
