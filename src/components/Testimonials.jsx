export default function Testimonials() {
  return (
    <section id="reviews" className="bg-navy text-cream">
      <div className="mx-auto max-w-3xl p-6 md:p-10">
        <p className="font-body text-sm text-brass-light tracking-wide mb-8">From the order book</p>

        <div className="space-y-10">
          <div className="font-display text-2xl leading-snug md:text-3xl">
            “I sent them a scanned trail map from a park ranger station and asked for a miracle. What came back in the mail six weeks later hangs above my desk now.”
          </div>
          <div className="border-t border-cream/20 pt-8 font-display text-2xl leading-snug md:text-3xl">
            “We commissioned the harbor where my grandfather kept his boat. The soundings and buoy markers are correct down to the number.”
          </div>
          <div className="border-t border-cream/20 pt-8 font-display text-2xl leading-snug md:text-3xl">
            “The proofing stage caught a street name I'd spelled wrong in my own request. It told me they were actually paying attention.”
          </div>
        </div>
      </div>
    </section>
  );
}
