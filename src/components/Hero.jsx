export default function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto max-w-5xl p-6 md:p-10">
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
                className="bg-navy text-cream font-body text-sm p-3 hover:bg-navy-dark transition-colors"
              >
                Start a commission
              </a>
              <a
                href="#gallery"
                className="border border-navy/30 text-navy font-body text-sm p-3 hover:border-navy transition-colors"
              >
                See the gallery
              </a>
            </div>
          </div>

          <div className="mt-14 md:mt-0 md:w-1/2">
            <div className="relative border border-navy/20 bg-parchment p-8">
              <div className="absolute inset-8 border border-navy/10"></div>
              <div className="relative flex h-72 items-center justify-center bg-gradient-to-br from-parchment via-cream to-teal/30">
                <div className="h-40 w-40 rounded-full border border-navy/30">
                  <div className="mt-20 w-full border-t border-brass"></div>
                  <div className="ml-20 h-full border-l border-brass"></div>
                </div>
                <span className="absolute left-6 top-6 font-body text-xs tracking-widest text-navy/50">44°N, 68°W</span>
                <span className="absolute bottom-6 right-6 font-display text-sm text-brass">N</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
