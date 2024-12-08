import Avatar from "@/components/Avatar";
import ChatInterface from "@/components/ChatInterface";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Globe, Layout, MessageSquare } from "lucide-react";

const Index = () => {
  const skills = [
    { name: "AI Website Development", icon: <Layout className="w-6 h-6" /> },
    { name: "Full Stack Development", icon: <Code2 className="w-6 h-6" /> },
    { name: "Web Technologies", icon: <Globe className="w-6 h-6" /> },
    { name: "Communication", icon: <MessageSquare className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: "AI-Powered Portfolio Generator",
      description: "Automated portfolio creation using AI technologies",
    },
    {
      title: "Smart Web Builder",
      description: "AI-assisted website development platform",
    },
    {
      title: "Dynamic Content Creator",
      description: "AI tool for generating web content",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text animate-gradient-shift">AI Website Developer</h1>
            <p className="text-futuristic-text/80">Building the future of web development with AI</p>
          </div>

          {/* Avatar and Chat Section */}
          <div className="flex flex-col items-center gap-8 mb-16">
            <Avatar />
            <ChatInterface />
          </div>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="p-6 glassmorphism hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col items-center gap-4 text-futuristic-primary">
                    {skill.icon}
                    <h3 className="font-semibold text-center">{skill.name}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 glassmorphism hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-futuristic-primary">{project.title}</h3>
                  <p className="text-futuristic-text/80">{project.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Let's Connect</h2>
            <Card className="p-8 glassmorphism max-w-lg mx-auto">
              <p className="mb-6 text-futuristic-text/80">
                Ready to build something amazing with AI? Let's talk about your project!
              </p>
              <Button className="bg-futuristic-primary hover:bg-futuristic-primary/80 text-black">
                Contact Me
              </Button>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;