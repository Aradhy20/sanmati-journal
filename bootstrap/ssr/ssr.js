var _a, _b;
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
const appName = ((_b = (_a = window.document) == null ? void 0 : _a.getElementsByTagName("title")[0]) == null ? void 0 : _b.innerText) || "Sanmati Journal";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AboutJournal.jsx": () => import("./assets/AboutJournal-CGAhWlA4.js"), "./Pages/AcademicEvents/Conferences.jsx": () => import("./assets/Conferences-Ld1jEVDH.js"), "./Pages/AcademicEvents/Seminars.jsx": () => import("./assets/Seminars-Dgx6ww-8.js"), "./Pages/AcademicEvents/Workshop.jsx": () => import("./assets/Workshop-DuKcoohC.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CwgikyWn.js"), "./Pages/Admin/Enquiries.jsx": () => import("./assets/Enquiries-DSyZO-vd.js"), "./Pages/Admin/Gallery.jsx": () => import("./assets/Gallery-BZyqxBAC.js"), "./Pages/Admin/News.jsx": () => import("./assets/News-BBFEVx2W.js"), "./Pages/Admin/Papers.jsx": () => import("./assets/Papers-BuJlIzX1.js"), "./Pages/Admin/Submissions.jsx": () => import("./assets/Submissions-_BBInSxs.js"), "./Pages/Admin/Team.jsx": () => import("./assets/Team-DkSB4nqQ.js"), "./Pages/AdvisoryBoard.jsx": () => import("./assets/AdvisoryBoard-BgBoS7Cv.js"), "./Pages/Archive.jsx": () => import("./assets/Archive-CCs3SBTj.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-io-Z37Ky.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-B3I5FM3Y.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CHq1sW0S.js"), "./Pages/Author/Dashboard.jsx": () => import("./assets/Dashboard-CPOIsIM3.js"), "./Pages/Awards.jsx": () => import("./assets/Awards-CrDrI_V1.js"), "./Pages/BasicInfo/Indexing.jsx": () => import("./assets/Indexing-DehXPMzI.js"), "./Pages/BasicInfo/JournalInfo.jsx": () => import("./assets/JournalInfo-DBqpxGrz.js"), "./Pages/BasicInfo/ObjectiveScope.jsx": () => import("./assets/ObjectiveScope-DvL-Rwsu.js"), "./Pages/BasicInfo/VisionMission.jsx": () => import("./assets/VisionMission-DPqcbgUJ.js"), "./Pages/BookPublication.jsx": () => import("./assets/BookPublication-CEe9E_bW.js"), "./Pages/Compliance.jsx": () => import("./assets/Compliance-BNs_7ODo.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-C4cNuBZb.js"), "./Pages/EditorialBoard.jsx": () => import("./assets/EditorialBoard-5I3hQtlS.js"), "./Pages/EditorialTeam.jsx": () => import("./assets/EditorialTeam-ijKtS5kM.js"), "./Pages/Editors.jsx": () => import("./assets/Editors-DkElgChV.js"), "./Pages/Error404.jsx": () => import("./assets/Error404-BN7F0Ze4.js"), "./Pages/Gallery.jsx": () => import("./assets/Gallery-OGbTwILG.js"), "./Pages/Gallery/News.jsx": () => import("./assets/News-CrC0JneW.js"), "./Pages/Gallery/Photo.jsx": () => import("./assets/Photo-SAEylKtR.js"), "./Pages/Home.jsx": () => import("./assets/Home-C_0Ex-Dp.js"), "./Pages/PublicationPolicy/Ethics.jsx": () => import("./assets/Ethics-xZfgpVSx.js"), "./Pages/PublicationPolicy/PeerReview.jsx": () => import("./assets/PeerReview-me3lpMQ_.js"), "./Pages/PublicationPolicy/Plagiarism.jsx": () => import("./assets/Plagiarism-CMUvlOwW.js"), "./Pages/SubmissionGuidelines/AreaDetail.jsx": () => import("./assets/AreaDetail-dAf6ALRC.js"), "./Pages/SubmissionGuidelines/Areas.jsx": () => import("./assets/Areas-CIAApKDr.js"), "./Pages/SubmissionGuidelines/CallForPapers.jsx": () => import("./assets/CallForPapers-CMqZ4KEV.js"), "./Pages/SubmissionGuidelines/ImportantInfo.jsx": () => import("./assets/ImportantInfo-DrSTRq-5.js"), "./Pages/SubmissionGuidelines/Index.jsx": () => import("./assets/Index-Mf_ys4xJ.js"), "./Pages/SubmissionGuidelines/PublicationCharges.jsx": () => import("./assets/PublicationCharges-DlSAPBNv.js"), "./Pages/SubmissionGuidelines/ReviewProcess.jsx": () => import("./assets/ReviewProcess-BTfQOQ06.js"), "./Pages/TrackManuscript.jsx": () => import("./assets/TrackManuscript-Cwjj7h5w.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
