
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 relative z-50">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-emerald-400 text-xl font-bold flex items-center hover:text-emerald-300 transition-all duration-300"
            >
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-2 rounded-xl mr-3 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">SP</span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">
                Srinadh
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <button 
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
