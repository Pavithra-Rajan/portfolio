import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background paper-texture">
      <Navigation />
      <main className="flex-1 container py-12 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
