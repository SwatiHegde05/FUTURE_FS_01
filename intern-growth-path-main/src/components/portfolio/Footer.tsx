import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hnswati12@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              Swati.dev
            </div>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer & ML Enthusiast
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:gradient-primary hover:text-primary-foreground"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by Swati
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Future Interns Portfolio Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;