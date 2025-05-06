import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function IncubatorsAcceleratorsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-400 dark:to-teal-400">
              Incubators & Accelerators
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Quick Screening of Startup Applications & Standardised Company Assessments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-access">
                <Button variant="brand-gradient" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700">
                  Request a Demo
                </Button>
              </Link>
              <Link href="/use-cases">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Other Use Cases
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem Statement */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Reviewing startup applications is resource-intensive, especially when business plans, pitch decks, and financials arrive in varied formats. While many accelerators have clear application criteria, manually pulling out key insights and comparing companies can slow the process.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Diligent Insight helps accelerators and incubators quickly assess each applicant's potential by analysing documents and delivering clear, standardised reports.
            </p>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Diligent Insight cuts through the noise, delivering quick, AI-driven analysis
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Standardise Application Evaluation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Automatically extract key data from pitch decks, business plans, & financials, regardless of format.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Assess Readiness and Fit</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Get a structured view of each company's potential for your cohort or programme, ensuring the right fit.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Gain Extra Context</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Access legal & compliance flags, company filings, and upcoming features like company and market news for added decision support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who Uses Diligent Insight */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Who Else Uses Diligent Insight?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our solution is trusted by various organizations for efficient analysis
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Venture Capital & Private Equity Firms</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Rapid pre-screen of potential investment opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Find relevant peer group companies to improve financial forecasting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">Angel Investors & Family Offices</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Effectively vet early-stage companies without time-consuming research</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Investment Analysts & Fund Managers</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Enhance deal flow management with automated insights</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">Corporate Investigations</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Rapid Companies House filings analysis to assess supply chain suitability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Simple steps to get started with our platform
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-green-600 dark:text-green-400">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Enter Company Details</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter a company name and website URL.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-teal-600 dark:text-teal-400">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Select Entity</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Select the correct entity from Companies House.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-green-600 dark:text-green-400">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Upload Documents</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Upload supporting business plans, pitch decks, and financials for AI-assisted analysis.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-teal-600 dark:text-teal-400">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Receive Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get a structured report with peer benchmarking, financial health indicators, and strategic insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Diligent Insight */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Diligent Insight?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The advantages that make us the preferred choice
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Streamlined Startup Assessment</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Standardise your review process across varied applications.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Save Time and Improve Decisions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Focus energy where it matters most by automating the initial assessment process.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fair and Consistent Process</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Supports a fair, consistent, and informed screening process – ideal for volume applications and cohort selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-500/10 to-teal-600/10 dark:from-green-500/20 dark:to-teal-600/20 rounded-2xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">Ready to transform your startup assessment process?</h2>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
                  Join other leading incubators and accelerators using Diligent Insight to streamline startup evaluation and make data-driven decisions.
                </p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <Link href="/request-access">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700"
                  >
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 