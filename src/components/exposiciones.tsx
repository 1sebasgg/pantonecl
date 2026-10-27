import React, { useEffect, useState } from "react";

import { useCarouselSwipe } from "./useCarouselSwipe";
import "./styles/exposiciones.css";

import { TIMELINE as timeline } from "@/data/timeline";
export function ExposicionesTimeline() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Estados para swipe táctil (línea de tiempo)
  const [timelineTouchStart, setTimelineTouchStart] = useState<number | null>(null);
  const [timelineTouchEnd, setTimelineTouchEnd] = useState<number | null>(null);

  const activeNode = timeline[activeIndex];
  const activeImages = activeNode?.images ?? [];

  const swipe = useCarouselSwipe({
    count: activeImages.length,
    index: currentImageIndex,
    setIndex: setCurrentImageIndex,
  });

  const handleNodeClick = (idx: number) => {
    setActiveIndex(idx);
    setCurrentImageIndex(0); // Reiniciar al cambiar de año
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? activeImages.length - 1 : prev - 1));
  };

  const handleScrollRail = (direction: number) => {
    const newIdx = activeIndex + direction;
    if (newIdx >= 0 && newIdx < timeline.length && !timeline[newIdx].disabled) {
      handleNodeClick(newIdx);
    }
  };

  // Manejadores de Swipe para la Línea de Tiempo (Móvil)
  const minSwipeDistance = 50;
  const onTouchStartTimeline = (e: React.TouchEvent) => {
    setTimelineTouchEnd(null);
    setTimelineTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveTimeline = (e: React.TouchEvent) => {
    setTimelineTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndTimeline = () => {
    if (!timelineTouchStart || !timelineTouchEnd) return;
    const distance = timelineTouchStart - timelineTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleScrollRail(1);
    }
    if (isRightSwipe) {
      handleScrollRail(-1);
    }
  };

  const getVisibleNodes = () => {
    // Ya no filtramos los nodos, mostramos todos más los fantasmas al inicio y al final
    return timeline;
  };

  return (
    <section
      id="exposiciones-timeline"
      className="et-section mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-10"
      aria-label="Exposiciones — línea de tiempo interactiva"
    >
      <div className="et-inner">
        <h2 className="mt-4 text-section-title">Exposiciones</h2>
        <p className="text-lede mt-6 max-w-4xl">
          Un recorrido cronológico por las muestras que hemos curado y producido.
        </p>

        <div className="et-grid">
          {/* Columna Izquierda: Riel de navegación de 3 Nodos */}
          <nav className="et-rail" aria-label="Selecciona una exposición">
            <div className="et-rail-header">
              <span className="et-rail-label">Explorar</span>
              <div className="et-rail-arrows">
                <button
                  type="button"
                  className="et-rail-arrow"
                  onClick={() => handleScrollRail(-1)}
                  aria-label="Anterior"
                  disabled={activeIndex === 0 || timeline[activeIndex - 1]?.disabled}
                  style={{
                    opacity: activeIndex === 0 || timeline[activeIndex - 1]?.disabled ? 0.3 : 1,
                    cursor: activeIndex === 0 || timeline[activeIndex - 1]?.disabled ? "default" : "pointer",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
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
                  type="button"
                  className="et-rail-arrow"
                  onClick={() => handleScrollRail(1)}
                  aria-label="Siguiente"
                  disabled={activeIndex === timeline.length - 1 || timeline[activeIndex + 1]?.disabled}
                  style={{
                    opacity: activeIndex === timeline.length - 1 || timeline[activeIndex + 1]?.disabled ? 0.3 : 1,
                    cursor: activeIndex === timeline.length - 1 || timeline[activeIndex + 1]?.disabled ? "default" : "pointer",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
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
              </div>
            </div>
            <div
              className="et-track-window"
              style={
                {
                  "--timeline-length": timeline.length,
                  "--translate-idx": activeIndex,
                } as React.CSSProperties
              }
              onTouchStart={onTouchStartTimeline}
              onTouchMove={onTouchMoveTimeline}
              onTouchEnd={onTouchEndTimeline}
            >
              <div className="et-track-inner">
                <div className="et-track-bg" />
                <div className="et-track-fill" />

                {/* Fantasma Inicial */}
                <div className="et-slot" />

                {/* Nodos Reales */}
                {timeline.map((item, idx) => (
                  <div key={idx} className="et-slot">
                    <button
                      type="button"
                      className={`et-node${idx === activeIndex ? " is-active" : ""}${idx < activeIndex ? " is-completed" : ""}`}
                      onClick={() => handleNodeClick(idx)}
                      aria-current={idx === activeIndex ? "true" : undefined}
                      disabled={item.disabled}
                      style={item.disabled ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
                    >
                      <span className="et-node-year">{item.year}</span>
                      <span className="et-node-title">{item.title}</span>
                    </button>
                  </div>
                ))}

                {/* Fantasma Final */}
                <div className="et-slot" />
              </div>
            </div>
          </nav>

          {/* Columna Derecha: Información y Carrusel */}
          <div className="et-content-area">
            <div className="et-info-header">
              <h2 className="et-info-title">{activeNode.title}</h2>
              <p className="et-info-place">
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "0.1em", verticalAlign: "-2px", flexShrink: 0 }}
                >
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                {activeNode.place}
              </p>
              {activeNode.text && (
                <p
                  className="et-info-text"
                  dangerouslySetInnerHTML={{ __html: activeNode.text }}
                />
              )}
            </div>

            {/* Carrusel */}
            <div
              className={`et-carousel-container${isMobile ? " is-portrait" : ""}`}
              {...swipe.handlers}
            >
              <div
                className={`et-carousel-track${swipe.dragging ? " is-dragging" : ""}`}
                style={{ "--slide-index": currentImageIndex, "--drag-x": `${swipe.dragX}px` } as React.CSSProperties}
              >
                {activeImages.map((img) => (
                  <div className="et-carousel-slide" key={img.src}>
                    <img src={img.src} alt="" aria-hidden="true" className="et-carousel-blur-bg" loading="eager" decoding="async" draggable={false} />
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="et-carousel-img"
                      loading="eager"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
              <div className="et-carousel-gradient" />
              {activeImages.length > 1 && (
                <div className="et-counter" aria-live="polite">
                  {currentImageIndex + 1}/{activeImages.length}
                </div>
              )}

              {activeImages.length > 1 && (
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
                    {activeImages.map((_, idx) => (
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
              <p className="et-desc-text">
                {activeNode.imagesDescription || "Sin descripción disponible."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExposicionesTimeline;
