"use client"

import {
  AlertTriangle,
  BarChart3,
  Bell,
  FileText,
  Home,
  Lock,
  type LucideIcon,
  Settings,
  Shield,
  ShieldAlert,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  href: string
  icon: LucideIcon
  isActive?: boolean
}

const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
    isActive: true,
  },
  {
    title: "Threats",
    href: "/threats",
    icon: AlertTriangle,
  },
  {
    title: "Alerts",
    href: "/alerts",
    icon: Bell,
  },
  {
    title: "Vulnerabilities",
    href: "/vulnerabilities",
    icon: ShieldAlert,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
]

const securityNavItems: NavItem[] = [
  {
    title: "Access Control",
    href: "/access",
    icon: Lock,
  },
  {
    title: "User Management",
    href: "/users",
    icon: Users,
  },
  {
    title: "Security Policies",
    href: "/policies",
    icon: Shield,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-slate-800">
      <SidebarHeader className="border-b border-slate-800 py-3">
        <a href="/" className="flex items-center gap-2 px-1 ">
          <Shield className="h-6 w-6 text-cyan-500 shrink-0 " />
          <span className="text-lg px-1 font-bold text-white">CyberShield</span>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400">Main</SidebarGroupLabel>
          <SidebarMenu>
            {mainNavItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={item.isActive}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2",
                      item.isActive ? "text-cyan-500" : "text-slate-400 hover:text-white",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400">Security</SidebarGroupLabel>
          <SidebarMenu>
            {securityNavItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={item.isActive}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2",
                      item.isActive ? "text-cyan-500" : "text-slate-400 hover:text-white",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-slate-800 p-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          <Shield className="mr-2 h-4 w-4 text-cyan-500" />
          Security Scan
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

