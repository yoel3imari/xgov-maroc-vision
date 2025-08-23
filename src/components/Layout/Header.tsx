import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Menu, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { useTranslations } from "@/lib/translations";

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState("ar");
  const t = useTranslations(currentLanguage);

  const handleLanguageChange = (language: any) => {
    setCurrentLanguage(language.code);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="bg-background border-b border-border shadow-card">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+212 5 37 76 50 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@xgov.ma</span>
              </div>
            </div>
            <LanguageSwitcher 
              variant="minimal" 
              onLanguageChange={handleLanguageChange}
            />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-morocco rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">X</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">X-GOV</h1>
                <p className="text-xs text-muted-foreground">خدمات حكومية ذكية</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              Beta
            </Badge>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.services}
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.faq}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.contact}
            </button>
            <Link to="/chat" className="text-foreground hover:text-primary transition-colors">
              {t.smartAssistant}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن خدمة..."
                className="pl-10 pr-4 py-2 border border-border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <Link to="/dashboard">
              <Button variant="primary">
                {t.adminLogin}
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;