import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const NewHero: React.FC = () => {
  return (
    <section className="min-h-screen bg-white relative">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Message */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Strategic Leadership for Scale
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
                  Turning Ambitious Visions into Sustainable €1M+ Realities
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  You've built something promising. Now you're facing the complex challenge of scaling without losing what makes you special. I help strategic leaders navigate this transition with clarity, proven frameworks, and measurable results.
                </p>
              </div>

              {/* Proof Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">€1M+ ARR achieved across 3 different sectors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">6,878 jobs created through strategic alignment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Teams that rate 4.7/5 for loving their work</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  Start the Conversation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#challenges" 
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 text-center"
                >
                  See If This Is You
                </a>
              </div>
            </div>

            {/* Right Column - Professional Photo Placeholder */}
            <div className="lg:order-2">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-light">TK</span>
                  </div>
                </div>
                {/* Floating credential */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="text-sm text-gray-600">Currently</div>
                  <div className="font-semibold text-gray-900">3 Board Seats</div>
                  <div className="text-sm text-blue-600">2 Chairman Roles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;