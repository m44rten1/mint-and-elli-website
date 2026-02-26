'use client';

import { useState } from 'react';
import { products, allCategories, categoryLabels } from '@/data/products';
import type { ProductCategory } from '@/lib/types';
import ProductCard from '@/components/ProductCard';

type FilterCategory = typeof allCategories[number];

export default function ProduktePage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('alle');

  const filtered =
    activeCategory === 'alle'
      ? products
      : products.filter((p) => p.category === (activeCategory as ProductCategory));

  return (
    <>
      {/* Page header */}
      <section className="bg-white border-b border-stone-pale">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-mint">
              Unsere Kollektion
            </span>
            <h1
              className="text-4xl md:text-5xl text-bark"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
            >
              Handgemachte Stücke
            </h1>
            <p className="text-base text-stone font-body leading-relaxed">
              Alle Artikel werden von Hand gefertigt. Größen 50–128 · Oekotex100 · GOTS Bio auf Anfrage.
            </p>
          </div>
        </div>
      </section>

      {/* Filter tabs + grid */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Produktkategorie filtern">
            {allCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-mint text-white border-mint shadow-sm'
                    : 'bg-white text-stone border-stone-pale hover:border-mint hover:text-mint'
                }`}
              >
                {categoryLabels[cat]}
                <span className="ml-1.5 text-xs opacity-70">
                  {cat === 'alle' ? products.length : products.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <span className="text-4xl" aria-hidden="true">🧵</span>
              <p className="text-stone font-body">Keine Artikel in dieser Kategorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Personalization CTA */}
      <section className="bg-mint-pale border-t border-mint/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2
                className="text-2xl text-bark"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
              >
                Personalisierung gewünscht? ✨
              </h2>
              <p className="text-sm text-stone font-body">
                Viele Artikel können mit Namen oder Initialen bestickt werden. Einfach im Warenkorb vermerken.
              </p>
            </div>
            <a
              href="/kontakt"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mint text-white font-body font-medium text-sm hover:bg-mint-dark transition-colors duration-200"
            >
              Anfrage stellen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
