import React, { Suspense, lazy } from 'react';
import MainLayout from '../Layouts/MainLayout';
import Hero from '../Components/Hero';
import LiveStats from '../Components/LiveStats';
import TrustCredentials from '../Components/TrustCredentials';
import LatestIssueShowcase from '../Components/LatestIssueShowcase';
import LatestPapersSection from '../Components/LatestPapersSection';
import WhyPublishSection from '../Components/WhyPublishSection';
import ResearchAreasGrid from '../Components/ResearchAreasGrid';
import SubmissionProcessTimeline from '../Components/SubmissionProcessTimeline';
import CallForPapersBanner from '../Components/CallForPapersBanner';
import EditorialBoardPreview from '../Components/EditorialBoardPreview';
import ResearchBlogSection from '../Components/ResearchBlogSection';

const Testimonials = lazy(() => import('../Components/Testimonials'));
const NewsletterSection = lazy(() => import('../Components/NewsletterSection'));
const HomeFAQ = lazy(() => import('../Components/HomeFAQ'));

export default function Home({ latestPapers = [], currentIssue = null, metrics = null }) {
    const seoTitle = "Sanmati Spectrum of Knowledge | International Peer Reviewed Journal (ISSN 3108-1819)";
    const seoDescription = "Publish high-quality research in India with Sanmati Spectrum of Knowledge — an international peer-reviewed multidisciplinary research journal with CrossRef DOIs and open access dissemination.";
    const seoKeywords = "UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal 3108-1819";

    return (
        <MainLayout title={seoTitle} description={seoDescription} keywords={seoKeywords}>
            {/* 1. Hero Banner with Verified Badges */}
            <Hero papers={latestPapers} currentIssue={currentIssue} />

            {/* 2. Live Impact Statistics Counters */}
            <LiveStats />

            {/* 3. Verified Credentials Showcase (ISSN 3108-1819, CrossRef DOI, CC-BY 4.0, COPE Ethics) */}
            <TrustCredentials />

            {/* 4. Current Published Issue Showcase */}
            <LatestIssueShowcase currentIssue={currentIssue} papers={latestPapers} />

            {/* 5. Featured Research Papers Grid */}
            <LatestPapersSection papers={latestPapers} />

            {/* 6. Why Choose Sanmati Journal Grid */}
            <WhyPublishSection />

            {/* 7. Multidisciplinary Research Categories */}
            <ResearchAreasGrid />

            {/* 8. 6-Step Submission Process Timeline */}
            <SubmissionProcessTimeline />

            {/* 9. Call for Papers & Countdown Timer Banner */}
            <CallForPapersBanner />

            {/* 10. International Editorial Directorate Showcase */}
            <EditorialBoardPreview />

            {/* 11. Academic Knowledge Base & Research Blog */}
            <ResearchBlogSection />

            {/* 12. FAQ Accordion, Testimonials & Newsletter Capture */}
            <Suspense fallback={<div className="py-12 text-center text-xs text-slate-400">Loading FAQs & Reviews...</div>}>
                <HomeFAQ />
                <Testimonials />
                <NewsletterSection />
            </Suspense>
        </MainLayout>
    );
}
