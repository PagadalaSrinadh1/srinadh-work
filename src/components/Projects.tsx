
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive and modern portfolio site showcasing skills, projects, and achievements to recruiters.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", 
      featured: true,
      projectUrl: "#", // Placeholder URL
      hideButton: true, // Flag to hide the button
    },
    {
      title: "Cloud-Integrated Django Application",
      description: "Web application built with Django, integrated with cloud services for enhanced performance.",
      technologies: ["Python", "Django", "AWS"],
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", 
      featured: false,
      projectUrl: "https://clouddjango.lovable.app/",
    },
    {
      title: "Responsive Web Dashboard",
      description: "Interactive dashboard with data visualization and responsive design for multiple device types.",
      technologies: ["React", "CSS", "JavaScript"],
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", 
      featured: false,
      projectUrl: "https://dynamic-view-dashboard.lovable.app/",
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Showcasing innovative solutions and creative implementations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 overflow-hidden flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
              <div className="h-48 overflow-hidden relative">
                {project.imageSrc ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                    <img src={project.imageSrc} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-20 flex items-center">
                        <Star className="mr-1 h-3 w-3" /> Featured
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="text-gray-600 text-xl">Project Preview</div>
                  </div>
                )}
              </div>
              <CardHeader className="relative pb-2">
                <div className="absolute left-0 top-0 w-full h-12 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
                <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-400 flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium bg-gray-800 text-gray-300 px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow py-2">
                <p className="text-gray-300">{project.description}</p>
              </CardContent>
              <CardFooter className="border-t border-gray-800/50 pt-4">
                {!project.hideButton && (
                  project.projectUrl !== "#" ? (
                    <Button 
                      variant="ghost" 
                      className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/30 w-full justify-center group"
                      onClick={() => window.open(project.projectUrl, "_blank")}
                    >
                      View Project Details 
                      <ExternalLink className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/30 w-full justify-center group">
                      View Project Details 
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 mt-20 bg-gradient-to-r from-gray-900 to-black p-10 rounded-2xl border border-gray-800">
          <div className="flex gap-4 items-center">
            <div className="text-5xl font-bold bg-gradient-to-br from-blue-500 to-indigo-500 bg-clip-text text-transparent">400+</div>
            <div className="text-lg text-gray-300">Hours of<br />Coding</div>
          </div>
          <div className="hidden md:block w-px h-20 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>
          <div className="flex gap-4 items-center">
            <div className="text-5xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">10+</div>
            <div className="text-lg text-gray-300">Completed<br />Projects</div>
          </div>
          <div className="hidden md:block w-px h-20 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>
          <div className="flex gap-4 items-center">
            <div className="text-5xl font-bold bg-gradient-to-br from-pink-500 to-red-500 bg-clip-text text-transparent">5+</div>
            <div className="text-lg text-gray-300">Happy<br />Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
