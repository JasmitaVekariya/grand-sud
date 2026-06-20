import mysql, { Pool, ResultSetHeader } from 'mysql2/promise';

let pool: Pool | null = null;

export function getWebsiteDbPool(): Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.WEBSITE_DB_HOST || 'localhost',
      user: process.env.WEBSITE_DB_USER || 'root',
      password: process.env.WEBSITE_DB_PASSWORD || '',
      database: process.env.WEBSITE_DB_NAME || 'grand_sud_france_website',
      port: Number(process.env.WEBSITE_DB_PORT || 3306),
      waitForConnections: true,
      connectionLimit: 10,
    });
  }
  return pool;
}

export type FormType =
  | 'contact'
  | 'apply'
  | 'candidater'
  | 'brochure'
  | 'complaint'
  | 'business_training';

export type CrmSyncStatus = 'pending' | 'success' | 'failed' | 'duplicate';

export interface InsertSubmissionInput {
  formType: FormType;
  lang: 'en' | 'fr';
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  payload: Record<string, unknown>;
  crmEndpoint?: string | null;
}

export async function insertFormSubmission(input: InsertSubmissionInput): Promise<number> {
  const db = getWebsiteDbPool();
  const [result] = await db.query<ResultSetHeader>(
    `INSERT INTO form_submissions
      (form_type, lang, first_name, last_name, email, phone, payload, crm_endpoint, crm_sync_status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
    [
      input.formType,
      input.lang,
      input.firstName || null,
      input.lastName || null,
      input.email || null,
      input.phone || null,
      JSON.stringify(input.payload),
      input.crmEndpoint || null,
    ]
  );
  return result.insertId;
}

export async function updateSubmissionCrmSync(
  submissionId: number,
  status: CrmSyncStatus,
  leadRef: string | null,
  error: string | null
): Promise<void> {
  const db = getWebsiteDbPool();
  await db.query(
    `UPDATE form_submissions
     SET crm_sync_status = ?, crm_lead_ref = ?, crm_sync_error = ?, updated_at = CURRENT_TIMESTAMP
     WHERE submission_id = ?`,
    [status, leadRef, error, submissionId]
  );
}
