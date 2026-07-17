import React, { useState } from "react";

// 1. Añades la importación del nuevo archivo CSS aquí:
import "./exposiciones.css";

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
      {/* 2. La etiqueta <style> se ha eliminado por completo de aquí */}
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
