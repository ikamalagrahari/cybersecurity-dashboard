import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

interface RecentThreatsProps {
  className?: string
}

export function RecentThreats({ className }: RecentThreatsProps) {
  const threats = [
    {
      id: 1,
      type: "Brute Force",
      source: "45.123.45.67",
      target: "Authentication API",
      time: "12:42:30",
      status: "blocked",
      country: "Unknown",
    },
    {
      id: 2,
      type: "SQL Injection",
      source: "192.168.1.105",
      target: "User Database",
      time: "11:37:15",
      status: "blocked",
      country: "Internal",
    },
    {
      id: 3,
      type: "XSS Attack",
      source: "87.234.56.78",
      target: "Web Application",
      time: "10:15:22",
      status: "investigating",
      country: "Russia",
    },
    {
      id: 4,
      type: "DDoS Attempt",
      source: "Multiple",
      target: "Main Website",
      time: "09:03:47",
      status: "mitigated",
      country: "Various",
    },
  ]

  return (
    <Card className={cn("border-none shadow-md bg-gradient-to-br from-slate-900 to-slate-800", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-400" />
          Recent Threats
        </CardTitle>
        <CardDescription className="text-slate-400">Security threats detected in the last 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg bg-slate-800/50 p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="pb-3 text-xs font-medium text-slate-400">Type</th>
                  <th className="pb-3 text-xs font-medium text-slate-400">Source</th>
                  <th className="pb-3 text-xs font-medium text-slate-400">Target</th>
                  <th className="pb-3 text-xs font-medium text-slate-400">Time</th>
                  <th className="pb-3 text-xs font-medium text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {threats.map((threat) => (
                  <tr key={threat.id} className="border-b border-slate-700/50">
                    <td className="py-3 text-sm text-white">{threat.type}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-sm text-slate-300">{threat.source}</span>
                      </div>
                      <span className="text-xs text-slate-500">{threat.country}</span>
                    </td>
                    <td className="py-3 text-sm text-slate-300">{threat.target}</td>
                    <td className="py-3 text-sm text-slate-400">{threat.time}</td>
                    <td className="py-3">
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-xs font-medium",
                          threat.status === "blocked" && "border-green-500 text-green-500",
                          threat.status === "investigating" && "border-yellow-500 text-yellow-500",
                          threat.status === "mitigated" && "border-blue-500 text-blue-500",
                        )}
                      >
                        {threat.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

