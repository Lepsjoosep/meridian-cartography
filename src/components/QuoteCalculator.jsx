import { useState } from "react";

export default function QuoteCalculator() {
  const [format, setFormat] = useState("coastal");
  const [size, setSize] = useState("small");
  const [finish, setFinish] = useState("rolled");
  const [plate, setPlate] = useState(false);

  let price = 340;
  let formatName = "Coastal Survey";

  if (format === "trail") {
    price = 290;
    formatName = "Trail Relief";
  }

  if (format === "city") {
    price = 260;
    formatName = "City Block";
  }

  if (format === "celestial") {
    price = 310;
    formatName = "Celestial Chart";
  }

  if (size === "medium") price = price * 1.6;
  if (size === "large") price = price * 2.4;
  if (finish === "framed") price = price + 180;
  if (finish === "mounted") price = price + 140;
  if (plate) price = price + 45;

  return (
    <section id="commission" className="bg-parchment">
      <div className="mx-auto max-w-5xl p-6 md:p-10">
        <h2 className="font-display text-4xl text-navy">Build an estimate</h2>
        <p className="font-body text-navy/60 mt-4 max-w-lg leading-relaxed">
          Choose the option that best matches your idea. Every commission is
          still quoted properly after a short consultation.
        </p>

        <div className="mt-12 md:flex md:gap-16">
          <div className="space-y-10 md:w-3/5">
            <label className="block font-body text-navy">
              Format
              <select value={format} onChange={(event) => setFormat(event.target.value)} className="mt-2 block w-full border border-navy/25 bg-cream p-3">
                <option value="coastal">Coastal Survey - $340</option>
                <option value="trail">Trail Relief - $290</option>
                <option value="city">City Block - $260</option>
                <option value="celestial">Celestial Chart - $310</option>
              </select>
            </label>

            <label className="block font-body text-navy">
              Size
              <select value={size} onChange={(event) => setSize(event.target.value)} className="mt-2 block w-full border border-navy/25 bg-cream p-3">
                <option value="small">12 x 16 in</option>
                <option value="medium">18 x 24 in</option>
                <option value="large">24 x 36 in</option>
              </select>
            </label>

            <label className="block font-body text-navy">
              Finish
              <select value={finish} onChange={(event) => setFinish(event.target.value)} className="mt-2 block w-full border border-navy/25 bg-cream p-3">
                <option value="rolled">Rolled print</option>
                <option value="framed">Framed, oak (+ $180)</option>
                <option value="mounted">Mounted on birch panel (+ $140)</option>
              </select>
            </label>

            <label className="flex w-fit cursor-pointer items-center gap-3 font-body text-navy">
              <input type="checkbox" checked={plate} onChange={(event) => setPlate(event.target.checked)} className="h-4 w-4 accent-brass" />
              Brass coordinate plate (+ $45)
            </label>
          </div>

          <div className="mt-12 md:mt-0 md:w-2/5">
            <div className="border border-navy/20 bg-cream p-8">
              <p className="font-body text-sm text-navy/50">Estimated total</p>
              <p className="mt-2 font-display text-5xl text-navy">${Math.round(price)}</p>
              <p className="mt-4 font-body text-sm leading-relaxed text-navy/60">
                {formatName}, {size === "small" ? "12 x 16" : size === "medium" ? "18 x 24" : "24 x 36"} in, {finish} finish
              </p>
              <a href="#contact" className="mt-8 block bg-navy p-3 text-center font-body text-sm text-cream hover:bg-navy-dark transition-colors">
                Request this commission
              </a>
              <p className="mt-4 font-body text-xs text-navy/40">Estimate only. Final quote follows a short consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
