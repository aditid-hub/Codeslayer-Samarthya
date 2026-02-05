import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SelectRole from "./pages/SelectRole";
import Login from "./pages/Login";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import MSMEDashboard from "./pages/dashboard/MSMEDashboard";
import GovernmentDashboard from "./pages/dashboard/GovernmentDashboard";
import TasksPage from "./pages/dashboard/TasksPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/select-role" element={<SelectRole />} />
          {/* Student Routes */}
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/student/tasks" element={<TasksPage role="student" userName="Priya Sharma" userRole="Student" />} />
          <Route path="/dashboard/student/profile" element={<ProfilePage role="student" userName="Priya Sharma" userRole="Student" />} />
          <Route path="/dashboard/student/settings" element={<SettingsPage role="student" userName="Priya Sharma" userRole="Student" />} />
          {/* MSME Routes */}
          <Route path="/dashboard/msme" element={<MSMEDashboard />} />
          <Route path="/dashboard/msme/tasks" element={<TasksPage role="msme" userName="Tech Solutions Pvt Ltd" userRole="MSME" />} />
          <Route path="/dashboard/msme/profile" element={<ProfilePage role="msme" userName="Tech Solutions Pvt Ltd" userRole="MSME" />} />
          <Route path="/dashboard/msme/settings" element={<SettingsPage role="msme" userName="Tech Solutions Pvt Ltd" userRole="MSME" />} />
          {/* Government Routes */}
          <Route path="/dashboard/government" element={<GovernmentDashboard />} />
          <Route path="/dashboard/government/analytics" element={<TasksPage role="government" userName="Rajesh Kumar" userRole="Government Official" />} />
          <Route path="/dashboard/government/reports" element={<ProfilePage role="government" userName="Rajesh Kumar" userRole="Government Official" />} />
          <Route path="/dashboard/government/settings" element={<SettingsPage role="government" userName="Rajesh Kumar" userRole="Government Official" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
