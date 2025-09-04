import React, { useState, useEffect } from 'react';

const TrustBar: React.FC = () => {
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('trust-bar');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = 1000000;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setHappyCustomers(target);
        clearInterval(timer);
      } else {
        setHappyCustomers(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M+`;
    }
    return num.toLocaleString();
  };

  const trustItems = [
    {
      icon: '💯',
      value: formatNumber(happyCustomers),
      label: 'Happy Customers',
      animate: true
    },
    {
      icon: '⭐',
      value: '4.3',
      label: '209 Reviews',
      subValue: '★★★★☆'
    },
    {
      icon: '🛡️',
      value: '30-Day',
      label: 'Money Back',
      subValue: 'Guarantee'
    },
    {
      icon: '🏆',
      value: '2-Year',
      label: 'Warranty',
      subValue: 'Coverage'
    }
  ];

  return (
    <section id="trust-bar" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-soft card-hover border border-gray-100">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {item.animate && isVisible ? (
                    <span className="tabular-nums">{item.value}</span>
                  ) : (
                    item.value
                  )}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {item.label}
                </div>
                {item.subValue && (
                  <div className="text-xs text-gray-500 mt-1">
                    {item.subValue}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>FDA Cleared</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span>Made in USA</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-coral-500 rounded-full animate-pulse"></span>
            <span>Free Shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;