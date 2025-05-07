"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Platform",
      path: "/platform",
      title: "Platform Overview",
      description: "Our comprehensive compliance solution",
      submenu: [
        { name: "Overview", path: "/platform/overview" },
        { name: "Technology", path: "/platform/technology" },
        { name: "Integrations", path: "/platform/integrations" },
        { name: "Security", path: "/platform/security" },
        { name: "AgentQuorum", path: "/platform/agentquorum" },
        { name: "Pricing", path: "/platform/pricing" },
      ],
      image: "/images/platform-nav.jpg",
    },
    {
      name: "Our Agents",
      path: "/our-agents",
      title: "Our Agents",
      description: "Our Agents",
      submenu: [
        { name: "Due Diligence", path: "/our-agents/due-diligence" },
        { name: "Peer Group Benchmarking", path: "/our-agents/peer-group-benchmarking" },
        { name: "Bank Statement Analysis", path: "/our-agents/bank-statement-analysis" },
        { name: "Data Extraction", path: "/our-agents/data-extraction" },
        { name: "Data Insights", path: "/our-agents/data-insights" },
        { name: "IP Assessment", path: "/our-agents/ip-assessment" },
      ],
      image: "/images/our-agents-nav.jpg",
    },
    // {
    //   name: "Resources",
    //   path: "/resources",
    //   title: "Learning Resources",
    //   description: "Insights and knowledge base",
    //   submenu: [
    //     { name: "Case Studies", path: "/resources/case-studies" },
    //     { name: "White Papers", path: "/resources/white-papers" },
    //     { name: "Blog", path: "/resources/blog" },
    //     { name: "Webinars", path: "/resources/webinars" },
    //   ],
    //   image: "/images/resources-nav.jpg",
    // },
    {
      name: "Use Cases",
      path: "/use-cases",
      title: "Use Cases",
      description: "Use Cases",
      submenu: [
        { name: "Venture Capital & Private Equity", path: "/use-cases/venture-capital-private-equity" },
        { name: "Incubators & Accelerators", path: "/use-cases/incubators-accelerators" },
        { name: "Purchasing", path: "/use-cases/purchasing" },
        { name: "Corporate Due Diligence", path: "/use-cases/corporate-due-diligence" },
      ],
      image: "/images/use-cases-nav.jpg",
    },
    {
      name: "About",
      path: "/about",
      title: "About DiligentInsight",
      description: "Our mission and team",
      submenu: [
        { name: "Our Story", path: "/about#our-story" },
        { name: "Team", path: "/about#team" },
        { name: "Contact", path: "/about#contact" },
      ],
      image: "/images/about-nav.jpg",
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-sm"
          : "bg-white dark:bg-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {theme === 'dark' ? (
                <Image 
                  src="/images/DI-logo-dark.png" 
                  alt="Diligent Insight Logo" 
                  width={140} 
                  height={32} 
                  className="h-6 md:h-7 w-auto"
                  priority
                />
              ) : (
                <Image 
                  src="/images/DI-logo.png" 
                  alt="Diligent Insight Logo" 
                  width={120} 
                  height={28} 
                  className="h-6 md:h-7 w-auto"
                  priority
                />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`text-gray-600 hover:text-brand-magenta dark:text-gray-300 dark:hover:text-brand-indigo text-sm font-medium font-aharoni transition-colors py-2 px-3 rounded-md ${
                    activeDropdown === index ? "bg-gray-800/50 dark:bg-gray-100 text-brand-indigo dark:text-brand-magenta" : ""
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Hover Card */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[600px] max-w-[90vw] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-in-out z-50 transform ${
                    activeDropdown === index 
                      ? "opacity-100 translate-y-0 scale-100" 
                      : "opacity-0 translate-y-1 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Left Section: Visual Block */}
                    <div className="w-full md:w-2/5 relative bg-gradient-to-br from-brand-magenta/20 to-brand-indigo/20 dark:from-brand-magenta/30 dark:to-brand-indigo/30 p-6">
                      <div className="relative h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-aharoni">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        
                        {/* Visual element - could be an image or decorative element */}
                        <div className="mt-4 h-32 w-full rounded-lg bg-gradient-to-r from-brand-magenta/20 to-brand-indigo/20 dark:from-brand-magenta/30 dark:to-brand-indigo/30 backdrop-blur flex items-center justify-center">
                          <div className="px-4 py-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-md">
                            <span className="text-lg font-medium text-gray-800 dark:text-white font-aharoni">
                              {item.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Section: Navigation Block */}
                    <div className="w-full md:w-3/5 p-6 bg-white dark:bg-gray-900">
                      <div className="grid grid-cols-2 gap-4">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            href={subitem.path}
                            className="group"
                          >
                            <div className="p-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                              <span className="text-sm font-semibold text-gray-100 dark:text-gray-900 group-hover:text-brand-indigo dark:group-hover:text-brand-magenta transition-colors font-aharoni">
                                {subitem.name}
                              </span>
                              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Explore {subitem.name.toLowerCase()} features and capabilities
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* View all link */}
                      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <Link
                          href={item.path}
                          className="text-sm font-medium text-brand-magenta dark:text-brand-indigo hover:text-brand-magenta/80 dark:hover:text-brand-indigo/80 flex items-center font-aharoni"
                        >
                          View all {item.name}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Login & Request Access */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button variant="outline" size="sm" className="rounded-md text-sm px-4 py-1.5 h-auto border border-gray-300 dark:border-gray-700 font-medium bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-none hover:shadow-none font-aharoni">
                Log in
              </Button>
            </Link>
            {/* <Link href="/request-access"> */}
            <Link href="https://di-main.fly.dev/login">
              <Button 
                variant="brand-gradient" 
                size="sm" 
                className="rounded-md text-sm tracking-tight h-auto px-4 py-1.5 font-medium font-aharoni"
              >
                Request Access
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navItems.map((item, index) => (
              <div key={index} className="py-2">
                <Link
                  href={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-magenta dark:text-gray-300 dark:hover:text-brand-indigo rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-aharoni"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                <div className="mt-1 space-y-1 pl-6 border-l-2 border-gray-200 dark:border-gray-700 ml-3">
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      href={subitem.path}
                      className="block px-3 py-1.5 text-sm font-semibold text-gray-400 hover:text-brand-indigo dark:text-gray-600 dark:hover:text-brand-magenta hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded font-aharoni"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/login">
                <Button 
                  variant="outline" 
                  className="w-full rounded-md text-sm px-4 py-1.5 h-auto border border-gray-300 dark:border-gray-700 font-medium bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-none hover:shadow-none font-aharoni"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Button>
              </Link>
              <Link href="/request-access">
              <Button
                variant="brand-gradient"
                className="w-full rounded-md text-sm tracking-tight h-auto px-4 py-1.5 font-medium font-aharoni"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                  Request Access
              </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 