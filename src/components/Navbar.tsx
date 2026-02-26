'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/produkte', label: 'Kollektion' },
  { href: '/uber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone-pale">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" aria-label="mint & elli – Startseite" onClick={() => setMenuOpen(false)}>
            <Logo size={44} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-mint border-b border-mint pb-0.5'
                    : 'text-stone hover:text-bark'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Cart button */}
            <Link
              href="/warenkorb"
              aria-label={`Warenkorb (${itemCount} Artikel)`}
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-pale transition-colors duration-200"
            >
              <CartIcon />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-mint text-white text-xs font-body font-bold leading-none">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-pale transition-colors duration-200"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-stone-pale px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-1" aria-label="Mobilnavigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-base font-body font-medium tracking-wide border-b border-stone-pale/60 last:border-0 transition-colors duration-200 ${
                  pathname === link.href ? 'text-mint' : 'text-bark hover:text-mint'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-bark">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-bark">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-bark">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
