import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <Card className="bg-black/50 border-emerald-800">
            <CardHeader>
              <CardTitle className="text-emerald-400">Contact Information</CardTitle>
              <CardDescription>Reach out anytime by email</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-white">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <a href="mailto:ElevenNorthCo@gmail.com" className="hover:text-emerald-400 transition-colors">
                    ElevenNorthCo@gmail.com
                  </a>
                </div>
                <div className="text-sm text-gray-400 pl-8">
                  Shenandoah Valley, VA 22815
                </div>
              </div>
              <div className="rounded-md overflow-hidden mt-6">
  <iframe
    title="Mauzy VA Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.376043460013!2d-78.78159428461946!3d38.64130427960279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b3de7fc0dbd1e1%3A0x8e78021c64d20602!2sMauzy%2C%20VA%2022815!5e0!3m2!1sen!2sus!4v1712771544046!5m2!1sen!2sus"
    width="100%"
    height="200"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full rounded-md shadow-md border border-emerald-800"
  ></iframe>
</div>

            </CardContent>
          </Card>

          {/* Contact Form using FormSubmit */}
          <Card className="bg-black/50 border-emerald-800">
            <CardHeader>
              <CardTitle className="text-emerald-400">Send a Message</CardTitle>
              <CardDescription>Fill out the form and we’ll reply shortly</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/ElevenNorthCo@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <Input 
                  name="name" 
                  required 
                  placeholder="Your Name" 
                  className="bg-black/30 border-emerald-800" 
                />
                <Input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="Your Email" 
                  className="bg-black/30 border-emerald-800" 
                />
                <Textarea 
                  name="message" 
                  required 
                  placeholder="Your Message" 
                  className="bg-black/30 border-emerald-800" 
                  rows={4}
                />
                <input type="hidden" name="_captcha" value="false" />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 transition-all duration-300"
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
