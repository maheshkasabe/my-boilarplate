"use client";

import React from "react";
import { Search } from "lucide-react";
import { useTheme } from "@/app/providers";

export default function AgentSearch() {
  const { theme } = useTheme();
  
  return (
    <section className="pt-1 pb-16 md:pt-2 md:pb-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto relative">
          <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 border-opacity-50 rounded-md flex items-center px-4 py-4 shadow-sm">
            <Search className="h-5 w-5 text-gray-500 dark:text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search company reports or enter company number"
              className="bg-transparent border-none w-full text-gray-900 dark:text-white focus:outline-none placeholder-gray-500 text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 