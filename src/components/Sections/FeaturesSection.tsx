import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Clock, 
  Shield, 
  Smartphone, 
  Languages, 
  HeadphonesIcon,
  CheckCircle,
  Zap
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "مساعد ذكي",
      description: "يفهم طلبك ويوجهك خطوة بخطوة لإنجاز معاملتك",
      highlight: "ذكاء اصطناعي متقدم"
    },
    {
      icon: Clock,
      title: "متاح 24/7",
      description: "خدمة متواصلة على مدار الساعة في جميع أيام الأسبوع",
      highlight: "لا توقف أبداً"
    },
    {
      icon: Shield,
      title: "أمان مطلق",
      description: "حماية عالية المستوى لبياناتك الشخصية ومعاملاتك",
      highlight: "تشفير متقدم"
    },
    {
      icon: Smartphone,
      title: "سهولة الاستخدام",
      description: "واجهة بسيطة ومفهومة تناسب جميع الفئات العمرية",
      highlight: "تصميم بديهي"
    },
    {
      icon: Languages,
      title: "متعدد اللغات",
      description: "يدعم العربية والفرنسية والإنجليزية",
      highlight: "3 لغات"
    },
    {
      icon: HeadphonesIcon,
      title: "دعم فني",
      description: "فريق دعم متخصص لمساعدتك في حل أي مشكلة",
      highlight: "دعم مباشر"
    }
  ];

  const benefits = [
    "توفير الوقت والجهد",
    "تجنب الطوابير الطويلة",
    "إنجاز المعاملات من المنزل",
    "تتبع حالة الطلبات",
    "حفظ تاريخ المعاملات"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="h-3 w-3 mr-1" />
            مميزات متطورة
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            لماذا تختار X-GOV؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            منصة متطورة مصممة خصيصاً لتوفير أفضل تجربة للمواطن المغربي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group border-border bg-card hover:shadow-government transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-morocco rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {feature.highlight}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits section */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                فوائد استخدام المنصة
              </h3>
              <p className="text-muted-foreground mb-6">
                استمتع بتجربة جديدة في التعامل مع الخدمات الحكومية
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-subtle rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-morocco rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    تجربة مستخدم متطورة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;