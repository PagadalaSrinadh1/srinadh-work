
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, color: "from-cyan-500 to-blue-500" },
    { name: "HTML", level: 95, color: "from-orange-500 to-amber-500" },
    { name: "CSS", level: 85, color: "from-pink-500 to-purple-500" },
    { name: "JavaScript", level: 80, color: "from-yellow-500 to-amber-500" },
    { name: "Django", level: 75, color: "from-green-500 to-emerald-500" },
    { name: "React", level: 70, color: "from-indigo-500 to-violet-500" },
  ];

  const areas = [
    { title: "Full-Stack Web Development", description: "Building responsive and dynamic web applications using modern technologies", icon: "💻" },
    { title: "Building Scalable Web Applications", description: "Designing architecture for scalable and maintainable web applications", icon: "🔄" },
    { title: "Cloud Integration", description: "Exploring cloud integration with Django projects for enhanced performance", icon: "☁️" }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Specialized skills and technologies I've mastered throughout my journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden group">
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                    <span>{skill.name}</span>
                    <span className="text-sm font-normal bg-gradient-to-r from-blue-500 to-purple-500 text-white py-1 px-2 rounded-full">{skill.level}%</span>
                  </h3>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 mb-1 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%`, animation: `growWidth 1.5s ease-out ${index * 0.2}s` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">Specialized Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{area.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{area.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes growWidth {
          from { width: 0; }
          to { width: ${100}%; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
