import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [

  {
    id: 1,
    role: "Java Developer Intern",
    company: "PTC software",
    duration: "July 2025 - Present",
    description: "• Contributing to the development of a large-scale Java-based installer for PTC Windchill, focusing on backend automation and build optimization.\n • Gaining hands-on experience in Java backend systems, object-oriented programming, and build automation using Apache Ant.\n • Developed a Java-based log parser capable of extracting key insights from 1M+ log lines, reducing manual analysis time by over 90%.\n • Implemented multithreading to enable parallel execution of installer sub-targets, improving deployment efficiency by up to 40%.\n • Designed and maintained Ant build scripts to streamline and automate complex build processes within the Java codebase.\n • Learned and applied Perl scripting for automation tasks and integration with existing build workflows.\n • Collaborated with Build and DevOps teams to troubleshoot and resolve system errors, ensuring smooth and consistent build cycles.\n • Continuously improving understanding of software packaging, large-scale system integration, and enterprise automation tools.",
    technologies: ["Java", "Javascript", "xml", "springboot", "spring", "Postgress"],
  },
  {
    id: 2,
    role: "UI/UX Developer Intern",
    company: "Matrix Innovation",
    duration: "July 2024 - July 2025",
    description: "At Matrix Innovation, I work as a 𝐅𝐮𝐥𝐥 𝐬𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐈𝐧𝐭𝐞𝐫𝐧, where I contribute to designing, developing, and maintaining modern web applications with a strong focus on performance, user experience, and clean architecture. My role involves translating complex product requirements into intuitive, scalable, and visually appealing interfaces.",
    technologies: ["JavaScript", "HTML/CSS", "Framer Motion", "Figma"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Gyaani guruji",
    duration: "Jan 2023 - july 2023",
    description: "I have developed the website of  gyaani guruji.com  which is fully responsive and in working condition i have used html and tailwind css framework and more enhancement is adding on for good user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-background/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My career journey and the roles that have shaped my expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                  <FiBriefcase className="text-primary text-xl" />
                </div>

                {/* Content Container */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 text-left" : "md:pl-16 text-left"
                  }`}>
                  <div className="bg-background/80 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-xl hover:border-primary/50 transition-colors duration-300 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-primary mb-4">{exp.company}</h4>

                    <div className="flex items-center text-sm font-medium text-muted-foreground mb-4">
                      <FiCalendar className="mr-2" />
                      {exp.duration}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted/50 text-foreground text-xs font-semibold rounded-full border border-border/50"
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
