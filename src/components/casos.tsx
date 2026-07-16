import React, { useState } from "react";

// Tipado para los casos
interface Caso {
  id: number;
  title: string;
  category: string;
}

// Datos de prueba expandidos para probar el botón "Cargar más"
const MOCK_CASOS: Caso[] = [
  { id: 1, title: "CASO 1", category: "Casas" },
  { id: 2, title: "CASO 2", category: "Edificios" },
  { id: 3, title: "CASO 3", category: "Restaurants" },
  { id: 4, title: "CASO 4", category: "Casas" },
  { id: 5, title: "CASO 5", category: "Edificios" },
  { id: 6, title: "CASO 6", category: "Restaurants" },
];

const FILTERS = ["Todos", "Casas", "Edificios", "Restaurants"];

export function CasosSection() {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");
  const [visibleCount, setVisibleCount] = useState<number>(3); // Empezamos mostrando 3

  // Función para cambiar de filtro y resetear el contador de visibles
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(3); // Al cambiar de categoría, volvemos a mostrar solo 3
  };

  // Filtrar los casos según la categoría activa
  const filteredCasos =
    activeFilter === "Todos"
      ? MOCK_CASOS
      : MOCK_CASOS.filter((c) => c.category.toLowerCase() === activeFilter.toLowerCase());

  // Seleccionar solo la cantidad de casos visibles
  const visibleCasos = filteredCasos.slice(0, visibleCount);

  return (
    <section id="casos" className="py-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-gray-200 pb-4 mb-10 gap-6">
        {/* Lado Izquierdo */}
        <div className="flex items-baseline gap-4">
          <h2 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">Casos</h2>
          <span className="text-[10px] md:text-xs tracking-[0.15em] text-gray-400 uppercase font-semibold">
            {filteredCasos.length} Maquetas
          </span>
        </div>

        {/* Lado Derecho: Filtros */}
        <div className="flex flex-wrap items-center gap-5 md:gap-8">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`text-xs tracking-[0.1em] uppercase font-medium transition-colors ${
                activeFilter === filter
                  ? "text-gray-900 border-b border-gray-900 pb-1"
                  : "text-gray-400 hover:text-gray-700 pb-1"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grilla de Placeholders usando visibleCasos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleCasos.map((caso) => (
          <div
            key={caso.id}
            className="group flex flex-col items-center justify-center p-8 aspect-[4/3] border border-dashed border-gray-300 bg-[#F9F9F9] hover:bg-[#F3F3F3] transition-colors cursor-pointer"
          >
            <svg
              className="w-8 h-8 text-gray-400 mb-3 group-hover:scale-110 transition-transform duration-300"
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
            <span className="text-xs tracking-widest text-gray-500 uppercase font-medium">
              {caso.title}
            </span>
            <span className="text-[10px] tracking-wider text-gray-400 uppercase mt-2">
              {caso.category}
            </span>
          </div>
        ))}

        {filteredCasos.length === 0 && (
          <div className="col-span-full py-16 text-center text-gray-400 text-sm">
            Aún no hay maquetas cargadas para esta categoría.
          </div>
        )}
      </div>

      {/* Botón Cargar Más (Se oculta si ya se muestran todos los elementos) */}
      {visibleCount < filteredCasos.length && (
        <div className="mt-16 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-xs tracking-[0.15em] uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            Cargar más
          </button>
        </div>
      )}
    </section>
  );
}
