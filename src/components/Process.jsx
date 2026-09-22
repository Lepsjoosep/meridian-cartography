export default function Process() {
  return (
    <section id="process" className="bg-navy-dark text-cream">
      <div className="mx-auto max-w-5xl p-6 md:p-10">
        <div className="max-w-lg">
          <h2 className="font-display text-4xl">From conversation to chart</h2>
          <p className="font-body text-cream/65 mt-4 leading-relaxed">
            Five stages, six to eight weeks, one map. Here is what happens
            between your first message and the tube arriving at your door.
          </p>
        </div>

        <ol className="mt-14">
          <li className="p-8 md:flex md:gap-10">
            <span className="font-display text-3xl text-brass-light md:w-20">01</span>
            <div><h3 className="font-display text-xl">We talk through the place</h3><p className="mt-2 max-w-md font-body leading-relaxed text-cream/60">We talk about the street, trail, or coastline you want to remember.</p></div>
          </li>
          <li className="border-t border-cream/10 p-8 md:flex md:gap-10">
            <span className="font-display text-3xl text-brass-light md:w-20">02</span>
            <div><h3 className="font-display text-xl">We gather the information</h3><p className="mt-2 max-w-md font-body leading-relaxed text-cream/60">Survey data, old charts, and reference images are checked together.</p></div>
          </li>
          <li className="border-t border-cream/10 p-8 md:flex md:gap-10">
            <span className="font-display text-3xl text-brass-light md:w-20">03</span>
            <div><h3 className="font-display text-xl">The map is drawn</h3><p className="mt-2 max-w-md font-body leading-relaxed text-cream/60">The map is drawn by hand and adjusted until it looks right.</p></div>
          </li>
          <li className="border-t border-cream/10 p-8 md:flex md:gap-10">
            <span className="font-display text-3xl text-brass-light md:w-20">04</span>
            <div><h3 className="font-display text-xl">You check the proof</h3><p className="mt-2 max-w-md font-body leading-relaxed text-cream/60">You check names, spelling, and landmarks before we print.</p></div>
          </li>
          <li className="border-t border-cream/10 p-8 md:flex md:gap-10">
            <span className="font-display text-3xl text-brass-light md:w-20">05</span>
            <div><h3 className="font-display text-xl">We print and finish it</h3><p className="mt-2 max-w-md font-body leading-relaxed text-cream/60">The finished map is printed, trimmed, and shipped to you.</p></div>
          </li>
        </ol>
      </div>
    </section>
  );
}
