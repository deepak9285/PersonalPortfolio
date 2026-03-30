import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {currentYear} Deepak Kumar Sah. All rights reserved.
        </p>

        <div className="flex items-center space-x-6 text-foreground/80">
          <a
            href="https://github.com/deepak9285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/deepak-kumar-shah-2669ab188"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:kumardeepakshah9285.com"
            className="hover:text-primary transition-colors"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
