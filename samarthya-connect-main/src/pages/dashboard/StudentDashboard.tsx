import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Briefcase, 
  Clock, 
  Star, 
  TrendingUp, 
  Plus, 
  X,
  MapPin,
  Building2,
  ArrowRight,
  CheckCircle
} from "lucide-react";

// Mock data
const mockSkills = ["React", "TypeScript", "Node.js", "Python", "UI/UX Design", "Data Analysis"];

const mockTasks = [
  {
    id: 1,
    title: "Build a Dashboard UI",
    company: "TechStart Solutions",
    location: "Remote",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    duration: "4 weeks",
    stipend: "₹8,000",
    match: 95,
  },
  {
    id: 2,
    title: "Data Visualization Project",
    company: "Analytics Pro",
    location: "Bangalore",
    skills: ["Python", "Data Analysis", "Visualization"],
    duration: "6 weeks",
    stipend: "₹12,000",
    match: 88,
  },
  {
    id: 3,
    title: "Mobile App Development",
    company: "AppCraft Studios",
    location: "Mumbai",
    skills: ["React Native", "TypeScript"],
    duration: "8 weeks",
    stipend: "₹15,000",
    match: 82,
  },
];

const mockProgress = [
  { id: 1, title: "E-commerce Website", company: "ShopEasy", progress: 75, status: "In Progress" },
  { id: 2, title: "API Integration", company: "DataHub", progress: 100, status: "Completed" },
];

const StudentDashboard = () => {
  const [skills, setSkills] = useState(mockSkills);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <DashboardLayout role="student" userName="Priya Sharma" userRole="Student">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Priya! 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your internship journey.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Applications", value: "12", icon: Briefcase, trend: "+3 this week" },
            { label: "Hours Completed", value: "48", icon: Clock, trend: "+8 this week" },
            { label: "Skill Score", value: "850", icon: Star, trend: "+50 points" },
            { label: "Profile Views", value: "24", icon: TrendingUp, trend: "+12%" },
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
                  <p className="text-xs text-success mt-1">{stat.trend}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Skills</CardTitle>
                <CardDescription>Add or remove skills to get better matches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm cursor-pointer hover:bg-destructive/10 group"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-2 opacity-50 hover:opacity-100"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  />
                  <Button onClick={addSkill} size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recommended for You</CardTitle>
                <CardDescription>Opportunities matching your skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    whileHover={{ scale: 1.01 }}
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
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        {task.match}% Match
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {task.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{task.duration}</span>
                        <span className="font-medium text-foreground">{task.stipend}</span>
                      </div>
                      <Button size="sm">
                        Apply Now
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-success">
                    <CheckCircle className="w-4 h-4" />
                    Basic Information
                  </li>
                  <li className="flex items-center gap-2 text-success">
                    <CheckCircle className="w-4 h-4" />
                    Skills Added
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-4 h-4 rounded-full border-2 border-muted" />
                    Upload Resume
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-4 h-4 rounded-full border-2 border-muted" />
                    Add Portfolio
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Active Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockProgress.map((project) => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{project.title}</p>
                        <p className="text-xs text-muted-foreground">{project.company}</p>
                      </div>
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={project.status === "Completed" ? "bg-success" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <Progress value={project.progress} className="h-1.5" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
