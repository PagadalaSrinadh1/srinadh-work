
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setContactSubmitted(true);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 relative">
            <div className="w-16 h-16 rounded-full border-t-2 border-b-2 border-indigo-500 animate-spin"></div>
            <div className="w-16 h-16 rounded-full border-r-2 border-l-2 border-purple-500 animate-spin absolute top-0 left-0" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
          </div>
          <div className="mt-4 text-lg font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Loading Portfolio</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] bg-purple-500 rounded-full opacity-10 blur-[100px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-pink-500 rounded-full opacity-5 blur-[80px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Contact onSubmit={handleContactSubmit} submitted={contactSubmitted} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
