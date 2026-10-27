import { useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useCarouselSwipe } from "./useCarouselSwipe";

/**
 * El texto de presentación se divide en capítulos cortos.
 * Todos se apilan en la misma celda del grid, así la tarjeta adopta siempre
 * la altura del capítulo más largo: no hay saltos de layout, no hay scroll
 * interno y el Hero (y su imagen de fondo) nunca cambia de tamaño.
 */
const CHAPTERS: { label: string; quote?: boolean; content: ReactNode }[] = [
  {
    label: "La instalación",
    content: (
      <>
        PANTONE_<span className="italic">NUESTRO PATRIMONIO FUTURO</span> es una instalación
        itinerante diseñada para adaptarse a distintos edificios y espacios, en la que se invita
        al público a interactuar y reflexionar en torno al concepto de Patrimonio Futuro.
      </>
    ),
  },
  {
    label: "Las maquetas",
    content: (
      <>
        Una serie de maquetas de colores realizadas con la técnica de Papel pop up representan
        una selección de obras contemporáneas construidas por arquitectas y arquitectos chilenos
        a lo largo de todo el territorio nacional.
      </>
    ),
  },
  {
    label: "Las obras",
    content: (
      <>
        Son obras que han propuesto, experimentado y consolidado maneras de hacer y entender la
        arquitectura desde el regreso a la democracia (1990) hasta hoy, entendiendo esta etapa de
        nuestra historia como un momento de cambios económicos, sociales, culturales y artísticos
        que han moldeado una nueva visión de mundo.
      </>
    ),
  },
  {
    label: "Manifiesto",
    quote: true,
    content: <>Cuidar desde hoy, lo que valoraremos como patrimonio en un futuro.</>,
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export function Hero() {
  const [active, setActive] = useState(0);
  const total = CHAPTERS.length;

  const goTo = (i: number) => setActive(Math.max(0, Math.min(total - 1, i)));
  const { handlers, dragX, dragging } = useCarouselSwipe({
    count: total,
    index: active,
    setIndex: goTo,
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  const handleScrollClick = (e: React.MouseEvent, hash?: string) => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Evita que el router navegue a un hash ya activo y scrollea manualmente
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="hero" className="relative flex min-h-[100dvh] flex-col overflow-hidden">
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
        <h1 className="mt-4 max-w-6xl font-serif text-4xl tracking-tight text-primary-foreground pt-16 md:text-6xl">
          PANTONE_
        </h1>
        <p className="mt-4 max-w-3xl font-serif italic text-[1.4rem] leading-[1.05] tracking-tight text-primary-foreground md:text-[2.3rem]">
          Nuestro Patrimonio Futuro
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-auto w-full max-w-7xl px-6 pb-10 pt-8 md:px-10 md:pb-14">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Tarjeta de presentación por capítulos (altura constante) */}
          <article
            aria-roledescription="carrusel"
            aria-label="Sobre la instalación"
            onKeyDown={handleKeyDown}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-primary-foreground/15 bg-black/35 text-primary-foreground shadow-lg backdrop-blur-md md:max-w-2xl"
          >
            {/* Encabezado: capítulo actual + contador */}
            <header className="flex items-center justify-between gap-4 px-5 pt-5 md:px-7 md:pt-6">
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground/75">
                <span className="tabular-nums text-accent">{pad(active + 1)}</span>
                <span aria-hidden className="h-px w-6 bg-primary-foreground/30" />
                <span key={active} className="animate-in fade-in duration-500">
                  {CHAPTERS[active].label}
                </span>
              </p>
              <span className="text-[11px] tabular-nums tracking-[0.22em] text-primary-foreground/45">
                {pad(active + 1)} / {pad(total)}
              </span>
            </header>

            {/* Capítulos apilados en la misma celda: la altura es la del más largo */}
            <div
              {...handlers}
              aria-live="polite"
              className="grid touch-pan-y px-5 pt-4 md:px-7 md:pt-5"
            >
              {CHAPTERS.map((chapter, i) => {
                const isActive = i === active;
                // Desplazamiento corto según la dirección (anteriores a la izquierda, siguientes a la derecha)
                const offset = i < active ? "-translate-x-3" : "translate-x-3";
                // Transición secuencial: el saliente se va rápido y el entrante espera un instante,
                // así los dos textos nunca se superponen. Tailwind v4 usa la propiedad `translate`.
                const transition = dragging
                  ? "none"
                  : isActive
                    ? "opacity 420ms cubic-bezier(0.22,1,0.36,1) 160ms, translate 520ms cubic-bezier(0.22,1,0.36,1) 160ms, transform 300ms cubic-bezier(0.22,1,0.36,1), visibility 0s"
                    : "opacity 180ms ease-in, translate 180ms ease-in, transform 180ms ease-in, visibility 0s linear 180ms";
                return (
                  <div
                    key={chapter.label}
                    role="group"
                    aria-roledescription="capítulo"
                    aria-label={`${i + 1} de ${total}: ${chapter.label}`}
                    aria-hidden={!isActive}
                    style={{
                      transition,
                      transform: isActive && dragging ? `translateX(${dragX}px)` : undefined,
                    }}
                    className={`[grid-area:1/1] will-change-[opacity,translate] motion-reduce:transition-none! ${chapter.quote ? "self-center" : "self-start"
                      } ${isActive ? "visible translate-x-0 opacity-100" : `pointer-events-none invisible opacity-0 ${offset}`}`}
                  >
                    {chapter.quote ? (
                      <blockquote className="border-l-2 border-accent pl-4 font-serif text-2xl italic leading-snug text-pretty text-primary-foreground md:pl-5 md:text-[2rem]">
                        {chapter.content}
                      </blockquote>
                    ) : (
                      <p className="text-sm leading-relaxed text-pretty text-primary-foreground/90 md:text-base md:leading-relaxed">
                        {chapter.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navegación: barras de progreso + flechas */}
            <footer className="mt-5 flex items-center gap-4 border-t border-primary-foreground/10 px-5 py-3.5 md:mt-6 md:px-7 md:py-4">
              <div className="flex flex-1 items-center gap-1.5" role="tablist" aria-label="Capítulos">
                {CHAPTERS.map((chapter, i) => (
                  <button
                    key={chapter.label}
                    id={`hero-chapter-tab-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Ir a ${chapter.label}`}
                    onClick={() => goTo(i)}
                    className="group flex h-8 flex-1 items-center"
                  >
                    <span className="block h-[2px] w-full overflow-hidden rounded-full bg-primary-foreground/20 transition-colors group-hover:bg-primary-foreground/40">
                      <span
                        className={`block h-full origin-left rounded-full bg-accent transition-transform duration-500 ease-out ${i <= active ? "scale-x-100" : "scale-x-0"
                          }`}
                      />
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  id="hero-chapter-prev"
                  type="button"
                  onClick={() => goTo(active - 1)}
                  disabled={active === 0}
                  aria-label="Capítulo anterior"
                  className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground/90 transition-all duration-300 hover:border-primary-foreground/50 hover:bg-primary-foreground/10 disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  id="hero-chapter-next"
                  type="button"
                  onClick={() => goTo(active + 1)}
                  disabled={active === total - 1}
                  aria-label="Capítulo siguiente"
                  className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground/90 transition-all duration-300 hover:border-primary-foreground/50 hover:bg-primary-foreground/10 disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </footer>
          </article>

          <Link
            to="/"
            hash="exposiciones-timeline"
            onClick={(e) => handleScrollClick(e, "exposiciones-timeline")}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Ver Exposiciones
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}