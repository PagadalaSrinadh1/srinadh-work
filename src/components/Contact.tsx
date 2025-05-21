
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { Check } from "lucide-react";

interface ContactProps {
  onSubmit: (e: React.FormEvent, formData: FormData) => void;
  submitted: boolean;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = ({ onSubmit, submitted }: ContactProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit(e, formData);
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="text-gray-300 mt-2">Have a project in mind? Let's talk!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <p className="text-gray-200">pagadalasrinadhprofessional@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium">Phone</h4>
                <p className="text-gray-200">+91 79896 12933</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium">Location</h4>
                <p className="text-gray-200">India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Professional Profiles</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/PagadalaSrinadh1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              
              <a
                href="https://www.linkedin.com/in/pagadala-srinadh-66473b292/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-green-500 mb-4">
                  <Check className="h-16 w-16 mx-auto" />
                </div>
                <h4 className="text-xl font-semibold">Message Sent!</h4>
                <p className="text-gray-200 mt-2">Thank you for your message. I'll get back to you soon!</p>
                <Button 
                  className="mt-6 bg-red-500 hover:bg-red-600"
                  onClick={() => window.location.reload()}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-100">Your Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required 
                      className="bg-gray-800 border-gray-700 focus:border-red-500" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-100">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="bg-gray-800 border-gray-700 focus:border-red-500" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-100">Subject</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry" 
                    required 
                    className="bg-gray-800 border-gray-700 focus:border-red-500" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-100">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..." 
                    required 
                    className="bg-gray-800 border-gray-700 focus:border-red-500 min-h-[120px]" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-red-500 hover:bg-red-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
