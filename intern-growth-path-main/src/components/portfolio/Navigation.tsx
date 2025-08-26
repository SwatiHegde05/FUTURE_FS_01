import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass backdrop-blur-md border-b border-border/50" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#")}
            className="text-2xl font-bold gradient-primary bg-clip-text text-transparent hover:scale-105 smooth-transition"
          >
            Swati.dev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground smooth-transition relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary group-hover:w-full smooth-transition"></span>
              </button>
            ))}
            <Button variant="outline-hero" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground smooth-transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass backdrop-blur-md border-b border-border/50 py-4">
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-foreground smooth-transition py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="outline-hero" size="sm" className="self-start">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;