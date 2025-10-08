import React from 'react';
import { AlertTriangle, TrendingDown, Users, Clock, ArrowRight } from 'lucide-react';

const Problems: React.FC = () => {
  const challenges = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Growth Has Plateaued",
      description: "You've hit €500K-€1M but can't seem to break through to the next level. The strategies that got you here aren't working anymore."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Stakeholder Misalignment",
      description: "Your team, board, investors, and partners aren't rowing in the same direction. Every decision becomes a negotiation instead of execution."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Drowning in Operations",
      description: "You're working IN the business instead of ON it. Every day feels reactive, and you can't find time for strategic thinking."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Scaling Without Breaking",
      description: "You want to grow but worry about losing quality, culture, or control. How do you scale the things that matter while letting go of what doesn't?"
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            The Hidden Challenges of Strategic Growth
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            You're not alone if you're facing these scaling challenges. Most ambitious leaders hit these same walls—but few know how to break through them systematically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Sound familiar? You're exactly who I work with.
          </p>
          <a 
            href="#solution" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            See how I solve this
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problems;