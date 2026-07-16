import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:px-10 md:py-20">
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight">PANTONE</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Contacto
          </p>
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

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Estudio
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>Lun — Vie · 09:00 a 18:00</li>
            <li>Sáb · con cita previa</li>
            <li className="pt-2">
              <a href="#" className="hover:opacity-70">Instagram</a>
              <span className="mx-2 text-muted-foreground">·</span>
              <a href="#" className="hover:opacity-70">Behance</a>
              <span className="mx-2 text-muted-foreground">·</span>
              <a href="#" className="hover:opacity-70">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            PANTONE · Estudio de arquitectura
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
