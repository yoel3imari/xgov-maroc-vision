import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import ServicesGrid from "@/components/Sections/ServicesGrid";
import FeaturesSection from "@/components/Sections/FeaturesSection";
import FAQSection from "@/components/Sections/FAQSection";
import PartnersSection from "@/components/Sections/PartnersSection";
import ContactSection from "@/components/Sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <FeaturesSection />
        <FAQSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
