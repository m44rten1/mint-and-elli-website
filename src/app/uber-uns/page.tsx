import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Erfahre mehr über mint & elli – handgemachte Kinderkleidung aus Hilden. Unsere Geschichte, unsere Werte und unsere Stoffe.',
};

export default function UberUnsPage() {
  return (
    <>
      <StorySection />
      <ValuesSection />
      <FabricSection />
      <CtaSection />
    </>
  );
}

/* ─── Story ─────────────────────────────────────────────────────── */

function StorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-mint-pale aspect-square flex items-center justify-center">
              {/* Decorative circles */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
                <circle cx="350" cy="80" r="150" fill="#7BAF8E" />
                <circle cx="60" cy="320" r="120" fill="#E8B4B8" />
                <circle cx="200" cy="200" r="60" fill="#C49A6C" opacity="0.6" />
              </svg>
              <div className="relative z-10 flex flex-col items-center gap-8 p-10 text-center">
                {/* Big logo */}
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width={100} height={100}>
                  <circle cx="60" cy="60" r="57" fill="none" stroke="#7BAF8E" strokeWidth="2" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#7BAF8E" strokeWidth="0.5" strokeDasharray="2 3" />
                  <g transform="translate(60, 24)" fill="#7BAF8E">
                    <ellipse cx="0" cy="-6" rx="2.5" ry="7" />
                    <ellipse cx="-5" cy="-3" rx="2" ry="5.5" transform="rotate(-35 -5 -3)" opacity="0.7" />
                    <ellipse cx="5" cy="-3" rx="2" ry="5.5" transform="rotate(35 5 -3)" opacity="0.7" />
                    <line x1="0" y1="2" x2="0" y2="-14" stroke="#7BAF8E" strokeWidth="0.8" />
                  </g>
                  <text x="60" y="56" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="20" fill="#7BAF8E" letterSpacing="2">mint</text>
                  <text x="60" y="70" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="300" fontSize="12" fill="#7BAF8E">&amp;</text>
                  <text x="60" y="86" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="20" fill="#7BAF8E" letterSpacing="2">elli</text>
                  <g transform="translate(60, 96)" stroke="#7BAF8E" strokeWidth="0.8" fill="none">
                    <line x1="-12" y1="0" x2="-4" y2="0" />
                    <circle cx="0" cy="0" r="1.2" fill="#7BAF8E" stroke="none" />
                    <line x1="4" y1="0" x2="12" y2="0" />
                  </g>
                </svg>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-2xl text-mint-dark"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 600 }}
                  >
                    mint &amp; elli
                  </span>
                  <span className="text-xs font-body text-stone tracking-widest uppercase">Handmade in Hilden</span>
                </div>
              </div>
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-5 -right-3 md:-right-6 bg-bark text-cream rounded-2xl p-5 max-w-[220px] shadow-xl">
              <p
                className="text-base leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}
              >
                &ldquo;Mit Liebe gemacht — für kleine Schätze.&rdquo;
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">Unsere Geschichte</span>
            <h1
              className="text-4xl md:text-5xl text-bark leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
            >
              Handgemacht mit Herz, direkt aus Hilden
            </h1>
            <p className="text-base text-stone font-body leading-relaxed">
              mint &amp; elli entstand aus einer tiefen Leidenschaft fürs Nähen und dem Wunsch nach wirklich besonderen Kleidungsstücken für Kinder. Was als kleines Hobby begann, wurde schnell zu einer Mission: für jedes Kind ein echtes Unikat zu schaffen.
            </p>
            <p className="text-base text-stone font-body leading-relaxed">
              Jedes Stück wird von Hand genäht, jede Naht mit Sorgfalt gesetzt. Wir arbeiten ausschließlich mit geprüften, schadstofffreien Materialien — weil nichts wichtiger ist als das Wohlbefinden deines Kindes.
            </p>
            <p className="text-base text-stone font-body leading-relaxed">
              Du findest uns regelmäßig auf Kreativmärkten in und um Hilden, wo wir unsere Stücke persönlich vorstellen — und die strahlenden Kinderaugen sehen. Dieses Leuchten ist unser größter Antrieb.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Values ─────────────────────────────────────────────────────── */

const coreValues = [
  {
    number: '01',
    title: 'Jedes Stück ist einzigartig',
    text: 'Kein Artikel gleicht dem anderen. Durch die Handarbeit entstehen echte Einzelstücke, die deinem Kind etwas ganz Besonderes geben.',
    color: 'bg-mint-pale',
    accent: '#7BAF8E',
  },
  {
    number: '02',
    title: 'Qualität, die man spürt',
    text: 'Wir verwenden nur sorgfältig ausgewählte Stoffe. Jede Naht, jede Stickerei wird mit höchster Sorgfalt ausgeführt.',
    color: 'bg-caramel-pale',
    accent: '#C49A6C',
  },
  {
    number: '03',
    title: 'Nachhaltig & sicher',
    text: 'Alle Materialien sind Oekotex100-zertifiziert. Viele Stoffe tragen das GOTS-Bio-Siegel — sicher für empfindliche Babyhaut.',
    color: 'bg-blush-light',
    accent: '#C47A82',
  },
  {
    number: '04',
    title: 'Personalisierung inklusive',
    text: 'Viele Stücke können auf Wunsch mit Namen oder Initialen bestickt werden — für das perfekte Geschenk.',
    color: 'bg-stone-pale',
    accent: '#8C7B72',
  },
];

function ValuesSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">Wofür wir stehen</span>
          <h2
            className="mt-3 text-4xl md:text-5xl text-bark"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
          >
            Unsere Werte
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {coreValues.map((v) => (
            <div key={v.number} className={`${v.color} rounded-3xl p-8 flex flex-col gap-3`}>
              <span className="text-xs font-body font-semibold tracking-widest uppercase" style={{ color: v.accent }}>
                {v.number}
              </span>
              <h3
                className="text-2xl text-bark"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
              >
                {v.title}
              </h3>
              <p className="text-sm text-stone font-body leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Fabric Section ─────────────────────────────────────────────── */

const fabrics = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7BAF8E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Oekotex Standard 100',
    text: 'Alle unsere Stoffe sind nach Oekotex Standard 100 zertifiziert. Das bedeutet: Keine Schadstoffe, keine Allergene — sicher für dein Kind.',
    badge: 'Zertifiziert',
    badgeColor: 'text-mint bg-mint-pale',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5A9070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'GOTS Bio-Qualität',
    text: 'Viele unserer Stoffe tragen das GOTS-Siegel (Global Organic Textile Standard) — biologisch angebaut, nachhaltig verarbeitet.',
    badge: 'Bio',
    badgeColor: 'text-mint-dark bg-mint-pale',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C49A6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Weich & hautfreundlich',
    text: 'Wir wählen Stoffe, die auf zarter Babyhaut angenehm sind: Jersey, Sweat, Bio-Baumwolle und hochwertige Wollmischungen.',
    badge: 'Hautfreundlich',
    badgeColor: 'text-caramel bg-caramel-pale',
  },
];

function FabricSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-4 mb-14 max-w-2xl">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">Materialien</span>
          <h2
            className="text-4xl md:text-5xl text-bark"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
          >
            Unsere Stoffe
          </h2>
          <p className="text-base text-stone font-body leading-relaxed">
            Die Qualität der Materialien ist uns genauso wichtig wie die Qualität der Verarbeitung. Wir kaufen bewusst ein und wählen nur Stoffe, denen wir vertrauen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fabrics.map((f) => (
            <div key={f.title} className="flex flex-col gap-4 p-8 rounded-3xl border border-stone-pale hover:border-mint-light transition-colors duration-300">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center">
                  {f.icon}
                </div>
                <span className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full ${f.badgeColor}`}>
                  {f.badge}
                </span>
              </div>
              <h3
                className="text-xl text-bark"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-stone font-body leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function CtaSection() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col items-center gap-6">
        <h2
          className="text-3xl md:text-4xl text-bark"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
        >
          Neugierig auf unsere Kollektion?
        </h2>
        <p className="text-base text-stone font-body max-w-md leading-relaxed">
          Entdecke handgemachte Einzelstücke für Kinder von Größe 50–128. Jedes Teil ein Unikat, jede Naht mit Liebe gesetzt.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/produkte"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-mint text-white font-body font-semibold text-sm hover:bg-mint-dark transition-colors duration-200"
          >
            Zur Kollektion
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-stone-pale text-bark font-body font-medium text-sm hover:bg-white hover:border-stone transition-colors duration-200"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
