
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("4dBOjTEbgPoo_6faE");
    
    // Simple loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
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
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setContactSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-semibold text-white mb-2">Loading Portfolio</h2>
          <p className="text-gray-400">Please wait...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Contact onSubmit={handleContactSubmit} submitted={contactSubmitted} />
          <Footer />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          size="sm"
          className="rounded-full w-12 h-12 bg-emerald-500 hover:bg-emerald-600 shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;
