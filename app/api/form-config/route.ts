import { NextResponse } from 'next/server';

const ALLOWED_FORMS = new Set(['contact', 'apply', 'candidater', 'brochure', 'complaint']);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const form = String(searchParams.get('form') || '').trim();
  const lang = String(searchParams.get('lang') || 'en').trim().toLowerCase();

  if (!ALLOWED_FORMS.has(form)) {
    return NextResponse.json({ message: 'Invalid form' }, { status: 400 });
  }
  if (!['en', 'fr'].includes(lang)) {
    return NextResponse.json({ message: 'Invalid lang' }, { status: 400 });
  }

  const base = (process.env.CRM_API_BASE_URL || 'http://localhost:5030/api').replace(/\/$/, '');
  const url = `${base}/website-forms/public/config?form=${encodeURIComponent(form)}&lang=${encodeURIComponent(lang)}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'public, max-age=60' },
    });
  } catch {
    return NextResponse.json({ form_key: form, lang, fields: {} }, { status: 502 });
  }
}
