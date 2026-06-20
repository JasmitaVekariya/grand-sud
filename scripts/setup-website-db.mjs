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

const config = {
  host: process.env.WEBSITE_DB_HOST || 'localhost',
  user: process.env.WEBSITE_DB_USER || 'root',
  password: process.env.WEBSITE_DB_PASSWORD || '',
  port: Number(process.env.WEBSITE_DB_PORT || 3306),
  multipleStatements: true,
};

const dbName = process.env.WEBSITE_DB_NAME || 'grand_sud_france_website';

async function setup() {
  const connection = await mysql.createConnection(config);

  console.log(`Setting up database "${dbName}"...\n`);

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  await connection.query(`USE \`${dbName}\``);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS form_submissions (
      submission_id BIGINT AUTO_INCREMENT PRIMARY KEY,
      form_type VARCHAR(50) NOT NULL,
      lang ENUM('en','fr') NOT NULL,
      first_name VARCHAR(100) NULL,
      last_name VARCHAR(100) NULL,
      email VARCHAR(190) NULL,
      phone VARCHAR(30) NULL,
      payload JSON NOT NULL,
      crm_endpoint VARCHAR(120) NULL,
      crm_lead_ref VARCHAR(20) NULL,
      crm_sync_status ENUM('pending','success','failed','duplicate') DEFAULT 'pending',
      crm_sync_error TEXT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_form_type (form_type),
      INDEX idx_crm_sync (crm_sync_status),
      INDEX idx_created (created_at)
    )
  `);

  console.log('Database and form_submissions table ready.');
  await connection.end();
}

setup().catch((err) => {
  console.error('Setup failed:', err.message);
  process.exit(1);
});
