import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import SmoothScrollInit from "@/components/SmoothScrollInit";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <SmoothScrollInit />
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-aharoni font-bold mb-8 text-center text-brand-gradient">
              Terms and Conditions
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Welcome to Diligent Insight. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">AI-driven Due Diligence for Smarter Investment Decisions </h2>
              <p className="mb-4">
                Save time, reduce costs, and make more informed investment decisions with Diligent Insight, the next-generation platform for automated due diligence.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Why Choose Diligent Insight?</h2>
              <p className="mb-4">
                Diligent Insight provides a comprehensive solution for conducting due diligence, leveraging artificial intelligence to analyze vast amounts of data and extract valuable insights for smarter investment decisions. Our platform is tailored to meet the specific needs of each investment scenario, whether in mergers and acquisitions, venture capital, private equity, or other investment areas. By utilizing Diligent Insight, you gain a competitive edge and mitigate risks in your investment endeavors.
              </p>

              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Key Features</h2>
              <p className="mb-4">
                Our AI-driven platform offers advanced capabilities such as predictive analytics, risk assessment, trend identification, and customizable reporting. With Diligent Insight, you can uncover hidden opportunities, assess potential threats, and track market trends with unparalleled efficiency. Seamlessly integrate our solution into your investment workflow and harness the power of AI for superior due diligence.
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