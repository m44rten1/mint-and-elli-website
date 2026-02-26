'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import type { CartItem } from '@/lib/types';
import { asset } from '@/lib/asset';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';

export default function WarenkorbPage() {
  const { items, removeItem, updateQuantity, clearCart, total, hydrated } = useCart();

  if (!hydrated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-mint border-t-transparent animate-spin" />
      </div>
    );
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">Deine Auswahl</span>
          <h1
            className="mt-2 text-4xl md:text-5xl text-bark"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
          >
            Warenkorb
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {items.map((item) => (
              <CartItemRow
                key={`${item.product.id}_${item.size ?? ''}`}
                item={item}
                onRemove={() => removeItem(item.product.id, item.size)}
                onUpdateQty={(qty) => updateQuantity(item.product.id, qty, item.size)}
              />
            ))}

            <button
              onClick={clearCart}
              className="self-start text-xs font-body text-stone hover:text-bark underline underline-offset-2 mt-2 cursor-pointer"
            >
              Warenkorb leeren
            </button>
          </div>

          {/* Order summary + form */}
          <div className="lg:col-span-1">
            <OrderSummary items={items} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Cart Item Row ──────────────────────────────────────────────── */

function CartItemRow({
  item,
  onRemove,
  onUpdateQty,
}: {
  item: CartItem;
  onRemove: () => void;
  onUpdateQty: (qty: number) => void;
}) {
  return (
    <div className="flex gap-4 bg-white rounded-2xl p-4 sm:p-5" style={{ boxShadow: '0 2px 20px -4px rgba(61,46,40,0.06)' }}>
      {/* Image */}
      {item.product.image ? (
        <img
          src={asset(item.product.image)}
          alt={item.product.name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl shrink-0 object-cover"
        />
      ) : (
        <ProductImagePlaceholder
          category={item.product.category}
          color={item.product.placeholderColor}
          accent={item.product.placeholderAccent}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl shrink-0"
        />
      )}

      {/* Info */}
      <div className="flex flex-col flex-1 gap-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-lg text-bark leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
          >
            {item.product.name}
          </h3>
          <button
            onClick={onRemove}
            aria-label="Artikel entfernen"
            className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-pale transition-colors cursor-pointer text-stone hover:text-bark"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-body text-stone">
          {item.size && <span>Größe: {item.size}</span>}
          {item.personalization && (
            <span className="text-mint">✏️ {item.personalization}</span>
          )}
        </div>

        <div className="flex items-center justify-between mt-2 gap-4">
          {/* Quantity */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQty(item.quantity - 1)}
              aria-label="Menge verringern"
              className="w-7 h-7 flex items-center justify-center rounded-full border border-stone-pale hover:border-mint hover:text-mint transition-colors cursor-pointer text-stone"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <span className="text-sm font-body font-semibold text-bark w-5 text-center">{item.quantity}</span>
            <button
              onClick={() => onUpdateQty(item.quantity + 1)}
              aria-label="Menge erhöhen"
              className="w-7 h-7 flex items-center justify-center rounded-full border border-stone-pale hover:border-mint hover:text-mint transition-colors cursor-pointer text-stone"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          {/* Price */}
          <span className="font-body font-semibold text-bark">
            {(item.product.priceMin * item.quantity).toFixed(2).replace('.', ',')} €
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Order Summary + Form ───────────────────────────────────────── */

interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

function OrderSummary({ items, total }: { items: CartItem[]; total: number }) {
  const [form, setForm] = useState<OrderFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildMailBody = () => {
    const itemLines = items.map((item) => {
      const size = item.size ? ` (Größe: ${item.size})` : '';
      const note = item.personalization ? ` [Personalisierung: ${item.personalization}]` : '';
      return `• ${item.quantity}× ${item.product.name}${size}${note} — ${(item.product.priceMin * item.quantity).toFixed(2)} €`;
    });

    return [
      'Neue Bestellung von mint & elli Website',
      '',
      '─── Bestellübersicht ───',
      ...itemLines,
      '',
      `Gesamtbetrag (ca.): ${total.toFixed(2).replace('.', ',')} €`,
      '(Endpreis wird nach Rücksprache bestätigt)',
      '',
      '─── Kundendaten ───',
      `Name: ${form.name}`,
      `E-Mail: ${form.email}`,
      form.phone ? `Telefon: ${form.phone}` : '',
      form.address ? `Adresse: ${form.address}` : '',
      form.message ? `Nachricht / Sonderwünsche: ${form.message}` : '',
    ]
      .filter((l) => l !== null)
      .join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Bestellung – mint & elli`);
    const body = encodeURIComponent(buildMailBody());
    window.location.href = `mailto:info@mint-und-elli.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const isValid = form.name.trim() && form.email.trim();

  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col gap-6 sticky top-28" style={{ boxShadow: '0 2px 20px -4px rgba(61,46,40,0.08)' }}>
      {/* Totals */}
      <div>
        <h2
          className="text-2xl text-bark mb-4"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
        >
          Bestellung
        </h2>
        <div className="flex flex-col gap-2 text-sm font-body">
          {items.map((item) => (
            <div key={`${item.product.id}_${item.size}`} className="flex justify-between text-stone">
              <span className="truncate max-w-[180px]">
                {item.quantity}× {item.product.name}
                {item.size && <span className="text-xs text-stone-light ml-1">({item.size})</span>}
              </span>
              <span className="shrink-0 ml-2">{(item.product.priceMin * item.quantity).toFixed(2).replace('.', ',')} €</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-4 mt-4 border-t border-stone-pale font-body font-semibold text-bark">
          <span>Gesamt (ca.)</span>
          <span>{total.toFixed(2).replace('.', ',')} €</span>
        </div>
        <p className="text-xs font-body text-stone mt-2 leading-relaxed">
          Endpreis wird nach Rücksprache bestätigt. Versandkosten werden separat berechnet.
        </p>
      </div>

      <hr className="border-stone-pale" />

      {/* Order form */}
      {submitted ? (
        <div className="flex flex-col items-center gap-3 py-4 text-center">
          <div className="w-12 h-12 rounded-full bg-mint-pale flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7BAF8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3
            className="text-xl text-bark"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
          >
            E-Mail geöffnet!
          </h3>
          <p className="text-sm font-body text-stone leading-relaxed">
            Deine Bestelldetails sind in deinem E-Mail-Programm vorausgefüllt. Bitte sende die E-Mail ab, um die Bestellung zu bestätigen.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h3
            className="text-lg text-bark"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
          >
            Deine Angaben
          </h3>

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
              placeholder="Dein vollständiger Name"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-pale bg-cream text-sm font-body text-bark placeholder-stone-light focus:outline-none focus:border-mint transition-colors"
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
              className="w-full px-4 py-2.5 rounded-xl border border-stone-pale bg-cream text-sm font-body text-bark placeholder-stone-light focus:outline-none focus:border-mint transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-xs font-body font-medium text-stone uppercase tracking-wider">
              Telefon <span className="text-stone-light normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+49 ..."
              className="w-full px-4 py-2.5 rounded-xl border border-stone-pale bg-cream text-sm font-body text-bark placeholder-stone-light focus:outline-none focus:border-mint transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-xs font-body font-medium text-stone uppercase tracking-wider">
              Sonderwünsche / Personalisierung <span className="text-stone-light normal-case tracking-normal">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="z. B. Wunschnamen, Farbe, Besonderes ..."
              className="w-full px-4 py-2.5 rounded-xl border border-stone-pale bg-cream text-sm font-body text-bark placeholder-stone-light focus:outline-none focus:border-mint transition-colors resize-none"
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
            Bestellung abschicken →
          </button>
          <p className="text-xs font-body text-stone text-center leading-relaxed">
            Dein E-Mail-Programm wird mit den Bestelldetails geöffnet. Kein Konto nötig.
          </p>
        </form>
      )}
    </div>
  );
}

/* ─── Empty Cart ─────────────────────────────────────────────────── */

function EmptyCart() {
  return (
    <div className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-stone-pale flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8C7B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <h1
            className="text-3xl text-bark"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
          >
            Dein Warenkorb ist leer
          </h1>
          <p className="text-stone font-body max-w-sm">
            Entdecke unsere handgemachten Einzelstücke und füge sie deinem Warenkorb hinzu.
          </p>
          <Link
            href="/produkte"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-mint text-white font-body font-semibold text-sm hover:bg-mint-dark transition-colors duration-200"
          >
            Zur Kollektion
          </Link>
        </div>
      </div>
    </div>
  );
}
