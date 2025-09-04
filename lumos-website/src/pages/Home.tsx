import React from 'react';
import AnnouncementBar from '../components/Homepage/AnnouncementBar';
import HeroCarousel from '../components/Homepage/HeroCarousel';
import TrustBar from '../components/Homepage/TrustBar';
import ProblemSolution from '../components/Homepage/ProblemSolution';
import CompetitiveDifferentiation from '../components/Homepage/CompetitiveDifferentiation';
import ProductShowcase from '../components/Homepage/ProductShowcase';
import SocialProofGallery from '../components/Homepage/SocialProofGallery';
import TechnologyDeepDive from '../components/Homepage/TechnologyDeepDive';
import HowItWorks from '../components/Homepage/HowItWorks';
import BodyMapSection from '../components/Homepage/BodyMapSection';
import PressAwards from '../components/Homepage/PressAwards';
import RiskFreeGuarantee from '../components/Homepage/RiskFreeGuarantee';
import InstagramFeed from '../components/Homepage/InstagramFeed';
import EmailCapture from '../components/Homepage/EmailCapture';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />
      
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Trust Bar */}
      <TrustBar />
      
      {/* Problem/Solution Section */}
      <ProblemSolution />
      
      {/* Competitive Differentiation */}
      <CompetitiveDifferentiation />
      
      {/* Product Showcase */}
      <ProductShowcase />
      
      {/* Social Proof Gallery */}
      <SocialProofGallery />
      
      {/* Technology Deep Dive */}
      <TechnologyDeepDive />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Body Map Section */}
      <BodyMapSection />
      
      {/* Press & Awards */}
      <PressAwards />
      
      {/* Risk-Free Guarantee */}
      <RiskFreeGuarantee />
      
      {/* Instagram Feed */}
      <InstagramFeed />
      
      {/* Email Capture */}
      <EmailCapture />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;