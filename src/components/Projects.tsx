import React, { useState } from 'react';
import { ExternalLink, Users, TrendingUp, Lightbulb, Target, DollarSign, UserCheck } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isHighlighted?: boolean;
}

const Projects: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'startup-strategy',
      title: 'Startup Strategy & Scale',
      description: 'From concept to €1M+ ARR, I help startups develop winning strategies, secure funding, and scale operations effectively.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'stakeholder-alignment',
      title: 'Stakeholder Alignment',
      description: 'Expert in aligning diverse stakeholders across government, corporate, and startup ecosystems to drive results.',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      isHighlighted: true
    },
    {
      id: 'innovation-programs',
      title: 'Innovation Programs',
      description: 'Design and implement innovation initiatives, co-working spaces, and tech incubators that create thriving communities.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'fundraising-partnerships',
      title: 'Fundraising & Partnerships',
      description: 'Proven track record in securing philanthropic, government, and corporate funding while building strategic partnerships.',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'board-advisory',
      title: 'Board Advisory',
      description: 'Currently holding 3 board seats with 2 chairman roles, I bring governance expertise and strategic oversight.',
      icon: <Target className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'idea-prototyping',
      title: 'Idea Prototyping',
      description: 'Transform concepts into testable prototypes, validate ideas quickly, and iterate based on feedback to minimize risk.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const handleServiceClick = (service: Service) => {
    setSelectedService(selectedService === service.id ? null : service.id);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            How I Help
          </h2>
          <p className="text-xl text-gray-600">Strategic consulting across the startup ecosystem</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border ${
                service.isHighlighted 
                  ? 'border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 ring-2 ring-purple-200' 
                  : 'border-gray-100'
              } ${
                selectedService === service.id ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} rounded-t-2xl`}></div>
              
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              
              {service.isHighlighted && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;