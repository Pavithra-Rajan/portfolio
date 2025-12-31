import { Layout } from "@/components/Layout";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <Layout>
      <div className="max-w-2xl">
        <header className="mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <div>
            <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase mb-4">
              // Resume
            </p>
            <h1 className="text-2xl md:text-3xl font-mono font-medium">
              Your Name
            </h1>
            <p className="text-muted-foreground mt-1">
              Software Engineer • Writer • Builder
            </p>
          </div>
          
          <button className="key self-start flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </header>

        {/* Resume Content */}
        <div className="space-y-10 opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
          {/* Contact */}
          <section>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-mono text-muted-foreground">
              <span>hello@example.com</span>
              <span>github.com/username</span>
              <span>linkedin.com/in/username</span>
            </div>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-sm font-mono font-medium uppercase tracking-wider mb-3 pb-2 border-b border-border">
              Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Software engineer with 5+ years of experience building scalable systems and 
              leading technical initiatives. Passionate about clean code, thoughtful 
              architecture, and the craft of engineering.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-sm font-mono font-medium uppercase tracking-wider mb-4 pb-2 border-b border-border">
              Experience
            </h2>
            <div className="space-y-6">
              <ResumeEntry
                title="Senior Software Engineer"
                organization="Tech Company"
                period="2022 — Present"
                items={[
                  "Led backend architecture for core platform services",
                  "Redesigned authentication system, reducing latency by 40%",
                  "Mentored team of 4 junior engineers",
                ]}
              />
              <ResumeEntry
                title="Software Engineer"
                organization="Startup Inc"
                period="2020 — 2022"
                items={[
                  "Built real-time collaboration features for 10K+ users",
                  "Implemented A/B testing framework improving conversion 25%",
                  "Optimized database queries, reducing load times by 60%",
                ]}
              />
              <ResumeEntry
                title="Research Assistant"
                organization="Research Lab"
                period="2018 — 2020"
                items={[
                  "Published research on distributed systems",
                  "Developed ML pipeline for NLP research",
                ]}
              />
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-sm font-mono font-medium uppercase tracking-wider mb-4 pb-2 border-b border-border">
              Education
            </h2>
            <div className="space-y-4">
              <ResumeEntry
                title="M.S. Computer Science"
                organization="University Name"
                period="2018 — 2020"
                items={["Focus: Distributed Systems, Machine Learning"]}
              />
              <ResumeEntry
                title="B.S. Computer Science"
                organization="University Name"
                period="2014 — 2018"
                items={["Magna Cum Laude"]}
              />
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-sm font-mono font-medium uppercase tracking-wider mb-4 pb-2 border-b border-border">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-medium mb-2">Languages</h3>
                <p className="text-muted-foreground">
                  Go, Python, TypeScript, Rust, SQL
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Technologies</h3>
                <p className="text-muted-foreground">
                  Kubernetes, PostgreSQL, Redis, Kafka
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Practices</h3>
                <p className="text-muted-foreground">
                  System Design, Code Review, Technical Writing
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Interests</h3>
                <p className="text-muted-foreground">
                  Distributed Systems, Developer Tools, Typography
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Print note */}
        <div className="mt-12 pt-8 border-t border-border opacity-0 animate-fade-in-up animation-delay-300" style={{ animationFillMode: 'forwards' }}>
          <p className="text-xs text-muted-foreground font-mono">
            // This page is designed to be printer-friendly. Use Ctrl+P to print.
          </p>
        </div>
      </div>
    </Layout>
  );
}

function ResumeEntry({ 
  title, 
  organization, 
  period, 
  items 
}: { 
  title: string; 
  organization: string; 
  period: string;
  items: string[];
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{organization}</p>
        </div>
        <time className="text-xs font-mono text-muted-foreground shrink-0">
          {period}
        </time>
      </div>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
