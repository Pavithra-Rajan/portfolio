import { Layout } from "@/components/Layout";

interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: WorkExperience[] = [
  {
    id: "1",
    company: "Tech Company",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    description: "Leading backend architecture for core platform services, mentoring junior engineers, and driving technical decisions across teams.",
    highlights: [
      "Redesigned authentication system, improving security and reducing login latency by 40%",
      "Led migration from monolith to microservices, enabling independent team deployments",
      "Established engineering best practices and code review standards",
    ],
  },
  {
    id: "2",
    company: "Startup Inc",
    role: "Software Engineer",
    period: "2020 — 2022",
    description: "Full-stack development in a fast-paced environment, shipping features that directly impacted user growth and retention.",
    highlights: [
      "Built real-time collaboration features used by 10K+ daily active users",
      "Implemented A/B testing framework that improved conversion by 25%",
      "Optimized database queries, reducing page load times by 60%",
    ],
  },
  {
    id: "3",
    company: "Research Lab",
    role: "Research Assistant",
    period: "2018 — 2020",
    description: "Conducted research on distributed systems and machine learning, publishing papers and developing experimental prototypes.",
    highlights: [
      "Co-authored paper on efficient data replication strategies",
      "Developed ML pipeline for natural language processing research",
      "Mentored undergraduate students on research methodologies",
    ],
  },
];

export default function Work() {
  return (
    <Layout>
      <div className="max-w-2xl">
        <header className="mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase mb-4">
            // Work Experience
          </p>
          <h1 className="text-2xl md:text-3xl font-mono font-medium mb-4">
            Professional journey
          </h1>
          <p className="text-muted-foreground">
            A timeline of roles, responsibilities, and impact. 
            Focus on what matters: building things that work.
          </p>
        </header>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="relative pl-8 pb-12 last:pb-0 opacity-0 animate-fade-in-up"
              style={{ animationFillMode: 'forwards', animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              )}
              <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[3.5px] rounded-full bg-foreground" />
              
              {/* Content */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="font-mono font-medium text-lg">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
                <time className="text-sm font-mono text-muted-foreground shrink-0">
                  {exp.period}
                </time>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm flex gap-3">
                    <span className="text-muted-foreground shrink-0">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
