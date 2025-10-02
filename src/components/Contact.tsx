import React from 'react';
import { Mail, Calendar, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Scale?</h2>
          <p className="text-2xl text-gray-300 mb-12">
            Get a custom roadmap to €1M+ ARR in our first conversation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 group">
              <Mail className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <a 
                href="mailto:hello@spremtlabs.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center justify-center"
              >
                hello@spremtlabs.com
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 group">
              <Calendar className="w-8 h-8 text-orange-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold mb-3">Strategic Assessment Call</h3>
              <a 
                href="https://calendly.com/tracykeogh/sremptlabs" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200 flex items-center justify-center"
              >
                30-minute consultation
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/tracykeogh" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
            </a>
            <a 
              href="https://x.com/tracy_keogh" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-blue-400" />
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2025 Tracy Keogh. Made with curiosity and caffeine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;