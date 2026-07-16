import { ArrowDown } from "lucide-react";
import { assetUrl } from "@/lib/asset-url";
import fondoAsset from "@/assets/fondo.jpg.asset.json";

export function Hero() {
  const buildingImage = assetUrl(fondoAsset.url);

  return (
    <section id="hero" className="relative flex min-h-[88vh] items-end overflow-hidden">
      <img
        src={buildingImage}
        alt="Edificio de arquitectura moderna en hormigón y cristal"
        width={1024}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-primary-foreground md:text-8xl">
          PANTONE
        </h1>
        <p className="mt-4 max-w-3xl font-serif italic text-5xl leading-[1.05] tracking-tight text-primary-foreground md:text-6xl">
          Nuestro patrimonio futuro
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85">
          La memoria.
        </p>
        <a
          href="#proyectos"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Ver Exposiciones
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
