import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaBrain, FaCubes, FaDatabase, FaMicrochip, FaNetworkWired, FaSitemap } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiSpringboot, SiFirebase, SiTeespring, SiPostman } from "react-icons/si";
import { SocialSidebar } from "./SocialSidebar";

const skillCategories = [
  {
    title: "Core Computer Science",
    skills: [
      { name: "System Design & Architecture", icon: FaSitemap, color: "text-indigo-400" },
      { name: "Data Structures & Algorithms", icon: FaBrain, color: "text-purple-400" },
      { name: "Object-Oriented Programming", icon: FaCubes, color: "text-blue-400" },
      { name: "DBMS & SQL", icon: FaDatabase, color: "text-green-400" },
      { name: "Operating Systems", icon: FaMicrochip, color: "text-yellow-400" },
      { name: "Computer Networks", icon: FaNetworkWired, color: "text-pink-400" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "React Native", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Next Js", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" },
      { name: "Java", icon: FaJava, color: "text-[#007396]" },
      { name: "Express js", icon: FaNodeJs, color: "text-[#007396]" },
      { name: "Spring", icon: SiTeespring, color: "text-[#007396]" }
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      { name: "REST APIs", icon: FaNodeJs, color: "text-muted-foreground" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative">
      {/* Sticky/Absolute sidebar for skills section */}
      <SocialSidebar className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground text-center">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-background border border-border/50 hover:border-primary/50 hover:bg-muted transition-all"
                  >
                    <skill.icon className={`text-4xl mb-3 ${skill.color}`} />
                    <span className="text-sm font-medium text-foreground text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
