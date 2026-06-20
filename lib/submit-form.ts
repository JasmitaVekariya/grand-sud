import { NextResponse } from 'next/server';
import { forwardToCrm } from './crm-client';
import {
  FormType,
  insertFormSubmission,
  updateSubmissionCrmSync,
} from './website-db';

export interface SubmitFormConfig {
  formType: FormType;
  lang: 'en' | 'fr';
  crmEndpoint: string;
  payload: Record<string, unknown>;
  crmPayload: Record<string, unknown>;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
}

export async function handleFormSubmission(config: SubmitFormConfig) {
  let submissionId: number;

  try {
    submissionId = await insertFormSubmission({
      formType: config.formType,
      lang: config.lang,
      firstName: config.firstName,
      lastName: config.lastName,
      email: config.email,
      phone: config.phone,
      payload: config.payload,
      crmEndpoint: config.crmEndpoint,
    });
  } catch (err) {
    console.error('[forms] local DB insert failed:', err);
    return NextResponse.json(
      { success: false, message: 'Unable to save your submission. Please try again.' },
      { status: 500 }
    );
  }

  const crmResult = await forwardToCrm(config.crmEndpoint, config.crmPayload);

  if (crmResult.success) {
    const syncStatus = crmResult.duplicate ? 'duplicate' : 'success';
    await updateSubmissionCrmSync(submissionId, syncStatus, crmResult.leadRef || null, null);

    return NextResponse.json({
      success: true,
      submissionId,
      leadRef: crmResult.leadRef,
      duplicate: crmResult.duplicate || false,
      crmSynced: true,
    });
  }

  await updateSubmissionCrmSync(
    submissionId,
    'failed',
    null,
    crmResult.error || 'CRM sync failed'
  );

  return NextResponse.json({
    success: true,
    submissionId,
    crmSynced: false,
    message: 'Your submission was received. Our team will follow up shortly.',
  });
}

export async function parseJsonBody(request: Request): Promise<Record<string, unknown>> {
  try {
    const body = await request.json();
    if (body && typeof body === 'object' && !Array.isArray(body)) {
      return body as Record<string, unknown>;
    }
    return {};
  } catch {
    return {};
  }
}
