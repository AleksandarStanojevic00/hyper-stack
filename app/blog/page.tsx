import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Web Design & Development Insights',
  description: 'Stay updated with the latest trends, tips, and insights in web design, development, and digital marketing. Expert advice from DigitalCraft team.',
  keywords: ['web design blog', 'development tips', 'digital marketing', 'SEO insights', 'tech trends'],
  openGraph: {
    title: 'Blog - Web Design & Development Insights',
    description: 'Stay updated with the latest trends, tips, and insights in web design, development, and digital marketing.',
    url: '/blog',
  },
};

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Discover the latest trends shaping the web development landscape, from AI integration to progressive web apps and beyond.',
    content: 'As we move through 2024, the web development landscape continues to evolve at a rapid pace. From artificial intelligence integration to the rise of progressive web applications, developers and businesses need to stay ahead of the curve...',
    author: 'Alex Johnson',
    authorRole: 'Lead Developer',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Web Development',
    tags: ['Trends', 'AI', 'PWA', 'Future Tech'],
    image: '/blog/featured-post.jpg',
    href: '/blog/future-of-web-development-2024'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Essential SEO Strategies for Modern Websites',
      excerpt: 'Learn the most effective SEO techniques to improve your website\'s search rankings and drive organic traffic.',
      author: 'Emily Park',
      authorRole: 'SEO Specialist',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'SEO',
      tags: ['SEO', 'Search Rankings', 'Organic Traffic'],
      image: '/blog/seo-strategies.jpg',
      href: '/blog/essential-seo-strategies'
    },
    {
      id: 3,
      title: 'Designing for Mobile-First: Best Practices',
      excerpt: 'Master the art of mobile-first design with these proven strategies and techniques for creating responsive experiences.',
      author: 'Sarah Chen',
      authorRole: 'Lead Designer',
      publishDate: '2024-01-10',
      readTime: '5 min read',
      category: 'Design',
      tags: ['Mobile Design', 'Responsive', 'UX'],
      image: '/blog/mobile-first-design.jpg',
      href: '/blog/mobile-first-design-best-practices'
    },
    {
      id: 4,
      title: 'Performance Optimization: Making Your Website Lightning Fast',
      excerpt: 'Discover proven techniques to optimize your website\'s performance and improve Core Web Vitals scores.',
      author: 'Michael Rodriguez',
      authorRole: 'Senior Developer',
      publishDate: '2024-01-08',
      readTime: '7 min read',
      category: 'Performance',
      tags: ['Performance', 'Core Web Vitals', 'Speed'],
      image: '/blog/performance-optimization.jpg',
      href: '/blog/website-performance-optimization'
    },
    {
      id: 5,
      title: 'E-commerce UX: Converting Visitors into Customers',
      excerpt: 'Learn how to design user experiences that drive conversions and boost your online sales.',
      author: 'David Kim',
      authorRole: 'UX Designer',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      category: 'E-commerce',
      tags: ['E-commerce', 'UX', 'Conversion'],
      image: '/blog/ecommerce-ux.jpg',
      href: '/blog/ecommerce-ux-conversion-optimization'
    },
    {
      id: 6,
      title: 'The Power of Headless CMS in Modern Web Development',
      excerpt: 'Explore the benefits of headless CMS architecture and how it can transform your content management strategy.',
      author: 'Lisa Thompson',
      authorRole: 'Content Strategist',
      publishDate: '2024-01-03',
      readTime: '5 min read',
      category: 'CMS',
      tags: ['Headless CMS', 'Content Strategy', 'API'],
      image: '/blog/headless-cms.jpg',
      href: '/blog/headless-cms-modern-web-development'
    }
  ];

  const categories = ['All', 'Web Development', 'Design', 'SEO', 'Performance', 'E-commerce', 'CMS'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and expert advice in web design, development, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm opacity-90">Featured Image</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.authorRole}</p>
                      </div>
                    </div>
                    <Link 
                      href={featuredPost.href}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs opacity-90">Article Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{new Date(post.publishDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Link 
                      href={post.href}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and never miss the latest insights and tips.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;