import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
              Compliance Monitoring
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Automated compliance monitoring that continuously tracks regulatory changes and alerts you to potential issues in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-access">
                <Button variant="pink-gradient" size="lg" className="w-full sm:w-auto">
                  Request Demo
                </Button>
              </Link>
              <Link href="/platform/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Stay ahead of regulatory changes with our advanced monitoring platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuous monitoring of regulatory changes and compliance requirements across multiple jurisdictions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Alerts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered alert system that prioritizes and notifies you of compliance issues based on risk levels.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Reporting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Automated generation of compliance reports for internal review and regulatory submissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Benefits of Our Compliance Monitoring</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Reduce compliance violations by up to 92%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Save 75% of time spent on compliance activities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Reduce regulatory fines and penalties by over 85%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Stay ahead of regulatory changes with instant notifications
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-green-600/10 to-teal-600/10 dark:from-green-500/20 dark:to-teal-500/20 rounded-xl p-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl">
                    <h3 className="text-xl font-semibold mb-4">Impact Metrics</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 dark:text-gray-400">Reduced Compliance Risk</span>
                          <span className="font-semibold">92%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-2 bg-green-600 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 dark:text-gray-400">Time Efficiency</span>
                          <span className="font-semibold">75%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-2 bg-teal-600 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 dark:text-gray-400">Cost Savings</span>
                          <span className="font-semibold">68%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '68%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Our Compliance Monitoring Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A streamlined process that keeps you constantly protected
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-200 dark:bg-green-900/30"></div>
              
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold mb-2">Connect Your Systems</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Integrate our platform with your existing systems through our secure API connections.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 border-4 border-white dark:border-gray-900">
                  <span className="text-green-600 dark:text-green-400 font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-none"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 border-4 border-white dark:border-gray-900">
                  <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold mb-2">Customize Monitoring Parameters</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Set up your industry-specific compliance requirements and monitoring parameters.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold mb-2">Automated Monitoring</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our AI continuously monitors regulatory changes and your compliance status.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 border-4 border-white dark:border-gray-900">
                  <span className="text-green-600 dark:text-green-400 font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-none"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 border-4 border-white dark:border-gray-900">
                  <span className="text-green-600 dark:text-green-400 font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold mb-2">Receive Alerts & Reports</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Get instant notifications for compliance issues and automated compliance reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600/10 to-teal-600/10 dark:from-green-500/20 dark:to-teal-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Compliance Process?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Schedule a demo to see how our Compliance Monitoring solution can help your organization stay compliant with minimal effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-access">
                <Button variant="pink-gradient" size="lg" className="w-full sm:w-auto">
                  Request Demo
                </Button>
              </Link>
              <Link href="/platform/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 