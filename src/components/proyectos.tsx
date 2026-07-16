import { ProjectCard, type Project } from "@/components/project-card";
import { assetUrl } from "@/lib/asset-url";

import maquetaAsset from "@/assets/maqueta.jpg.asset.json";
import proyecto5Asset from "@/assets/proyecto-5.jpg.asset.json";
import proyecto4Asset from "@/assets/proyecto-4.jpg.asset.json";
import proyecto3Asset from "@/assets/proyecto-3.jpg.asset.json";
import proyecto1Asset from "@/assets/proyecto-1.jpg.asset.json";

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
    image: assetUrl(maquetaAsset.url),
  },
  {
    title: "Casa Cien",
    architect: "Pezo von Ellrichshausen",
    location: "Concepción, CL",
    year: "2011",
    area: "180 m²",
    type: "Casa-torre",
    description:
      "Una vivienda vertical de hormigón concebida como una torre habitable. Su volumen compacto y los vanos cuadrados controlan la luz mientras la planta cruciforme organiza la vida doméstica en altura.",
    image: assetUrl(proyecto5Asset.url),
  },
  {
    title: "Edificio Banmédica",
    architect: "Borja Huidobro + A4 Arquitectos",
    location: "Las Condes, CL",
    year: "1996",
    area: "24.000 m²",
    type: "Edificio corporativo",
    description:
      "Un hito de la arquitectura corporativa santiaguina. Su volumen escultórico y la fachada técnica resuelven el programa de oficinas con una imagen institucional rotunda y un perfil reconocible en la ciudad.",
    image: assetUrl(proyecto4Asset.url),
  },
  {
    title: "Museo Regional de Atacama",
    architect: "Max Núñez",
    location: "Copiapó, CL",
    year: "2024",
    area: "4.200 m²",
    type: "Museo regional",
    description:
      "Un museo que dialoga con el paisaje del desierto. Sus volúmenes abiertos y patios protegen del clima extremo mientras articulan recorridos expositivos en torno a la memoria geológica y cultural de Atacama.",
    image: assetUrl(proyecto3Asset.url),
  },
  {
    title: "Sala de Maquetas",
    architect: "Exposición colectiva",
    location: "Santiago, CL",
    year: "2025",
    area: "320 m²",
    type: "Muestra de arquitectura",
    description:
      "Una vista cenital de la muestra: centenares de maquetas de papel desplegadas sobre el parquet del salón histórico. La instalación reúne obras de distintos autores y épocas en un único recorrido a escala.",
    image: assetUrl(proyecto1Asset.url),
  },
];

const timeline = projects.map((p) => ({ year: p.year, title: p.title }));

export function Proyectos() {
  return (
    <section id="exposiciones" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Exposiciones
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Cada obra responde a su lugar. Haz clic en "Ver detalles" para conocer el concepto de cada
          exposición.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-16">
        {/* Línea de tiempo estilo estaciones de metro */}
        <aside className="md:sticky md:top-28 md:self-start">
          <p className="mb-6 text-xs uppercase tracking-[0.28em] text-accent">Línea de tiempo</p>
          <ol className="relative">
            <span
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-border"
            />
            {timeline.map((t) => (
              <li key={t.title} className="relative flex items-start gap-4 pb-8 last:pb-0">
                <span className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-accent bg-background" />
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight">{t.year}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.title}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </aside>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
