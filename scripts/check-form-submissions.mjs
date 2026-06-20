import mysql from 'mysql2/promise';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
for (const envFile of ['.env.local', '.env']) {
  const envPath = resolve(__dirname, '..', envFile);
  if (!existsSync(envPath)) continue;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
  break;
}

const conn = await mysql.createConnection({
  host: process.env.WEBSITE_DB_HOST,
  user: process.env.WEBSITE_DB_USER,
  password: process.env.WEBSITE_DB_PASSWORD,
  port: Number(process.env.WEBSITE_DB_PORT || 3306),
});

const [dbs] = await conn.query("SHOW DATABASES LIKE 'grand_sud_france%'");
console.log('Matching databases:', dbs.map((r) => Object.values(r)[0]));

for (const db of ['grand_sud_france_website', 'grand_sud_france_webiste']) {
  try {
    const [[{ cnt }]] = await conn.query(`SELECT COUNT(*) AS cnt FROM \`${db}\`.form_submissions`);
    const [latest] = await conn.query(
      `SELECT submission_id, form_type, email, phone, crm_sync_status, created_at FROM \`${db}\`.form_submissions ORDER BY submission_id DESC LIMIT 5`
    );
    console.log(`\n${db}: ${cnt} row(s)`);
    console.log(latest);
  } catch (err) {
    console.log(`\n${db}: ${err.message}`);
  }
}

await conn.end();
