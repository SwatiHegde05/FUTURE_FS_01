import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "5+", icon: Code },
    { label: "Technologies", value: "8+", icon: Database },
    { label: "Learning Hours", value: "200+", icon: Brain },
    { label: "Passion Level", value: "100%", icon: Globe },
  ];

  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Python", 
    "Machine Learning", "SQL", "Git", "Node.js", "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer ready to make an impact in the tech world
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Fresh Graduate, Endless Possibilities</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a recent graduate with a strong foundation in full-stack development and machine learning, 
                I bring fresh perspectives and cutting-edge knowledge to every project. My journey spans from 
                creating responsive web applications to exploring AI-driven solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While I may be new to the professional world, my dedication to continuous learning and 
                hands-on project experience make me ready to contribute meaningfully to innovative teams.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="glass card-shadow hover:glow smooth-transition">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 gradient-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;