import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Log in to your account</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Welcome back. Please enter your credentials.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <div className="space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                
                {/* Password Input */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                
                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-400 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                
                {/* Login Button */}
                <Button className="w-full" variant="pink-gradient">
                  Sign In
                </Button>
                
                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800">
                      Or continue with
                    </span>
                  </div>
                </div>
                
                {/* Social Logins */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
                  </button>
                  <button className="flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.36,11.12a3.24,3.24,0,1,0,0,6.48H19.5V11.12ZM16.46,15a1.32,1.32,0,1,1,1.31-1.32A1.32,1.32,0,0,1,16.46,15Z" />
                      <polygon points="19.5 10.12 19.5 17.59 20.5 17.59 21.5 17.59 21.5 10.12 19.5 10.12" />
                      <path d="M2.5,4A1.5,1.5,0,0,0,1,5.5v13A1.5,1.5,0,0,0,2.5,20h19A1.5,1.5,0,0,0,23,18.5V5.5A1.5,1.5,0,0,0,21.5,4Zm0,2h19V18.5H2.5Z" />
                      <path d="M9.46,15.89c-.69-.85-1.27-1.55-1.3-1.58s0-.6,0-1.29V11.76c0-1.29,0-1.32,0-1.36a2.91,2.91,0,0,0-1.3-1.47,2.8,2.8,0,0,0-1.22-.32A2.81,2.81,0,0,0,3,11.33v.43a1.39,1.39,0,0,0,1.41,1.53,1.36,1.36,0,0,0,1.35-1.31,1.25,1.25,0,0,0-.06-.4,1.32,1.32,0,0,0-.24-.4,1.38,1.38,0,0,1-.1.51,1.42,1.42,0,0,1-1,.61c-.58,0-.61-.06-.61-.72a1.77,1.77,0,0,1,.25-.88A1.27,1.27,0,0,1,5,10.13a1.22,1.22,0,0,1,1.7.35,1.89,1.89,0,0,1,.26,1v1.11a14.21,14.21,0,0,0,.15,2.33,3.74,3.74,0,0,0,.28.67,13.88,13.88,0,0,0,1.3,1.87c.19.22.4.47.72.81s.81.95,1,1.18l.46.53a2.75,2.75,0,0,1-1.82-.53,7.45,7.45,0,0,1-2.47-3.42,13.2,13.2,0,0,1-.73-4.61A14.69,14.69,0,0,1,6.65,5.78,6.55,6.55,0,0,1,9,2.65,3,3,0,0,1,11,2a2.93,2.93,0,0,1,1.63.61A5.47,5.47,0,0,1,14.4,4.92a12.4,12.4,0,0,1,.78,2.21A16.38,16.38,0,0,1,15.53,11a16.12,16.12,0,0,1-.21,4,9.09,9.09,0,0,1-1.86,4.26,5.12,5.12,0,0,1-3.34,1.86,8.44,8.44,0,0,1-1.7.07,3.86,3.86,0,0,1-1.4-.36A4.8,4.8,0,0,0,10.65,19,3.05,3.05,0,0,0,12,18.89a3.73,3.73,0,0,0,2.8-2A9.92,9.92,0,0,0,15.9,14a17.31,17.31,0,0,0,.1-5.14,11.66,11.66,0,0,0-.7-2.76,6.86,6.86,0,0,0-.9-1.65,3.55,3.55,0,0,0-1.25-1A3.66,3.66,0,0,0,11.4,3a4.3,4.3,0,0,0-2.64,1,8,8,0,0,0-2.61,3.76,17,17,0,0,0-.67,6.18A15.58,15.58,0,0,0,6.2,18.78,8.87,8.87,0,0,0,8,21.5a4.47,4.47,0,0,0,2,1.28,5.2,5.2,0,0,0,1.45.21,4.1,4.1,0,0,0,1.28-.19,9.07,9.07,0,0,0,1.25-.63c.63-.36,1.27-.75,1.89-1.17a6.41,6.41,0,0,0,.89-.85c-.22-.25-.46-.53-.63-.71l-1.18-1.33-1-.91-.7-.79-.88-1-1.28-1.43Z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Microsoft</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link href="/request-access" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                  Request Access
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 