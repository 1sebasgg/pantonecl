import { FileCheck, MessageSquare, Ruler, Upload } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

interface Activity {
  icon: LucideIcon;
  text: string;
  time: string;
}

const activity: Activity[] = [
  { icon: Upload, text: "Diego subió la revisión 04 de la cimentación", time: "Hace 2 h" },
  { icon: FileCheck, text: "Aprobada la memoria de instalaciones", time: "Hace 5 h" },
  { icon: Ruler, text: "Actualizadas las cotas del nivel 2", time: "Ayer" },
  { icon: MessageSquare, text: "Comentario del cliente en fachada sur", time: "Ayer" },
];

export function ActivityFeed() {
  return (
    <Card className="p-6 shadow-[var(--shadow-soft)]">
      <h2 className="mb-5 font-display text-xl font-semibold">Actividad reciente</h2>
      <ul className="space-y-4">
        {activity.map((a, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
              <a.icon className="h-4 w-4" />
            </div>
            <div className="leading-snug">
              <p className="text-sm">{a.text}</p>
              <p className="text-xs text-muted-foreground">{a.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
