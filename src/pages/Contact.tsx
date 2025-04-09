import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-black/50 border-emerald-800">
            <CardHeader>
              <CardTitle className="text-emerald-400">Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <span>123 Tech Street, Digital City</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-emerald-800">
            <CardHeader>
              <CardTitle className="text-emerald-400">Send a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-black/30 border-emerald-800"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-black/30 border-emerald-800"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    className="bg-black/30 border-emerald-800" 
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}