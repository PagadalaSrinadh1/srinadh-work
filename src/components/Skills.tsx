
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, color: "from-blue-500 to-indigo-600", icon: "🐍" },
    { name: "HTML", level: 95, color: "from-orange-500 to-red-600", icon: "🌐" },
    { name: "CSS", level: 85, color: "from-pink-500 to-rose-600", icon: "🎨" },
    { name: "JavaScript", level: 80, color: "from-yellow-500 to-amber-600", icon: "⚡" },
    { name: "Django", level: 75, color: "from-green-500 to-teal-600", icon: "🔥" },
    { name: "React", level: 70, color: "from-purple-500 to-indigo-600", icon: "⚛️" },
  ];

  const areas = [
    { 
      title: "Full-Stack Web Development", 
      description: "Building responsive and dynamic web applications using modern technologies and best practices", 
      icon: "💻",
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      title: "Scalable Architecture", 
      description: "Designing robust architecture for scalable and maintainable web applications", 
      icon: "🏗️",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      title: "Cloud Integration", 
      description: "Exploring cloud services and deployment strategies for enhanced performance", 
      icon: "☁️",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Technical Expertise
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mx-auto rounded-full shadow-lg shadow-emerald-400/30"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Specialized skills and cutting-edge technologies I've mastered throughout my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-400/10 overflow-hidden hover:-translate-y-2">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-2xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      {skill.level}%
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-700/50 rounded-full h-3 mb-2 overflow-hidden backdrop-blur-sm">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ 
                        width: `${skill.level}%`,
                        boxShadow: `0 0 20px rgba(16, 185, 129, 0.3)`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    Proficiency Level
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Specialized Focus Areas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <Card key={index} className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-400/10 overflow-hidden hover:-translate-y-3">
                <CardContent className="p-8 relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${area.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {area.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors flex-shrink-0">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed flex-grow">
                      {area.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
