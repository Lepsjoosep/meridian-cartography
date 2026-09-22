// A small hand-drawn-style compass rose used as the brand mark throughout the site.
export default function CompassMark({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="26" />
      <circle cx="32" cy="32" r="1.5" fill="currentColor" stroke="none" />
      <path d="M32 6 L36 30 L32 32 L28 30 Z" fill="currentColor" stroke="none" />
      <path d="M32 58 L28 34 L32 32 L36 34 Z" fill="currentColor" strokeOpacity="0.5" />
      <path d="M6 32 L30 28 L32 32 L30 36 Z" fill="currentColor" strokeOpacity="0.35" />
      <path d="M58 32 L34 36 L32 32 L34 28 Z" fill="currentColor" strokeOpacity="0.35" />
      <line x1="32" y1="14" x2="32" y2="18" />
      <line x1="32" y1="46" x2="32" y2="50" />
      <line x1="14" y1="32" x2="18" y2="32" />
      <line x1="46" y1="32" x2="50" y2="32" />
    </svg>
  );
}
