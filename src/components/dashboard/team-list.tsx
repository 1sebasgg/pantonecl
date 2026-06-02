import { Card } from "@/components/ui/card";

interface Member {
  name: string;
  role: string;
  initials: string;
}

const team: Member[] = [
  { name: "Marta Rivas", role: "Arquitecta líder", initials: "MR" },
  { name: "Diego Núñez", role: "Diseño estructural", initials: "DN" },
  { name: "Lucía Fenoll", role: "Interiorismo", initials: "LF" },
  { name: "Iván Soto", role: "Modelado BIM", initials: "IS" },
  { name: "Clara Ponce", role: "Paisajismo", initials: "CP" },
];

export function TeamList() {
  return (
    <Card className="p-6 shadow-[var(--shadow-soft)]">
      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="font-display text-xl font-semibold">Equipo</h2>
        <span className="text-sm text-muted-foreground">{team.length} personas</span>
      </div>
      <ul className="space-y-4">
        {team.map((m) => (
          <li key={m.name} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground">
              {m.initials}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-medium">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
