"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect } from "react"
import { useTheme } from "next-themes"

function ThemeToggleListener() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't trigger if any input elements are focused
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      // Don't trigger if modifier keys are pressed
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      // Toggle theme when 'd' key is pressed
      if (event.key.toLowerCase() === "d") {
        setTheme(theme === "dark" ? "light" : "dark")
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [theme, setTheme])

  return null
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ThemeToggleListener />
      {children}
    </NextThemesProvider>
  )
}
