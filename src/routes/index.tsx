import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Layers, MapPin, Ruler, Wallet } from "lucide-react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/app-sidebar";
import { StatCard } from "@/components/dashboard/stat-card";
import { PhaseTimeline } from "@/components/dashboard/phase-timeline";
import { TeamList } from "@/components/dashboard/team-list";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import heroImage from "@/assets/project-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier — Dashboard de proyecto de arquitectura" },
      {
        name: "description",
        content:
          "Panel para gestionar un proyecto de arquitectura moderno: fases, cronograma, equipo y presupuesto en un solo lugar.",
      },
      { property: "og:title", content: "Atelier — Dashboard de proyecto de arquitectura" },
      {
        property: "og:description",
        content: "Gestiona fases, equipo y presupuesto de tu proyecto de arquitectura moderno.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md">
            <SidebarTrigger />
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Casa Mirador</span>
                <span>/</span>
                <span>Resumen</span>
              </div>
              <Button size="sm" variant="default">
                Nueva tarea
              </Button>
            </div>
          </header>

          <main className="flex-1 space-y-6 p-4 md:p-6">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-xl">
              <img
                src={heroImage}
                alt="Render del proyecto de arquitectura Casa Mirador"
                width={1600}
                height={900}
                className="h-56 w-full object-cover md:h-72"
              />
              <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-hero)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6">
                <div className="text-primary-foreground">
                  <Badge className="mb-3 border-0 bg-accent text-accent-foreground">
                    En ejecución
                  </Badge>
                  <h1 className="font-display text-3xl font-semibold md:text-4xl">
                    Casa Mirador
                  </h1>
                  <p className="mt-1 flex items-center gap-1.5 text-sm opacity-90">
                    <MapPin className="h-4 w-4" />
                    Valle de Bravo, México · Vivienda unifamiliar
                  </p>
                </div>
                <div className="flex gap-6 text-primary-foreground">
                  <div>
                    <p className="text-xs opacity-80">Superficie</p>
                    <p className="font-display text-xl font-semibold">420 m²</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80">Entrega</p>
                    <p className="font-display text-xl font-semibold">Mar 2027</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="Avance global" value="58%" delta="+6%" icon={Layers} />
              <StatCard label="Presupuesto usado" value="$4.2M" delta="vs $7.2M" icon={Wallet} />
              <StatCard label="Días restantes" value="284" icon={CalendarClock} />
              <StatCard label="Planos emitidos" value="142" delta="+12" icon={Ruler} />
            </section>

            {/* Main grid */}
            <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <PhaseTimeline />
              </div>
              <div className="space-y-6">
                <TeamList />
                <ActivityFeed />
              </div>
            </section>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
