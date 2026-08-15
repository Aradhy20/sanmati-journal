<?php

namespace App\Services;

class BlogService
{
    public static function getPosts()
    {
        return [
            [
                'slug' => 'how-to-choose-multidisciplinary-research-journal',
                'title' => 'How to Choose a Multidisciplinary Research Journal: Decision Framework',
                'category' => 'Publishing Guide',
                'readTime' => '7 min read',
                'author' => 'Sanmati Editorial Directorate',
                'date' => 'August 2026',
                'image' => '/images/blog/how-to-choose-multidisciplinary-research-journal.webp',
                'excerpt' => 'A comprehensive decision framework for academic authors on selecting multidisciplinary journals, verifying indexation, and checking publication ethics.'
            ],
            [
                'slug' => 'research-paper-submission-checklist-postgraduate-students',
                'title' => 'Research Paper Submission Checklist for Postgraduate Students',
                'category' => 'Author Toolkit',
                'readTime' => '6 min read',
                'author' => 'Dr Namrata Jain',
                'date' => 'August 2026',
                'image' => '/images/blog/research-paper-submission-checklist-postgraduate-students.webp',
                'excerpt' => 'A rigorous 12-point quality gate for PG researchers to ensure formatting, plagiarism checks, double-blind isolation, and citation credibility.'
            ],
            [
                'slug' => 'apa-7-ieee-citation-examples-indian-researchers',
                'title' => 'APA 7 & IEEE Citation Examples: Guide for Indian Researchers',
                'category' => 'Reference Guide',
                'readTime' => '8 min read',
                'author' => 'Technical Editors',
                'date' => 'August 2026',
                'image' => '/images/blog/apa-7-ieee-citation-examples-indian-researchers.webp',
                'excerpt' => 'Detailed formatting examples for citing Indian journals, books, digital DOIs, and online datasets in APA 7th edition and IEEE formats.'
            ],
            [
                'slug' => 'how-to-publish-research-paper-in-india',
                'title' => 'How to Publish Research Paper in India: Complete Author Guide',
                'category' => 'Publishing Guide',
                'readTime' => '6 min read',
                'author' => 'Sanmati Editorial Directorate',
                'date' => 'February 2026',
                'image' => '/images/blog/how-to-publish-research-paper-in-india.webp',
                'excerpt' => 'Step-by-step guide covering manuscript formatting, journal selection, UGC CARE parameters, plagiarism checks, and double-blind peer review.'
            ],
            [
                'slug' => 'ugc-care-journal-guidelines-and-ethics',
                'title' => 'UGC CARE Journal Guidelines & Academic Ethics Explained',
                'category' => 'UGC Standards',
                'readTime' => '8 min read',
                'author' => 'Dr Namrata Jain',
                'date' => 'January 2026',
                'image' => '/images/blog/ugc-care-journal-guidelines-and-ethics.webp',
                'excerpt' => 'Understanding UGC CARE list parameters, COPE ethics compliance, and citation credibility for Indian academicians.'
            ],
            [
                'slug' => 'apa-7th-vs-ieee-citation-styles-guide',
                'title' => 'APA 7th Edition vs IEEE Citation Styles: Complete Reference Guide',
                'category' => 'Academic Writing',
                'readTime' => '5 min read',
                'author' => 'Technical Editors',
                'date' => 'January 2026',
                'image' => '/images/blog/apa-7th-vs-ieee-citation-styles-guide.webp',
                'excerpt' => 'Detailed reference examples for formatting in-text citations, journal articles, books, and digital DOIs accurately.'
            ],
            [
                'slug' => 'scopus-vs-web-of-science-indexing-metrics',
                'title' => 'Scopus vs Web of Science vs Google Scholar: Indexing Metrics',
                'category' => 'Research Metrics',
                'readTime' => '7 min read',
                'author' => 'Research Directorate',
                'date' => 'December 2025',
                'image' => '/images/blog/scopus-vs-web-of-science-indexing-metrics.webp',
                'excerpt' => 'Comparative analysis of Impact Factors, h-index calculation, and citation tracking databases for scholars.'
            ]
        ];
    }

