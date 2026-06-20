type Payload = Record<string, unknown>;

function str(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;
  const s = String(value).trim();
  return s || undefined;
}

function bool(value: unknown): boolean {
  return value === true || value === 'true' || value === 1 || value === '1';
}

export function mapContactPayload(data: Payload): Payload {
  return {
    'name-1-first-name': str(data.firstName),
    'name-1-last-name': str(data.surname),
    'email-1': str(data.email),
    'phone-1': str(data.phone),
    'textarea-1': str(data.message),
    'select-1': str(data.campus),
    'consent-1': bool(data.consent),
  };
}

export function mapApplyPayload(data: Payload): Payload {
  return {
    'name-1-first-name': str(data.firstName),
    'name-1-last-name': str(data.surname),
    'email-1': str(data.email),
    'phone-1': str(data.phone),
    'text-1': str(data.country),
    'select-1': str(data.diploma),
    'select-2': str(data.intake),
    'consent-1': bool(data.consent),
  };
}

export function mapCandidaterPayload(data: Payload): Payload {
  return {
    'name-1-first-name': str(data.firstName),
    'name-1-last-name': str(data.surname),
    'name-2': str(data.prenom),
    'email-1': str(data.email),
    'phone-1': str(data.phone),
    'select-2': str(data.formationSouhaitee),
    'select-3': str(data.niveauActuel),
    'radio-1': str(data.dateEvenement),
    'consent-1': bool(data.consent),
  };
}

export function mapBrochurePayload(data: Payload): Payload {
  return {
    'name-1-first-name': str(data.firstName),
    'name-1-last-name': str(data.surname),
    'email-1': str(data.email),
    'phone-1': str(data.phone),
    'text-1': str(data.country),
    'select-1': str(data.diploma),
    'consent-1': bool(data.consent),
    lang: str(data.lang),
  };
}

export function mapComplaintPayload(data: Payload): Payload {
  return {
    'name-1-first-name': str(data.firstName),
    'name-1-last-name': str(data.surname),
    'email-1': str(data.email),
    'phone-1': str(data.phone),
    'select-1': str(data.campus),
    user_type: str(data.userType),
    student_info: str(data.studentInfo),
    subject: str(data.subject),
    'textarea-1': str(data.detail),
    lang: str(data.lang),
  };
}

export function mapBusinessTrainingPayload(data: Payload): Payload {
  return {
    company: str(data.company),
    siret: str(data.siret),
    'name-1-first-name': str(data.firstName),
    'name-1-last-name': str(data.lastName),
    'email-1': str(data.email),
    'phone-1': str(data.mobile),
    role: str(data.role),
    'consent-1': bool(data.consent),
    lang: str(data.lang),
  };
}

export function extractContactFields(data: Payload) {
  return {
    firstName: str(data.firstName) || null,
    lastName: str(data.surname) || null,
    email: str(data.email) || null,
    phone: str(data.phone) || null,
  };
}

export function extractApplyFields(data: Payload) {
  return {
    firstName: str(data.firstName) || null,
    lastName: str(data.surname) || null,
    email: str(data.email) || null,
    phone: str(data.phone) || null,
  };
}

export function extractCandidaterFields(data: Payload) {
  return {
    firstName: str(data.firstName) || null,
    lastName: str(data.surname) || null,
    email: str(data.email) || null,
    phone: str(data.phone) || null,
  };
}

export function extractBrochureFields(data: Payload) {
  return {
    firstName: str(data.firstName) || null,
    lastName: str(data.surname) || null,
    email: str(data.email) || null,
    phone: str(data.phone) || null,
  };
}

export function extractComplaintFields(data: Payload) {
  return {
    firstName: str(data.firstName) || null,
    lastName: str(data.surname) || null,
    email: str(data.email) || null,
    phone: str(data.phone) || null,
  };
}

export function extractBusinessTrainingFields(data: Payload) {
  return {
    firstName: str(data.firstName) || null,
    lastName: str(data.lastName) || null,
    email: str(data.email) || null,
    phone: str(data.mobile) || null,
  };
}
