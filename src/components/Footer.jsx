import CompassMark from "./CompassMark.jsx";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-cream/60">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-cream">
            <CompassMark className="w-6 h-6" />
            <span className="font-display text-base">Meridian Cartography Co.</span>
          </div>
          <p className="font-body text-sm mt-4 md:mt-0">
            Drawn and printed in Portland, Maine
          </p>
        </div>
        <p className="font-body text-xs mt-8 text-cream/35">
          © {new Date().getFullYear()} Meridian Cartography Co. All maps are
          drawn to order and remain the studio's copyright until printed for you.
        </p>
      </div>
    </footer>
  );
}
