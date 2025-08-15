import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* X-GOV Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-royal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">X</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">X-GOV</h3>
                <p className="text-xs text-secondary-foreground/70">خدمات حكومية ذكية</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              منصة موحدة للخدمات الحكومية المغربية مدعومة بالذكاء الاصطناعي لتوفير تجربة سلسة وفعالة للمواطنين.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-secondary-foreground/60 hover:text-accent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-secondary-foreground/60 hover:text-accent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-secondary-foreground/60 hover:text-accent">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-secondary-foreground/60 hover:text-accent">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">جميع الخدمات</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">دليل المستخدم</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">المساعدة التقنية</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">الخدمات الشائعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">البطاقة الوطنية</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">جواز السفر</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">الضرائب والرسوم</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">التعليم والمنح</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">الصحة والتأمين</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">العمل والتوظيف</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">الرباط، المغرب</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">+212 5 37 76 50 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">contact@xgov.ma</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">www.xgov.ma</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <p>
            © {currentYear} المملكة المغربية. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-accent transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-accent transition-colors">إمكانية الوصول</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;