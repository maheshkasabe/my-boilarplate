"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/providers";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <footer className="bg-white dark:bg-black pt-20 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-16">
          {/* Logo Section */}
          <div>
            <Link href="/" className="inline-block">
              <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Diligent<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Insight</span>
              </div>
            </Link>
          </div>
          
          {/* Social Icons and Newsletter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            {/* Certifications */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12">
                <Image 
                  src="/images/eu-flag.svg" 
                  alt="EU Flag" 
                  width={48} 
                  height={48} 
                  className="rounded-full"
                />
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white rounded-lg">
                <span className="text-xs font-semibold text-black">SOC II</span>
              </div>
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-full">
                <span className="text-xs font-semibold text-gray-900 dark:text-white">GDPR</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <Link href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter/X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </Link>
            </div>
            
            {/* Newsletter */}
            <div className="max-w-md w-full">
              <h3 className="text-base font-normal text-gray-900 dark:text-white mb-3">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="flex-1 px-4 py-2 rounded-l bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-700"
                />
                <button className="bg-white-black hover:bg-black text-white px-4 py-2 rounded-r text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Site Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4">About</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Our Story</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Our Vision</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Our Technology</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Agent Quorum</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4">Services</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Due Diligence Reports</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Financial Assessment</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Market Analysis</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Business Intelligence</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Investment Insights</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm flex items-center">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm flex items-center">
                    Free Trial <span className="ml-1.5 text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 uppercase rounded">FREE</span>
                  </Link>
                </li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Case Studies</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Documentation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Request Demo</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Contact Support</Link></li>
              </ul>
              
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 mt-8">Legal</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Terms & Conditions</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Accessibility</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">ESG Policy</Link></li>
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