"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"
import Button from "./Button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
  const newErrors = {}
  if (!formData.name.trim()) newErrors.name = "Name is required"
  if (!formData.email.trim()) newErrors.email = "Email is required"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    newErrors.email = "Please enter a valid email address"
  if (!formData.subject.trim()) newErrors.subject = "Subject is required"
  if (!formData.message.trim()) newErrors.message = "Message is required"
  else if (formData.message.trim().length < 10)
    newErrors.message = "Message must be at least 10 characters long"

  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="font-medium">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="font-medium">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="font-medium">Subject *</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-medium">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about your project or just say hello..."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            />
          </div>

          <Button type="submit" className="w-full flex items-center justify-center gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
