import Avatar from "@/components/Avatar";
import ChatInterface from "@/components/ChatInterface";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Globe, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const projects = [
    {
      title: "AI Website Generator",
      description: "Create stunning websites using natural language prompts",
      demoUrl: "https://demo1.example.com",
      tags: ["AI", "React", "Node.js"]
    },
    {
      title: "Smart Content Creator",
      description: "AI-powered platform for generating web content",
      demoUrl: "https://demo2.example.com",
      tags: ["Machine Learning", "Python", "React"]
    },
    {
      title: "Dynamic UI Builder",
      description: "Build responsive interfaces with AI assistance",
      demoUrl: "https://demo3.example.com",
      tags: ["UI/UX", "JavaScript", "AI"]
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header Section with Story */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text animate-gradient-shift">AI Website Developer</h1>
            <div className="flex items-center justify-center gap-8 mb-8">
              <Avatar />
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 glassmorphism hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-futuristic-primary" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 glassmorphism hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-futuristic-primary" />
                </a>
                <a href="mailto:contact@example.com"
                   className="p-2 glassmorphism hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-futuristic-primary" />
                </a>
              </div>
            </div>
            
            <Card className="p-8 glassmorphism max-w-2xl mx-auto">
              <p className="text-lg mb-4">
                Hi! I'm a self-taught software engineer specializing in AI-powered web development. 
                My journey started with HTML, CSS, and JavaScript, and evolved into mastering React, 
                Python, and C languages.
              </p>
              <p className="text-lg">
                What sets me apart is my ability to leverage AI to create innovative web solutions. 
                I'm constantly learning and exploring new technologies to push the boundaries of what's possible.
              </p>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="flex flex-col items-center gap-8 mb-16">
            <ChatInterface />
          </div>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 glassmorphism group hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-futuristic-primary">{project.title}</h3>
                  <p className="text-futuristic-text/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-sm rounded-full bg-futuristic-secondary text-futuristic-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center text-futuristic-primary hover:text-futuristic-accent">
                    <Globe className="w-4 h-4 mr-2" />
                    View Demo
                  </a>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Let's Connect</h2>
            {!showContactForm ? (
              <Card className="p-8 glassmorphism max-w-lg mx-auto">
                <p className="mb-6 text-futuristic-text/80">
                  Ready to build something amazing with AI? Let's talk about your project!
                </p>
                <Button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-futuristic-primary hover:bg-futuristic-primary/80 text-black flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Contact Me
                </Button>
              </Card>
            ) : (
              <Card className="p-8 glassmorphism max-w-lg mx-auto">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 glassmorphism bg-transparent border border-futuristic-primary/30 rounded-lg focus:border-futuristic-primary outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 glassmorphism bg-transparent border border-futuristic-primary/30 rounded-lg focus:border-futuristic-primary outline-none"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full p-3 glassmorphism bg-transparent border border-futuristic-primary/30 rounded-lg focus:border-futuristic-primary outline-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-futuristic-primary hover:bg-futuristic-primary/80 text-black"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;