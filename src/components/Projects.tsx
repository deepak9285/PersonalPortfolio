import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/Card";
import { Button } from "./ui/Button";

const projects = [
  {
    title: "Amorr Dating App",
    description: "A comprehensive dating platform with real-time messaging, matching algorithms, and user profile management, built with React Native and Node.js.",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "",
    live: "#"
  },
  {
    title: "Drug Inventory System (SIH)",
    description: "An inventory management solution for tracking pharmaceuticals, ensuring compliance, and preventing stockouts. Built for Smart India Hackathon.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
  {
    title: "Resume Analyzer",
    description: "An intelligent application that analyzes resumes against job descriptions to provide detailed matching scores and improvement suggestions.",
    tech: ["React", "Axios", "Tailwind CSS", "Mock API"],
    github: "#",
    live: "#"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work focusing on full-stack development and intuitive user interfaces.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col group overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start gap-4 pb-6 pt-0">
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open(project.github, '_blank')}>
                    <FiGithub /> Source Code
                  </Button>
                  <Button size="sm" className="gap-2" onClick={() => window.open(project.live, '_blank')}>
                    <FiExternalLink /> Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
