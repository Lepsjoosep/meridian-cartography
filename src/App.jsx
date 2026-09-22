import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Process from "./components/Process.jsx";
import Gallery from "./components/Gallery.jsx";
import QuoteCalculator from "./components/QuoteCalculator.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Gallery />
        <QuoteCalculator />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
