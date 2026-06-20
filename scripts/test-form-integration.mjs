/**
 * Integration test for grand-sud form API → local DB + CRM sync.
 * Usage: node scripts/test-form-integration.mjs
 * Requires .env.local with WEBSITE_DB_* and CRM_API_BASE_URL.
 */
import mysql from 'mysql2/promise';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '../.env.local');

if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}

const CRM_BASE = (process.env.CRM_API_BASE_URL || 'http://localhost:5030/api').replace(/\/$/, '');
const tests = [
  {
    name: 'contact-en',
    url: `${CRM_BASE}/website-leads/form/contact-en`,
    body: {
      'name-1-first-name': 'E2E',
      'name-1-last-name': 'ContactEN',
      'email-1': `e2e-contact-en-${Date.now()}@example.com`,
      'phone-1': '+33600001001',
      'textarea-1': 'Integration test message',
      'select-1': 'Toulouse-Labège',
      'consent-1': true,
    },
  },
  {
    name: 'brochure',
    url: `${CRM_BASE}/website-leads/form/brochure`,
    body: {
      'name-1-first-name': 'E2E',
      'name-1-last-name': 'Brochure',
      'email-1': `e2e-brochure-${Date.now()}@example.com`,
      'phone-1': '+33600001002',
      'select-1': 'BTS Tourisme',
      'consent-1': true,
    },
  },
  {
    name: 'complaint',
    url: `${CRM_BASE}/website-leads/form/complaint`,
    body: {
      'name-1-first-name': 'E2E',
      'name-1-last-name': 'Complaint',
      'email-1': `e2e-complaint-${Date.now()}@example.com`,
      'phone-1': '+33600001003',
      'select-1': 'Toulouse-Labège',
      user_type: 'a student',
      subject: 'E2E test',
      'textarea-1': 'Test complaint detail',
    },
  },
  {
    name: 'business-training',
    url: `${CRM_BASE}/website-leads/form/business-training`,
    body: {
      company: 'E2E Test Corp',
      siret: '12345678901234',
      'name-1-first-name': 'E2E',
      'name-1-last-name': 'BizContact',
      'email-1': `e2e-biz-${Date.now()}@example.com`,
      'phone-1': '+33600001004',
      role: 'Manager',
      'consent-1': true,
    },
  },
];

let passed = 0;
let failed = 0;

for (const t of tests) {
  try {
    const res = await fetch(t.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(t.body),
    });
    const data = await res.json();
    if (data.success && data.lead_ref) {
      console.log(`PASS ${t.name} → ${data.lead_ref}`);
      passed++;
    } else {
      console.log(`FAIL ${t.name}:`, data);
      failed++;
    }
  } catch (err) {
    console.log(`FAIL ${t.name}:`, err.message);
    failed++;
  }
}

if (process.env.WEBSITE_DB_HOST) {
  try {
    const conn = await mysql.createConnection({
      host: process.env.WEBSITE_DB_HOST,
      user: process.env.WEBSITE_DB_USER,
      password: process.env.WEBSITE_DB_PASSWORD || '',
      database: process.env.WEBSITE_DB_NAME || 'grand_sud_france_website',
      port: Number(process.env.WEBSITE_DB_PORT || 3306),
    });
    const [rows] = await conn.query('SELECT COUNT(*) AS cnt FROM form_submissions');
    console.log(`Local DB form_submissions count: ${rows[0].cnt}`);
    await conn.end();
  } catch (err) {
    console.log(`Local DB check skipped: ${err.message}`);
  }
}

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
