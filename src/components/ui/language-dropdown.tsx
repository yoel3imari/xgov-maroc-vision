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
import { Globe, Check } from "lucide-react";

const LanguageDropdown = () => {
  const [currentLanguage, setCurrentLanguage] = useState("ar");

  const languages = [
    { code: "ar", name: "العربية", flag: "🇲🇦" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇺🇸" }
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    
    // Update document direction based on language
    document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = langCode;
  };

  useEffect(() => {
    // Set initial direction
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
  }, []);

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{getCurrentLanguage().name}</span>
          <span className="sm:hidden">{getCurrentLanguage().flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-background border border-border shadow-lg z-50"
      >
        <DropdownMenuLabel className="text-sm font-medium">
          اختر اللغة
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center justify-between cursor-pointer hover:bg-accent"
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

export default LanguageDropdown;