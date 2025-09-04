import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">
                LUMOS ✨
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === '/' 
                    ? 'text-lavender-600 border-b-2 border-lavender-600' 
                    : 'text-gray-600 hover:text-lavender-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/product"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === '/product' 
                    ? 'text-lavender-600 border-b-2 border-lavender-600' 
                    : 'text-gray-600 hover:text-lavender-600'
                }`}
              >
                Product
              </Link>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-lavender-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-lavender-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                FAQ
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-lavender-600 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-lavender-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navigation;