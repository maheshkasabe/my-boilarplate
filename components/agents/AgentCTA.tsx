"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AgentCTA() {
  return (
    <section className="py-32 md:py-40 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <span className="inline-block bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 px-3 py-1.5 text-xs rounded-md font-medium tracking-wide">
              Request Access
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-gray-900 dark:text-white mb-6 max-w-4xl">
            Make smarter, quicker, and more<br className="hidden md:block" /> cost-effective corporate decisions
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed font-light">
            Ready to experience the future of due diligence? Request a Free Trial (no catch, no billing details required) or schedule a personalized demo with our experts.
          </p>
          
          <Link 
            href="/request-access" 
            className="bg-blue-600 hover:bg-blue-500 transition-all text-white px-8 py-3 rounded-md text-base font-medium flex items-center group"
          >
            Request Access
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
} 