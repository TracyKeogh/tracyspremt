import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NewNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Challenges', href: '#challenges' },
    { label: 'Approach', href: '#solution' },
    { label: 'Results', href: '#results' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white bg-opacity-95 backdrop-blur-sm shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">TK</span>
            </div>
            <div className="font-semibold text-xl text-gray-800">
              Tracy Keogh
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Start Conversation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="#contact"
                  className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Conversation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavigation;