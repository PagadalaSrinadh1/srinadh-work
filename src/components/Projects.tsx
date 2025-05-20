
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive and modern portfolio site showcasing skills, projects, and achievements to recruiters.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageSrc: "", // Placeholder for project image
    },
    {
      title: "Cloud-Integrated Django Application",
      description: "Web application built with Django, integrated with cloud services for enhanced performance.",
      technologies: ["Python", "Django", "AWS"],
      imageSrc: "", // Placeholder for project image
    },
    {
      title: "Responsive Web Dashboard",
      description: "Interactive dashboard with data visualization and responsive design for multiple device types.",
      technologies: ["React", "CSS", "JavaScript"],
      imageSrc: "", // Placeholder for project image
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
        <p className="text-gray-400 mt-2">Showcasing my recent work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden flex flex-col">
            <div className="h-48 bg-gray-800 flex items-center justify-center">
              {project.imageSrc ? (
                <img src={project.imageSrc} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="text-gray-600 text-xl">Project Preview</div>
              )}
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-gray-400">
                {project.technologies.join(" • ")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-300">{project.description}</p>
            </CardContent>
            <CardFooter className="border-t border-gray-800 flex justify-between">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <div className="flex gap-4 items-center">
          <div className="text-4xl font-bold text-red-500">400+</div>
          <div className="text-lg">Hours of<br />Coding</div>
        </div>
        <div className="w-px h-16 bg-gray-800 mx-8"></div>
        <div className="flex gap-4 items-center">
          <div className="text-4xl font-bold text-red-500">10+</div>
          <div className="text-lg">Completed<br />Projects</div>
        </div>
        <div className="w-px h-16 bg-gray-800 mx-8 hidden md:block"></div>
        <div className="flex gap-4 items-center hidden md:flex">
          <div className="text-4xl font-bold text-red-500">5+</div>
          <div className="text-lg">Happy<br />Clients</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
