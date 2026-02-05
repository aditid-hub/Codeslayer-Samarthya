import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { GraduationCap, Building2, Landmark, ArrowRight, Users, Briefcase, BarChart3 } from "lucide-react";

const roles = [
  {
    id: "student",
    title: "Student",
    description: "Find micro-internships, build your skills, and kickstart your career with real-world experience.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    link: "/dashboard/student",
    stats: [
      { icon: Briefcase, label: "500+ Active Opportunities" },
      { icon: Users, label: "10,000+ Students Enrolled" },
    ],
  },
  {
    id: "msme",
    title: "MSME",
    description: "Access skilled student talent for your projects. Post requirements and find the perfect match.",
    icon: Building2,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    link: "/dashboard/msme",
    stats: [
      { icon: Users, label: "2,500+ Verified MSMEs" },
      { icon: Briefcase, label: "15,000+ Projects Completed" },
    ],
  },
  {
    id: "government",
    title: "Government",
    description: "Monitor impact, analyze trends, and drive policy decisions with real-time analytics.",
    icon: Landmark,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    link: "/dashboard/government",
    stats: [
      { icon: BarChart3, label: "Real-time Analytics" },
      { icon: Users, label: "Pan-India Coverage" },
    ],
  },
];

const SelectRole = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            How would you like to participate?
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose your role to access your personalized dashboard and features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={role.link}>
                <div className="group h-full bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <role.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {role.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {role.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3 mb-6">
                    {role.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <stat.icon className="w-4 h-4 text-primary" />
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Continue as {role.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
