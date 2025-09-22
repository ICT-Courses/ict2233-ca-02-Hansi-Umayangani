import { useState, useEffect } from "react"

export default function useTheme() {
  const [theme, setTheme] = useState("system")

  useEffect(() => {
    // Load saved preference
    const savedTheme = localStorage.getItem("theme") || "system"
    applyTheme(savedTheme)
    setTheme(savedTheme)
  }, [])

  return { theme, setTheme }
}