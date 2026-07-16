export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <p className="text-xs uppercase tracking-[0.28em] text-accent">Estudio</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
        Quiénes somos
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
        PANTONE es un estudio de arquitectura y curaduría fundado en Santiago. Trabajamos entre la
        investigación, la exposición y la práctica construida, con especial atención a la escala de
        la maqueta como herramienta de pensamiento.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {[
          {
            t: "Curaduría",
            d: "Organizamos exposiciones y publicaciones sobre arquitectura contemporánea chilena y latinoamericana.",
          },
          {
            t: "Visualización",
            d: "Producimos maquetas, imágenes y recorridos que traducen ideas complejas en piezas legibles.",
          },
          {
            t: "Desarrollo",
            d: "Acompañamos a otros estudios en el desarrollo técnico y comunicacional de sus proyectos.",
          },
        ].map((b) => (
          <div key={b.t}>
            <p className="font-display text-xl font-semibold">{b.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
