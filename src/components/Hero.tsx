import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['products', 'services', 'teams', 'ideas', 'systems', 'communities'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
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
            <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6 leading-tight">
              Hi, I'm Tracy.
            </h1>
            <div className="text-2xl md:text-3xl text-gray-600 leading-relaxed">
              <p className="mb-2">I build</p>
              <div className="inline-block min-w-[200px] text-left">
                <span 
                  key={currentWord}
                  className="text-blue-600 font-medium animate-fade-in"
                >
                  {words[currentWord]}
                </span>
              </div>
              <p className="mt-2">with great people.</p>
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