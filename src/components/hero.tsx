import { useState } from "react";
import { ArrowDown, ChevronDown, ChevronUp } from "lucide-react";
import portadaImage from "@/assets/portada.jpg";
import { Link, useRouterState } from "@tanstack/react-router";

export function Hero() {
  const buildingImage = portadaImage;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScrollClick = (hash?: string) => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Hacemos que el navegador haga scroll hacia el ID suavemente
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-[88vh] overflow-hidden">
      <img
        src={buildingImage}
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
        <div className="max-w-3xl text-base leading-relaxed text-primary-foreground/85">
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pb-4">
                <p>
                  Una serie de maquetas de colores realizadas con la técnica de papel pop up representan una
                  selección de obras contemporáneas construidas por arquitectas y arquitectos chilenos a lo
                  largo de todo el territorio nacional. Son obras que han propuesto, experimentado y
                  consolidado maneras de hacer y entender la arquitectura desde el regreso a la democracia
                  (1990) hasta hoy, entendiendo esta etapa de nuestra historia como un momento de cambios
                  económicos, sociales, culturales y artísticos que han moldeado una nueva visión de mundo.
                </p>
                <p className="mt-4">
                  Cuidar desde hoy, lo que valoraremos como patrimonio en un futuro.
                </p>
              </div>
            </div>
          </div>

          <p>
            PANTONE_nuestro patrimonio futuro es una instalación itinerante diseñada para adaptarse a
            distintos edificios y espacios, en la que se invita al público a interactuar y reflexionar
            en torno al concepto de Patrimonio Futuro.
            {!isExpanded && <span className="animate-in fade-in duration-300">...</span>}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="group mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground/90 transition-colors hover:text-primary-foreground"
          >
            <span className="relative py-1">
              {isExpanded ? "Ver menos" : "Ver más"}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-100 bg-primary-foreground/40 transition-all duration-500 ease-out group-hover:bg-primary-foreground" />
            </span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-500 ease-out ${isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"}`}
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
