import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { playNavigationKeySound } from "./TypewriterText";
import { ThemeToggle } from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Home", path: "/", key: "H" },
  { label: "Blogs", path: "/blogs", key: "B" },
  { label: "Musings", path: "/musings", key: "M" },
  { label: "Art", path: "/art", key: "A" },
  { label: "Reading", path: "/reading", key: "E" },
  { label: "Projects", path: "/projects", key: "P" },
  { label: "Work", path: "/work", key: "W" },
  { label: "Resume", path: "/resume", key: "R" },
];

function NavItems() {
  const location = useLocation();

  const handleKeyClick = () => {
    playNavigationKeySound();
  };

  return (
    <>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={handleKeyClick}
            className={cn(
              "key group px-2.5",
              isActive && "active !bg-primary !text-primary-foreground"
            )}
          >
            <span className={cn(
              "text-xs mr-1 opacity-50 group-hover:opacity-100 transition-opacity font-mono",
              isActive ? "text-primary-foreground/70" : "text-muted-foreground"
            )}>
              {item.key}
            </span>
            <span className="text-sm">{item.label}</span>
          </Link>
        );
      })}
    </>
  );
}

export function Navigation() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyClick = () => {
    playNavigationKeySound();
  };

  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          <Link 
            to="/" 
            onClick={handleKeyClick}
            className="font-mono text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            Pavithra Rajan
          </Link>

          {/* Desktop Navigation: theme toggle rides the key row so it wraps with it */}
          <div className="hidden md:flex flex-wrap items-center justify-end gap-1.5">
            <NavItems />
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-accent rounded-md">
                    <Menu className="w-5 h-5" />
                  </button>
                </SheetTrigger>
              </div>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          handleKeyClick();
                          setIsOpen(false);
                        }}
                        className={cn(
                          "key group text-base py-2",
                          isActive && "active !bg-primary !text-primary-foreground px-2 rounded"
                        )}
                      >
                        <span className={cn(
                          "text-xs mr-1.5 opacity-50 group-hover:opacity-100 transition-opacity font-mono",
                          isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                        )}>
                          {item.key}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
}
