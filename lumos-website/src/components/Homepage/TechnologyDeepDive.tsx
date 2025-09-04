import React, { useState } from 'react';

interface TechFeature {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  specs: Array<{
    label: string;
    value: string;
    advantage?: string;
  }>;
  comparison: {
    lumos: string;
    ulike: string;
    nood: string;
  };
}

const TechnologyDeepDive: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [viewMode, setViewMode] = useState<'features' | 'comparison'>('features');

  const techFeatures: TechFeature[] = [
    {
      id: 1,
      title: "COOLMAX™ 50°F Technology",
      subtitle: "The World's Coldest IPL",
      description: "Revolutionary sapphire cooling system maintains skin at 50°F during treatment, eliminating pain while maximizing effectiveness. 30° colder than competitors.",
      icon: "❄️",
      specs: [
        { label: "Cooling Temperature", value: "50°F (10°C)", advantage: "30° colder than Ulike" },
        { label: "Cooling Duration", value: "35+ minutes", advantage: "Continuous operation" },
        { label: "Cooling Surface", value: "12.5cm² Sapphire", advantage: "Largest in class" },
        { label: "Pain Level", value: "0/10", advantage: "100% pain-free" }
      ],
      comparison: {
        lumos: "50°F Ice-Cold",
        ulike: "67°F Cool", 
        nood: "No cooling"
      }
    },
    {
      id: 2,
      title: "Dual-Light IPL System",
      subtitle: "26J Medical-Grade Energy",
      description: "Patented dual-light technology delivers 26J of cumulative energy through multiple rapid pulses, targeting hair follicles more effectively than single-pulse systems.",
      icon: "⚡",
      specs: [
        { label: "Energy Output", value: "26J Cumulative", advantage: "2x more than competitors" },
        { label: "Light Wavelength", value: "590-1200nm", advantage: "Optimal for all hair types" },
        { label: "Pulse Speed", value: "0.5 seconds", advantage: "Fastest treatment" },
        { label: "Flash Lifetime", value: "999,999", advantage: "Lifetime device warranty" }
      ],
      comparison: {
        lumos: "26J Dual-Light",
        ulike: "19J Single-Light",
        nood: "12J Single-Light"
      }
    },
    {
      id: 3,
      title: "AI Skin Sensor",
      subtitle: "Smart Safety Protection",
      description: "Advanced AI automatically detects skin tone (I-V), adjusts energy levels, and prevents treatment on unsafe areas. Complete UV filtration protects eyes and skin.",
      icon: "🤖",
      specs: [
        { label: "Skin Tone Detection", value: "Auto I-V", advantage: "Safer than manual" },
        { label: "UV Protection", value: "100% Filtered", advantage: "Eye-safe operation" },
        { label: "Safety Sensors", value: "Triple Protection", advantage: "Medical-grade safety" },
        { label: "FDA Approval", value: "Cleared", advantage: "Medical device status" }
      ],
      comparison: {
        lumos: "AI Auto-Detect",
        ulike: "Manual Setting",
        nood: "Basic Sensor"
      }
    },
    {
      id: 4,
      title: "Rapid Treatment Mode",
      subtitle: "10-Minute Full Body",
      description: "Auto-glide mode with continuous flashing treats your entire body in just 10 minutes. Precision targeting ensures no missed spots while maintaining safety.",
      icon: "🏃‍♀️",
      specs: [
        { label: "Full Body Time", value: "10 minutes", advantage: "Fastest available" },
        { label: "Auto-Flash Rate", value: "2 flashes/second", advantage: "Continuous treatment" },
        { label: "Coverage Area", value: "12.5cm² window", advantage: "Largest treatment area" },
        { label: "Precision Mode", value: "Face & Sensitive", advantage: "Multi-area optimization" }
      ],
      comparison: {
        lumos: "10 min full body",
        ulike: "15-20 minutes",
        nood: "20-30 minutes"
      }
    }
  ];

  const competitorData = [
    { brand: "LUMOS", price: "$169", cooling: "50°F", energy: "26J", time: "10min", flashes: "999K" },
    { brand: "Ulike Air 10", price: "$329", cooling: "67°F", energy: "19J", time: "15min", flashes: "600K" },
    { brand: "Nood Flasher 2.0", price: "$179", cooling: "None", energy: "12J", time: "25min", flashes: "600K" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-coolmax-blue/5">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Revolutionary Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The most advanced IPL technology ever created, engineered for maximum results with zero pain
          </p>

          {/* View Toggle */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setViewMode('features')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                viewMode === 'features'
                  ? 'bg-gradient-to-r from-coolmax-blue to-lavender-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Technology Features
            </button>
            <button
              onClick={() => setViewMode('comparison')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                viewMode === 'comparison'
                  ? 'bg-gradient-to-r from-coolmax-blue to-lavender-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Competitive Comparison
            </button>
          </div>
        </div>

        {viewMode === 'features' ? (
          <>
            {/* Tech Feature Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {techFeatures.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white shadow-xl scale-105 border-2 border-coolmax-blue'
                      : 'bg-white/60 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.subtitle}</p>
                </button>
              ))}
            </div>

            {/* Active Feature Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Feature Description */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{techFeatures[activeFeature].icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {techFeatures[activeFeature].title}
                  </h3>
                  <p className="text-lg text-coolmax-blue font-semibold mb-4">
                    {techFeatures[activeFeature].subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {techFeatures[activeFeature].description}
                  </p>
                </div>
              </div>

              {/* Right: Specifications */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h4>
                {techFeatures[activeFeature].specs.map((spec, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{spec.label}</div>
                        <div className="text-2xl font-bold text-coolmax-blue">{spec.value}</div>
                      </div>
                      {spec.advantage && (
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {spec.advantage}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Quick Comparison */}
                <div className="bg-gradient-to-r from-coolmax-blue/10 to-lavender-100 rounded-2xl p-6 mt-6">
                  <h5 className="font-bold text-gray-900 mb-3">Quick Comparison</h5>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">LUMOS</div>
                      <div className="font-bold text-coolmax-blue">
                        {techFeatures[activeFeature].comparison.lumos}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Ulike</div>
                      <div className="font-bold text-gray-700">
                        {techFeatures[activeFeature].comparison.ulike}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Nood</div>
                      <div className="font-bold text-gray-700">
                        {techFeatures[activeFeature].comparison.nood}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Comparison Table */
          <div className="bg-white rounded-3xl p-8 shadow-xl overflow-x-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Why LUMOS Beats The Competition
            </h3>
            <div className="min-w-full">
              <div className="grid grid-cols-7 gap-4 mb-4 text-center font-semibold text-gray-700">
                <div>Brand</div>
                <div>Price</div>
                <div>Cooling</div>
                <div>Energy</div>
                <div>Treatment Time</div>
                <div>Flash Life</div>
                <div>Value Score</div>
              </div>
              {competitorData.map((device, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-7 gap-4 p-4 rounded-2xl mb-2 text-center ${
                    device.brand === 'LUMOS'
                      ? 'bg-gradient-to-r from-coolmax-blue/20 to-lavender-200 border-2 border-coolmax-blue font-semibold'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className={device.brand === 'LUMOS' ? 'text-coolmax-blue' : 'text-gray-700'}>
                    {device.brand}
                  </div>
                  <div className={device.brand === 'LUMOS' ? 'text-green-600' : 'text-gray-700'}>
                    {device.price}
                  </div>
                  <div className={device.brand === 'LUMOS' ? 'text-coolmax-blue' : 'text-gray-700'}>
                    {device.cooling}
                  </div>
                  <div className={device.brand === 'LUMOS' ? 'text-lavender-600' : 'text-gray-700'}>
                    {device.energy}
                  </div>
                  <div className={device.brand === 'LUMOS' ? 'text-coolmax-blue' : 'text-gray-700'}>
                    {device.time}
                  </div>
                  <div className={device.brand === 'LUMOS' ? 'text-lavender-600' : 'text-gray-700'}>
                    {device.flashes}
                  </div>
                  <div>
                    {device.brand === 'LUMOS' && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        🏆 BEST
                      </span>
                    )}
                    {device.brand === 'Ulike Air 10' && (
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                        Overpriced
                      </span>
                    )}
                    {device.brand === 'Nood Flasher 2.0' && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        No Cooling
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Experience The Technology Difference
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Feel the ice-cold comfort and see results 2x faster than any competitor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/product" className="btn-primary text-lg">
              Get LUMOS Technology - $169
            </a>
            <button className="btn-secondary text-lg">
              Download Tech Specs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyDeepDive;