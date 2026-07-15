import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/estudio")({
  head: () => ({
    meta: [
      { title: "Quiénes somos — PANTONE" },
      {
        name: "description",
        content:
          "",
      },
      { property: "og:title", content: "Quiénes somos — PANTONE" },
      {
        property: "og:description",
        content: "",
      },
    ],
  }),
  component: EstudioPage,
});

function EstudioPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-40 md:px-10 md:pt-48">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Estudio</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
          Quiénes somos
        </h1>

      </section>

      <SiteFooter />
    </main>
  );
}
