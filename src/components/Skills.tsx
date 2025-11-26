import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layers, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
      color: "text-primary"
    },
    {
      title: "Frontend",
      icon: Layers,
      skills: ["React", "Tailwind CSS", "GSAP", "HTML/CSS"],
      color: "text-chart-1"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      color: "text-chart-2"
    },
    {
      title: "Core Skills",
      icon: Zap,
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Git"],
      color: "text-chart-4"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`${category.color} w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-semibold text-xl">{category.title}</h3>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li 
                        key={i}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
