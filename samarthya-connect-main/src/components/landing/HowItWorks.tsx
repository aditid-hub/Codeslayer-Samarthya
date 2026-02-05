import { motion } from "framer-motion";
import { UserPlus, Search, Briefcase, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Profile",
    description: "Sign up and list your skills, interests, and availability. Our system creates a personalized profile.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Search,
    step: "02",
    title: "Get Matched",
    description: "Our AI matches you with relevant micro-internship opportunities from verified MSMEs.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Briefcase,
    step: "03",
    title: "Complete Projects",
    description: "Work on real projects, gain hands-on experience, and build your professional portfolio.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Earn Credentials",
    description: "Receive government-verified certificates and recommendations for your achievements.",
    color: "from-pink-500 to-rose-600",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24">
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
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Four simple steps to success
          </h2>
          <p className="text-muted-foreground text-lg">
            From profile creation to earning verified credentials, we've streamlined the entire process.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
