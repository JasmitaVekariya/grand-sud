import {
  extractApplyFields,
  mapApplyPayload,
} from '@/lib/form-payloads';
import { handleFormSubmission, parseJsonBody } from '@/lib/submit-form';

export async function POST(request: Request) {
  const body = await parseJsonBody(request);
  const lang = 'en' as const;
  const payload = { ...body, lang };

  return handleFormSubmission({
    formType: 'apply',
    lang,
    crmEndpoint: '/website-leads/form/open-day',
    payload,
    crmPayload: mapApplyPayload(payload),
    ...extractApplyFields(payload),
  });
}
