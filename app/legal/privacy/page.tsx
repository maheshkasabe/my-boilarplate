import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import SmoothScrollInit from "@/components/SmoothScrollInit";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <SmoothScrollInit />
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-aharoni font-bold mb-8 text-center text-brand-gradient">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                At Diligent Insight, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Introduction to Digital Insight's Privacy Policy</h2>
              <p className="mb-4">
              Welcome to Diligent Insight Ltd. We are committed to respecting your privacy and protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website www.diligentinsight.co.uk
              </p>

              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Data Collection </h2>
              <p className="mb-4">
                We collect personal data when you:
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Visit our website</li>
                <li>Register for an account</li>
                <li>Use our services</li>
                <li>Contact us</li>
                </ul>
              This data may include your name, email address, contact details, professional information, and any other information you choose to provide.
              </p>

              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Use of Data</h2>
              <p className="mb-4">
              We use your data to:

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide, operate, and maintain our services </li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, for customer support, updates, and other administrative purposes</li>
                <li>Send you marketing and promotional materials and other information that may be of interest to you</li>
              </ul>
              </p>

              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Data Sharing and Disclosure</h2>
              <p className="mb-4">
              We may share your data with third-party service providers who perform services on our behalf, such as web hosting, data analysis, and email delivery. We ensure these parties are obligated to protect your data and use it solely for our specified purposes.              
              </p>

              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Data Security</h2>
              <p className="mb-4">
              We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Your Rights</h2>
              <p className="mb-4">
              You have the right to access, correct, or delete your personal data. You can also object to or restrict our processing of your data.
              </p>

              <h2 className="text-2xl font-aharoni text-gray-900 dark:text-white mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information.
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