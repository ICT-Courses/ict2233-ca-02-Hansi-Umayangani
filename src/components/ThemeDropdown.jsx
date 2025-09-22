import { useState, useEffect } from "react"
import { Sun, Moon, Laptop } from "lucide-react"
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

        {/* Dropdown menu */}
        {open && (
            <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div className="py-1">
                <button
                className="w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleSelect("light")}
                >
                <Sun className="h-4 w-4" /> Light
                </button>
                <button
                className="w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleSelect("dark")}
                >
                <Moon className="h-4 w-4" /> Dark
                </button>
                <button
                className="w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleSelect("system")}
                >
                <Laptop className="h-4 w-4" /> System
                </button>
                </div>
            </div>
        )}
    </div>
  )
}