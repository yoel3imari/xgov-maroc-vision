import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CreditCard, 
  GraduationCap, 
  Heart, 
  Briefcase, 
  Car, 
  Home, 
  Scale, 
  ArrowLeft,
  Clock,
  Star
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: FileText,
      title: "الوثائق الرسمية",
      description: "البطاقة الوطنية، جواز السفر، شهادات مختلفة",
      popular: true,
      timeEstimate: "5-10 دقائق"
    },
    {
      icon: CreditCard,
      title: "الضرائب والرسوم",
      description: "دفع الضرائب، استخراج شهادات عدم المديونية",
      popular: true,
      timeEstimate: "2-5 دقائق"
    },
    {
      icon: GraduationCap,
      title: "التعليم والمنح",
      description: "التسجيل الجامعي، طلب منح دراسية",
      popular: false,
      timeEstimate: "10-15 دقيقة"
    },
    {
      icon: Heart,
      title: "الصحة والتأمين",
      description: "بطاقة راميد، المواعيد الطبية، التأمين الصحي",
      popular: true,
      timeEstimate: "3-7 دقائق"
    },
    {
      icon: Briefcase,
      title: "العمل والتوظيف",
      description: "البحث عن عمل، التسجيل في الوكالة الوطنية للإنعاش",
      popular: false,
      timeEstimate: "5-10 دقائق"
    },
    {
      icon: Car,
      title: "النقل والمواصلات",
      description: "رخصة السياقة، تسجيل المركبات، المخالفات",
      popular: true,
      timeEstimate: "3-8 دقائق"
    },
    {
      icon: Home,
      title: "الإسكان والعقار",
      description: "السكن الاجتماعي، التصاريح العقارية",
      popular: false,
      timeEstimate: "15-20 دقيقة"
    },
    {
      icon: Scale,
      title: "العدالة والقانون",
      description: "السجل العدلي، الشهادات القضائية",
      popular: false,
      timeEstimate: "10-15 دقيقة"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            جميع الخدمات في مكان واحد
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خدمات شاملة لجميع احتياجاتك
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة شاملة من الخدمات الحكومية المغربية المصممة لتوفير الوقت والجهد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-government transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-gradient-morocco rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    {service.popular && (
                      <Badge variant="secondary" className="text-xs">
                        <Star className="h-3 w-3 mr-1 text-accent fill-current" />
                        شائع
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {service.timeEstimate}
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs p-1">
                      <ArrowLeft className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="government" size="lg">
            عرض جميع الخدمات
            <ArrowLeft className="h-4 w-4 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;