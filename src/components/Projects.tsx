import React, { useState } from 'react';
import { ExternalLink, Users, TrendingUp, Lightbulb } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics?: string;
  icon: React.ReactNode;
  color: string;
  url?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'grow-remote',
      title: 'Grow Remote',
      subtitle: 'Built from scratch.',
      description: 'Started with an idea. Now a movement with real teams, real funding, real impact.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      url: 'https://growremote.ie'
    },
    {
      id: 'spremt-labs',
      title: 'Spremt Labs',
      subtitle: 'Cross-sector consulting.',
      description: 'Strategic consulting across social enterprise, private equity, large enterprise, and VC-backed startups. From GTM strategies to organizational transformation.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      url: 'https://spremtlabs.com'
    },
    {
      id: 'coach-pack',
      title: 'Coach Pack',
      subtitle: 'A clarity kit for humans.',
      description: 'Built in Bolt. Tools to explore purpose, values, and priorities — without the personal development fluff.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600'
    }
  ];

  const handleProjectClick = (project: Project) => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProject(selectedProject === project.id ? null : project.id);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            What I've Been Making
          </h2>
          <p className="text-xl text-gray-600">Projects that matter, built from scratch</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 ${
                selectedProject === project.id ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => handleProjectClick(project)}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} rounded-t-2xl`}></div>
              
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${project.color} text-white mb-4`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{project.subtitle}</p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
              
              {project.metrics && (
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700">{project.metrics}</p>
                </div>
              )}

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className={`w-5 h-5 ${project.url ? 'text-blue-500' : 'text-gray-400'}`} />
              </div>

              {project.url && (
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-blue-600 font-medium">Visit site →</span>
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