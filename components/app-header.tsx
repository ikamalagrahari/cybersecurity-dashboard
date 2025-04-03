"use client"

import { Bell, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-slate-800 bg-slate-900/95 px-4 backdrop-blur-sm">
      <SidebarTrigger className="text-slate-400 hover:text-white" />
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
        <Input
          type="search"
          placeholder="Search threats, alerts, users..."
          className="w-full bg-slate-800 border-slate-700 pl-9 text-sm text-slate-300 placeholder:text-slate-500 focus-visible:ring-slate-700"
        />
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-red-500 p-0 text-[10px] font-bold text-white">
            3
          </Badge>
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
        <Avatar className="h-8 w-8 border border-slate-700">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback className="bg-slate-800 text-slate-300">SC</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

