
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";
import { FormData } from "@/components/Contact";

const Index = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("4dBOjTEbgPoo_6faE");
    
    // Enhanced loading with progressive reveal
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Advanced mouse tracking for dynamic effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleContactSubmit = async (e: React.FormEvent, formData: FormData) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
      
      await emailjs.send(
        "service_52r955l",
        "template_tudjcnc",
        templateParams
      );
      
      toast({
        title: "Mission Accomplished",
        description: "Your message has been successfully transmitted. Expect a strategic response within 24 hours.",
      });
      
      setContactSubmitted(true);
    } catch (error) {
      console.error("Communication protocol failed:", error);
      toast({
        title: "Transmission Error",
        description: "Network disruption detected. Please retry the operation.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <motion.div 
          className="flex flex-col items-center z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-32 h-32 mb-8">
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-emerald-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-2 rounded-full border-4 border-purple-400/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 rounded-full border-4 border-cyan-400/70"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-emerald-400/20 to-purple-400/20 backdrop-blur-xl"></div>
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
              Initializing Portfolio
            </h2>
            <p className="text-slate-400 text-lg">Enterprise-grade experience loading...</p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 25%),
          linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `
      }}
    >
      {/* Advanced Dynamic Background System */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Primary Gradient Mesh */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-transparent rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-30%] left-[-15%] w-[900px] h-[900px] bg-gradient-to-tr from-purple-500/12 via-indigo-500/8 to-transparent rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[20%] w-[500px] h-[500px] bg-gradient-to-br from-blue-500/8 via-violet-500/6 to-transparent rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Geometric Elements */}
        <motion.div 
          className="absolute top-[15%] right-[25%] w-64 h-64 bg-gradient-to-br from-amber-500/5 to-orange-500/3 rounded-3xl rotate-45 blur-sm"
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
        
        {/* Advanced Grid System */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_60%,transparent_100%)]"></div>
      </motion.div>

      {/* Main Content with Advanced Parallax */}
      <motion.div 
        className="relative z-10"
        style={{ y: parallaxY }}
      >
        <div className="backdrop-blur-[0.5px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <Contact onSubmit={handleContactSubmit} submitted={contactSubmitted} />
            <Footer />
          </div>
        </div>
      </motion.div>

      {/* Floating Action Elements */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 border-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↑
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;
