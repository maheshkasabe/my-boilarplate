"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/app/providers";

export default function AgentFeatured() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Use a more precise scroll amount calculation
    const scrollAmount = direction === 'left' 
      ? -container.clientWidth * 0.65  // Reduced for smoother movement
      : container.clientWidth * 0.65;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    // Add subtle animation to cards
    const cards = container.querySelectorAll('.card-animate');
    cards.forEach((card, index) => {
      const delay = index * 50; // Staggered delay
      setTimeout(() => {
        // Add a temporary class for animation
        card.classList.add('animate-slide');
        // Remove the class after animation completes
        setTimeout(() => card.classList.remove('animate-slide'), 500);
      }, delay);
    });
  };

  // Enable smooth scrolling with debounce to ensure smoother animation
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleScrollEnd = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      // Find the nearest snap point
      const itemWidth = container.querySelector('.flex-none')?.clientWidth || 0;
      const scrollLeft = container.scrollLeft;
      const nearestIndex = Math.round(scrollLeft / itemWidth);
      
      // Smooth scroll to the nearest snap point
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        container.scrollTo({
          left: nearestIndex * itemWidth,
          behavior: 'smooth'
        });
      }, 150); // Small delay for smoother feel
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
    
    // Check if scrolled to the beginning
    setShowLeftArrow(container.scrollLeft > 20);
    
    // Check if scrolled to the end
    const isAtEnd = Math.abs(
      container.scrollWidth - container.clientWidth - container.scrollLeft
    ) < 20;
    
    setShowRightArrow(!isAtEnd);
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

  const agentData = [
    {
      id: 1,
      category: "AUTOMATED DUE DILIGENCE",
      title: "Company Background Reports",
      workflows: [
        "Regulatory Filings Analysis",
        "Financial Reports Assessment",
        "Market Position Overview",
        "Corporate Structure Review"
      ],
      image: "/images/agent-card-1.jpg"
    },
    {
      id: 2,
      category: "DATA EXTRACTION",
      title: "Financial Health Assessment",
      workflows: [
        "Financial Data Extraction",
        "Investment Risk Analysis",
        "Peer Group Comparison",
        "Growth Trend Identification"
      ],
      image: "/images/agent-card-2.jpg"
    },
    {
      id: 3,
      category: "BUSINESS ANALYSIS",
      title: "Corporate Intelligence Reports",
      workflows: [
        "Business Credibility Analysis",
        "Partnership Evaluation",
        "M&A Target Assessment",
        "Supply Chain Validation"
      ],
      image: "/images/agent-card-3.jpg"
    },
    {
      id: 4,
      category: "INVESTMENT INSIGHTS",
      title: "Investment Decision Support",
      workflows: [
        "Comprehensive Portfolio Analysis",
        "Risk Factor Identification",
        "Market Opportunity Assessment",
        "Investment Timeline Planning" 
      ],
      image: "/images/agent-card-1.jpg"
    },
    {
      id: 5,
      category: "COMPLIANCE",
      title: "Regulatory Compliance Checker",
      workflows: [
        "Compliance Documentation",
        "Regulatory Requirement Scanning",
        "Compliance Risk Assessment",
        "Governance Analysis"
      ],
      image: "/images/agent-card-2.jpg"
    },
    {
      id: 6,
      category: "STRATEGIC ANALYSIS",
      title: "Corporate Strategy Assessment",
      workflows: [
        "Strategic Direction Analysis",
        "Competitive Landscape Mapping",
        "Market Position Validation",
        "Growth Potential Assessment"
      ],
      image: "/images/agent-card-3.jpg"
    }
  ];

  return (
    <section className="pt-20 pb-36 md:pt-24 md:pb-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-5">
          <span className="inline-block bg-secondary text-primary px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded">
            SERVICES
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight leading-tight text-foreground">
          AI-driven <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Due Diligence</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-4xl mb-16 font-light leading-relaxed">
          From investment evaluation to corporate intelligence, our automated platform excels at streamlining due diligence processes.
          Save time, reduce costs, and gain deeper insights into businesses with comprehensive reports for informed decision-making.
        </p>

        <div className="relative bg-secondary/70 dark:bg-secondary/20 backdrop-blur-sm rounded-xl p-5 border border-border shadow-xl">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-5 pb-6 hide-scrollbar snap-x snap-mandatory scroll-pl-5"
            onScroll={checkScrollPosition}
          >
            {agentData.map((agent) => (
              <div key={agent.id} className="flex-none w-[85%] md:w-[45%] lg:w-[30%] snap-start" style={{ scrollSnapAlign: 'start' }}>
                <div className="bg-card/90 dark:bg-card/90 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden h-full border border-border transition duration-300 card-animate shadow-lg">
                  <div className="h-52 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0">
                      <Image 
                        src={agent.image}
                        alt={`${agent.title} background`}
                        width={400}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-primary/80 dark:bg-primary/80 backdrop-blur-md text-primary-foreground dark:text-primary-foreground text-xs px-3 py-1 rounded-sm">
                      {agent.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-medium mb-1 tracking-tight text-foreground">
                      {agent.title}
                    </h3>
                    
                    <div className="mt-3 mb-2">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">CAPABILITIES</span>
                    </div>

                    <ul className="space-y-0">
                      {agent.workflows.map((workflow, index) => (
                        <li 
                          key={index} 
                          className="text-sm text-muted-foreground border-t border-border py-2 transition-colors duration-200 hover:text-foreground px-1 cursor-pointer"
                        >
                          {workflow}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Edge fading effect */}
          <div className="absolute top-5 bottom-6 left-5 w-12 bg-gradient-to-r from-secondary/90 dark:from-secondary/90 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-5 bottom-6 right-5 w-12 bg-gradient-to-l from-secondary/90 dark:from-secondary/90 to-transparent pointer-events-none z-10"></div>
          
          {/* Scroll Progress Bar */}
          <div className="w-full h-0.5 bg-muted dark:bg-muted rounded-full mt-4 mb-2 overflow-hidden relative">
            <div 
              ref={progressBarRef}
              className="absolute h-full bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full transition-all duration-200 ease-out scroll-progress"
              style={{ 
                width: '20%', 
                left: `${Math.min(scrollProgress, 80)}%` 
              }}
            ></div>
          </div>
          
          {showLeftArrow && (
            <div className="absolute top-1/2 left-0 -ml-4 transform -translate-y-1/2 hidden md:block z-10">
              <button 
                className="w-10 h-10 rounded-full bg-card/40 dark:bg-card/40 text-foreground dark:text-foreground flex items-center justify-center shadow-xl backdrop-blur-lg transition duration-300 hover:bg-card/60 dark:hover:bg-card/60 focus:outline-none border border-border"
                onClick={() => handleScroll('left')}
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
          )}
          
          {showRightArrow && (
            <div className="absolute top-1/2 right-0 -mr-4 transform -translate-y-1/2 hidden md:block z-10">
              <button 
                className="w-10 h-10 rounded-full bg-card/40 dark:bg-card/40 text-foreground dark:text-foreground flex items-center justify-center shadow-xl backdrop-blur-lg transition duration-300 hover:bg-card/60 dark:hover:bg-card/60 focus:outline-none border border-border"
                onClick={() => handleScroll('right')}
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 