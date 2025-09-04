import React, { useState } from 'react';

interface Step {
  id: number;
  title: string;
  duration: string;
  description: string;
  icon: string;
  details: string[];
  tip: string;
}

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [viewMode, setViewMode] = useState<'overview' | 'detailed'>('overview');

  const steps: Step[] = [
    {
      id: 1,
      title: "Prep & Shave",
      duration: "2 minutes",
      description: "Shave treatment areas and clean skin",
      icon: "🪒",
      details: [
        "Shave the area you want to treat (IPL targets hair roots)",
        "Clean and dry skin completely",
        "Remove any lotions, oils, or makeup",
        "Ensure skin is free from cuts or irritation"
      ],
      tip: "Pro tip: Shave 24 hours before for best results"
    },
    {
      id: 2,
      title: "Power On & Select",
      duration: "30 seconds",
      description: "Turn on device and auto-detect skin tone",
      icon: "⚡",
      details: [
        "Press power button to activate COOLMAX™ cooling",
        "Device automatically detects your skin tone",
        "Auto-adjusts to optimal energy level (1-5)",
        "Wait for cooling to reach 50°F (takes 5 seconds)"
      ],
      tip: "The device remembers your settings for next time!"
    },
    {
      id: 3,
      title: "Glide & Flash",
      duration: "5-10 minutes",
      description: "Simply glide over skin - auto-flash does the work",
      icon: "✨",
      details: [
        "Place flat against skin at 90° angle",
        "Slowly glide - device auto-flashes every 0.5 seconds",
        "Overlap slightly to ensure full coverage",
        "Feel the ice-cold sensation - zero pain!"
      ],
      tip: "Move at walking pace for perfect coverage"
    },
    {
      id: 4,
      title: "Moisturize & Relax",
      duration: "1 minute",
      description: "Apply aloe vera and enjoy smooth skin",
      icon: "🧴",
      details: [
        "Apply soothing aloe vera or moisturizer",
        "No downtime - continue normal activities",
        "Avoid sun exposure for 24 hours",
        "Hair falls out naturally over 1-2 weeks"
      ],
      tip: "Use SPF 30+ if going outside after treatment"
    }
  ];

  const treatmentSchedule = [
    { week: "Weeks 1-4", frequency: "2x per week", result: "50% reduction" },
    { week: "Weeks 5-8", frequency: "1x per week", result: "90% reduction" },
    { week: "Weeks 9+", frequency: "1x per month", result: "Maintenance" }
  ];

  const sciencePoints = [
    {
      title: "IPL Technology",
      description: "Broad-spectrum light targets melanin in hair follicles"
    },
    {
      title: "Heat Absorption",
      description: "Follicles heat to 140°F, destroying growth cells"
    },
    {
      title: "COOLMAX™ Protection",
      description: "Skin stays at 50°F while follicles are treated"
    },
    {
      title: "Permanent Reduction",
      description: "Damaged follicles can't regrow hair"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-lavender-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Easier Than Shaving</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Just 10 minutes twice a week for silky smooth skin that lasts
          </p>

          {/* View Toggle */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setViewMode('overview')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                viewMode === 'overview'
                  ? 'bg-lavender-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quick Overview
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                viewMode === 'detailed'
                  ? 'bg-lavender-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Detailed Guide
            </button>
          </div>
        </div>

        {viewMode === 'overview' ? (
          <>
            {/* Simple Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-lavender-500 to-coral-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>

                  <div className="text-center space-y-3">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                    <div className="inline-block bg-lavender-100 text-lavender-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {step.duration}
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-lavender-300 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            {/* Total Time Display */}
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-coolmax-blue to-lavender-500 text-white px-8 py-4 rounded-full shadow-lg">
                <div className="text-3xl font-bold">Under 15 Minutes</div>
                <div className="text-sm opacity-90">Full body treatment time</div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Detailed Step View */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left: Step Selector */}
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-white shadow-xl scale-105 border-2 border-lavender-500'
                        : 'bg-white/60 hover:bg-white hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{step.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-xl font-bold text-gray-900">
                            Step {step.id}: {step.title}
                          </h3>
                          <span className="text-sm text-gray-500">{step.duration}</span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Step Details */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{steps[activeStep].icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {steps[activeStep].title}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  {steps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-lavender-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-lavender-600">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-coolmax-blue/10 to-lavender-100 rounded-xl p-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-lg">💡</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Pro Tip</div>
                      <p className="text-sm text-gray-700">{steps[activeStep].tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Treatment Schedule */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Your 8-Week Transformation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatmentSchedule.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-lavender-100 to-coral-100 rounded-2xl p-6">
                  <div className="text-lg font-bold text-gray-900 mb-2">{phase.week}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">{phase.frequency}</div>
                  <div className="bg-white rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
                    {phase.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Science Behind It */}
        <div className="bg-gradient-to-r from-coolmax-blue/10 to-lavender-100 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            The Science Made Simple
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sciencePoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-sm font-bold text-lavender-600 mb-1">{point.title}</div>
                  <p className="text-xs text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 1 million+ people who've discovered the easiest way to permanent hair removal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/product" className="btn-primary text-lg">
              Start Today - $169
            </a>
            <button className="btn-secondary text-lg">
              Watch Video Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;