import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AgentQuorumPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-28 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                AgentQuorum
              </h1>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                COMING SOON
              </span>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Diligent Insight is powered by Agent Quorum, a multi-agent AI platform designed to tackle the world's most complex challenges.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-12">
              <h2 className="text-2xl font-bold mb-6">The Power of Multi-Agent Collaboration</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                AgentQuorum is a cutting-edge multi-agent AI platform designed to tackle the world's most complex challenges. By combining advanced collaboration, machine learning, and intelligent automation, AgentQuorum empowers businesses and organisations to unlock limitless possibilities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Unlike traditional AI systems that rely on a single large model, AgentQuorum orchestrates multiple specialized AI agents that work together to solve complex problems. This collaborative approach enables more robust analysis, creative problem-solving, and the ability to handle complex multi-stage tasks.
              </p>
              <div className="w-full h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-lg flex items-center justify-center my-8">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Visualization coming soon</p>
              </div>
            </div>
            
            {/* Key Features */}
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Multi-Agent Architecture</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Orchestrates specialized AI agents that collaborate to tackle complex problems with greater precision than single-model approaches.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Advanced Reasoning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Employs sophisticated reasoning capabilities across multiple domains for more accurate and nuanced insights.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Adaptive Learning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Continuously improves through feedback loops, optimizing agent performance based on real-world results.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built with security-first design principles to protect sensitive data while delivering powerful AI capabilities.
                </p>
              </div>
            </div>
            
            {/* Applications */}
            <h2 className="text-2xl font-bold mb-6">Applications</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                AgentQuorum powers Diligent Insight's compliance platform with specialized capabilities for:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Risk Assessment and Due Diligence</strong> - Analyze complex financial and operational data to identify compliance risks with unprecedented accuracy.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Regulatory Monitoring</strong> - Track regulatory changes across jurisdictions and automatically update compliance frameworks.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Financial Risk Analysis</strong> - Detect patterns and anomalies in financial data that human analysts might miss.
                  </span>
                </li>
              </ul>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Be First to Experience AgentQuorum</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Join our waitlist to be among the first to leverage the power of multi-agent AI for your organization's compliance and risk management needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/request-access">
                  <Button variant="pink-gradient" size="lg">
                    Request Early Access
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button variant="outline" size="lg">
                    Explore Platform
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