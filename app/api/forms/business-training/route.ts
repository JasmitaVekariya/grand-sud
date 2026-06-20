import {
  extractBusinessTrainingFields,
  mapBusinessTrainingPayload,
} from '@/lib/form-payloads';
import { handleFormSubmission, parseJsonBody } from '@/lib/submit-form';

export async function POST(request: Request) {
  const body = await parseJsonBody(request);
  const lang = body.lang === 'fr' ? 'fr' : 'en';
  const payload = { ...body, lang };

  return handleFormSubmission({
    formType: 'business_training',
    lang,
    crmEndpoint: '/website-leads/form/business-training',
    payload,
    crmPayload: mapBusinessTrainingPayload(payload),
    ...extractBusinessTrainingFields(payload),
  });
}
