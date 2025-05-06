import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PlatformIntegrationsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Platform Integrations
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Connect Diligent Insight with your existing tools and systems through our robust API and pre-built integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-access">
                <Button variant="pink-gradient" size="lg" className="w-full sm:w-auto">
                  Request Integration
                </Button>
              </Link>
              <Link href="/platform/technology">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Technology
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Seamless Connectivity</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our platform is designed to integrate seamlessly with your existing technology stack, ensuring data flows efficiently between systems without disrupting your workflows.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600 dark:text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">RESTful API:</span> Comprehensive API for programmatic access to all platform features
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-600 dark:text-pink-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Webhooks:</span> Real-time event notifications for automated workflows
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">SSO Integration:</span> Support for SAML, OAuth, and OpenID Connect
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Data Export:</span> Automated reports in CSV, Excel, and PDF formats
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-lg mb-6">
                    <pre className="text-sm font-mono bg-gray-50 dark:bg-gray-900 p-4 rounded overflow-x-auto">
<code className="text-gray-800 dark:text-gray-300">{`// Sample API Request
fetch('https://api.diligentinsight.com/v1/risk-assessment', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    entity_name: 'Acme Corp',
    risk_type: 'financial'
  })
})
.then(response => response.json())
.then(data => console.log(data))`}</code>
                    </pre>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Developer Resources</h3>
                    <Link href="#" className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                      View Documentation
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <p className="text-sm font-medium">API Reference</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <p className="text-sm font-medium">SDK Libraries</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <p className="text-sm font-medium">Example Apps</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <p className="text-sm font-medium">Tutorials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Integration Partners</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Connect with your favorite tools and services through our pre-built integrations
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Partner 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-medium mb-1">Salesforce</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">CRM Integration</p>
              <Button variant="outline" size="sm" className="w-full">Connect</Button>
            </div>
            
            {/* Partner 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-medium mb-1">DocuSign</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">eSignature Integration</p>
              <Button variant="outline" size="sm" className="w-full">Connect</Button>
            </div>
            
            {/* Partner 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
              </div>
              <h3 className="font-medium mb-1">Microsoft 365</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Office Integration</p>
              <Button variant="outline" size="sm" className="w-full">Connect</Button>
            </div>
            
            {/* Partner 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-medium mb-1">Slack</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Communication Integration</p>
              <Button variant="outline" size="sm" className="w-full">Connect</Button>
            </div>
            
            {/* Partner 5 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-medium mb-1">QuickBooks</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Financial Integration</p>
              <Button variant="outline" size="sm" className="w-full">Connect</Button>
            </div>
            
            {/* Partner 6 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="font-medium mb-1">Google Drive</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Document Storage</p>
              <Button variant="outline" size="sm" className="w-full">Connect</Button>
            </div>
            
            {/* Partner 7 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <h3 className="font-medium mb-1">Dropbox</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">File Sharing</p>
              <Button variant="outline" size="sm" className="w-full">Connect</Button>
            </div>
            
            {/* Partner 8 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="h-16 mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-medium mb-1">Tableau</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Data Visualization</p>
              <Button variant="outline" size="sm" className="w-full">Connect</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* API Documentation CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-3/5">
                <h2 className="text-2xl font-bold mb-4">Need a Custom Integration?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our team can help you build custom integrations tailored to your specific needs. Get in touch with our integration specialists to discuss your requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/request-access">
                    <Button variant="pink-gradient">
                      Contact Integration Team
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button variant="outline">
                      View API Docs
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:w-2/5">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold mb-3">Integration Process</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3 text-sm font-medium">1</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Request consultation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3 text-sm font-medium">2</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Receive integration plan</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3 text-sm font-medium">3</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Development and testing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3 text-sm font-medium">4</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Deployment and support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 