
import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Package, Users, MessageCircle, Settings } from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Produtos",
      icon: Package,
      path: "/admin",
    },
    {
      title: "Cadastros",
      icon: Users,
      path: "/admin?tab=registrations",
    },
    {
      title: "Mensagens",
      icon: MessageCircle,
      path: "/admin?tab=messages",
      badge: "5",
    },
    {
      title: "Configurações",
      icon: Settings,
      path: "/admin?tab=settings",
    }
  ];

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    if (path === "/admin") {
      return location.pathname === "/admin" && !location.search;
    }
    return location.pathname + location.search === path;
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-fishing-lightBlue">Pescador Admin</h2>
              <SidebarTrigger className="ml-auto" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={isActive(item.path)}
                    tooltip={item.title}
                    asChild
                  >
                    <Link to={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-fishing-lightBlue text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t border-sidebar-border">
            <div className="text-sm text-sidebar-foreground/70">
              &copy; {new Date().getFullYear()} Pescador Admin
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 min-h-screen overflow-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
