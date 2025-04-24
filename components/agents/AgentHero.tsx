"use client";

import React from "react";

export default function AgentHero() {
  return (
    <section className="pt-40 md:pt-44 pb-8 md:pb-10 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent dark:from-transparent dark:via-purple-950/10 dark:to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 tracking-tight leading-tight text-foreground">
          AI-driven <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Due Diligence</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
          Save time, reduce costs, and gain deeper insights into businesses with Diligent Insight, the next-generation platform for automated due diligence across investments, partnerships, and corporate transactions.
        </p>
        {/* <div className="mt-12">
          <a href="#try-free" className="inline-block">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 animate-button-shine hover:animate-button-shine">
              Try Free Trial
            </button>
          </a>
        </div> */}
      </div>
    </section>
  );
} 