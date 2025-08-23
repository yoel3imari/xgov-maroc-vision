import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard,
  Settings,
  FileText,
  HelpCircle,
  Shield,
  Users,
  Inbox,
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  LogOut
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { useTranslations } from "@/lib/translations";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [currentLanguage, setCurrentLanguage] = useState("ar");
  const t = useTranslations(currentLanguage);

  const handleLanguageChange = (language: any) => {
    setCurrentLanguage(language.code);
  };

  const menuItems = [
    { id: "overview", title: t.overview, icon: LayoutDashboard },
    { id: "services", title: t.servicesManagement, icon: FileText },
    { id: "faq", title: t.faqManagement, icon: HelpCircle },
    { id: "security", title: t.security, icon: Shield },
    { id: "users", title: t.users, icon: Users },
    { id: "inbox", title: t.inbox, icon: Inbox },
    { id: "settings", title: t.settings, icon: Settings }
  ];

  const mockServices = [
    { id: 1, name: "البطاقة الوطنية", category: "الوثائق", status: "نشط", requests: 1250 },
    { id: 2, name: "جواز السفر", category: "الوثائق", status: "نشط", requests: 890 },
    { id: 3, name: "رخصة السياقة", category: "النقل", status: "نشط", requests: 567 },
    { id: 4, name: "شهادة السكنى", category: "الوثائق", status: "معطل", requests: 234 }
  ];

  const mockFAQs = [
    { id: 1, question: "كيف أستخرج البطاقة الوطنية؟", category: "الوثائق", status: "منشور", views: 2340 },
    { id: 2, question: "ما هي مدة صلاحية جواز السفر؟", category: "الوثائق", status: "منشور", views: 1890 },
    { id: 3, question: "كيف أدفع الضرائب إلكترونياً؟", category: "الضرائب", status: "مسودة", views: 0 }
  ];

  const mockUsers = [
    { id: 1, name: "أحمد محمد", email: "ahmed@email.com", role: "مدير", lastLogin: "اليوم", status: "نشط" },
    { id: 2, name: "فاطمة الزهراء", email: "fatima@email.com", role: "محرر", lastLogin: "أمس", status: "نشط" },
    { id: 3, name: "يوسف العلوي", email: "youssef@email.com", role: "محرر", lastLogin: "منذ 3 أيام", status: "معطل" }
  ];

  const mockInboxMessages = [
    { id: 1, name: "سارة أحمد", email: "sara@email.com", subject: "استفسار عن البطاقة الوطنية", date: "اليوم", status: "جديد" },
    { id: 2, name: "محمد حسن", email: "mohamed@email.com", subject: "مشكلة في دفع الرسوم", date: "أمس", status: "قيد المراجعة" },
    { id: 3, name: "ليلى كريم", email: "laila@email.com", subject: "طلب تحديث المعلومات", date: "منذ يومين", status: "مكتمل" }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">نظرة عامة</h2>
        <p className="text-muted-foreground">إحصائيات ومؤشرات الأداء الرئيسية</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الخدمات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">24</div>
            <p className="text-xs text-success">+2 هذا الشهر</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">الطلبات اليومية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,234</div>
            <p className="text-xs text-success">+15% من الأمس</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">المستخدمين النشطين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8,543</div>
            <p className="text-xs text-success">+8% هذا الأسبوع</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">معدل الرضا</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">94.5%</div>
            <p className="text-xs text-success">+2.1% من الشهر الماضي</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              الخدمات الأكثر طلباً
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "البطاقة الوطنية", count: 1250, trend: "+12%" },
                { name: "جواز السفر", count: 890, trend: "+8%" },
                { name: "رخصة السياقة", count: 567, trend: "+5%" },
                { name: "شهادة السكنى", count: 234, trend: "-2%" }
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{service.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{service.count}</span>
                    <span className={`text-xs ${service.trend.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                      {service.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              حالة النظام
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">حالة الخدمات</span>
                <Badge variant="secondary" className="text-success">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  تعمل بشكل طبيعي
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">قاعدة البيانات</span>
                <Badge variant="secondary" className="text-success">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  متصلة
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">الأمان</span>
                <Badge variant="secondary" className="text-accent">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  تحديثات متاحة
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">إدارة الخدمات</h2>
          <p className="text-muted-foreground">إضافة وتحرير وإدارة الخدمات الحكومية</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          إضافة خدمة جديدة
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة الخدمات</CardTitle>
          <CardDescription>جميع الخدمات المتاحة في النظام</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>اسم الخدمة</TableHead>
                <TableHead>الفئة</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>عدد الطلبات</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>{service.category}</TableCell>
                  <TableCell>
                    <Badge variant={service.status === "نشط" ? "secondary" : "outline"}>
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{service.requests}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderFAQ = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">الأسئلة الشائعة</h2>
          <p className="text-muted-foreground">إدارة قاعدة المعرفة والأسئلة الشائعة</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          إضافة سؤال جديد
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>قائمة الأسئلة</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>السؤال</TableHead>
                  <TableHead>الفئة</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>المشاهدات</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockFAQs.map((faq) => (
                  <TableRow key={faq.id}>
                    <TableCell className="font-medium max-w-[200px] truncate">
                      {faq.question}
                    </TableCell>
                    <TableCell>{faq.category}</TableCell>
                    <TableCell>
                      <Badge variant={faq.status === "منشور" ? "secondary" : "outline"}>
                        {faq.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{faq.views}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>إضافة سؤال جديد</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="question">السؤال</Label>
              <Input id="question" placeholder="اكتب السؤال هنا..." />
            </div>
            <div>
              <Label htmlFor="category">الفئة</Label>
              <Input id="category" placeholder="مثال: الوثائق" />
            </div>
            <div>
              <Label htmlFor="answer">الإجابة</Label>
              <Textarea id="answer" placeholder="اكتب الإجابة التفصيلية هنا..." rows={4} />
            </div>
            <Button className="w-full">حفظ السؤال</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">إدارة المستخدمين</h2>
          <p className="text-muted-foreground">إدارة حسابات المستخدمين والأذونات</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          إضافة مستخدم
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة المستخدمين</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الاسم</TableHead>
                <TableHead>البريد الإلكتروني</TableHead>
                <TableHead>الدور</TableHead>
                <TableHead>آخر دخول</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "نشط" ? "secondary" : "outline"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderInbox = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">صندوق الوارد</h2>
        <p className="text-muted-foreground">رسائل التواصل من المواطنين</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>الرسائل الواردة</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>المرسل</TableHead>
                <TableHead>البريد الإلكتروني</TableHead>
                <TableHead>الموضوع</TableHead>
                <TableHead>التاريخ</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockInboxMessages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{message.subject}</TableCell>
                  <TableCell>{message.date}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        message.status === "جديد" ? "destructive" :
                        message.status === "قيد المراجعة" ? "outline" : "secondary"
                      }
                    >
                      {message.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">الإعدادات</h2>
        <p className="text-muted-foreground">إعدادات النظام والتخصيص</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>الإعدادات العامة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="siteName">اسم الموقع</Label>
              <Input id="siteName" defaultValue="X-GOV" />
            </div>
            <div>
              <Label htmlFor="siteDescription">وصف الموقع</Label>
              <Textarea id="siteDescription" defaultValue="منصة الخدمات الحكومية الذكية" />
            </div>
            <div>
              <Label htmlFor="contactEmail">بريد التواصل</Label>
              <Input id="contactEmail" defaultValue="contact@xgov.ma" />
            </div>
            <Button>حفظ التغييرات</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>إعدادات الأمان</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="sessionTimeout">انتهاء الجلسة (بالدقائق)</Label>
              <Input id="sessionTimeout" defaultValue="30" type="number" />
            </div>
            <div>
              <Label htmlFor="maxAttempts">عدد محاولات تسجيل الدخول</Label>
              <Input id="maxAttempts" defaultValue="3" type="number" />
            </div>
            <Button>حفظ إعدادات الأمان</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "overview": return renderOverview();
      case "services": return renderServices();
      case "faq": return renderFAQ();
      case "users": return renderUsers();
      case "inbox": return renderInbox();
      case "settings": return renderSettings();
      default: return renderOverview();
    }
  };

  const AppSidebar = () => {
    const { state } = useSidebar();
    const collapsed = state === "collapsed";

    return (
      <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
        {/* Sidebar Header with centered logo when collapsed */}
        <div className="h-16 flex items-center border-b border-border px-4">
          <NavLink 
            to="/" 
            className={`flex items-center hover:opacity-80 transition-opacity ${collapsed ? 'justify-center w-full' : 'gap-2'}`}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">X</span>
            </div>
            {!collapsed && (
              <div>
                <div className="text-sm font-bold text-primary">X-GOV</div>
                <div className="text-xs text-muted-foreground">
                  {currentLanguage === 'ar' ? 'العودة للرئيسية' : currentLanguage === 'fr' ? 'Accueil' : 'Home'}
                </div>
              </div>
            )}
          </NavLink>
        </div>
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg font-bold text-primary px-4 py-3">
              {!collapsed && (currentLanguage === 'ar' ? 'لوحة التحكم' : currentLanguage === 'fr' ? 'Tableau de bord' : 'Dashboard')}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full justify-start gap-3 ${
                        activeSection === item.id ? "bg-primary text-primary-foreground" : ""
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
  };

  const isRTL = document.dir === 'rtl';

  return (
    <SidebarProvider>
      <div 
        className="min-h-screen flex w-full bg-background" 
        data-sidebar="wrapper"
      >
        <AppSidebar />
        <main className="flex-1">
          <header className="h-16 flex items-center justify-between border-b border-border px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-xl font-bold text-foreground">X-GOV Admin</h1>
                <p className="text-sm text-muted-foreground">
                  {currentLanguage === 'ar' ? 'لوحة تحكم المدير' : currentLanguage === 'fr' ? 'Panneau d\'administration' : 'Admin Dashboard'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitcher 
                variant="compact" 
                onLanguageChange={handleLanguageChange}
              />
              <Badge variant="secondary">{currentLanguage === 'ar' ? 'المدير' : currentLanguage === 'fr' ? 'Admin' : 'Admin'}</Badge>
              <Button variant="outline" size="sm" className="gap-2">
                <LogOut className="h-4 w-4" />
                {currentLanguage === 'ar' ? 'تسجيل الخروج' : currentLanguage === 'fr' ? 'Déconnexion' : 'Logout'}
              </Button>
            </div>
          </header>
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;