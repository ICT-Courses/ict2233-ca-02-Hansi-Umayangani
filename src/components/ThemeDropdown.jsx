import { useState, useEffect } from "react"
import { Sun, Moon, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import Button from "./Button"

export default function ThemeDropdown() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return <div className="relative inline-block text-left"></div>
}