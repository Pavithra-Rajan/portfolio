import { Layout } from "@/components/Layout";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import beauty from "@/assets/beauty.png";
import hosting from "@/assets/hosting.jpg";
import mlhHero from "@/assets/mlh-hero.png";
import mlh1 from "@/assets/mlh-1.png";
import mlh2 from "@/assets/mlh-2.png";
import mlh3 from "@/assets/mlh-3.png";
import mlh4 from "@/assets/mlh-4.png";
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
  "3": {
    id: "3",
    title: "How I Became an MLH Fellow?",
    date: "2026-06-01",
    readTime: "5 min",
    tags: ["Career", "Fellowship", "Interview", "Personal Growth"],
    heroImage: null,
    content: `
![MLH Fellowship](/src/assets/mlh-hero.png)

It was a Tuesday afternoon during the second week of my summer internship when I heard the familiar ping of a new email notification.

Naturally, I assumed it was another rejection.

At that point, I had applied to nearly 400 summer internships. Rejection emails had become such a regular part of my inbox that I could almost predict their wording before opening them.

But this email was different.

The subject line read:

**"Congratulations! You're Going to Be an MLH Fellow."**

I stared at it for a few seconds before opening it because, frankly, I was convinced there had been a mistake.

## Finding the Fellowship

I first came across the MLH Fellowship sometime in March while scrolling through LinkedIn. Lately, LinkedIn has somehow taken over as my primary doomscrolling platform. Instead of reels, I find myself endlessly scrolling through internship announcements, startup funding rounds, and posts from people achieving things that make me question whether I'm even in the same field. If anything, it has become a very effective way of amplifying the imposter syndrome I was already carrying around.

While scrolling, I found the MLH Fellowship page and started reading about the different tracks. The Production Engineering track immediately caught my attention. Having spent over two years working in SRE and infrastructure, along with contributing to and working extensively with open-source observability tools, it felt like the track where I had the most context and could genuinely contribute.

Then, naturally, I made the mistake of reading more about it.

I went through Medium articles, YouTube videos, Reddit threads, and LinkedIn posts discussing acceptance rates, how competitive the fellowship was, and how prestigious it had become.

As expected, this did not boost my confidence.

If anything, it made me question why I was even applying.

But there was a small part of me that thought:

> "Well, the rejection email is free anyway."

So I applied.

![MLH Fellowship Application](/src/assets/mlh-4.png)

## The Application


The application wasn't something I completed in one sitting.

I started it and finished it over the next two days, mostly because I wanted to think carefully about the essay questions.

Two questions stood out to me:

* Why do you want to be an MLH Fellow?
* What diverse perspective would you bring to the program?

I've always believed that stories are more memorable than lists of achievements, so instead of writing generic responses, I tried to answer both through personal experiences and narratives.

Once I was reasonably happy with my answers, I submitted them.

One thing I appreciated was the explicit instruction not to use AI-generated responses. I took that seriously and wrote everything myself.

Then I forgot about it.

## The Interview Email

Two months later, an email arrived saying that my application had been shortlisted and that I needed to schedule an interview.

The interview would cover both technical and personal aspects, and notably, there would be no coding questions. Instead, the focus would be on discussing the project I had submitted with my application.

There was only one problem.

I had absolutely no memory of which project I had submitted.

This was, admittedly, not ideal.

After a brief moment of panic, I made an educated guess about which project it probably was and started preparing.

Now, if you're reading this hoping for interview advice, this is probably where I should tell you to spend weeks preparing.

Unfortunately, that would make me a hypocrite.

At the time, final project submissions, end-semester exams, and on-campus work had all decided to arrive simultaneously.

By the time the interview came around, I effectively had one day to prepare.

Half of that day was spent at the Laundromat because I had somehow gone three weeks without doing laundry.

![MLH Essay Writing](/src/assets/mlh-3.png)

## Preparing for the Interview

Most of my preparation came from reading articles written by previous fellows and identifying common themes in their interviews.

The questions I focused on included:

* What inspired you to build your project?
* Why did you choose the technologies you used?
* If you were rebuilding it today, what would you do differently?
* What did you learn from working on a team?
* What is a challenge or fear you've overcome in previous team settings?
* How do you communicate with others?
* Why do you want to be an MLH Fellow?

I would also strongly recommend revisiting your codebase.

The interviewer can ask questions about virtually any part of it.

Good luck if you're a pure vibe coder.

I had outsourced parts of my frontend work to AI several months earlier and had to spend some time figuring out what exactly it had generated and why. That meant relearning enough React to confidently explain what was happening when the interviewer inevitably asked about it.

## The Interview

Fortunately, the interview ended up being much more conversational than intimidating. My interviewer was incredibly friendly, which made it easier to settle into a natural discussion rather than feeling like I was being interrogated.

The conversation covered many of the topics I had prepared for, but it also went deeper into the technical details of my architecture.

We discussed AWS, infrastructure decisions, trade-offs, and why certain design choices had been made. What I appreciated most was that the questions weren't designed to prove that I was wrong. They were designed to understand how I think.

One thing I want to emphasize is that I didn't memorize answers. I simply thought about the key points I wanted to cover. That made it easier to speak naturally and adapt to follow-up questions.

If I had to summarize my biggest takeaway from the interview process, it would be this:

**Be calm and be genuine.**

People can tell when you're trying to deliver a perfectly rehearsed answer. A thoughtful, honest response usually lands better than a polished script.

![Interview Preparation](/src/assets/mlh-2.png)

## A Few Practical Tips

A few practical observations that might help future applicants:

* Make sure your internet, audio, and video setup are reliable.
* Know your project inside and out.
* Be prepared to explain architectural decisions and trade-offs.
* Have a GitHub repository that reflects your development process rather than a single giant commit.
* Write a clear README.
* Understand why you built what you built.

I also noticed that many people online emphasized the importance of having a GitHub profile that demonstrates consistent work over time. Looking back, I think they're right.

A clean repository with meaningful commits tells a much better story than a perfect project uploaded all at once.

## Final Thoughts

When I submitted my application, I genuinely didn't expect much.

I was just another student sending out applications and hoping that one of them would work out. A few months later, I found myself interviewing for a program I had originally assumed was out of reach. The entire process, from writing the essays to interviewing, was a genuinely positive experience.

So if you're considering applying, I'd encourage you to do it.

> Don't let acceptance rates, prestige, or other people's accomplishments convince you not to try.

Worst case, you get another rejection email.

Trust me, after 400 internship applications, those become surprisingly easy to handle.

Best case?

> You get a random email on a Tuesday afternoon that makes you ridiculously happy and reduces your imposter syndrome by at least a notch.

![MLH Interview Success](/src/assets/mlh-1.png)
## References

- [@alidoggaz | Medium | The MLH Fellowship: Ultimate Guide](https://medium.com/@alidoggaz/getting-accepted-in-the-mlh-fellowship-the-ultimate-guide-3deece4feda2)
- [@KavishaMathur | Medium | My Experience in MLH](https://medium.com/@KavishaMathur/my-experience-in-mlh-135eaf5ab971)
- [MLH Fellowship Official Site](https://fellowship.mlh.com/)

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
              const content = line.replace(/^[\s]*- /, '');
              const parts = content.split(/(\[.*?\]\(.*?\))/g);
              return (
                <li key={index} className="ml-4 text-foreground/90 mb-1">
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
                </li>
              );
            }
            if (line.trim().match(/^\d+\. /)) {
              const content = line.replace(/^[\s]*\d+\. /, '');
              const parts = content.split(/(\[.*?\]\(.*?\))/g);
              return (
                <li key={index} className="ml-4 text-foreground/90 mb-1 list-decimal">
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
                </li>
              );
            }

            // Handle horizontal rules
            if (line.trim() === '---') {
              return <hr key={index} className="my-8 border-border" />;
            }

            // Handle images
            const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
            if (imageMatch) {
              const [, alt, src] = imageMatch;
              const imageMap: Record<string, string> = {
                '/src/assets/mlh-hero.png': mlhHero,
                '/src/assets/mlh-1.png': mlh1,
                '/src/assets/mlh-2.png': mlh2,
                '/src/assets/mlh-3.png': mlh3,
                '/src/assets/mlh-4.png': mlh4,
              };
              const imageSrc = imageMap[src] || src;
              return (
                <img
                  key={index}
                  src={imageSrc}
                  alt={alt}
                  className="w-full h-auto my-6 border border-border rounded-sm"
                />
              );
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

            // Handle paragraphs with links and bold text
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
                    // Handle bold text
                    const boldParts = part.split(/(\*\*.*?\*\*)/g);
                    return boldParts.map((boldPart, j) => {
                      if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                        return (
                          <strong key={`${i}-${j}`} className="font-semibold">
                            {boldPart.slice(2, -2)}
                          </strong>
                        );
                      }
                      return boldPart;
                    });
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
