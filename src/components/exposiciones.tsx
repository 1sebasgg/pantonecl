import React, { useState } from "react";

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
    year: "2025",
    title: "  Sala de Maquetas",
    place: "Palacio Pereira, Santiago",
    text: "Muestra colectiva que reúne más de cien maquetas de arquitectura chilena contemporánea sobre el parquet del salón histórico.",
    images: [
      {
        id: 1,
        src: "/api/placeholder/800/600",
        alt: "Vista central de la sala",
        description: "Vista general de las más de 100 maquetas expuestas sobre el parquet.",
      },
      {
        id: 2,
        src: "/api/placeholder/800/600",
        alt: "Detalle de maqueta 1",
        description: "Acercamiento a los detalles constructivos en madera.",
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
        src: "/api/placeholder/800/600",
        alt: "Paisaje desértico",
        description: "Montaje principal dialogando con la aridez del entorno.",
      },
      {
        id: 2,
        src: "/api/placeholder/800/600",
        alt: "Montaje de obra",
        description: "Estructuras ligeras suspendidas en la sala principal.",
      },
    ],
  },
  {
    year: "2022",
    title: "  Casa-torre",
    place: "Centro Cultural GAM, Santiago",
    text: "Recorrido por la obra de Pezo von Ellrichshausen a través de sus casas verticales.",
    images: [
      {
        id: 1,
        src: "/api/placeholder/800/600",
        alt: "Estructura vertical",
        description: "Maqueta a escala de la estructura vertical principal.",
      },
    ],
  },
];

export function ExposicionesTimeline() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const activeNode = timeline[activeIndex];
  const currentImage = activeNode.images[currentImageIndex];

  // Cálculo para rellenar la línea del riel izquierdo
  const fillPercent = timeline.length > 1 ? (activeIndex / (timeline.length - 1)) * 100 : 0;

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

  return (
    <section
      id="exposiciones-timeline"
      className="et-section"
      aria-label="Exposiciones — línea de tiempo interactiva"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        /* --- Variables y Estilos Base Originales --- */
        .et-section {
          --bg: #f7f4ee;
          --ink: #211c17;
          --muted: #8c8377;
          --accent: #c05f34;
          --accent-soft: #eadfd2;
          --border: #e4ddd0;
          background: var(--bg);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          padding: 5rem 1.5rem;
        }
        .et-inner {
          max-width: 72rem;
          margin: 0 auto;
        }
        .et-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
        }
        .et-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4vw, 3.5rem);
          letter-spacing: -0.01em;
          margin: 0.75rem 0 1rem;
        }
        .et-lede {
          max-width: 40rem;
          color: var(--muted);
          line-height: 1.7;
          font-size: 1rem;
        }
        .et-grid {
          display: grid;
          grid-template-columns: 15rem 1fr;
          gap: 3rem;
          margin-top: 3.5rem;
        }
        @media (max-width: 860px) {
          .et-grid { grid-template-columns: 1fr; }
          .et-rail { display: none; }
        }

        /* --- Riel izquierdo Original --- */
        .et-rail {
          position: sticky;
          top: 2rem;
          align-self: start;
          height: fit-content;
        }
        .et-rail-label {
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1.5rem;
          display: block;
        }
        .et-track {
          position: relative;
          padding-left: 1.75rem;
        }
        .et-track::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 6px;
          bottom: 6px;
          width: 2px;
          background: var(--border);
        }
        .et-track-fill {
          position: absolute;
          left: 5px;
          top: 6px;
          width: 2px;
          background: var(--accent);
          transition: height 0.5s cubic-bezier(.4,0,.2,1);
        }
        .et-node {
          all: unset;
          display: block;
          position: relative;
          width: 100%;
          cursor: pointer;
          padding: 0 0 2.1rem;
          text-align: left;
        }
        .et-node:last-child { padding-bottom: 0; }
        .et-node::before {
          content: "";
          position: absolute;
          left: -1.75rem;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--border);
          transition: all 0.35s cubic-bezier(.4,0,.2,1);
        }
        .et-node.is-active::before {
          border-color: var(--accent);
          background: var(--accent);
          box-shadow: 0 0 0 4px var(--accent-soft);
          transform: scale(1.15);
        }
        .et-node:focus-visible::before {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }
        .et-node-year {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 1.15rem;
          color: var(--muted);
          transition: color 0.3s ease;
        }
        .et-node.is-active .et-node-year { color: var(--ink); }
        .et-node-title {
          font-size: 0.72rem;
          letter-spacing: 0.02em;
          color: var(--muted);
          text-transform: uppercase;
          margin-top: 0.15rem;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        .et-node.is-active .et-node-title { color: var(--accent); }

        /* --- Nuevos Estilos para el Carrusel adaptados a la Estética --- */
        .et-content-area {
          position: sticky;
          top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .et-info-header {
          margin-bottom: 0.5rem;
        }
        .et-info-title {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 2rem;
          color: var(--ink);
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }
        .et-info-place {
          font-size: 0.85rem;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 1rem;
        }
        .et-info-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--ink);
          max-width: 42rem;
        }

        .et-carousel-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 0.75rem;
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--border);
          box-shadow: 0 10px 30px -18px rgba(33,28,23,0.15);
        }
        .et-carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: etFadeIn 0.5s ease;
        }
        .et-carousel-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 35%;
          background: linear-gradient(to top, rgba(0,0,0,0.65), transparent);
          pointer-events: none;
        }

        /* Controles */
        .et-nav-btn {
          all: unset;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
          color: var(--ink);
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 10;
        }
        .et-carousel-container:hover .et-nav-btn,
        .et-nav-btn:focus-visible {
          opacity: 1;
        }
        .et-nav-btn:hover { background: #fff; }
        .et-nav-btn.prev { left: 1rem; }
        .et-nav-btn.next { right: 1rem; }

        /* Puntos */
        .et-dots {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }
        .et-dot {
          all: unset;
          height: 0.5rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .et-dot.is-active {
          width: 2rem;
          background: var(--accent);
        }
        .et-dot:not(.is-active) {
          width: 0.5rem;
        }
        .et-dot:not(.is-active):hover {
          background: rgba(255, 255, 255, 0.9);
        }

        /* Descripción */
        .et-desc-box {
          border-left: 2px solid var(--accent-soft);
          padding-left: 1rem;
          min-height: 3rem;
        }
        .et-desc-text {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--muted);
          animation: etFadeIn 0.5s ease;
        }

        @keyframes etFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .et-node::before, .et-track-fill, .et-carousel-img, .et-nav-btn, .et-dot, .et-desc-text {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <div className="et-inner">
        <p className="et-eyebrow">Línea de tiempo</p>
        <h1 className="et-h1">Exposiciones</h1>
        <p className="et-lede">
          Un recorrido cronológico por las muestras que hemos curado y producido, desde
          instalaciones internacionales hasta exposiciones patrimoniales. Elige un año para
          explorar.
        </p>

        <div className="et-grid">
          {/* Columna Izquierda: Riel de navegación */}
          <nav className="et-rail" aria-label="Selecciona una exposición">
            <span className="et-rail-label">Explorar</span>
            <div className="et-track">
              {/* La línea de color ahora baja dinámicamente según el ítem activo */}
              <div className="et-track-fill" style={{ height: `${fillPercent}%` }} />
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
              <span className="et-eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
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
