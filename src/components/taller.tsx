import React, { useState } from "react";
import "@/components/styles/exposiciones.css";

const IMAGES = [
  "/taller/Taller-1.jpg",
  "/taller/Taller-2.jpg",
  "/taller/Taller-3.jpg",
  "/taller/Taller-4.jpg",
];

export function TallerSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const currentImage = IMAGES[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  return (
    <section id="taller" className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-10">
      <div className="flex flex-col gap-6 mb-10 border-b border-border pb-6">
        <h2 className="text-section-title">Taller</h2>
        <div className="max-w-4xl space-y-4 text-foreground/90 leading-relaxed text-sm md:text-base">
          <p>
            Junto a la exposición realizamos un taller de Papel pop up, en el que te enseñamos a armar las
            maquetas de las obras seleccionadas en la muestra.
          </p>
          <p>
            Al taller le interesa enseñar y que, a través de un ejercicio lúdico y de aprendizaje, las
            familias se lleven a sus casas obras arquitectónicas realizadas por ellos mismos; una invitación a reflexionar, conversar y a conocer nuestro patrimonio futuro.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <div
          className="et-carousel-container"
          style={{ aspectRatio: "16/9", maxHeight: "80vh" }}
        >
          {/* Fondo desenfocado */}
          <img
            src={currentImage}
            alt=""
            aria-hidden="true"
            className="et-carousel-blur-bg"
          />

          <img
            src={currentImage}
            alt={`Taller foto ${currentImageIndex + 1}`}
            className="et-carousel-img"
          />
          <div className="et-carousel-gradient" />

          {IMAGES.length > 1 && (
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
                {IMAGES.map((_, idx) => (
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
      </div>
    </section>
  );
}
