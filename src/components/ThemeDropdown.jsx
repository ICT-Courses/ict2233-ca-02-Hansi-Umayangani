import { useState, useEffect } from "react"
import { Sun, Moon, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import Button from "./Button"

export default function ThemeDropdown() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleSelect = (mode) => {
  setTheme(mode)
  setOpen(false)
   }

  if (!mounted) return null

  return (
    <div className="relative inline-block text-left">
        {/* Main button */}
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setOpen(!open)}
        >
            {theme === "light" && <Sun className="h-5 w-5" />}
            {theme === "dark" && <Moon className="h-5 w-5" />}
            {theme === "system" && <Laptop className="h-5 w-5" />}
            <span className="sr-only">Select theme</span>
        </Button>
    </div>
  )
}