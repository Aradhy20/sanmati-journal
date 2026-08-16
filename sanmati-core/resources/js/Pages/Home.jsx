import React, { Suspense, lazy } from 'react';
import MainLayout from '../Layouts/MainLayout';
import NoticeBoard from '../Components/NoticeBoard';
import Hero from '../Components/Hero';
// Code-split below-the-fold homepage components to minimize initial JS payload on mobile
const LiveStats = lazy(() => import('../Components/LiveStats'));
const TrustCredentials = lazy(() => import('../Components/TrustCredentials'));
const LatestIssueShowcase = lazy(() => import('../Components/LatestIssueShowcase'));
const LatestPapersSection = lazy(() => import('../Components/LatestPapersSection'));
const WhyPublishSection = lazy(() => import('../Components/WhyPublishSection'));
const ResearchAreasGrid = lazy(() => import('../Components/ResearchAreasGrid'));
const SubmissionProcessTimeline = lazy(() => import('../Components/SubmissionProcessTimeline'));
const CallForPapersBanner = lazy(() => import('../Components/CallForPapersBanner'));
const EditorialBoardPreview = lazy(() => import('../Components/EditorialBoardPreview'));
const ResearchBlogSection = lazy(() => import('../Components/ResearchBlogSection'));
const Testimonials = lazy(() => import('../Components/Testimonials'));
const NewsletterSection = lazy(() => import('../Components/NewsletterSection'));
const HomeFAQ = lazy(() => import('../Components/HomeFAQ'));

export default function Home({
    latestPapers = [],
    featuredPapers = [],
    currentIssue = null,
    metrics = null,
    featuredAnnouncement = null
}) {
    const seoTitle = "Sanmati Spectrum of Knowledge | International Peer Reviewed Journal (ISSN 3108-1819)";
    const seoDescription = "Publish high-quality research in India with Sanmati Spectrum of Knowledge — an international peer-reviewed multidisciplinary research journal with CrossRef DOIs and open access dissemination.";
    const seoKeywords = "UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal 3108-1819";

    const displayPapers = (featuredPapers && featuredPapers.length > 0) ? featuredPapers : latestPapers;

    return (
        <MainLayout title={seoTitle} description={seoDescription} keywords={seoKeywords}>
            {/* 0. Prominent Academic Notice Board / Conference Announcement (First Viewport) */}
            <NoticeBoard announcement={featuredAnnouncement} />

            {/* 1. Hero Banner with Verified Badges (First Viewport) */}
            <Hero papers={displayPapers} currentIssue={currentIssue} metrics={metrics} />

            {/* 2–13. Below-the-fold Interactive Sections (Lazy Loaded) */}
            <Suspense fallback={<div className="py-8 text-center text-xs text-slate-400">Loading section details...</div>}>
                <LiveStats metrics={metrics} />
                <TrustCredentials />
                <LatestIssueShowcase currentIssue={currentIssue} papers={displayPapers} />
                <LatestPapersSection papers={displayPapers} />
                <WhyPublishSection />
                <ResearchAreasGrid />
                <SubmissionProcessTimeline />
                <CallForPapersBanner />
                <EditorialBoardPreview />
                <ResearchBlogSection />
                <HomeFAQ />
                <Testimonials />
                <NewsletterSection />
            </Suspense>
        </MainLayout>
    );
}
