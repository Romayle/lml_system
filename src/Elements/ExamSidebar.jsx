import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function ExamSidebar() {
  return (
    <Sidebar className="bg-[#f6f6f6] text-gray-500 font-semibold px-2">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold">QUESTION {}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <QuestionBar />
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

const QuestionBar = () => {
  return ( 
    <div className="flex items- border-2 rounded-xl p-2 bg-gray-400 border-slate-500">
      <div className="flex items-center gap-2">
        <h2 className="bg-gray-600 p-2 rounded-xl">1</h2>
        <p>What does UI stand for in terms of</p>
      </div>
      <div></div>
    </div>
   );
}