import puppeteer from 'puppeteer';

(async () => {
    console.log("Starting Puppeteer...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    page.on('console', msg => {
        console.log(`PAGE LOG [${msg.type()}]:`, msg.text());
    });
    page.on('pageerror', error => console.error('PAGE EXCEPTION:', error.message));
    page.on('requestfailed', request =>
        console.error('REQUEST FAILED:', request.url(), request.failure()?.errorText || 'Unknown error')
    );

    await page.goto('http://127.0.0.1:5175', { waitUntil: 'networkidle0' });
    const html = await page.content();
    console.log("PAGE HTML:");
    console.log(html);
    console.log("Done checking.");
    await browser.close();
})();
