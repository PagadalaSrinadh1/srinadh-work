
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-red-500 text-xl font-bold flex items-center"
          >
            <span className="bg-red-500 text-white px-2 py-1 rounded-md mr-2">SP</span>
            Portfolio
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </nav>
        
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
          >
            Let's Talk
          </a>
        </div>
        
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 z-50 py-4 px-4 border-t border-gray-800">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
