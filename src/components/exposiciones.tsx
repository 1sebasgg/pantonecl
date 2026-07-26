import React, { useState } from "react";

// 1. Añades la importación del nuevo archivo CSS aquí:
import "./styles/exposiciones.css";

import maquetaAsset from "@/assets/maqueta.jpg.asset.json";
import proyecto5Asset from "@/assets/proyecto-5.jpg.asset.json";
import proyecto4Asset from "@/assets/proyecto-4.jpg.asset.json";
import proyecto3Asset from "@/assets/proyecto-3.jpg.asset.json";
import proyecto1Asset from "@/assets/proyecto-1.jpg.asset.json";
import { assetUrl } from "@/lib/asset-url";

/**
 * Datos de la línea de tiempo.
 * Se ha integrado el arreglo de imágenes necesario para el carrusel.
 */
interface TimelineImage {
  id: number;
  src: string;
  alt: string;
  description?: string;
}

interface TimelineItem {
  year: string;
  title: string;
  place: string;
  text: string;
  images: TimelineImage[];
}

const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "  Casa-torre",
    place: "Centro Cultural GAM, Santiago",
    text: "Recorrido por la obra de Pezo von Ellrichshausen a través de sus casas verticales.",
    images: [
      {
        id: 1,
        src: assetUrl(proyecto3Asset.url),
        alt: "Estructura vertical",
        description: "Maqueta a escala de la estructura vertical principal.",
      },
    ],
  },
  {
    year: "2024",
    title: "  Atacama · Territorio y memoria",
    place: "Museo Regional de Atacama, Copiapó",
    text: "Curaduría en torno a la obra de Max Núñez y su diálogo con el paisaje del desierto.",
    images: [
      {
        id: 1,
        src: assetUrl(proyecto4Asset.url),
        alt: "Paisaje desértico",
        description: "Montaje principal dialogando con la aridez del entorno.",
      },
      {
        id: 2,
        src: assetUrl(proyecto5Asset.url),
        alt: "Montaje de obra",
        description: "Estructuras ligeras suspendidas en la sala principal.",
      },
    ],
  },
  {
    year: "2025",
    title: "  Sala de Maquetas",
    place: "Palacio Pereira, Santiago",
    text: "Muestra colectiva que reúne más de cien maquetas de arquitectura chilena contemporánea sobre el parquet del salón histórico.",
    images: [
      {
        id: 1,
        src: assetUrl(maquetaAsset.url),
        alt: "Vista central de la sala",
        description: "Vista general de las más de 100 maquetas expuestas sobre el parquet.",
      },
      {
        id: 2,
        src: assetUrl(proyecto1Asset.url),
        alt: "Detalle de maqueta 1",
        description: "Acercamiento a los detalles constructivos en madera.",
      },
    ],
  },
];

