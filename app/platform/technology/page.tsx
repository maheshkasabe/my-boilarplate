import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PlatformTechnologyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Our Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              At the core of Diligent Insight is cutting-edge technology powered by artificial intelligence and machine learning, designed to revolutionize compliance processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/platform/security">
                <Button variant="pink-gradient" size="lg" className="w-full sm:w-auto">
                  Security Details
                </Button>
              </Link>
              <Link href="/platform/integrations">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Integrations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">AI-Powered Compliance</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our proprietary artificial intelligence models analyze millions of data points to identify risks, predict compliance issues, and provide actionable insights.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced NLP capabilities extract meaningful information from unstructured data, enabling the platform to understand and analyze complex documents and text.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Machine Learning Models</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our ML models continuously learn from new data, improving accuracy over time and adapting to evolving compliance requirements and risk patterns.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Identify potential compliance issues before they occur with predictive analytics that flag high-risk scenarios based on historical patterns.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 dark:from-purple-500/30 dark:to-pink-500/30">
                    <div className="aspect-video bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg p-6 shadow-md flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-block mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-lg font-semibold text-gray-800 dark:text-white">
                          AI-Driven Analysis
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Processing efficiency</span>
                          <span className="text-sm font-medium">95%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-2 bg-purple-600 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Detection accuracy</span>
                          <span className="text-sm font-medium">98%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-2 bg-pink-600 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Learning capability</span>
                          <span className="text-sm font-medium">90%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
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
      
      {/* Platform Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Architecture</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our scalable cloud-native architecture ensures security, performance, and reliability
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-8">
              <div className="min-h-64 md:h-auto flex flex-col items-center justify-center gap-4 md:gap-6">
                {/* User Interface Layer */}
                <div className="w-full max-w-3xl bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 md:p-4">
                  <div className="font-medium text-center mb-1 text-sm md:text-base">User Interface Layer</div>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm">
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">Web Application</span>
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">Dashboards</span>
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">Reporting</span>
                  </div>
                </div>
                
                {/* API & Services Layer */}
                <div className="w-full max-w-3xl bg-pink-100 dark:bg-pink-900/30 rounded-lg p-3 md:p-4">
                  <div className="font-medium text-center mb-1 text-sm md:text-base">API & Services Layer</div>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm">
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">REST APIs</span>
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">Microservices</span>
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">Event Processing</span>
                  </div>
                </div>
                
                {/* AI & Analytics Layer */}
                <div className="w-full max-w-3xl bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 md:p-4">
                  <div className="font-medium text-center mb-1 text-sm md:text-base">AI & Analytics Layer</div>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm">
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">ML Models</span>
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">NLP Engine</span>
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">Data Analytics</span>
                  </div>
                </div>
                
                {/* Data & Security Layer */}
                <div className="w-full max-w-3xl bg-green-100 dark:bg-green-900/30 rounded-lg p-3 md:p-4">
                  <div className="font-medium text-center mb-1 text-sm md:text-base">Data & Security Layer</div>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm">
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">Databases</span>
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">Encryption</span>
                    <span className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded">Authentication</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Hosted on secure, SOC 2 certified cloud infrastructure with auto-scaling capabilities to handle varying workloads.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Microservices</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Modular microservice architecture enables rapid feature development and ensures system resilience.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular updates and enhancements delivered through CI/CD pipelines, ensuring the latest features and security updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our platform is built with cutting-edge technologies for maximum performance and reliability
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6 text-center">
              <div className="h-10 md:h-12 mb-3 md:mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-8 w-6 md:w-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-medium">Kubernetes</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-2">Container Orchestration</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6 text-center">
              <div className="h-10 md:h-12 mb-3 md:mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-8 w-6 md:w-8 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-medium">Next.js</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-2">Frontend Framework</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6 text-center">
              <div className="h-10 md:h-12 mb-3 md:mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-8 w-6 md:w-8 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-medium">TensorFlow</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-2">AI/ML Framework</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6 text-center">
              <div className="h-10 md:h-12 mb-3 md:mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-8 w-6 md:w-8 text-yellow-600 dark:text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-medium">PostgreSQL</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-2">Database</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Want to learn more about our technology?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a technical deep dive with our engineering team to understand how our platform can integrate with your systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-access">
                  <Button variant="pink-gradient" size="lg">
                    Request Technical Demo
                  </Button>
                </Link>
                <Link href="/platform/integrations">
                  <Button variant="outline" size="lg">
                    View Integrations
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