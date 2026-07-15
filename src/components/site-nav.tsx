import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Quiénes somos", to: "/estudio" as const, hash: undefined },
  { label: "Exposiciones", to: "/exposiciones" as const, hash: undefined },
  { label: "Casos", to: "/" as const, hash: "proyectos" },
  { label: "Contacto", to: "/" as const, hash: "contacto" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid nav on interior pages; transparent-over-hero on home until scrolled.
  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          className={`font-display text-xl font-semibold tracking-tight transition-colors ${
            solid ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          PANTONE
          <span
            className={`ml-3 hidden text-[10px] font-normal uppercase tracking-[0.28em] md:inline ${
              solid ? "text-muted-foreground" : "text-primary-foreground/70"
            }`}
          >
            Estudio · Santiago, CL
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className={`font-display text-[13px] uppercase tracking-[0.22em] transition-opacity hover:opacity-60 ${
                solid ? "text-foreground" : "text-primary-foreground"
              }`}
              activeOptions={{ exact: true }}
              activeProps={{ className: "opacity-60" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          className={`md:hidden ${solid ? "text-foreground" : "text-primary-foreground"}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-sm uppercase tracking-[0.22em] text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
