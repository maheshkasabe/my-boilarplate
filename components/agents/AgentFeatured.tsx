"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/app/providers";

export default function AgentFeatured() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const { theme } = useTheme();

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Use a smoother scroll amount calculation
    const scrollAmount = direction === 'left' 
      ? -container.clientWidth * 0.55  // Reduced for smoother movement
      : container.clientWidth * 0.55;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  // Improved smooth scrolling
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleScrollEnd = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      // Smoother snap behavior
      const itemWidth = container.querySelector('.flex-none')?.clientWidth || 0;
      const scrollLeft = container.scrollLeft;
      const nearestIndex = Math.round(scrollLeft / itemWidth);
      
      // Only apply gentle snap when user stops scrolling
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Use a gentler snap with a slower animation
        container.scrollTo({
          left: nearestIndex * itemWidth,
          behavior: 'smooth'
        });
      }, 200); // Longer delay for smoother feel
    };
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scrollend', handleScrollEnd);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scrollend', handleScrollEnd);
      }
      clearTimeout(timeout);
    };
  }, []);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Calculate scroll position percentage
    const scrollableWidth = container.scrollWidth - container.clientWidth;
    const currentProgress = (container.scrollLeft / scrollableWidth) * 100;
    setScrollProgress(currentProgress);
    
    // Check if scrolled from the beginning (more than 20px)
    const isScrolledFromStart = container.scrollLeft > 20;
    setShowLeftArrow(isScrolledFromStart);
    setShowLeftFade(isScrolledFromStart);
    
    // Check if scrolled to near the end (less than 20px from end)
    const isAtEnd = Math.abs(
      container.scrollWidth - container.clientWidth - container.scrollLeft
    ) < 20;
    
    setShowRightArrow(!isAtEnd);
    setShowRightFade(!isAtEnd);
  };

  // Enable keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleScroll('left');
      } else if (e.key === 'ArrowRight') {
        handleScroll('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCardBackground = (id: number) => {
    const colors = [
      // Darker yellow-green waves - Customer Service
      "bg-gradient-to-br from-teal-800 via-green-800 to-yellow-800",
      // Darker blue-purple waves - Financial Services
      "bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900",
      // Darker purple-pink waves - General Problem Solvers
      "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
    ];
    
    return colors[(id - 1) % colors.length];
  };

  const agentData = [
    {
      id: 1,
      category: "Company Background Reports",
      title: "",
      workflows: [
        "Financial Statements Analysis",
        "Market Position Analysis",
        "Corporate History & Key Events"
      ]
    },
    {
      id: 2,
      category: "Financial Health Assessment",
      title: "",
      workflows: [
        "Financial Health Assessment",
        "Investment Risk Analysis",
        "Growth Potential Identification"
      ]
    },
    {
      id: 3,
      category: "Corporate Intelligence Reports",
      title: "",
      workflows: [
        "Business Model Analysis",
        "Partnership Evaluation",
        "M&A Target Assessment"
      ]
    },
    {
      id: 4,
      category: "Investment Decision Support",
      title: "",
      workflows: [
        "Comprehensive Investment Analysis",
        "Risk Factor Identification",
        "Investment Opportunity Analysis"
      ]
    },
    {
      id: 5,
      category: "Regulatory Compliance Checker",
      title: "",
      workflows: [
        "Compliance Documentation",
        "Regulatory Requirement Scanning",
        "Compliance Risk Assessment"
      ]
    },
    {
      id: 6,
      category: "Corporate Strategy Assessment",
      title: "",
      workflows: [
        "Strategic Direction Analysis",
        "Competitive Landscape Mapping",
        "Market Position Assessment"
      ]
    }
  ];

  return (
    <section className="pt-20 pb-36 md:pt-24 md:pb-40 bg-white dark:bg-[#0c0c0c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-5">
            <span className="inline-block bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded">
              Services
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight leading-tight text-gray-900 dark:text-white">
            AI-driven <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Due Diligence</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mb-16 font-light leading-relaxed">
          From investment evaluation to corporate intelligence, our automated platform excels at streamlining due diligence processes. Save time, reduce costs, and gain deeper insights into businesses with comprehensive reports for informed decision-making.
          </p>

          <div className="relative bg-[#e0e0e0] dark:bg-[#111111] rounded-2xl p-6 shadow-md overflow-hidden dark:border dark:border-white/10 dark:backdrop-blur-sm">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto overflow-y-hidden gap-5  hide-scrollbar"
              onScroll={checkScrollPosition}
            >
              {agentData.map((agent) => (
                <div 
                  key={agent.id} 
                  className="flex-none snap-start" 
                  style={{ 
                    width: 'calc(100% / 3.5)', 
                    scrollSnapAlign: 'start' 
                  }}
                >
                  <div className="rounded-xl overflow-hidden h-[500px] bg-black transition duration-300 shadow-md flex flex-col dark:border dark:border-white/5">
                    {/* Colorful wave pattern */}
                    <div className="h-[220px] relative overflow-hidden">
                      <div className={`absolute inset-0 ${getCardBackground(agent.id)}`}>
                        <div className="absolute top-0 left-0 w-full h-full">
                          {/* Curved abstract shapes */}
                          <div className="absolute top-[10%] left-[10%] w-[90%] h-[90%] rounded-full bg-white/10 blur-3xl transform rotate-12"></div>
                          <div className="absolute top-[20%] right-[15%] w-[80%] h-[60%] rounded-full bg-white/10 blur-2xl transform -rotate-6"></div>
                          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-white/15 blur-2xl"></div>
                          
                          {/* Dark overlay for deeper shading */}
                          <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                      </div>
                      
                      {/* Category badge */}
                      <div className="absolute top-6 left-6 z-10">
                        <div className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded">
                          {agent.category}
                        </div>
                      </div>

                      {/* Blur effect at the boundary */}
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent backdrop-blur-sm"></div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-gray-500 uppercase text-xs tracking-wider font-medium mb-4">
                        WORKFLOWS
                      </div>
                      <div className="space-y-3 flex-grow">
                        {agent.workflows.map((workflow, index) => (
                          <div 
                            key={index} 
                            className="bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors duration-200 py-3 px-4 rounded-lg text-gray-300 text-xs dark:border dark:border-white/5"
                          >
                            {workflow}
                          </div>
                        ))}
                        {agent.workflows.length === 3 && (
                          <div className="invisible bg-[#0d0d0d] py-3 px-4 rounded-lg text-gray-300 text-xs">
                            Placeholder
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Edge fading effects */}
            {showLeftFade && (
              <div className="absolute top-6 bottom-6 left-6 w-24 bg-gradient-to-r from-[#e0e0e0] dark:from-[#111111] to-transparent pointer-events-none z-20"></div>
            )}
            {showRightFade && (
              <div className="absolute top-6 bottom-6 right-6 w-24 bg-gradient-to-l from-[#e0e0e0] dark:from-[#111111] to-transparent pointer-events-none z-20"></div>
            )}
            
            {/* Navigation Arrows */}
            {showLeftArrow && (
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 hidden md:block z-20">
                <button 
                  className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/60 text-gray-800 dark:text-white flex items-center justify-center shadow-md transition duration-300 hover:bg-white dark:hover:bg-black focus:outline-none border border-gray-200 dark:border-white/10"
                  onClick={() => handleScroll('left')}
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
            )}
            
            {showRightArrow && (
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 hidden md:block z-20">
                <button 
                  className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/60 text-gray-800 dark:text-white flex items-center justify-center shadow-md transition duration-300 hover:bg-white dark:hover:bg-black focus:outline-none border border-gray-200 dark:border-white/10"
                  onClick={() => handleScroll('right')}
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 