const STYLES = [
  {
    name: "Coastal Survey",
    price: "from $340",
    desc: "Shoreline, depth soundings, and named landmarks in the style of a 19th-century nautical chart.",
    pattern: "waves",
  },
  {
    name: "Trail Relief",
    price: "from $290",
    desc: "Contour lines and elevation shading for a single trail, range, or watershed you know well.",
    pattern: "contour",
  },
  {
    name: "City Block",
    price: "from $260",
    desc: "A neighbourhood at true scale, building footprints and street names hand-lettered.",
    pattern: "grid",
  },
  {
    name: "Celestial Chart",
    price: "from $310",
    desc: "The night sky as it appeared over a specific place, date, and hour of your choosing.",
    pattern: "stars",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="font-display text-4xl text-navy">Four ways to chart a place</h2>
        <p className="font-body text-navy/60 mt-4 max-w-lg leading-relaxed">
          Every commission starts from one of these four formats. Materials,
          scale, and framing are worked out with you after that.
        </p>

        <div className="mt-14 md:flex md:flex-wrap md:gap-px bg-navy/15">
          {STYLES.map((style) => (
            <article key={style.name} className="bg-cream md:w-[calc(50%-1px)] p-8">
              <StylePattern kind={style.pattern} />
              <h3 className="font-display text-xl text-navy mt-6">{style.name}</h3>
              <p className="font-body text-sm text-brass mt-1">{style.price}</p>
              <p className="font-body text-navy/60 mt-3 leading-relaxed">{style.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StylePattern({ kind }) {
  const stroke = "#1B2A4A";
  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto border border-navy/15" aria-hidden="true">
      <rect width="160" height="90" fill="#FAF7F0" />
      {kind === "waves" && (
        <>
          {[20, 35, 50, 65].map((y) => (
            <path
              key={y}
              d={`M0 ${y} Q 20 ${y - 8} 40 ${y} T 80 ${y} T 120 ${y} T 160 ${y}`}
              fill="none"
              stroke={stroke}
              strokeOpacity="0.5"
              strokeWidth="1"
            />
          ))}
        </>
      )}
      {kind === "contour" && (
        <>
          {[10, 18, 26, 34, 42].map((r, i) => (
            <ellipse
              key={r}
              cx="80"
              cy="70"
              rx={r * 2.2}
              ry={r}
              fill="none"
              stroke={stroke}
              strokeOpacity={0.75 - i * 0.12}
              strokeWidth="1"
            />
          ))}
        </>
      )}
      {kind === "grid" && (
        <>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`v${i}`} x1={i * 22} y1="0" x2={i * 22} y2="90" stroke={stroke} strokeOpacity="0.35" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={`h${i}`} x1="0" y1={i * 28} x2="160" y2={i * 28} stroke={stroke} strokeOpacity="0.35" />
          ))}
        </>
      )}
      {kind === "stars" && (
        <>
          <circle cx="80" cy="45" r="30" fill="none" stroke={stroke} strokeOpacity="0.3" />
          {[
            [30, 20], [55, 65], [95, 25], [120, 60], [70, 30], [110, 40], [45, 50], [130, 20],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 1.8 : 1} fill={stroke} fillOpacity="0.7" />
          ))}
        </>
      )}
    </svg>
  );
}
