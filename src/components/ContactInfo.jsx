"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "gimhanihansika2020@gmail.com",
    href: "mailto:gimhanihansika2020@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94786620118",
    href: "tel:+94786620118",
    description: "Available Mon-Fri, 9AM-6PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: null,
    description: "Open to remote opportunities",
  },
]

export function ContactMethods() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <method.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">{method.label}</h4>
              {method.href ? (
                <a href={method.href} className="text-primary font-medium hover:underline">
                  {method.value}
                </a>
              ) : (
                <p className="font-medium">{method.value}</p>
              )}
              <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/alexjohnson", username: "@alexjohnson" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/alexjohnson", username: "Alex Johnson" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/alexjohnson", username: "@alexjohnson" },
]

export function SocialLinks() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Connect with me</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-xl shadow-sm hover:shadow-md transition duration-300 group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition duration-300">
                <social.icon className="h-5 w-5 text-primary group-hover:text-primary-dark transition duration-300" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition duration-300">
                  {social.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{social.username}</div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function ContactHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 
                       bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] 
                       bg-clip-text text-transparent"
          >
            Get In Touch
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--hero-paragraph)" }}
          >
            Let's discuss your next project or just say hello. I'm always excited to connect
            with fellow developers and potential collaborators.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
