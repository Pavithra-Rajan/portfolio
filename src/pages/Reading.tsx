import { Layout } from "@/components/Layout";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  status: "reading" | "finished" | "up-next";
  outline: string[];
}

const books: Book[] = [
  {
    id: "dots-and-lines",
    title: "Dots and Lines",
    author: "Anthony Bonato",
    year: "2025",
    status: "reading",
    outline: [
      "The hidden networks behind social media, AI, and nature.",
      "Graph theory smuggled in as storytelling—dots, lines, and everything they connect.",
      "Picked off the shelf at the Cupertino library, Santa Clara County.",
    ],
  },
  {
    id: "the-mistake",
    title: "The Mistake",
    author: "Elle Kennedy",
    year: "2015",
    status: "reading",
    outline: [
      "Off-Campus #2: Logan, Grace, and a do-over that has to be earned.",
      "Second chances only count if you show up differently the second time.",
    ],
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    year: "2018",
    status: "finished",
    outline: [
      "Small 1% improvements compound into remarkable results.",
      "Systems over goals: you fall to the level of your systems.",
      "Make it obvious, attractive, easy, and satisfying.",
    ],
  },
  {
    id: "it-ends-with-us",
    title: "It Ends with Us",
    author: "Colleen Hoover",
    year: "2016",
    status: "finished",
    outline: [
      "Lily Bloom, a flower shop, and a love that slowly stops feeling safe.",
      "Sometimes the bravest thing you can do is break the cycle.",
      "\"It stops here. With me and you. It ends with us.\"",
    ],
  },
  {
    id: "it-starts-with-us",
    title: "It Starts with Us",
    author: "Colleen Hoover",
    year: "2022",
    status: "finished",
    outline: [
      "The other side of the story—Atlas's side—and the after.",
      "Second chances are quieter than first ones, and better for it.",
      "Healing isn't forgetting; it's choosing differently this time.",
    ],
  },
  {
    id: "normal-people",
    title: "Normal People",
    author: "Sally Rooney",
    year: "2018",
    status: "finished",
    outline: [
      "Connell and Marianne, orbiting each other from Carricklea to Trinity.",
      "How much gets lost in the things people almost say.",
      "Two people can change each other for good and still not stay.",
    ],
  },
  {
    id: "ikigai",
    title: "Ikigai",
    author: "García & Miralles",
    year: "2016",
    status: "finished",
    outline: [
      "The Japanese idea of a reason to get up in the morning.",
      "Lessons from Okinawa: small pleasures, movement, community, purpose.",
      "Stay busy with what matters, and never fully retire from it.",
    ],
  },
  {
    id: "hunger-games",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: "2008",
    status: "finished",
    outline: [
      "Katniss volunteers as tribute, and the arena is never the same.",
      "Survival as performance—the Capitol is always watching.",
    ],
  },
  {
    id: "catching-fire",
    title: "Catching Fire",
    author: "Suzanne Collins",
    year: "2009",
    status: "finished",
    outline: [
      "The victory tour, the Quarter Quell, and a spark that won't go out.",
      "\"Remember who the real enemy is.\"",
    ],
  },
  {
    id: "mockingjay",
    title: "Mockingjay",
    author: "Suzanne Collins",
    year: "2010",
    status: "finished",
    outline: [
      "Rebellion, propaganda, and what war costs the ones who fight it.",
      "Even symbols are people underneath.",
    ],
  },
  {
    id: "divergent",
    title: "Divergent",
    author: "Veronica Roth",
    year: "2011",
    status: "finished",
    outline: [
      "Five factions, one choice, and Tris refusing to fit a single box.",
      "Faction before blood—until it isn't.",
    ],
  },
  {
    id: "insurgent",
    title: "Insurgent",
    author: "Veronica Roth",
    year: "2012",
    status: "finished",
    outline: [
      "The factions at war, and secrets worth dying to protect.",
      "Guilt and grief make unreliable compasses.",
    ],
  },
  {
    id: "allegiant",
    title: "Allegiant",
    author: "Veronica Roth",
    year: "2013",
    status: "finished",
    outline: [
      "Beyond the fence, the world is bigger and messier than the factions.",
      "An ending brave enough to divide every reader who got there.",
    ],
  },
  {
    id: "book-thief",
    title: "The Book Thief",
    author: "Markus Zusak",
    year: "2005",
    status: "finished",
    outline: [
      "Narrated by Death, who is haunted by humans.",
      "Liesel steals books in Nazi Germany because words are worth stealing.",
      "Proof that language can be shelter.",
    ],
  },
  {
    id: "secret-seven",
    title: "The Secret Seven (all 15)",
    author: "Enid Blyton",
    year: "1949–1963",
    status: "finished",
    outline: [
      "All fifteen of them—badges, passwords, and a garden shed for headquarters.",
      "Mysteries solved before dinner, every single time.",
      "An important part of childhood; where the reading habit began.",
    ],
  },
  {
    id: "wimpy-kid",
    title: "Diary of a Wimpy Kid (series)",
    author: "Jeff Kinney",
    year: "2007–",
    status: "finished",
    outline: [
      "Greg Heffley's stick-figure chronicles of surviving middle school.",
      "Read cover to cover, again and again—another cornerstone of childhood.",
      "Proof that books can just be fun.",
    ],
  },
  {
    id: "today-tonight-tomorrow",
    title: "Today Tonight Tomorrow",
    author: "Rachel Lynn Solomon",
    year: "2020",
    status: "finished",
    outline: [
      "Rowan and Neil, four years of rivalry, one last night in Seattle.",
      "A senior-year scavenger hunt that turns enemies into something else.",
      "Loving a city and a person in the same twenty-four hours.",
    ],
  },
  {
    id: "good-intentions",
    title: "Good Intentions",
    author: "Kasim Ali",
    year: "2022",
    status: "finished",
    outline: [
      "Nur, caught between the person he loves and the family he can't disappoint.",
      "Four years of a secret is its own kind of lie.",
      "Love asks for honesty long before it asks for permission.",
    ],
  },
  {
    id: "great-gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: "1925",
    status: "up-next",
    outline: [
      "The green light, the parties, and the man who built himself for one person.",
      "\"So we beat on, boats against the current, borne back ceaselessly into the past.\"",
    ],
  },
  {
    id: "careless-people",
    title: "Careless People",
    author: "Sarah Wynn-Williams",
    year: "2025",
    status: "finished",
    outline: [
      "An insider's memoir of seven years inside Facebook's power circle.",
      "What happens when idealism meets a company that stops asking \"should we?\"",
    ],
  },
];

