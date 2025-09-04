import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Lumos IPL', href: '/product' },
        { name: 'Accessories', href: '#' },
        { name: 'Bundles', href: '#' },
        { name: 'Gift Cards', href: '#' },
        { name: 'Refer a Friend', href: '#' }
      ]
    },
    {
      title: 'Learn',
      links: [
        { name: 'How IPL Works', href: '#' },
        { name: 'Treatment Guide', href: '#' },
        { name: 'Skin Compatibility', href: '#' },
        { name: 'FAQs', href: '#faq' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Track Order', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Live Chat', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <Link to="/" className="text-2xl font-bold gradient-text">
                LUMOS ✨
              </Link>
              <p className="text-gray-400 text-sm mt-2">
                Revolutionary IPL hair removal with COOLMAX technology
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lavender-600 transition-colors duration-300">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lavender-600 transition-colors duration-300">
                <span className="text-lg">📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lavender-600 transition-colors duration-300">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lavender-600 transition-colors duration-300">
                <span className="text-lg">📺</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span>💳</span>
              <span>Visa, Mastercard, PayPal</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🔒</span>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🏥</span>
              <span>FDA Cleared</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🇺🇸</span>
              <span>Made in USA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Lumos | 
              <a href="#" className="hover:text-white ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-white ml-1">Terms</a> | 
              <a href="#" className="hover:text-white ml-1">Accessibility</a>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 text-sm text-gray-400">
              <div>Made with ❤️ in USA</div>
              <div>24/7 Customer Support: support@lumosipl.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;