import type { ProductCategory } from '@/lib/types';

interface Props {
  category: ProductCategory;
  color: string;
  accent: string;
  className?: string;
}

export default function ProductImagePlaceholder({ category, color, accent, className = '' }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {/* Subtle pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="160" cy="40" r="60" fill={accent} />
        <circle cx="40" cy="160" r="50" fill={accent} />
        <circle cx="100" cy="100" r="20" fill={accent} opacity="0.5" />
      </svg>

      {/* Category icon */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <CategoryIcon category={category} color={accent} />
      </div>
    </div>
  );
}

function CategoryIcon({ category, color }: { category: ProductCategory; color: string }) {
  const strokeProps = {
    fill: 'none',
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (category) {
    case 'oberteile':
      return (
        <svg width="52" height="52" viewBox="0 0 24 24" {...strokeProps}>
          <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
        </svg>
      );
    case 'hosen':
      return (
        <svg width="52" height="52" viewBox="0 0 24 24" {...strokeProps}>
          <path d="M3 3h18v5l-4 13H7L3 8V3z" />
          <line x1="12" y1="8" x2="12" y2="21" />
        </svg>
      );
    case 'westen':
      return (
        <svg width="52" height="52" viewBox="0 0 24 24" {...strokeProps}>
          <path d="M12 2L8 5H4v14a2 2 0 002 2h12a2 2 0 002-2V5h-4L12 2z" />
          <line x1="12" y1="5" x2="12" y2="21" />
          <circle cx="12" cy="10" r="0.5" fill={color} stroke={color} />
          <circle cx="12" cy="14" r="0.5" fill={color} stroke={color} />
          <circle cx="12" cy="18" r="0.5" fill={color} stroke={color} />
        </svg>
      );
    case 'sets':
      return (
        <svg width="52" height="52" viewBox="0 0 24 24" {...strokeProps}>
          <rect x="2" y="2" width="9" height="9" rx="1" />
          <rect x="13" y="2" width="9" height="9" rx="1" />
          <rect x="2" y="13" width="9" height="9" rx="1" />
          <rect x="13" y="13" width="9" height="9" rx="1" />
        </svg>
      );
    case 'accessoires':
    default:
      return (
        <svg width="52" height="52" viewBox="0 0 24 24" {...strokeProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      );
  }
}
