import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PurchasingUseCasePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Purchasing
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Quick Supplier Screening & Due Diligence for Purchasing Teams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-access">
                <Button variant="brand-gradient" size="lg" className="w-full sm:w-auto">
                  Request a Demo
                </Button>
              </Link>
              <Link href="/use-cases">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View All Use Cases
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Selecting the right suppliers is critical to managing risk and ensuring continuity of service. But carrying out due diligence, especially across financials, company filings, and ownership, can be time-consuming and inconsistent across teams.
                </p>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">Our Solution</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Diligent Insight simplifies supplier evaluations by delivering quick, structured reports from public data, helping procurement teams make better decisions.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Assess financial stability</h3>
                      <p className="text-gray-600 dark:text-gray-400">Instantly review company filings and identify signs of financial risk.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Understand ownership & control</h3>
                      <p className="text-gray-600 dark:text-gray-400">See who's behind the business, including changes in directorship or PSCs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Check for compliance & credibility</h3>
                      <p className="text-gray-600 dark:text-gray-400">Spot late filings, dormant statuses, and other governance concerns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Standardise supplier assessments</h3>
                      <p className="text-gray-600 dark:text-gray-400">Ensure consistent due diligence across your procurement process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Streamline due diligence</h3>
                      <p className="text-gray-600 dark:text-gray-400">Access structured insights without the need for manual research.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Who Uses Diligent Insight?</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Procurement & Purchasing Teams</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Identify early warning signs affecting delivery, solvency, or legal exposure. Quickly check suppliers before issuing POs or onboarding.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Vendor Risk & Compliance Teams</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Add an extra layer of assurance before approving new suppliers.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Operational Managers & Partners</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Confidently select suppliers with clear insights into their trading history and structure.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Diligent Insight?</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Speed up supplier checks</strong> – No more digging through multiple databases or filing histories.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Improve compliance & accountability</strong> – Get an audit-friendly report every time.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Reduce risk, save time, make better supplier decisions</strong> – Without extra admin burden.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get started with Diligent Insight in just a few simple steps
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="relative w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Enter company details</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter a company name and its website to begin the analysis.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="relative w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-pink-600 dark:text-pink-400">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Select entity</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Select the company from the list taken from Companies House.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="relative w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Upload documents</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Upload documents and other information you want analysed.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="relative w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Receive insights</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive a structured report highlighting financials, legal history, and corporate governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to transform your supplier screening process?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how Diligent Insight can help your team make better supplier decisions faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-access">
                  <Button variant="brand-gradient" size="lg">
                    Request a Demo
                  </Button>
                </Link>
                <Link href="/our-agents/due-diligence">
                  <Button variant="outline" size="lg">
                    Explore Due Diligence
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
