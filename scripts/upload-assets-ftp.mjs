/**
 * Upload public/assets to cPanel via FTP (no drag-and-drop needed).
 *
 * Setup:
 *   1. Copy deploy/ftp.env.example to deploy/ftp.env
 *   2. Fill in FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_REMOTE_DIR
 *   3. Run: npm run upload:assets
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "basic-ftp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const assetsDir = path.join(root, "public", "assets");
const envFile = path.join(root, "deploy", "ftp.env");

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const env = {};
  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }
  return env;
}

function requireEnv(env, key) {
  const value = env[key] || process.env[key];
  if (!value) {
    console.error(`Missing ${key}. Copy deploy/ftp.env.example to deploy/ftp.env and fill it in.`);
    process.exit(1);
  }
  return value;
}

async function ensureRemoteDir(client, remoteDir) {
  const normalized = remoteDir.replace(/\\/g, "/").replace(/^\/+/, "").replace(/\/+$/, "");
  await client.ensureDir(normalized);
  await client.cd(normalized);
}

async function uploadDirectory(client, localDir) {
  const entries = fs.readdirSync(localDir, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    const localPath = path.join(localDir, entry.name);
    if (entry.isDirectory()) {
      await client.ensureDir(entry.name);
      await client.cd(entry.name);
      count += await uploadDirectory(client, localPath);
      await client.cdup();
    } else if (entry.isFile()) {
      process.stdout.write(`Uploading ${entry.name} ... `);
      await client.uploadFrom(localPath, entry.name);
      console.log("OK");
      count += 1;
    }
  }

  return count;
}

async function main() {
  if (!fs.existsSync(assetsDir)) {
    console.error("Missing folder:", assetsDir);
    process.exit(1);
  }

  const env = loadEnv(envFile);
  const host = requireEnv(env, "FTP_HOST");
  const user = requireEnv(env, "FTP_USER");
  const password = requireEnv(env, "FTP_PASSWORD");
  const remoteDir = requireEnv(env, "FTP_REMOTE_DIR");
  const secure = (env.FTP_SECURE || process.env.FTP_SECURE || "false").toLowerCase() === "true";

  const localFiles = fs.readdirSync(assetsDir).filter((f) => fs.statSync(path.join(assetsDir, f)).isFile());
  console.log(`Local assets: ${localFiles.length} files in public/assets`);
  console.log(`Target: ftp${secure ? "s" : ""}://${host}/${remoteDir.replace(/^\/+/, "")}`);
  console.log("");

  const client = new Client(120_000);
  client.ftp.verbose = false;

  try {
    await client.access({ host, user, password, secure });
    await ensureRemoteDir(client, remoteDir.replace(/^\/+/, ""));

    const uploaded = await uploadDirectory(client, assetsDir);
    console.log(`\nDone. Uploaded ${uploaded} files.`);
    console.log("Verify: npm run verify:assets -- https://YOUR_DOMAIN");
  } catch (err) {
    console.error("\nUpload failed:", err.message);
    console.error("\nCheck deploy/ftp.env and deploy/CPANEL-DEPLOY.md");
    process.exit(1);
  } finally {
    client.close();
  }
}

main();
