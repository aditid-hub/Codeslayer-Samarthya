import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  Briefcase,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "student" | "msme" | "government";
  userName: string;
  userRole: string;
}

const DashboardLayout = ({ children, role, userName, userRole }: DashboardLayoutProps) => {
  const location = useLocation();

  const navItems = {
    student: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/student" },
      { icon: Briefcase, label: "My Tasks", href: "/dashboard/student/tasks" },
      { icon: User, label: "Profile", href: "/dashboard/student/profile" },
      { icon: Settings, label: "Settings", href: "/dashboard/student/settings" },
    ],
    msme: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/msme" },
      { icon: Briefcase, label: "Tasks", href: "/dashboard/msme/tasks" },
      { icon: User, label: "Profile", href: "/dashboard/msme/profile" },
      { icon: Settings, label: "Settings", href: "/dashboard/msme/settings" },
    ],
    government: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/government" },
      { icon: Briefcase, label: "Analytics", href: "/dashboard/government/analytics" },
      { icon: User, label: "Reports", href: "/dashboard/government/reports" },
      { icon: Settings, label: "Settings", href: "/dashboard/government/settings" },
    ],
  };

  const roleColors = {
    student: "from-blue-500 to-indigo-600",
    msme: "from-emerald-500 to-teal-600",
    government: "from-amber-500 to-orange-600",
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 bg-card border-r border-border fixed h-full hidden lg:block"
      >
        {/* Logo */}
        <div className="h-16 px-6 flex items-center border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${roleColors[role]} flex items-center justify-center`}>
              <span className="text-sm font-bold text-white">S</span>
            </div>
            <span className="text-lg font-bold text-foreground">Samarthya</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems[role].map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </Button>
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="" />
                    <AvatarFallback className={`bg-gradient-to-br ${roleColors[role]} text-white text-sm`}>
                      {userName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden sm:block">
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xs text-muted-foreground">{userRole}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
