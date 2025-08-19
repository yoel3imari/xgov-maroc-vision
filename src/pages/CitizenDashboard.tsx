import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import LanguageDropdown from "@/components/ui/language-dropdown";
import { Link } from "react-router-dom";
import {
  User,
  Settings,
  MessageSquare,
  FileText,
  Trash2,
  Edit,
  Save,
  Home,
  LogOut,
  Shield,
  History,
  Download
} from "lucide-react";

const CitizenDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "أحمد محمد العلوي",
    email: "ahmed.alaoui@email.com",
    phone: "+212 6 12 34 56 78",
    cin: "AB123456",
    address: "الرباط، المغرب"
  });

  const menuItems = [
    { id: "profile", title: "الملف الشخصي", icon: User },
    { id: "history", title: "سجل المحادثات", icon: History },
    { id: "documents", title: "الوثائق", icon: FileText },
    { id: "settings", title: "الإعدادات", icon: Settings }
  ];

  const mockChatHistory = [
    { id: 1, title: "استخراج البطاقة الوطنية", date: "2024-01-15", messages: 8 },
    { id: 2, title: "تجديد جواز السفر", date: "2024-01-10", messages: 12 },
    { id: 3, title: "شهادة السكنى", date: "2024-01-05", messages: 5 }
  ];

  const mockDocuments = [
    { id: 1, name: "البطاقة الوطنية", type: "PDF", date: "2024-01-15", size: "2.5 MB" },
    { id: 2, name: "شهادة السكنى", type: "PDF", date: "2024-01-10", size: "1.8 MB" },
    { id: 3, name: "وصل الأداء", type: "PDF", date: "2024-01-08", size: "1.2 MB" }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, this would save to backend
  };

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">الملف الشخصي</h2>
          <p className="text-muted-foreground">إدارة معلوماتك الشخصية</p>
        </div>
        <Button 
          onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
          className="gap-2"
        >
          {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
          {isEditing ? "حفظ" : "تعديل"}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>المعلومات الأساسية</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="cin">رقم البطاقة الوطنية</Label>
              <Input
                id="cin"
                value={profileData.cin}
                onChange={(e) => setProfileData({...profileData, cin: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="address">العنوان</Label>
            <Textarea
              id="address"
              value={profileData.address}
              onChange={(e) => setProfileData({...profileData, address: e.target.value})}
              disabled={!isEditing}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderHistory = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">سجل المحادثات</h2>
        <p className="text-muted-foreground">جميع محادثاتك مع المساعد الذكي</p>
      </div>

      <div className="grid gap-4">
        {mockChatHistory.map((chat) => (
          <Card key={chat.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{chat.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {chat.messages} رسالة • {chat.date}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">الوثائق</h2>
        <p className="text-muted-foreground">الوثائق والملفات المحفوظة</p>
      </div>

      <div className="grid gap-4">
        {mockDocuments.map((doc) => (
          <Card key={doc.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{doc.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {doc.type} • {doc.size} • {doc.date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">الإعدادات</h2>
        <p className="text-muted-foreground">إعدادات الحساب والخصوصية</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>إعدادات الأمان</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Shield className="h-4 w-4 mr-2" />
              تغيير كلمة المرور
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Shield className="h-4 w-4 mr-2" />
              تفعيل المصادقة الثنائية
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">منطقة الخطر</CardTitle>
            <CardDescription>
              هذه الإجراءات لا يمكن التراجع عنها. يرجى الحذر.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" className="gap-2">
              <Trash2 className="h-4 w-4" />
              حذف الحساب نهائياً
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "profile": return renderProfile();
      case "history": return renderHistory();
      case "documents": return renderDocuments();
      case "settings": return renderSettings();
      default: return renderProfile();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">X</span>
              </div>
              <div>
                <div className="text-sm font-bold text-primary">X-GOV</div>
                <div className="text-xs text-muted-foreground">الفضاء الشخصي</div>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="h-4 w-4" />
                الرئيسية
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                المساعد الذكي
              </Button>
            </Link>
            <LanguageDropdown />
            <Separator orientation="vertical" className="h-6" />
            <Badge variant="secondary">مواطن</Badge>
            <Button variant="ghost" size="sm" className="gap-2">
              <LogOut className="h-4 w-4" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <aside className="w-64 border-l border-border bg-card">
          <div className="p-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">{profileData.name}</h3>
              <p className="text-sm text-muted-foreground">{profileData.email}</p>
            </div>
            
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => setActiveSection(item.id)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default CitizenDashboard;