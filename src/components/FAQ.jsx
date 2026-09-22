export default function FAQ() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl p-6 md:p-10">
        <h2 className="font-display text-4xl text-navy">Questions we hear often</h2>

        <div className="mt-10 border-t border-navy/15">
          <details className="border-b border-navy/15">
            <summary className="cursor-pointer p-5 font-body text-lg text-navy">How long does a commission take?</summary>
            <p className="max-w-xl pb-6 font-body leading-relaxed text-navy/60">Six to eight weeks from the first consultation to the map arriving.</p>
          </details>
          <details className="border-b border-navy/15">
            <summary className="cursor-pointer p-5 font-body text-lg text-navy">What if I do not have exact coordinates?</summary>
            <p className="max-w-xl pb-6 font-body leading-relaxed text-navy/60">Give us the place by name or a rough pin on a map, and we will find the survey data.</p>
          </details>
          <details className="border-b border-navy/15">
            <summary className="cursor-pointer p-5 font-body text-lg text-navy">Can I request changes after seeing the proof?</summary>
            <p className="max-w-xl pb-6 font-body leading-relaxed text-navy/60">Yes. One full round of revisions is included in every commission.</p>
          </details>
          <details className="border-b border-navy/15">
            <summary className="cursor-pointer p-5 font-body text-lg text-navy">Do you ship internationally?</summary>
            <p className="max-w-xl pb-6 font-body leading-relaxed text-navy/60">Yes. Shipping is quoted together with your estimate.</p>
          </details>
          <details className="border-b border-navy/15">
            <summary className="cursor-pointer p-5 font-body text-lg text-navy">Can I see the map before it is finalized?</summary>
            <p className="max-w-xl pb-6 font-body leading-relaxed text-navy/60">Yes. You will see a digital proof before printing.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
