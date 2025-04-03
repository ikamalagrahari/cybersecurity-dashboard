import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface SecurityAlertsProps {
  className?: string
}

export function SecurityAlerts({ className }: SecurityAlertsProps) {
  const alerts = [
    {
      id: 1,
      title: "Unusual Login Attempt",
      description: "Multiple failed login attempts from IP 192.168.1.105",
      severity: "high",
      time: "10 minutes ago",
    },
    {
      id: 2,
      title: "Malware Detected",
      description: "Potential malware detected in file download.exe",
      severity: "critical",
      time: "25 minutes ago",
    },
    {
      id: 3,
      title: "Outdated Software",
      description: "3 applications require security updates",
      severity: "medium",
      time: "1 hour ago",
    },
    {
      id: 4,
      title: "Suspicious Network Activity",
      description: "Unusual outbound traffic detected on port 4444",
      severity: "high",
      time: "2 hours ago",
    },
  ]

  return (
    <Card className={cn("border-none shadow-md bg-gradient-to-br from-slate-900 to-slate-800", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
          <Bell className="h-5 w-5 text-red-400" />
          Security Alerts
        </CardTitle>
        <CardDescription className="text-slate-400">Recent security incidents requiring attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
              <Badge
                variant="outline"
                className={cn(
                  "h-fit py-1 text-xs font-medium",
                  alert.severity === "critical" && "border-red-500 text-red-500",
                  alert.severity === "high" && "border-orange-500 text-orange-500",
                  alert.severity === "medium" && "border-yellow-500 text-yellow-500",
                  alert.severity === "low" && "border-green-500 text-green-500",
                )}
              >
                {alert.severity}
              </Badge>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">{alert.title}</p>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
                </div>
                <p className="text-xs text-slate-400">{alert.description}</p>
                <p className="text-xs text-slate-500">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

