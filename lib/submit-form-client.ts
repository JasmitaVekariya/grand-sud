export interface FormSubmitResponse {
  success: boolean;
  submissionId?: number;
  leadRef?: string;
  duplicate?: boolean;
  crmSynced?: boolean;
  message?: string;
}

export async function submitFormToApi(
  endpoint: string,
  payload: Record<string, unknown>
): Promise<FormSubmitResponse> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as FormSubmitResponse;

  if (!response.ok) {
    throw new Error(data.message || 'Submission failed');
  }

  return data;
}
