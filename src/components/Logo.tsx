interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'full' | 'mark';
}

export default function Logo({ className = '', size = 60, variant = 'full' }: LogoProps) {
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
        aria-label="mint & elli Logo"
      >
        <circle cx="60" cy="60" r="57" fill="none" stroke="#7BAF8E" strokeWidth="2" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="#7BAF8E" strokeWidth="0.5" strokeDasharray="2 3" />
        {/* Leaf cluster top */}
        <g transform="translate(60, 24)" fill="#7BAF8E">
          <ellipse cx="0" cy="-6" rx="2.5" ry="7" />
          <ellipse cx="-5" cy="-3" rx="2" ry="5.5" transform="rotate(-35 -5 -3)" opacity="0.7" />
          <ellipse cx="5" cy="-3" rx="2" ry="5.5" transform="rotate(35 5 -3)" opacity="0.7" />
          <line x1="0" y1="2" x2="0" y2="-14" stroke="#7BAF8E" strokeWidth="0.8" />
        </g>
        {/* Text: mint */}
        <text
          x="60" y="56"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="20"
          fill="#7BAF8E"
          letterSpacing="2"
        >
          mint
        </text>
        {/* Ampersand */}
        <text
          x="60" y="70"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontStyle="italic"
          fontWeight="300"
          fontSize="12"
          fill="#7BAF8E"
        >
          &amp;
        </text>
        {/* Text: elli */}
        <text
          x="60" y="86"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="20"
          fill="#7BAF8E"
          letterSpacing="2"
        >
          elli
        </text>
        {/* Bottom ornament */}
        <g transform="translate(60, 96)" stroke="#7BAF8E" strokeWidth="0.8" fill="none">
          <line x1="-12" y1="0" x2="-4" y2="0" />
          <circle cx="0" cy="0" r="1.2" fill="#7BAF8E" stroke="none" />
          <line x1="4" y1="0" x2="12" y2="0" />
        </g>
      </svg>
    );
  }

  // Full horizontal lockup: mark + wordmark
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="57" fill="none" stroke="#7BAF8E" strokeWidth="2" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="#7BAF8E" strokeWidth="0.5" strokeDasharray="2 3" />
        <g transform="translate(60, 24)" fill="#7BAF8E">
          <ellipse cx="0" cy="-6" rx="2.5" ry="7" />
          <ellipse cx="-5" cy="-3" rx="2" ry="5.5" transform="rotate(-35 -5 -3)" opacity="0.7" />
          <ellipse cx="5" cy="-3" rx="2" ry="5.5" transform="rotate(35 5 -3)" opacity="0.7" />
          <line x1="0" y1="2" x2="0" y2="-14" stroke="#7BAF8E" strokeWidth="0.8" />
        </g>
        <text
          x="60" y="56"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="20"
          fill="#7BAF8E"
          letterSpacing="2"
        >
          mint
        </text>
        <text
          x="60" y="70"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontStyle="italic"
          fontWeight="300"
          fontSize="12"
          fill="#7BAF8E"
        >
          &amp;
        </text>
        <text
          x="60" y="86"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="20"
          fill="#7BAF8E"
          letterSpacing="2"
        >
          elli
        </text>
        <g transform="translate(60, 96)" stroke="#7BAF8E" strokeWidth="0.8" fill="none">
          <line x1="-12" y1="0" x2="-4" y2="0" />
          <circle cx="0" cy="0" r="1.2" fill="#7BAF8E" stroke="none" />
          <line x1="4" y1="0" x2="12" y2="0" />
        </g>
      </svg>
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: `${size * 0.38}px`,
            color: '#7BAF8E',
            letterSpacing: '0.08em',
          }}
        >
          mint &amp; elli
        </span>
        <span
          style={{
            fontFamily: "'Nunito', system-ui, sans-serif",
            fontWeight: 300,
            fontSize: `${size * 0.18}px`,
            color: '#8C7B72',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          handmade
        </span>
      </div>
    </div>
  );
}
