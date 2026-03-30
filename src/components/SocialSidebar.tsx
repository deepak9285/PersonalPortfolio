import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

export function SocialSidebar({ className = "" }: { className?: string }) {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={18} />,
      url: "https://linkedin.com/in/deepak-kumar-shah-2669ab188", // Ensure you update with real links
    },
    {
      name: "GitHub",
      icon: <FiGithub size={18} />,
      url: "https://github.com/deepak9285",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode size={18} />,
      url: "https://leetcode.com/deepak9285",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef size={18} />,
      url: "https://www.codechef.com/users/deepak3860",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank size={18} />,
      url: "https://www.hackerrank.com/profile/kumardeepakshah1",
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks size={18} />,
      url: "https://www.geeksforgeeks.org/profile/kumardeepakshah9285",
    },
    {
      name: "Instagram",
      icon: <FiInstagram size={18} />,
      url: "https://www.instagram.com/deepakkumarshah_/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col gap-4 ${className}`}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          title={link.name}
          className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:scale-110 transition-all shadow-sm"
        >
          {link.icon}
        </a>
      ))}
    </motion.div>
  );
}
