import React, { useState, useEffect } from 'react';

interface ComparisonFeature {
  feature: string;
  lumos: string | React.JSX.Element;
  competitor: string | React.JSX.Element;
  lumosAdvantage: boolean;
}

const CompetitiveComparison: React.FC = () => {
  const [animatedTemp, setAnimatedTemp] = useState(100);
  const [visibleRows, setVisibleRows] = useState<number[]>([]);

  useEffect(() => {
    // Animate temperature gauge
    const tempAnimation = setInterval(() => {
      setAnimatedTemp(prev => {
        if (prev > 50) return prev - 2;
        clearInterval(tempAnimation);
        return 50;
      });
    }, 100);

    // Stagger row animations
    const rowAnimation = setTimeout(() => {
      comparisonData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleRows(prev => [...prev, index]);
        }, index * 200);
      });
    }, 500);

    return () => {
      clearInterval(tempAnimation);
      clearTimeout(rowAnimation);
    };
  }, []);

  const comparisonData: ComparisonFeature[] = [
    {
      feature: "Cooling Technology",
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="text-coolmax-blue font-bold">COOLMAX 50°F</span>
          <span className="text-coolmax-blue text-xl">❄️</span>
        </div>
      ),
      competitor: "Sapphire 65°F",
      lumosAdvantage: true
    },
    {
      feature: "Price",
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="text-green-600 font-bold">$169</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">BEST VALUE</span>
        </div>
      ),
      competitor: "$349",
      lumosAdvantage: true
    },
    {
      feature: "Flashes",
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="font-bold text-purple-600">999,999</span>
          <span className="text-xs text-purple-600">(Lifetime)</span>
        </div>
      ),
      competitor: "Not specified",
      lumosAdvantage: true
    },
    {
      feature: "Treatment Time",
      lumos: "10 minutes full body",
      competitor: "10 minutes",
      lumosAdvantage: false
    },
    {
      feature: "Energy Levels",
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="font-bold">9 Levels</span>
          <span className="text-green-600">⚡</span>
        </div>
      ),
      competitor: "5 Levels",
      lumosAdvantage: true
    },
    {
      feature: "Cooling Sensation",
      lumos: (
        <span className="text-coolmax-blue font-semibold">Ice-cold comfort</span>
      ),
      competitor: "Cool touch",
      lumosAdvantage: true
    },
    {
      feature: "Money-Back Guarantee",
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="font-bold text-green-600">30 Days</span>
          <span className="text-green-600">✓</span>
        </div>
      ),
      competitor: "Not specified",
      lumosAdvantage: true
    },
    {
      feature: "Warranty",
      lumos: "2 Years",
      competitor: "2 Years",
      lumosAdvantage: false
    }
  ];

  const CheckIcon = () => (
    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Lumos</span> Outperforms the Competition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our revolutionary COOLMAX technology and unbeatable value 
            make Lumos the clear choice over leading competitors like Ulike Air 10
          </p>
        </div>

        {/* Interactive Temperature Comparison */}
        <div className="mb-12 bg-white rounded-2xl shadow-soft p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Temperature Comparison: Feel the Difference
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Other IPL Devices */}
            <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="text-4xl mb-2">🔥</div>
              <h4 className="font-bold text-red-600 mb-2">Other IPL Devices</h4>
              <div className="text-3xl font-bold text-red-600 mb-2">100°F</div>
              <p className="text-sm text-red-600">Burning sensation</p>
            </div>

            {/* Ulike Air 10 */}
            <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="text-4xl mb-2">😐</div>
              <h4 className="font-bold text-yellow-600 mb-2">Ulike Air 10</h4>
              <div className="text-3xl font-bold text-yellow-600 mb-2">65°F</div>
              <p className="text-sm text-yellow-600">Mild cooling</p>
            </div>

            {/* Lumos COOLMAX */}
            <div className="text-center p-6 bg-coolmax-ice rounded-xl border border-coolmax-blue relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-coolmax-blue/10 to-transparent"></div>
              <div className="relative">
                <div className="text-4xl mb-2">❄️</div>
                <h4 className="font-bold text-coolmax-blue mb-2">LUMOS COOLMAX</h4>
                <div className="text-3xl font-bold text-coolmax-blue mb-2 transition-all duration-300">
                  {animatedTemp}°F
                </div>
                <p className="text-sm text-coolmax-blue font-semibold">Ice-cold comfort</p>
                
                {/* Animated particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-coolmax-blue rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-coolmax-blue rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-coolmax-blue rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
          <div className="bg-gradient-to-r from-lavender-500 to-purple-600 p-6">
            <div className="grid grid-cols-3 gap-4 text-white">
              <div className="text-center">
                <h3 className="text-lg font-bold">Feature</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold flex items-center justify-center space-x-2">
                  <span>LUMOS IPL</span>
                  <span className="text-yellow-300">🏆</span>
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold">Ulike Air 10</h3>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-6 transition-all duration-500 ${
                  visibleRows.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                } ${row.lumosAdvantage ? 'bg-green-50' : 'bg-gray-50'}`}
              >
                <div className="font-semibold text-gray-900 flex items-center">
                  {row.feature}
                </div>
                <div className="text-center flex items-center justify-center space-x-2">
                  {row.lumos}
                  {row.lumosAdvantage && (
                    <div className="ml-2 animate-bounce">
                      <CheckIcon />
                    </div>
                  )}
                </div>
                <div className="text-center flex items-center justify-center text-gray-600">
                  {row.competitor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-lavender-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Experience the LUMOS Advantage
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who chose superior cooling technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-lavender-600 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors duration-300">
                Order Now - $169
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-lavender-600 transition-colors duration-300">
                30-Day Money-Back Guarantee
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompetitiveComparison;