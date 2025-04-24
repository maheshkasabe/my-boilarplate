"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { useTheme } from "@/app/providers";

export default function AgentSearch() {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <section className="pt-4 pb-20 md:pt-8 md:pb-28 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto relative">
          <div 
            className={`${
              isFocused 
                ? "bg-black/95 text-white dark:bg-black/90 border-purple-400 dark:border-purple-400/80" 
                : "bg-black/85 text-white dark:bg-black/80 border-white/20 dark:border-white/15"
            } border-2 rounded-full flex items-center justify-center px-6 py-4 shadow-xl backdrop-blur-md transition-all duration-300`}
          >
            <div className="flex items-center justify-center w-full max-w-lg mx-auto">
              <Search className={`h-6 w-6 ${isFocused ? "text-purple-400" : "text-gray-300"} mr-4 transition-colors duration-300`} />
              <input
                type="text"
                placeholder="Search company reports or enter company number"
                className="bg-transparent border-none w-full text-white focus:outline-none placeholder-gray-400 text-base font-light tracking-wide"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
          </div>
          
          {/* Enhanced glow effect */}
          <div className={`absolute inset-0 -z-10 rounded-full bg-gradient-to-r ${
            isFocused 
              ? "from-purple-500/30 via-pink-500/15 to-blue-500/30 opacity-70" 
              : "from-purple-500/15 via-transparent to-blue-500/15 opacity-40"
          } filter blur-xl transition-opacity duration-300`}></div>
        </div>
      </div>
    </section>
  );
} 