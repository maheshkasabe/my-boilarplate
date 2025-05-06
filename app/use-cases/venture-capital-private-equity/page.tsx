import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VCPEUseCasePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Venture Capital & Private Equity
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Rapid investment screening & peer group benchmarking to accelerate deal flow analysis and improve decision-making.
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
                  Making investment decisions is time-sensitive, but manually reviewing pitch decks, business plans, and financials takes hours. Traditional databases rely on SIC codes, often producing irrelevant peer group comparisons that fail to reflect a company's true position in the market.
                </p>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">Our Solution</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Diligent Insight cuts through the noise, delivering quick, AI-driven analysis to help you make better investment decisions.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Assess a company's true market position</h3>
                      <p className="text-gray-600 dark:text-gray-400">Our peer benchmarking goes beyond SIC codes, using AI to find the most relevant competitors based on actual business activities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Extract key insights from business plans & pitch decks</h3>
                      <p className="text-gray-600 dark:text-gray-400">Quickly surface the most important financials, business model details, and risks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Understand financial health & viability</h3>
                      <p className="text-gray-600 dark:text-gray-400">Analyse filings, financial statements, and past funding rounds to assess scalability and risk.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Save time on deal flow analysis</h3>
                      <p className="text-gray-600 dark:text-gray-400">Instantly identify high-potential opportunities, cutting manual research time from hours to minutes.</p>
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Venture Capital & Private Equity Firms</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Rapid pre-screen of potential investment opportunities, saving time scrolling through company documents. Find relevant peer group companies to improve financial forecasting.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Angel Investors & Family Offices</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Effectively vet early-stage companies without time-consuming research.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Investment Analysts & Fund Managers</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Enhance deal flow management with automated insights.
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
                        <strong>Accurate Peer Benchmarking</strong> – Save hours finding relevant companies for financial comparison and no more reliance on inaccurate SIC code-based suggestions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Accelerated company screening</strong> – saving hours of manual research to see if a company is investible or not.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Save time and money</strong>, improve due diligence, and reduce investment risk.
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
                  Enter a company name and website URL to begin the analysis.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="relative w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-pink-600 dark:text-pink-400">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Select entity</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Select the correct entity from Companies House database.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="relative w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Upload documents</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Upload supporting business plans, pitch decks, and financials for AI-assisted analysis.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="relative w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Receive insights</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get a structured report with peer benchmarking, financial health indicators, and strategic insights.
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
              <h2 className="text-2xl font-bold mb-4">Ready to transform your investment process?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how Diligent Insight can help your firm make better investment decisions faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-access">
                  <Button variant="brand-gradient" size="lg">
                    Request a Demo
                  </Button>
                </Link>
                <Link href="/our-agents/peer-group-benchmarking">
                  <Button variant="outline" size="lg">
                    Explore Peer Benchmarking
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