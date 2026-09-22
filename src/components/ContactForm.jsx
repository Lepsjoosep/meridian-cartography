export default function ContactForm() {
  return (
    <section id="contact" className="bg-parchment">
      <div className="mx-auto max-w-3xl p-6 md:p-10">
        <p className="font-body text-sm text-brass tracking-wide mb-4">Get in touch</p>
        <h2 className="font-display text-4xl text-navy">Tell us about the place</h2>
        <p className="font-body text-navy/60 mt-4 max-w-md leading-relaxed">
          A rough idea is a fine place to start. We'll follow up with the
          right questions.
        </p>

        <form className="mt-10 space-y-6 max-w-md">
          <div>
            <label className="font-body text-sm text-navy/70 block mb-2" htmlFor="name">Your name</label>
            <input id="name" required className="w-full bg-cream border border-navy/25 p-3 font-body text-navy focus:outline-none" />
          </div>
          <div>
            <label className="font-body text-sm text-navy/70 block mb-2" htmlFor="email">Email</label>
            <input id="email" type="email" required className="w-full bg-cream border border-navy/25 p-3 font-body text-navy focus:outline-none" />
          </div>
          <div>
            <label className="font-body text-sm text-navy/70 block mb-2" htmlFor="place">Place you'd like mapped</label>
            <input id="place" required placeholder="A town, a trail, a stretch of coast..." className="w-full bg-cream border border-navy/25 p-3 font-body text-navy focus:outline-none" />
          </div>
          <div>
            <label className="font-body text-sm text-navy/70 block mb-2" htmlFor="message">
              What do you have in mind?
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full bg-cream border border-navy/25 p-3 font-body text-navy focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-navy text-cream font-body text-sm p-3 hover:bg-navy-dark transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
