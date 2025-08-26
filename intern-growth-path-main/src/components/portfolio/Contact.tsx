import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hnswati12@gmail.com",
      href: "mailto:hnswati12@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9019047189",
      href: "tel:+919019047189"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@swati"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "Swati"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Send Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 glass rounded-lg card-shadow hover:glow smooth-transition">
                    <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      {info.href !== "#" ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary smooth-transition">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Follow Me</h3>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass rounded-lg card-shadow hover:glow smooth-transition group"
                  >
                    <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">{social.label}</div>
                      <div className="text-muted-foreground">{social.username}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;