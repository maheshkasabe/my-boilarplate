"use client";

import { useEffect } from "react";
import { initSmoothScroll } from "@/app/utils/smoothScroll";

export default function SmoothScrollInit() {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Create a fallback for when the page loads with a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Small delay to ensure the page has fully loaded
        setTimeout(() => {
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 0;
          
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  // This component doesn't render anything visible
  return null;
} 