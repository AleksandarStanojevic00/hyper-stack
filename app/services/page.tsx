import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services - Web Design & Development Solutions',
  description: 'Comprehensive web design and development services including custom websites, e-commerce, SEO optimization, and ongoing maintenance. Transform your digital presence today.',
  keywords: ['web design services', 'web development', 'e-commerce development', 'SEO services', 'website maintenance'],
  openGraph: {
    title: 'Our Services - Web Design & Development Solutions',
    description: 'Comprehensive web design and development services including custom websites, e-commerce, SEO optimization, and ongoing maintenance.',
    url: '/services',
  },
};

const ServicesPage = () => {
  const services = [
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Beautiful, user-friendly designs that capture your brand essence and engage your audience effectively.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'Custom UI/UX Design',
        'Responsive Design',
        'Brand Integration',
        'User Experience Optimization',
        'Wireframing & Prototyping',
        'Design System Creation'
      ],
      pricing: 'Starting at $2,500',
      timeline: '2-4 weeks',
      href: '/services/web-design'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Fast, secure, and scalable websites built with modern technologies and industry best practices.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        'Custom Development',
        'React/Next.js Applications',
        'Performance Optimization',
        'Security Implementation',
        'API Integration',
        'Database Design'
      ],
      pricing: 'Starting at $5,000',
      timeline: '4-8 weeks',
      href: '/services/web-development'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description: 'Complete online stores that drive sales with seamless shopping experiences and robust functionality.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: [
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing System',
        'Customer Account Portal',
        'Analytics & Reporting',
        'Mobile Commerce'
      ],
      pricing: 'Starting at $7,500',
      timeline: '6-10 weeks',
      href: '/services/ecommerce'
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic with proven SEO strategies and techniques.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      features: [
        'Technical SEO Audit',
        'On-Page Optimization',
        'Content Strategy',
        'Local SEO',
        'Performance Monitoring',
        'Competitor Analysis'
      ],
      pricing: 'Starting at $1,500/month',
      timeline: 'Ongoing',
      href: '/services/seo'
    },
    {
      id: 'performance',
      title: 'Performance Optimization',
      description: 'Lightning-fast websites that provide exceptional user experiences and better search rankings.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        'Speed Optimization',
        'Core Web Vitals',
        'Image Optimization',
        'Caching Solutions',
        'CDN Implementation',
        'Performance Monitoring'
      ],
      pricing: 'Starting at $2,000',
      timeline: '2-3 weeks',
      href: '/services/performance'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your website secure, updated, and performing optimally.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      features: [
        'Regular Updates',
        'Security Monitoring',
        'Backup Solutions',
        '24/7 Support',
        'Bug Fixes',
        'Content Updates'
      ],
      pricing: 'Starting at $500/month',
      timeline: 'Ongoing',
      href: '/services/maintenance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive web solutions to help your business succeed online. From design to development, maintenance to marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Timeline */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Starting Price</div>
                    <div className="text-lg font-bold text-gray-900">{service.pricing}</div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <div className="text-sm text-gray-600">Timeline</div>
                    <div className="text-lg font-bold text-gray-900">{service.timeline}</div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center w-full justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We understand your goals and requirements' },
              { step: '02', title: 'Strategy', description: 'We create a detailed project plan and timeline' },
              { step: '03', title: 'Execution', description: 'We design and develop your solution' },
              { step: '04', title: 'Launch', description: 'We deploy and provide ongoing support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;