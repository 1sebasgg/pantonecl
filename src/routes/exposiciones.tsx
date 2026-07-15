import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/exposiciones")({
  head: () => ({
    meta: [
      { title: "Exposiciones — PANTONE" },
      {
        name: "description",
        content:
          "Línea de tiempo de exposiciones curadas y producidas por el estudio PANTONE.",
      },
      { property: "og:title", content: "Exposiciones — PANTONE" },
      {
        property: "og:description",
        content: "Recorrido cronológico por nuestras exposiciones.",
      },
    ],
  }),
  component: ExposicionesPage,
});

const timeline = [
  {
    year: "2025",
    title: "Sala de Maquetas",
    place: "Palacio Pereira, Santiago",
    text: "Muestra colectiva que reúne más de cien maquetas de arquitectura chilena contemporánea sobre el parquet del salón histórico.",
  },
  {
    year: "2024",
    title: "Atacama · Territorio y memoria",
    place: "Museo Regional de Atacama, Copiapó",
    text: "Curaduría en torno a la obra de Max Núñez y su diálogo con el paisaje del desierto.",
  },
  {
    year: "2022",
    title: "Casa-torre",
    place: "Centro Cultural GAM, Santiago",
    text: "Recorrido por la obra de Pezo von Ellrichshausen a través de sus casas verticales.",
  },
  {
    year: "2019",
    title: "El poema del ángulo recto",
    place: "Bienal de Venecia · Pabellón chileno",
    text: "Instalación dedicada a la obra homónima de Smiljan Radic en Vilches.",
  },
  {
    year: "2016",
    title: "Hormigón corporativo",
    place: "Galería CAV, Las Condes",
    text: "Revisión crítica de la arquitectura institucional santiaguina de los años 90.",
  },
];

function ExposicionesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-40 md:px-10 md:pt-48">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">
          Línea de tiempo
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
          Exposiciones
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Un recorrido cronológico por las muestras que hemos curado y
          producido, desde instalaciones internacionales hasta exposiciones
          patrimoniales.
        </p>

        <ol className="mt-16 border-l border-border">
          {timeline.map((item) => (
            <li key={item.year + item.title} className="relative pb-14 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              <p className="font-display text-3xl font-semibold tracking-tight">
                {item.year}
              </p>
              <p className="mt-1 text-lg font-medium">{item.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.place}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <SiteFooter />
    </main>
  );
}
