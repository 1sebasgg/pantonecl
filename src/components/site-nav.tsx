import { useEffect, useState } from "react";

const links = [
  { label: "Quiénes somos", hash: "hero" },
  { label: "Exposiciones", hash: "exposiciones" },
  { label: "Casos", hash: "casos" },
  { label: "Contacto", hash: "contacto" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled;

  const scrollTo = (hash: string) => {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={() => scrollTo("hero")}
          className={`font-display text-xl font-semibold uppercase tracking-[0.2em] transition-colors ${
            solid ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          PANTONE
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.hash)}
              className={`font-display text-[13px] uppercase tracking-[0.22em] transition-opacity hover:opacity-60 ${
                solid ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          className={`md:hidden font-display text-sm uppercase tracking-[0.2em] ${
            solid ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.hash)}
                className="py-3 text-left font-display text-sm uppercase tracking-[0.22em] text-foreground"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
