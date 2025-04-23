"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Diligent<span className="text-purple-600 dark:text-pink-500">Insight</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/solutions"
              className="text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-pink-400 text-sm font-medium transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-pink-400 text-sm font-medium transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-pink-400 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/platform"
              className="text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-pink-400 text-sm font-medium transition-colors"
            >
              Platform
            </Link>
          </nav>

          {/* Login & Request Access */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button variant="outline" size="sm" className="rounded-md text-sm px-4 py-1.5 h-auto border border-gray-300 dark:border-gray-700 font-medium bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-none hover:shadow-none">
                Log in
              </Button>
            </Link>
            <Link href="/request-access">
              <Button 
                variant="gradient" 
                size="sm" 
                className="rounded-md text-sm tracking-tight h-auto px-4 py-1.5 font-medium"
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
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="/free-trial"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Trial
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/login">
                <Button 
                  variant="outline" 
                  className="w-full rounded-md text-sm px-4 py-1.5 h-auto border border-gray-300 dark:border-gray-700 font-medium bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-none hover:shadow-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Button>
              </Link>
              <Link href="/request-access">
              <Button
                variant="gradient"
                  className="w-full rounded-md text-sm tracking-tight h-auto px-4 py-1.5 font-medium"
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