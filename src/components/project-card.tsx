import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

export interface Project {
  title: string;
  architect: string;
  location: string;
  year: string;
  area: string;
  type: string;
  description: string;
  image: string;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const reversed = index % 2 === 1;

  return (
    <article
      className={`group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
        reversed ? "md:[direction:rtl]" : ""
      }`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] [direction:ltr]">
        <img
          src={project.image}
          alt={`${project.title} — proyecto de ${project.architect}`}
          width={1280}
          height={1024}
          loading="lazy"
          className="aspect-[5/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="[direction:ltr]">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Proyecto {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {project.location}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-5">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Arquitecto</dt>
            <dd className="mt-1 font-medium">{project.architect}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Año</dt>
            <dd className="mt-1 font-medium">{project.year}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Superficie</dt>
            <dd className="mt-1 font-medium">{project.area}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Tipología</dt>
            <dd className="mt-1 font-medium">{project.type}</dd>
          </div>
        </dl>

        <div
          className={`grid transition-all duration-500 ease-out ${
            open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-70"
        >
          {open ? "Ocultar detalles" : "Ver detalles"}
          <ArrowUpRight
            className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`}
          />
        </button>
      </div>
    </article>
  );
}
