import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { Button } from "./ui/Button";
import { useEffect, useState } from "react";

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = ["Full stack Developer", "Java developer", "React native  developer", "DSA Enthusiast"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [titles.length]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
            Hi, I am
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Deepak Kumar Shah
          </h1>
          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <span className="text-2xl md:text-4xl text-muted-foreground mr-2">I'm a</span>
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-semibold text-foreground"
            >
              {titles[textIndex]}
            </motion.span>
          </div>

          <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
            Building impactful mobile & web experiences focusing on scalable and user-friendly applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '#projects'}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => window.location.href = '#contact'}>
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll down">
          <HiArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
