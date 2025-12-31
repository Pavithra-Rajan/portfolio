import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";
import art6 from "@/assets/art6.jpg";
import art7 from "@/assets/art7.jpg";
import art8 from "@/assets/art8.jpg";
import art9 from "@/assets/art9.jpg";
import art10 from "@/assets/art10.jpg";
import art11 from "@/assets/art11.jpg";
import art12 from "@/assets/art12.jpg"; 
import art13 from "@/assets/art13.jpg";
import art14 from "@/assets/art14.jpg";
import art15 from "@/assets/art15.jpg";
import art16 from "@/assets/art16.jpg";

interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: string;
  image: string;
}

const artworks: Artwork[] = [
  {
    id: "1",
    title: "Flower",
    medium: "Ink on Paper",
    year: "2021",
    image: art1,
  },
  {
    id: "2",
    title: "Leaf",
    medium: "Ink on Paper",
    year: "2021",
    image: art2,
    size: "tall",
  },
  {
    id: "4",
    title: "Graveyard Shift",
    medium: "Dotted Art",
    year: "2022",
    image: art4,
  },
  {
    id: "5",
    title: "Piano",
    medium: "Zentangle",
    year: "2022",
    image: art5,
  },
    {
    id: "9",
    title: "The Eye",
    medium: "Line Art",
    year: "2021",
    image: art9,
  },
  {
    id: "7",
    title: "Owl",
    medium: "Zentangle",
    year: "2022",
    image: art7,
    size: "tall",
  },
  {
    id: "8",
    title: "Feathered Friend",
    medium: "Zentangle",
    year: "2016",
    image: art8,
    size: "tall",
  },
  {
    id: "10",
    title: "The Dress",
    medium: "Sketch",
    year: "2021",
    image: art10,
    size: "tall",
  },
  {
    id: "6",
    title: "Falcon",
    medium: "Zentangle",
    year: "2015",
    image: art6,
    size: "tall",
  },
  {
    id: "11",
    title: "Mickey and Minnie",
    medium: "Ink on Paper",
    year: "2023",
    image: art11,
  },
  {
    id: "12",
    title: "Burj Khalifa",
    medium: "Sketch",
    year: "2019",
    image: art12,
    size: "tall",
  },
  {
    id: "13",
    title: "Be Creative",
    medium: "Doodles",
    year: "2017",
    image: art13,
  },
    {
    id: "15",
    title: "Petals",
    medium: "Zentangle",
    year: "2019",
    image: art15,
    size: "large",
  },
  {
    id: "14",
    title: "Guitar",
    medium: "Sketch",
    year: "2019",
    image: art14,
    size: "tall"
  },
  {
    id: "16",
    title: "Caged",
    medium: "Symbolism",
    year: "2020",
    image: art16,
    size: "tall",
  },
  {
    id: "3",
    title: "Butterfly",
    medium: "Ink on Paper",
    year: "2021",
    image: art3,
    size: "large",
  },
];

const sizeClasses: Record<Artwork['size'], string> = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  large: 'col-span-2 row-span-2',
  tall: 'col-span-1 row-span-2',
  wide: 'col-span-2 row-span-1',
};

const aspectClasses: Record<Artwork['size'], string> = {
  small: 'aspect-square',
  medium: 'aspect-square',
  large: 'aspect-square',
  tall: 'aspect-[3/5]',
  wide: 'aspect-[2/1]',
};

export default function Art() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <Layout>
      <div className="max-w-5xl">
        <header className="mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase mb-4">
            // Art
          </p>
          <h1 className="text-2xl md:text-3xl font-mono font-medium mb-4">
            Visual experiments
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Sketches, digital works, and typography experiments. 
            All rendered in grayscale—because constraints breed creativity.
          </p>
        </header>

        {/* Masonry-style collage grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`relative opacity-0 animate-fade-in-up cursor-pointer group overflow-hidden ${sizeClasses[artwork.size]}`}
              style={{ animationFillMode: 'forwards', animationDelay: `${(index + 1) * 75}ms` }}
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedArtwork(artwork)}
            >
              {/* Art image container */}
              <div className="absolute inset-0 bg-card border border-border overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-[50%]"
                />
                
                {/* Paper pin effect */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-foreground/30 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Hover overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex flex-col justify-end p-3 md:p-4 transition-opacity duration-300 ${
                  hoveredId === artwork.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="font-mono font-medium text-primary-foreground text-sm md:text-base leading-tight">
                  {artwork.title}
                </h3>
                <p className="font-mono text-xs text-primary-foreground/70 mt-1">
                  {artwork.medium} • {artwork.year}
                </p>
              </div>

              {/* Corner fold effect */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border opacity-0 animate-fade-in-up animation-delay-500" style={{ animationFillMode: 'forwards' }}>
          <p className="text-sm text-muted-foreground font-mono">
            // All works available for viewing. Click to enlarge.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-4xl w-[95vw] h-auto max-h-[90vh] p-0 border-border bg-background overflow-hidden">

          
          {selectedArtwork && (
            <div className="flex flex-col">
              <div className="relative w-full max-h-[70vh] overflow-hidden bg-muted">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 border-t border-border">
                <h2 className="font-mono font-medium text-lg text-foreground">
                  {selectedArtwork.title}
                </h2>
                <p className="font-mono text-sm text-muted-foreground mt-1">
                  {selectedArtwork.medium} • {selectedArtwork.year}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
