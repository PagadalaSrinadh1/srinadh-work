
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Code2, Rocket, Zap } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    { title: "Senior Full-Stack Engineer", icon: "💻", color: "from-emerald-400 to-cyan-400" },
    { title: "Cloud Architecture Specialist", icon: "☁️", color: "from-blue-400 to-indigo-400" },
    { title: "Enterprise Solutions Designer", icon: "🏗️", color: "from-purple-400 to-pink-400" },
    { title: "DevOps Innovation Leader", icon: "⚡", color: "from-amber-400 to-orange-400" }
  ];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { 
      href: "mailto:pagadalasrinadhprofessional@gmail.com", 
      icon: Mail, 
      label: "Email",
      color: "hover:bg-red-500/20 hover:shadow-red-500/25 hover:text-red-400"
    },
    { 
      href: "https://github.com/PagadalaSrinadh1", 
      icon: Github, 
      label: "GitHub",
      color: "hover:bg-purple-500/20 hover:shadow-purple-500/25 hover:text-purple-400"
    },
    { 
      href: "https://www.linkedin.com/in/pagadala-srinadh-66473b292/", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "hover:bg-blue-500/20 hover:shadow-blue-500/25 hover:text-blue-400"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-emerald-300 text-sm font-medium tracking-wide">Available for Elite Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                  <span className="block text-white mb-2">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Srinadh
                    </span>
                  </span>
                </h1>
              </motion.div>
              
              {/* Dynamic Role Animation */}
              <div className="h-24 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRole}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -50, rotateX: 90 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <div className="text-4xl">{roles[currentRole].icon}</div>
                    <h2 className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${roles[currentRole].color} bg-clip-text text-transparent`}>
                      {roles[currentRole].title}
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Location */}
              <motion.div 
                className="flex items-center space-x-2 text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <MapPin className="h-5 w-5" />
                <span className="text-lg">Based in India • Remote Global Collaborator</span>
              </motion.div>
            </div>
            
            {/* Description */}
            <motion.p 
              className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Architecting next-generation digital solutions with{" "}
              <span className="text-emerald-400 font-semibold">15+ years</span> of enterprise expertise. 
              Specialized in scalable cloud infrastructure, advanced full-stack development, and 
              leading high-performance engineering teams.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center">
                  <Rocket className="mr-3 h-5 w-5" />
                  Let's Collaborate
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-4 bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-emerald-400/50 text-white font-semibold rounded-2xl backdrop-blur-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center">
                  <Code2 className="mr-3 h-5 w-5" />
                  View Portfolio
                  <Zap className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-4 pt-8"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <span className="text-slate-400 font-medium">Connect:</span>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 transform hover:scale-110 ${link.color}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Profile Section */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated Background Rings */}
              <motion.div 
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-purple-400/20 blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute -inset-4 rounded-full border-2 border-gradient-to-r from-emerald-400/30 to-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile Image */}
              <motion.div 
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-purple-500/20"></div>
                <img 
                  src="https://iili.io/3sISG0x.jpg" 
                  alt="Srinadh Pagadala - Senior Full-Stack Engineer" 
                  className="w-full h-full object-cover"
                />
                
                {/* Status Indicator */}
                <motion.div 
                  className="absolute bottom-6 right-6 bg-emerald-400 w-8 h-8 rounded-full border-4 border-white shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              {/* Floating Tech Icons */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Code2 className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [5, -5, 5],
                  rotate: [0, -5, 0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2 
                }}
              >
                <Rocket className="h-8 w-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
