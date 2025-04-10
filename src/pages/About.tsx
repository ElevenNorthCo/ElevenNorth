import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MatrixRain from "@/components/MatrixRain";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  HeartHandshake,
  Globe,
  Sparkle,
  Lightbulb,
  Rocket,
  ShoppingCart,
  HandHelping
} from "lucide-react";

export default function About() {
  return (
    <main className="relative text-white">
      {/* 🔥 HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Empowering Dreams from the Shenandoah Valley to the World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-300"
          >
            We’re a digital innovation studio helping local businesses, startups, and visionaries bring their ideas to life through cutting-edge web and AI solutions.
          </motion.p>
        </div>
      </section>

      {/* 🧠 OUR STORY */}
      <section className="py-24 px-6 max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Our Roots Run Along Route 11 North
          </h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
            Eleven North Co. began in the heart of the Shenandoah Valley with a simple belief: local businesses should have access to world-class digital tools. Inspired by Route 11 North, our name symbolizes growth, movement, and the journey every client takes with us.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white space-y-6 text-lg leading-relaxed"
        >
          <p>
            Whether you’re a service provider looking to modernize, a creative launching a store, or a company streamlining operations — we walk with you every step of the way.
          </p>
          <p>
            We combine powerful AI, clean design, and handcrafted strategy to give you a site or tool that’s more than functional — it’s transformative.
          </p>
        </motion.div>
      </section>

      {/* 💼 WHAT WE DO (WITH MATRIX RAIN + GLOWING CARDS) */}
      <section className="relative py-24 px-6 overflow-hidden">
        <MatrixRain />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg">
            We offer hands-on, scalable digital solutions that help you grow — fast, smart, and affordably.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <ShoppingCart className="h-8 w-8 text-emerald-400" />,
                title: "E-Commerce & Online Stores",
                desc: "Launch your dream store with clean design, built-in SEO, and fast checkout.",
              },
              {
                icon: <Cpu className="h-8 w-8 text-emerald-400" />,
                title: "AI Automation",
                desc: "Automate tasks, increase efficiency, and scale your business with smart tools.",
              },
              {
                icon: <Rocket className="h-8 w-8 text-emerald-400" />,
                title: "Web Development",
                desc: "Custom websites built to convert, grow, and look great on every screen.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-black/50 border border-emerald-900/40 transition hover:shadow-[0_0_20px_2px_rgba(0,255,0,0.2)]"
              >
                <CardContent className="p-6 text-left space-y-3">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 WHO WE HELP (GRADIENT + ICON CARDS) */}
      <section className="py-24 px-6 bg-black/60">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Who We Help
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg">
            We focus on the people who make our region special — from small businesses to nonprofit organizations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <HeartHandshake className="h-8 w-8 text-emerald-400" />,
                title: "Local Service Providers",
                desc: "From contractors to creatives, we help small businesses thrive online.",
              },
              {
                icon: <HandHelping className="h-8 w-8 text-emerald-400" />,
                title: "Nonprofits & Ministries",
                desc: "Build donation-ready, mobile-friendly websites that reflect your mission.",
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-emerald-400" />,
                title: "Entrepreneurs & Startups",
                desc: "We help you launch smart and lean — with tools that grow as you grow.",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-black/50 border border-emerald-800/40">
                <CardContent className="p-6 space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 WHY CHOOSE ELEVEN NORTH */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Why Choose Eleven North Co.?
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg">
            We’re more than developers — we’re digital partners who genuinely care about your mission and your results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              {
                icon: <Cpu className="h-6 w-6 text-emerald-400" />,
                title: "AI-Powered Everything",
                desc: "From insights to automations, we integrate smart tech into your workflow.",
              },
              {
                icon: <HeartHandshake className="h-6 w-6 text-emerald-400" />,
                title: "Real Collaboration",
                desc: "We listen, we adapt, and we deliver — together, every step of the way.",
              },
              {
                icon: <Globe className="h-6 w-6 text-emerald-400" />,
                title: "Local Roots, Global Standards",
                desc: "Shenandoah-based, but built to scale with clean code and high performance.",
              },
              {
                icon: <Sparkle className="h-6 w-6 text-emerald-400" />,
                title: "No Templates, No Fluff",
                desc: "Everything is customized to your goals — no bloated frameworks or extras.",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-black/40 border border-emerald-900/30 text-left">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA – MATRIX + GLOWY BUTTON */}
      <section className="relative py-24 px-6 overflow-hidden">
        <MatrixRain />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Let’s Build Something That Lasts
          </h2>
          <p className="text-white text-lg">
            Whether you're launching your first site or building your tenth product — Eleven North is here to help you win.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00ff88" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 transition-all duration-300"
            >
              <Link to="/contact">🚀 Book a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
