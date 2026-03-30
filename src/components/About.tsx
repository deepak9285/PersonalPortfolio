import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { FiDownload } from "react-icons/fi";
import ProfilePhoto from "../assets/ProfilePhoto.jpeg";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* The profile image wrapper */}
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-border shadow-xl">
              {/* Replace with actual image later */}
              {/* <div className="bg-gradient-to-br from-primary/30 to-background flex items-center justify-center text-4xl font-bold text-muted-foreground"> */}
              <img src={ProfilePhoto} />
              {/* </div> */}
            </div>

            {/* Decorative background block */}
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl -z-10 blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Software developer with strong problem-solving skills, having solved 600+ DSA problems across LeetCode, CodeChef, and GeeksforGeeks. Experienced in building scalable full-stack applications using Java, Spring Boot, and React Native.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Interned at Matrix Innovation and PTC, working on real-world systems and production-level code. I am currently deepening my expertise in <span className="font-medium text-foreground">System Design</span>, applying strong <span className="font-medium text-foreground">systems thinking</span> to architect scalable, resilient, and highly available solutions for complex business cases.
            </p>
            <div className="pt-4 border-t border-border mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground">Experience</h4>
                  <p className="text-muted-foreground text-sm mt-1">PTC Software & Matrix</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Problem Solving</h4>
                  <p className="text-muted-foreground text-sm mt-1">600+ DSA Problems</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Architecture</h4>
                  <p className="text-muted-foreground text-sm mt-1">System Design & Thinking</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <a href="/DeepakResume.pdf" download>
                <Button size="lg" className="flex items-center gap-2 hover:cursor-pointer">
                  <FiDownload /> Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
