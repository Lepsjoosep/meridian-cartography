import { useState } from "react";

const initialValues = { name: "", email: "", place: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Tell us your name.";
  if (!values.email.trim()) {
    errors.email = "An email address is needed to reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email address doesn't look complete.";
  }
  if (!values.place.trim()) errors.place = "What place is this map of?";
  if (!values.message.trim()) errors.message = "A few sentences is plenty.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-parchment">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="font-body text-sm text-brass tracking-wide mb-4">Message sent</p>
          <h2 className="font-display text-4xl text-navy">Thank you, {values.name.split(" ")[0]}.</h2>
          <p className="font-body text-navy/65 mt-4 max-w-md leading-relaxed">
            We read every message ourselves and usually reply within two
            working days with a few questions about the place you have in mind.
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(initialValues);
              setSubmitted(false);
            }}
            className="mt-8 border border-navy/30 text-navy font-body text-sm px-6 py-3 hover:border-navy transition-colors"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-parchment">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="font-body text-sm text-brass tracking-wide mb-4">Get in touch</p>
        <h2 className="font-display text-4xl text-navy">Tell us about the place</h2>
        <p className="font-body text-navy/60 mt-4 max-w-md leading-relaxed">
          A rough idea is a fine place to start. We'll follow up with the
          right questions.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6 max-w-md">
          <Field
            label="Your name"
            value={values.name}
            onChange={handleChange("name")}
            error={errors.name}
          />
          <Field
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            error={errors.email}
          />
          <Field
            label="Place you'd like mapped"
            value={values.place}
            onChange={handleChange("place")}
            error={errors.place}
            placeholder="A town, a trail, a stretch of coast..."
          />
          <div>
            <label className="font-body text-sm text-navy/70 block mb-2" htmlFor="message">
              What do you have in mind?
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={handleChange("message")}
              className={`w-full bg-cream border px-4 py-3 font-body text-navy focus:outline-none ${
                errors.message ? "border-red-500" : "border-navy/25"
              }`}
            />
            {errors.message && (
              <p className="font-body text-sm text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-navy text-cream font-body text-sm px-6 py-3 hover:bg-navy-dark transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, error, type = "text", placeholder }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label className="font-body text-sm text-navy/70 block mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-cream border px-4 py-3 font-body text-navy focus:outline-none ${
          error ? "border-red-500" : "border-navy/25"
        }`}
      />
      {error && <p className="font-body text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
