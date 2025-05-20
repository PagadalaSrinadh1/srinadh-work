
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "Python", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Django", level: 75 },
    { name: "React", level: 70 },
  ];

  const areas = [
    { title: "Full-Stack Web Development", description: "Building responsive and dynamic web applications using modern technologies" },
    { title: "Building Scalable Web Applications", description: "Designing architecture for scalable and maintainable web applications" },
    { title: "Cloud Integration", description: "Exploring cloud integration with Django projects for enhanced performance" }
  ];

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
        <p className="text-gray-400 mt-2">Technologies and expertise I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <Card key={skill.name} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-red-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-400 mt-1">{skill.level}%</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Specific Areas of Interest</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-400">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
