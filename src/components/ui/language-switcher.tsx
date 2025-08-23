import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check, ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

const languages: Language[] = [
  { code: "ar", name: "العربية", flag: "🇲🇦", dir: 'rtl' },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: 'ltr' },
  { code: "en", name: "English", flag: "🇺🇸", dir: 'ltr' }
];

interface LanguageSwitcherProps {
  variant?: 'default' | 'compact' | 'minimal';
  onLanguageChange?: (language: Language) => void;
}

const LanguageSwitcher = ({ variant = 'default', onLanguageChange }: LanguageSwitcherProps) => {
  const [currentLanguage, setCurrentLanguage] = useState("ar");

  const handleLanguageChange = (langCode: string) => {
    const language = languages.find(lang => lang.code === langCode);
    if (!language) return;
    
    setCurrentLanguage(langCode);
    
    // Update document direction and language
    document.documentElement.dir = language.dir;
    document.documentElement.lang = langCode;
    
    // Update sidebar position based on RTL/LTR
    const sidebarWrapper = document.querySelector('[data-sidebar="wrapper"]') as HTMLElement;
    if (sidebarWrapper) {
      if (language.dir === 'rtl') {
        sidebarWrapper.setAttribute('data-side', 'right');
      } else {
        sidebarWrapper.setAttribute('data-side', 'left');
      }
    }
    
    // Call optional callback
    onLanguageChange?.(language);
  };

  useEffect(() => {
    // Set initial direction and language
    const initialLanguage = languages.find(lang => lang.code === currentLanguage);
    if (initialLanguage) {
      document.documentElement.dir = initialLanguage.dir;
      document.documentElement.lang = currentLanguage;
      
      // Set initial sidebar position
      const sidebarWrapper = document.querySelector('[data-sidebar="wrapper"]') as HTMLElement;
      if (sidebarWrapper) {
        sidebarWrapper.setAttribute('data-side', initialLanguage.dir === 'rtl' ? 'right' : 'left');
      }
    }
  }, [currentLanguage]);

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  const currentLang = getCurrentLanguage();

  if (variant === 'compact') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-1 px-2">
            <span className="text-sm">{currentLang.flag}</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36 bg-popover border border-border shadow-lg z-50">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="flex items-center justify-between cursor-pointer hover:bg-accent focus:bg-accent"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">{language.flag}</span>
                <span className="text-sm">{language.name}</span>
              </div>
              {currentLanguage === language.code && (
                <Check className="h-3 w-3 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  if (variant === 'minimal') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2 text-primary-foreground">
            <Globe className="h-4 w-4" />
            <span className="text-sm">{currentLang.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40 bg-popover border border-border shadow-lg z-50">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="flex items-center justify-between cursor-pointer hover:bg-accent focus:bg-accent"
            >
              <div className="flex items-center gap-2">
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </div>
              {currentLanguage === language.code && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang.name}</span>
          <span className="sm:hidden">{currentLang.flag}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-popover border border-border shadow-lg z-50"
      >
        <DropdownMenuLabel className="text-sm font-medium">
          اختر اللغة / Choose Language
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center justify-between cursor-pointer hover:bg-accent focus:bg-accent"
          >
            <div className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </div>
            {currentLanguage === language.code && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;