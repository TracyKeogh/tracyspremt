import React, { useState } from 'react';
import { Mic, FileText, Users, Globe, Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
  id: string;
  name: string;
  type: 'media' | 'policy';
  description?: string;
  quote?: string;
  hasVideo?: boolean;
  logoUrl?: string;
  logoStyle?: string;
  url?: string;
}

const Media: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaItems: MediaItem[] = [
    { 
      id: 'hbr', 
      name: 'Harvard Business Review', 
      type: 'media', 
      quote: 'Remote work isn\'t just location – it\'s liberation.',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Harvard-Business-Review-Logo.png',
      logoStyle: 'h-8',
      url: '#'
    },
    { 
      id: 'forbes', 
      name: 'Forbes', 
      type: 'media', 
      quote: 'Building distributed teams requires new playbooks, not old assumptions.',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Forbes-Logo.png',
      logoStyle: 'h-6',
      url: '#'
    },
    { 
      id: 'rte-primetime', 
      name: 'RTÉ Prime Time', 
      type: 'media', 
      description: 'National broadcast on remote work policy', 
      hasVideo: true,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/RT%C3%89_logo.svg/1200px-RT%C3%89_logo.svg.png',
      logoStyle: 'h-8',
      url: '#'
    },
    { 
      id: 'rte-radio', 
      name: 'RTÉ Radio 1', 
      type: 'media', 
      description: 'Weekly contributor on future of work',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/RT%C3%89_logo.svg/1200px-RT%C3%89_logo.svg.png',
      logoStyle: 'h-8',
      url: '#'
    },
    { 
      id: 'euronews', 
      name: 'Euronews', 
      type: 'media', 
      description: 'European perspective on remote work trends',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Euronews_logo.svg/1200px-Euronews_logo.svg.png',
      logoStyle: 'h-6',
      url: '#'
    },
    { 
      id: 'irish-times', 
      name: 'Irish Times', 
      type: 'media', 
      quote: 'The future of work is distributed, but it needs to be designed.',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/The_Irish_Times_logo.svg/1200px-The_Irish_Times_logo.svg.png',
      logoStyle: 'h-8',
      url: '#'
    },
    { 
      id: 'newstalk', 
      name: 'Newstalk', 
      type: 'media', 
      description: 'Regular guest on workplace innovation',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Newstalk_logo.svg/1200px-Newstalk_logo.svg.png',
      logoStyle: 'h-6',
      url: '#'
    },
    { 
      id: 'the-journal', 
      name: 'TheJournal.ie', 
      type: 'media', 
      description: 'Analysis on remote work policy impact',
      logoUrl: 'https://www.thejournal.ie/assets/images/thejournal-logo-social.png',
      logoStyle: 'h-8',
      url: '#'
    },
    { 
      id: 'tg4', 
      name: 'TG4', 
      type: 'media', 
      description: 'Irish language coverage of rural innovation',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TG4_logo.svg/1200px-TG4_logo.svg.png',
      logoStyle: 'h-8',
      url: '#'
    },
    { 
      id: 'virgin-media', 
      name: 'Virgin Media', 
      type: 'media', 
      description: 'Television interviews on workplace transformation',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/11/Virgin-Media-Logo.png',
      logoStyle: 'h-6',
      url: '#'
    },
    { 
      id: 'silicon-republic', 
      name: 'Silicon Republic', 
      type: 'media', 
      description: 'Tech industry insights and analysis',
      logoUrl: 'https://www.siliconrepublic.com/wp-content/themes/siliconrepublic/assets/images/silicon-republic-logo.svg',
      logoStyle: 'h-8',
      url: '#'
    },
    { 
      id: 'our-rural-future', 
      name: 'Our Rural Future', 
      type: 'policy', 
      description: 'Spoke at national strategy launch as delivery partner',
      url: '#'
    },
    { 
      id: 'making-remote-work', 
      name: 'Making Remote Work Strategy', 
      type: 'policy', 
      description: 'Advocated for access, infrastructure & equity with Tánaiste',
      url: '#'
    },
    { 
      id: 'future-jobs', 
      name: 'Future Jobs Ireland', 
      type: 'policy', 
      description: 'Strategic input on workforce transformation (2019)',
      url: '#'
    },
    { 
      id: 'social-enterprise', 
      name: 'Social Enterprise Policy', 
      type: 'policy', 
      description: 'Policy development via The Wheel (2022)',
      url: '#'
    }
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(mediaItems.length / itemsPerPage);
  const currentItems = mediaItems.slice(currentIndex, currentIndex + itemsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => Math.min(prev + itemsPerPage, mediaItems.length - itemsPerPage));
  };

  const prevPage = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleItemClick = (item: MediaItem) => {
    if (item.url && item.url !== '#') {
      window.open(item.url, '_blank');
    } else {
      setSelectedItem(selectedItem === item.id ? null : item.id);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Mic className="w-8 h-8 text-blue-600 mr-3" />
            <FileText className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Where systems meet storytelling
          </h2>
          <p className="text-lg text-gray-600 mb-2">Featured in + Trusted by</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          <button
            onClick={prevPage}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / itemsPerPage) === i
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextPage}
            disabled={currentIndex + itemsPerPage >= mediaItems.length}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden"
              onClick={() => handleItemClick(item)}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-3 h-3 rounded-full ${
                    item.type === 'media' ? 'bg-blue-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex items-center space-x-2">
                    {item.hasVideo && (
                      <Play className="w-4 h-4 text-gray-600" />
                    )}
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                  </div>
                </div>

                {/* Logo/Name */}
                <div className="mb-4">
                  {item.logoUrl ? (
                    <div className="flex items-center justify-center h-12 mb-2">
                      <img 
                        src={item.logoUrl} 
                        alt={item.name}
                        className={`${item.logoStyle} object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-lg font-semibold text-gray-800">${item.name}</div>`;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{item.name}</h3>
                  )}
                  <div className={`w-16 h-1 bg-gradient-to-r ${
                    item.type === 'media' 
                      ? 'from-blue-500 to-blue-600' 
                      : 'from-orange-500 to-red-500'
                  } mx-auto rounded-full`}></div>
                </div>

                {/* Content */}
                <div className="text-center">
                  {item.quote ? (
                    <blockquote className="text-sm text-gray-600 italic leading-relaxed">
                      "{item.quote}"
                    </blockquote>
                  ) : (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Type indicator */}
                <div className="mt-4 flex items-center justify-center">
                  {item.type === 'media' ? (
                    <div className="flex items-center text-xs text-blue-600">
                      <Mic className="w-3 h-3 mr-1" />
                      <span>Media</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-xs text-orange-600">
                      <Users className="w-3 h-3 mr-1" />
                      <span>Policy</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Selected Item Details */}
        {selectedItem && (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6 animate-fade-in">
            {(() => {
              const item = mediaItems.find(i => i.id === selectedItem);
              if (!item) return null;
              
              return (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      ×
                    </button>
                  </div>
                  <div className="space-y-3">
                    {item.quote && (
                      <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                        "{item.quote}"
                      </blockquote>
                    )}
                    {item.description && (
                      <p className="text-gray-600">{item.description}</p>
                    )}
                    {item.hasVideo && (
                      <div className="flex items-center text-blue-600">
                        <Play className="w-4 h-4 mr-2" />
                        <span className="text-sm">Video content available</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};

export default Media;