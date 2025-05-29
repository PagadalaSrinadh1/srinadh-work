
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
import emailjs from "@emailjs/browser";
import { FormData } from "@/components/Contact";

const Index = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("4dBOjTEbgPoo_6faE");
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent, formData: FormData) => {
    e.preventDefault();
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
      
      // Send the email using EmailJS
      await emailjs.send(
        "service_52r955l", // Service ID
        "template_tudjcnc", // Template ID
        templateParams
      );
      
      // Show success toast notification
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setContactSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 relative">
            <div className="w-20 h-20 rounded-full border-t-4 border-b-4 border-emerald-400 animate-spin"></div>
            <div className="w-20 h-20 rounded-full border-r-4 border-l-4 border-purple-400 animate-spin absolute top-0 left-0" style={{animationDirection: 'reverse', animationDuration: '0.6s'}}></div>
            <div className="w-20 h-20 rounded-full border-2 border-pink-400 opacity-30 animate-pulse absolute top-0 left-0"></div>
          </div>
          <div className="mt-6 text-xl font-semibold bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Loading Portfolio
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-100 relative overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Primary gradient orbs */}
        <div className="absolute top-[-20%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-25%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/15 to-pink-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] left-[15%] w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Secondary floating elements */}
        <div className="absolute top-[10%] left-[70%] w-[200px] h-[200px] bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-full blur-[80px] animate-float"></div>
        <div className="absolute bottom-[40%] right-[20%] w-[300px] h-[300px] bg-gradient-to-br from-rose-500/10 to-pink-500/5 rounded-full blur-[90px] animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Content with improved backdrop */}
      <div className="relative z-10 backdrop-blur-[1px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
