import { Layout } from "@/components/Layout";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import beauty from "@/assets/beauty.png";
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
    title: "Beauty lies in the AI of the beholder",
    date: "2020-07-27",
    readTime: "6 min",
    tags: ["Machine Learning", "Deep Learning", "Python"],
    heroImage: beauty,
    content: `
Well, well, well. Looks like we've reached a new level of society's obsession with rating our looks. Now, not only do we have to deal with humans judging us, but machines too! Machine learning, or ML for the uninitiated, is everywhere we turn. From Google search results to personalized music playlists on Spotify, and even the shows recommended to us on Netflix and Amazon Prime, all of it is credited to ML. We're drowning in a sea of data, and if we don't analyze it, it's just useless information.

But wait, there's more! Deep learning is a fancy subset of ML that's inspired by our brains. It's all about neurons and layers, and moving data from one to the other with weighted channels and biases. Basically, it's like playing a game of telephone with your data, except there's no room for misinterpretation. Google Assistant and Alexa are two popular examples of deep learning in action.
 
Now, let's talk about something that I have been working over a month. This was inspired from a conversation that I had with one of my friends. He asked me whether it would be possible for computers to rate beauty. Who knew that couple of months later I would end up doing that. I decided to use the Chicago Face dataset to create not one, but two models, a machine learning model and a deep learning model with convolutional neural networks and transfer learning using the VGG dataset. The Chicago Face dataset has images of 597 men and women, complete with facial proportions and an attractiveness score. So, I decided to use it to rate myself. Yup, I went there.

My regression-based machine learning model rates my face based on the dimensions of different parts of my face. Pretty insane, right? The second model is even crazier. It rates us based purely on our images by utilizing the biases of the VGG Face dataset. So, all you have to do is load an image and let the machine do the rest. Simple, huh? Well, not really.

After all that work, I have come to the realization that it's much easier for society to rate us. They can do it faster and from a distance, without needing high-resolution images. And as for my rating? Well, let's just say the machine gave me a 3.12 out of 7.00. Not great, but not the worst either. The highest score in the dataset was a 5.47 out of 7.00, so there's always room for improvement.

But let's be real here, the whole model is just perpetuating stereotypes. Each person in the dataset was rated based on society's definition of beauty, which we've all been force-fed through generations of advertisements and media. It's no wonder even a machine can learn these stereotypes with ease. So, the next time you feel the need to rate someone's looks, just remember: you're perpetuating societal stereotypes that we've all been brainwashed into believing. 

The project can be viewed [here](https://github.com/Pavithra-Rajan/Beauty-Predictor). Additional information has been added to the repository.
`
  },
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

            // Handle paragraphs with links
            if (line.trim() && !line.trim().startsWith('```')) {
            const parts = line.split(/(\[.*?\]\(.*?\))/g);

            return (
                <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                {parts.map((part, i) => {
                    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
                    if (linkMatch) {
                    const [, text, href] = linkMatch;
                    return (
                        <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                        {text}
                        </a>
                    );
                    }
                    return part;
                })}
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
