import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Users, 
  Briefcase, 
  CheckCircle, 
  Clock, 
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data
const mockTasks = [
  {
    id: 1,
    title: "Build E-commerce Website",
    description: "Create a responsive e-commerce platform with product listing, cart, and checkout functionality.",
    skills: ["React", "Node.js", "MongoDB"],
    duration: "6 weeks",
    applicants: 12,
    status: "active",
    postedDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Mobile App UI Design",
    description: "Design user interface for a fitness tracking mobile application.",
    skills: ["Figma", "UI/UX Design", "Prototyping"],
    duration: "4 weeks",
    applicants: 8,
    status: "active",
    postedDate: "2024-01-18",
  },
  {
    id: 3,
    title: "Data Analysis Dashboard",
    description: "Build an analytics dashboard to visualize sales and customer data.",
    skills: ["Python", "Data Analysis", "Power BI"],
    duration: "3 weeks",
    applicants: 5,
    status: "in_progress",
    assignee: "Rahul Kumar",
    progress: 60,
    postedDate: "2024-01-10",
  },
  {
    id: 4,
    title: "Content Writing for Blog",
    description: "Write SEO-optimized blog posts about technology trends.",
    skills: ["Content Writing", "SEO", "Research"],
    duration: "2 weeks",
    applicants: 0,
    status: "completed",
    assignee: "Priya Sharma",
    postedDate: "2024-01-05",
  },
];

const MSMEDashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    skills: "",
    duration: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would submit to backend
    setIsDialogOpen(false);
    setNewTask({ title: "", description: "", skills: "", duration: "" });
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: "bg-info/10 text-info border-info/20",
      in_progress: "bg-warning/10 text-warning border-warning/20",
      completed: "bg-success/10 text-success border-success/20",
    };
    const labels = {
      active: "Active",
      in_progress: "In Progress",
      completed: "Completed",
    };
    return (
      <Badge variant="outline" className={styles[status as keyof typeof styles]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  return (
    <DashboardLayout role="msme" userName="Tech Solutions Pvt Ltd" userRole="MSME">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">MSME Dashboard</h1>
            <p className="text-muted-foreground">Manage your requirements and track progress</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="btn-gradient border-0">
                <Plus className="w-4 h-4 mr-2" />
                Post Requirement
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Post New Requirement</DialogTitle>
                <DialogDescription>
                  Fill in the details to post a new task for students.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="title">Task Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Build a Landing Page"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the task requirements in detail..."
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    className="mt-1.5"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="skills">Required Skills</Label>
                  <Input
                    id="skills"
                    placeholder="e.g., React, TypeScript, Node.js (comma separated)"
                    value={newTask.skills}
                    onChange={(e) => setNewTask({ ...newTask, skills: e.target.value })}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    placeholder="e.g., 4 weeks"
                    value={newTask.duration}
                    onChange={(e) => setNewTask({ ...newTask, duration: e.target.value })}
                    className="mt-1.5"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1 btn-gradient border-0">
                    Post Task
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Tasks", value: "8", icon: Briefcase, color: "text-info" },
            { label: "Total Applicants", value: "45", icon: Users, color: "text-primary" },
            { label: "In Progress", value: "3", icon: Clock, color: "text-warning" },
            { label: "Completed", value: "12", icon: CheckCircle, color: "text-success" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="stat-card"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tasks List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Posted Tasks</CardTitle>
            <CardDescription>Manage and track all your requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 border border-border rounded-xl hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold">{task.title}</h4>
                        {getStatusBadge(task.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {task.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {task.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>Duration: {task.duration}</span>
                        {task.status === "active" && (
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            {task.applicants} applicants
                          </span>
                        )}
                        {task.assignee && (
                          <span>Assigned to: <span className="text-foreground">{task.assignee}</span></span>
                        )}
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit Task
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </DashboardLayout>
  );
};

export default MSMEDashboard;
