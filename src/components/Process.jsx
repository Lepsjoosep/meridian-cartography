const STEPS = [
  {
    number: "01",
    title: "We talk through the place",
    body: "A call or a long email thread — either works. We want the street you grew up on, the trail you keep coming back to, the coastline you can't stop thinking about.",
  },
  {
    number: "02",
    title: "Source charts are gathered",
    body: "Survey data, historical charts, and satellite reference are pulled together and checked against each other before a single line is drawn.",
  },
  {
    number: "03",
    title: "The map is drawn by hand",
    body: "Pen and ink on drafting film, at true scale, redrawn until the proportions feel right rather than just measure right.",
  },
  {
    number: "04",
    title: "Proofing and correction",
    body: "A digital proof goes to you for names, spellings, and any landmark we might have missed. We revise until it's right.",
  },
  {
    number: "05",
    title: "Printing and finishing",
    body: "Giclée printed on cotton rag paper, trimmed by hand, and either rolled in a brass-capped tube or mounted, your choice.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy-dark text-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="max-w-lg">
          <h2 className="font-display text-4xl">From conversation to chart</h2>
          <p className="font-body text-cream/65 mt-4 leading-relaxed">
            Five stages, six to eight weeks, one map. Here is what happens
            between your first message and the tube arriving at your door.
          </p>
        </div>

        <ol className="mt-14">
          {STEPS.map((step, i) => (
            <li
              key={step.number}
              className={`py-8 md:flex md:gap-10 ${
                i !== 0 ? "border-t border-cream/10" : ""
              }`}
            >
              <span className="font-display text-3xl text-brass-light md:w-20 shrink-0">
                {step.number}
              </span>
              <div className="mt-3 md:mt-0">
                <h3 className="font-display text-xl">{step.title}</h3>
                <p className="font-body text-cream/60 mt-2 leading-relaxed max-w-md">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
