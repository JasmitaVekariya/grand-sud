import {
  extractContactFields,
  mapContactPayload,
} from '@/lib/form-payloads';
import { handleFormSubmission, parseJsonBody } from '@/lib/submit-form';

export async function POST(request: Request) {
  const body = await parseJsonBody(request);
  const lang = 'fr' as const;
  const payload = { ...body, lang };

  return handleFormSubmission({
    formType: 'contact',
    lang,
    crmEndpoint: '/website-leads/form/contact-fr',
    payload,
    crmPayload: mapContactPayload(payload),
    ...extractContactFields(payload),
  });
}
