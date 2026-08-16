<?php

namespace App\Services;

class AnnouncementService
{
    /**
     * Get the featured international conference announcement data.
     */
    public static function getConferenceAnnouncement(): array
    {
        return [
            'id' => 'international-seminar-gen-z-2026',
            'slug' => 'international-seminar-gen-z-2026',
            'priority' => 'high',
            'category' => 'International Academic Conference',
            'status' => 'active',

            // Titles
            'title' => 'अंतरराष्ट्रीय संगोष्ठी, शोध-पत्र वाचन एवं श्रेष्ठ शिक्षक सम्मान अवार्ड',
            'title_en' => 'International Seminar, Research Paper Presentation & Best Teacher Award',
            'theme' => 'GEN Z: EDUCATION, DIGITAL CULTURE, INNOVATION AND SOCIAL TRANSFORMATION',
            'theme_hi' => 'जेन-जी : शिक्षा, डिजिटल संस्कृति, नवाचार एवं सामाजिक परिवर्तन',

            // Organizers
            'organizers' => [
                [
                    'name' => 'सन्मति एजुकेशन एंड रिसर्च फाउंडेशन ऑफ इंडिया (SERFI)',
                    'name_en' => 'Sanmati Education and Research Foundation of India (SERFI)',
                    'role' => 'Principal Organizer'
                ],
                [
                    'name' => 'भगवान आदिनाथ कॉलेज ऑफ एजुकेशन, ललितपुर (उ.प्र.)',
                    'name_en' => 'Bhagwan Adinath College of Education, Lalitpur (U.P.)',
                    'role' => 'Co-Organizer'
                ],
            ],

            // Special Feature
            'special_notice_badge' => 'शिक्षक दिवस विशेष सम्मान',
            'special_notice' => '05 सितम्बर 2026 (शिक्षक दिवस) के अवसर पर शिक्षा के क्षेत्र में उत्कृष्ट योगदान हेतु प्रत्येक प्रतिभागी को श्रेष्ठ शिक्षक सम्मान अवार्ड (हार्ड कॉपी) एवं सहभागिता प्रमाण-पत्र प्रदान किया जाएगा।',

            // Mode & Dates
            'mode' => 'Hybrid Mode (ऑनलाइन एवं ऑफलाइन)',
            'mode_type' => 'hybrid',
            'event_date' => '2026-09-05',
            'event_date_formatted' => '05 सितम्बर 2026',
            'event_date_en' => '05 September 2026',

            // Deadlines
            'registration_deadline' => '2026-08-15',
            'registration_deadline_formatted' => '15 अगस्त 2026',
            'registration_deadline_en' => '15 August 2026',
            'is_registration_deadline_passed' => true, // Registration was 15 August 2026
            'registration_fee' => 'निःशुल्क (Free Registration)',
            'registration_url' => 'https://docs.google.com/forms/d/e/1FAIpQLSfzSIAiplpzvwaHKfHkLlGKhIIx5UDb-CcL8fqGRpvt2IyXNg/viewform?usp=header',

            'paper_deadline' => '2026-08-30',
            'paper_deadline_formatted' => '30 अगस्त 2026',
            'paper_deadline_en' => '30 August 2026',
            'is_paper_deadline_active' => true, // Active until 30 August 2026

            // Submission Details
            'submission_email' => 'bacesanmatijournal@gmail.com',
            'whatsapp_group_url' => 'https://chat.whatsapp.com/CXmOENonzJSCG3nNxnTXLq?s=cl&p=a&ilr=0',
            'website_url' => 'https://sanmatijournal.in',

            // Journal Publication
            'publication_journal' => 'Sanmati Spectrum of Knowledge and Emerging Discourse',
            'publication_issn' => '3108-1819',
            'publication_type' => 'Multidisciplinary Peer Reviewed Print Research Journal',

            // Sub-topics
            'subtopics_heading' => 'उप-विषय पर भी आलेख आमंत्रित किये जाते हैं',
            'subtopics' => [
                ['name' => 'शिक्षा', 'en' => 'Education', 'icon' => 'BookOpen'],
                ['name' => 'AI', 'en' => 'Artificial Intelligence', 'icon' => 'Sparkles'],
                ['name' => 'डिजिटल संस्कृति', 'en' => 'Digital Culture', 'icon' => 'Globe'],
                ['name' => 'मानसिक स्वास्थ्य', 'en' => 'Mental Health', 'icon' => 'Heart'],
                ['name' => 'उद्यमिता', 'en' => 'Entrepreneurship', 'icon' => 'Zap'],
                ['name' => 'नेतृत्व', 'en' => 'Leadership', 'icon' => 'Users'],
                ['name' => 'पर्यावरण', 'en' => 'Environment & Sustainability', 'icon' => 'Leaf'],
                ['name' => 'अनुसंधान एवं नवाचार', 'en' => 'Research & Innovation', 'icon' => 'FlaskConical'],
                ['name' => 'मीडिया', 'en' => 'Media & Communication', 'icon' => 'Share2'],
                ['name' => 'साहित्य', 'en' => 'Literature & Humanities', 'icon' => 'Bookmark'],
                ['name' => 'कानून', 'en' => 'Law & Legal Studies', 'icon' => 'Scale'],
                ['name' => 'स्वास्थ्य', 'en' => 'Healthcare & Wellness', 'icon' => 'ShieldCheck'],
                ['name' => 'वित्तीय साक्षरता', 'en' => 'Financial Literacy', 'icon' => 'Landmark'],
                ['name' => 'सामाजिक परिवर्तन', 'en' => 'Social Transformation', 'icon' => 'TrendingUp'],
                ['name' => 'विकसित भारत–2047', 'en' => 'Viksit Bharat 2047', 'icon' => 'Flag'],
                ['name' => 'Gen Z से संबंधित सभी विषय', 'en' => 'All Gen Z Related Disciplines', 'icon' => 'Layers'],
            ],

            // Benefits
            'benefits' => [
                'DOI (Digital Object Identifier) प्रत्येक चयनित शोध-पत्र को प्रदान किया जाएगा।',
                'Journal Website (sanmatijournal.in) पर Online Publication Link प्रदान किया जाएगा।',
                'Google Scholar पर खोज/इंडेक्सिंग की संभावना, Google Scholar की स्वतंत्र indexing एवं eligibility प्रक्रियाओं के अधीन।'
            ],

            // Collaboration / Contribution Plans
            'plans' => [
                [
                    'amount' => '₹1200/-',
                    'title' => 'शोध-पत्र प्रकाशन + अवार्ड + प्रमाण-पत्र',
                    'desc' => 'शोध-पत्र प्रकाशन, ISSN प्रिंट जर्नल (हार्ड कॉपी), श्रेष्ठ शिक्षक सम्मान अवार्ड एवं सहभागिता प्रमाण-पत्र',
                    'popular' => true,
                    'tag' => 'अनुशंसित (Recommended)'
                ],
                [
                    'amount' => '₹400/-',
                    'title' => 'केवल अवार्ड एवं प्रमाण-पत्र',
                    'desc' => 'केवल श्रेष्ठ शिक्षक सम्मान अवार्ड एवं सहभागिता प्रमाण-पत्र',
                    'popular' => false,
                    'tag' => 'शिक्षक सम्मान'
                ],
                [
                    'amount' => '₹1600/-',
                    'title' => 'प्रकाशन + अवार्ड + प्रमाण-पत्र + गाइड कॉपी',
                    'desc' => 'शोध-पत्र प्रकाशन, ISSN प्रिंट जर्नल (हार्ड कॉपी), श्रेष्ठ शिक्षक सम्मान अवार्ड, सहभागिता प्रमाण-पत्र एवं गाइड कॉपी',
                    'popular' => false,
                    'tag' => 'कम्पलीट पैकेज'
                ]
            ],

            // Bank Payment Details
            'bank_details' => [
                'account_name' => 'Sanmati Education and Research Foundation of India',
                'bank_name' => 'Punjab National Bank (PNB)',
                'account_number' => '6010002100004208',
                'ifsc' => 'PUNB0601000',
                'disclaimer' => 'Please verify payment details with the official organizing team before making payment.'
            ],

            // FAQs (AEO/GEO & Schema)
            'faqs' => [
                [
                    'q' => 'What is the theme of the international seminar?',
                    'a' => 'GEN Z: EDUCATION, DIGITAL CULTURE, INNOVATION AND SOCIAL TRANSFORMATION (जेन-जी : शिक्षा, डिजिटल संस्कृति, नवाचार एवं सामाजिक परिवर्तन).'
                ],
                [
                    'q' => 'When is the event and what is the mode of participation?',
                    'a' => 'The international seminar will take place on 05 September 2026 (Teachers\' Day) in Hybrid Mode (both online and offline).'
                ],
                [
                    'q' => 'What is the research paper submission deadline?',
                    'a' => 'The research paper submission deadline is 30 August 2026. Papers should be submitted via email to bacesanmatijournal@gmail.com.'
                ],
                [
                    'q' => 'Is registration free for the seminar?',
                    'a' => 'The supplied announcement states that conference registration is free.'
                ],
                [
                    'q' => 'Which subjects and research areas are accepted?',
                    'a' => 'Submissions are invited across Education, AI, Digital Culture, Mental Health, Entrepreneurship, Leadership, Environment, Research and Innovation, Media, Literature, Law, Health, Financial Literacy, Social Transformation, Viksit Bharat–2047 and all topics related to Gen Z.'
                ],
                [
                    'q' => 'Where will selected research papers be published?',
                    'a' => 'Selected research papers will be published in Sanmati Spectrum of Knowledge and Emerging Discourse (ISSN: 3108-1819), a multidisciplinary peer-reviewed research journal, with persistent CrossRef DOIs and online publication links.'
                ]
            ]
        ];
    }
}
