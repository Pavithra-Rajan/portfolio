import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { playNavigationKeySound } from "./TypewriterText";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggle = () => {
    playNavigationKeySound();
    const newValue = !isDark;
    setIsDark(newValue);
    document.documentElement.classList.toggle("dark", newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="key group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="text-xs mr-1.5 opacity-50 group-hover:opacity-100 transition-opacity font-mono text-muted-foreground">
        {isDark ? "L" : "D"}
      </span>
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
