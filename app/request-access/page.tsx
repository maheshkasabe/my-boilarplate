"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RequestAccessPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    job_title: "",
    company_size: "",
    interests: [] as string[],
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interests: prev.interests.filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.company) {
      setSubmitStatus({
        success: false,
        message: "Please fill out all required fields."
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/request-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Your access request has been submitted. We'll be in touch soon!"
        });
        
        // Reset form
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          company: "",
          job_title: "",
          company_size: "",
          interests: [],
          message: ""
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || "Something went wrong. Please try again later."
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to submit your request. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Left Side - Form */}
              <div className="lg:w-3/5 p-8 md:p-12">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-2">Request Access</h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form below to request access to Diligent Insight's compliance platform.
                  </p>
                </div>
                
                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="John"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Doe"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  {/* Email & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Work Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  {/* Job Title & Company Size */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="job_title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="job_title"
                        name="job_title"
                        placeholder="Compliance Officer"
                        value={formData.job_title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company_size" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Size
                      </label>
                      <select
                        id="company_size"
                        name="company_size"
                        value={formData.company_size}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1000 employees</option>
                        <option value="1001+">1001+ employees</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Interested In */}
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      I'm interested in (select all that apply)
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="due_diligence"
                          name="interests"
                          type="checkbox"
                          value="due_diligence"
                          checked={formData.interests.includes('due_diligence')}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-400 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="due_diligence" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Due Diligence
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="financial_risk"
                          name="interests"
                          type="checkbox"
                          value="financial_risk"
                          checked={formData.interests.includes('financial_risk')}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-400 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="financial_risk" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Financial Risk Assessment
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="compliance"
                          name="interests"
                          type="checkbox"
                          value="compliance"
                          checked={formData.interests.includes('compliance')}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-400 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="compliance" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Compliance Monitoring
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="not_sure"
                          name="interests"
                          type="checkbox"
                          value="not_sure"
                          checked={formData.interests.includes('not_sure')}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-400 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="not_sure" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Not sure yet, need more information
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional information (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us more about your compliance needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="pink-gradient" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    By submitting this form, you agree to our{' '}
                    <Link href="/legal/privacy" className="text-purple-600 dark:text-purple-400 hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/legal/terms" className="text-purple-600 dark:text-purple-400 hover:underline">
                      Terms of Service
                    </Link>.
                  </p>
                </form>
              </div>
              
              {/* Right Side - Benefits */}
              <div className="lg:w-2/5 bg-gradient-to-br from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20 p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Why join Diligent Insight?</h2>
                  
                  <ul className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-600 dark:bg-purple-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Advanced AI Analysis</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Our AI algorithms identify risks that traditional methods might miss, providing deeper insights.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-pink-600 dark:bg-pink-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Time Efficiency</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Reduce compliance processing time by up to 70% compared to manual methods.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-600 dark:bg-purple-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Regulatory Updates</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Stay compliant with automatic updates as regulations change across jurisdictions.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-pink-600 dark:bg-pink-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Enterprise Security</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          SOC II certified platform with end-to-end encryption and advanced security measures.
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-white/30 dark:bg-black/20 backdrop-blur-sm rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 italic text-sm">
                      "Diligent Insight has transformed our compliance workflow. What used to take weeks now takes days, with better results."
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          James Wilson
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Chief Compliance Officer, Global Financial Corp
                        </p>
                      </div>
                    </div>
                  </div>
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