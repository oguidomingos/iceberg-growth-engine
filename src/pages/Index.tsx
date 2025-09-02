import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import MethodSection from "@/components/MethodSection";
import TrustSection from "@/components/TrustSection";
import PlansSection from "@/components/PlansSection";
import BonusSection from "@/components/BonusSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <MethodSection />
      <TrustSection />
      <PlansSection />
      <BonusSection />
      <GuaranteeSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
