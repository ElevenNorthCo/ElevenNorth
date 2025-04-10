export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management and secure payment processing.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      link: "https://www.google.com",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with interactive data visualization.",
      technologies: ["TypeScript", "Next.js", "TailwindCSS", "D3.js"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      link: "https://www.google.com",
    },
    {
      title: "AI-Powered Chat Application",
      description: "Real-time chat platform with AI-powered language translation and content moderation.",
      technologies: ["React", "WebSocket", "OpenAI", "Redis"],
      imageUrl: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1000",
      link: "https://www.google.com",
    },
    // Add more as needed...
  ];
  