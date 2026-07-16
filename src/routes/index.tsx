import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { assetUrl } from "@/lib/asset-url";

import fondoAsset from "@/assets/fondo.jpg.asset.json";

import { Hero } from "@/components/hero.tsx";
import { Proyectos } from "@/components/proyectos.tsx";
import { Casos } from "@/components/casos.tsx";

const buildingImage = assetUrl(fondoAsset.url);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PANTONE — Nuestro patrimonio futuro" },
      {
        name: "description",
        content:
          "PANTONE. Exposiciones y casos de arquitectura contemporánea.",
      },
      { property: "og:title", content: "PANTONE" },
      {
        property: "og:description",
        content: "Nuestro patrimonio futuro.",
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
      <Proyectos />
      <Casos />
      <SiteFooter />
    </main>
  );
}
