import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, Handshake, Rocket, TrendingUp } from "lucide-react";
import MatrixRain from "@/components/MatrixRain";

export default function About() {
  return (
    <main className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-6 py-24">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Empowering Dreams from the Shenandoah Valley to the World
          </h1>
          <p className="text-gray-300 text-lg">
            Eleven North Co is a digital innovation studio based in the heart of the Shenandoah Valley along historic Highway 11 North. We specialize in crafting tailored web experiences, automation tools, and AI-powered solutions that help local businesses and global brands thrive in the digital world.
          </p>
        </div>
      </section>

      <section className="bg-black/60 py-24 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Our Story</h2>
          <p className="text-gray-400 text-lg">
            Founded with a vision to bridge tradition and innovation, Eleven North Co draws inspiration from the scenic beauty and resilient spirit of the Shenandoah Valley. Highway 11 North isn't just part of our name—it represents the journey our clients take toward growth, modernization, and lasting impact. We’ve helped everyone from local tradesmen and nonprofits to growing enterprises embrace digital transformation.
          </p>
        </div>
      </section>

      <section className="bg-black py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-white mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
              title: "AI & Web Development",
              icon: <Lightbulb className="text-emerald-400 w-6 h-6" />,
              description:
                "We build intelligent, user-focused platforms that automate processes and enhance business outcomes."
            }, {
              title: "E-Commerce Solutions",
              icon: <Rocket className="text-emerald-400 w-6 h-6" />,
              description:
                "From concept to cart, we launch Shopify stores and dropshipping brands designed for growth."
            }, {
              title: "Sites for Local Businesses",
              icon: <Handshake className="text-emerald-400 w-6 h-6" />,
              description:
                "We design sleek, mobile-first websites for service providers, ministries, and hometown heroes."
            }, {
              title: "AI-Powered Marketing",
              icon: <TrendingUp className="text-emerald-400 w-6 h-6" />,
              description:
                "Using SEO and automation, we help businesses rank locally, reach customers, and convert more leads."
            }].map((service, index) => (
              <Card
                key={index}
                className="bg-black/40 border-emerald-800/40 hover:border-emerald-500 transition"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black/70 py-24 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Who We Help</h2>
          <p className="text-gray-400 text-lg">
            From neighborhood contractors to regional non-profits, we empower dreamers of all kinds:
          </p>
          <ul className="text-gray-300 text-left list-disc list-inside max-w-2xl mx-auto space-y-2">
            <li>✅ Local service providers looking to grow online visibility</li>
            <li>✅ First-time entrepreneurs launching their digital storefront</li>
            <li>✅ Nonprofits and churches seeking simple, donation-ready websites</li>
            <li>✅ Established brands wanting to modernize through automation</li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black via-zinc-900 to-black py-24 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-white">Why Choose Eleven North?</h2>
          <p className="text-gray-400 text-lg">
            We’re not a faceless agency—we’re a close-knit team of designers, developers, and strategists who care deeply about your success. Rooted in the Shenandoah Valley, we combine local heart with global thinking.
          </p>
          <ul className="text-gray-300 text-left list-disc list-inside max-w-2xl mx-auto space-y-2">
            <li>✔️ Solutions tailored to your unique needs—not templates</li>
            <li>✔️ Transparent pricing and flexible project scopes</li>
            <li>✔️ Local insight, long-term partnerships, and real results</li>
            <li>✔️ AI integrations that work with your business, not against it</li>
          </ul>
        </div>
      </section>

      <section className="py-24 px-4 bg-black/80">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-emerald-400 text-sm uppercase font-medium">📢 Ready to take the next step?</p>
          <h2 className="text-3xl font-bold text-white">Let’s Build Something That Lasts</h2>
          <p className="text-gray-400">
            Whether you're just starting or scaling up, Eleven North Co is your partner in building a digital foundation rooted in strategy, simplicity, and innovation.
          </p>
          <Button asChild className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700">
            <Link to="/contact">🚀 Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
