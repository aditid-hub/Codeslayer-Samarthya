import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Building2, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe,
  Users,
  Award
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Skill-Based Matching",
    description: "AI-powered algorithm matches students with micro-internships based on their skills and career goals.",
  },
  {
    icon: Building2,
    title: "MSME Empowerment",
    description: "Help small businesses access skilled talent without the overhead of traditional hiring.",
  },
  {
    icon: BarChart3,
    title: "Government Analytics",
    description: "Real-time dashboards tracking skill development and employment metrics across regions.",
  },
  {
    icon: Zap,
    title: "Quick Projects",
    description: "Micro-internships from 2-8 weeks, perfect for students to gain practical experience.",
  },
  {
    icon: Shield,
    title: "Verified Credentials",
    description: "Government-backed certification for completed projects, adding value to resumes.",
  },
  {
    icon: Globe,
    title: "Pan-India Coverage",
    description: "Connect with MSMEs across all states and union territories of India.",
  },
  {
    icon: Users,
    title: "Mentorship Network",
    description: "Industry experts guide students throughout their micro-internship journey.",
  },
  {
    icon: Award,
    title: "Recognition Program",
    description: "Top performers receive awards and direct job placement opportunities.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">
            FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive platform designed to bridge the gap between education and employment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
