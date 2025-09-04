import React from 'react';
import HeroSection from '../components/ProductDetailPage/HeroSection';
import CompetitiveComparison from '../components/ProductDetailPage/CompetitiveComparison';
import TechnologySection from '../components/ProductDetailPage/TechnologySection';
import ResultsTimeline from '../components/ProductDetailPage/ResultsTimeline';
import SocialProof from '../components/ProductDetailPage/SocialProof';
import TreatmentGuide from '../components/ProductDetailPage/TreatmentGuide';
import CostCalculator from '../components/ProductDetailPage/CostCalculator';
import FAQ from '../components/ProductDetailPage/FAQ';
import BundleSection from '../components/ProductDetailPage/BundleSection';

const ProductDetailPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Competitive Differentiation */}
      <CompetitiveComparison />
      
      {/* Technology Deep Dive */}
      <TechnologySection />
      
      {/* Results Timeline */}
      <ResultsTimeline />
      
      {/* Social Proof Gallery */}
      <SocialProof />
      
      {/* Treatment Areas Guide */}
      <TreatmentGuide />
      
      {/* Cost Savings Calculator */}
      <CostCalculator />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Bundle & Upsell */}
      <BundleSection />
    </div>
  );
};

export default ProductDetailPage;