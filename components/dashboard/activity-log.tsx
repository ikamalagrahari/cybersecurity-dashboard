import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Download, FileText, LogIn, Shield, User, UserX } from "lucide-react"
import { cn } from "@/lib/utils"

interface ActivityLogProps {
  className?: string
}

export function ActivityLog({ className }: ActivityLogProps) {
  const activities = [
    {
      id: 1,
      user: "admin@company.com",
      action: "login",
      details: "Successful login from 192.168.1.1",
      time: "13:45:22",
      icon: LogIn,
    },
    {
      id: 2,
      user: "john.doe@company.com",
      action: "file_access",
      details: "Accessed sensitive financial documents",
      time: "13:30:15",
      icon: FileText,
    },
    {
      id: 3,
      user: "system",
      action: "security_update",
      details: "Applied security patch KB4023057",
      time: "13:15:00",
      icon: Shield,
    },
    {
      id: 4,
      user: "jane.smith@company.com",
      action: "download",
      details: "Downloaded customer database backup",
      time: "12:42:37",
      icon: Download,
    },
    {
      id: 5,
      user: "security@company.com",
      action: "user_blocked",
      details: "Blocked user mark@external.com after multiple failed attempts",
      time: "12:30:05",
      icon: UserX,
    },
  ]

  return (
    <Card className={cn("border-none shadow-md bg-gradient-to-br from-slate-900 to-slate-800", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-400" />
          Activity Log
        </CardTitle>
        <CardDescription className="text-slate-400">Recent security-related activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3 rounded-lg bg-slate-800/50 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700">
                <activity.icon className="h-4 w-4 text-slate-300" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-sm font-medium text-white">{activity.user}</span>
                    </div>
                    <p className="text-sm text-slate-300">{activity.details}</p>
                  </div>
                  <span className="text-xs text-slate-500">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

