import { Code2, Palette, ShoppingBag, Smartphone, Wrench, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Code2 className="h-12 w-12 text-emerald-500" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'Frontend Development',
      'Backend Development',
    ],
  },
  {
    icon: <Palette className="h-12 w-12 text-emerald-500" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing',
      'Prototyping',
    ],
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-emerald-500" />,
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores that drive sales and growth.',
    features: [
      'Custom E-commerce Sites',
      'Shopping Cart Integration',
      'Payment Gateway Setup',
      'Inventory Management',
    ],
  },
  {
    icon: <Smartphone className="h-12 w-12 text-emerald-500" />,
    title: 'Mobile-First Development',
    description: 'Mobile-optimized websites and progressive web applications.',
    features: [
      'Responsive Frameworks',
      'Cross-platform Compatibility',
      'Performance Optimization',
      'Mobile UX Design',
    ],
  },
  {
    icon: <Wrench className="h-12 w-12 text-emerald-500" />,
    title: 'Custom Applications',
    description: 'Tailored software solutions to meet your specific business needs.',
    features: [
      'Custom Web Apps',
      'Business Solutions',
      'API Integration',
      'Database Design',
    ],
  },
  {
    icon: <Search className="h-12 w-12 text-emerald-500" />,
    title: 'SEO Optimization',
    description: 'Improve your visibility and reach your target audience.',
    features: [
      'Technical SEO',
      'Content Optimization',
      'Performance Tuning',
      'Analytics Setup',
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 text-transparent bg-clip-text mb-6">
            Our Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the modern world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-black/40 border-emerald-900/20">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;