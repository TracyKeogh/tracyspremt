import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Home } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  image?: string;
}

const BlogList: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 'ai-banner-generator',
      title: 'The Problem That Led Me to Build an AI Banner Generator',
      excerpt: 'How I went from struggling with AI image generation to building a professional banner creation tool that actually works.',
      date: '2024-10-08',
      readTime: '5 min read',
      category: 'AI & Development',
      featured: true
    },
    // Future blog posts can be added here
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/BrianLogoSpremt.png" 
                alt="SPREMT LABS" 
                className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
              />
              <div className="font-semibold text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                SPREMT LABS
              </div>
            </Link>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors group"
            >
              <Home className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Beautiful Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              💡 Insights & Stories
            </div>
            
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Blog
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Quick prototypes that solve problems and allow us to learn and test AI tools
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                  ⭐ Featured Post
                </div>
                <h2 className="text-4xl font-light text-gray-900">Must Read</h2>
              </div>
              
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group hover:shadow-3xl transition-all duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10"></div>
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </span>
                    <span className="bg-white/90 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                      AI Tools
                    </span>
                  </div>
                  
                  <div className="p-8 md:p-12 relative z-10">
                    <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                      >
                        Read Full Story
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Posts */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {otherPosts.length > 0 ? (
              <>
                <div className="text-center mb-16">
                  <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                    📚 More Stories
                  </div>
                  <h2 className="text-4xl font-light text-gray-900">Coming Soon</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-lg text-xs font-medium">
                          {post.category}
                        </span>
                        
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group"
                        >
                          Read
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <span className="text-5xl">🚀</span>
                  </div>
                  <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mx-auto animate-pulse opacity-30"></div>
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">More stories coming soon</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  I'm crafting more insights about AI, development challenges, and breakthrough solutions.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6">
                Get notified when I publish new insights about AI, development, and building solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
