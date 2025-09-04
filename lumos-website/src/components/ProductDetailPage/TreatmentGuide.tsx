import React, { useState } from 'react';

interface TreatmentArea {
  id: string;
  name: string;
  time: string;
  position: { x: number; y: number };
  compatible: boolean;
  tips: string[];
}

const TreatmentGuide: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const treatmentAreas: TreatmentArea[] = [
    {
      id: 'upper-lip',
      name: 'Upper Lip',
      time: '1 minute',
      position: { x: 50, y: 25 },
      compatible: true,
      tips: [
        'Use lowest intensity level initially',
        'Avoid moles and dark spots',
        'Clean area thoroughly before treatment',
        'Apply cooling gel if needed'
      ]
    },
    {
      id: 'underarms',
      name: 'Underarms',
      time: '2 minutes',
      position: { x: 25, y: 40 },
      compatible: true,
      tips: [
        'Shave 24 hours before treatment',
        'Ensure skin is completely dry',
        'Use medium intensity level',
        'Allow skin to cool between sessions'
      ]
    },
    {
      id: 'bikini',
      name: 'Bikini Line',
      time: '3 minutes',
      position: { x: 50, y: 65 },
      compatible: true,
      tips: [
        'Start with lower intensity',
        'Avoid sensitive areas',
        'Take breaks if needed',
        'Use pre-treatment numbing if sensitive'
      ]
    },
    {
      id: 'legs',
      name: 'Full Legs',
      time: '5 minutes',
      position: { x: 50, y: 80 },
      compatible: true,
      tips: [
        'Work in sections for best results',
        'Use higher intensity for thicker hair',
        'Overlap slightly between areas',
        'Moisturize after treatment'
      ]
    },
    {
      id: 'arms',
      name: 'Arms',
      time: '3 minutes',
      position: { x: 75, y: 45 },
      compatible: true,
      tips: [
        'Include forearms and upper arms',
        'Use circular motions',
        'Pay attention to elbow area',
        'Adjust intensity for different areas'
      ]
    }
  ];

  const totalTime = treatmentAreas.reduce((sum, area) => {
    const time = parseInt(area.time.split(' ')[0]);
    return sum + time;
  }, 0);

  const getAreaById = (id: string) => treatmentAreas.find(area => area.id === id);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Treatment Areas</span> Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover which areas you can treat and get professional tips for optimal results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Interactive Body Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-lavender-50 to-purple-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Interactive Treatment Map</h3>
              
              {/* Body Silhouette */}
              <div className="relative inline-block">
                <svg viewBox="0 0 200 300" className="w-64 h-96 mx-auto">
                  {/* Simple body outline */}
                  <path
                    d="M100 20 C110 20 120 30 120 40 C120 50 110 60 100 60 C90 60 80 50 80 40 C80 30 90 20 100 20 Z"
                    fill="#f3f4f6"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                  {/* Body */}
                  <rect x="85" y="60" width="30" height="80" rx="10" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
                  {/* Arms */}
                  <rect x="60" y="70" width="20" height="50" rx="10" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
                  <rect x="120" y="70" width="20" height="50" rx="10" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
                  {/* Legs */}
                  <rect x="90" y="140" width="8" height="80" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
                  <rect x="102" y="140" width="8" height="80" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />

                  {/* Treatment Area Markers */}
                  {treatmentAreas.map((area) => (
                    <g key={area.id}>
                      <circle
                        cx={area.position.x * 2}
                        cy={area.position.y * 3}
                        r={hoveredArea === area.id || selectedArea === area.id ? "12" : "8"}
                        fill={area.compatible ? "#a855f7" : "#ef4444"}
                        className="cursor-pointer transition-all duration-200 animate-pulse"
                        onMouseEnter={() => setHoveredArea(area.id)}
                        onMouseLeave={() => setHoveredArea(null)}
                        onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                      />
                      <text
                        x={area.position.x * 2}
                        y={area.position.y * 3 + 4}
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        {area.time.split(' ')[0]}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                Click on the purple dots to see treatment details
              </div>
            </div>
          </div>

          {/* Treatment Information */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-lavender-500 to-purple-600 text-white p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Full Body Treatment</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold">{totalTime} min</div>
                  <div className="text-lavender-100">Total Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">5</div>
                  <div className="text-lavender-100">Treatment Areas</div>
                </div>
              </div>
            </div>

            {/* Treatment Times */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Treatment Times per Area</h4>
              <div className="space-y-3">
                {treatmentAreas.map((area) => (
                  <div 
                    key={area.id} 
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                      selectedArea === area.id 
                        ? 'bg-lavender-50 border-lavender-200 border' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⚡</span>
                      <span className="font-medium">{area.name}</span>
                    </div>
                    <span className="font-semibold text-lavender-600">{area.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Area Details */}
            {selectedArea && (
              <div className="bg-lavender-50 border border-lavender-200 rounded-2xl p-6 animate-fade-in">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-lavender-500 rounded-full"></div>
                  <h4 className="text-xl font-bold">
                    {getAreaById(selectedArea)?.name} Treatment Tips
                  </h4>
                </div>
                <ul className="space-y-2">
                  {getAreaById(selectedArea)?.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Safety Reminders */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <span className="mr-2">⚠️</span>
                Areas to Avoid
              </h4>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Eye area and around the eyes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Moles, birthmarks, and dark spots</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Tattooed areas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Open wounds or irritated skin</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TreatmentGuide;