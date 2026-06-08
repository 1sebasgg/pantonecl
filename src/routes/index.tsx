import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";

import { ProjectCard, type Project } from "@/components/project-card";
import maquetaAsset from "@/assets/maqueta.jpg.asset.json";
import fondoAsset from "@/assets/fondo.jpg.asset.json";
import proyecto5Asset from "@/assets/proyecto-5.jpg.asset.json";
import proyecto4Asset from "@/assets/proyecto-4.jpg.asset.json";
import proyecto3Asset from "@/assets/proyecto-3.jpg.asset.json";
import proyecto1Asset from "@/assets/proyecto-1.jpg.asset.json";

const buildingImage = fondoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier — Portafolio de arquitectura moderna" },
      {
        name: "description",
        content:
          "Portafolio visual de proyectos de arquitectura moderna: casas, edificios, pabellones y museos con sus arquitectos y detalles.",
      },
      { property: "og:title", content: "Atelier — Portafolio de arquitectura" },
      {
        property: "og:description",
        content: "Una colección visual de proyectos de arquitectura moderna y sus detalles.",
      },
      { property: "og:image", content: buildingImage },
      { name: "twitter:image", content: buildingImage },
    ],
  }),
  component: Portfolio,
});

const projects: Project[] = [
  {
    title: "Casa para el Poema del Ángulo Recto",
    architect: "Smiljan Radic",
    location: "Vilches, CL",
    year: "2013",
    area: "240 m²",
    type: "Refugio experimental",
    description:
      "Una obra concebida desde la maqueta como pieza escultórica. El volumen quebrado en ángulos rectos juega con la luz y la sombra, traduciendo un poema en arquitectura habitable enclavada en el paisaje.",
    image: maquetaAsset.url,
  },
  {
    title: "Casa Acantilado",
    architect: "Diego Núñez",
    location: "Costa Brava, ES",
    year: "2025",
    area: "560 m²",
    type: "Residencia frente al mar",
    description:
      "Volúmenes en voladizo que se proyectan sobre el océano. La estructura de hormigón visto se ancla a la roca y enmarca el horizonte desde cada habitación al atardecer.",
    image: cliffImage,
  },
  {
    title: "Edificio Terrazas",
    architect: "Lucía Fenoll",
    location: "Ciudad de México, MX",
    year: "2026",
    area: "12.400 m²",
    type: "Vivienda colectiva",
    description:
      "Un bloque residencial con balcones escalonados y jardines colgantes. La fachada rítmica crea sombra natural y dota a cada vivienda de un espacio exterior verde.",
    image: urbanImage,
  },
  {
    title: "Pabellón del Bosque",
    architect: "Iván Soto",
    location: "Patagonia, CL",
    year: "2024",
    area: "180 m²",
    type: "Espacio cultural",
    description:
      "Un pabellón de madera y hormigón inspirado en la arquitectura japonesa. El espejo de agua frontal duplica el paisaje y guía el recorrido hacia el interior iluminado.",
    image: pavilionImage,
  },
  {
    title: "Museo Ola",
    architect: "Clara Ponce",
    location: "Lisboa, PT",
    year: "2028",
    area: "9.800 m²",
    type: "Museo de arte",
    description:
      "Una pieza escultórica de curvas blancas que dialoga con la plaza pública. La cubierta ondulante crea recorridos fluidos y luz cenital en las salas de exposición.",
    image: museumImage,
  },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <img
          src={buildingImage}
          alt="Edificio de arquitectura moderna en hormigón y cristal"
          width={1024}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/80">
            Atelier · Estudio de arquitectura
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-primary-foreground md:text-7xl">
            Espacios que enmarcan el paisaje
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            Una colección de proyectos de arquitectura moderna. Desplázate para
            recorrer cada edificio, su arquitecto y sus detalles.
          </p>
          <a
            href="#proyectos"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Ver proyectos
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { value: "5", label: "Proyectos" },
            { value: "12", label: "Premios" },
            { value: "18", label: "Años de estudio" },
            { value: "9", label: "Países" },
          ].map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Proyectos
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Cada obra responde a su lugar. Haz clic en “Ver detalles” para conocer
            el concepto de cada edificio.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-12 md:px-10">
          <p className="font-display text-2xl font-semibold">Atelier</p>
          <p className="text-sm text-muted-foreground">
            Estudio de arquitectura moderna · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
