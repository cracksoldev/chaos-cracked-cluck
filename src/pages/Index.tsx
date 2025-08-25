import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import CommunitySection from "@/components/CommunitySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="font-comic">
      <HeroSection />
      <AboutSection />
      <HowToPlaySection />
      <CommunitySection />
      <FooterSection />
    </main>
  );
};

export default Index;
