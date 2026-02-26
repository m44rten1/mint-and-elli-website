import Link from 'next/link';
import { featuredProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <FeaturedSection />
      <AboutTeaser />
      <InstagramCta />
    </>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-cream">
      {/* Large decorative botanical background */}
      <svg
        className="absolute right-0 top-0 h-full w-1/2 opacity-[0.07] pointer-events-none"
        viewBox="0 0 600 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMaxYMid slice"
      >
        <circle cx="480" cy="160" r="220" fill="#7BAF8E" />
        <circle cx="200" cy="600" r="180" fill="#E8B4B8" />
        <circle cx="540" cy="500" r="140" fill="#C49A6C" />
        <ellipse cx="320" cy="320" rx="60" ry="180" fill="#7BAF8E" opacity="0.5" transform="rotate(30 320 320)" />
        <ellipse cx="440" cy="280" rx="40" ry="140" fill="#E8B4B8" opacity="0.5" transform="rotate(-20 440 280)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-mint" />
              <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">
                Handmade in Hilden
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-bark leading-[1.05]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
            >
              Mit Liebe
              <br />
              <span className="text-mint">handgemachte</span>
              <br />
              Einzelstücke
            </h1>

            {/* Sub */}
            <p className="text-base sm:text-lg text-stone font-body leading-relaxed max-w-md">
              Kuschelige, individuelle Kinderkleidung für Größen 50 bis 128 — aus nachhaltigen Stoffen, mit Herz und Hand gefertigt.
            </p>

            {/* Fabric badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Oekotex100', color: '#mint' },
                { label: 'GOTS Bio', color: 'caramel' },
                { label: 'Personalisierbar', color: 'blush' },
                { label: 'Unikate', color: 'mint' },
              ].map((b) => (
                <span
                  key={b.label}
                  className="text-xs font-body font-medium px-3 py-1 rounded-full bg-white border border-stone-pale text-stone"
                >
                  {b.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/produkte"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-mint text-white font-body font-semibold text-sm hover:bg-mint-dark transition-colors duration-200 shadow-sm"
              >
                Zur Kollektion
                <ArrowRight />
              </Link>
              <Link
                href="/uber-uns"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-stone-pale text-bark font-body font-medium text-sm hover:bg-stone-pale/50 hover:border-stone transition-colors duration-200"
              >
                Mehr über uns
              </Link>
            </div>
          </div>

          {/* Visual: decorative product preview collage */}
          <div className="relative flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-xs font-body text-stone tracking-widest uppercase">Entdecken</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-stone">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

function HeroVisual() {
  const cards = [
    { color: '#A8CDB8', accent: '#5A9070', label: 'Pullover', rotate: '-6deg', top: '0%', left: '15%', zIndex: 1 },
    { color: '#E8B4B8', accent: '#C47A82', label: 'Weste', rotate: '4deg', top: '20%', left: '40%', zIndex: 2 },
    { color: '#DEBA94', accent: '#A07040', label: 'Hose', rotate: '-3deg', top: '45%', left: '5%', zIndex: 1 },
    { color: '#F5D8DA', accent: '#C47A82', label: 'Accessoire', rotate: '7deg', top: '55%', left: '50%', zIndex: 3 },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square">
      {/* Large circle background */}
      <div
        className="absolute inset-0 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #A8CDB8 0%, transparent 70%)' }}
      />

      {/* Floating product cards */}
      {cards.map((card) => (
        <div
          key={card.label}
          className="absolute w-32 h-36 rounded-2xl shadow-lg flex flex-col overflow-hidden"
          style={{
            backgroundColor: card.color,
            transform: `rotate(${card.rotate})`,
            top: card.top,
            left: card.left,
            zIndex: card.zIndex,
          }}
        >
          <div className="flex-1 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full opacity-30" style={{ backgroundColor: card.accent }} />
          </div>
          <div className="px-3 pb-3">
            <span
              className="text-xs font-body font-medium"
              style={{ color: card.accent }}
            >
              {card.label}
            </span>
          </div>
        </div>
      ))}

      {/* Center logo medallion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-full bg-cream shadow-xl flex items-center justify-center">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width={56} height={56}>
          <circle cx="60" cy="60" r="57" fill="none" stroke="#7BAF8E" strokeWidth="2" />
          <g transform="translate(60, 24)" fill="#7BAF8E">
            <ellipse cx="0" cy="-6" rx="2.5" ry="7" />
            <ellipse cx="-5" cy="-3" rx="2" ry="5.5" transform="rotate(-35 -5 -3)" opacity="0.7" />
            <ellipse cx="5" cy="-3" rx="2" ry="5.5" transform="rotate(35 5 -3)" opacity="0.7" />
          </g>
          <text x="60" y="56" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="18" fill="#7BAF8E" letterSpacing="2">mint</text>
          <text x="60" y="70" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="300" fontSize="11" fill="#7BAF8E">&amp;</text>
          <text x="60" y="85" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="18" fill="#7BAF8E" letterSpacing="2">elli</text>
        </svg>
      </div>
    </div>
  );
}

/* ─── Values ────────────────────────────────────────────────────── */

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7BAF8E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Mit Herz & Hand',
    text: 'Jedes Stück wird liebevoll von Hand gefertigt. Kein Artikel gleicht dem anderen — das macht es zum echten Unikat.',
    bg: 'bg-mint-pale',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C49A6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Nachhaltige Stoffe',
    text: 'Alle Materialien sind Oekotex100-zertifiziert, viele davon in Bio-Qualität (GOTS) — sicher für Babyhaut.',
    bg: 'bg-caramel-pale',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8B4B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: 'Personalisierbar',
    text: 'Viele Stücke können mit Wunschname oder Initialen bestickt werden — für ein ganz persönliches Geschenk.',
    bg: 'bg-blush-light',
  },
];

function ValuesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">Was uns ausmacht</span>
          <h2
            className="mt-3 text-4xl md:text-5xl text-bark"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
          >
            Stylisch. Bequem. mint &amp; elli.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((v) => (
            <div key={v.title} className={`${v.bg} rounded-3xl p-8 flex flex-col gap-4`}>
              <div className="w-14 h-14 rounded-2xl bg-white/70 flex items-center justify-center">
                {v.icon}
              </div>
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

/* ─── Featured Products ─────────────────────────────────────────── */

function FeaturedSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">Beliebt</span>
            <h2
              className="mt-2 text-4xl md:text-5xl text-bark"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
            >
              Unsere Favoriten
            </h2>
          </div>
          <Link
            href="/produkte"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-mint hover:text-mint-dark transition-colors duration-200 shrink-0"
          >
            Alle ansehen
            <ArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Teaser ──────────────────────────────────────────────── */

function AboutTeaser() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-mint-pale aspect-4/3 flex items-center justify-center">
              {/* Botanical decoration */}
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full opacity-30"
                aria-hidden="true"
              >
                <circle cx="350" cy="50" r="120" fill="#7BAF8E" />
                <circle cx="60" cy="240" r="90" fill="#E8B4B8" />
                <ellipse cx="200" cy="150" rx="30" ry="100" fill="#7BAF8E" opacity="0.5" transform="rotate(20 200 150)" />
                <ellipse cx="280" cy="200" rx="20" ry="70" fill="#C49A6C" opacity="0.4" transform="rotate(-15 280 200)" />
              </svg>
              {/* Center content */}
              <div className="relative z-10 flex flex-col items-center gap-4 text-center p-8">
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
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
                <blockquote
                  className="text-xl text-mint-dark max-w-xs"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
                >
                  &ldquo;Kuschelig, individuell &amp; einfach zum Verlieben!&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-0.5">
              <span
                className="text-3xl text-bark"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
              >
                50–128
              </span>
              <span className="text-xs font-body text-stone">verfügbare Größen</span>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">Unsere Geschichte</span>
            <h2
              className="text-4xl md:text-5xl text-bark leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
            >
              Handgemacht mit Herz, direkt aus Hilden
            </h2>
            <p className="text-base text-stone font-body leading-relaxed">
              mint &amp; elli entstand aus einer Leidenschaft fürs Nähen und dem Wunsch nach wirklich besonderen Kleidungsstücken für Kinder. Jedes Teil wird von Hand genäht, jede Naht mit Sorgfalt gesetzt.
            </p>
            <p className="text-base text-stone font-body leading-relaxed">
              Wir verwenden ausschließlich Oekotex100-zertifizierte Stoffe — viele davon in Bio-Qualität (GOTS). Denn Nachhaltigkeit und Babyhaut liegen uns besonders am Herzen.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-body text-stone">
                <span className="w-2 h-2 rounded-full bg-mint" />
                Handgemacht in Hilden
              </div>
              <div className="flex items-center gap-2 text-sm font-body text-stone">
                <span className="w-2 h-2 rounded-full bg-caramel" />
                Oekotex100 &amp; GOTS
              </div>
              <div className="flex items-center gap-2 text-sm font-body text-stone">
                <span className="w-2 h-2 rounded-full bg-blush" />
                Personalisierbar
              </div>
            </div>
            <Link
              href="/uber-uns"
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full border border-mint text-mint font-body font-medium text-sm hover:bg-mint hover:text-white transition-all duration-200"
            >
              Mehr über uns
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Instagram CTA ─────────────────────────────────────────────── */

function InstagramCta() {
  return (
    <section className="section-padding bg-bark">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          <div
            className="w-16 h-16 rounded-2xl bg-mint-pale flex items-center justify-center"
            aria-hidden="true"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7BAF8E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <h2
            className="text-4xl md:text-5xl text-cream"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
          >
            Folge uns auf Instagram
          </h2>
          <p className="text-stone-light font-body text-base max-w-md leading-relaxed">
            Neue Kreationen, Einblicke hinter die Kulissen und Kundenfotos — täglich auf Instagram.
          </p>
          <a
            href="https://www.instagram.com/mint_und_elli/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-mint text-white font-body font-semibold text-base hover:bg-mint-dark transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @mint_und_elli
          </a>
          <p className="text-stone/60 font-body text-sm">Hilden · #handmadeinhilden · #mintundelli</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Shared ─────────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
