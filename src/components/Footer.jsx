import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Button from "./Button";

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourprofile", label: "Twitter" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full relative z-20 bg-background/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-y-8 md:gap-x-20 text-center md:text-left">
          {/* Sections will be added here */}
        </div>
      </div>
    </footer>
  );
}