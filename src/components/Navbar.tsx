import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
          Deepak<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border"
          >
            <ul className="flex flex-col items-center justify-center space-y-8 h-[calc(100vh-80px)] text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
