import React, { useRef, useState } from "react";

interface Options {
  count: number;
  index: number;
  setIndex: (i: number) => void;
}

/**
 * Swipe táctil donde la imagen sigue al dedo.
 * Devuelve los handlers para el contenedor, el desplazamiento actual en px
 * y si se está arrastrando (para desactivar la transición CSS).
 */
export function useCarouselSwipe({ count, index, setIndex }: Options) {
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const start = useRef<{ x: number; y: number; width: number } | null>(null);
  const axis = useRef<"x" | "y" | null>(null);

  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    const t = e.targetTouches[0];
    start.current = { x: t.clientX, y: t.clientY, width: e.currentTarget.clientWidth };
    axis.current = null;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!start.current) return;
    const t = e.targetTouches[0];
    const dx = t.clientX - start.current.x;
    const dy = t.clientY - start.current.y;

    if (!axis.current) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axis.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    }
    if (axis.current !== "x") return;

    // Resistencia en los extremos
    const atStart = index === 0 && dx > 0;
    const atEnd = index === count - 1 && dx < 0;
    setDragging(true);
    setDragX(atStart || atEnd ? dx * 0.3 : dx);
  };

  const onTouchEnd = () => {
    if (start.current && axis.current === "x") {
      const threshold = Math.min(80, start.current.width * 0.2);
      if (dragX < -threshold && index < count - 1) setIndex(index + 1);
      else if (dragX > threshold && index > 0) setIndex(index - 1);
    }
    start.current = null;
    axis.current = null;
    setDragging(false);
    setDragX(0);
  };

  return {
    handlers: { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel: onTouchEnd },
    dragX,
    dragging,
  };
}
