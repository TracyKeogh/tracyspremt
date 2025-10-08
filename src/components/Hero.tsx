import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['products', 'services', 'teams', 'ideas', 'systems', 'communities'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('projects');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Network Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-6 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            {/* Spremt Labs Logo */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/SpremtLabs.png" 
                alt="Spremt Labs Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                HANDS-ON WORKSHOP
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
              Turn Your Idea Into Reality
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
              <p className="mb-4">Build a working prototype in under 1 hour</p>
              <p className="text-lg">— no coding experience needed</p>
            </div>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-800 mb-2">AI-Powered Tools</h3>
                <p className="text-sm text-gray-600">Use Cursor, Bolt, Lovable & Claude to build fast</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold text-gray-800 mb-2">Leave With Results</h3>
                <p className="text-sm text-gray-600">Walk away with a live, working prototype</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-semibold text-gray-800 mb-2">For Everyone</h3>
                <p className="text-sm text-gray-600">Founders, professionals & creative thinkers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
        <ChevronDown className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
      </div>
    </section>
  );
};

export default Hero;