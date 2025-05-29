
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ExternalLink, Code, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive and modern portfolio site showcasing skills, projects, and achievements with cutting-edge design and smooth animations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", 
      featured: true,
      projectUrl: "#",
      hideButton: true,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Cloud-Integrated Django Application",
      description: "Sophisticated web application built with Django, seamlessly integrated with cloud services for enhanced performance and scalability.",
      technologies: ["Python", "Django", "AWS"],
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", 
      featured: false,
      projectUrl: "https://clouddjango.lovable.app/",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Responsive Web Dashboard",
      description: "Interactive dashboard featuring advanced data visualization and responsive design optimized for multiple device types and screen sizes.",
      technologies: ["React", "CSS", "JavaScript"],
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", 
      featured: false,
      projectUrl: "https://dynamic-view-dashboard.lovable.app/",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 mx-auto rounded-full shadow-lg shadow-purple-400/30"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions and creative implementations that demonstrate my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col h-full transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/30">
              <div className="h-56 overflow-hidden relative">
                {project.imageSrc ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-20`}></div>
                    <img 
                      src={project.imageSrc} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-full z-30 flex items-center shadow-lg">
                        <Star className="mr-2 h-4 w-4" /> Featured
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 z-30">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-lg`}>
                        <Code className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="text-gray-600 text-xl">Project Preview</div>
                  </div>
                )}
              </div>
              
              <CardHeader className="relative pb-4 flex-shrink-0">
                <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {project.title}
                </CardTitle>
                <CardDescription className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium bg-white/10 text-gray-300 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow py-2">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </CardContent>
              
              <CardFooter className="border-t border-white/10 pt-6 flex-shrink-0">
                {!project.hideButton && (
                  project.projectUrl !== "#" ? (
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center group/btn bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-purple-300 hover:text-purple-200 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                      onClick={() => window.open(project.projectUrl, "_blank")}
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      View Project Details 
                      <ExternalLink className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center group/btn bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 text-emerald-300 hover:text-emerald-200 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300"
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      View Project Details 
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
