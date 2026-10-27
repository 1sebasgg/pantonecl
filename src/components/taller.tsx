import React, { useEffect, useState } from "react";
import { useCarouselSwipe } from "@/components/useCarouselSwipe";
import "@/components/styles/exposiciones.css";

const IMAGES = [
  "/taller/Taller-1.jpg",
  "/taller/Taller-2.jpg",
  "/taller/Taller-3.jpg",
  "/taller/Taller-4.jpg",
];

export function TallerSection() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const swipe = useCarouselSwipe({
    count: IMAGES.length,
    index: currentImageIndex,
    setIndex: setCurrentImageIndex,
  });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  return (
    <section id="taller" className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-10">
      <div className="flex flex-col gap-6 mb-10 border-b border-border pb-6">
        <h2 className="mt-4 text-section-title">Taller</h2>
        <div className="space-y-4">
          <p className="text-lede mt-6 max-w-4xl">
            Junto a la exposición realizamos un taller de Papel pop up, en el que te enseñamos a armar las
            maquetas de las obras seleccionadas en la muestra.
          </p>
          <p className="text-lede max-w-4xl">
            Al taller le interesa enseñar y que, a través de un ejercicio lúdico y de aprendizaje, las
            familias se lleven a sus casas obras arquitectónicas realizadas por ellos mismos; una invitación a reflexionar, conversar y a conocer nuestro patrimonio futuro.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <div
          className={`et-carousel-container${isMobile ? " is-portrait" : ""}`}
          style={isMobile ? { maxHeight: "80vh" } : { aspectRatio: "16/9", maxHeight: "80vh" }}
          {...swipe.handlers}
        >
          <div
            className={`et-carousel-track${swipe.dragging ? " is-dragging" : ""}`}
            style={{ "--slide-index": currentImageIndex, "--drag-x": `${swipe.dragX}px` } as React.CSSProperties}
          >
            {IMAGES.map((src, idx) => (
              <div className="et-carousel-slide" key={src}>
                <img src={src} alt="" aria-hidden="true" className="et-carousel-blur-bg" loading="eager" decoding="async" draggable={false} />
                <img
                  src={src}
                  alt={`Taller foto ${idx + 1}`}
                  className="et-carousel-img"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div className="et-carousel-gradient" />
          {IMAGES.length > 1 && (
            <div className="et-counter" aria-live="polite">
              {currentImageIndex + 1}/{IMAGES.length}
            </div>
          )}

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
