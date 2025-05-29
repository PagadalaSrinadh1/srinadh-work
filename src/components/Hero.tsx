
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Code2 } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    "Full-Stack Developer",
    "Python Developer", 
    "Web Developer",
    "Django Developer"
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
      label: "Email"
    },
    { 
      href: "https://github.com/PagadalaSrinadh1", 
      icon: Github, 
      label: "GitHub"
    },
    { 
      href: "https://www.linkedin.com/in/pagadala-srinadh-66473b292/", 
      icon: Linkedin, 
      label: "LinkedIn"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-emerald-300 text-sm">Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Srinadh
                </span>
              </motion.h1>
              
              {/* Dynamic Role */}
              <div className="h-16 flex items-center">
                <motion.h2 
                  key={currentRole}
                  className="text-2xl lg:text-3xl font-semibold text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRole]}
                </motion.h2>
              </div>

              {/* Location */}
              <motion.div 
                className="flex items-center space-x-2 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <MapPin className="h-4 w-4" />
                <span>Based in India</span>
              </motion.div>
            </div>
            
            {/* Description */}
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Passionate developer focused on creating modern web applications 
              with clean code and user-friendly experiences. Specialized in 
              Python, Django, and modern web technologies.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center">
                  <Code2 className="mr-2 h-4 w-4" />
                  View Projects
                </span>
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-4 pt-6"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <span className="text-gray-400">Connect:</span>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <link.icon className="h-5 w-5 text-gray-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-emerald-500/20 shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://iili.io/3sISG0x.jpg" 
                  alt="Srinadh Pagadala - Web Developer" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Status Dot */}
              <motion.div 
                className="absolute bottom-4 right-4 bg-emerald-400 w-6 h-6 rounded-full border-4 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
