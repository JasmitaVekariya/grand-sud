import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = String(searchParams.get('lang') || 'en').trim().toLowerCase();
  const category = String(searchParams.get('category') || '').trim();
  const upcoming = String(searchParams.get('upcoming') || '').trim();
  const from = String(searchParams.get('from') || '').trim();

  if (!['en', 'fr'].includes(lang)) {
    return NextResponse.json({ message: 'Invalid lang' }, { status: 400 });
  }

  const base = (process.env.CRM_API_BASE_URL || 'http://localhost:5030/api').replace(/\/$/, '');
  const qs = new URLSearchParams({ lang });
  if (category) qs.set('category', category);
  if (upcoming) qs.set('upcoming', upcoming);
  if (from) qs.set('from', from);
  const url = `${base}/website-events/public/events?${qs.toString()}`;

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
    return NextResponse.json({ lang, events: [] }, { status: 502 });
  }
}
