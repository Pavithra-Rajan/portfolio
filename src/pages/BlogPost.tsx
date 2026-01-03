import { Layout } from "@/components/Layout";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import beauty from "@/assets/beauty.png";
import hosting from "@/assets/hosting.jpg";
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
  "2": {
    id: "2",
    title: "How can your localhost:8080 grow up and move out?",
    date: "2026-01-10",
    readTime: "7 min",
    tags: ["Hosting", "Deployment", "DNS"],
    heroImage: hosting,
    content: `
Hosting and deployment sound scary in the same way “filing taxes” and “emotional availability” sound scary. You know they're important, but you'd really like to avoid them for as long as possible. Your app runs perfectly on localhost:8080. It responds instantly. No bugs. No downtime. Life is good. So why on earth do you need to put it “on the internet” where strangers, browsers, DNS servers, and certificate authorities can all mess with it?

I ran into this exact panic in my sophomore year of undergrad when I volunteered to build a website for the Literary and Debating Club at NITC. The site worked. But my seniors couldn't see it. My fellow clubmates couldn't test it. My laptop was the single point of failure. If I shut down my laptop, it's over. That's when I discovered the rabbit hole called hosting and deployment.

Before the [ngrok](https://www.sitepoint.com/use-ngrok-test-local-site/) fans jump me: yes, I know. But I didn't know back then. And honestly, that ignorance forced me to understand the real thing.

So this article is for the sophomore-me, and maybe for you, if you've ever wondered:

> What is hosting? What is deployment? Why does everyone talk about Netlify, DNS, SSL, and why is nothing ever working the first time?

Let's break it down.

## Hosting vs Deployment 
> Think of your web app like a person. Hosting is the apartment. Deployment is moving your furniture into it and turning on the electricity.

Hosting is the computer (server) on the internet that will run your app (CPU, memory, disk, IP address, networking, uptime, etc.) Deployment is the process of sending your code there, building it, starting it, keeping it running and making it reachable.

You can host something without deploying anything (empty server). You can deploy something without understanding hosting (thanks to Netlify, Heroku, Vercel, etc.). But under the hood, both always co-exist.

## My First Taste: Netlify and Static Websites

In my pre-GPT era with StackOverflow ([RIP](https://eu.36kr.com/en/p/3626348635554823), you deserve the world) and Reddit ([r/webdev](https://www.reddit.com/r/webdev/), [r/webhosting](https://www.reddit.com/r/webhosting/)), Netlify kept popping up. So I tried it. If I had to explain what Netlify does in one sentence, it would be this:

> Give me your GitHub repo and I'll handle the servers, builds, CDN, HTTPS, and magic.

I connected the GitHub repo, set it to auto-build on every push to main, and boom:

[lnd-nitc.netlify.app](https://lnd-nitc.netlify.app) was live. The site was actually live on the internet! That single moment introduced me to three terms I didn't understand back then:

> DNS, CDN and SSL certificates. 

At the time they sounded like Pokémon (thanks to a good friend of mine who explained this to me as well). 
## Domains: Turning Ugly URLs into Human Names

[lnd-nitc.netlify.app](https://lnd-nitc.netlify.app) is fine.
[lndnitc.org](https://lndnitc.org) is better.

So I went domain shopping. I checked out GoDaddy, Namecheap, Google Domains (this was before Squarespace absorbed it). After a few Reddit threads and a budget check (₹860 + GST from club funds), I bought the domain from Google Domains.

Now comes the fun part. 
> “How do I make my domain point to Netlify?” This is where DNS enters the story.

## DNS: The Internet's Phone Book

When someone types lndnitc.org, their computer asks: “Hey DNS, what IP address is this?”

To which DNS responds: “It's actually 104.198.14.52” (or some other Netlify load balancer). Your browser then connects to that IP and gets your website. To make this work, I had to configure: A Records, CNAMEs, point the domain directly to an IP address.

## SSL: Why the Lock Icon Exists

Without SSL, your site loads as http://lndnitc.org. With SSL, it would be https://lndnitc.org.


That little lock icon and the additional “s” means that traffic is encrypted and browsers trust the site. Essentially, Chrome doesn't scream “THIS SITE IS DANGEROUS”. The lock certainly means a lot more in terms of security and networking but this is essentially the gist.

Netlify automatically issues certificates using [Let's Encrypt](https://letsencrypt.org/), but only after DNS is correctly configured. This is why things sometimes work… but not securely… for a few hours.

This taught me my first painful lesson:

> DNS is slow. Caches exist. Browsers lie.

So I learned to use: dig, nslookup, traceroute, wget to check reality instead of just vibes.

## Subdomains: bookclub.lndnitc.org

A few months later, I ended up developing a website for one of our club ventures, “The bookclub” [[bookclub.lndnitc.org]](https://bookclub.lndnitc.org). This is when I learnt about subdomains and co-domains. I ended up hosting this new website as a subdomain. Essentially, subdomains are like folders in the internet's filing cabinet. 

## Backend Hosting: Heroku and Real Servers

In my junior year, one of my good friends in the club , [Joel Mathew](https://www.linkedin.com/in/joelmathewc/) developed Covilink, a full-stack app with a frontend, backend, and a database. Netlify handled the frontend beautifully. But sadly, APIs don't live on vibes and HTML, they need a server that keeps running.

That's where I met Heroku (again, thanks to reddit) Heroku gives you a Linux server, a public URL, a way to deploy code and a database.

I deployed the backend there and added some DNS records. As one would expect from someone who went with vibes in this process, I promptly broke everything while editing DNS.

Nothing resolved. Nothing loaded. Panic. I did eventually figure the issue out but it did take me 2 days, a bunch of stackoverflow pages, heroku and google domains documentation to restore things. 

## Professional Reality: On-Prem and Cloud

At D. E. Shaw, I learned what Netlify and Heroku hide. Racks of servers, load balancers, reverse proxies, firewalls, blue-green deployments and most importantly observability and monitoring. In the two years, I learnt a lot of intricacies related to on-prem application deployment, releases and most importantly debugging issues post that. 

Then at NYU, I enrolled in the cloud computing course in my first semester where I was exposed to S3 for static hosting, CloudFront as CDN, API Gateway + Lambda for backends. 

Same ideas. Just more knobs.

## The 2026 Plot Twist: Squarespace + Netlify

Fast-forward to last week, I decided to revive my portfolio (which, you are currently on) after four years. Google Domains had quietly shapeshifted into Squarespace. Netlify had redesigned its UI. My mental model, however, was still stuck in 2021.

The symptom was deceptively simple. www.pavithra.dev worked but pavithra.dev did not resolve. Which is sort of like being searchable on LinkedIn by your handle, but completely invisible when someone types your actual name.

After a full day of going through Netlify documentation, personal rants with ChatGPT, and my own poor life choices, I finally found the bug. I had forgotten to add Netlify's load balancer IP on Squarespace and I hadn't pointed the domain's nameservers to Netlify. A random YouTube video with 60 views, uploaded a month ago by a hero with zero SEO, saved me.

A few hours later, the TLS certificate was issued, HTTPS lit up, and the internet finally agreed that pavithra.dev was, in fact, my website.

## The Real Lesson

Hosting and deployment are like learning to drive:

You can use Uber (Netlify, Vercel, Heroku) or you can drive stick (AWS, bare metal, Kubernetes), but either way, you must understand:

> DNS, HTTPS, servers, how the internet finds your app

Because if you don't, one day you will break DNS and take your entire application offline.

If this helped you even half as much as those 2-minute YouTube videos helped me, I'm happy.

Now go deploy your app. localhost deserves to see the world. 

`
  },
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
