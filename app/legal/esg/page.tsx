import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import SmoothScrollInit from "@/components/SmoothScrollInit";

export default function ESGPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <SmoothScrollInit />
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-aharoni font-bold mb-8 text-center text-brand-gradient">
              ESG Policy
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Environmental, Social and Governance Policy
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Purpose of ESG Policy</h2>
              <p className="mb-4">
                This policy applies to Diligent Insight Ltd (and its employees, contractors, and partners). This ESG Policy outlines our commitment to operating in an ethical, transparent, and sustainable way. This has been driven by our CEO, who has proven credentials in the environmental field, having been a non-executive director and trustee of Scotland's largest environmental charity for seven years. While we are an early-stage technology company, we recognise that strong ESG practices are essential to long-term success, building trust with stakeholders, and minimising our impact on people and the planet.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Environmental Commitment</h2>
              <p className="mb-4">
                Although our direct environmental footprint is low, we are committed to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Using energy-efficient cloud infrastructure and service providers.</li>
                <li>Reducing unnecessary travel by adopting remote-first practices.</li>
                <li>Minimising waste and promoting digital-first operations.</li>
                <li>Exploring opportunities to offset emissions or support reforestation and sustainable initiatives.</li>
              </ul>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Social Responsibility</h2>
              <p className="mb-4">
                We are committed to building a fair, inclusive, and respectful working environment.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We uphold diversity and inclusion in hiring and working practices.</li>
                <li>We will not tolerate discrimination, harassment, or unfair treatment.</li>
                <li>We are committed to data privacy and responsible use of AI.</li>
                <li>We prioritise transparency and fairness in how we train, deploy, and explain our AI tools.</li>
                <li>We support flexible and healthy working practices, including mental wellbeing.</li>
              </ul>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Governance</h2>
              <p className="mb-4">
                We are committed to operating with integrity and transparency.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We maintain clear internal processes for decision-making and accountability.</li>
                <li>We comply with all relevant legal and regulatory obligations.</li>
                <li>We are committed to ethical AI development and governance.</li>
                <li>We aim to maintain an advisory or non-executive presence to support independence in oversight.</li>
                <li>We are transparent with shareholders, users, and partners about our goals, performance, and risks.</li>
              </ul>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">ESG Oversight</h2>
              <p className="mb-4">
                Responsibility for ESG sits with the leadership team, and progress will be reviewed annually. As we grow, we intend to formalise ESG metrics and reporting mechanisms.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Continuous Improvement</h2>
              <p className="mb-4">
                We recognise that ESG is a journey. As our company evolves, we will continue to review and strengthen our ESG commitments in line with best practices and stakeholder expectations.
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