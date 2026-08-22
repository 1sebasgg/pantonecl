import React, { useState } from "react";

// Tipado para los casos
interface Caso {
  id: number;
  title: string;
  category: string;
  image?: string;
  year?: number;
  location?: string;
}

// Datos de maquetas desde la carpeta public/casos
const MOCK_CASOS: Caso[] = [
  { id: 1, title: "Biblioteca Pública de Constitución", category: "Cultural", image: "/casos/Biblioteca Pública de Constitución.webp", year: 2015, location: "CONSTITUCIÓN, CL" },
  { id: 2, title: "Casa Bahía Azul", category: "Casas", image: "/casos/Casa Bahía Azul.webp", year: 2014, location: "LOS VILOS, CL" },
  { id: 3, title: "Casa Cien", category: "Casas", image: "/casos/Casa Cien.webp", year: 2011, location: "CONCEPCIÓN, CL" },
  { id: 4, title: "Casa Do", category: "Casas", image: "/casos/Casa Do.webp", year: 2018, location: "ZAPALLAR, CL" },
  { id: 5, title: "Casa Gago", category: "Casas", image: "/casos/Casa Gago.webp", year: 2020, location: "RANCAGUA, CL" },
  { id: 6, title: "Casa Malalcahuello", category: "Casas", image: "/casos/Casa Malalcahuello.webp", year: 2021, location: "MALALCAHUELLO, CL" },
  { id: 7, title: "Casa Oruga", category: "Casas", image: "/casos/Casa Oruga.webp", year: 2012, location: "LO BARNECHEA, CL" },
  { id: 8, title: "Casa Prisma", category: "Casas", image: "/casos/Casa Prisma.webp", year: 2022, location: "PUCON, CL" },
  { id: 9, title: "Casa de Vidrio", category: "Casas", image: "/casos/Casa de Vidrio.webp", year: 2019, location: "SANTIAGO, CL" },
  { id: 10, title: "Casa el Cóndor", category: "Casas", image: "/casos/Casa el Cóndor.webp", year: 2023, location: "SANTIAGO, CL" },
  { id: 11, title: "Centro Cultural Matucana 100", category: "Cultural", image: "/casos/Centro Cultural Matucana 100.webp", year: 2010, location: "SANTIAGO, CL" },
  { id: 12, title: "Centro de Innovación Inés", category: "Institucional", image: "/casos/Centro de Innovación Inés.webp", year: 2021, location: "CONCEPCIÓN, CL" },
  { id: 13, title: "Centro de innovación UC", category: "Institucional", image: "/casos/Centro de innovación UC.webp", year: 2014, location: "SANTIAGO, CL" },
  { id: 14, title: "Duoc Eliodoro Yañez", category: "Institucional", image: "/casos/Duoc Eliodoro Yañez.webp", year: 2008, location: "SANTIAGO, CL" },
  { id: 15, title: "Edificio BCI", category: "Edificios", image: "/casos/Edificio BCI.webp", year: 2016, location: "SANTIAGO, CL" },
  { id: 16, title: "Edificio Banmédica", category: "Edificios", image: "/casos/Edificio Banmédica.webp", year: 2005, location: "SANTIAGO, CL" },
  { id: 17, title: "Edificio Consorcio", category: "Edificios", image: "/casos/Edificio Consorcio.webp", year: 1993, location: "SANTIAGO, CL" },
  { id: 18, title: "Edificio Cruz del Sur", category: "Edificios", image: "/casos/Edificio Cruz del Sur.webp", year: 2009, location: "SANTIAGO, CL" },
  { id: 19, title: "Explora Patagonia", category: "Hotel", image: "/casos/Explora Patagonia.webp", year: 1993, location: "TORRES DEL PAINE, CL" },
  { id: 20, title: "Pabellón Exposición de Sevilla", category: "Cultural", image: "/casos/Pabellón Exposición de Sevilla.webp", year: 1992, location: "SEVILLA, ES" },
  { id: 21, title: "Parque cultural de Valparaíso", category: "Cultural", image: "/casos/Parque cultural de Valparaíso.webp", year: 2011, location: "VALPARAÍSO, CL" },
  { id: 22, title: "Teatro Municipal de Constitución", category: "Cultural", image: "/casos/Teatro Municipal de Constitución.webp", year: 2015, location: "CONSTITUCIÓN, CL" },
  { id: 23, title: "Torres Siamesas", category: "Edificios", image: "/casos/Torres Siamesas.webp", year: 2005, location: "SANTIAGO, CL" },
];

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
