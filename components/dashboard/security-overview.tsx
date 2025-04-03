"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, ShieldAlert, ShieldCheck, ShieldX } from "lucide-react"
import { cn } from "@/lib/utils"

interface SecurityOverviewProps {
  className?: string
}

export function SecurityOverview({ className }: SecurityOverviewProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Card className={cn("border-none shadow-md bg-gradient-to-br from-slate-900 to-slate-800", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
          <Shield className="h-5 w-5 text-cyan-400" />
          Security Overview
        </CardTitle>
        <CardDescription className="text-slate-400">Your security posture at a glance</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-slate-800/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="threats">Threats</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center rounded-lg bg-slate-800/50 p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900/20">
                  <ShieldCheck className="h-6 w-6 text-green-500" />
                </div>
                <div className="mt-2 font-medium text-white">87%</div>
                <div className="text-xs text-slate-400">Protected</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-slate-800/50 p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-900/20">
                  <ShieldAlert className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="mt-2 font-medium text-white">12</div>
                <div className="text-xs text-slate-400">Warnings</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-slate-800/50 p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-900/20">
                  <ShieldX className="h-6 w-6 text-red-500" />
                </div>
                <div className="mt-2 font-medium text-white">3</div>
                <div className="text-xs text-slate-400">Critical</div>
              </div>
            </div>
            <div className="rounded-lg bg-slate-800/50 p-4">
              <div className="mb-2 text-sm font-medium text-white">Security Score Trend</div>
              <div className="h-[120px] w-full">
                <div className="flex h-full items-end gap-2">
                  {[60, 70, 65, 75, 78, 82, 87].map((value, i) => (
                    <div key={i} className="relative flex-1">
                      <div
                        className="absolute bottom-0 w-full rounded-sm bg-gradient-to-t from-cyan-500 to-cyan-300"
                        style={{ height: `${value}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <div>7 days ago</div>
                <div>Today</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="threats" className="space-y-4">
            <div className="rounded-lg bg-slate-800/50 p-4">
              <div className="mb-4 text-sm font-medium text-white">Threat Distribution</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Malware</span>
                    <span className="text-white">42%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-[42%] bg-red-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Phishing</span>
                    <span className="text-white">28%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-[28%] bg-yellow-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Ransomware</span>
                    <span className="text-white">15%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-[15%] bg-purple-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Other</span>
                    <span className="text-white">15%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-[15%] bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="compliance" className="space-y-4">
            <div className="rounded-lg bg-slate-800/50 p-4">
              <div className="mb-4 text-sm font-medium text-white">Compliance Status</div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-sm text-white">GDPR</span>
                  </div>
                  <span className="text-xs text-green-500">Compliant</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-sm text-white">HIPAA</span>
                  </div>
                  <span className="text-xs text-green-500">Compliant</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="text-sm text-white">PCI DSS</span>
                  </div>
                  <span className="text-xs text-yellow-500">In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-sm text-white">ISO 27001</span>
                  </div>
                  <span className="text-xs text-green-500">Compliant</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

