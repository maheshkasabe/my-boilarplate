import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import SmoothScrollInit from "@/components/SmoothScrollInit";

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <SmoothScrollInit />
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-aharoni font-bold mb-8 text-center text-brand-gradient">
              Accessibility Statement
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Diligent Insight is committed to ensuring accessibility for all users, including those with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">What Web Accessibility Means To Us</h2>
              <p className="mb-4">
                At Diligent Insight, we believe that web accessibility means creating a digital environment that allows all users, regardless of ability, to navigate, understand, and interact with our platform effectively.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Our Approach to Accessibility</h2>
              <p className="mb-4">
                We have developed our platform in accordance with WCAG 2.1 guidelines and are committed to achieving AA level conformance. Our efforts include implementing features to support assistive technologies, optimizing content structure, providing alternative text for images, and ensuring compatibility with screen readers and keyboard navigation.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Demonstrated partial compliance due to integration of third-party content</h2>
              <p className="mb-4">
              Certain components of our platform may rely on third-party content, impacting the overall accessibility. We are actively working to address these dependencies and achieve full compliance.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Diligent Insight's Accessibility Initiatives</h2>
              <p className="mb-4">
                Diligent Insight is dedicated to fostering accessibility not only in our digital platform but also in our physical offices. We have implemented various accessibility arrangements to ensure an inclusive environment.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Connect With Us</h2>
              <p className="mb-4">
                Your feedback is valuable. If you encounter any accessibility barriers on our platform or have suggestions for improvement, please reach out to our accessibility coordinator:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Email: accessibility@diligentinsight.com</li>
                <li>Phone: +44 131 555 0000</li>
              </ul>
              <p className="mb-4">
                We aim to respond to feedback within 2 business days.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Formal Approval</h2>
              <p className="mb-4">
                This accessibility statement is approved by Diligent Insight's management team.
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Last updated: May 01, 2025
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  © 2025 Diligent Insight Ltd. All rights reserved. | Registered in Scotland, SC816340
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 