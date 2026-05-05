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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-qL0W-foe.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-voeLotOj.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-Cv5ozFnE.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-BaN5i8ju.js"), "./Pages/Admin/Books.jsx": () => import("./assets/Books-cl_MTslw.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-_eHDnNn_.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DHzqEM-h.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-174Hq4Xs.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-2K7xyRlU.js"), "./Pages/Admin/Newsletter.jsx": () => import("./assets/Newsletter-DxpepTRe.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-YYOJXbk9.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-5pJrQGfz.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-BPqiHzbY.js"), "./Pages/Admin/Testimonials.jsx": () => import("./assets/Testimonials-ChlP8B6h.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-Bwp5jz8j.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-C5gaMQrV.js"), "./Pages/Article.jsx": () => import("./assets/Article-CujK9BTA.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-BRmQ6b9Q.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-Dt2--OXE.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-Ca_MVS1n.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-B1DTZ7ok.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-D31_urdh.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-BwKst8eY.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-CRRCnc2o.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-ETfXmtvH.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-C7Orf3iX.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-ByVf5kiG.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-CnkDN9K3.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-CygcxRlM.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-APLnUyaa.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-CXtbgCxh.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-Dx5WkueO.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-XhswTLrF.js"), "./Pages/Home.jsx": () => import("./assets/Home-CBHNmyAl.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-CbLHPJQ1.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-BqF69eHf.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-CKQEqskD.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-BA3-_eIh.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-dnkkl2nm.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-BiUgSOAQ.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-B2pUiaGS.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-NkjKVWOo.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-BEPx39AD.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-Bg2WbbKs.js"), "./Pages/TechnicalTeam.jsx": () => import("./assets/TechnicalTeam-a2nATGyG.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-BX3owwJp.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
