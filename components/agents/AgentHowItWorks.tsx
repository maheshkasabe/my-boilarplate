"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function AgentHowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      }
    );

    const cards = document.querySelectorAll(".process-card");
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const steps = [
    {
      number: "1",
      title: "Gather Data",
      description: "Scrape information from regulatory filings, financial reports, and online sources.",
      delay: "0"
    },
    {
      number: "2",
      title: "Analyse",
      description: "Use AI to assess financial health, market position, and peer group landscape.",
      delay: "150"
    },
    {
      number: "3",
      title: "Report",
      description: "Generate a comprehensive report to understand company credibility.",
      delay: "300"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/10 to-transparent dark:from-transparent dark:via-purple-950/5 dark:to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight leading-tight text-foreground">
            How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Works</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Enter the Company number, and our AI-Platform will do the rest. Optionally, you can upload documents such as company brochures, pitch decks, business plans, financials and website details, and we can include that information to refine the report further.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Left side image - visible on medium screens and above */}
          <div className="hidden md:block absolute left-[-180px] top-[50%] translate-y-[-50%] w-[300px]">
            <div className="relative h-[350px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/2_investors_at_screen.png"
                alt="Investors reviewing data" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Process Steps - Stacked Cards */}
          <div className="space-y-12 md:ml-24 md:pl-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`process-card opacity-0 transform translate-y-16 transition-all duration-700 ease-out bg-card/60 dark:bg-card/30 backdrop-blur-md rounded-xl p-6 border border-border shadow-lg max-w-2xl mx-auto`}
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-medium text-lg shadow-md">
                    {step.number}
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-medium text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View Image */}
          <div className="md:hidden mt-12 mb-12">
            <div className="relative h-[250px] w-full max-w-[400px] mx-auto rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/2_investors_at_screen.png"
                alt="Investors reviewing data" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Make smarter, quicker, and more cost-effective corporate decisions.
            Ready to experience the future of due diligence?
          </p>
          <a href="#free-trial" className="inline-block">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 animate-button-shine hover:animate-button-shine">
              Free Trial
            </button>
          </a>
        </div>
      </div>
    </section>
  );
} 