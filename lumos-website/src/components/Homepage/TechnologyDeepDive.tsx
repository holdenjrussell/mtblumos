import React from 'react';

const TechnologyDeepDive: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The <span className="gradient-text">Science</span> of Smooth
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-coolmax-50 p-8 rounded-2xl">
            <div className="text-4xl mb-4">❄️</div>
            <h3 className="text-xl font-bold mb-2">COOLMAX™ Technology</h3>
            <p className="text-gray-600">Industry's Coldest IPL at 50°F</p>
          </div>
          <div className="text-center bg-lavender-50 p-8 rounded-2xl">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">PrecisionPulse™ IPL</h3>
            <p className="text-gray-600">Medical-Grade Light Technology</p>
          </div>
          <div className="text-center bg-green-50 p-8 rounded-2xl">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Smart Safety Sensor</h3>
            <p className="text-gray-600">Skin Contact Detection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyDeepDive;