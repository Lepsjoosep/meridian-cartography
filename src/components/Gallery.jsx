export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream">
      <div className="mx-auto max-w-5xl p-6 md:p-10">
        <h2 className="font-display text-4xl text-navy">Four ways to chart a place</h2>
        <p className="font-body text-navy/60 mt-4 max-w-lg leading-relaxed">
          Choose a style, then we work out the size, materials, and framing together.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="border border-navy/15 bg-parchment p-8">
            <div className="flex h-32 items-center justify-center border border-navy/15 bg-cream">
              <div className="w-4/5 space-y-4">
                <div className="border-t border-navy/40"></div>
                <div className="border-t border-navy/30"></div>
                <div className="border-t border-navy/20"></div>
              </div>
            </div>
            <h3 className="font-display text-xl text-navy mt-6">Coastal Survey</h3>
            <p className="font-body text-sm text-brass mt-1">From $340</p>
            <p className="font-body text-navy/60 mt-3 leading-relaxed">Shoreline, depth soundings, and important landmarks in the style of an old nautical chart.</p>
          </article>

          <article className="border border-navy/15 bg-parchment p-8">
            <div className="flex h-32 items-center justify-center border border-navy/15 bg-cream">
              <div className="h-20 w-48 rounded-[50%] border border-navy/50"></div>
            </div>
            <h3 className="font-display text-xl text-navy mt-6">Trail Relief</h3>
            <p className="font-body text-sm text-brass mt-1">From $290</p>
            <p className="font-body text-navy/60 mt-3 leading-relaxed">Contour lines and elevation shading for a trail, mountain range, or watershed.</p>
          </article>

          <article className="border border-navy/15 bg-parchment p-8">
            <div className="flex h-32 items-center justify-center border border-navy/15 bg-cream">
              <div className="grid h-20 w-48 grid-cols-5 grid-rows-3 border border-navy/30">
                <div className="border-r border-navy/20"></div><div className="border-r border-navy/20"></div><div className="border-r border-navy/20"></div><div className="border-r border-navy/20"></div>
                <div className="border-r border-t border-navy/20"></div><div className="border-r border-t border-navy/20"></div><div className="border-r border-t border-navy/20"></div><div className="border-r border-t border-navy/20"></div>
                <div className="border-r border-t border-navy/20"></div><div className="border-r border-t border-navy/20"></div><div className="border-r border-t border-navy/20"></div><div className="border-r border-t border-navy/20"></div>
              </div>
            </div>
            <h3 className="font-display text-xl text-navy mt-6">City Block</h3>
            <p className="font-body text-sm text-brass mt-1">From $260</p>
            <p className="font-body text-navy/60 mt-3 leading-relaxed">A neighbourhood at true scale, with building footprints and street names.</p>
          </article>

          <article className="border border-navy/15 bg-parchment p-8">
            <div className="flex h-32 items-center justify-center border border-navy/15 bg-cream font-display text-3xl tracking-[1.5em] text-navy/60">
              * . * . *
            </div>
            <h3 className="font-display text-xl text-navy mt-6">Celestial Chart</h3>
            <p className="font-body text-sm text-brass mt-1">From $310</p>
            <p className="font-body text-navy/60 mt-3 leading-relaxed">The night sky over a specific place, date, and hour of your choosing.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
