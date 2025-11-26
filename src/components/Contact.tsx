import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const socials = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:chindankushwaha72@gmail.com",
      label: "chindankushwaha72@gmail.com"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Chinu-a45",
      label: "github.com/Chinu-a45"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/chindan-kushwaha-75a77b276/",
      label: "linkedin.com/in/chindan-kushwaha"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities
          </p>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto py-4 px-6 justify-start gap-4 hover:border-primary hover:bg-primary/5 transition-all"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-5 h-5 text-primary" />
                        <div className="text-left">
                          <div className="font-semibold">{social.name}</div>
                          <div className="text-xs text-muted-foreground">{social.label}</div>
                        </div>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
