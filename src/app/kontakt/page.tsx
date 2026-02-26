'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KontaktPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage von ${form.name} – mint & elli`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\n\nNachricht:\n${form.message}`
    );
    window.location.href = `mailto:info@mint-und-elli.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-stone-pale">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">Wir freuen uns von dir zu hören</span>
          <h1
            className="mt-2 text-4xl md:text-5xl text-bark"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
          >
            Kontakt
          </h1>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center gap-5 py-12 text-center bg-white rounded-3xl p-8" style={{ boxShadow: '0 2px 20px -4px rgba(61,46,40,0.08)' }}>
                  <div className="w-16 h-16 rounded-full bg-mint-pale flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7BAF8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2
                    className="text-2xl text-bark"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                  >
                    E-Mail geöffnet!
                  </h2>
                  <p className="text-stone font-body leading-relaxed max-w-sm">
                    Deine Nachricht wurde in dein E-Mail-Programm übertragen. Bitte sende die E-Mail ab, um uns zu kontaktieren.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-body text-mint hover:text-mint-dark underline underline-offset-2 cursor-pointer"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 flex flex-col gap-5"
                  style={{ boxShadow: '0 2px 20px -4px rgba(61,46,40,0.08)' }}
                >
                  <h2
                    className="text-2xl text-bark"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                  >
                    Nachricht schreiben
                  </h2>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs font-body font-medium text-stone uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dein Name"
                      className="w-full px-4 py-3 rounded-xl border border-stone-pale bg-cream text-sm font-body text-bark placeholder-stone-light focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs font-body font-medium text-stone uppercase tracking-wider">
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="deine@email.de"
                      className="w-full px-4 py-3 rounded-xl border border-stone-pale bg-cream text-sm font-body text-bark placeholder-stone-light focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-xs font-body font-medium text-stone uppercase tracking-wider">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Deine Frage oder Anfrage ..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-pale bg-cream text-sm font-body text-bark placeholder-stone-light focus:outline-none focus:border-mint transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`w-full py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-200 cursor-pointer ${
                      isValid
                        ? 'bg-mint text-white hover:bg-mint-dark active:scale-95'
                        : 'bg-stone-pale text-stone cursor-not-allowed'
                    }`}
                  >
                    Nachricht senden →
                  </button>
                  <p className="text-xs font-body text-stone text-center">
                    Dein E-Mail-Programm wird geöffnet — kein Formular-Backend nötig.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2
                  className="text-2xl text-bark mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                >
                  So erreichst du uns
                </h2>

                <div className="flex flex-col gap-4">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl" style={{ boxShadow: '0 2px 12px -2px rgba(61,46,40,0.06)' }}>
                    <div className="w-10 h-10 rounded-xl bg-mint-pale flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7BAF8E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-body font-semibold uppercase tracking-wider text-stone mb-1">E-Mail</p>
                      <a
                        href="mailto:info@mint-und-elli.de"
                        className="text-sm font-body text-bark hover:text-mint transition-colors"
                      >
                        info@mint-und-elli.de
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl" style={{ boxShadow: '0 2px 12px -2px rgba(61,46,40,0.06)' }}>
                    <div className="w-10 h-10 rounded-xl bg-blush-light flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C47A82" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-body font-semibold uppercase tracking-wider text-stone mb-1">Instagram</p>
                      <a
                        href="https://www.instagram.com/mint_und_elli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-body text-bark hover:text-mint transition-colors"
                      >
                        @mint_und_elli
                      </a>
                      <p className="text-xs font-body text-stone mt-0.5">Direktnachricht per Instagram DM</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl" style={{ boxShadow: '0 2px 12px -2px rgba(61,46,40,0.06)' }}>
                    <div className="w-10 h-10 rounded-xl bg-caramel-pale flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C49A6C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-body font-semibold uppercase tracking-wider text-stone mb-1">Standort</p>
                      <p className="text-sm font-body text-bark">Hilden, Deutschland</p>
                      <p className="text-xs font-body text-stone mt-0.5">#handmadeinhilden</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ / quick info */}
              <div className="bg-mint-pale rounded-3xl p-6 flex flex-col gap-4">
                <h3
                  className="text-xl text-bark"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                >
                  Häufige Fragen
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      q: 'Wie lange dauert die Lieferung?',
                      a: 'Da jedes Stück handgemacht ist, beträgt die Lieferzeit in der Regel 1–2 Wochen. Bei personalisierten Artikeln etwas länger.',
                    },
                    {
                      q: 'Kann ich Stücke personalisieren lassen?',
                      a: 'Ja! Viele Artikel können mit Namen oder Initialen bestickt werden. Vermerke deinen Wunsch bei der Bestellung.',
                    },
                    {
                      q: 'Sind die Materialien sicher für Babys?',
                      a: 'Alle Stoffe sind Oekotex100-zertifiziert. Viele tragen zusätzlich das GOTS-Bio-Siegel.',
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="border-b border-mint/10 pb-4 last:border-0 last:pb-0">
                      <p className="text-sm font-body font-semibold text-bark mb-1">{faq.q}</p>
                      <p className="text-sm font-body text-stone leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
