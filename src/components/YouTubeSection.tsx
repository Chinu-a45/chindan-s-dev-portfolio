import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const YouTubeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Learning Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Watch my data mining problem-solving series on YouTube
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl border-2">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/20">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Play className="w-6 h-6 text-primary" />
                Data Mining Solutions Playlist
              </CardTitle>
              <CardDescription className="text-base">
                Step-by-step explanations of data mining concepts and problem-solving techniques
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6">
              <a
                href="https://youtube.com/playlist?list=PLIAqZFREtnAVsuOG8wUkZTrGVVgkjgbTQ&si=OXuntfcqFDL_R37a"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video bg-muted rounded-lg mb-6 relative overflow-hidden group cursor-pointer">
                  <img 
                    src="https://i.ytimg.com/vi/7AHf9uTGmic/hqdefault.jpg"
                    alt="Data Mining Solutions Playlist Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-background/60 group-hover:from-primary/50 group-hover:to-background/70 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-primary-foreground" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </a>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Data Mining
                  </span>
                  <span className="px-3 py-1 bg-chart-1/10 text-chart-1 rounded-full text-sm font-medium">
                    Algorithms
                  </span>
                  <span className="px-3 py-1 bg-chart-2/10 text-chart-2 rounded-full text-sm font-medium">
                    Problem Solving
                  </span>
                  <span className="px-3 py-1 bg-chart-4/10 text-chart-4 rounded-full text-sm font-medium">
                    Tutorials
                  </span>
                </div>

                <Button 
                  className="w-full gap-2" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://youtube.com/playlist?list=PLIAqZFREtnAVsuOG8wUkZTrGVVgkjgbTQ&si=OXuntfcqFDL_R37a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Watch Full Playlist on YouTube
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-muted-foreground">
            <p className="text-sm">
              Subscribe to stay updated with new problem-solving videos and tutorials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
