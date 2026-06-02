import { Check } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type PhaseStatus = "done" | "active" | "pending";

interface Phase {
  name: string;
  detail: string;
  status: PhaseStatus;
  progress: number;
}

const phases: Phase[] = [
  { name: "Anteproyecto", detail: "Concepto y estudio de volúmenes", status: "done", progress: 100 },
  { name: "Proyecto básico", detail: "Plantas, secciones y alzados", status: "done", progress: 100 },
  { name: "Proyecto ejecutivo", detail: "Detalles constructivos y memorias", status: "active", progress: 64 },
  { name: "Licitación", detail: "Selección de contratistas", status: "pending", progress: 0 },
  { name: "Obra", detail: "Dirección y ejecución", status: "pending", progress: 0 },
];

const statusDot: Record<PhaseStatus, string> = {
  done: "bg-accent border-accent text-accent-foreground",
  active: "border-accent text-accent",
  pending: "border-border text-muted-foreground",
};

export function PhaseTimeline() {
  return (
    <Card className="p-6 shadow-[var(--shadow-soft)]">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-display text-xl font-semibold">Fases del proyecto</h2>
        <span className="text-sm text-muted-foreground">3 de 5 en curso</span>
      </div>

      <ol className="relative space-y-6">
        {phases.map((phase, i) => (
          <li key={phase.name} className="relative flex gap-4">
            {i < phases.length - 1 && (
              <span className="absolute left-[15px] top-9 h-[calc(100%+0.5rem)] w-px bg-border" />
            )}
            <div
              className={`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-card ${statusDot[phase.status]}`}
            >
              {phase.status === "done" ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className="h-2 w-2 rounded-full bg-current" />
              )}
            </div>
            <div className="flex-1 pb-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">{phase.name}</span>
                <span className="text-xs text-muted-foreground">{phase.progress}%</span>
              </div>
              <p className="text-sm text-muted-foreground">{phase.detail}</p>
              {phase.status === "active" && (
                <Progress value={phase.progress} className="mt-2 h-1.5" />
              )}
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
