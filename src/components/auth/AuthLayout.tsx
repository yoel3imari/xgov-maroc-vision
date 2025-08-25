import { ReactNode } from "react";
import { Shield, CheckCircle, Globe, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Form Section - Left Side */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>

      {/* Presentation Section - Right Side */}
      <div className="flex-1 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10 flex items-center justify-center p-6 lg:p-8">
        <Card className="w-full max-w-lg p-8 bg-card/80 backdrop-blur-sm border-border/50">
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Brand */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                X-GOV
              </h2>
              <p className="text-sm font-medium text-muted-foreground">
                Digital Morocco
              </p>
            </div>

            {/* Description */}
            <p className="text-foreground/80 leading-relaxed">
              Your gateway to seamless government services powered by AI. 
              Access all Moroccan public services in one secure platform.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Secure & Verified</p>
                  <p className="text-sm text-muted-foreground">Bank-level security</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">24/7 Available</p>
                  <p className="text-sm text-muted-foreground">Access anytime</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">For All Citizens</p>
                  <p className="text-sm text-muted-foreground">Inclusive access</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};