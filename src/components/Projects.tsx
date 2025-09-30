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
      title: 'Startup Strategy & Scaling',
      description: 'Strategic guidance for scaling organizations from concept to sustainable revenue.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'hover:border-t-blue-500'
    },
    {
      id: 'founder-support',
      title: 'Founder Support',
      description: 'Having built the teams and structures to take something from 0-1, I work 1-1 to drive more impact for founders on the same path.',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'hover:border-t-blue-500',
      isHighlighted: true
    },
    {
      id: 'innovation-programs',
      title: 'Innovation Programs',
      description: 'Drive more impact in various models of innovation from hackathons to change transformation programmes and technology incubators.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'hover:border-t-blue-500'
    },
    {
      id: 'fundraising-partnerships',
      title: 'Fundraising & Partnerships',
      description: 'Drive more impact in raising government funding, debt funding, commercial sponsorships, philanthropic funding.',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'hover:border-t-blue-500'
    },
    {
      id: 'board-advisory',
      title: 'Board Support',
      description: 'Support in setting up boards from scratch and optimising existing governance.',
      icon: <Target className="w-6 h-6" />,
      color: 'hover:border-t-blue-500'
    },
    {
      id: 'team-leadership',
      title: 'Rapid Prototyping & Ideation',
      description: 'Facilitate rapid prototyping and ideation sessions to accelerate product development and innovation processes.',
      icon: <Users className="w-6 h-6" />,
      color: 'hover:border-t-blue-500'
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-lg p-6 border border-t-4 border-t-transparent transition-all duration-300 cursor-pointer hover:shadow-lg ${service.color} border-gray-200`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;