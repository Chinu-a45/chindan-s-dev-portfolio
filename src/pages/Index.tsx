import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import YouTubeSection from "@/components/YouTubeSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <YouTubeSection />
      <Contact />
      
      <footer className="py-8 bg-secondary text-secondary-foreground text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Chindan Kushwaha. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Index;
