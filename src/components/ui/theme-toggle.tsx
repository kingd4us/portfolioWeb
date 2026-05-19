import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../providers/theme-provider"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 border-2 border-transparent hover:border-foreground transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 hidden dark:block" />
      <Moon className="h-5 w-5 block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}