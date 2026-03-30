// import { motion } from "framer-motion";
// import { FiGithub, FiExternalLink, FiPlay } from "react-icons/fi";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/Card";
// import { Button } from "./ui/Button";

// const projects = [
//   {
//     title: "Amorr – Real-Time Dating App",
//     description:
//       "Full-stack dating app with real-time chat, matchmaking, and optimized onboarding flow for better performance.",
//     highlights: [
//       "Real-time chat using Socket.io",
//       "Matchmaking logic based on preferences",
//       "Reduced API calls using multi-step form",
//       "Optimized UI performance & reusability"
//     ],
//     challenge: "Handled real-time messaging with minimal latency",
//     solution: "Used event-driven architecture with Socket.io",
//     tech: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io"],
//     github: "https://github.com/deepak9285/Amorr_Personal",
//     demo: "#", // add youtube later
//   },
//   {
//     title: "IRL Social – Meetup Platform",
//     description:
//       "Invite-only meetup app with monetization, OTP authentication, and real-time participant management.",
//     highlights: [
//       "OTP-based secure login system",
//       "Event creation & participant handling",
//       "Monetization for meetups",
//       "Real-time updates using sockets"
//     ],
//     challenge: "Managing real-time event updates",
//     solution: "Implemented WebSocket-based updates",
//     tech: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io"],
//     github: "https://github.com/deepak9285/IRLSocial_personal.git",
//     demo: "#",
//   },
//   {
//     title: "Hospital Management System",
//     description:
//       "Backend system for managing patients, doctors, and appointments with scalable REST APIs.",
//     highlights: [
//       "REST API development using Spring Boot",
//       "CRUD operations for hospital workflows",
//       "Structured database schema design",
//       "Tested APIs using Postman"
//     ],
//     challenge: "Designing scalable backend structure",
//     solution: "Used layered architecture (Controller-Service-Repository)",
//     tech: ["Spring Boot", "MySQL", "Postman"],
//     github: "#",
//     demo: null,
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const itemVariants = {
//   hidden: { y: 40, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
// };

// export function Projects() {
//   return (
//     <section id="projects" className="py-24 bg-background">
//       <div className="container mx-auto px-6 max-w-6xl">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
//             Featured Projects
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Real-world applications showcasing full-stack development, real-time systems, and performance optimization.
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {projects.map((project) => (
//             <motion.div key={project.title} variants={itemVariants}>

//               <Card className="h-full flex flex-col group overflow-hidden border-border/50 bg-card hover:border-primary/60 transition-all duration-300 hover:shadow-xl">

//                 {/* Header */}
//                 <CardHeader>
//                   <CardTitle className="group-hover:text-primary transition-colors">
//                     {project.title}
//                   </CardTitle>
//                   <CardDescription className="mt-2 text-sm">
//                     {project.description}
//                   </CardDescription>
//                 </CardHeader>

//                 {/* Content */}
//                 <CardContent className="flex-grow">

//                   {/* Highlights */}
//                   <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
//                     {project.highlights.map((item, i) => (
//                       <li key={i}>• {item}</li>
//                     ))}
//                   </ul>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-md"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Challenge */}
//                   <div className="mt-4 text-xs">
//                     <p className="font-semibold text-foreground">Challenge:</p>
//                     <p className="text-muted-foreground">{project.challenge}</p>
//                   </div>

//                   {/* Solution */}
//                   <div className="mt-2 text-xs">
//                     <p className="font-semibold text-foreground">Solution:</p>
//                     <p className="text-muted-foreground">{project.solution}</p>
//                   </div>
//                 </CardContent>

//                 {/* Footer */}
//                 <CardFooter className="flex flex-wrap gap-3 pb-6 pt-0">

//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="gap-2"
//                     onClick={() => window.open(project.github, "_blank")}
//                   >
//                     <FiGithub /> Code
//                   </Button>

//                   {project.demo && (
//                     <Button
//                       size="sm"
//                       className="gap-2"
//                       onClick={() => window.open(project.demo, "_blank")}
//                     >
//                       <FiPlay /> Demo
//                     </Button>
//                   )}
//                 </CardFooter>

//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiPlay } from "react-icons/fi";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import stockApp from "../assets/stockApp.png"

const filterCategories = ["All", "React JS", "React native", "Spring Boot"];

const projectsData = [
  {
    title: "Amorr - Dating app",
    subtitle: "Real-Time Dating App",
    category: "React native",
    color: "bg-[#1e5a97]",
    textColor: "text-[#1e5a97]",
    description:
      "Created Amorr, a Real-Time Dating App using MERN stack with React Native. Implemented real-time chat with Socket.io, matchmaking logic based on user preferences, and a highly optimized multi-step onboarding flow.",
    github: "https://github.com/deepak9285/Amorr_Personal",
    demo: "#",
  },
  {
    title: "Stock's App",
    subtitle: "Real time Stock price tracker",
    category: "React native",
    color: "bg-[#1e5a97]",
    textColor: "text-[#1e5a97]",
    description:
      "Stock app— explore, search, and view stock details.",
    github: "https://github.com/deepak9285/Growww_Stock",
    demo: "https://drive.google.com/drive/u/3/folders/1EtbD9d-ZvIY0RlQFq1D-5hDTmKZ97Ic5",
  },
  {
    title: "IRL Social - Social media app",
    subtitle: "Meetup Platform",
    category: "React native",
    color: "bg-[#9b1c1c]",
    textColor: "text-[#9b1c1c]",
    description:
      "Developed IRL Social, an invite-only meetup app offering OTP authentication, real-time participant management via websockets, and a secure monetization system for premium events.",
    github: "https://github.com/deepak9285/IRLSocial_personal.git",
    demo: "#",
  },
  {
    title: "Hospital Management System",
    subtitle: "Backend Portals",
    category: "Spring Boot",
    color: "bg-[#046c4e]",
    textColor: "text-[#046c4e]",
    description:
      "Engineered a comprehensive backend system for hospital management utilizing Spring Boot. Enabled scalable REST APIs for tracking patients, doctors, and scheduling appointments.",
    github: "#",
    demo: "#",
  },
  {
    title: "Ai workflow Builder",
    subtitle: "Workflow Tool",
    category: "React JS",
    color: "bg-[#4f46e5]",
    textColor: "text-[#4f46e5]",
    description:
      "Built an interactive workflow builder using React and React Flow. Features include a seamless drag-and-drop interface, customizable nodes, and state persistence with JSON export.",
    github: "https://github.com/deepak9285/React-Workflow.git",
    demo: "https://react-workflow-six.vercel.app/",
  },
  {
    title: "Image Detection",
    subtitle: "AI Vision & Detection",
    category: "React JS",
    color: "bg-[#8b5cf6]",
    textColor: "text-[#8b5cf6]",
    description:
      "An interactive AI-powered application built with React. It allows users to upload images and perform advanced computer vision tasks including object detection, celebrity recognition, and detailed facial analysis (identifying age, gender, and emotions).",
    github: "https://github.com/deepak9285/imagedetection",
    demo: "https://imagedetection-henna.vercel.app/",
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background border border-border text-foreground hover:bg-muted"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all p-4 flex flex-col">

                  {/* Top Colored Image/Header Section */}
                  <div className={`relative w-full rounded-2xl ${project.color} pt-12 pb-16 flex justify-center items-center basis-auto shrink-0`}>

                    {/* White Circle Info */}
                    <div className="w-48 h-48 bg-card rounded-full flex flex-col justify-center items-center shadow-lg p-4 text-center z-10 transition-transform hover:scale-105 duration-300">
                      <h3 className={`text-2xl font-extrabold ${project.textColor} leading-tight`}>
                        {project.title}
                      </h3>
                      <p className={`text-[11px] mt-2 font-medium ${project.textColor} opacity-80`}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Badge at Bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-card px-6 py-2 rounded-t-xl text-sm font-semibold text-muted-foreground z-20 shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Content Below */}
                  <div className="pt-6 px-2 flex-grow flex flex-col">
                    <h4 className="text-xl font-bold text-center text-foreground">
                      {project.title}
                    </h4>

                    <p className="mt-4 text-[13px] text-muted-foreground text-left leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex  justify-center gap-3 pt-6 pb-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.github, "_blank")}
                        className="rounded-full hover:cursor-pointer px-5"
                      >
                        <FiGithub className="mr-2" /> Code
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        className="rounded-full hover:cursor-pointer px-5"
                      >
                        <FiPlay className="mr-2" /> Demo
                      </Button>
                    </div>
                  </div>

                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}