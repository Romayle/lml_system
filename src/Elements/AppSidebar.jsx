import React from "react";
import {
  BookOpenCheck,
  LayoutDashboard,
  Link,
  LogOut,
  MousePointer2,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AppSidebar = React.memo(() => {
  const items = [
    { title: "Dashboard", url: "#", icon: LayoutDashboard },
    { title: "Courses", url: "courses", icon: MousePointer2 },
    { title: "Exams", url: "exams", icon: BookOpenCheck },
  ];

  const items2 = [
    { title: "Settings", url: "#", icon: Settings },
    { title: "Logout", url: "signin", icon: LogOut },
  ];

  return (
    <Sidebar className="bg-[#f6f6f6] text-gray-500 font-semibold px-2"> {/*transition-all duration-300*/}
      <SidebarHeader>
        <div className="flex items-end gap-3">
          <Link className="bg-black text-white h-10 w-10 p-2 rounded-xl" />
          <div className="flex items-center justify-between flex-1">
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-xl text-black mt-2">EduLink</h1>
              <h2 className="text-xs font-normal">LMS System</h2>
            </div>
            <SidebarTrigger />
          </div>
        </div>
        {/* <h1 className="text-xl text-black mt-2">Learning Content</h1> */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
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

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items2.map((item) => (
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
      <SidebarFooter>
        <div className="flex items-end gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <Link className="bg-black text-white h-10 w-10 p-2 rounded-xl" /> */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-end text-black mt-2">username</h1>
            <h2 className="text-xs font-normal">username@gmail.com</h2>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
});

export default AppSidebar;
