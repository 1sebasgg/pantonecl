import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-border bg-secondary/40">
      {/* 1. Cambiamos 'grid' por 'flex flex-col md:flex-row md:justify-between' */}
      <div className="mx-auto flex flex-col max-w-7xl gap-12 px-6 py-16 md:flex-row md:justify-between md:px-10 md:py-20">
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight">PANTONE</p>
        </div>

        {/* 2. Este contenedor ahora se irá naturalmente al extremo derecho en pantallas medianas y grandes */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>Av. Providencia 1234, Santiago, CL</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 text-accent" />
              <a href="mailto:hola@pantone.studio" className="hover:opacity-70">
                hola@pantone.studio
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <span>+56 2 2345 6789</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
