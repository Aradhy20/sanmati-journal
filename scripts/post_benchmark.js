import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('benchmarks/post_optimization');
fs.mkdirSync(outDir, { recursive: true });

function parseAudit(filePath) {
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const audits = raw.audits;
  return {
    score: Math.round((raw.categories.performance?.score || 0) * 100),
    fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
    fcpNum: audits['first-contentful-paint']?.numericValue || 0,
    lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
    lcpNum: audits['largest-contentful-paint']?.numericValue || 0,
    tbt: audits['total-blocking-time']?.displayValue || 'N/A',
    tbtNum: audits['total-blocking-time']?.numericValue || 0,
    cls: audits['cumulative-layout-shift']?.displayValue || '0',
    clsNum: audits['cumulative-layout-shift']?.numericValue || 0,
    si: audits['speed-index']?.displayValue || 'N/A',
    siNum: audits['speed-index']?.numericValue || 0,
    ttfb: audits['server-response-time']?.displayValue || 'N/A',
  };
}

async function runLighthouse(url, preset, outPath) {
  const flags = preset === 'mobile'
    ? '--form-factor=mobile --screenEmulation.mobile=true'
    : '--preset=desktop';
  const cmd = `npx lighthouse "${url}" ${flags} --output=json --output-path="${outPath}" --chrome-flags="--headless" --quiet`;
  execSync(cmd, { stdio: 'inherit' });
  return parseAudit(outPath);
}

async function main() {
  console.log('=== RUNNING POST-OPTIMIZATION AUDITS ===');

  // 1. Triple runs for Homepage
  const homeMobileRuns = [];
  const homeDesktopRuns = [];

  for (let i = 1; i <= 3; i++) {
    console.log(`\nHome Desktop Run ${i}/3...`);
    const dPath = path.join(outDir, `home_desktop_run${i}.json`);
    const dRes = await runLighthouse('https://sanmatijournal.in/', 'desktop', dPath);
    homeDesktopRuns.push({ run: i, ...dRes });

    console.log(`Home Mobile Run ${i}/3...`);
    const mPath = path.join(outDir, `home_mobile_run${i}.json`);
    const mRes = await runLighthouse('https://sanmatijournal.in/', 'mobile', mPath);
    homeMobileRuns.push({ run: i, ...mRes });
  }

  // 2. Representative pages
  const otherPages = [
    { name: 'Archive', url: 'https://sanmatijournal.in/archive' },
    { name: 'Issue 3.1', url: 'https://sanmatijournal.in/issue/3/1' },
    { name: 'Issue 3.2', url: 'https://sanmatijournal.in/issue/3/2' },
    { name: 'Issue 3.3', url: 'https://sanmatijournal.in/issue/3/3' },
    { name: 'Article 160', url: 'https://sanmatijournal.in/article/160' },
  ];

  const pageResults = [];
  for (const p of otherPages) {
    console.log(`\n${p.name} Desktop...`);
    const dPath = path.join(outDir, `${p.name.replace(/\s+/g, '_').toLowerCase()}_desktop.json`);
    const dRes = await runLighthouse(p.url, 'desktop', dPath);
    pageResults.push({ name: p.name, preset: 'desktop', ...dRes });

    console.log(`${p.name} Mobile...`);
    const mPath = path.join(outDir, `${p.name.replace(/\s+/g, '_').toLowerCase()}_mobile.json`);
    const mRes = await runLighthouse(p.url, 'mobile', mPath);
    pageResults.push({ name: p.name, preset: 'mobile', ...mRes });
  }

  const summary = {
    homeDesktopRuns,
    homeMobileRuns,
    pageResults
  };

  fs.writeFileSync(path.join(outDir, 'post_summary.json'), JSON.stringify(summary, null, 2));

  console.log('\n=== HOMEPAGE TRIPLE AUDITS (DESKTOP) ===');
  console.table(homeDesktopRuns);

  console.log('\n=== HOMEPAGE TRIPLE AUDITS (MOBILE) ===');
  console.table(homeMobileRuns);

  console.log('\n=== OTHER PAGES AUDITS ===');
  console.table(pageResults);
}

main().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
