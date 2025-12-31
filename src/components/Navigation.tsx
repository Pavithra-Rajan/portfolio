import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { playNavigationKeySound } from "./TypewriterText";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/", key: "H" },
  { label: "Blogs", path: "/blogs", key: "B" },
  { label: "Musings", path: "/musings", key: "M" },
  { label: "Art", path: "/art", key: "A" },
  { label: "Projects", path: "/projects", key: "P" },
  { label: "Work", path: "/work", key: "W" },
  { label: "Resume", path: "/resume", key: "R" },
];

export function Navigation() {
  const location = useLocation();

  const handleKeyClick = () => {
    playNavigationKeySound();
  };

  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <Link 
              to="/" 
              onClick={handleKeyClick}
              className="font-mono text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              Pavithra Rajan
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleKeyClick}
                    className={cn(
                      "key group",
                      isActive && "active bg-primary text-primary-foreground"
                    )}
                  >
                    <span className={cn(
                      "text-xs mr-1.5 opacity-50 group-hover:opacity-100 transition-opacity font-mono",
                      isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}>
                      {item.key}
                    </span>
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
