'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/types';
import { asset } from '@/lib/asset';
import ProductImagePlaceholder from './ProductImagePlaceholder';

interface Props {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: Props) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes.length === 1 ? product.sizes[0] : undefined
  );
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const needsSize = product.sizes.length > 1;
  const canAdd = !needsSize || !!selectedSize;

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_32px_-4px_rgba(61,46,40,0.14)]" style={{ boxShadow: '0 2px 20px -4px rgba(61,46,40,0.08)' }}>
      {/* Image area */}
      <Link href={`/produkte`} className="block overflow-hidden">
        {product.image ? (
          <div className={`relative w-full overflow-hidden transition-transform duration-500 group-hover:scale-105 ${compact ? 'h-44' : 'h-56'}`}>
            <img
              src={asset(product.image)}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <ProductImagePlaceholder
            category={product.category}
            color={product.placeholderColor}
            accent={product.placeholderAccent}
            className={`w-full transition-transform duration-500 group-hover:scale-105 ${compact ? 'h-44' : 'h-56'}`}
          />
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Badges */}
        <div className="flex gap-2 flex-wrap mb-2">
          {product.badge && (
            <span className="text-xs font-body font-semibold px-2.5 py-0.5 rounded-full bg-caramel-pale text-caramel">
              {product.badge}
            </span>
          )}
          {product.personalizable && (
            <span className="text-xs font-body font-medium px-2.5 py-0.5 rounded-full bg-mint-pale text-mint-dark">
              Personalisierbar ✨
            </span>
          )}
        </div>

        <h3
          className="font-heading text-xl font-medium text-bark mb-1 leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic' }}
        >
          {product.name}
        </h3>

        {!compact && (
          <p className="text-sm text-stone font-body leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-3">
          {/* Price */}
          <p className="font-body font-semibold text-bark text-base">
            {product.priceMin === product.priceMax
              ? `${product.priceMin} €`
              : `ab ${product.priceMin} €`}
          </p>

          {/* Size selector */}
          {needsSize && !compact && (
            <div>
              <label className="text-xs font-body font-medium text-stone uppercase tracking-wider mb-1.5 block">
                Größe
              </label>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`text-xs font-body px-2.5 py-1 rounded-lg border transition-all duration-150 cursor-pointer ${
                      selectedSize === size
                        ? 'border-mint bg-mint text-white font-medium'
                        : 'border-stone-pale text-stone hover:border-mint hover:text-mint'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            disabled={!canAdd}
            className={`w-full py-2.5 px-4 rounded-full text-sm font-body font-semibold transition-all duration-200 cursor-pointer ${
              added
                ? 'bg-mint-dark text-white'
                : canAdd
                ? 'bg-mint text-white hover:bg-mint-dark active:scale-95'
                : 'bg-stone-pale text-stone cursor-not-allowed'
            }`}
          >
            {added ? '✓ Hinzugefügt' : needsSize && !selectedSize ? 'Größe wählen' : 'In den Warenkorb'}
          </button>
        </div>
      </div>
    </article>
  );
}
