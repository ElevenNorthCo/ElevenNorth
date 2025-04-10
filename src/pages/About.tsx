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
import { Helmet } from "react-helmet-async";
import clsx from "clsx";

// ✨ Shared card styles
const glowCard = "transition transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,0,0.15)] border border-emerald-900/40";

// ✨ Icon hover glow
const iconGlow = "transition duration-300 hover:text-green-400 hover:drop-shadow-[0_0_6px_#00FF88]";

export default function About() {
  return (
    <main className="relative text-white overflow-hidden">
      <Helmet>
        <title>About Eleven North Co. | Web Development Shenandoah Valley</title>
        <meta name="description" content="Learn about Eleven North Co., a Shenandoah Valley-based web development company specializing in websites, AI tools, and business automation." />
        <meta name="keywords" content="web development Shenandoah Valley, Harrisonburg web design, AI automation VA, Eleven North Co, small business websites Virginia" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Eleven North Co." />
        <meta property="og:title" content="About Eleven North Co." />
        <meta property="og:description" content="Building custom websites, AI tools, and digital solutions from the Shenandoah Valley to the world." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.elevennorth.co/about" />
        <meta property="og:image" content="/social-preview.jpg" />
      </Helmet>

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
            We help local businesses, startups, and visionaries bring their ideas to life with cutting-edge digital solutions.
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
            Eleven North Co. was founded to give small businesses the same digital edge as large corporations—without the complexity or inflated costs.
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
            From Route 11 to regional impact, our journey is rooted in real people. We empower entrepreneurs, nonprofits, and trades with the digital tools to compete and grow.
          </p>
          <p>
            Whether launching a store, automating a service, or creating something never done before—our job is to make it feel possible and painless.
          </p>
        </motion.div>
      </section>

      {/* 💼 WHAT WE DO (with fixed matrix for mobile) */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 overflow-hidden z-0">
          <MatrixRain />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg">
            Scalable tools, handcrafted code, and automation that actually saves you time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <ShoppingCart className={iconGlow} />,
                title: "E-Commerce & Online Stores",
                desc: "Launch lean, fast, and SEO-ready with custom Shopify and storefront builds.",
              },
              {
                icon: <Cpu className={iconGlow} />,
                title: "AI Automation",
                desc: "Save time, scale faster. Integrate automation and smart tools into your workflow.",
              },
              {
                icon: <Rocket className={iconGlow} />,
                title: "Web Development",
                desc: "Responsive, fast, and built to convert across every screen and device.",
              },
            ].map((item, i) => (
              <Card key={i} className={clsx("bg-black/50", glowCard)}>
                <CardContent className="p-6 text-left space-y-3">
                  <div className="flex items-center gap-3">{item.icon}
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 WHO WE HELP */}
      <section className="py-24 px-6 bg-black/60">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Who We Help
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg">
            We support the people who make our communities work — small business owners, local legends, and nonprofit changemakers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <HeartHandshake className={iconGlow} />,
                title: "Local Service Providers",
                desc: "From HVAC techs to creatives — we help local legends level up online.",
              },
              {
                icon: <HandHelping className={iconGlow} />,
                title: "Nonprofits & Ministries",
                desc: "Donation-friendly, mobile-first sites for churches and outreach groups.",
              },
              {
                icon: <Lightbulb className={iconGlow} />,
                title: "Startups & Hustlers",
                desc: "If you have a big idea or small dream — we’ll help you launch it fast.",
              },
            ].map((item, index) => (
              <Card key={index} className={clsx("bg-black/50", glowCard)}>
                <CardContent className="p-6 space-y-4 text-left">
                  <div className="flex items-center gap-3">{item.icon}
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 WHY CHOOSE US */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Why Choose Eleven North Co.?
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg">
            We’re a local-first studio with global-standard tech, personal support, and zero BS.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              {
                icon: <Cpu className={iconGlow} />,
                title: "AI-Powered Solutions",
                desc: "From analytics to automation — we help you save time and grow faster.",
              },
              {
                icon: <HeartHandshake className={iconGlow} />,
                title: "True Partnership",
                desc: "You won’t be left guessing. We walk with you every step of the way.",
              },
              {
                icon: <Globe className={iconGlow} />,
                title: "Built to Scale",
                desc: "Fast-loading, modern frameworks that can grow with your business.",
              },
              {
                icon: <Sparkle className={iconGlow} />,
                title: "Custom Everything",
                desc: "No cookie-cutters, no templates. Just handcrafted code and style.",
              },
            ].map((item, index) => (
              <Card key={index} className={clsx("bg-black/40", glowCard)}>
                <CardContent className="p-6 space-y-2 text-left">
                  <div className="flex items-center gap-3">{item.icon}
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <MatrixRain />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Let’s Build Something That Lasts
          </h2>
          <p className="text-white text-lg">
            Whether you're launching your first site or automating a full business — Eleven North is your partner.
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
