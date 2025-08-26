import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-8 relative">
          <div className="w-full h-full rounded-full gradient-primary p-1 glow">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold">
              S
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="gradient-primary bg-clip-text text-transparent">Swati</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            Full Stack Developer & ML Enthusiast
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative web solutions and exploring the frontiers of 
          machine learning. Ready to transform ideas into impactful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button variant="hero" size="lg" className="group">
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button variant="outline-hero" size="lg">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-12">
          <Button variant="ghost" size="icon" className="hover:gradient-primary hover:text-primary-foreground">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:gradient-primary hover:text-primary-foreground">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:gradient-primary hover:text-primary-foreground">
            <Mail className="w-6 h-6" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;