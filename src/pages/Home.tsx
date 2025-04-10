import { ArrowRight, Code2, MonitorSmartphone, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MatrixRain from '@/components/MatrixRain';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 text-transparent bg-clip-text animate-gradient">
              Elevate Your Digital Presence
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Crafting exceptional web experiences in the heart of Shenandoah Valley
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 text-transparent bg-clip-text mb-4">
              Why Choose Eleven North?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with creative innovation to deliver exceptional digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="h-8 w-8 text-emerald-500" />,
                title: 'Custom Development',
                description:
                  'Tailored technology solutions built around your business. We don’t believe in one-size-fits-all. At Eleven North, we craft custom web and software solutions that align perfectly with your vision, operations, and goals. Whether it’s a smart automation tool or a full-scale web app, we use the latest technologies to bring your ideas to life—efficiently, securely, and at scale.',
              },
              {
                icon: <MonitorSmartphone className="h-8 w-8 text-emerald-500" />,
                title: 'Responsive Design',
                description:
                  'Pixel-perfect performance across all screens. Your customers are everywhere—and so are their devices. We design adaptive, intuitive interfaces that look and feel right, whether on desktop, tablet, or mobile. From the first tap to the final scroll, our responsive designs deliver a seamless, user-friendly experience that keeps people engaged.',
              },
              {
                icon: <Rocket className="h-8 w-8 text-emerald-500" />,
                title: 'Performance Optimization',
                description:
                  'Speed, stability, and scalability—built-in. Slow websites kill conversions. That’s why we fine-tune every line of code for speed and performance. With Eleven North, you get lightning-fast load times, streamlined user journeys, and robust infrastructure that scales with your business. We optimize for what matters—results.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-emerald-900/20 bg-black/40 hover:bg-emerald-950/20 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's work together to create something extraordinary.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 group"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
