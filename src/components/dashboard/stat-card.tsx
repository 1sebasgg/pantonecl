import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  icon: LucideIcon;
}

export function StatCard({ label, value, delta, icon: Icon }: StatCardProps) {
  return (
    <Card className="flex flex-col gap-3 p-5 shadow-[var(--shadow-soft)] transition-colors hover:border-accent/40">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-foreground">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="font-display text-3xl font-semibold tracking-tight">{value}</span>
        {delta && (
          <span className="flex items-center gap-0.5 text-xs font-medium text-accent">
            <ArrowUpRight className="h-3 w-3" />
            {delta}
          </span>
        )}
      </div>
    </Card>
  );
}
