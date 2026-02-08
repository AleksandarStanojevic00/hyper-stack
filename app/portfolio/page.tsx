import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio - Our Best Web Design & Development Work',
  description: 'Explore our portfolio of successful web design and development projects. See how we\'ve helped businesses transform their digital presence and achieve remarkable results.',
  keywords: ['web design portfolio', 'development projects', 'case studies', 'client work'],
  openGraph: {
    title: 'Portfolio - Our Best Web Design & Development Work',
    description: 'Explore our portfolio of successful web design and development projects. See how we\'ve helped businesses transform their digital presence.',
    url: '/portfolio',
  },
};

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: 'TechStart SaaS Platform',
      category: 'Web Application',
      client: 'TechStart Inc.',
      year: '2024',
      description: 'A comprehensive SaaS platform for startup management with advanced analytics, team collaboration features, and real-time dashboard.',
      image: '/portfolio/project-1.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
      results: [
        '300% increase in user engagement',
        '50% faster load times',
        '95% user satisfaction score',
        '$2M+ in funding raised'
      ],
      features: [
        'Real-time Analytics Dashboard',
        'Team Collaboration Tools',
        'Payment Integration',
        'Mobile-Responsive Design',
        'Advanced Security Features'
      ],
      href: '/portfolio/techstart-saas',
      liveUrl: 'https://techstart-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'EcoShop E-commerce',
      category: 'E-commerce',
      client: 'EcoShop',
      year: '2024',
      description: 'Sustainable products marketplace with advanced filtering, seamless payment integration, and comprehensive inventory management system.',
      image: '/portfolio/project-2.jpg',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind', 'Vercel'],
      results: [
        '200% increase in online sales',
        '40% higher conversion rate',
        '99.9% uptime achieved',
        '60% mobile traffic increase'
      ],
      features: [
        'Advanced Product Filtering',
        'Multi-Payment Gateway',
        'Inventory Management',
        'Customer Reviews System',
        'SEO Optimization'
      ],
      href: '/portfolio/ecoshop-ecommerce',
      liveUrl: 'https://ecoshop-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'HealthCare Pro',
      category: 'Healthcare',
      client: 'HealthCare Pro',
      year: '2023',
      description: 'Patient management system with appointment scheduling, medical records management, and telemedicine capabilities.',
      image: '/portfolio/project-3.jpg',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'HIPAA'],
      results: [
        '80% reduction in admin time',
        '150% more appointments booked',
        'HIPAA compliance achieved',
        '4.9/5 patient satisfaction'
      ],
      features: [
        'Appointment Scheduling',
        'Medical Records Management',
        'Telemedicine Integration',
        'Patient Portal',
        'HIPAA Compliance'
      ],
      href: '/portfolio/healthcare-pro',
      liveUrl: 'https://healthcare-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'FinanceFlow Dashboard',
      category: 'Fintech',
      client: 'FinanceFlow',
      year: '2023',
      description: 'Real-time financial dashboard with advanced analytics, comprehensive reporting, and multi-currency support.',
      image: '/portfolio/project-4.jpg',
      tags: ['Angular', 'Python', 'Redis', 'Chart.js', 'Docker'],
      results: [
        '60% faster financial reporting',
        '99.99% data accuracy',
        'Real-time data processing',
        '45% cost reduction'
      ],
      features: [
        'Real-time Analytics',
        'Multi-currency Support',
        'Advanced Reporting',
        'Data Visualization',
        'API Integration'
      ],
      href: '/portfolio/financeflow-dashboard',
      liveUrl: 'https://financeflow-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'EduLearn Platform',
      category: 'Education',
      client: 'EduLearn',
      year: '2023',
      description: 'Online learning platform with video streaming, progress tracking, interactive assessments, and certification system.',
      image: '/portfolio/project-5.jpg',
      tags: ['React', 'Express', 'MongoDB', 'Socket.io', 'AWS'],
      results: [
        '500+ courses delivered',
        '90% course completion rate',
        '4.8/5 average rating',
        '10,000+ active students'
      ],
      features: [
        'Video Streaming',
        'Progress Tracking',
        'Interactive Assessments',
        'Certification System',
        'Discussion Forums'
      ],
      href: '/portfolio/edulearn-platform',
      liveUrl: 'https://edulearn-demo.com',
      featured: false
    },
    {
      id: 6,
      title: 'RestaurantHub',
      category: 'Restaurant',
      client: 'RestaurantHub',
      year: '2023',
      description: 'Complete restaurant management system with online ordering, table reservations, and POS integration.',
      image: '/portfolio/project-6.jpg',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Twilio'],
      results: [
        '70% more online orders',
        '45% operational efficiency gain',
        '98% customer satisfaction',
        '30% revenue increase'
      ],
      features: [
        'Online Ordering System',
        'Table Reservations',
        'POS Integration',
        'Menu Management',
        'Customer Notifications'
      ],
      href: '/portfolio/restauranthub',
      liveUrl: 'https://restauranthub-demo.com',
      featured: false
    }
  ];

  const categories = ['All', 'Web Application', 'E-commerce', 'Healthcare', 'Fintech', 'Education', 'Restaurant'];
  const featuredProjects = projects.filter(project => project.featured);
  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results through innovative web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful projects that showcase our expertise and the results we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-bold text-white/20">
                      {project.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">{project.client} • {project.year}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.results.slice(0, 4).map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-green-600">
                          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={project.href}
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      View Case Study
                    </Link>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors text-center"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              All Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete portfolio of successful projects across various industries.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
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
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description.substring(0, 100)}...
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={project.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together and add your project to our portfolio of success.
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

export default PortfolioPage;