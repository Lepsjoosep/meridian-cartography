export default function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="md:flex md:items-center md:gap-14">
          {/* text column */}
          <div className="md:w-1/2">
            <p className="font-body text-sm text-brass tracking-wide mb-4">
              Est. 2011 · Drawn entirely by hand
            </p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-navy">
              Every place has a shape worth keeping.
            </h1>
            <p className="font-body text-lg text-navy/70 mt-6 max-w-md leading-relaxed">
              We chart coastlines, trail systems, and city blocks by hand, then
              print and finish each map to order. No two commissions leave
              the studio the same way twice.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#commission"
                className="bg-navy text-cream font-body text-sm px-6 py-3 hover:bg-navy-dark transition-colors"
              >
                Start a commission
              </a>
              <a
                href="#gallery"
                className="border border-navy/30 text-navy font-body text-sm px-6 py-3 hover:border-navy transition-colors"
              >
                See the gallery
              </a>
            </div>
          </div>

          {/* illustration column */}
          <div className="mt-14 md:mt-0 md:w-1/2">
            <MapIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapIllustration() {
  return (
    <svg
      viewBox="0 0 420 380"
      className="w-full h-auto text-navy"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="419" height="379" fill="#F2E9D8" stroke="#1B2A4A" strokeOpacity="0.25" />
      {/* lat/long grid */}
      {[1, 2, 3, 4, 5].map((i) => (
        <line key={`v${i}`} x1={i * 70} y1="0" x2={i * 70} y2="380" stroke="#1B2A4A" strokeOpacity="0.08" />
      ))}
      {[1, 2, 3, 4].map((i) => (
        <line key={`h${i}`} x1="0" y1={i * 76} x2="420" y2={i * 76} stroke="#1B2A4A" strokeOpacity="0.08" />
      ))}
      {/* coastline */}
      <path
        d="M0 260 C 60 230, 90 280, 140 250 C 190 220, 210 270, 260 240 C 310 210, 330 255, 380 235 L 420 250 L 420 380 L 0 380 Z"
        fill="#3E6259"
        fillOpacity="0.18"
        stroke="#3E6259"
        strokeOpacity="0.6"
      />
      {/* dotted route */}
      <path
        d="M60 90 C 120 70, 150 140, 210 120 C 270 100, 290 170, 350 150"
        fill="none"
        stroke="#B08D57"
        strokeWidth="2"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
      {/* route pins */}
      <circle cx="60" cy="90" r="4" fill="#B08D57" />
      <circle cx="210" cy="120" r="4" fill="#B08D57" />
      <circle cx="350" cy="150" r="4" fill="#B08D57" />
      {/* compass rose */}
      <g transform="translate(340,60)">
        <circle r="26" fill="#FAF7F0" stroke="#1B2A4A" strokeOpacity="0.4" />
        <path d="M0 -20 L4 0 L0 4 L-4 0 Z" fill="#1B2A4A" />
        <path d="M0 20 L-4 0 L0 -4 L4 0 Z" fill="#1B2A4A" fillOpacity="0.4" />
        <text y="-30" textAnchor="middle" fontSize="9" fill="#1B2A4A" fontFamily="Source Sans 3, sans-serif">N</text>
      </g>
      <text x="20" y="30" fontSize="11" fill="#1B2A4A" fillOpacity="0.55" fontFamily="Source Sans 3, sans-serif" letterSpacing="1">
        44°N, 68°W
      </text>
    </svg>
  );
}
