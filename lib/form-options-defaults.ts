export type FormOptionsKey =
  | 'contact'
  | 'apply'
  | 'candidater'
  | 'brochure'
  | 'complaint';

export type FormLang = 'en' | 'fr';

const APPLY_DIPLOMA_EN = [
  'Bachelor Business & Tourism',
  'Bachelor IT & Tourism',
  'Bachelor Hospitality Management',
  'Mastère Business & Tourism',
  'Mastère IT & Tourism',
  'BTS Tourism',
  'BTS MCO',
  'Bachelor MICE Designer',
  'Bachelor Sustainable Tourism',
];

const BROCHURE_DIPLOMA_FR = [
  'Bachelor Business & Tourism',
  'Bachelor IT & Tourism',
  'Bachelor Hospitality Management',
  'Mastère Business & Tourism',
  'Mastère IT & Tourism',
  'BTS Tourisme',
  'BTS MCO',
  'Bachelor MICE Designer',
  'Bachelor Tourisme Durable',
];

const CANDIDATER_EVENEMENTS_FR = [
  'Portes ouvertes – 11 octobre 2025 – 10h-13h',
  "Soirée d'information – 15 octobre 2025 – 17h-20h30",
  'Portes ouvertes – 15 novembre 2025 – 10h-13h',
  "Soirée d'information – 19 novembre 2025 – 17h-20h30",
  'Portes ouvertes – 13 décembre 2025 – 10h-13h',
  "Soirée d'information – 17 décembre 2025 – 17h-20h30",
  'Portes ouvertes – 17 janvier 2026 – 10h-13h',
  "Soirée d'information – 21 janvier 2026 – 17h-20h30",
  'Portes ouvertes – 14 février 2026 – 10h-13h',
  "Soirée d'information – 18 février 2026 – 17h-20h30",
  'Portes ouvertes – 14 mars 2026 – 10h-13h',
  "Soirée d'information – 18 mars 2026 – 17h-20h30",
  'Portes ouvertes – 11 avril 2026 – 10h-13h',
  "Soirée d'information – 15 avril 2026 – 17h-20h30",
  "Soirée d'information – 20 mai 2026 – 17h-20h30",
  'Portes ouvertes – 30 mai 2026 – 10h-13h',
  'Portes ouvertes – 13 juin 2026 – 10h-13h',
  "Soirée d'information – 17 juin 2026 – 17h-20h30",
  'Portes ouvertes – 11 juillet 2026 – 10h-13h',
  "Soirée d'information – 15 juillet 2026 – 17h-20h30",
  'Portes ouvertes – 22 août 2026 – 10h-13h',
  "Soirée d'information – 26 août 2026 – 17h-20h30",
  'Portes ouvertes – 12 septembre 2026 – 10h-13h',
];

const DEFAULTS: Record<string, Record<string, string[]>> = {
  'contact:en': {
    campus: ['Toulouse-Labège', 'Other'],
  },
  'contact:fr': {
    campus: ['Toulouse-Labège', 'Autre'],
  },
  'apply:en': {
    diploma: APPLY_DIPLOMA_EN,
    intake: ['September/October', 'January', 'Spring Intake'],
  },
  'candidater:fr': {
    formationSouhaitee: [
      'BTS MCO 1ère année',
      'BTS Tourisme 1ère année',
      'BTS Tourisme 2ème année',
      'BTS MCO 2ème année',
      'BACHELOR RESPONSABLE DU DÉVELOPPEMENT TOURISTIQUE DURABLE ET DIGITAL',
      'BACHELOR HOSPITALITY MANAGEMENT',
      'BACHELOR MICE DESIGNER',
      'MASTERE MANAGER DE PROJETS ÉVÉNEMENTIELS ET TOURISTIQUES',
    ],
    niveauActuel: ['BAC', 'BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5', 'Autre'],
    dateEvenement: CANDIDATER_EVENEMENTS_FR,
  },
  'brochure:en': {
    diploma: APPLY_DIPLOMA_EN,
  },
  'brochure:fr': {
    diploma: BROCHURE_DIPLOMA_FR,
  },
  'complaint:en': {
    campus: ['Toulouse-Labège'],
    userType: ['a student', 'a company', 'an OPCO', 'a parent of a student'],
  },
  'complaint:fr': {
    campus: ['Toulouse-Labège'],
    userType: ['un étudiant', 'une entreprise', 'un OPCO', "un parent d'étudiant"],
  },
};

export function getDefaultFormOptions(formKey: FormOptionsKey, lang: FormLang): Record<string, string[]> {
  const key = `${formKey}:${lang}`;
  const row = DEFAULTS[key];
  if (!row) return {};
  return Object.fromEntries(
    Object.entries(row).map(([k, v]) => [k, [...v]])
  );
}

export function pickFieldOptions(
  fields: Record<string, string[]>,
  fieldKey: string,
  fallback: string[]
): string[] {
  const fromApi = fields[fieldKey];
  if (Array.isArray(fromApi) && fromApi.length > 0) return fromApi;
  return fallback;
}
