import Link from 'next/link';
import Logo from './Logo';

const footerLinks = [
  { label: 'Kollektion', href: '/produkte' },
  { label: 'Über uns', href: '/uber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Warenkorb', href: '/warenkorb' },
];

export default function Footer() {
  return (
    <footer className="bg-bark text-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-stone/30">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                width={44}
                height={44}
                aria-hidden="true"
              >
                <circle cx="60" cy="60" r="57" fill="none" stroke="#A8CDB8" strokeWidth="2" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#A8CDB8" strokeWidth="0.5" strokeDasharray="2 3" />
                <g transform="translate(60, 24)" fill="#A8CDB8">
                  <ellipse cx="0" cy="-6" rx="2.5" ry="7" />
                  <ellipse cx="-5" cy="-3" rx="2" ry="5.5" transform="rotate(-35 -5 -3)" opacity="0.7" />
                  <ellipse cx="5" cy="-3" rx="2" ry="5.5" transform="rotate(35 5 -3)" opacity="0.7" />
                  <line x1="0" y1="2" x2="0" y2="-14" stroke="#A8CDB8" strokeWidth="0.8" />
                </g>
                <text x="60" y="56" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="20" fill="#A8CDB8" letterSpacing="2">mint</text>
                <text x="60" y="70" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="300" fontSize="12" fill="#A8CDB8">&amp;</text>
                <text x="60" y="86" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="20" fill="#A8CDB8" letterSpacing="2">elli</text>
                <g transform="translate(60, 96)" stroke="#A8CDB8" strokeWidth="0.8" fill="none">
                  <line x1="-12" y1="0" x2="-4" y2="0" />
                  <circle cx="0" cy="0" r="1.2" fill="#A8CDB8" stroke="none" />
                  <line x1="4" y1="0" x2="12" y2="0" />
                </g>
              </svg>
              <div className="flex flex-col leading-none">
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500, fontSize: '18px', color: '#A8CDB8', letterSpacing: '0.08em' }}>
                  mint &amp; elli
                </span>
                <span style={{ fontFamily: "'Nunito', system-ui, sans-serif", fontWeight: 300, fontSize: '10px', color: '#8C7B72', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  handmade
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-light leading-relaxed font-body">
              Mit Liebe handgemachte Einzelstücke für kleine Schätze.<br />
              Größe 50–128 · Hilden
            </p>
            <a
              href="https://www.instagram.com/mint_und_elli/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-mint-light hover:text-mint transition-colors duration-200 font-body"
              aria-label="Instagram @mint_und_elli"
            >
              <InstagramIcon />
              @mint_und_elli
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-body font-semibold tracking-widest uppercase text-stone mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-light hover:text-cream-dark transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-body font-semibold tracking-widest uppercase text-stone mb-4">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-stone-light font-body">
              <li>
                <a
                  href="mailto:info@mint-und-elli.de"
                  className="hover:text-cream-dark transition-colors duration-200"
                >
                  info@mint-und-elli.de
                </a>
              </li>
              <li>Hilden, Deutschland</li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/mint_und_elli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-dark transition-colors duration-200"
                >
                  Instagram DM
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Oekotex100', 'GOTS Bio', 'Handmade'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-body font-medium px-2.5 py-1 rounded-full border border-stone/40 text-stone"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-stone font-body">
            © {new Date().getFullYear()} mint &amp; elli. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-stone font-body">
            Mit ♥ handgemacht in Hilden
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
