import { useState } from "react";
import CompassMark from "./CompassMark.jsx";

const LINKS = [
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#commission", label: "Commission a Map" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3 text-navy">
            <CompassMark className="w-8 h-8" />
            <span className="font-display text-lg tracking-wide">
              Meridian Cartography Co.
            </span>
          </a>

          {/* desktop links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 font-body text-sm text-navy/80">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brass transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* mobile menu button */}
          <button
            type="button"
            className="md:hidden text-navy"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-px bg-navy mb-1.5"></span>
            <span className="block w-6 h-px bg-navy mb-1.5"></span>
            <span className="block w-6 h-px bg-navy"></span>
          </button>
        </div>

        {/* mobile menu panel */}
        {open && (
          <nav className="md:hidden pb-5">
            <ul className="font-body text-base text-navy/80">
              {LINKS.map((link) => (
                <li key={link.href} className="border-t border-navy/10">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
