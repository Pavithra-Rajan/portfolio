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
    company: "D. E. Shaw & Co",
    role: "Senior Member, Tech",
    period: "Jan 2025 — Jul 2025",
    description: "Took lead in maintaining ELK infrastructure, ensuring high availability and performance for critical applications.",
    highlights: [
      "Managed a 900TB ELK production cluster as one of five administrators. Improved cluster storage efficiency by 12% through GPFS snapshotting and automated offline snapshot workflows.", 
      "Set-up the Linux infrastructure for a new datacenter involving time servers, PXE boot servers, and authentication servers.",
    ],
  },
  {
    id: "2",
    company: "D. E. Shaw & Co",
    role: "Member Tech",
    period: "Jul 2023 — Dec 2024",
    description: "Garnered restricted access to administer critical infrastructure systems, ensuring their reliability and security.",
    highlights: [
      "Administered 6,000+ RHEL servers with privileged root access. Executed releases across 300+ infrastructure servers and independently led RHEL7 to RHEL8 migration for provisioning, SFTP, and utility servers.",
      "Collaborated on migration from SearchGuard to Elastic Security by developing scripts and implementing critical configuration changes.",
      "Spearheaded GitHub Enterprise Server operations as one of three global administrators, supporting 1,600+ repositories and 2,000+ users.",
      "Led upgrades, deployed infrastructure for Dependabot and GitHub Actions runners, and served as the primary escalation point of contact.",
    ],
  },
  {
    id: "3",
    company: "D. E. Shaw & Co",
    role: "System Engineering Intern",
    period: "May 2022 — Jul 2022",
    description: "Gained hands-on experience with PKI infrastructure and certificate lifecycle management.",
    highlights: [
      "Designed and developed a Certificate Manager to manage the lifecycle of X.509 certificates for the firm's internal websites and services.",
      "Reduced operational toil of SRE engineers in the firm by approximately 35 hours each month.",
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
