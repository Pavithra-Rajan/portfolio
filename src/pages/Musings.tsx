import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

interface MusingPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const musingPosts: MusingPost[] = [
  {
    id: "1",
    title: "Time Zones",
    excerpt: "Back in middle school, I studied a chapter in Geography called \"Latitudes and Longitudes\", which covered the different time zones across the world. The text had interesting questions at the end...",
    date: "2025-01-01",
    readTime: "3 min",
    tags: ["symbolism", "prose", "thoughts"],
  },
  {
    id: "2",
    title: "The Un-Thrown Trash",
    excerpt: "When I was growing up, my mother had a strict rule: throwing out the trash every evening before my parents came home. Forgetting this chore was inexcusable, as she insisted...",
    date: "2024-09-15",
    readTime: "3 min",
    tags: ["symbolism", "prose", "thoughts"],
  },
  {
    id: "3",
    title: "Cache-ing Memories",
    excerpt: "Note: While my page has maintained a strict monochromatic theme so far, I am compelled to break away from it as my college memories have infused vibrant colours into my life. They...",
    date: "2023-05-22",
    readTime: "12 min",
    tags: ["NITC", "memories", "college life"],
  },
];

export default function Blogs() {
  return (
    <Layout>
      <div className="max-w-2xl">
        <header className="mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase mb-4">
            // Creative Pieces
          </p>
          <h1 className="text-2xl md:text-3xl font-mono font-medium mb-4">
            Just thoughts and musings
          </h1>
          <p className="text-muted-foreground">
            Short-form thoughts, observations, and the occasional moments of clarity.
          </p>
        </header>

        <div className="space-y-8">
          {musingPosts.map((post, index) => (
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
              
              <Link to={`/musings/${post.id}`} className="block">
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
