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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <img 
                  src="/BrianLogoSpremt.png" 
                  alt="SPREMT LABS" 
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </div>
              <div className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                SPREMT LABS
              </div>
            </Link>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 hover:from-blue-600/40 hover:to-purple-600/40 hover:text-blue-200 font-medium transition-all duration-300 group backdrop-blur-sm"
            >
              <Home className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-8 py-4 rounded-full text-blue-300 font-semibold mb-12 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              💡 Insights & Stories
            </div>
            
            <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-8 leading-none tracking-tight">
              BLOG
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
              Quick prototypes that solve problems and allow us to learn and test AI tools
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 px-6 py-3 rounded-full text-yellow-300 font-semibold mb-6 backdrop-blur-sm">
                  <span className="text-xl">⭐</span>
                  Featured Story
                </div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Must Read</h2>
              </div>
              
              <div className="relative group">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-black rounded-3xl border border-gray-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-8 left-8 flex gap-3 z-20">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                      Featured
                    </span>
                    <span className="bg-gray-800/80 text-gray-300 px-6 py-3 rounded-full text-sm font-medium border border-gray-700 backdrop-blur-sm">
                      AI Tools
                    </span>
                  </div>
                  
                  <div className="p-12 md:p-16 relative z-10">
                    <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-8 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-5xl font-light">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8 text-gray-400">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5" />
                          <span className="text-lg">{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5" />
                          <span className="text-lg">{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-xl"
                      >
                        Read Full Story
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
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
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {otherPosts.length > 0 ? (
              <>
                <div className="text-center mb-20">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-6 py-3 rounded-full text-green-300 font-semibold mb-6 backdrop-blur-sm">
                    <span className="text-xl">📚</span>
                    More Stories
                  </div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Coming Soon</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((post) => (
                    <article key={post.id} className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-black rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                          <span className="inline-flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 px-4 py-2 rounded-lg text-sm font-medium border border-green-500/30">
                            {post.category}
                          </span>
                          
                          <Link
                            to={`/blog/${post.id}`}
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                          >
                            Read
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-24">
                <div className="relative mb-12">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto shadow-2xl border border-blue-500/30">
                    <span className="text-6xl">🚀</span>
                  </div>
                  <div className="absolute inset-0 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full mx-auto animate-pulse"></div>
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">More stories coming soon</h3>
                <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                  I'm crafting more insights about AI, development challenges, and breakthrough solutions.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-black rounded-3xl p-12 border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                    Stay Updated
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                    Get notified when I publish new insights about AI, development, and building solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
