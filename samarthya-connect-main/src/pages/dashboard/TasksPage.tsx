import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, MapPin, Building2, ArrowRight } from "lucide-react";

interface TasksPageProps {
  role: "student" | "msme" | "government";
  userName: string;
  userRole: string;
}

const studentTasks = [
  {
    id: 1,
    title: "Build a Dashboard UI",
    company: "TechStart Solutions",
    location: "Remote",
    status: "in_progress",
    progress: 65,
    deadline: "Feb 15, 2024",
  },
  {
    id: 2,
    title: "API Integration Project",
    company: "DataHub Inc",
    location: "Bangalore",
    status: "completed",
    progress: 100,
    deadline: "Jan 28, 2024",
  },
  {
    id: 3,
    title: "Mobile App Testing",
    company: "AppCraft Studios",
    location: "Mumbai",
    status: "pending",
    progress: 0,
    deadline: "Mar 1, 2024",
  },
];

const msmeTasks = [
  {
    id: 1,
    title: "E-commerce Website Development",
    applicants: 15,
    status: "active",
    posted: "Jan 10, 2024",
    budget: "₹25,000",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    applicants: 8,
    status: "in_progress",
    assignee: "Rahul Kumar",
    posted: "Jan 5, 2024",
    budget: "₹12,000",
  },
  {
    id: 3,
    title: "Logo Design",
    applicants: 0,
    status: "completed",
    assignee: "Priya Sharma",
    posted: "Dec 20, 2023",
    budget: "₹5,000",
  },
];

const governmentTasks = [
  {
    id: 1,
    title: "Q4 Impact Assessment Report",
    status: "pending",
    deadline: "Feb 28, 2024",
    priority: "high",
  },
  {
    id: 2,
    title: "State-wise Analytics Review",
    status: "in_progress",
    deadline: "Feb 10, 2024",
    priority: "medium",
  },
  {
    id: 3,
    title: "Policy Recommendation Draft",
    status: "completed",
    deadline: "Jan 15, 2024",
    priority: "high",
  },
];

const TasksPage = ({ role, userName, userRole }: TasksPageProps) => {
  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      active: "bg-info/10 text-info border-info/20",
      in_progress: "bg-warning/10 text-warning border-warning/20",
      completed: "bg-success/10 text-success border-success/20",
      pending: "bg-muted text-muted-foreground border-muted",
    };
    const labels: Record<string, string> = {
      active: "Active",
      in_progress: "In Progress",
      completed: "Completed",
      pending: "Pending",
    };
    return (
      <Badge variant="outline" className={styles[status]}>
        {labels[status]}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const styles: Record<string, string> = {
      high: "bg-destructive/10 text-destructive border-destructive/20",
      medium: "bg-warning/10 text-warning border-warning/20",
      low: "bg-muted text-muted-foreground border-muted",
    };
    return (
      <Badge variant="outline" className={styles[priority]}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
      </Badge>
    );
  };

  const renderStudentTasks = () => (
    <div className="space-y-4">
      {studentTasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 border border-border rounded-xl hover:border-primary/30 transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-semibold">{task.title}</h4>
              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  {task.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {task.location}
                </span>
              </div>
            </div>
            {getStatusBadge(task.status)}
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{task.progress}%</span>
            </div>
            <Progress value={task.progress} className="h-2" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              Deadline: {task.deadline}
            </span>
            <Button size="sm" variant="outline">
              View Details
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderMSMETasks = () => (
    <div className="space-y-4">
      {msmeTasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 border border-border rounded-xl hover:border-primary/30 transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-semibold">{task.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Posted: {task.posted} • Budget: {task.budget}
              </p>
            </div>
            {getStatusBadge(task.status)}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {task.assignee ? `Assigned to: ${task.assignee}` : `${task.applicants} applicants`}
            </span>
            <Button size="sm" variant="outline">
              Manage
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderGovernmentTasks = () => (
    <div className="space-y-4">
      {governmentTasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 border border-border rounded-xl hover:border-primary/30 transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-semibold">{task.title}</h4>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Deadline: {task.deadline}
              </p>
            </div>
            <div className="flex gap-2">
              {getPriorityBadge(task.priority)}
              {getStatusBadge(task.status)}
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="sm" variant="outline">
              View Report
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const getTitleByRole = () => {
    switch (role) {
      case "student":
        return { title: "My Tasks", description: "Track your ongoing and completed tasks" };
      case "msme":
        return { title: "Task Management", description: "Manage all your posted requirements" };
      case "government":
        return { title: "Reports & Analytics", description: "Review pending and completed reports" };
    }
  };

  const { title, description } = getTitleByRole();

  return (
    <DashboardLayout role={role} userName={userName} userRole={userRole}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">All Tasks</CardTitle>
            <CardDescription>
              {role === "student" && "Your assigned micro-internship tasks"}
              {role === "msme" && "All requirements you've posted"}
              {role === "government" && "Pending reports and analytics tasks"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {role === "student" && renderStudentTasks()}
            {role === "msme" && renderMSMETasks()}
            {role === "government" && renderGovernmentTasks()}
          </CardContent>
        </Card>
      </motion.div>
    </DashboardLayout>
  );
};

export default TasksPage;
