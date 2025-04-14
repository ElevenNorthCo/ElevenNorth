import reachingTheLostImg from "@/assets/reaching-the-lost.jpg";
import reachingTheLostGPTImg from "@/assets/reaching-the-lost-gpt.jpg";

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
      title: "Reaching The Lost GPT",
      description: "Trained a GPT to emulate the style Mike Barko uses when sharing The Gospel of Jesus. This allows new believers to be able to ask questions and get the repsponse in a way that is easy to understand.",
      technologies: ["OpenAI", "GPT-4", "Python", "AI Training"],
      imageUrl: reachingTheLostGPTImg,
      link: "https://chatgpt.com/g/g-wYA2qkp3L-communities-4-christ",
    },
    {
      title: "Ebay Seller Assistant",
      description: "Real-time chat platform with AI-powered language translation and content moderation.",
      technologies: ["React", "WebSocket", "OpenAI", "Redis"],
      imageUrl: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1000",
      link: "",
    },
    // Add more as needed...
  ];
  