import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    {
      name: "وزارة الداخلية",
      logo: "🏛️",
      category: "government"
    },
    {
      name: "وزارة العدل",
      logo: "⚖️",
      category: "government"
    },
    {
      name: "وزارة الصحة",
      logo: "🏥",
      category: "government"
    },
    {
      name: "وزارة التعليم",
      logo: "🎓",
      category: "government"
    },
    {
      name: "الوكالة الوطنية للإنعاش",
      logo: "💼",
      category: "government"
    },
    {
      name: "المكتب الوطني للكهرباء",
      logo: "⚡",
      category: "government"
    }
  ];

  const sponsors = [
    {
      name: "البنك المغربي للتجارة الخارجية",
      logo: "🏦",
      category: "financial"
    },
    {
      name: "اتصالات المغرب",
      logo: "📱",
      category: "telecom"
    },
    {
      name: "المكتب الشريف للفوسفاط",
      logo: "🏭",
      category: "industry"
    },
    {
      name: "الخطوط الملكية المغربية",
      logo: "✈️",
      category: "transport"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            شراكات استراتيجية
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            شركاؤنا في النجاح
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نتعاون مع أهم المؤسسات الحكومية والخاصة لتقديم خدمة شاملة ومتميزة
          </p>
        </div>

        {/* Government Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            الشركاء الحكوميون
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-government transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </div>
                  <h4 className="text-sm font-medium text-foreground leading-tight">
                    {partner.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            الرعاة والداعمون
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="group hover:shadow-government transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {sponsor.logo}
                  </div>
                  <h4 className="text-sm font-medium text-foreground leading-tight">
                    {sponsor.name}
                  </h4>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    {sponsor.category === 'financial' && 'مصرفي'}
                    {sponsor.category === 'telecom' && 'اتصالات'}
                    {sponsor.category === 'industry' && 'صناعة'}
                    {sponsor.category === 'transport' && 'نقل'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              مؤسسة معتمدة حكومياً
            </h3>
            <p className="text-muted-foreground mb-6">
              X-GOV معتمدة رسمياً من قبل الحكومة المغربية لتقديم الخدمات الإلكترونية
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm text-muted-foreground">معتمد ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm text-muted-foreground">موافق للمعايير الدولية</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span className="text-sm text-muted-foreground">جائزة التميز الرقمي 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;