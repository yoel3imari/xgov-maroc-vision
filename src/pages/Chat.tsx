import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { useTranslations } from "@/lib/translations";
import { Link, useSearchParams } from "react-router-dom";
import { 
  FileText, 
  CreditCard, 
  GraduationCap, 
  Heart, 
  Briefcase, 
  Car, 
  Home, 
  Scale,
  Send,
  ThumbsUp,
  ThumbsDown,
  Bot,
  User,
  Clock,
  Menu,
  LayoutDashboard,
  UserCircle
} from "lucide-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [feedbackGiven, setFeedbackGiven] = useState<{[key: number]: 'helpful' | 'unhelpful' | null}>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ar");
  const [searchParams] = useSearchParams();
  const isMobile = useIsMobile();
  const t = useTranslations(currentLanguage);

  const selectedService = searchParams.get('service');

  const handleLanguageChange = (language: any) => {
    setCurrentLanguage(language.code);
  };

  const services = [
    { icon: FileText, title: "الوثائق الرسمية", active: selectedService === "الوثائق الرسمية" || (!selectedService && true) },
    { icon: CreditCard, title: "الضرائب والرسوم", active: selectedService === "الضرائب والرسوم" },
    { icon: GraduationCap, title: "التعليم والمنح", active: selectedService === "التعليم والمنح" },
    { icon: Heart, title: "الصحة والتأمين", active: selectedService === "الصحة والتأمين" },
    { icon: Briefcase, title: "العمل والتوظيف", active: selectedService === "العمل والتوظيف" },
    { icon: Car, title: "النقل والمواصلات", active: selectedService === "النقل والمواصلات" },
    { icon: Home, title: "الإسكان والعقار", active: selectedService === "الإسكان والعقار" },
    { icon: Scale, title: "العدالة والقانون", active: selectedService === "العدالة والقانون" }
  ];

  const mockConversation = [
    {
      id: 1,
      type: "bot" as const,
      message: selectedService 
        ? `مرحباً بك! لقد اخترت خدمة "${selectedService}". كيف يمكنني مساعدتك في هذه الخدمة؟`
        : "مرحباً بك في X-GOV! أنا مساعدك الذكي للخدمات الحكومية المغربية. كيف يمكنني مساعدتك اليوم؟",
      timestamp: "10:30"
    },
    {
      id: 2,
      type: "user" as const,
      message: "أريد استخراج البطاقة الوطنية. ما هي الوثائق المطلوبة؟",
      timestamp: "10:31"
    },
    {
      id: 3,
      type: "bot" as const,
      message: "لاستخراج البطاقة الوطنية، ستحتاج إلى الوثائق التالية:\n\n✅ صورتان شمسيتان حديثتان\n✅ نسخة من شهادة الازدياد\n✅ شهادة السكنى\n✅ نسخة من البطاقة الوطنية للأب أو الأم\n\nيمكنك تقديم الطلب في أقرب مقاطعة أو دائرة إدارية. المدة المتوقعة: 15 يوماً.",
      timestamp: "10:31",
      showFeedback: true
    },
    {
      id: 4,
      type: "user" as const,
      message: "هل يمكن تقديم الطلب إلكترونياً؟",
      timestamp: "10:32"
    },
    {
      id: 5,
      type: "bot" as const,
      message: "نعم! يمكنك الآن تقديم طلب البطاقة الوطنية إلكترونياً من خلال:\n\n🌐 موقع وزارة الداخلية الرسمي\n📱 تطبيق \"وثائقي\" المتوفر على الهواتف الذكية\n\nستحتاج إلى:\n• حساب مؤكد على المنصة\n• رفع الوثائق بصيغة PDF\n• دفع الرسوم إلكترونياً (25 درهم)\n\nسيتم إشعارك عند جاهزية البطاقة للاستلام.",
      timestamp: "10:33",
      showFeedback: true
    }
  ];

  const handleFeedback = (messageId: number, type: 'helpful' | 'unhelpful') => {
    setFeedbackGiven(prev => ({
      ...prev,
      [messageId]: type
    }));
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // Mock sending message
    setMessage("");
    // In a real app, this would add the message to the conversation
  };

  const ServicesContent = () => (
    <div className="space-y-2">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <Button
            key={index}
            variant={service.active ? "primary" : "ghost"}
            className="w-full justify-start gap-3 h-auto p-3"
            onClick={() => isMobile && setSidebarOpen(false)}
          >
            <IconComponent className="h-5 w-5" />
            <span className="text-sm">{service.title}</span>
          </Button>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Chat Header */}
      <header className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">X</span>
              </div>
              <div>
                <div className="text-sm font-bold text-primary">X-GOV</div>
                <div className="text-xs text-muted-foreground">المساعد الذكي</div>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">الرئيسية</span>
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden sm:inline">لوحة التحكم</span>
              </Button>
            </Link>
            <Link to="/citizen">
              <Button variant="ghost" size="sm" className="gap-2">
                <UserCircle className="h-4 w-4" />
                <span className="hidden sm:inline">فضائي الشخصي</span>
              </Button>
            </Link>
            <LanguageSwitcher 
              variant="compact" 
              onLanguageChange={handleLanguageChange}
            />
          </div>
        </div>
      </header>
      
      <main className="flex flex-col h-[calc(100vh-73px)]">
        <div className="flex flex-1 overflow-hidden">
          {/* Desktop Services Sidebar */}
          {!isMobile && (
            <div className="w-80 border-l border-border bg-card">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">الخدمات المتاحة</h2>
                <ServicesContent />
              </div>
            </div>
          )}

          {/* Mobile Services Sidebar */}
          {isMobile && (
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>الخدمات المتاحة</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <ServicesContent />
                </div>
              </SheetContent>
            </Sheet>
          )}

          {/* Chat Interface */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Card className="flex-1 flex flex-col m-4 overflow-hidden">
              <CardHeader className="border-b border-border flex-shrink-0">
                <div className="flex items-center gap-3">
                  {isMobile && (
                    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Menu className="h-5 w-5" />
                        </Button>
                      </SheetTrigger>
                    </Sheet>
                  )}
                  <div className="w-10 h-10 bg-gradient-morocco rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">مساعد X-GOV الذكي</CardTitle>
                    <p className="text-sm text-muted-foreground">متصل الآن</p>
                  </div>
                  <Badge variant="secondary" className="mr-auto">
                    الوثائق الرسمية
                  </Badge>
                </div>
              </CardHeader>

              {/* Chat Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {mockConversation.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.type === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-morocco rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-[70%] ${msg.type === 'user' ? 'order-1' : ''}`}>
                      <div className={`p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-line">{msg.message}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{msg.timestamp}</span>
                        
                        {msg.showFeedback && (
                          <div className="flex items-center gap-1 mr-auto">
                            <span className="text-xs">مفيد؟</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`h-6 w-6 p-0 ${feedbackGiven[msg.id] === 'helpful' ? 'text-success' : ''}`}
                              onClick={() => handleFeedback(msg.id, 'helpful')}
                            >
                              <ThumbsUp className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`h-6 w-6 p-0 ${feedbackGiven[msg.id] === 'unhelpful' ? 'text-destructive' : ''}`}
                              onClick={() => handleFeedback(msg.id, 'unhelpful')}
                            >
                              <ThumbsDown className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    {msg.type === 'user' && (
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>

              {/* Chat Input */}
              <div className="border-t border-border p-4 flex-shrink-0">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب رسالتك هنا..."
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  اضغط Enter للإرسال. جميع المحادثات آمنة ومحمية.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;