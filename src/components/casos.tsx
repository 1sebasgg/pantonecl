import { ImagePlus } from "lucide-react";

export function Casos() {
  // Slots vacíos para futuras maquetas / planos.
  const slots = [1, 2, 3];

  return (
    <section id="casos" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Casos
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Espacio reservado para cargar planos y maquetas de próximos casos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {slots.map((n) => (
          <div
            key={n}
            className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-md border border-dashed border-border bg-secondary/30 text-muted-foreground"
          >
            <ImagePlus className="h-6 w-6" />
            <p className="text-xs uppercase tracking-[0.22em]">Caso {n}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
