
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ["Full-Stack Developer", "UI/UX Designer", "Problem Solver"];
  
  return (
    <section id="home" className="py-24 md:py-32 flex flex-col-reverse md:flex-row items-center relative min-h-[90vh] justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
      
      {/* Content side */}
      <div className={`md:w-1/2 space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div>
          <div className="inline-block mb-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 px-4 py-1 rounded-full">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-3">
            <span className="block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Hi,</span> I'm Srinadh
            </span>
          </h1>
          
          <div className="overflow-hidden h-14">
            <div className="animate-slide">
              {roles.map((role, index) => (
                <h2 key={index} className="text-3xl md:text-4xl font-bold text-white h-14 flex items-center">
                  {role}
                </h2>
              ))}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl font-medium text-gray-300 mt-2">
            Based in India
          </p>
        </div>
        
        <p className="text-gray-200 md:text-lg max-w-lg leading-relaxed">
          A passionate Computer Science Engineer with expertise in building scalable web applications 
          and exploring cloud integration with Django projects. My focus is on creating elegant solutions
          to complex problems.
        </p>
        
        <div className="flex flex-wrap gap-5 pt-4">
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-lg"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white flex items-center">
              Contact Me
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </a>
          
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-lg"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-purple-400 to-pink-400 group-hover:opacity-100"></span>
            <span className="absolute inset-0 w-full h-full border border-white/10 rounded-lg"></span>
            <span className="relative flex items-center">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
        
        <div className="flex gap-6 pt-8">
          <a
            href="https://github.com/PagadalaSrinadh1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-300 transition transform hover:scale-110"
          >
            <svg role="img" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          
          <a
            href="https://www.linkedin.com/in/pagadala-srinadh-66473b292/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-300 transition transform hover:scale-110"
          >
            <svg role="img" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className={`md:w-1/2 flex justify-center mb-8 md:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-70 blur-2xl animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-50 blur-xl"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="https://iili.io/3sISG0x.jpg" 
              alt="Srinadh Pagadala" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-0 right-0 -mb-4 -mr-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"></div>
              <div className="relative bg-black py-2 px-4 rounded-full border border-white/10">
                <span className="text-sm font-medium text-white">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        @keyframes slide {
          0%, 25% {
            transform: translateY(0);
          }
          33%, 58% {
            transform: translateY(-100%);
          }
          66%, 91% {
            transform: translateY(-200%);
          }
          100% {
            transform: translateY(-300%);
          }
        }
        
        .animate-slide {
          animation: slide 10s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
