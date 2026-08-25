import { Mail, Phone } from "lucide-react";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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
              <Instagram className="mt-0.5 h-4 w-4 text-accent" />
              <a href="https://www.instagram.com/arquitecturaenpapel_" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
                @arquitecturaenpapel_
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 text-accent" />
              <a href="mailto:hola@pantone.studio" className="hover:opacity-70">
                hola@pantone.studio
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <span>+56 9 8904 2277</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-6 md:px-10">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