const shelves: { status: Book["status"]; label: string }[] = [
  { status: "reading", label: "currently reading" },
  { status: "finished", label: "finished" },
  { status: "up-next", label: "up next" },
];

const statusLabels: Record<Book["status"], string> = {
  reading: "Currently reading",
  finished: "Finished",
  "up-next": "Up next",
};

// Deterministic spine variation so the shelf looks hand-stacked
const spineHeights = ["h-44", "h-52", "h-40", "h-48", "h-56", "h-44", "h-52", "h-48"];
const spineWidths = ["w-11", "w-12", "w-10", "w-12", "w-11", "w-14", "w-10", "w-12"];
const spineWidthPx: Record<string, number> = { "w-10": 40, "w-11": 44, "w-12": 48, "w-14": 56 };
const SHELF_GAP_PX = 8; // gap-2
const SHELF_PADDING_PX = 16; // px-2 on each row

function BookSpine({ book, index, onPull }: { book: Book; index: number; onPull: () => void }) {
  return (
    <button
      onClick={onPull}
      title={`${book.title} — ${book.author}`}
      className={`group relative flex-shrink-0 ${spineHeights[index % spineHeights.length]} ${
        spineWidths[index % spineWidths.length]
      } border-2 border-ink-light bg-background rounded-sm
      flex flex-col items-center justify-between py-3
      transition-transform duration-200 ease-out
      hover:-translate-y-3 hover:border-ink focus-visible:-translate-y-3 focus-visible:border-ink
      focus:outline-none`}
    >
      {/* Spine bands */}
      <div className="w-full space-y-1 px-1.5">
        <div className="h-px bg-ink-faded/60 group-hover:bg-ink transition-colors" />
        <div className="h-px bg-ink-faded/60 group-hover:bg-ink transition-colors" />
      </div>

      {/* Vertical title */}
      <span
        className="flex-1 my-2 overflow-hidden font-mono text-[10px] md:text-xs text-ink-light group-hover:text-ink transition-colors [writing-mode:vertical-rl] whitespace-nowrap text-ellipsis tracking-wide"
      >
        {book.title}
      </span>

      {/* Spine bands */}
      <div className="w-full space-y-1 px-1.5">
        <div className="h-px bg-ink-faded/60 group-hover:bg-ink transition-colors" />
        <div className="h-px bg-ink-faded/60 group-hover:bg-ink transition-colors" />
      </div>
    </button>
  );
}

