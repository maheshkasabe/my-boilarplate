"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SmoothScrollInit from "@/components/SmoothScrollInit";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill out all fields."
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          inquiry_type: "General Inquiry" // Default inquiry type for about page form
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Your message has been sent. We'll get back to you soon!"
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || "Something went wrong. Please try again later."
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send your message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <SmoothScrollInit />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              About Diligent Insight
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              We're on a mission to transform compliance and risk management for businesses through innovative technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#our-story" className="inline-flex">
                <Button variant="pink-gradient" size="lg" className="w-full sm:w-auto">
                  Our Story
                </Button>
              </a>
              <a href="#team" className="inline-flex">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Meet Our Team
                </Button>
              </a>
              <a href="#contact" className="inline-flex">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section id="our-story" className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                  Founded by entrepreneurs passionate about transforming the investment process, Diligent Insight was born from a desire to simplify and enhance due diligence.  We set out to create a platform that not only saves time but also delivers deeper, more accurate insights for smarter corporate and investment decisions.                  </p>
                  <p>
                    Our founders, with decades of experience in regulatory compliance and technology, set out to build a platform that would bring compliance into the modern era using artificial intelligence, automation, and intuitive design.
                  </p>
                  <p>
                    Today, Diligent Insight is trusted by organizations across multiple industries to streamline their compliance processes, identify risks proactively, and make better-informed decisions.
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 text-purple-600 dark:text-purple-400 text-sm">1</span>
                        Vision
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        To create a world where compliance becomes a strategic advantage, not a burden.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-3 text-pink-600 dark:text-pink-400 text-sm">2</span>
                        Mission
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Empower organizations to manage compliance and risk more effectively through innovative technology.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400 text-sm">3</span>
                        Values
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Integrity, innovation, excellence, and customer success drive everything we do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Meet the experienced team leading our company's vision and growth
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 dark:from-purple-500/30 dark:to-pink-500/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Nigel Douglas</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Former compliance executive with 20+ years of experience in financial services and regulatory technology.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 dark:from-purple-500/30 dark:to-pink-500/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Nicholas Thomas</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                Former compliance executive with 20+ years of experience in financial services and regulatory technology.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 dark:from-purple-500/30 dark:to-pink-500/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Mahesh Kasbe</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">AI Engineer</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                Former compliance executive with 20+ years of experience in financial services and regulatory technology.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 dark:from-purple-500/30 dark:to-pink-500/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Rakesh Reddy</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">Full Stack Developer</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                Former compliance executive with 20+ years of experience in financial services and regulatory technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Have questions about our company or solutions? We'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+44 (0) 131 555 0155</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">info@diligentinsight.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Musselburgh<br />
                        Edinburgh, EH21 8QD<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                  
                  {submitStatus && (
                    <div className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit"
                      variant="pink-gradient" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Want to learn more about our platform?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                Discover how Diligent Insight can transform your compliance and risk management processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-access">
                  <Button variant="pink-gradient" size="lg" className="w-full sm:w-auto">
                    Request Demo
                  </Button>
                </Link>
                <Link href="/platform/overview">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Platform
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 