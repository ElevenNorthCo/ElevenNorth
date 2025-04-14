import reachingTheLostImg from "@/assets/reaching-the-lost.jpg";


export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Reaching The Lost",
      description: "We redesigned and enhanced reachingthelost.org to better support Communities 4 Christ's mission of uniting believers and reaching the lost through a more engaging and user-friendly online experience.",
      technologies: ["HTML5", "SEO", "Redesign", "PayPal"],
      imageUrl: reachingTheLostImg,
      link: "https://www.reachingthelost.org",
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
  