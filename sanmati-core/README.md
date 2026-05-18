# Sanmati Spectrum of Knowledge & Emerging Discourse

<div align="center">
  <h3>A National-Level Multidisciplinary Quarterly Research Journal</h3>
</div>

## Project Overview

Welcome to the **Sanmati Journal** platform, a premium academic portfolio and scholarly publication service. This application serves as the digital front door for the journal, providing comprehensive details on editorial leadership, structural guidelines, ethical indices, and published academic volumes. 

Built with an ultra-modern, Yale-themed "Glassmorphism" design aesthetic, it integrates cleanly animated React interfaces with a robust Laravel PHP backend.

## Key Features

- **Multidisciplinary Showcase**: Clean, data-driven grids highlighting the journal's 25+ academic domains and research fields.
- **Editorial & Advisory Boards**: Dynamically rendered team profiles, complete with custom avatars, scholarly links, and institutional affiliations.
- **Academic Protocols**: Beautifully categorized pages dictating formatting instructions, publication ethics, plagiarism guardrails, and rapid peer-review schemas.
- **Book Publishing Arm**: A dedicated wing for authors seeking to publish their PhD theses as Hardcover books (complete with active E-commerce links to Amazon & Flipkart).
- **SEO & Search Indexing**: Built-in programmatic `sitemap.xml` generators, extensive OpenGraph/Twitter Card metadata tags, and JSON-LD schema markup optimized for Google Crawling (targeting keywords like "UGC Care Listed Journal" and "Multidisciplinary Research India").
- **Responsive PWA Architecture**: Native full-responsive optimization yielding a flawless layout transition from 4K Desktop monitors down to iOS/Android mobile devices.

## Technology Stack

- **Backend**: Laravel 11.x (PHP 8.2+)
- **Frontend Engine**: React 18 / Inertia.js 
- **Styling Authority**: TailwindCSS / Framer Motion (Micro-animations)
- **Icons**: Lucide-React
- **Database**: SQLite / MySQL via Eloquent ORM

## Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aradhy20/sanmati-journal
   cd sanmati-journal
   ```
2. **Install PHP & Node Dependencies:**
   ```bash
   composer install
   npm install
   ```
3. **Environment Setup:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
4. **Compile Frontend Assets:**
   ```bash
   npm run build
   ```
5. **Boot the Servers:**
   ```bash
   php artisan serve
   ```
   *Visit `http://localhost:8000` to view the local instance.*

## Authors

Maintained and developed by Aradhy Jain.

*© 2026 JTS Publications | Sanmati Spectrum of Knowledge & Emerging Discourse*
