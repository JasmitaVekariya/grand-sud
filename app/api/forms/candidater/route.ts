import {
  extractCandidaterFields,
  mapCandidaterPayload,
} from '@/lib/form-payloads';
import { handleFormSubmission, parseJsonBody } from '@/lib/submit-form';

export async function POST(request: Request) {
  const body = await parseJsonBody(request);
  const lang = 'fr' as const;
  const payload = { ...body, lang };

  return handleFormSubmission({
    formType: 'candidater',
    lang,
    crmEndpoint: '/website-leads/form/candidater',
    payload,
    crmPayload: mapCandidaterPayload(payload),
    ...extractCandidaterFields(payload),
  });
}
