import { useState } from "react";
import { ArrowDown, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

export function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScrollClick = (hash?: string) => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden">
      <img
        src="portada.webp"
        alt="Edificio de arquitectura moderna en hormigón y cristal"
        width={1024}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Título fijo arriba */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-tight text-primary-foreground pt-16 md:text-8xl">
          PANTONE
        </h1>
        <p className="mt-4 max-w-3xl font-serif italic text-5xl leading-[1.05] tracking-tight text-primary-foreground md:text-6xl">
          Nuestro patrimonio futuro
        </p>
      </div>

      {/* Bloque inferior: crece hacia arriba */}
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <div className="text-base leading-relaxed text-primary-foreground/85 max-h-[30dvh] overflow-y-auto overscroll-contain lg:max-h-none lg:overflow-visible">

          {/* Párrafo siempre visible, recortado cuando está cerrado */}
          <div className="relative">
            <p
              className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? "" : "line-clamp-2"
                }`}
            >
              PANTONE_nuestro patrimonio futuro es una instalación itinerante diseñada para
              adaptarse a distintos edificios y espacios, en la que se invita al público a
              interactuar y reflexionar en torno al concepto de Patrimonio Futuro.
            </p>

            {/* Degradado que insinúa texto cortado */}
            {!isExpanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-background/0 via-transparent to-transparent" />
            )}
          </div>

          {/* Resto del texto, se despliega hacia arriba */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
          >
            <div className="overflow-hidden">
              <div className="pt-4">
                <p>
                  Una serie de maquetas de colores realizadas con la técnica de papel pop up
                  representan una selección de obras contemporáneas construidas por arquitectas
                  y arquitectos chilenos a lo largo de todo el territorio nacional. Son obras que
                  han propuesto, experimentado y consolidado maneras de hacer y entender la
                  arquitectura desde el regreso a la democracia (1990) hasta hoy, entendiendo
                  esta etapa de nuestra historia como un momento de cambios económicos, sociales,
                  culturales y artísticos que han moldeado una nueva visión de mundo.
                </p>
                <p className="mt-4">
                  Cuidar desde hoy, lo que valoraremos como patrimonio en un futuro.
                </p>
              </div>
            </div>
          </div>

          {/* Botón "Ver más / Ver menos" */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="group mt-5 inline-flex items-center gap-2.5 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <span className="relative py-0.5">
              {isExpanded ? "Ver menos" : "Ver más"}
            </span>
            <ChevronUp
              className={`h-3.5 w-3.5 transition-transform duration-500 ease-out ${isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
            />
          </button>
        </div>

        <Link
          to="/"
          hash="exposiciones-timeline"
          onClick={() => handleScrollClick("exposiciones-timeline")}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Ver Exposiciones
          <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}