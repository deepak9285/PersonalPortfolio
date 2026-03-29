import { motion } from "framer-motion";
import { FiAward, FiCode, FiTrendingUp } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const achievements = [
  {
    title: "Data Structures & Algorithms",
    description: "Solved over 600+ DSA problems across various platforms.",
    icon: FiCode,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "LeetCode Consistency",
    description: "Achieved a max rating of 1540 on LeetCode.",
    icon: SiLeetcode,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Smart India Hackathon",
    description: "Qualified for SIH two times, building scalable national-level solutions.",
    icon: FiTrendingUp,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Hackathon Winner",
    description: "Winner of the GDG Acropolis coding contest.",
    icon: FiAward,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center mb-6 border border-transparent group-hover:border-primary/20 transition-colors`}>
                <item.icon className={`text-2xl ${item.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
