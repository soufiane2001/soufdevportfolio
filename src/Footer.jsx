// Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-cyan-500 pb-2 inline-block">
            Get in Touch
          </h3>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:contact@soufianeboutatssdev.com" 
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
              <span>contact@soufianeboutatssdev.com</span>
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* License and Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Soufiane Boutats. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Code licensed under MIT License. Content owned by Soufiane Boutats.
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">
              Designed and built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
