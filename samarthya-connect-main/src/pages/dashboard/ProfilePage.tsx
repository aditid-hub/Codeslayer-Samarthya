import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  Building2,
  Edit,
  Award
} from "lucide-react";

interface ProfilePageProps {
  role: "student" | "msme" | "government";
  userName: string;
  userRole: string;
}

const studentProfile = {
  name: "Priya Sharma",
  email: "priya.sharma@email.com",
  phone: "+91 98765 43210",
  location: "Mumbai, Maharashtra",
  college: "IIT Bombay",
  degree: "B.Tech Computer Science",
  year: "3rd Year",
  skills: ["React", "TypeScript", "Node.js", "Python", "UI/UX Design", "Data Analysis"],
  completedTasks: 8,
  ongoingTasks: 2,
  totalHours: 156,
  rating: 4.8,
  badges: ["Quick Learner", "Top Performer", "Team Player"],
  bio: "Passionate about building scalable web applications and solving real-world problems through technology.",
};

const msmeProfile = {
  name: "Tech Solutions Pvt Ltd",
  email: "hr@techsolutions.com",
  phone: "+91 22 1234 5678",
  location: "Bangalore, Karnataka",
  industry: "Information Technology",
  founded: "2018",
  employees: "25-50",
  website: "www.techsolutions.com",
  tasksPosted: 24,
  tasksCompleted: 18,
  activeInterns: 5,
  rating: 4.6,
  description: "We are a growing IT services company specializing in web and mobile application development for startups and enterprises.",
};

const governmentProfile = {
  name: "Rajesh Kumar",
  email: "rajesh.kumar@gov.in",
  phone: "+91 11 2345 6789",
  location: "New Delhi",
  department: "Ministry of Skill Development",
  designation: "Deputy Director",
  joinedDate: "March 2020",
  reportsGenerated: 45,
  policiesReviewed: 12,
  statesManaged: ["Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat"],
};

const ProfilePage = ({ role, userName, userRole }: ProfilePageProps) => {
  const getRoleColors = () => {
    switch (role) {
      case "student":
        return "from-blue-500 to-indigo-600";
      case "msme":
        return "from-emerald-500 to-teal-600";
      case "government":
        return "from-amber-500 to-orange-600";
    }
  };

  const renderStudentProfile = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Info */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="" />
                  <AvatarFallback className={`bg-gradient-to-br ${getRoleColors()} text-white text-2xl`}>
                    {studentProfile.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{studentProfile.name}</h2>
                  <p className="text-muted-foreground">{studentProfile.degree}</p>
                  <p className="text-sm text-muted-foreground">{studentProfile.college} • {studentProfile.year}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{studentProfile.bio}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                {studentProfile.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                {studentProfile.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                {studentProfile.location}
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-muted-foreground" />
                {studentProfile.college}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {studentProfile.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {studentProfile.badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 px-3 py-2 bg-accent rounded-lg">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Sidebar */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Rating</span>
                <span className="font-medium">{studentProfile.rating}/5.0</span>
              </div>
              <Progress value={studentProfile.rating * 20} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-accent rounded-lg">
                <p className="text-2xl font-bold">{studentProfile.completedTasks}</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
              <div className="text-center p-3 bg-accent rounded-lg">
                <p className="text-2xl font-bold">{studentProfile.ongoingTasks}</p>
                <p className="text-xs text-muted-foreground">Ongoing</p>
              </div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <p className="text-2xl font-bold">{studentProfile.totalHours}</p>
              <p className="text-xs text-muted-foreground">Total Hours</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderMSMEProfile = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="" />
                  <AvatarFallback className={`bg-gradient-to-br ${getRoleColors()} text-white text-2xl`}>
                    {msmeProfile.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{msmeProfile.name}</h2>
                  <p className="text-muted-foreground">{msmeProfile.industry}</p>
                  <p className="text-sm text-muted-foreground">Est. {msmeProfile.founded} • {msmeProfile.employees} employees</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{msmeProfile.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                {msmeProfile.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                {msmeProfile.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                {msmeProfile.location}
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                {msmeProfile.website}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Company Rating</span>
                <span className="font-medium">{msmeProfile.rating}/5.0</span>
              </div>
              <Progress value={msmeProfile.rating * 20} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-accent rounded-lg">
                <p className="text-2xl font-bold">{msmeProfile.tasksPosted}</p>
                <p className="text-xs text-muted-foreground">Tasks Posted</p>
              </div>
              <div className="text-center p-3 bg-accent rounded-lg">
                <p className="text-2xl font-bold">{msmeProfile.tasksCompleted}</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <p className="text-2xl font-bold">{msmeProfile.activeInterns}</p>
              <p className="text-xs text-muted-foreground">Active Interns</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderGovernmentProfile = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="" />
                  <AvatarFallback className={`bg-gradient-to-br ${getRoleColors()} text-white text-2xl`}>
                    {governmentProfile.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{governmentProfile.name}</h2>
                  <p className="text-muted-foreground">{governmentProfile.designation}</p>
                  <p className="text-sm text-muted-foreground">{governmentProfile.department}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                {governmentProfile.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                {governmentProfile.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                {governmentProfile.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                Joined {governmentProfile.joinedDate}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">States Managed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {governmentProfile.statesManaged.map((state) => (
                <Badge key={state} variant="secondary" className="px-3 py-1.5">
                  {state}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-3 bg-accent rounded-lg">
              <p className="text-2xl font-bold">{governmentProfile.reportsGenerated}</p>
              <p className="text-xs text-muted-foreground">Reports Generated</p>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <p className="text-2xl font-bold">{governmentProfile.policiesReviewed}</p>
              <p className="text-xs text-muted-foreground">Policies Reviewed</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <DashboardLayout role={role} userName={userName} userRole={userRole}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {role === "government" ? "Reports" : "Profile"}
          </h1>
          <p className="text-muted-foreground">
            {role === "student" && "Manage your profile and showcase your skills"}
            {role === "msme" && "Your company profile and statistics"}
            {role === "government" && "Your official profile and activity"}
          </p>
        </div>

        {role === "student" && renderStudentProfile()}
        {role === "msme" && renderMSMEProfile()}
        {role === "government" && renderGovernmentProfile()}
      </motion.div>
    </DashboardLayout>
  );
};

export default ProfilePage;
