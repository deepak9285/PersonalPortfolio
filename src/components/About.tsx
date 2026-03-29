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
              I am a passionate developer committed to building scalable and user-friendly applications.
              Currently, I focus on creating seamless web and mobile experiences that merge beautiful design
              with optimal performance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              During my internship at Matrix Innovation, I gained valuable industry experience, honing my
              problem-solving skills and collaborating on impactful projects.
            </p>

            <div className="pt-4 border-t border-border mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground">Experience</h4>
                  <p className="text-muted-foreground">Matrix Innovation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Problem Solving</h4>
                  <p className="text-muted-foreground">600+ DSA Problems</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" className="flex items-center gap-2">
                <FiDownload /> Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
