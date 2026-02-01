import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Completed" },
  { icon: Award, value: "12", label: "Awards Won" },
  { icon: GraduationCap, value: "8+", label: "Years Experience" },
  { icon: Heart, value: "100%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-primary rounded-3xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-4">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Passionate About Creating{" "}
              <span className="text-gradient">Meaningful Work</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a creative professional with a deep passion for visual
              storytelling. With years of experience across design, photography,
              and digital media, I bring ideas to life through compelling visuals
              and thoughtful narratives.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My work spans brand identity, motion graphics, documentary
              filmmaking, and data visualization. I believe in the power of
              design to communicate complex ideas simply and beautifully.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-2xl shadow-card"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <stat.icon size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-card-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
