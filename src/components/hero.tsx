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
    <section id="hero" className="relative flex min-h-[88vh] items-end overflow-hidden">
      <img
        src={buildingImage}
        alt="Edificio de arquitectura moderna en hormigón y cristal"
        width={1024}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-tight text-primary-foreground pt-16 md:text-8xl">
          PANTONE
        </h1>
        <p className="mt-4 max-w-3xl font-serif italic text-5xl leading-[1.05] tracking-tight text-primary-foreground md:text-6xl">
          Nuestro patrimonio futuro
        </p>
        <div className="mt-6 grid text-base leading-relaxed text-primary-foreground/85">
          {/* Espaciador invisible para reservar el espacio y no mover los elementos de abajo */}
          <div className="col-start-1 row-start-1 invisible pointer-events-none select-none">
            <p>
              PANTONE_nuestro patrimonio futuro es una instalación itinerante diseñada para adaptarse a
              distintos edificios y espacios, en la que se invita al público a interactuar y reflexionar
              en torno al concepto de Patrimonio Futuro.
            </p>
            <div className="pb-1 pt-4">
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
            <div className="mt-2 flex justify-end">
              <button className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium">
                Ver menos <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Contenido visible e interactivo */}
          <div className="col-start-1 row-start-1 flex flex-col justify-start">
            <p>
              PANTONE_nuestro patrimonio futuro es una instalación itinerante diseñada para adaptarse a
              distintos edificios y espacios, en la que se invita al público a interactuar y reflexionar
              en torno al concepto de Patrimonio Futuro.
              {!isExpanded && <span className="animate-in fade-in duration-300">...</span>}
            </p>

            <div
              className={`grid transition-all duration-700 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 translate-y-0" : "grid-rows-[0fr] opacity-0 -translate-y-2"
                }`}
            >
              <div className="overflow-hidden">
                <div className="pb-1 pt-4">
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

            <div className="mt-2 flex justify-end">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-sm ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:ring-white/40 active:scale-95"
              >
                {isExpanded ? "Ver menos" : "Ver más"}
                <ChevronDown className={`h-4 w-4 transition-transform duration-500 ease-in-out ${isExpanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
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
