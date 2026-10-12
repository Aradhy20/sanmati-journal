import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const pages = [
  { name: 'Home', url: 'https://sanmatijournal.in/' },
  { name: 'Archive', url: 'https://sanmatijournal.in/archive' },
  { name: 'Issue 3.1', url: 'https://sanmatijournal.in/issue/3/1' },
  { name: 'Issue 3.2', url: 'https://sanmatijournal.in/issue/3/2' },
  { name: 'Issue 3.3', url: 'https://sanmatijournal.in/issue/3/3' },
  { name: 'Article 160', url: 'https://sanmatijournal.in/article/160' },
];

const outDir = path.resolve('benchmarks/baseline');
fs.mkdirSync(outDir, { recursive: true });

async function runAudit(page, preset) {
  const isMobile = preset === 'mobile';
  const outPath = path.join(outDir, `${page.name.replace(/\s+/g, '_').toLowerCase()}_${preset}.json`);
  const flags = isMobile
    ? '--form-factor=mobile --screenEmulation.mobile=true'
    : '--preset=desktop';

  const cmd = `npx lighthouse "${page.url}" ${flags} --output=json --output-path="${outPath}" --chrome-flags="--headless" --quiet`;
  console.log(`Running ${preset} audit for ${page.name} (${page.url})...`);
  try {
    execSync(cmd, { stdio: 'inherit' });
    const raw = JSON.parse(fs.readFileSync(outPath, 'utf8'));
    const audits = raw.audits;
    const score = Math.round((raw.categories.performance?.score || 0) * 100);
    const fcp = audits['first-contentful-paint']?.displayValue || 'N/A';
    const lcp = audits['largest-contentful-paint']?.displayValue || 'N/A';
    const tbt = audits['total-blocking-time']?.displayValue || 'N/A';
    const cls = audits['cumulative-layout-shift']?.displayValue || 'N/A';
    const si = audits['speed-index']?.displayValue || 'N/A';
    const ttfb = audits['server-response-time']?.displayValue || 'N/A';

    return {
      name: page.name,
      preset,
      score,
      fcp,
      lcp,
      tbt,
      cls,
      si,
      ttfb
    };
  } catch (err) {
    console.error(`Failed ${preset} for ${page.name}:`, err.message);
    return null;
  }
}

async function main() {
  const results = [];
  for (const page of pages) {
    const dResult = await runAudit(page, 'desktop');
    if (dResult) results.push(dResult);
    const mResult = await runAudit(page, 'mobile');
    if (mResult) results.push(mResult);
  }

  console.log('\n=== BASELINE RESULTS TABLE ===');
  console.table(results);
  fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(results, null, 2));
}

main();
