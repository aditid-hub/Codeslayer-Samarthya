import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  Building2, 
  Briefcase, 
  TrendingUp,
  Download,
  Filter
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";

// Mock data
const monthlyData = [
  { month: "Jan", students: 1200, msmes: 150, tasks: 320 },
  { month: "Feb", students: 1500, msmes: 180, tasks: 410 },
  { month: "Mar", students: 1800, msmes: 220, tasks: 520 },
  { month: "Apr", students: 2200, msmes: 280, tasks: 680 },
  { month: "May", students: 2800, msmes: 350, tasks: 850 },
  { month: "Jun", students: 3200, msmes: 420, tasks: 980 },
];

const skillDistribution = [
  { name: "Technology", value: 35, color: "#6366f1" },
  { name: "Design", value: 25, color: "#8b5cf6" },
  { name: "Marketing", value: 20, color: "#a855f7" },
  { name: "Data Science", value: 12, color: "#d946ef" },
  { name: "Others", value: 8, color: "#ec4899" },
];

const stateData = [
  { state: "Maharashtra", students: 2500, msmes: 350 },
  { state: "Karnataka", students: 2100, msmes: 280 },
  { state: "Tamil Nadu", students: 1800, msmes: 240 },
  { state: "Delhi", students: 1500, msmes: 200 },
  { state: "Gujarat", students: 1200, msmes: 180 },
  { state: "Rajasthan", students: 900, msmes: 120 },
];

const GovernmentDashboard = () => {
  const [selectedState, setSelectedState] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  return (
    <DashboardLayout role="government" userName="Admin" userRole="Government Official">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Impact Dashboard</h1>
            <p className="text-muted-foreground">Real-time analytics across all states</p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="py-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="jan">January 2024</SelectItem>
                  <SelectItem value="feb">February 2024</SelectItem>
                  <SelectItem value="mar">March 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Students", value: "10,245", icon: Users, trend: "+12.5%", color: "text-primary" },
            { label: "Active MSMEs", value: "2,548", icon: Building2, trend: "+8.2%", color: "text-success" },
            { label: "Projects Completed", value: "15,892", icon: Briefcase, trend: "+18.7%", color: "text-info" },
            { label: "Employment Rate", value: "78.5%", icon: TrendingUp, trend: "+5.3%", color: "text-warning" },
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
                  <p className="text-xs text-success mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend} from last month
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Growth Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Growth Trend</CardTitle>
              <CardDescription>Monthly registrations over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="students" stroke="#6366f1" strokeWidth={2} dot={{ fill: "#6366f1" }} />
                    <Line type="monotone" dataKey="msmes" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981" }} />
                    <Line type="monotone" dataKey="tasks" stroke="#f59e0b" strokeWidth={2} dot={{ fill: "#f59e0b" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Skill Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skill Distribution</CardTitle>
              <CardDescription>Breakdown by skill category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={skillDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {skillDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* State-wise Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">State-wise Distribution</CardTitle>
            <CardDescription>Participation across major states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stateData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis dataKey="state" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={100} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                  <Bar dataKey="students" fill="#6366f1" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="msmes" fill="#10b981" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </DashboardLayout>
  );
};

export default GovernmentDashboard;
