import Navigation from "@/components/Navigation";
import BackgroundPaths from "@/components/BackgroundPaths";
import LayerOfProof from "@/components/LayerOfProof";
import ServicesSection from "@/components/ServicesSection";
import SocialProofWall from "@/components/SocialProofWall";
import Blog from "@/components/Blog";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BackgroundPaths />
      <LayerOfProof />
      <ServicesSection />
      <SocialProofWall />
      
      <Blog />
      <CTAFooter />
    </div>
  );
};

export default Index;
