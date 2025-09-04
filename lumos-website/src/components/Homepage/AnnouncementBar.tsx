import React, { useState, useEffect } from 'react';

const AnnouncementBar: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    '🎉 FLASH SALE: Save $80 Today | FREE Shipping on All Orders | 30-Day Money-Back Guarantee',
    '❄️ WINTER SPECIAL: Experience COOLMAX 50°F Technology - Pain-Free Hair Removal',
    '⚡ 999,999 Flashes = Lifetime of Smooth Skin | Order Now & Save!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-gradient-to-r from-lavender-500 to-coral-500 text-white py-2 px-4 text-center text-sm font-medium overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="animate-fade-in transition-all duration-500">
          {messages[currentMessage]}
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-white/30 w-full">
          <div 
            className="h-full bg-white transition-all duration-4000 ease-linear"
            style={{ width: `${((currentMessage + 1) / messages.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;