    public static function getPostBySlug(string $slug)
    {
        $posts = self::getPosts();
        $matched = null;
        foreach ($posts as $p) {
            if ($p['slug'] === $slug) {
                $matched = $p;
                break;
            }
        }

        if (!$matched) {
            return null;
        }

        $content = '';
        if ($slug === 'how-to-choose-multidisciplinary-research-journal') {
            $content = '
                <h3>Direct Answer: How to Choose a Multidisciplinary Journal</h3>
                <p>When selecting a multidisciplinary journal, researchers must look for journals that assign persistent CrossRef DOIs, maintain a strict double-blind peer review process, declare a clear publication schedule, and adhere strictly to COPE ethics guidelines. Avoid unindexed journals that promise instant publication without review.</p>

                <h3>Core Selection Criteria</h3>
                <ul>
                    <li><strong>CrossRef DOI:</strong> Ensures permanent linkability of your academic record.</li>
                    <li><strong>Double-Blind Review:</strong> Guarantees fair evaluation independent of institutional bias.</li>
                    <li><strong>Open Access Dissemination:</strong> Drives research citation counts by ensuring worldwide access.</li>
                </ul>

                <h3>Comparative Framework</h3>
                <table class="min-w-full divide-y divide-slate-200 border my-4">
                    <thead class="bg-slate-50">
                        <tr>
                            <th class="px-4 py-2 text-left text-xs font-bold text-slate-700 uppercase">Feature</th>
                            <th class="px-4 py-2 text-left text-xs font-bold text-slate-700 uppercase">Indexed Journals (e.g. Sanmati)</th>
                            <th class="px-4 py-2 text-left text-xs font-bold text-slate-700 uppercase">Unindexed Journals</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-slate-200 text-xs font-medium text-slate-600">
                        <tr>
                            <td class="px-4 py-2 font-bold">Peer Review</td>
                            <td class="px-4 py-2">Rigorous 15-30 day Double-Blind Review</td>
                            <td class="px-4 py-2">Instant approval (24-48 hours) without verification</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 font-bold">DOI Mapping</td>
                            <td class="px-4 py-2">Persistent CrossRef DOIs assigned</td>
                            <td class="px-4 py-2">No persistent DOIs, temporary URLs</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 font-bold">Ethics Compliance</td>
                            <td class="px-4 py-2">COPE ethics guidelines strictly enforced</td>
                            <td class="px-4 py-2">No ethical screening or transparency</td>
                        </tr>
                    </tbody>
                </table>

                <div class="my-6 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    <h4 class="font-bold text-slate-900 mb-2">Publish with Sanmati Journal</h4>
                    <p class="text-xs text-slate-600 mb-3">Sanmati Spectrum of Knowledge offers indexed, double-blind peer-reviewed multidisciplinary publication with persistent CrossRef DOIs.</p>
                    <div class="flex flex-wrap gap-3 text-xs font-bold">
                        <a href="/submission-guidelines" class="text-blue-600 hover:underline">Submission Guidelines</a>
                        <span>•</span>
                        <a href="/submission-guidelines/call-for-papers" class="text-blue-600 hover:underline">Current Call for Papers</a>
                    </div>
                </div>

                <p class="text-xs text-slate-400">Last Updated: August 2026</p>
            ';
        } elseif ($slug === 'research-paper-submission-checklist-postgraduate-students') {
            $content = '
                <h3>Pre-Submission Quality Gate for Postgraduate Students</h3>
                <p>Academic research papers written by PG and doctoral scholars must undergo rigorous quality self-audits before submission to journals. This 12-point quality checklist minimizes desk-rejection rates, ensures COPE compliance, and accelerates double-blind review turnarounds.</p>

                <h3>The 12-Point Self-Audit Checklist</h3>
                <ol>
                    <li><strong>Manuscript Structure:</strong> Abstract, Keywords, Introduction, Methods, Results, Discussion, Conclusions, and References are structured according to standard guidelines.</li>
                    <li><strong>Formatting:</strong> The document aligns fully with the <a href="/download/author-guidelines-template" class="text-blue-600 hover:underline">Official MS Word .docx template</a>.</li>
                    <li><strong>Abstract Limit:</strong> Structured abstract is under 250 words and contains no citations.</li>
                    <li><strong>Similarity Screening:</strong> Anti-plagiarism index is verified under 10%.</li>
                    <li><strong>Double-Blind Anonymity:</strong> No author names or institutions are disclosed in the text.</li>
                    <li><strong>Reference Formatting:</strong> References section is structured cleanly in APA 7 or IEEE format.</li>
                </ol>

                <div class="my-6 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    <h4 class="font-bold text-slate-900 mb-2">Ready to Submit?</h4>
                    <p class="text-xs text-slate-600 mb-3">Verify your manuscript with our checklists and upload your paper for double-blind peer review.</p>
                    <div class="flex flex-wrap gap-3 text-xs font-bold">
                        <a href="/download/submission-checklist" class="text-blue-600 hover:underline">Download Checklist PDF</a>
                        <span>•</span>
                        <a href="/submission-guidelines/call-for-papers" class="text-blue-600 hover:underline">Submission Portal</a>
                    </div>
                </div>

                <p class="text-xs text-slate-400">Last Updated: August 2026</p>
            ';
        } elseif ($slug === 'apa-7-ieee-citation-examples-indian-researchers') {
            $content = '
                <h3>Quick Citation Reference Cheat Sheet</h3>
                <p>Accurate referencing is the cornerstone of academic integrity. This reference sheet details standard APA 7th Edition and IEEE citation examples, focusing on formats commonly required by Indian scholars for journal articles, conference papers, books, and digital datasets.</p>

                <h3>1. APA 7th Edition Examples</h3>
                <ul>
                    <li><strong>Journal Article with DOI:</strong> Jain, N., & Jain, R. K. (2026). Indian Knowledge Systems: Global Dimensions. <em>Sanmati Spectrum of Knowledge</em>, 2(1), 12-25. https://doi.org/10.5281/zenodo.12345</li>
                    <li><strong>Book:</strong> Jain, N. (2026). <em>Samkalin Sahitya aur Stri Vimarsh</em>. JTS Publications.</li>
                </ul>

                <h3>2. IEEE Citation Examples</h3>
                <ul>
                    <li><strong>Journal Article with DOI:</strong> [1] N. Jain and R. K. Jain, "Indian Knowledge Systems: Global Dimensions," <em>Sanmati Spectrum of Knowledge</em>, vol. 2, no. 1, pp. 12-25, Jan. 2026, doi: 10.5281/zenodo.12345.</li>
                    <li><strong>Conference Proceeding:</strong> [2] A. Kumar, "Data Security in Cloud Infrastructure," in <em>Proc. National Conference on Emerging Discourse</em>, 2025, pp. 45-49.</li>
                </ul>

                <div class="my-6 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    <h4 class="font-bold text-slate-900 mb-2">Author Citations Tools</h4>
                    <p class="text-xs text-slate-600 mb-3">Download citation cheat sheets or view formatting guidelines.</p>
                    <div class="flex flex-wrap gap-3 text-xs font-bold">
                        <a href="/download/citation-guide" class="text-blue-600 hover:underline">Download Reference Guide PDF</a>
                        <span>•</span>
                        <a href="/submission-guidelines" class="text-blue-600 hover:underline">Formatting Rules</a>
                    </div>
                </div>

                <p class="text-xs text-slate-400">Last Updated: August 2026</p>
            ';
        } else {
            // Fallback for historical pages
            $title = str_replace('-', ' ', $slug);
            $content = '
                <h3>' . ucwords($title) . '</h3>
                <p>This is a pre-existing publication guide archived in the Sanmati knowledge base. It provides historical reference for formatting academic manuscripts, submitting papers, and aligning research with global publishing standards.</p>
                <div class="my-6 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="flex flex-wrap gap-3 text-xs font-bold">
                        <a href="/submission-guidelines" class="text-blue-600 hover:underline">Submission Guidelines</a>
                        <span>•</span>
                        <a href="/submission-guidelines/call-for-papers" class="text-blue-600 hover:underline">Submit Paper</a>
                    </div>
                </div>
            ';
        }

        $matched['content'] = $content;
        return $matched;
    }
}
