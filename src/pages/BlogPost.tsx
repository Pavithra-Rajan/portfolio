import { Layout } from "@/components/Layout";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import trash_image from "@/assets/trash.png";
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  heroImage?: string;
}

const blogPosts: Record<string, BlogPost> = {
  "1": {
    id: "1",
    title: "The Un-Thrown Trash",
    date: "2023-05-15",
    readTime: "2 min",
    tags: ["thoughts", "symbolism", "prose"],
    heroImage: trash_image,
    content: `
When I was growing up, my mother had a strict rule: throwing out the trash every evening before my parents came home. Forgetting this chore was inexcusable, as she insisted that the kitchen would become engulfed in the sour stench of leftovers—a smell she attributed to neglect. This non-negotiable rule had no clause for my busy routine or tiring day. There was something about the tone that struck me. It was stern but purposeful. Years later, when I entered adulthood, I realized that perhaps it wasn't just about throwing the trash.

Both my parents worked long hours. Being in the same field of work, they became partners in every sense—balancing work, raising me in a country that wasn't our own but eventually became home, and keeping the household running like a precisely built bridge, perhaps inspired by their daily course of work. Our kitchen was their sacred space. My dad would slice vegetables or meat with the finesse of a craftsman, my mom would stir a pot, and amidst the whistles of the pressure cooker as old as me, they'd confide in each other about the pressures of their task deadlines. Sometimes, it would just be quietness complementing the boiling water, a stark contrast to a possible chaotic day. Despite their separate worlds during the day, the kitchen was where they united, perhaps explaining why she was insistent on clearing away the worries and remnants of the previous day.

There's something symbolic about trash—letting go of what we no longer need and, more importantly, what no longer needs us. My mom used to say, “You need to throw it away before it consumes your space”. And in a way, that is life too. How often do we cling to things—grudges, fears, past mistakes—holding on just a bit too long until they begin to taint our present? Throwing out the trash wasn't just a chore; it was a lesson in knowing when to take action and when to let go. Though the perfect moment might elude us as it flits by, we can unmistakably feel the pang of it slipping past us.   


Fast forward to adulthood, to my rented flat, where the evenings are much quieter. My flatmate and I, busy with work and life, often forget the little things—like looking after ourselves and, most importantly, throwing out the trash. More than once, we've come home to that familiar smell, both of us looking sheepish, reminded of the routines we've neglected. It's funny how life circles back. The simple task that my mom enforced with such rigidity now feels like a lifeline back to that warm kitchen, the clatter of pots, and the hum of my parents' quiet chatter. In such moments, I am back home in that small kitchen with that bright 20W tube light, realizing how my parents taught me not just how to take care of a home but how to take care of life.
`
  },
  "2": {
    id: "2",
    title: "The Art of Writing Clear Code",
    excerpt: "Code is read far more often than it's written. Exploring the principles that make code not just functional, but comprehensible to future readers—including yourself.",
    date: "2024-11-28",
    readTime: "6 min",
    tags: ["clean-code", "practices"],
    content: `
## Why Clarity Matters

Code is a form of communication. Yes, it tells computers what to do, but more importantly, it tells other developers (including future you) what you *intended* to do.

## Naming Things

> "There are only two hard things in Computer Science: cache invalidation and naming things."

Good names are self-documenting:

\`\`\`typescript
// Bad
const d = new Date();
const u = users.filter(x => x.a);

// Good  
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
\`\`\`

## Functions Should Do One Thing

A function that does one thing well is easier to test, debug, and reuse:

\`\`\`typescript
// Instead of one giant function
function processUserData(user: User): void {
  // Validate
  // Transform
  // Save
  // Notify
}

// Break it down
function validateUser(user: User): ValidationResult { }
function transformUserData(user: User): ProcessedUser { }
function saveUser(user: ProcessedUser): void { }
function notifyUserCreated(user: ProcessedUser): void { }
\`\`\`

The path to clarity is paved with small, focused functions.
    `
  },
  "3": {
    id: "3",
    title: "Distributed Systems: A Practical Introduction",
    excerpt: "Navigating the complexities of distributed computing without drowning in theory. CAP theorem, eventual consistency, and why your data might be lying to you.",
    date: "2024-10-12",
    readTime: "12 min",
    tags: ["distributed-systems", "fundamentals"],
    content: `
## What Is a Distributed System?

A distributed system is a collection of independent computers that appears to its users as a single coherent system. Simple definition, complex reality.

## The CAP Theorem

You can only pick two:
- **Consistency**: Every read receives the most recent write
- **Availability**: Every request receives a response
- **Partition Tolerance**: The system continues despite network failures

In practice, partitions happen. So you're really choosing between consistency and availability.

## Eventual Consistency

Sometimes "good enough" is actually good enough. Many systems don't need immediate consistency:

\`\`\`typescript
// This is fine for many use cases
await updateUserProfile(userId, newData);
// The read might return stale data briefly
const profile = await getUserProfile(userId);
\`\`\`

The key is understanding when eventual consistency is acceptable and when it isn't.

## More to explore...

This is just the beginning. Future posts will dive into consensus algorithms, distributed transactions, and the joys of debugging systems where time is relative.
    `
  }
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <Layout>
        <div className="max-w-2xl py-12">
          <p className="text-muted-foreground font-mono">Post not found.</p>
          <Link to="/blogs" className="text-foreground underline underline-offset-4 mt-4 inline-block">
            ← Back to blogs
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-2xl">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-mono text-sm opacity-0 animate-fade-in-up"
          style={{ animationFillMode: 'forwards' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blogs
        </Link>

        <header className="mb-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '50ms' }}>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4 font-mono">
            <time>{formatDate(post.date)}</time>
            <span className="text-border">•</span>
            <span>{post.readTime} read</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-mono font-medium mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 bg-muted text-muted-foreground rounded-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {post.heroImage && (
          <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '100ms' }}>
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover grayscale border border-border"
            />
          </div>
        )}

        <div
          className="prose-typewriter opacity-0 animate-fade-in-up"
          style={{ animationFillMode: 'forwards', animationDelay: '150ms' }}
        >
          {post.content.split('\n').map((line, index) => {
            // Handle code blocks
            if (line.trim().startsWith('```')) {
              return null; // Skip markers
            }

            // Handle headers
            if (line.startsWith('## ')) {
              return (
                <h2 key={index} className="text-xl font-mono font-medium mt-8 mb-4">
                  {line.replace('## ', '')}
                </h2>
              );
            }
            if (line.startsWith('### ')) {
              return (
                <h3 key={index} className="text-lg font-mono font-medium mt-6 mb-3">
                  {line.replace('### ', '')}
                </h3>
              );
            }

            // Handle blockquotes
            if (line.startsWith('> ')) {
              return (
                <blockquote key={index} className="border-l-2 border-border pl-4 my-4 text-muted-foreground italic">
                  {line.replace('> ', '')}
                </blockquote>
              );
            }

            // Handle list items
            if (line.trim().startsWith('- ')) {
              return (
                <li key={index} className="ml-4 text-foreground/90 mb-1">
                  {line.replace(/^[\s]*- /, '')}
                </li>
              );
            }
            if (line.trim().match(/^\d+\. /)) {
              return (
                <li key={index} className="ml-4 text-foreground/90 mb-1 list-decimal">
                  {line.replace(/^[\s]*\d+\. /, '')}
                </li>
              );
            }

            // Handle horizontal rules
            if (line.trim() === '---') {
              return <hr key={index} className="my-8 border-border" />;
            }

            // Handle inline code
            if (line.includes('`') && !line.startsWith('```')) {
              const parts = line.split(/(`[^`]+`)/);
              return (
                <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                  {parts.map((part, i) =>
                    part.startsWith('`') ? (
                      <code key={i} className="bg-muted px-1.5 py-0.5 text-sm font-mono rounded-sm">
                        {part.slice(1, -1)}
                      </code>
                    ) : part
                  )}
                </p>
              );
            }

            // Handle paragraphs
            if (line.trim() && !line.trim().startsWith('```')) {
              return (
                <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                  {line}
                </p>
              );
            }

            return null;
          })}
        </div>

        <footer className="mt-12 pt-8 border-t border-border opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '200ms' }}>
          <p className="text-sm text-muted-foreground font-mono">
            // End of transmission
          </p>
        </footer>
      </article>
    </Layout>
  );
}
