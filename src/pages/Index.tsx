import { Layout } from "@/components/Layout";
import { TypewriterText } from "@/components/TypewriterText";
import { useState } from "react";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Layout>
      <div className="max-w-2xl">
        {/* Manifesto Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
              // Hello, World
            </p>
            <h1 className="text-3xl md:text-4xl font-mono font-medium leading-tight">
              <TypewriterText 
                text="Systems Engineer. Developer. Writer."
                speed={40}
                delay={300}
                onComplete={() => setShowContent(true)}
              />
            </h1>
          </div>

          <div className={`space-y-6 text-lg leading-relaxed transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p>
              I craft software with the same care one takes pressing keys on a 
              well-worn typewriter with the hopes of each keystroke being  intentional, and each line purposeful.
            </p>
            <p className="text-muted-foreground">
              This is my corner of the web. A place for technical deep-dives, 
              scattered thoughts, creative experiments, and the artifacts of 
              building things that matter.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className={`mt-16 pt-8 border-t border-border transition-all duration-700 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm text-muted-foreground mb-6 font-mono">
            // Start exploring
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuickLink 
              href="/blogs" 
              title="Technical Blogs" 
              description="Deep dives into code, architecture, and engineering"
            />
            <QuickLink 
              href="/musings" 
              title="Musings" 
              description="Fragments, reflections, and raw thinking"
            />
            <QuickLink 
              href="/projects" 
              title="Projects" 
              description="Things I've built and lessons learned"
            />
            <QuickLink 
              href="/work" 
              title="Work Experience" 
              description="Professional journey and impact"
            />
          </div>
        </section>

        {/* Current Focus */}
        <section className={`mt-16 pt-8 border-t border-border transition-all duration-700 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            // Currently
          </p>
          <p className="text-muted-foreground">
            Building systems that scale, writing words that resonate, and finding 
            the quiet joy in well-crafted solutions.
          </p>
        </section>

      </div>
    </Layout>
  );
};

function QuickLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <a 
      href={href}
      className="group block p-4 border border-border rounded-sm hover:bg-card transition-colors"
    >
      <h3 className="font-mono font-medium mb-1 group-hover:underline underline-offset-4">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </a>
  );
}

export default Index;
