import React, { useState, useEffect } from 'react';

const TechnologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [temperatureValue, setTemperatureValue] = useState(65);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    {
      title: "COOLMAX Cooling",
      icon: "❄️",
      content: {
        title: "Revolutionary COOLMAX Technology",
        description: "Our proprietary cooling system maintains a consistent 50°F temperature, ensuring comfort throughout your entire treatment session.",
        features: [
          "50°F constant cooling temperature",
          "Advanced heat dissipation system", 
          "Comfortable for all skin types",
          "Zero burning sensation"
        ]
      }
    },
    {
      title: "PrecisionPulse™",
      icon: "⚡",
      content: {
        title: "PrecisionPulse™ Technology",
        description: "Our advanced IPL system delivers precise energy pulses that target hair follicles effectively while protecting surrounding skin.",
        features: [
          "Optimal wavelength for hair removal",
          "9 adjustable intensity levels",
          "Smart skin tone detection",
          "Maximum efficacy with minimal discomfort"
        ]
      }
    },
    {
      title: "Smart Safety",
      icon: "🛡️",
      content: {
        title: "Intelligent Safety System",
        description: "Built-in safety sensors automatically adjust treatment based on your skin tone and ensure optimal results every time.",
        features: [
          "Automatic skin tone sensing",
          "UV protection filters",
          "Overheating prevention",
          "Child safety lock"
        ]
      }
    }
  ];

  const handleTemperatureChange = (value: number) => {
    setTemperatureValue(value);
  };

  const getTemperatureColor = (temp: number) => {
    if (temp <= 55) return 'text-coolmax-blue';
    if (temp <= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getTemperatureLabel = (temp: number) => {
    if (temp <= 55) return 'Ice-cold comfort';
    if (temp <= 70) return 'Mild cooling';
    return 'Burning sensation';
  };

  const getTemperatureEmoji = (temp: number) => {
    if (temp <= 55) return '❄️';
    if (temp <= 70) return '😐';
    return '🔥';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Advanced <span className="gradient-text">Technology</span> That Sets Us Apart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the science behind Lumos IPL's superior performance and unmatched comfort
          </p>
        </div>

        {/* Interactive Temperature Comparison */}
        <div className="mb-16 bg-white rounded-2xl shadow-soft p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Interactive Temperature Comparison
          </h3>
          
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className={`text-6xl font-bold mb-2 transition-colors duration-300 ${getTemperatureColor(temperatureValue)}`}>
                {temperatureValue}°F
              </div>
              <div className="flex items-center justify-center space-x-2 text-xl">
                <span className="text-2xl">{getTemperatureEmoji(temperatureValue)}</span>
                <span className={`font-semibold ${getTemperatureColor(temperatureValue)}`}>
                  {getTemperatureLabel(temperatureValue)}
                </span>
              </div>
            </div>

            {/* Temperature Slider */}
            <div className="relative">
              <input
                type="range"
                min="45"
                max="105"
                value={temperatureValue}
                onChange={(e) => handleTemperatureChange(parseInt(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-coolmax-blue via-yellow-400 to-red-500 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, 
                    #0ea5e9 0%, 
                    #0ea5e9 ${((55 - 45) / (105 - 45)) * 100}%, 
                    #eab308 ${((55 - 45) / (105 - 45)) * 100}%, 
                    #eab308 ${((75 - 45) / (105 - 45)) * 100}%, 
                    #ef4444 ${((75 - 45) / (105 - 45)) * 100}%, 
                    #ef4444 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>LUMOS 50°F</span>
                <span>Ulike 65°F</span>
                <span>Others 100°F+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`mx-2 mb-4 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-lavender-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 shadow-md hover:shadow-lg hover:text-lavender-600'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">{tabs[activeTab].icon}</span>
                  {tabs[activeTab].content.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {tabs[activeTab].content.description}
                </p>
                <ul className="space-y-3">
                  {tabs[activeTab].content.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-lavender-100 to-coolmax-ice rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                  
                  {activeTab === 0 && (
                    <div className="text-center">
                      <div className="text-8xl mb-4 animate-pulse">❄️</div>
                      <div className="text-4xl font-bold text-coolmax-blue mb-2">50°F</div>
                      <div className="text-coolmax-blue font-semibold">COOLMAX Technology</div>
                      
                      {/* Animated cooling effects */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-coolmax-blue rounded-full animate-bounce"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + (i % 2) * 40}%`,
                              animationDelay: `${i * 0.3}s`,
                              animationDuration: '2s'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="text-center">
                      <div className={`text-8xl mb-4 ${pulseAnimation ? 'animate-pulse' : ''}`}>⚡</div>
                      <div className="text-4xl font-bold text-purple-600 mb-2">9 Levels</div>
                      <div className="text-purple-600 font-semibold">PrecisionPulse™</div>
                      
                      {/* Energy waves */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -skew-x-12 animate-pulse"></div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="text-center">
                      <div className="text-8xl mb-4">🛡️</div>
                      <div className="text-4xl font-bold text-green-600 mb-2">Smart</div>
                      <div className="text-green-600 font-semibold">Safety System</div>
                      
                      {/* Protection rings */}
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="w-32 h-32 border-4 border-green-300 rounded-full animate-ping opacity-30"></div>
                        <div className="w-24 h-24 border-4 border-green-400 rounded-full animate-ping opacity-40 absolute"></div>
                        <div className="w-16 h-16 border-4 border-green-500 rounded-full animate-ping opacity-50 absolute"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dermatologist Quote */}
        <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <img
                src="/api/placeholder/120/120"
                alt="Board Certified Dermatologist"
                className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg"
              />
              <div className="text-4xl text-lavender-400 mb-4">"</div>
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed italic">
              "The COOLMAX technology in Lumos represents a significant advancement 
              in at-home IPL comfort and safety. The consistent 50°F cooling temperature 
              eliminates the burning sensation commonly associated with IPL treatments."
            </blockquote>
            
            <cite className="text-lg font-semibold text-gray-900">
              - Dr. Sarah Johnson, Board Certified Dermatologist
            </cite>
            <div className="text-sm text-gray-600 mt-1">
              15+ Years Experience in Laser Hair Removal
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;