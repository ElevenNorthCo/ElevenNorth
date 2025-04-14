import { Code2, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-emerald-900/20 py-16 text-gray-400 text-sm relative">
      {/* 🔍 SEO: LocalBusiness Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Eleven North Co.",
            url: "https://www.elevennorth.co",
            email: "ElevenNorthCo@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Shenandoah Valley",
              addressRegion: "VA",
              addressCountry: "US",
            },
            description:
              "Web development and AI automation services based in Shenandoah Valley, VA.",
            areaServed: {
              "@type": "Place",
              name: "Shenandoah Valley, Virginia",
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-emerald-500" />
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-green-600 text-transparent bg-clip-text">
                Eleven North
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital excellence in the heart of the Shenandoah Valley.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-green-600 text-transparent bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="hover:text-emerald-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-green-600 text-transparent bg-clip-text">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Custom AI Tools',
                'E-commerce Solutions',
                'Business Automation',
                'SEO & Local Marketing',
              ].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-green-600 text-transparent bg-clip-text">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-emerald-500 mt-[2px]" />
                <address className="not-italic">
                  Shenandoah Valley, Virginia
                </address>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-500" />
                <a
                  href="mailto:ElevenNorthCo@gmail.com"
                  className="hover:text-emerald-500 transition-colors"
                >
                  ElevenNorthCo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} Eleven North. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
