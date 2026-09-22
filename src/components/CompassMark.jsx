export default function CompassMark({ className = "w-8 h-8" }) {
  return (
    <span
      className={`${className} inline-flex items-center justify-center border border-current font-display text-sm`}
      aria-hidden="true"
    >
      N
    </span>
  );
}
