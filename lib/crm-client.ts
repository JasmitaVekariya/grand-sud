export interface CrmSubmitResult {
  success: boolean;
  leadRef?: string;
  duplicate?: boolean;
  error?: string;
}

function getCrmBaseUrl(): string {
  const base = process.env.CRM_API_BASE_URL || 'http://localhost:5000/api';
  return base.replace(/\/$/, '');
}

export async function forwardToCrm(
  endpoint: string,
  payload: Record<string, unknown>
): Promise<CrmSubmitResult> {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${getCrmBaseUrl()}${path}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    let body: Record<string, unknown> = {};
    try {
      body = (await response.json()) as Record<string, unknown>;
    } catch {
      body = {};
    }

    if (!response.ok) {
      const message =
        typeof body.message === 'string'
          ? body.message
          : `CRM request failed (${response.status})`;
      return { success: false, error: message };
    }

    const leadRef = typeof body.lead_ref === 'string' ? body.lead_ref : undefined;
    const duplicate = Boolean(body.duplicate);

    return {
      success: Boolean(body.success),
      leadRef,
      duplicate,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'CRM request failed';
    return { success: false, error: message };
  }
}
