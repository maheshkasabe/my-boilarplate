"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/providers";
import { useState } from "react";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      // In a real app, this would send the email to a backend service
      console.log("Subscribing email:", email);
      setSubscribed(true);
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };
  
  return (
    <footer className="bg-white dark:bg-black pt-20 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-16">
          {/* Logo Section */}
          <div>
            <Link href="/" className="inline-block">
              {theme === 'dark' ? (
                <Image 
                  src="/images/DI-logo-dark.png" 
                  alt="Diligent Insight Logo" 
                  width={200} 
                  height={45} 
                  className="h-10 md:h-11 w-auto"
                  priority
                />
              ) : (
                <Image 
                  src="/images/DI-logo.png" 
                  alt="Diligent Insight Logo" 
                  width={160} 
                  height={30} 
                  className="h-8 md:h-9 w-auto"
                  priority
                />
              )}
            </Link>
          </div>
          
          {/* Social Icons and Newsletter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            {/* Certifications */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12">
                <Image 
                  src="/images/EU-Flag.avif" 
                  alt="EU Flag" 
                  width={48} 
                  height={48} 
                  className="rounded-full"
                />
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <Link href="https://www.linkedin.com/company/diligent-insight" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </Link>
            </div>
            
            {/* Newsletter */}
            <div className="max-w-md w-full">
              <h3 className="text-base font-aharoni font-normal text-gray-900 dark:text-white mb-3">Subscribe to our newsletter</h3>
              {subscribed ? (
                <div className="py-2 px-4 bg-brand-lavender/30 dark:bg-brand-magenta/20 text-brand-magenta dark:text-brand-lavender rounded text-sm">
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input 
                    type="email" 
                    placeholder="name@email.com" 
                    className="flex-1 px-4 py-2 rounded-l bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta dark:focus:ring-brand-indigo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-brand-gradient hover:from-brand-magenta/90 hover:to-brand-indigo/90 text-white px-4 py-2 rounded-r text-sm font-medium transition duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Site Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-gray-900 dark:text-white font-aharoni font-medium mb-4">About</h4>
              <ul className="space-y-2.5">
                <li><Link href="/about#our-story" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Our Story</Link></li>
                <li><Link href="/about#our-story" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Our Vision</Link></li>
                <li><Link href="/platform/technology" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Our Technology</Link></li>
                <li><Link href="/platform/agentquorum" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Agent Quorum</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 dark:text-white font-aharoni font-medium mb-4">Services</h4>
              <ul className="space-y-2.5">
                <li><Link href="/solutions/due-diligence" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Due Diligence Reports</Link></li>
                <li><Link href="/solutions/financial-risk-assessment" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Financial Risk Assessment</Link></li>
                <li><Link href="/solutions/financial-assessment" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Financial Assessment</Link></li>
                <li><Link href="/solutions/compliance" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Compliance Monitoring</Link></li>
              </ul>
            </div>

            {/* <div>
              <h4 className="text-gray-900 dark:text-white font-aharoni font-medium mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm flex items-center">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm flex items-center">
                    Free Trial <span className="ml-1.5 text-xs px-1 py-0.5 bg-brand-lavender/30 dark:bg-brand-magenta/20 text-brand-magenta dark:text-brand-lavender uppercase rounded">FREE</span>
                  </Link>
                </li>
                <li><Link href="#" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Case Studies</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Documentation</Link></li>
              </ul>
            </div> */}

            <div>
              <h4 className="text-gray-900 dark:text-white font-aharoni font-medium mb-4">Contact</h4>
              <ul className="space-y-2.5">
                <li><Link href="/request-access" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Request Demo</Link></li>
                <li><Link href="/about#contact" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Contact Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 dark:text-white font-aharoni font-medium mb-4">Legal</h4>
               <ul className="space-y-2.5">
                <li><Link href="/legal/terms" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Terms & Conditions</Link></li>
                <li><Link href="/legal/privacy" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Privacy Policy</Link></li>
                <li><Link href="/legal/accessibility" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">Accessibility</Link></li>
                <li><Link href="/legal/esg" className="text-gray-600 hover:text-brand-magenta dark:text-gray-400 dark:hover:text-brand-indigo text-sm">ESG Policy</Link></li>
               </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-500">© 2025 Diligent Insight Ltd. | Registered in Scotland, SC816340</p>
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${theme === 'light' ? 'text-gray-900' : 'text-gray-600'}`}>Light</span>
              <button 
                className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center p-1 cursor-pointer"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${theme === 'dark' ? 'translate-x-4' : 'translate-x-0'}`}></div>
              </button>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Dark</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 