import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Cpu, Database, HardDrive, Server } from "lucide-react"
import { cn } from "@/lib/utils"

interface SystemHealthProps {
  className?: string
}

export function SystemHealth({ className }: SystemHealthProps) {
  const systems = [
    {
      name: "Firewall",
      icon: Server,
      status: "operational",
      metric: "99.9% uptime",
    },
    {
      name: "Database",
      icon: Database,
      status: "operational",
      metric: "28ms response",
    },
    {
      name: "CPU Usage",
      icon: Cpu,
      status: "warning",
      metric: "78% utilized",
    },
    {
      name: "Storage",
      icon: HardDrive,
      status: "operational",
      metric: "42% used",
    },
  ]

  return (
    <Card className={cn("border-none shadow-md bg-gradient-to-br from-slate-900 to-slate-800", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
          <Activity className="h-5 w-5 text-emerald-400" />
          System Health
        </CardTitle>
        <CardDescription className="text-slate-400">Status of critical infrastructure components</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {systems.map((system) => (
            <div key={system.name} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  system.status === "operational" && "bg-green-900/20",
                  system.status === "warning" && "bg-yellow-900/20",
                  system.status === "critical" && "bg-red-900/20",
                )}
              >
                <system.icon
                  className={cn(
                    "h-5 w-5",
                    system.status === "operational" && "text-green-500",
                    system.status === "warning" && "text-yellow-500",
                    system.status === "critical" && "text-red-500",
                  )}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">{system.name}</p>
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full",
                      system.status === "operational" && "bg-green-500",
                      system.status === "warning" && "bg-yellow-500",
                      system.status === "critical" && "bg-red-500",
                    )}
                  />
                </div>
                <p className="text-xs text-slate-400">{system.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

