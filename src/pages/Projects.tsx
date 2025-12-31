import { Layout } from "@/components/Layout";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  outcome: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Zone",
    description: "An Agentic event scheduler powered by Gemini and Google Cal API",
    techStack: ["React", "FastAPI", "Gemini API", "Google Calendar API"],
    outcome: "Developed as part of ODSC 2025 Hackathon, NYC",
    link: "https://github.com/Pavithra-Rajan/zone"
  },
  {
    id: "2",
    title: "Real-time Analytics Pipeline",
    description: "Stream processing system for analyzing user behavior patterns, enabling instant insights and anomaly detection.",
    techStack: ["Apache Kafka", "Flink", "PostgreSQL", "Grafana"],
    outcome: "Processing 100K+ events/second with 99.9% uptime",
  },
  {
    id: "3",
    title: "CLI Task Manager",
    description: "A terminal-based productivity tool inspired by mechanical keyboard workflows. Minimalist interface, maximum efficiency.",
    techStack: ["Rust", "SQLite", "Crossterm"],
    outcome: "Open-source project with 500+ GitHub stars",
  },
  {
    id: "4",
    title: "Machine Learning Infrastructure",
    description: "Automated ML pipeline for training, versioning, and deploying models at scale. Built for reproducibility and collaboration.",
    techStack: ["Python", "MLflow", "Docker", "AWS"],
    outcome: "Reduced model deployment time from days to hours",
  },
  {
    id: "5",
    title: "Typography Experiment Engine",
    description: "Generative art system that creates typographic compositions based on text input. Exploring the intersection of code and visual design.",
    techStack: ["TypeScript", "Canvas API", "WebGL"],
    outcome: "Featured in digital art exhibition",
  },
  {
    id: "6",
    title: "API Gateway Framework",
    description: "Lightweight, extensible API gateway with built-in rate limiting, authentication, and request transformation.",
    techStack: ["Node.js", "Express", "Redis", "JWT"],
    outcome: "Handling 50M+ requests daily in production",
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-4xl">
        <header className="mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase mb-4">
            // Projects & Coursework
          </p>
          <h1 className="text-2xl md:text-3xl font-mono font-medium mb-4">
            Things I've built
          </h1>
          <p className="text-muted-foreground max-w-xl">
            A selection of projects that represent my approach to problem-solving: 
            thoughtful, well-engineered, and built to last.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group p-6 border border-border bg-card hover:bg-accent/50 transition-colors opacity-0 animate-fade-in-up"
              style={{ animationFillMode: 'forwards', animationDelay: `${(index + 1) * 75}ms` }}
            >
              <h3 className="font-mono font-medium text-lg mb-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                {project.title}
              </a>
            </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-mono text-muted-foreground">
                  <span className="text-foreground"></span> {project.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
