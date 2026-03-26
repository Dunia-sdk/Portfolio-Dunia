import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sadik Dounia. {t('footer.rights')}
            <br />
            <a href="https://github.com/Dunia-sdk/Portfolio-Dunia" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-indigo-600 transition-colors mt-1 block">
              Source Code (Portfolio-Dunia)
            </a>
          </div>
          <div className="flex space-x-6 text-slate-400">
            <a href="https://github.com/Dunia-sdk" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sadik-dounia/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-indigo-600 transition-colors">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
