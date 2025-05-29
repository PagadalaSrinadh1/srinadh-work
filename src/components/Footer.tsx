
import { Link } from "react-router-dom";
import { Heart, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Brand Section */}
            <div className="text-center lg:text-left">
              <Link to="/" className="inline-flex items-center text-2xl font-bold text-white hover:text-emerald-400 transition-all duration-300 group">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-2 rounded-xl mr-3 shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                  SP
                </span> 
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </Link>
              <div className="mt-3 flex items-center justify-center lg:justify-start text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>India</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#home" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#skills" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 font-medium relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#projects" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 font-medium relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="mailto:pagadalasrinadhprofessional@gmail.com"
                className="group bg-white/10 hover:bg-emerald-500/20 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
              </a>
              
              <a
                href="https://github.com/PagadalaSrinadh1"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-purple-500/20 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Github className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/pagadala-srinadh-66473b292/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-blue-500/20 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="text-center mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <span>&copy; {currentYear} Srinadh Pagadala. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
