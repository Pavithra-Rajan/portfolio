export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: Post[] = [
  {
    id: "3",
    title: "How I Became an MLH Fellow?",
    excerpt: "It was a Tuesday afternoon when I heard the familiar ping of a new email notification. Naturally, I assumed it was another rejection. At that point, I had applied to nearly 400 summer...",
    date: "2026-06-01",
    readTime: "5 min",
    tags: ["Career", "Fellowship", "Interview", "Personal Growth"],
  },
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

export const musingPosts: Post[] = [
  {
    id: "5",
    title: "Detours",
    excerpt: "My mom has never been the best with directions. She's the kind of person who fumbles with Google Maps when my dad would task her to navigate us to a new location...",
    date: "2026-06-07",
    readTime: "4 min",
    tags: ["symbolism", "prose", "thoughts", "mom"],
  },
  {
    id: "1",
    title: "The traces between the lines",
    excerpt: "The other day, I was penning down notes from a meeting to ensure that I captured all the details so as to not forget things the way I always do. My colleague stopped by later...",
    date: "2025-05-22",
    readTime: "3 min",
    tags: ["symbolism", "prose", "thoughts"],
  },
  {
    id: "2",
    title: "Time Zones",
    excerpt: "Back in middle school, I studied a chapter in Geography called \"Latitudes and Longitudes\", which covered the different time zones across the world. The text had interesting questions at the end...",
    date: "2025-01-01",
    readTime: "3 min",
    tags: ["symbolism", "prose", "thoughts"],
  },
  {
    id: "3",
    title: "The Un-Thrown Trash",
    excerpt: "When I was growing up, my mother had a strict rule: throwing out the trash every evening before my parents came home. Forgetting this chore was inexcusable, as she insisted...",
    date: "2024-09-15",
    readTime: "3 min",
    tags: ["symbolism", "prose", "thoughts"],
  },
  {
    id: "4",
    title: "Cache-ing Memories",
    excerpt: "Note: While my page has maintained a strict monochromatic theme so far, I am compelled to break away from it as my college memories have infused vibrant colours into my life. They...",
    date: "2023-05-22",
    readTime: "12 min",
    tags: ["NITC", "memories", "college life"],
  },
];
