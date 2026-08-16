import React, { Suspense, lazy } from 'react';
import MainLayout from '../Layouts/MainLayout';
import NoticeBoard from '../Components/NoticeBoard';
import Hero from '../Components/Hero';
import LiveStats from '../Components/LiveStats';
import TrustCredentials from '../Components/TrustCredentials';
import LatestIssueShowcase from '../Components/LatestIssueShowcase';
import LatestPapersSection from '../Components/LatestPapersSection';

// Code-split below-the-fold homepage components to minimize initial JS payload on mobile
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
            {/* 0. Prominent Academic Notice Board / Conference Announcement */}
            <NoticeBoard announcement={featuredAnnouncement} />

            {/* 1. Hero Banner with Verified Badges */}
            <Hero papers={displayPapers} currentIssue={currentIssue} metrics={metrics} />

            {/* 2. Live Impact Statistics Counters */}
            <LiveStats metrics={metrics} />

            {/* 3. Verified Credentials Showcase (ISSN 3108-1819, CrossRef DOI, CC-BY 4.0, COPE Ethics) */}
            <TrustCredentials />

            {/* 4. Current Published Issue Showcase */}
            <LatestIssueShowcase currentIssue={currentIssue} papers={displayPapers} />

            {/* 5. Featured Research Papers Grid */}
            <LatestPapersSection papers={displayPapers} />

            {/* 6–12. Below-the-fold Interactive Sections (Lazy Loaded) */}
            <Suspense fallback={<div className="py-12 text-center text-xs text-slate-400">Loading section details...</div>}>
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
