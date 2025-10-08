import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/BrianLogoSpremt.png" 
                alt="Tracy Keogh Logo" 
                className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
              />
              <div className="font-semibold text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                Tracy Keogh
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Network Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-1500"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            
            <div className="text-center">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                AI & Development
              </span>
              
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                The Problem That Led Me to Build an AI Banner Generator
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                How I went from struggling with AI image generation to building a professional banner creation tool
              </p>
              
              <div className="flex items-center justify-center gap-6 text-gray-600">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  October 8, 2024
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">

            {/* Backstory */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-800 mb-6">The Backstory: When AI Doesn't Understand Your Vision</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  It all started with a simple request: <em className="text-blue-600">"I want to add my logo to this promotional banner."</em>
                </p>
                <p>
                  Sounds easy, right? Not when you're working with AI image generation tools like Claude, DALL-E, or Midjourney. 
                  What followed was a journey of frustration that ultimately led to a breakthrough solution.
                </p>
              </div>
            </section>

            {/* The Problem */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-800 mb-8">The Problem: AI Image Generation's Fundamental Flaws</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">The "Interpretation Problem"</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        When I asked Claude to add my SPREMT LABS logo to a banner, it didn't use my actual logo. 
                        Instead, it <strong className="text-red-600">interpreted</strong> what it thought my logo should look like and created something completely different. 
                        This is a fundamental limitation of AI image generation - it can't work with exact images you provide.
                      </p>
                      <div className="bg-white border border-red-200 rounded-lg p-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-red-700">
                            <span className="text-red-500">❌</span>
                            <span><strong>What I asked for:</strong> "Add this exact logo to the banner"</span>
                          </div>
                          <div className="flex items-center gap-2 text-red-700">
                            <span className="text-red-500">❌</span>
                            <span><strong>What I got:</strong> A completely different logo that "looked like" what I wanted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">The Base64 Nightmare</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        When I tried to provide my logo as base64 code, the AI complained it was "too long." 
                        This is a common issue with AI tools - they have token limits that make it impossible to work with high-quality images.
                      </p>
                      <div className="bg-white border border-orange-200 rounded-lg p-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-orange-700">
                            <span className="text-orange-500">❌</span>
                            <span><strong>Problem:</strong> Base64 strings for images are massive (thousands of characters)</span>
                          </div>
                          <div className="flex items-center gap-2 text-orange-700">
                            <span className="text-orange-500">❌</span>
                            <span><strong>Result:</strong> AI tools reject or truncate the image data</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-yellow-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Can't Edit Existing Images</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        AI image generation tools like DALL-E and Midjourney are designed to create images from scratch, not edit existing ones. 
                        They can't take an existing banner and add your logo to it - they'll just create a completely new image.
                      </p>
                      <div className="bg-white border border-yellow-200 rounded-lg p-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-yellow-700">
                            <span className="text-yellow-500">❌</span>
                            <span><strong>Reality:</strong> AI tools generate new images, they don't edit existing ones</span>
                          </div>
                          <div className="flex items-center gap-2 text-yellow-700">
                            <span className="text-yellow-500">❌</span>
                            <span><strong>Workaround:</strong> None that actually work reliably</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">The Consistency Problem</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Even when the AI generated something close to what I wanted, the downloaded version never matched what I saw on screen. 
                        This is a common issue with:
                      </p>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Canvas rendering differences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Color space variations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Compression artifacts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Cross-platform compatibility issues</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">The Text Generation Disaster</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Even when tools like ChatGPT got the logo placement right, they completely butchered the description text. 
                        I'd ask for "Turn Your Idea Into Reality" and get gibberish like:
                      </p>
                      <div className="bg-white border border-teal-200 rounded-lg p-4 mb-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-red-700">
                            <span className="text-red-500">❌</span>
                            <span><strong>What I wanted:</strong> "Turn Your Idea Into Reality"</span>
                          </div>
                          <div className="flex items-center gap-2 text-red-700">
                            <span className="text-red-500">❌</span>
                            <span><strong>What I got:</strong> "Turn or idea into reality, torn yourreality, into ateality"</span>
                          </div>
                          <div className="flex items-center gap-2 text-red-700">
                            <span className="text-red-500">❌</span>
                            <span><strong>Or even:</strong> "LOKE YOUR sinto least" (completely incomprehensible)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        It was like the AI was having a stroke while trying to write my marketing copy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-rose-600 font-bold text-sm">6</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">The Canva Catastrophe</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Canva's AI logo insertion was perhaps the most frustrating of all. It didn't just get the text wrong - 
                        it completely misunderstood my brand identity:
                      </p>
                      <div className="bg-white border border-rose-200 rounded-lg p-4 mb-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-red-700">
                            <span className="text-red-500">❌</span>
                            <span><strong>My brand:</strong> SPREMT LABS</span>
                          </div>
                          <div className="flex items-center gap-2 text-red-700">
                            <span className="text-red-500">❌</span>
                            <span><strong>Canva generated:</strong> "SLABist" and "SFREVIT"</span>
                          </div>
                          <div className="flex items-center gap-2 text-red-700">
                            <span className="text-red-500">❌</span>
                            <span><strong>The result:</strong> Completely unrecognizable brand identity</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        It was like asking for a Mercedes logo and getting a drawing of a bicycle. Close, but not even in the same universe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          {/* Breaking Point */}
          <section className="mb-8">
            <h2 className="text-3xl font-light text-gray-800 mb-4">The Breaking Point: Why I Decided to Build My Own Solution</h2>
            <p className="text-gray-700 mb-4">
              After hours of frustration with AI tools that promised to help but delivered nothing but disappointment, 
              I reached my breaking point. I realized that if I wanted a professional banner with my exact logo and correct text, 
              I needed to build the solution myself.
            </p>
            <p className="text-gray-700 mb-4">
              This wasn't just about creating one banner - it was about solving a fundamental problem that affects anyone 
              who needs to create professional marketing materials with their own branding.
            </p>
          </section>

          {/* The Solution */}
          <section className="mb-8">
            <h2 className="text-3xl font-light text-gray-800 mb-4">The Solution: A Banner Generator That Actually Works</h2>
            <p className="text-gray-700 mb-4">
              So I built it. A complete banner generation tool that:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Uses your exact logo (no interpretations, no approximations)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Lets you customize every element (text, colors, layout)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Generates high-quality, downloadable images</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Works consistently every time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Doesn't require any design skills or expensive software</span>
              </li>
            </ul>
            <p className="text-gray-700">
              The result? A tool that solves the exact problem AI image generation couldn't handle.
            </p>
          </section>

            {/* Call to Action */}
            <section className="border-t border-gray-200 pt-8 mt-12">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Have you experienced similar frustrations with AI tools?</h3>
                <p className="text-gray-700 mb-4">
                  What solutions have you built to solve your own problems? I'd love to hear your stories and learn from your experiences.
                </p>
                <p className="text-gray-600 text-sm">
                  Connect with me on LinkedIn or reach out through the contact form to share your story.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>

      {/* Try the Banner Generator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Ready to Try It?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Create your own professional banners without the AI frustration
              </p>
              <Link
                to="/imagemaker"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors group text-lg"
              >
                Try the Banner Generator
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;