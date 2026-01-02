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
    description: "An Agentic event scheduler powered by Gemini and Google Cal API to plan your day effectively with time blockings",
    techStack: ["React", "FastAPI", "Gemini API", "Google Calendar API"],
    outcome: "Developed as part of ODSC 2025 Hackathon, NYC",
    link: "https://github.com/Pavithra-Rajan/zone"
  },
  {
    id: "2",
    title: "VulCAN: Vulnerability Code Analyser",
    description: "A scalable code vulnerability analyser for GitHub repositories hosted on AWS",
    techStack: ["JavaScript", "AWS Fargate", "SQS", "SES", "S3", "RDS", "Flask", "Semgrep"],
    outcome: "As part of NYU Cloud Computing Course Project, Fall 2025",
    link: "https://github.com/NYU-Cloud/Vulnerability-Detector"
  },
    {
    id: "3",
    title: "VSAT link encryption PoC",
    description: "A PoC to indicate the relevance of E2E and Digital signatures in VSAT links to ensure confidentiality and integrity of data",
    techStack: ["virsh", "networking", "FastAPI", "mitmproxy"],
    outcome: "As part of NYU Information Security and Privacy Course Project, Fall 2025",
    link: "https://github.com/Pavithra-Rajan/CS-GY-G6813-VSAT-Link-Encryption"
  },
  {
    id: "4",
    title: "swimiNIT",
    description: "A mobile app to manage NITC\'s swimming pool users and employees following SDLC principles and Agile methodology",
    techStack: ["Flutter", "Firebase", "SDLC"],
    outcome: "As part of NITC Software Engineering Laboratory Course Project, S7 2022",
    link: "https://github.com/Pavithra-Rajan/swimiNIT"
  },
  {
    id: "5",
    title: "AWS EKS Deployment Pipeline",
    description: "A persistent To-Do application deployed on AWS EKS with CI/CD pipeline and monitoring",
    techStack: ["EKS", "Docker", "Prometheus"],
    outcome: "As part of NYU Cloud Computing Course Assignment 2, Fall 2025",
    link: "https://github.com/Pavithra-Rajan/EKS-Deployment"
  },
    {
    id: "6",
    title: "Consumer Buying Behavior Prediction",
    description: "A web application that predicts consumer buying behavior using machine learning algorithms",
    techStack: ["Python", "EDA", "XGB", "FastAPI", "ReactJS"],
    outcome: "Developed as part of NITCkathon 2023, First Runner Up",
    link: "https://github.com/LearningRate-0"
  },
  {
    id: "7",
    title: "Dining Concierge Chatbot",
    description: "A web-based interactive dining concierge chatbot using Amazon Lex powered with Yelp API integration",
    techStack: ["AWS Lex", "Lambda", "SQS", "SES", "DynamoDB", "API Gateway", "AWS OpenSearch"],
    outcome: "As part of NYU Cloud Computing Course Assignment 1, Fall 2025",
    link: "https://github.com/Pavithra-Rajan/Dining-Concierge-Chatbot"
  },
  {
    id: "8",
    title: "Intelligent Photo Album Organizer",
    description: "A photo album organizer that categorizes and tags images using AWS Rekognition and stores it into S3 with metadata on OpenSearch",
    techStack: ["AWS OpenSearch", "Rekognition", "CloudFormation", "AWS Lex", "Lambda", "S3"],
    outcome: "As part of NYU Cloud Computing Course Assignment 3, Fall 2025",
    link: "https://github.com/Pavithra-Rajan/CS-GY-9223-Cloud-Assg3-Album"
  },
  {
    id: "9",
    title: "Cache Performance Evaluation and Parallelism Analysis",
    description: "Analyzed cache performance by comparing hit time, miss rate, and AMAT while varying L1 and L2 cache sizes.",
    techStack: ["Python", "gem5 simulator", "C", "CUDA"],
    outcome: "As part of NITC Computer Architecture Course Project, S8 2023",
    link: "https://github.com/Pavithra-Rajan/Computer-Architecture"
  },
  {
    id: "10",
    title: "Expense Tracker App",
    description: "A web application to track personal expenses with features like adding, editing, deleting expenses, and visualizing spending patterns. Conducted stress testing with JMeter.",
    techStack: ["HTML", "CSS", "JavaScript", "JMeter"],
    outcome: "As part of NITC Web Design and Programming Course Project, S8 2023",
    link: "https://github.com/Pavithra-Rajan/Expense-Tracker-App"
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
            thoughtful and well-engineered.
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
