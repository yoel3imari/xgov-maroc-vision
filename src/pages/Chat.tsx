import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Clock
} from "lucide-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [feedbackGiven, setFeedbackGiven] = useState<{[key: number]: 'helpful' | 'unhelpful' | null}>({});

  const services = [
    { icon: FileText, title: "الوثائق الرسمية", active: true },
    { icon: CreditCard, title: "الضرائب والرسوم", active: false },
    { icon: GraduationCap, title: "التعليم والمنح", active: false },
    { icon: Heart, title: "الصحة والتأمين", active: false },
    { icon: Briefcase, title: "العمل والتوظيف", active: false },
    { icon: Car, title: "النقل والمواصلات", active: false },
    { icon: Home, title: "الإسكان والعقار", active: false },
    { icon: Scale, title: "العدالة والقانون", active: false }
  ];

  const mockConversation = [
    {
      id: 1,
      type: "bot" as const,
      message: "مرحباً بك في X-GOV! أنا مساعدك الذكي للخدمات الحكومية المغربية. كيف يمكنني مساعدتك اليوم؟",
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[calc(100vh-12rem)]">
          {/* Services Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">الخدمات المتاحة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Button
                      key={index}
                      variant={service.active ? "primary" : "ghost"}
                      className="w-full justify-start gap-3 h-auto p-3"
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="text-sm">{service.title}</span>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              <CardHeader className="border-b border-border">
                <div className="flex items-center gap-3">
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
              <div className="border-t border-border p-4">
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

      <Footer />
    </div>
  );
};

export default Chat;