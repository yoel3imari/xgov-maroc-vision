export interface Translations {
  // Navigation
  services: string;
  faq: string;
  contact: string;
  smartAssistant: string;
  adminLogin: string;
  
  // Landing Page
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startChat: string;
  exploreServices: string;
  
  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  servicesDescription: string;
  viewAllServices: string;
  popular: string;
  
  // Footer
  quickLinks: string;
  support: string;
  legal: string;
  
  // Dashboard
  overview: string;
  servicesManagement: string;
  faqManagement: string;
  security: string;
  users: string;
  inbox: string;
  settings: string;
  
  // Auth
  login: string;
  register: string;
  resetPassword: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export const translations: Record<string, Translations> = {
  ar: {
    // Navigation
    services: "الخدمات",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا",
    smartAssistant: "المساعد الذكي",
    adminLogin: "دخول المدير",
    
    // Landing Page
    heroTitle: "X-GOV",
    heroSubtitle: "خدمات حكومية ذكية بنقرة واحدة",
    heroDescription: "منصة شاملة تجمع جميع الخدمات الحكومية المغربية في مكان واحد، مع مساعد ذكي لتوجيهك خطوة بخطوة",
    startChat: "ابدأ المحادثة الآن",
    exploreServices: "استكشف الخدمات",
    
    // Services
    servicesTitle: "خدمات شاملة لجميع احتياجاتك",
    servicesSubtitle: "جميع الخدمات في مكان واحد",
    servicesDescription: "اكتشف مجموعة شاملة من الخدمات الحكومية المغربية المصممة لتوفير الوقت والجهد",
    viewAllServices: "عرض جميع الخدمات",
    popular: "شائع",
    
    // Footer
    quickLinks: "روابط سريعة",
    support: "الدعم",
    legal: "قانوني",
    
    // Dashboard
    overview: "نظرة عامة",
    servicesManagement: "إدارة الخدمات",
    faqManagement: "الأسئلة الشائعة",
    security: "الأمان",
    users: "المستخدمين",
    inbox: "صندوق الوارد",
    settings: "الإعدادات",
    
    // Auth
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    resetPassword: "إعادة تعيين كلمة المرور",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة"
  },
  
  fr: {
    // Navigation
    services: "Services",
    faq: "FAQ",
    contact: "Contact",
    smartAssistant: "Assistant IA",
    adminLogin: "Connexion Admin",
    
    // Landing Page
    heroTitle: "X-GOV",
    heroSubtitle: "Services gouvernementaux intelligents en un clic",
    heroDescription: "Plateforme complète qui rassemble tous les services gouvernementaux marocains en un seul endroit, avec un assistant intelligent pour vous guider étape par étape",
    startChat: "Commencer le chat",
    exploreServices: "Explorer les services",
    
    // Services
    servicesTitle: "Services complets pour tous vos besoins",
    servicesSubtitle: "Tous les services en un seul endroit",
    servicesDescription: "Découvrez une gamme complète de services gouvernementaux marocains conçus pour économiser du temps et des efforts",
    viewAllServices: "Voir tous les services",
    popular: "Populaire",
    
    // Footer
    quickLinks: "Liens rapides",
    support: "Support",    
    legal: "Légal",
    
    // Dashboard
    overview: "Aperçu",
    servicesManagement: "Gestion des services",
    faqManagement: "FAQ",
    security: "Sécurité",
    users: "Utilisateurs",
    inbox: "Boîte de réception",
    settings: "Paramètres",
    
    // Auth
    login: "Connexion",
    register: "S'inscrire",
    resetPassword: "Réinitialiser le mot de passe",
    email: "Email",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    firstName: "Prénom",
    lastName: "Nom de famille"
  },
  
  en: {
    // Navigation
    services: "Services",
    faq: "FAQ",
    contact: "Contact",
    smartAssistant: "Smart Assistant",
    adminLogin: "Admin Login",
    
    // Landing Page
    heroTitle: "X-GOV",
    heroSubtitle: "Smart government services in one click",
    heroDescription: "Comprehensive platform that brings together all Moroccan government services in one place, with a smart assistant to guide you step by step",
    startChat: "Start Chat Now",
    exploreServices: "Explore Services",
    
    // Services
    servicesTitle: "Comprehensive services for all your needs",
    servicesSubtitle: "All services in one place",
    servicesDescription: "Discover a comprehensive range of Moroccan government services designed to save time and effort",
    viewAllServices: "View All Services",
    popular: "Popular",
    
    // Footer
    quickLinks: "Quick Links",
    support: "Support",
    legal: "Legal",
    
    // Dashboard
    overview: "Overview",
    servicesManagement: "Services Management",
    faqManagement: "FAQ Management",
    security: "Security",
    users: "Users",
    inbox: "Inbox",
    settings: "Settings",
    
    // Auth
    login: "Login",
    register: "Register",
    resetPassword: "Reset Password",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    firstName: "First Name",
    lastName: "Last Name"
  }
};

export const useTranslations = (language: string = 'ar'): Translations => {
  return translations[language] || translations.ar;
};