export function ExposicionesTimeline() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [bgLineStyle, setBgLineStyle] = useState<React.CSSProperties>({});
  const [fillLineStyle, setFillLineStyle] = useState<React.CSSProperties>({});

  const activeNode = timeline[activeIndex];
  const currentImage = activeNode.images[currentImageIndex];

  React.useEffect(() => {
    const updateLines = () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const nodes = Array.from(track.querySelectorAll('.et-node')) as HTMLElement[];
      if (nodes.length < 2) return;

      const firstNode = nodes[0];
      const lastNode = nodes[nodes.length - 1];
      const activeNodeEl = nodes[activeIndex];

      // Verificar si los nodos están alineados horizontalmente (móvil) o verticalmente (escritorio)
      const isHorizontal = firstNode.offsetTop === lastNode.offsetTop;

      if (isHorizontal) {
        // Centro horizontal = offsetLeft + (ancho / 2)
        const firstCenter = firstNode.offsetLeft + firstNode.offsetWidth / 2;
        const lastCenter = lastNode.offsetLeft + lastNode.offsetWidth / 2;
        const activeCenter = activeNodeEl.offsetLeft + activeNodeEl.offsetWidth / 2;

        setBgLineStyle({
          left: `${firstCenter}px`,
          width: `${lastCenter - firstCenter}px`,
          top: '29px',
          height: '2px',
        });

        setFillLineStyle({
          left: `${firstCenter}px`,
          width: `${activeCenter - firstCenter}px`,
          top: '29px',
          height: '2px',
        });
      } else {
        // Centro vertical = offsetTop + 10px (4px de top + 6px de radio del punto)
        const firstTop = firstNode.offsetTop + 10;
        const lastTop = lastNode.offsetTop + 10;
        const activeTop = activeNodeEl.offsetTop + 10;

        setBgLineStyle({
          top: `${firstTop}px`,
          height: `${lastTop - firstTop}px`,
          left: '5px',
          width: '2px',
        });

        setFillLineStyle({
          top: `${firstTop}px`,
          height: `${activeTop - firstTop}px`,
          left: '5px',
          width: '2px',
        });
      }
    };

    const timer = setTimeout(updateLines, 50);
    window.addEventListener('resize', updateLines);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateLines);
    };
  }, [activeIndex]);

  const handleNodeClick = (idx: number) => {
    setActiveIndex(idx);
    setCurrentImageIndex(0); // Reiniciar al cambiar de año
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === activeNode.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? activeNode.images.length - 1 : prev - 1));
  };

  const handleScrollRail = (direction: number) => {
    if (trackRef.current) {
      const scrollAmount = 200; // cantidad de pixeles a desplazar
      trackRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="exposiciones-timeline"
      className="et-section mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
      aria-label="Exposiciones — línea de tiempo interactiva"
    >
      <div className="et-inner">
        <p className="text-eyebrow">Línea de tiempo</p>
        <h2 className="mt-4 text-section-title">Exposiciones</h2>
        <p className="text-lede mt-6">
          Un recorrido cronológico por las muestras que hemos curado y producido, desde
          instalaciones internacionales hasta exposiciones patrimoniales. Elige un año para
          explorar.
        </p>

        <div className="et-grid">
          {/* Columna Izquierda: Riel de navegación */}
          <nav className="et-rail" aria-label="Selecciona una exposición">
            <div className="et-rail-header">
              <span className="et-rail-label">Explorar</span>
              <div className="et-rail-arrows">
                <button
                  type="button"
                  className="et-rail-arrow"
                  onClick={() => handleScrollRail(-1)}
                  aria-label="Desplazar a la izquierda"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                  type="button"
                  className="et-rail-arrow"
                  onClick={() => handleScrollRail(1)}
                  aria-label="Desplazar a la derecha"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>
            </div>
            <div className="et-track" ref={trackRef}>
              <div className="et-track-bg" style={bgLineStyle} />
              <div className="et-track-fill" style={fillLineStyle} />
              {timeline.map((item, idx) => (
                <button
                  key={item.year + item.title}
                  type="button"
                  className={`et-node${idx === activeIndex ? " is-active" : ""}`}
                  onClick={() => handleNodeClick(idx)}
                  aria-current={idx === activeIndex ? "true" : undefined}
                >
                  <span className="et-node-year">{item.year}</span>
                  <span className="et-node-title">{item.title}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Columna Derecha: Información y Carrusel */}
          <div className="et-content-area">
            <div className="et-info-header">
              <span className="text-eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
                Proyecto A{activeIndex + 1}
              </span>
              <h2 className="et-info-title">{activeNode.title}</h2>
              <p className="et-info-place">
                <span aria-hidden="true">📍</span>
                {activeNode.place}
              </p>
              <p className="et-info-text">{activeNode.text}</p>
            </div>

            {/* Carrusel */}
            <div className="et-carousel-container">
              <img
                key={currentImage.id}
                src={currentImage.src}
                alt={currentImage.alt}
                className="et-carousel-img"
              />
              <div className="et-carousel-gradient" />

              {activeNode.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="et-nav-btn prev"
                    aria-label="Imagen anterior"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="et-nav-btn next"
                    aria-label="Siguiente imagen"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>

                  <div className="et-dots">
                    {activeNode.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`et-dot ${idx === currentImageIndex ? "is-active" : ""}`}
                        aria-label={`Ir a la imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Descripción de la Imagen */}
            <div className="et-desc-box">
              <p key={`desc-${currentImage.id}`} className="et-desc-text">
                {currentImage.description || "Sin descripción disponible."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExposicionesTimeline;
