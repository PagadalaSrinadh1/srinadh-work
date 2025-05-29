
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg transition-all duration-300 ${
          scrolled ? 'bg-gray-900/95' : 'bg-gray-900/80'
        }`}>
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Brand */}
              <Link 
                to="/" 
                className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-white">Srinadh</h1>
                  <p className="text-xs text-gray-400">Developer</p>
                </div>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-gray-300" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-300" />
                )}
              </button>
            </div>
            
            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div
                className="md:hidden mt-4 pt-4 border-t border-white/10"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
              >
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
