import { useState } from "react";

const QUESTIONS = [
  {
    q: "How long does a commission take?",
    a: "Six to eight weeks from the first consultation to the map arriving, depending on format and how much back-and-forth the proofing stage needs.",
  },
  {
    q: "What if I don't have exact coordinates or survey data?",
    a: "Most people don't. Give us the place by name, or a rough pin on a map, and we'll source the survey data ourselves.",
  },
  {
    q: "Can I request changes after seeing the proof?",
    a: "Yes — one full round of revisions is included in every commission. Further changes are billed at an hourly rate, which is rare in practice.",
  },
  {
    q: "Do you ship internationally?",
    a: "We do. Maps travel in a rigid brass-capped tube or a padded crate for framed pieces, and shipping is quoted alongside your estimate.",
  },
  {
    q: "Can I see the map before it's finalized?",
    a: "Always. You'll see a digital proof before printing, and framed or mounted pieces get a photo of the finished piece before it ships.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-display text-4xl text-navy">Questions we hear often</h2>

        <div className="mt-10 border-t border-navy/15">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-navy/15">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left py-5 gap-6"
                >
                  <span className="font-body text-navy text-lg">{item.q}</span>
                  <span
                    className={`font-display text-2xl text-brass shrink-0 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="font-body text-navy/60 leading-relaxed pb-6 max-w-xl">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
