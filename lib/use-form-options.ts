'use client';

import { useEffect, useState } from 'react';
import {
  FormLang,
  FormOptionsKey,
  getDefaultFormOptions,
} from './form-options-defaults';

export function useFormOptions(formKey: FormOptionsKey, lang: FormLang) {
  const [fields, setFields] = useState<Record<string, string[]>>(() =>
    getDefaultFormOptions(formKey, lang)
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const defaults = getDefaultFormOptions(formKey, lang);

    (async () => {
      try {
        const qs = new URLSearchParams({ form: formKey, lang });
        const res = await fetch(`/api/form-config?${qs.toString()}`);
        if (!res.ok) throw new Error('fetch failed');
        const data = (await res.json()) as { fields?: Record<string, string[]> };
        if (!cancelled && data.fields && Object.keys(data.fields).length > 0) {
          setFields({ ...defaults, ...data.fields });
        }
      } catch {
        if (!cancelled) setFields(defaults);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [formKey, lang]);

  return { fields, loaded };
}
