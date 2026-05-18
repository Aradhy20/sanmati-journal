# Sanmati Spectrum Journal

Welcome to the official repository for the **Sanmati Spectrum Academic Research Journal** platform.

This platform is a comprehensive peer-reviewed journal management system built with **Laravel 11**, **React**, **Inertia.js**, and **Vite**. It features automated email queues, manuscript submission wizards, author dashboards, and secure manuscript tracking.

## ⚠️ Repository Structure (Important for Deployment)

This repository has been strictly formatted and restructured for **Shared Hosting Deployment (e.g., Hostinger, cPanel)**. It prevents the `403 Forbidden` errors commonly encountered when deploying Laravel apps on shared servers and maximizes security by keeping core files out of the public web root.

### Folder Layout

* **`sanmati-core/`**: Contains the entirety of the Laravel application (`app`, `bootstrap`, `routes`, `.env`, `vendor`, etc.). **This folder must remain outside your public web directory.**
* **`public_html/`**: Contains the compiled React assets (`build/`), images, and the modified `index.php` and `.htaccess` files. 

## 🚀 Deployment Instructions (Hostinger)

If you are deploying this to Hostinger or a similar cPanel server, follow these exact steps:

1. Connect your hosting panel to this GitHub repository.
2. Deploy the repository to your domain's root folder (e.g., `/home/uXXXX/domains/sanmatijournal.in/`).
3. After the files are on your server, **move all the contents** of this repository's `public_html/` folder directly into your server's actual `public_html` directory.
4. Set up your `.env` file inside the `sanmati-core/` folder with your production database and SMTP credentials.
5. Setup a Cron Job on your server to process the email queues:
   ```bash
   * * * * * cd /path-to-your/sanmati-core && php artisan queue:work --stop-when-empty
   ```

## 💻 Local Development

Because of this unique deployment structure, if you wish to run the app locally on your machine, you must navigate into the `sanmati-core` directory first:

```bash
cd sanmati-core
composer install
npm install
php artisan serve
npm run dev
```

*Note: For local development, `php artisan serve` will work normally, but remember that the public path is bound to the `public_html` folder at the root of this repository.*
