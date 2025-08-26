import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web App",
      description: "A full-featured online shopping platform with cart functionality, user authentication, and payment integration.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe API"],
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Machine Learning Predictor",
      description: "ML model for predicting house prices using regression algorithms with data visualization dashboard.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Machine Learning",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio showcasing projects and skills with modern UI/UX design.",
      tech: ["React.js", "Tailwind CSS", "TypeScript"],
      category: "Frontend",
      status: "Live"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team coordination features.",
      tech: ["React.js", "Firebase", "CSS3"],
      category: "Full Stack",
      status: "In Progress"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and historical data analysis.",
      tech: ["JavaScript", "API Integration", "Chart.js"],
      category: "Frontend",
      status: "Completed"
    },
    {
      title: "Database Design Project",
      description: "Comprehensive database schema design for inventory management system with optimization.",
      tech: ["SQL", "MySQL", "Database Design"],
      category: "Backend",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Completed": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "In Progress": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass card-shadow hover:glow smooth-transition group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:gradient-primary group-hover:bg-clip-text group-hover:text-transparent smooth-transition">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline-hero" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;