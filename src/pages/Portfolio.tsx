import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management and secure payment processing.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with interactive data visualization.",
    technologies: ["TypeScript", "Next.js", "TailwindCSS", "D3.js"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "AI-Powered Chat Application",
    description: "Real-time chat platform with AI-powered language translation and content moderation.",
    technologies: ["React", "WebSocket", "OpenAI", "Redis"],
    imageUrl: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Portfolio() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Our Portfolio
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our latest projects and see how we've helped businesses transform their digital presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-black/50 border-emerald-950">
            <div className="h-48 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-emerald-400">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="bg-emerald-950/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}