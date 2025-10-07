import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-workshop-2025',
    title: 'Turn your idea into something real — even if you can\'t code',
    excerpt: 'Learn how to use powerful new AI tools — like Cursor, Bolt, Lovable, and Claude — to design, build, and launch a working website or prototype in under an hour.',
    content: `Have an idea you've been sitting on for months? In this hands-on session, you'll learn how to use powerful new AI tools — like Cursor, Bolt, Lovable, and Claude — to design, build, and launch a working website or prototype in under an hour.

This workshop is designed for professionals, founders, and creative thinkers who want to move fast and see what's possible — without relying on developers or waiting for a project brief to be approved.

## What You'll Discover

- **Prototype ideas quickly** and bring them to life with AI
- **Use the right tools** for each stage — from concept to live site
- **Build confidence** experimenting with AI-powered creation
- **Leave with something real** you can share or build on

No coding experience needed. You'll learn by doing — and walk away with the skills (and mindset) to turn ideas into action.

## What to Bring

- A laptop
- A free account on one or more tools (details sent beforehand)
- An idea you've always wanted to test

By the end of the hour, you'll see how AI can turn your ideas into live, working results — faster than you imagined.

## Why This Matters

The barrier between having an idea and seeing it come to life has never been lower. AI tools are democratizing creation, allowing anyone with vision to build, test, and iterate without traditional technical constraints.

This isn't about replacing developers or designers — it's about empowering you to move from concept to prototype at the speed of thought. Whether you're validating a business idea, creating a personal project, or exploring what's possible, these tools put the power of creation directly in your hands.

Join us for this hands-on exploration of what's possible when AI meets human creativity.`,
    date: '2025-01-15',
    readTime: '3 min read',
    category: 'Workshop',
    featured: true
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{line.substring(3)}</h3>;
      } else if (line.startsWith('- **') && line.includes('**')) {
        const parts = line.substring(2).split('**');
        return (
          <li key={index} className="mb-2">
            <strong className="text-gray-800">{parts[1]}</strong>
            {parts[2]}
          </li>
        );
      } else if (line.startsWith('- ')) {
        return <li key={index} className="mb-2">{line.substring(2)}</li>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
      }
    });
  };

  if (selectedPost) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
          >
            ← Back to Blog
          </button>
          
          <article>
            <header className="mb-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  {selectedPost.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
                {selectedPost.title}
              </h1>
            </header>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              {renderContent(selectedPost.content)}
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts on building, creating, and turning ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer ${
                post.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className={`font-semibold text-gray-800 mb-3 leading-tight ${
                  post.featured ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  <span className="font-medium">Read more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;