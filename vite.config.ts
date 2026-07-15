import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeFileSync } from "fs";
import { componentTagger } from "lovable-tagger";
import { blogPosts, musingPosts, type Post } from "./src/data/posts";

const SITE_URL = "https://pavithra.dev";

function escapeXml(text: string): string {
  return text.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!
  );
}

function feedItem(post: Post, section: "blogs" | "musings"): string {
  const url = `${SITE_URL}/${section}/${post.id}`;
  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${section === "blogs" ? "Blogs" : "Musings"}</category>
${post.tags.map((t) => `      <category>${escapeXml(t)}</category>`).join("\n")}
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
}

function buildFeedXml(): string {
  const items = [
    ...blogPosts.map((p) => ({ post: p, section: "blogs" as const })),
    ...musingPosts.map((p) => ({ post: p, section: "musings" as const })),
  ].sort((a, b) => +new Date(b.post.date) - +new Date(a.post.date));

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Pavithra Rajan</title>
    <link>${SITE_URL}</link>
    <description>Blogs and musings by Pavithra Rajan</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items.map(({ post, section }) => feedItem(post, section)).join("\n")}
  </channel>
</rss>
`;
}

// RSS feed mirroring src/data/posts.ts: written to dist/feed.xml on
// production builds, served on the fly at /feed.xml by the dev server.
function generateRss(): Plugin {
  return {
    name: "generate-rss",
    writeBundle() {
      writeFileSync(path.resolve(__dirname, "dist/feed.xml"), buildFeedXml());
    },
    configureServer(server) {
      server.middlewares.use("/feed.xml", (_req, res) => {
        res.setHeader("Content-Type", "application/rss+xml");
        res.end(buildFeedXml());
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), generateRss()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
