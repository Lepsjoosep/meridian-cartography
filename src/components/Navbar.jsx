import CompassMark from "./CompassMark.jsx";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto max-w-5xl p-6">
        <div className="flex items-center justify-between p-4">
          <a href="#top" className="flex items-center gap-3 text-navy">
            <CompassMark className="w-8 h-8" />
            <span className="font-display text-lg tracking-wide">
              Meridian Cartography Co.
            </span>
          </a>

          <nav>
            <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2 font-body text-xs text-navy/80 md:gap-8 md:text-sm">
              <li><a href="#process" className="hover:text-brass transition-colors">Process</a></li>
              <li><a href="#gallery" className="hover:text-brass transition-colors">Gallery</a></li>
              <li><a href="#commission" className="hover:text-brass transition-colors">Commission</a></li>
              <li><a href="#reviews" className="hover:text-brass transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-brass transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
