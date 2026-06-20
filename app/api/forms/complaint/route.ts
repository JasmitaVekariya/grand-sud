import {
  extractComplaintFields,
  mapComplaintPayload,
} from '@/lib/form-payloads';
import { handleFormSubmission, parseJsonBody } from '@/lib/submit-form';

export async function POST(request: Request) {
  const body = await parseJsonBody(request);
  const lang = body.lang === 'fr' ? 'fr' : 'en';
  const payload = { ...body, lang };

  return handleFormSubmission({
    formType: 'complaint',
    lang,
    crmEndpoint: '/website-leads/form/complaint',
    payload,
    crmPayload: mapComplaintPayload(payload),
    ...extractComplaintFields(payload),
  });
}
