import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Resilient Systems: Lessons from Production",
    excerpt: "What happens when your database decides to take an unscheduled vacation? A deep dive into failure modes and how to design systems that gracefully handle the unexpected.",
    date: "2024-12-15",
    readTime: "8 min",
    tags: ["systems", "architecture", "reliability"],
  },
  {
    id: "2",
    title: "The Art of Writing Clear Code",
    excerpt: "Code is read far more often than it's written. Exploring the principles that make code not just functional, but comprehensible to future readers—including yourself.",
    date: "2024-11-28",
    readTime: "6 min",
    tags: ["clean-code", "practices"],
  },
  {
    id: "3",
    title: "Distributed Systems: A Practical Introduction",
    excerpt: "Navigating the complexities of distributed computing without drowning in theory. CAP theorem, eventual consistency, and why your data might be lying to you.",
    date: "2024-10-12",
    readTime: "12 min",
    tags: ["distributed-systems", "fundamentals"],
  },
];

export default function Blogs() {
  return (
    <Layout>
      <div className="max-w-2xl">
        <header className="mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase mb-4">
            // Technical Blogs
          </p>
          <h1 className="text-2xl md:text-3xl font-mono font-medium mb-4">
            Writing on code, systems, and craft
          </h1>
          <p className="text-muted-foreground">
            Long-form explorations of engineering problems, solutions, and the 
            thinking in between.
          </p>
        </header>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="group border-b border-border pb-8 last:border-0 opacity-0 animate-fade-in-up"
              style={{ animationFillMode: 'forwards', animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3 font-mono">
                <time>{formatDate(post.date)}</time>
                <span className="text-border">•</span>
                <span>{post.readTime} read</span>
              </div>
              
              <Link to={`/blogs/${post.id}`} className="block">
                <h2 className="text-xl font-mono font-medium mb-3 group-hover:underline underline-offset-4">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs font-mono px-2 py-1 bg-muted text-muted-foreground rounded-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}
