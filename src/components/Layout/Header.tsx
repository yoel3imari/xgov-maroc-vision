import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Menu, Globe, Phone, Mail } from "lucide-react";

const Header = () => {
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
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <select className="bg-transparent text-primary-foreground text-sm">
                <option value="ar">العربية</option>
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
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
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              الخدمات
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              الأسئلة الشائعة
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              اتصل بنا
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              المساعدة
            </a>
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
            <Button variant="primary">
              دخول المواطن
            </Button>
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