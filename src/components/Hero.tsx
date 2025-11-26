import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 
            className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
          >
            Hi, I'm <span className="text-primary">Chindan Kushwaha</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-muted-foreground animate-fade-in"
            style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
          >
            Full Stack Developer | MERN Enthusiast | DSA Problem Solver
          </p>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Currently mastering the MERN stack while building a strong foundation in 
            algorithms, data structures, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2" asChild>
              <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=chindankushwaha72@gmail.com"
              target="_blank">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://github.com/Chinu-a45" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/chindan-kushwaha-75a77b276/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
