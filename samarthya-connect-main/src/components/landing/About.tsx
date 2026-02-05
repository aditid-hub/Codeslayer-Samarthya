import { motion } from "framer-motion";
import { Target, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary mb-4 block">
              ABOUT SAMARTHYA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bridging Education & Employment
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A government initiative designed to empower India's youth by connecting them 
              with real-world opportunities in the MSME sector.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To create 1 million micro-internship opportunities by 2030, 
                fostering skill development and economic growth across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Values</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transparency, accessibility, and quality drive everything we do. 
                We believe every student deserves real-world experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Impact</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Partnering with state governments, educational institutions, 
                and MSMEs to create sustainable employment pathways.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
