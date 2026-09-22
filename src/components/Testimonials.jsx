import { useState } from "react";

const REVIEWS = [
  {
    quote:
      "I sent them a scanned trail map from a park ranger station and asked for a miracle. What came back in the mail six weeks later hangs above my desk now.",
    name: "Odette Marchetti",
    detail: "Trail Relief, Sierra Nevada",
  },
  {
    quote:
      "We commissioned the harbor where my grandfather kept his boat. The soundings and buoy markers are correct down to the number — someone actually checked the charts.",
    name: "Theo Okonkwo",
    detail: "Coastal Survey, Lake Michigan",
  },
  {
    quote:
      "The proofing stage caught a street name I'd spelled wrong in my own request. Small thing, but it told me they were actually paying attention.",
    name: "Priya Ramanathan",
    detail: "City Block, Brooklyn",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const review = REVIEWS[index];

  const go = (delta) => {
    setIndex((i) => (i + delta + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="bg-navy text-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="font-body text-sm text-brass-light tracking-wide mb-8">From the order book</p>

        <blockquote className="font-display text-2xl md:text-3xl leading-snug">
          “{review.quote}”
        </blockquote>

        <div className="mt-8 font-body">
          <p className="text-cream">{review.name}</p>
          <p className="text-cream/55 text-sm mt-1">{review.detail}</p>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="w-10 h-10 border border-cream/30 text-cream hover:border-brass-light hover:text-brass-light transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="w-10 h-10 border border-cream/30 text-cream hover:border-brass-light hover:text-brass-light transition-colors"
          >
            →
          </button>
          <span className="font-body text-sm text-cream/40">
            {index + 1} of {REVIEWS.length}
          </span>
        </div>
      </div>
    </section>
  );
}
