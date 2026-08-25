import React, { useState } from "react";

import { MOCK_CASOS } from "../data/casos";

const FILTERS = ["Todos", "Casas", "Edificios", "Cultural", "Institucional", "Hotel"];

export function CasosSection() {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");
  const [visibleCount, setVisibleCount] = useState<number>(8);

  // Función para cambiar de filtro y resetear el contador de visibles
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(8); // Al cambiar de categoría, volvemos a mostrar 8
  };

  // Filtrar los casos según la categoría activa
  const filteredCasos =
    activeFilter === "Todos"
      ? MOCK_CASOS
      : MOCK_CASOS.filter((c) => c.category.toLowerCase() === activeFilter.toLowerCase());

  // Seleccionar solo la cantidad de casos visibles
  const visibleCasos = filteredCasos.slice(0, visibleCount);

  return (
    <section id="casos" className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-border pb-4 mb-10 gap-6">
        {/* Lado Izquierdo */}
        <div className="flex items-baseline gap-4">
          <h2 className="mt-4 text-section-title">Casos</h2>
          <span className="text-[10px] md:text-xs tracking-[0.15em] text-muted-foreground uppercase font-semibold">
            {filteredCasos.length} Maquetas
          </span>
        </div>

        {/* Lado Derecho: Filtros */}
        <div className="flex flex-wrap items-center gap-5 md:gap-8">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`text-xs tracking-[0.1em] uppercase font-medium transition-colors ${activeFilter === filter
                ? "text-foreground border-b border-foreground pb-1"
                : "text-muted-foreground hover:text-foreground pb-1"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grilla de Placeholders usando visibleCasos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleCasos.map((caso) => (
          <div
            key={caso.id}
            className="group flex flex-col cursor-pointer gap-4"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-muted/10">
              {caso.image ? (
                <img
                  src={caso.image}
                  alt={caso.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-muted-foreground group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1.5 px-1">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-lg md:text-xl font-medium text-foreground leading-tight">{caso.title}</h3>
                <span className="text-muted-foreground text-sm shrink-0 pt-0.5">{caso.year || "2024"}</span>
              </div>
              <span className="text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
                {caso.location || "SANTIAGO, CL"}
              </span>
            </div>
          </div>
        ))}

        {filteredCasos.length === 0 && (
          <div className="col-span-full py-16 text-center text-muted-foreground text-sm">
            Aún no hay maquetas cargadas para esta categoría.
          </div>
        )}
      </div>

      {/* Botón Cargar Más (Se oculta si ya se muestran todos los elementos) */}
      {visibleCount < filteredCasos.length && (
        <div className="mt-16 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="inline-block border border-foreground text-foreground px-8 py-3 text-xs tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Cargar más
          </button>
        </div>
      )}
    </section>
  );
}