// Splits a shelf's books into rows that fit the container, so a full
// shelf overflows onto a new plank below instead of scrolling.
function Shelf({
  label,
  shelfBooks,
  shelfIndex,
  onPull,
}: {
  label: string;
  shelfBooks: Book[];
  shelfIndex: number;
  onPull: (book: Book) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setContainerWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rows = useMemo(() => {
    const entries = shelfBooks.map((book, index) => ({
      book,
      spineIndex: index + shelfIndex * 3,
    }));
    if (!containerWidth) return [entries];

    const available = containerWidth - SHELF_PADDING_PX;
    const result: (typeof entries)[] = [];
    let row: typeof entries = [];
    let rowWidth = 0;
    for (const entry of entries) {
      const widthClass = spineWidths[entry.spineIndex % spineWidths.length];
      const bookWidth = spineWidthPx[widthClass] + (row.length > 0 ? SHELF_GAP_PX : 0);
      if (row.length > 0 && rowWidth + bookWidth > available) {
        result.push(row);
        row = [entry];
        rowWidth = spineWidthPx[widthClass];
      } else {
        row.push(entry);
        rowWidth += bookWidth;
      }
    }
    if (row.length > 0) result.push(row);
    return result;
  }, [shelfBooks, shelfIndex, containerWidth]);

  return (
    <section
      className="opacity-0 animate-fade-in-up"
      style={{ animationFillMode: 'forwards', animationDelay: `${(shelfIndex + 1) * 150}ms` }}
    >
      <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase mb-6">
        // {label}
      </p>
      <div ref={containerRef}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-end gap-2 pt-4 px-2 border-b-4 border-ink-light"
          >
            {row.map(({ book, spineIndex }) => (
              <BookSpine
                key={book.id}
                book={book}
                index={spineIndex}
                onPull={() => onPull(book)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Reading() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <Layout>
      <div className="max-w-5xl">
        <header className="mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase mb-4">
            // Reading
          </p>
          <h1 className="text-2xl md:text-3xl font-mono font-medium mb-4">
            The bookshelf
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Books I'm reading, have read, or am circling. Pull a spine from
            the shelf to see its outline.
          </p>
        </header>

        <div className="space-y-14">
          {shelves.map((shelf, shelfIndex) => {
            const shelfBooks = books.filter((b) => b.status === shelf.status);
            if (shelfBooks.length === 0) return null;
            return (
              <Shelf
                key={shelf.status}
                label={shelf.label}
                shelfBooks={shelfBooks}
                shelfIndex={shelfIndex}
                onPull={setSelectedBook}
              />
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-border opacity-0 animate-fade-in-up animation-delay-500" style={{ animationFillMode: 'forwards' }}>
          <p className="text-sm text-muted-foreground font-mono">
            // {books.length} books on the shelf. Recommendations always welcome.
          </p>
        </div>
      </div>

      {/* Pulled-out book */}
      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-2xl w-[95vw] p-0 border-border bg-background overflow-hidden">
          {selectedBook && (
            <div className="flex flex-col sm:flex-row">
              {/* Front cover, outline only */}
              <div className="sm:w-56 flex-shrink-0 p-6 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-border">
                <div className="w-40 aspect-[2/3] border-2 border-ink rounded-sm p-3 flex flex-col justify-between bg-background">
                  <div className="space-y-1">
                    <div className="h-px bg-ink" />
                    <div className="h-px bg-ink" />
                  </div>
                  <div className="text-center px-1">
                    <p className="font-mono text-xs font-medium text-foreground leading-snug">
                      {selectedBook.title}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground mt-2">
                      {selectedBook.author}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="h-px bg-ink" />
                    <div className="h-px bg-ink" />
                  </div>
                </div>
              </div>

              {/* Outline */}
              <div className="p-6 flex-1">
                <p className="text-xs text-muted-foreground font-mono tracking-wider uppercase mb-2">
                  // {statusLabels[selectedBook.status]} • {selectedBook.year}
                </p>
                <h2 className="font-mono font-medium text-lg text-foreground">
                  {selectedBook.title}
                </h2>
                <p className="font-mono text-sm text-muted-foreground mt-1 mb-4">
                  {selectedBook.author}
                </p>
                <ul className="space-y-2">
                  {selectedBook.outline.map((point, i) => (
                    <li key={i} className="flex gap-2 font-mono text-sm text-ink-light leading-relaxed">
                      <span className="text-muted-foreground flex-shrink-0">–</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
