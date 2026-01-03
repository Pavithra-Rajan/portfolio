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
    id: "2",
    title: "How can your localhost:8080 grow up and move out?",
    excerpt: "Hosting and deployment sound scary in the same way “filing taxes” and “emotional availability” sound scary. You know they're important, but you'd really like to avoid them for as long as...",
    date: "2026-01-10",
    readTime: "7 min",
    tags: ["Hosting", "Deployment", "DNS"],
  },
  {
    id: "1",
    title: "Beauty lies in the AI of the beholder",
    excerpt: "Well, well, well. Looks like we've reached a new level of society's obsession with rating our looks. Now, not only do we have to deal with humans judging us, but machines too!",
    date: "2020-07-23",
    readTime: "6 min",
    tags: ["Machine Learning", "Deep Learning", "Python"],
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
            All things tech
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
