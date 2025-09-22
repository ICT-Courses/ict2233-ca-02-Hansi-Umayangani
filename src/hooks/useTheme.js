import { useState, useEffect } from "react"

export default function useTheme() {
  const [theme, setTheme] = useState("system")

  useEffect(() => {
    // Load saved preference
    const savedTheme = localStorage.getItem("theme") || "system"
    applyTheme(savedTheme)
    setTheme(savedTheme)
  }, [])

  const applyTheme = (mode) => {
  if (mode === "dark") {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else if (mode === "light") {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  } else {
    // System mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", "system")
  }
}


  return { theme, setTheme }
}