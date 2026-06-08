import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Compass, MapPin, Ruler, Layers, Trees, Sun } from "lucide-react";

import buildingImage from "@/assets/building-showcase.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Mirador — Ficha del proyecto de arquitectura" },
      {
        name: "description",
        content:
          "Ficha visual de Casa Mirador: arquitecto, ubicación, superficie, materiales y detalles de este proyecto de arquitectura moderno.",
      },
      { property: "og:title", content: "Casa Mirador — Ficha del proyecto" },
      {
        property: "og:description",
        content: "Una vista editorial del proyecto Casa Mirador: arquitecto, materiales y detalles.",
      },
      { property: "og:image", content: buildingImage },
      { name: "twitter:image", content: buildingImage },
    ],
  }),
  component: Showcase,
});

interface DetailItem {
  icon: typeof Ruler;
  label: string;
  value: string;
}

const leftDetails: DetailItem[] = [
  { icon: Compass, label: "Arquitecto", value: "Marta Rivas" },
  { icon: MapPin, label: "Ubicación", value: "Valle de Bravo, MX" },
  { icon: Layers, label: "Tipología", value: "Vivienda unifamiliar" },
];

const rightDetails: DetailItem[] = [
  { icon: Ruler, label: "Superficie", value: "420 m²" },
  { icon: Sun, label: "Año", value: "2027" },
  { icon: Trees, label: "Entorno", value: "Bosque templado" },
];

const materials = ["Hormigón visto", "Cristal templado", "Madera de roble", "Acero negro"];

function DetailCard({ icon: Icon, label, value }: DetailItem) {
  return (
    <div className="group flex items-start gap-4 border-b border-border/60 pb-5">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-accent transition-colors group-hover:border-accent">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        <p className="mt-1 font-display text-lg font-medium leading-tight">{value}</p>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16">
        {/* Header */}
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Atelier · Proyecto 014</p>
            <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-7xl">
              Casa Mirador
            </h1>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Una residencia de hormigón y cristal que enmarca el paisaje del valle desde cada estancia.
          </p>
        </header>

        {/* Showcase: info | photo | info */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-10">
          {/* Left info */}
          <aside className="order-2 flex flex-col justify-center gap-5 lg:order-1">
            {leftDetails.map((d) => (
              <DetailCard key={d.label} {...d} />
            ))}
          </aside>

          {/* Center photo */}
          <figure className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <img
                src={buildingImage}
                alt="Render del edificio Casa Mirador en hormigón y cristal rodeado de vegetación"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                En ejecución
              </span>
            </div>
            <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Fachada sur · Acceso principal
            </figcaption>
          </figure>

          {/* Right info */}
          <aside className="order-3 flex flex-col justify-center gap-5">
            {rightDetails.map((d) => (
              <DetailCard key={d.label} {...d} />
            ))}
          </aside>
        </div>

        {/* Lower band: description + materials */}
        <section className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">El concepto</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Casa Mirador se asienta sobre una plataforma de hormigón que se abre hacia el bosque.
              Los grandes paños de cristal disuelven el límite entre interior y exterior, mientras la
              cubierta plana proyecta sombra y protege las estancias del sol directo. La paleta de
              materiales nobles envejece con el tiempo, integrándose en el paisaje.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-70"
            >
              Ver memoria completa
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Materiales</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {materials.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
