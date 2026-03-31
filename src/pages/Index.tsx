import Navigation from "@/components/Navigation";
import BackgroundPaths from "@/components/BackgroundPaths";
import LayerOfProof from "@/components/LayerOfProof";
import SocialProofWall from "@/components/SocialProofWall";
import Blog from "@/components/Blog";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BackgroundPaths />
      <LayerOfProof />
      <SocialProofWall />
      <Blog />
      <CTAFooter />
    </div>
  );
};

export default Index;
