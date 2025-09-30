import React from 'react';
import { Target, Users, TrendingUp, ArrowRight } from 'lucide-react';

const Solution: React.FC = () => {
  const solutions = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Clarity",
      subtitle: "From Vision to Execution",
      description: "Transform your ambitious vision into a clear, actionable roadmap that every stakeholder understands and commits to.",
      outcome: "Result: Teams move from confusion to coordinated action"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Stakeholder Alignment", 
      subtitle: "Government to Startups",
      description: "Align diverse stakeholders—from government agencies to startup teams—around shared outcomes using proven frameworks.",
      outcome: "Result: Decisions happen faster, execution improves 3x"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Systems",
      subtitle: "€0 to €1M+ Proven Path",
      description: "Build the operational foundation and leadership systems that allow you to scale without losing what makes you special.",
      outcome: "Result: Sustainable growth with 4.7/5 team satisfaction"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Of My Strategic Leadership
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I've guided organizations from concept to €1M+ ARR across nonprofits, fintech, and consulting. Here's how I solve the challenges you're facing.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            >
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {solution.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {solution.description}
                </p>
                <p className="text-green-700 font-medium">
                  {solution.outcome}
                </p>
              </div>
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Strategic Framework Visual</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#results" 
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 group"
          >
            See the Results
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;