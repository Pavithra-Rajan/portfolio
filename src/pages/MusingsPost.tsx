import { Layout } from "@/components/Layout";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import nitc from "@/assets/college.jpeg";
import timezone from "@/assets/time-zone.jpg";
import trash from "@/assets/trash.png";
import firstyear from "@/assets/caching_memories/memory11.jpg";
import odyssey from "@/assets/caching_memories/memory4.jpg"
import sweg from "@/assets/caching_memories/memory7.jpg";
import lnd from "@/assets/caching_memories/memory3.jpg";
import csea from "@/assets/caching_memories/memory9.jpg";
import fossmeet from "@/assets/caching_memories/memory10.jpg";
import pizzastack from "@/assets/caching_memories/memory12.jpg";
import nitc_end from "@/assets/caching_memories/memory2.jpg";
import handwriting from "@/assets/handwriting.png";
const imageMap: Record<string, string> = {
  nitc,
  timezone,
  trash,
  firstyear,
  odyssey,
  sweg, 
  lnd,
  csea,
  fossmeet,
  pizzastack,
  nitc_end
};

interface MusingPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  heroImage?: string;
}

const musingPosts: Record<string, MusingPost> = {
        "1": {
    id: "1",
    title: "The traces between lines",
    date: "2025-05-22",
    readTime: "4 min",
    tags:  ["symbolism", "prose", "thoughts"],
    heroImage: handwriting,
    content: `
> This piece was used for the NYU Wasserman Presentation Competition 2025 where I won first place.
  
  The other day, I was penning down notes from a meeting to ensure that I captured all the details so as to not forget things the way I always do. My colleague stopped by later, seeing these notes on my table, and complimented how my handwriting looks like it came out of a typewriter but still somehow feels human. That one small comment transported me straight back to middle school and high school, where teachers would always praise my handwriting, whether it was English, Hindi, or even Arabic. Well, that's why I did get the best handwriting prize in Grade 7, after all. But that's enough of the flex. This got me thinking about how we were all handed the same notebook once in kindergarten. The half-inch separated wide lines with red margins and faint gray letters waiting to be traced. That's how we were taught the alphabet, and more importantly, how to write, merely by imitation. Everyone in the room was learning how to curl the G, loop an O, and shape a W. Learning the right way to write while perhaps holding the pen wrong. I always did and still do. That's probably why, years later, I have a stubborn callus on my middle finger, which, anatomically speaking, was never meant to bear that kind of pressure. It's wild how, given a language, we all learn the same letters, trace the same lines with the same block templates, and yet no two handwritings ever turn out the same.
  I think about grip a lot. Not just how we hold a pen, but how some things grip onto us. Habits, memories, people. We don't always get to choose what leaves a mark. I used to press the pen so hard when I wrote that the text would leave prints on the next page. Even if you tore out the one with the words, the shadow stayed behind. It was stubborn, kind of like me. And maybe we're all like that, marked by the people who've passed through us. Some leave only a trace, barely there. Others sink in deep, changing the way we write ourselves from that point on. We tend to overwrite. We get overwritten. And every so often, we try to erase the mess and start again. But those blue erasers we all carried in school, the ones meant to erase ink but only ever smudged it, taught us that some things never truly disappear. But perhaps, even though the page still carries those traces, you can always write something on top.
  My handwriting doesn't look the way it used to. It used to be rounder, more cursive. Over time, the letters straightened out, the loops tightened, and the slant shifted. Some parts got sharper, some lazier. And yet, no matter how much it's changed, the grip remained the same. There's a rhythm in the way I dot my i's, a certain impatience in the way I end my words, like I'm already thinking about the next one. It's strange how something as simple as handwriting can hold a whole archive of who we've been, how we've softened, hardened, sped up, or even slowed down. It keeps evolving, but something in it always stays. A pulse, a pattern, and somewhere in all of it, the trace of that kid tracing letters on a lined paper still exists.
          `
  },
  "2": {
    id: "2",
    title: "Time Zones",
    date: "2025-01-01",
    readTime: "3 min",
    tags:  ["symbolism", "prose", "thoughts"],
    heroImage: timezone,
    content: `Back in middle school, I studied a chapter in Geography called "Latitudes and Longitudes," which covered the different time zones across the world. The text had interesting questions at the end of the chapter, which involved calculating the time taken when traveling from one country to another by an airplane and figuring out the time upon landing. I struggled with these, as I did with most subjects back then, but my dad always managed to simplify things and explain them to me, though not so patiently. Today, as my mother asked me for the time in Australia to wish her friend a Happy New Year, this lesson resurfaced.

    Not long ago, in one of my usual exchanges of banter and intellectual discussion with my close friend, he remarked that at any given moment, somewhere on Earth, a sunrise or a sunset is occurring. Though not entirely sure of the technical precision of this thought, it left me contemplating the flow of time in a deeper way. A new year is marked by the Earth's orbit around the sun, apologies to the flat-earth believers who think otherwise, and the Earth's ceaseless rotation defines our day. We often grant ourselves the luxury of waiting, binding ourselves to the notion that a fresh start must be anchored to some specific moment. We tell ourselves tomorrow would be the perfect day to begin a new habit or that next Monday would be the ideal time to hit the gym. We think that the following month will be the time to revive our love for reading, and the quarter ahead will finally be the time to buckle down at work, and eventually, a new year awaits to re-factor our lives. It is, in essence, a manifestation of hope and the quiet belief that no matter how much time passes, we can always reinvent ourselves and step into the possibility of becoming better.
    
    It is easy to think that the beginning of something new must be flawless and that we must embark on a clean slate, free from mistakes and imperfections. But perhaps the beauty of growth lies perfectly in these imperfections. The missteps, the false starts, and the moments when we stumble are the moments that shape us, offering lessons that a perfect beginning could never provide. And maybe, as we leap ahead in time, crossing time zones on a flight, or turning back the clock to reflect where we have been, we could embrace the uneven rhythm of our journey. It is in these contrasts that time reveals its deepest meaning, not as a straight line, much like the jagged boundaries of time zones, but as a tapestry of reflection and transformation.
    `
  },
    "3": {
    id: "3",
    title: "The Un-Thrown Trash",
    date: "2023-05-15",
    readTime: "2 min",
    tags:  ["symbolism", "prose", "thoughts"],
    heroImage: trash,
    content: `
When I was growing up, my mother had a strict rule: throwing out the trash every evening before my parents came home. Forgetting this chore was inexcusable, as she insisted that the kitchen would become engulfed in the sour stench of leftovers, a smell she attributed to neglect. This non-negotiable rule had no clause for my busy routine or tiring day. There was something about the tone that struck me. It was stern but purposeful. Years later, when I entered adulthood, I realized that perhaps it wasn't just about throwing the trash.

Both my parents worked long hours. Being in the same field of work, they became partners in every sense, balancing work, raising me in a country that wasn't our own but eventually became home, and keeping the household running like a precisely built bridge, perhaps inspired by their daily course of work. Our kitchen was their sacred space. My dad would slice vegetables or meat with the finesse of a craftsman, my mom would stir a pot, and amidst the whistles of the pressure cooker as old as me, they'd confide in each other about the pressures of their task deadlines. Sometimes, it would just be quietness complementing the boiling water, a stark contrast to a possible chaotic day. Despite their separate worlds during the day, the kitchen was where they united, perhaps explaining why she was insistent on clearing away the worries and remnants of the previous day.

There's something symbolic about trash, letting go of what we no longer need and, more importantly, what no longer needs us. My mom used to say, “You need to throw it away before it consumes your space”. And in a way, that is life too. How often do we cling to things, grudges, fears, past mistakes, holding on just a bit too long until they begin to taint our present? Throwing out the trash wasn't just a chore; it was a lesson in knowing when to take action and when to let go. Though the perfect moment might elude us as it flits by, we can unmistakably feel the pang of it slipping past us.   

Fast forward to adulthood, to my rented flat, where the evenings are much quieter. My flatmate and I, busy with work and life, often forget the little things, like looking after ourselves and, most importantly, throwing out the trash. More than once, we've come home to that familiar smell, both of us looking sheepish, reminded of the routines we've neglected. It's funny how life circles back. The simple task that my mom enforced with such rigidity now feels like a lifeline back to that warm kitchen, the clatter of pots, and the hum of my parents' quiet chatter. In such moments, I am back home in that small kitchen with that bright 20W tube light, realizing how my parents taught me not just how to take care of a home but how to take care of life.
`
  },
  "4": {
    id: "4",
    title: "Cache-ing Memories",
    date: "2023-05-22",
    readTime: "12 min",
    tags: ["NITC", "memories", "college life"],
    heroImage: nitc,
    content: `
> Note: While my page has maintained a strict monochromatic theme so far, I am compelled to break away from it as my college memories have infused vibrant colours into my life. They cannot be merely confined to shades of noir.

It's been exactly two weeks since I left NITC after 4 years of a roller coaster ride. Picture this: me, strolling down Rajpath (that epic pathway loved not only by students but also our feathered friends, the crows), trying to soak up every last bit of it. It felt like I was in some blockbuster movie, reliving all the crazy moments that made up my college life. Cue the dramatic music, please!

Two weeks before college ended, one of my friends asked me, 'How does it feel knowing that college is going to end in 2 weeks?' Back then, I replied, 'It really hasn't hit me yet'. Two weeks later, I think my reply would be the same, sort of. However, these days, I catch most of my days recalling a random memory from college that plasters a smile on my face.

My journey through NITC over those four years was truly enlightening. It bestowed upon me invaluable lessons that I feel compelled to put into words. Perhaps, someone stumbling upon my page in search of insights into life at NITC might find this helpful (been there, done that). Who knows, years from now, I may even revisit these memories with my friends at a dinner gathering, reminiscing and saying in unison, "Those were the days!"

## First Year: The year I realised that "Hello, World!" was just the tip of the iceberg

My primary memories from first year would be my hostel life with four other people. As an only child, I was thrust into the chaotic world of room sharing. [Vaishnavi](https://www.linkedin.com/in/vaishnavi-shubin-57b649190/) [Poorva](https://www.linkedin.com/in/poorva-umale-aa89881a7/), [Swathi](https://www.linkedin.com/in/swathi-jayakumar-708533190/), [Paargavi](https://www.linkedin.com/in/paargavi-m-selvan-3427601b2/), and our honorary member [Mekha](https://www.instagram.com/mekhamadhu._/) were a pack of wild beasts I never expected to encounter. We mastered the art of UNO like it was a competitive sport, transformed 'Lotte Choco Pies' into questionable birthday cakes (thanks to our lathe-turned candle stands), rocked out while washing clothes, and hosted epic movie nights. It was a crash course in survival with these unique characters who had messiness levels ranging from "tidy tornado" to "messy monster." Living with them taught me the invaluable skill of navigating the treacherous waters of roommate dynamics. This was my first important lesson at NITC:

> Getting accustomed to living with different people and reaching a common ground
![My first-year room](firstyear)

Despite being locked in the hostel for most of our first year, desperately scrambling to finish assignments and battling the college academic monsters, we managed to break free and embark on epic quests to discover the wonders of the realms beyond our campus walls. Our greatest adventure involved delving into the mystical realm of "Koyyikode" cuisine. If you ever happen to visit Kozhikode (Calicut), its culinary scene is a taste adventure waiting to happen. Always make sure to dive into the fragrant dum biriyani, where tender meat and aromatic spices create a heavenly fusion. If you wish to indulge your sweet tooth, try out Kozhikode's iconic halwa. And don't forget the crispy banana chips and zesty mango fish curry for added crunch and tang. Exploring the different kinds of food at Calicut with my different friend groups taught me another important lesson:
> Occasionally, the perfect blend of scrumptious food and hilarious banter can result in an enjoyable time that tickles both your taste buds and your funny bone!

Although first-year students often face a scarcity of opportunities,  [Lenoah](https://www.linkedin.com/in/lenoah-chacko/), [Joseph](https://www.linkedin.com/in/joseph-mani-94585a190/), and I managed to hit the jackpot by being able to take part in AMPC (Anand Memorial Project Competition) for Tathva. Now, here's the twist: we were absolute rookies when it came to app development! But guess what? In just three days, we conjured up a mind-boggling prototype for our brainchild—a mobile app for managing Mess-Food, aptly named "Khana App." It felt like stumbling upon a secret treasure to be involved in a tech endeavour during our first year.

Besides Ragam and Tathva, first-year students had the golden opportunity to take part in the cultural extravaganza organised by the countless cultural clubs at NITC. One of my fondest memories from first year would be “Odyssey” where all of us from CSE dressed up as fierce pirates, sporting brown "munds" and white shirts, and shouting at the top of our lungs, "Chankille Thee CSE!". It was like a hilarious invasion of the campus. This was the first chance to interact with everyone in my class, which comprised of 178 students. Unfortunately, just when we had begun creating bonds, Covid swooped in like a chaotic whirlwind and whisked us away to our homes for a gruelling two-year house arrest. That brings us to my third important lesson from college:

> Make the most of every moment; you never know what could happen next.
![Odyssey: The CSE pirates](odyssey)

## Second Year: The year I realised anti-virus solutions are not universally effective against all sorts of viruses.

Second year is when we get introduced to the core subjects of the department. The year we realised our seniors had been lying all along when they said, “CSE is chill”. The courses are as far from “chill” as Pluto is from the Sun, though the faculties of the department were the ones who withheld the tag. Despite it being difficult with continuous online classes and hours before a screen after those classes to complete the numerous assignments and coursework, the bonds made in the first year continued to stay intact. We even had G-meets to watch movies, play Among Us, and keep the excitement alive during those challenging times. We'd also gather to brainstorm solutions to those mind-bending assignments, which gradually turned our conversations into a whirlwind of domain-specific jargon. If anyone from outside the CS field overheard us, they'd think we were throwing gibberish grenades at each other. But those quirky discussions helped me stay updated and learn beyond our overwhelming coursework, which was already a mountain to climb!

This year brought forth incredible opportunities for me to join clubs and department associations. Luckily, I became a proud member of the Literary and Debating Club, affectionately known as LnD (and let me tell you, it's hands down the best club at NITC), as well as the Computer Science and Engineering Association (CSEA, the epitome of coolness). LnD and CSEA have truly been transformative, as they have allowed me to enhance my soft skills and writing abilities.

LnD, in particular, opened my eyes to various forms of writing. As someone who used to stick to a rigid style, I took a bold leap into the world of satire through our very own blog, aptly named <a [CrowTalks](https://nitcrowtalks.wordpress.com/). This blog holds a special place in my heart, as it wielded incredible influence not only within the student community but also among our esteemed administration. [Anna](https://www.linkedin.com/in/anna-biju/) and I were the main writers/editors, and because of “CrowTalks”, I was able to get connected with someone amazing like her. Along the way, I also delved into video editing, web design, and development. Among my proudest achievements is the creation of the [BookClub](https://bookclub.lndnitc.org/">Book Club) website and the launch of an engaging IGTV series for LnD.

CSEA opened up a whole new world for me to connect with my department. We had these fancy seminars lined up (well, thanks to COVID, they were more like webinars in our pyjamas), and I even got to play a part in crafting our department newsletter, Threads. [Joel](https://www.linkedin.com/in/joel-mathew-cherian-161441191/),  [Varghese](https://www.linkedin.com/in/varghese1508/) and I got really involved with the content work for Threads from 2nd year till the end of our 4th year. The best part of CSEA was meeting these brainiac seniors who were both super smart and down-to-earth. They dropped some amazing wisdom on acing courses and snagging a good internship. During our regular meetings, they'd sometimes launch into these mind-boggling computer science discussions that would zoom right over my head. I always daydreamed about the day I'd join their league and actually understand all that geeky stuff. Looking back, I'm not sure how far I've come, but I know for a fact that I did learn a lot compared to what I knew back then.

My biggest takeaway from all this was:
> Actively engage in both the cultural and technical aspects of campus life, as it presents a unique opportunity for immense personal growth and learning.

## Third Year: The year when imposter syndrome hit me like a sneaky infinite loop
One semester and a sprinkle of my S6 drifted away like virtual confetti. Each day felt like a game of waiting for a college update that would declare our triumphant return to the hallowed halls. Despite the monotony, third year brought forth some of my most beloved courses. One such gem was the Software Engineering Laboratory, orchestrated by the venerable Dr. Vinod Pathari, a cherished figure in our department.

This remarkable course revolved around crafting a practical project for a real-life client. Our mission? Developing a mobile application to manage NITC's swimming pool users. Following the illustrious path of the SDLC (Software Development Lifecycle), we embarked on a semester-long odyssey brimming with insightful discussions. We conjured an impressive array of documents, including a software proposal, SRS (Software Requirements Specification), Design document, user-manual, and testing document. Our efforts culminated in a mighty tome exceeding 100 pages, chronicling our journey.
 
We developed the app using Flutter and Flask, and our dream team consisted of [Lenoah](https://www.linkedin.com/in/lenoah-chacko/), [Joseph](https://www.linkedin.com/in/joseph-mani-94585a190/), [Abin](https://www.linkedin.com/in/abingigo/), [Akshay](https://www.linkedin.com/in/akshay-biju-1a2375167/), [Varun](https://www.linkedin.com/in/varun-anilkumar-78b670190/), and me. We named ourselves "SWEG 05" because, well, we were the fifth team, and SWEG stood for Software Engineering Group (yeah, we put way too much thought into it). And the app? We called it "swimiNIT" because, you know, it's the NIT's swimming pool, genius, right?

When the time came to present the app to our client, we decided to spice things up with a hilarious demo video. It had the entire class in stitches! And guess what? We nailed it and scored an S grade! But you know what was even better than the grade? The time I spent with an incredible team and all the valuable lessons I learned along the way.

Sometimes, I wonder if I had such a blast because of the course in itself or because I was lucky enough to be part of this fantastic team. Those online meetings were legendary as we'd dive into discussions but also sneak in some serious fun by watching [Appupan and the boys](https://www.youtube.com/@appuppanandtheboys) videos (a YouTube channel that reviews ridiculously funny Malayalam movies) and unleashing our artistic talents in [Drawsaurus](https://www.drawasaurus.org/).
![SWEG 5](sweg)

While I experienced success in certain aspects, there was a particular assignment in Compiler Design that led me to question my overall progress. This assignment was essentially an excerpt from the [Compiler Design Laboratory](https://silcnitc.github.io/) created by the revered Dr. Murali Sir. I tried my best to complete it, but unfortunately, I could just do a part of it which didn't really make an impact on the submission. I found myself in a situation where I felt like I was a nobody in my field, and this submission was weeks before my internship, so it stressed me out thinking about how I would perform at a company. This pressure weighed heavily on my mind, leading to a moment of emotional breakdown where I confided in my mom about my self-perceived inadequacy as a computer science student.

I consistently harboured doubts about my abilities and frequently refrained from selecting certain electives due to my apprehension of struggling with them. However, upon reflecting on my performance in my S8, during which I credited a challenging course and performed well, I came to the realization that perhaps I should have taken the opportunity to challenge myself earlier. Specifically, I regret not pursuing those system courses offered by NITC that I secretly admired internally but hesitated to attempt out of fear of failure. This was a lesson that I learnt quite recently:

> Do not refrain from trying something out because of the fear of a potential failure.

LnD and CSEA continued to remain integral aspects of my life. I took on the role of secretary in LnD, which provided me with valuable lessons on team leadership and managing diverse perspectives. Although I made some initial mistakes along the way, I eventually found my footing and learned how to navigate and handle situations effectively. At least, I believe I did.
![The Computer Science and Engineering Association](csea)
![The Literary and Debating Club](lnd)

Following the conclusion of my third year, I spent two months in Hyderabad for my internship at D.E. Shaw, with [Cliford](https://cliford.net/) and [Joel](https://www.linkedin.com/in/joel-mathew-cherian-161441191/). Once those two months concluded, I found myself with a mere two-week break before the commencement of my final year.

## Final Year: The year that was the terminating semi-colon

Returning for my last year had a different impact on me. It seemed like there were more unfamiliar faces than familiar ones on campus. There were fewer shared courses and more elective options, which resulted in my classmates being even more scattered. Additionally, it was finally time for our final-year B.Tech project. I also took on the role of CSEA secretary and had the opportunity to contribute to the revival of FOSSMeet alongside [Abin Latheef](https://www.linkedin.com/in/abinlatheef/), who headed FOSSCell. Participating in FOSSMeet allowed me to connect with incredible individuals in the FOSS realm, and their personal stories were truly inspiring. Despite the challenges of organising the event after a three-year hiatus, it was made possible thanks to the exceptional team we had. To know more about what happened across those three days, check out [Naveen's](https://naveensd.com/) [blog post](https://naveensd.com/logs/fossmeet23/).

![FOSSMeet 2023 Organising Team](fossmeet)

Fourth year saw an increase in technical events, including numerous talks organised by CSEA, as well as two hackathons: Code.Init() and JMR Hackathon. In the JMR Hackathon, I had the pleasure of participating alongside [Lenoah](https://www.linkedin.com/in/lenoah-chacko/) [Amit](https://www.linkedin.com/in/amit-kumar31/) [Gopal](https://www.linkedin.com/in/gopal-choudhary-032b791aa/), and we were able to secure the second place. It was a remarkable experience to collaborate on a machine learning project and present our work before the JMR executives.

This year, I was able to be a part of organising Code.Init(). This hackathon will always hold a special place in my heart. Back in my third year, I was part of the 1st runner-up team, and the memories still haunt me... in a good way, of course. But this time, things were different. We decided to bring the event on campus, transforming it into an epic sleep-deprived adventure. We stayed up for a whopping 40 hours like caffeinated zombies on a mission. The only thing that kept us going was the promise of sleep afterwards, which felt like heaven on Earth. To satisfy the hunger of late-night coding warriors, we ordered a ridiculous number of pizza boxes—45, to be exact. Those greasy, cheesy, carb-loaded wonders became our midnight fuel, keeping us fueled up and entertained as we watched the participants hack their way to glory.

These hackathons were more than just events; they were a glimpse into the wild development culture of our campus. And being part of it made me feel like I had a backstage pass to the greatest show on Earth. It was a rollercoaster of laughter, sleep deprivation, and pizza-induced euphoria. And I wouldn't have traded that experience for anything... except maybe a lifetime supply of pizza. One lesson, as well as a regret that I may have, is:
![Code-Init() pizzas](pizzastack)

> Participate in as many hackathons as you can

This was also the time I spent less time in my room and was mostly occupied in the SSL laboratory, braving the coldness as I worked on assignments and my final year project alongside Lenoah and Varun. Being in SSL always had a unique atmosphere, particularly with the sight of my classmates engrossed in their work and the occasional banter that we had when we took breaks. With the lifting of the curfew, more girls started staying in the lab to work, and it was truly delightful to witness this positive change.

## Conclusion
While I may not have been a devoted admirer of the Malayalam film "Hridayam," I have come to appreciate the significance of its concluding scene in which the main character penned the words, "Thank you for making me who I am." It has dawned on me that NITC has genuinely moulded me into the person I am today, incorporating all the valuable lessons I've gained from both the good and the bad experiences.


As I bring these four transformative years to a close, reflecting on this incredible journey, I can't help but feel a wave of bittersweet nostalgia wash over me. If someone were to ask me once again about how I truly feel about bidding farewell to college, my response would undoubtedly be tinged with sadness. These years have become an integral and cherished chapter of my existence, filled with unforgettable encounters, boundless knowledge, and profound personal growth. Each memory holds a special place in my heart, reminding me of the remarkable individuals who crossed my path and the invaluable lessons that shaped my character. As I close this chapter of my life, I find solace in knowing that these moments will forever remain etched in my soul, reminding me of the person I was and the person I have become…

![Fin](nitc_end)
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

export default function MusingPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? musingPosts[id] : null;

  if (!post) {
    return (
      <Layout>
        <div className="max-w-2xl py-12">
          <p className="text-muted-foreground font-mono">Post not found.</p>
          <Link to="/musings" className="text-foreground underline underline-offset-4 mt-4 inline-block">
            ← Back to musings
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-2xl">
        <Link
          to="/musings"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-mono text-sm opacity-0 animate-fade-in-up"
          style={{ animationFillMode: 'forwards' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to musings
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
            className={`w-full h-80 md:h-full object-cover border border-border ${
                post.heroImage?.includes('college') ? '' : 'grayscale'
            }`}
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
            // Handle images
            const imageMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/);
                if (imageMatch) {
                const [, alt, srcKey] = imageMatch;
                const src = imageMap[srcKey];

                if (!src) return null;

                return (
                    <figure key={index} className="my-8">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full object-cover border border-border"
                    />
                    <figcaption className="mt-2 text-xs text-muted-foreground font-mono text-center">
                        {alt}
                    </figcaption>
                    </figure>
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
