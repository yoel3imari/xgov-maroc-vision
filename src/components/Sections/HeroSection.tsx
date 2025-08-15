import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, Search, Star, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-subtle py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-morocco opacity-5 transform rotate-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 text-xs font-medium">
            <Star className="h-3 w-3 mr-1 text-accent fill-current" />
            منصة الخدمات الحكومية الذكية الأولى في المغرب
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-morocco bg-clip-text text-transparent">
              X-GOV
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
              خدمات حكومية ذكية بنقرة واحدة
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            احصل على جميع الخدمات الحكومية المغربية من مكان واحد. مساعد ذكي يفهم احتياجاتك ويوجهك خطوة بخطوة لإنجاز معاملاتك بسرعة وسهولة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/chat">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <MessageCircle className="h-5 w-5 ml-2" />
                ابدأ المحادثة الآن
                <ArrowLeft className="h-5 w-5 mr-2" />
              </Button>
            </Link>
            <Button variant="government" size="lg" className="text-lg px-8 py-4">
              <Search className="h-5 w-5 ml-2" />
              استكشف الخدمات
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">+50,000</div>
              <div className="text-sm text-muted-foreground">مواطن مسجل</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">خدمة متاحة</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">آمن ومحمي</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;