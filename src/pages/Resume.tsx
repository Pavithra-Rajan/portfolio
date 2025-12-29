import { Layout } from "@/components/Layout";
import { Download } from "lucide-react";
import resumePdf from "@/assets/Pavithra_Rajan_Resume.pdf";


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resumePdf;
  link.download = "Pavithra_Rajan_Resume.pdf";
  link.click();
};

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
              Pavithra Rajan
            </h1>
            <p className="text-muted-foreground mt-1">
              Systems Engineer • Problem Solver • Developer
            </p>
          </div>
          <button
          onClick={handleDownload}
          className="key self-start flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </button>
        </header>

        {/* Resume Content */}
        <div className="space-y-10 opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>

          {/* Summary */}
          <section>
            <h2 className="text-sm font-mono font-medium uppercase tracking-wider mb-3 pb-2 border-b border-border">
              Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Systems-minded engineer who enjoys turning complexity into clarity. Drawn to problems at scale, where reliability, performance, and thoughtful design matter just as much as the code itself. Cares deeply about building technology that feels robust, intentional, and human.
            </p>
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
                  Python, Python, Bash, C/C++
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Practices</h3>
                <p className="text-muted-foreground">
                  System Design, Code Review, Technical Writing
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Administration Expertise</h3>
                <p className="text-muted-foreground">
                  Enterprise Github, ELK Stack, Linux, GPFS
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Technologies</h3>
                <p className="text-muted-foreground">
                  Puppet, ReactJS, Flutter, Grafana, Prometheus, FastAPI, HashiCorp Vault, AWS (RDS,DynamoDB, EC2, Lambda, Lex, SQS, EKS, CloudFormation), Docker, Semgrep, OpenAI API, Gemini
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-sm font-mono font-medium uppercase tracking-wider mb-4 pb-2 border-b border-border">
              Experience
            </h2>
            <h5 className="text-sm text-muted-foreground font-mono mb-2">
              More details in the Work section.
            </h5>
            <div className="space-y-6">
              <ResumeEntry
                title="Senior Member, Tech"
                organization="D. E. Shaw & Co"
                period="Jan 2025 — Jul 2025"
                items={[
                ]}
              />
              <ResumeEntry
                title="Member, Tech"
                organization="D. E. Shaw & Co"
                period="Jul 2023 — Dec 2024"
                items={[
                ]}
              />
              <ResumeEntry
                title="Systems Engineering Intern"
                organization="D. E. Shaw & Co"
                period="May 2022 — Jul 2022"
                items={[
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
                title="New York University"
                organization="M.S. Computer Science"
                period="Sept 2025 — May 2027"
                items={[
                  "GPA: 4.0/4.0",
                  "Focus: Distributed Systems, Secure Systems, Machine Learning",
                ]}
              />
              <ResumeEntry
                title="National Institute of Technology, Calicut"
                organization="B.Tech Computer Science and Engineering"
                period="Jul 2019 — May 2023"
                items={["GPA: 3.82/4.0, First Class Distinction"]}
              />
            </div>
          </section>

          {/* Publications */}
          <section>
            <h2 className="text-sm font-mono font-medium uppercase tracking-wider mb-4 pb-2 border-b border-border">
              Publications
            </h2>
            <div className="space-y-4">
              <ResumeEntry
                title="Proof-of-Variable-Authority: A Blockchain Consensus Mechanism for Securing IoT Networks"
                organization="International Conference on Information Systems Security (ICISS) 2023"
                period=""
                items={[
                  "Designed a custom blockchain consensus mechanism with a robust PKI system to secure IoT networks, enabling seamless device authentication through device certificates.", 
                  "Developed a Proof-of-Concept to demonstrate the end-to-end functionality of the design.",
                ]}
              />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-mono font-medium uppercase tracking-wider mb-4 pb-2 border-b border-border">
              Hackathons
            </h2>
            <div className="space-y-4">
              <ResumeEntry
                title="Hack Dibner 2025 - 1st runner up"
                organization="NYU Dibner Library"
                period="Dec 2025"
                items={[
                  "Designed an occupancy detection system with PIR sensors to monitor and display real-time seating availability in library study areas, enhancing user experience and space utilization.",
                ]}
              />
              <ResumeEntry
                title="Infinity Hacks - 2nd runner up"
                organization="D. E. Shaw & Co [400+ participants]"
                period="Sept 2023"
                items={[
                  "Developed an AI-powered tool to create a secondary brain for developers of the firm to store and retrieve internal documentation, Slack threads, mails using natural language queries, enhancing information accessibility and productivity.",
                ]}
              />
              <ResumeEntry
                title="NITCkathon - 1st runner up"
                organization="JMR Infotech x NIT Calicut [100+ participants]"
                period="Mar 2023"
                items={[
                  "Implemented a predictor for consumer buying behavior powered by ML, analyzing historical data to forecast purchasing trends and enhance marketing strategies.",
                  "Designed and developed a user-friendly web application to present the predictive insights effectively.",
                ]}
              />
              <ResumeEntry
                title="Code-Init() - 1st runner up"
                organization="CSEA, NIT Calicut [200+ participants]"
                period="Sept 2021"
                items={[
                  "Created an intuitive timetable generator based on institute slots at NIT Calicut, optimizing class schedules for students.",
                ]}
              />
              <ResumeEntry
                title="Code for Good - Participant"
                organization="JP Morgan and Chase [400+ participants shortlisted from 15,000 applicants]"
                period="Jul 2021"
                items={[
                  "Developed a web application to connect volunteers with NGOs for social good initiatives, facilitating collaboration and community engagement.",
                  "Implemented and deployed an ML-based recommendation system to match volunteers with suitable NGOs based on their skills and interests.",
                ]}
              />
            </div>
          </section>    
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
