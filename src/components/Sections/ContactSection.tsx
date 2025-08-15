import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <MessageCircle className="h-3 w-3 mr-1" />
            تواصل معنا
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تواصل معنا في أي وقت، فريقنا جاهز للإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  العنوان
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  شارع محمد الخامس، الرباط<br />
                  المملكة المغربية<br />
                  الرمز البريدي: 10000
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  الهاتف
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    خط المساعدة: +212 5 37 76 50 00
                  </p>
                  <p className="text-muted-foreground">
                    الدعم التقني: +212 5 37 76 50 01
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  البريد الإلكتروني
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    contact@xgov.ma
                  </p>
                  <p className="text-muted-foreground">
                    support@xgov.ma
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  ساعات العمل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    الخدمات الإلكترونية: 24/7
                  </p>
                  <p className="text-muted-foreground">
                    الدعم المباشر: 8:00 - 18:00
                  </p>
                  <p className="text-muted-foreground">
                    من الإثنين إلى الجمعة
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">أرسل لنا رسالة</CardTitle>
                <p className="text-muted-foreground">
                  املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول*</Label>
                    <Input id="firstName" placeholder="أدخل اسمك الأول" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">الاسم الأخير*</Label>
                    <Input id="lastName" placeholder="أدخل اسمك الأخير" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني*</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" placeholder="+212 6XX XXX XXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">نوع الاستفسار*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الاستفسار" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">مشكلة تقنية</SelectItem>
                      <SelectItem value="service">استفسار عن خدمة</SelectItem>
                      <SelectItem value="account">مشكلة في الحساب</SelectItem>
                      <SelectItem value="suggestion">اقتراح أو تحسين</SelectItem>
                      <SelectItem value="complaint">شكوى</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة*</Label>
                  <Textarea 
                    id="message" 
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-32"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="primary" className="flex-1">
                    <Send className="h-4 w-4 ml-2" />
                    إرسال الرسالة
                  </Button>
                  <Button variant="government" className="flex-1">
                    محادثة مباشرة
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    سنقوم بالرد على رسالتك خلال 24 ساعة. للاستفسارات العاجلة، يرجى الاتصال بخط المساعدة.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;