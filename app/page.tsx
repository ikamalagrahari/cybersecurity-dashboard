import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { SecurityOverview } from "@/components/dashboard/security-overview"
import { RecentThreats } from "@/components/dashboard/recent-threats"
import { SystemHealth } from "@/components/dashboard/system-health"
import { SecurityAlerts } from "@/components/dashboard/security-alerts"
import { ActivityLog } from "@/components/dashboard/activity-log"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Security Dashboard" text="Monitor and manage your security posture in real-time." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SecurityOverview className="lg:col-span-2" />
        <SecurityAlerts />
        <SystemHealth className="md:col-span-2 lg:col-span-1" />
        <RecentThreats className="lg:col-span-2" />
        <ActivityLog className="md:col-span-2 lg:col-span-3" />
      </div>
    </DashboardShell>
  )
}

