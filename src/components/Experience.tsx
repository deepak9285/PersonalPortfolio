import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "Java Developer Intern",
    company: "PTC Software",
    duration: "July 2024 - Present",
    description: "• Contributing to the development of a large-scale Java-based installer for PTC Windchill, focusing on backend automation and build optimization.\n• Gaining hands-on experience in Java backend systems, object-oriented programming, and build automation using Apache Ant.\n• Developed a Java-based log parser capable of extracting key insights from 1M+ log lines, reducing manual analysis time by over 90%.\n• Implemented multithreading to enable parallel execution of installer sub-targets, improving deployment efficiency by up to 40%.\n• Designed and maintained Ant build scripts to streamline and automate complex build processes within the Java codebase.\n• Learned and applied Perl scripting for automation tasks and integration with existing build workflows.\n• Collaborated with Build and DevOps teams to troubleshoot and resolve system errors, ensuring smooth and consistent build cycles.",
    technologies: ["Java", "Javascript", "XML", "Spring Boot", "Spring", "Postgress", "Ant", "Perl"],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Matrix Innovation",
    duration: "July 2024 - July 2025",
    description: "• Engineered modern web applications with a focus on high performance, optimized user experience, and clean architectural design patterns.\n• Translated complex product requirements into intuitive, scalable, and visually appealing user interfaces.\n• Collaborated closely within an agile environment to design, develop, and deploy robust full-stack solutions seamlessly.",
    technologies: ["JavaScript", "TypeScript", "React Native", "React js", "Next js", "Tailwind Css", "Node js", "Express js", "Socket.io", "HTML/CSS", "Framer Motion", "Figma"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Gyaani Guruji",
    duration: "Jan 2023 - July 2023",
    description: "• Developed the official fully responsive website for gyaaniguruji.com, focusing on a mobile-first approach and seamless cross-browser compatibility.\n• Leveraged modern frontend technologies like React and Tailwind CSS to build scalable components and interactive UI elements.\n• Integrated continuous enhancements to improve page load speed and overall access accessibility metrics over the project lifecycle.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My career journey and the roles that have shaped my expertise.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative pt-8">
          {/* Vertical Timeline Central Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Connector Dot/Icon */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-background border-[3px] border-primary rounded-full flex items-center justify-center z-10 shadow-sm">
                  <FiBriefcase className="text-primary text-lg" />
                </div>

                {/* Content Card Container */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-14 text-left" : "md:pl-14 text-left"
                  }`}>
                  <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-border transition-all duration-300 relative group">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-bold text-primary mb-4">
                      {exp.company}
                    </h4>

                    <div className="flex items-center text-xs font-semibold text-muted-foreground mb-6">
                      <FiCalendar className="mr-2 text-sm" />
                      {exp.duration}
                    </div>

                    <div className="text-sm text-muted-foreground mb-8 space-y-3 leading-relaxed">
                      {exp.description.split('\n').map((paragraph, i) => (
                        <p key={i} className="flex">
                          {paragraph.startsWith('•') ? (
                            <>
                              <span className="mr-2 text-primary font-bold">•</span>
                              <span>{paragraph.substring(1).trim()}</span>
                            </>
                          ) : (
                            <span>{paragraph}</span>
                          )}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-background text-foreground text-[11px] font-bold tracking-wide uppercase rounded-full border border-border/60 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
