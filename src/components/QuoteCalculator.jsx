import { useMemo, useState } from "react";

const FORMATS = [
  { id: "coastal", label: "Coastal Survey", base: 340 },
  { id: "trail", label: "Trail Relief", base: 290 },
  { id: "city", label: "City Block", base: 260 },
  { id: "celestial", label: "Celestial Chart", base: 310 },
];

const SIZES = [
  { id: "small", label: '12" × 16"', multiplier: 1 },
  { id: "medium", label: '18" × 24"', multiplier: 1.6 },
  { id: "large", label: '24" × 36"', multiplier: 2.4 },
];

const FINISHES = [
  { id: "print", label: "Rolled print", addOn: 0 },
  { id: "framed", label: "Framed, oak", addOn: 180 },
  { id: "mounted", label: "Mounted on birch panel", addOn: 140 },
];

const currency = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function QuoteCalculator() {
  const [format, setFormat] = useState(FORMATS[0].id);
  const [size, setSize] = useState(SIZES[0].id);
  const [finish, setFinish] = useState(FINISHES[0].id);
  const [engraving, setEngraving] = useState(false);

  const total = useMemo(() => {
    const f = FORMATS.find((x) => x.id === format);
    const s = SIZES.find((x) => x.id === size);
    const fin = FINISHES.find((x) => x.id === finish);
    let price = f.base * s.multiplier + fin.addOn;
    if (engraving) price += 45;
    return Math.round(price / 5) * 5;
  }, [format, size, finish, engraving]);

  const summary = useMemo(() => {
    const f = FORMATS.find((x) => x.id === format).label;
    const s = SIZES.find((x) => x.id === size).label;
    const fin = FINISHES.find((x) => x.id === finish).label;
    return `${f}, ${s}, ${fin}${engraving ? ", with brass coordinate plate" : ""}`;
  }, [format, size, finish, engraving]);

  return (
    <section id="commission" className="bg-parchment">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="font-display text-4xl text-navy">Build an estimate</h2>
        <p className="font-body text-navy/60 mt-4 max-w-lg leading-relaxed">
          This gives you a working number to start from — every commission is
          still quoted properly once we know the place and the detail it needs.
        </p>

        <div className="mt-12 md:flex md:gap-16">
          {/* choices */}
          <div className="md:w-3/5 space-y-10">
            <OptionGroup
              label="Format"
              options={FORMATS}
              selected={format}
              onSelect={setFormat}
            />
            <OptionGroup label="Size" options={SIZES} selected={size} onSelect={setSize} />
            <OptionGroup
              label="Finish"
              options={FINISHES}
              selected={finish}
              onSelect={setFinish}
            />

            <div>
              <p className="font-body text-sm text-navy/50 mb-3">Extras</p>
              <label className="flex items-center gap-3 cursor-pointer w-fit">
                <input
                  type="checkbox"
                  checked={engraving}
                  onChange={(e) => setEngraving(e.target.checked)}
                  className="w-4 h-4 accent-brass"
                />
                <span className="font-body text-navy">
                  Brass coordinate plate&nbsp;
                  <span className="text-navy/50">(+{currency(45)})</span>
                </span>
              </label>
            </div>
          </div>

          {/* estimate panel */}
          <div className="mt-12 md:mt-0 md:w-2/5">
            <div className="border border-navy/20 p-8 bg-cream">
              <p className="font-body text-sm text-navy/50">Estimated total</p>
              <p className="font-display text-5xl text-navy mt-2">{currency(total)}</p>
              <p className="font-body text-sm text-navy/60 mt-4 leading-relaxed">{summary}</p>
              <a
                href="#contact"
                className="mt-8 block text-center bg-navy text-cream font-body text-sm px-6 py-3 hover:bg-navy-dark transition-colors"
              >
                Request this commission
              </a>
              <p className="font-body text-xs text-navy/40 mt-4">
                Estimate only. Final quote follows a short consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OptionGroup({ label, options, selected, onSelect }) {
  return (
    <div>
      <p className="font-body text-sm text-navy/50 mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt.id === selected;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelect(opt.id)}
              aria-pressed={active}
              className={`font-body text-sm px-4 py-2 border transition-colors ${
                active
                  ? "bg-navy text-cream border-navy"
                  : "bg-transparent text-navy border-navy/25 hover:border-navy"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
