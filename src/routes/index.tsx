import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { assetUrl } from "@/lib/asset-url";

// Única imagen necesaria en este scope para las etiquetas meta
import fondoAsset from "@/assets/fondo.jpg.asset.json";

// Importaciones del sections folder
import { Hero } from "@/components/hero.tsx";
import { Proyectos } from "@/components/proyectos.tsx";
import { QuienesSomos } from "@/components/quienes-somos.tsx";
import { ExposicionesTimeline } from "@/components/exposiciones.tsx";

const buildingImage = assetUrl(fondoAsset.url);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arquitectura en papel" },
      {
        name: "description",
        content:
          "Portafolio visual de proyectos de arquitectura moderna: casas, edificios, pabellones y museos con sus arquitectos y detalles.",
      },
      { property: "og:title", content: "PANTONE" },
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

function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <QuienesSomos />
      <Proyectos />
      <ExposicionesTimeline />
      <SiteFooter />
    </main>
  );
}
