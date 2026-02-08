import Link from 'next/link';
import Image from 'next/image';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'TechStart SaaS Platform',
      category: 'Web Application',
      description: 'A comprehensive SaaS platform for startup management with advanced analytics and team collaboration features.',
      image: '/portfolio/project-1.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: {
        metric1: '300% increase in user engagement',
        metric2: '50% faster load times',
        metric3: '95% user satisfaction'
      },
      href: '/portfolio/techstart-saas'
    },
    {
      id: 2,
      title: 'EcoShop E-commerce',
      category: 'E-commerce',
      description: 'Sustainable products marketplace with advanced filtering, payment integration, and inventory management.',
      image: '/portfolio/project-2.jpg',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
      results: {
        metric1: '200% increase in sales',
        metric2: '40% higher conversion rate',
        metric3: '99.9% uptime'
      },
      href: '/portfolio/ecoshop-ecommerce'
    },
    {
      id: 3,
      title: 'HealthCare Pro',
      category: 'Healthcare',
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      image: '/portfolio/project-3.jpg',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      results: {
        metric1: '80% reduction in admin time',
        metric2: '150% more appointments',
        metric3: 'HIPAA compliant'
      },
      href: '/portfolio/healthcare-pro'
    },
    {
      id: 4,
      title: 'FinanceFlow Dashboard',
      category: 'Fintech',
      description: 'Real-time financial dashboard with advanced analytics, reporting, and multi-currency support.',
      image: '/portfolio/project-4.jpg',
      tags: ['Angular', 'Python', 'Redis', 'Chart.js'],
      results: {
        metric1: '60% faster reporting',
        metric2: '99.99% data accuracy',
        metric3: 'Real-time updates'
      },
      href: '/portfolio/financeflow-dashboard'
    },
    {
      id: 5,
      title: 'EduLearn Platform',
      category: 'Education',
      description: 'Online learning platform with video streaming, progress tracking, and interactive assessments.',
      image: '/portfolio/project-5.jpg',
      tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
      results: {
        metric1: '500+ courses delivered',
        metric2: '90% completion rate',
        metric3: '4.8/5 user rating'
      },
      href: '/portfolio/edulearn-platform'
    },
    {
      id: 6,
      title: 'RestaurantHub',
      category: 'Restaurant',
      description: 'Complete restaurant management system with online ordering, table reservations, and POS integration.',
      image: '/portfolio/project-6.jpg',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      results: {
        metric1: '70% more online orders',
        metric2: '45% operational efficiency',
        metric3: '98% customer satisfaction'
      },
      href: '/portfolio/restauranthub'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable results through innovative web solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {project.id.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-green-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {project.results.metric1}
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {project.results.metric2}
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {project.results.metric3}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={project.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 duration-300"
                >
                  View Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Portfolio
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;