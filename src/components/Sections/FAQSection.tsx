import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ArrowLeft, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: "كيف يمكنني إنشاء حساب جديد؟",
      answer: "يمكنك إنشاء حساب جديد بسهولة من خلال النقر على زر 'دخول المواطن' في أعلى الصفحة، ثم اختيار 'إنشاء حساب جديد'. ستحتاج إلى رقم البطاقة الوطنية ورقم الهاتف المحمول لإتمام التسجيل."
    },
    {
      question: "هل الخدمات متاحة باللغة العربية؟",
      answer: "نعم، جميع الخدمات متاحة باللغة العربية بالإضافة إلى الفرنسية والإنجليزية. يمكنك تغيير اللغة من الرمز الموجود في أعلى الصفحة."
    },
    {
      question: "كم يستغرق إنجاز المعاملات؟",
      answer: "تختلف مدة إنجاز المعاملات حسب نوع الخدمة. معظم الخدمات البسيطة تستغرق بين 5-10 دقائق، بينما المعاملات المعقدة قد تحتاج إلى 15-20 دقيقة. ستجد تقديراً للوقت المطلوب مع كل خدمة."
    },
    {
      question: "هل بياناتي آمنة؟",
      answer: "نعم، نحن نطبق أعلى معايير الأمان والحماية. جميع البيانات مشفرة ومحمية وفقاً للمعايير الدولية. لا نشارك بياناتك مع أي جهة خارجية."
    },
    {
      question: "ماذا لو واجهت مشكلة تقنية؟",
      answer: "يمكنك التواصل مع فريق الدعم التقني على مدار الساعة من خلال زر 'المساعدة' أو عبر الهاتف: +212 5 37 76 50 00"
    },
    {
      question: "هل يمكنني تتبع حالة طلباتي؟",
      answer: "نعم، يمكنك تتبع حالة جميع طلباتك من لوحة التحكم الخاصة بك. ستصلك أيضاً رسائل نصية وإشعارات على البريد الإلكتروني عند تحديث حالة أي طلب."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="h-3 w-3 mr-1" />
            الأسئلة الشائعة
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            أجوبة على أهم استفساراتك
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تجد هنا إجابات شافية على الأسئلة الأكثر تكراراً من المواطنين
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border bg-card">
                <Collapsible
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-right flex-1">
                          {faq.question}
                        </CardTitle>
                        <ChevronDown 
                          className={`h-5 w-5 text-muted-foreground transition-transform ${
                            openItems.includes(index) ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed text-right">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              لم تجد إجابة لسؤالك؟
            </h3>
            <p className="text-muted-foreground mb-6">
              فريق الدعم جاهز لمساعدتك في أي وقت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">
                تحدث مع المساعد الذكي
              </Button>
              <Button variant="government">
                اتصل بفريق الدعم
                <ArrowLeft className="h-4 w-4 mr-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;