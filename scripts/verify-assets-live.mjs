/**
 * Verify key static assets are reachable on a deployed site.
 * Usage: node scripts/verify-assets-live.mjs https://yourdomain.com
 *        npm run verify:assets -- https://yourdomain.com
 */
const baseUrl = process.argv[2]?.replace(/\/$/, "");

if (!baseUrl) {
  console.error("Usage: npm run verify:assets -- <base-url>");
  console.error("Example: npm run verify:assets -- https://yourdomain.com");
  console.error("Example: npm run verify:assets -- http://localhost:3000");
  process.exit(1);
}

const CHECKS = [
  "/assets/logo.jpg",
  "/assets/background-tourism.mp4",
  "/assets/card-alumni.jpg",
  "/assets/logo-france-competences.png",
  "/assets/pexels-pixabay-532173-scaled-1.jpg",
];

async function check(path) {
  const url = `${baseUrl}${path}`;
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (res.status === 405) {
      const getRes = await fetch(url, { method: "GET", redirect: "follow" });
      return { path, url, status: getRes.status, ok: getRes.ok };
    }
    return { path, url, status: res.status, ok: res.ok };
  } catch (err) {
    return { path, url, status: 0, ok: false, error: err.message };
  }
}

async function main() {
  console.log(`Checking assets at: ${baseUrl}\n`);
  let failed = 0;

  for (const path of CHECKS) {
    const result = await check(path);
    if (result.ok) {
      console.log(`OK   ${result.status}  ${path}`);
    } else {
      failed += 1;
      const detail = result.error ? ` (${result.error})` : "";
      console.log(`FAIL ${result.status}  ${path}${detail}`);
      console.log(`     ${result.url}`);
    }
  }

  console.log("");
  if (failed === 0) {
    console.log("All asset checks passed.");
    process.exit(0);
  }

  console.log(`${failed}/${CHECKS.length} checks failed.`);
  console.log("If 404: ensure files are in {app_root}/public/assets/ on the server.");
  console.log("See deploy/CPANEL-DEPLOY.md for upload instructions.");
  process.exit(1);
}

main();
