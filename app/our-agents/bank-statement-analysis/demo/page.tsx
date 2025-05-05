"use client"
import React, { useState } from 'react';
import {
  FileText, AlertCircle, CheckCircle, Clock,
  ChevronDown, Download, ExternalLink, Filter,
  ArrowRight, Percent, Calendar, DollarSign,
  BarChart, TrendingUp, TrendingDown, AlertTriangle
} from 'lucide-react';

const BankStatementAnalysisUI = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="font-sans bg-gray-50 p-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Bank Statement Analysis</h1>
          <p className="text-gray-500">Client: Acme Corporation Ltd • Ref: ACM-2025-04-123</p>
        </div>
        <div className="flex space-x-2">
          <div className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full flex items-center">
            <CheckCircle size={14} className="mr-1" />
            Analysis Complete
          </div>
          <button className="bg-white border border-gray-300 text-gray-600 px-3 py-1 rounded flex items-center text-sm">
            <Download size={14} className="mr-1" />
            Export
          </button>
          <button className="bg-purple-600 text-white px-3 py-1 rounded flex items-center text-sm">
            <ExternalLink size={14} className="mr-1" />
            View Full Report
          </button>
        </div>
      </div>

      {/* Statement Info */}
      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500">Account Name</p>
            <p className="font-medium">Acme Corporation Ltd</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Account Number</p>
            <p className="font-medium">****8765</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Statement Period</p>
            <p className="font-medium">Jan 1, 2025 - Mar 31, 2025</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Processing Date</p>
            <p className="font-medium">Apr 24, 2025</p>
          </div>
        </div>
      </div>

      {/* Risk Score */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <h2 className="text-lg font-semibold mb-4">Financial Risk Assessment</h2>
        <div className="flex items-center mb-4">
          <div className="w-24 h-24 rounded-full border-8 border-purple-500 flex items-center justify-center mr-6">
            <div className="text-3xl font-bold">1.2</div>
          </div>
          <div>
            <div className="font-medium text-lg text-purple-700">Low Risk</div>
            <p className="text-gray-600 max-w-lg">Based on the analysis of transaction patterns, cash flow stability, and financial metrics, this account shows indicators of healthy financial management.</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="flex items-center mb-1">
              <Percent size={16} className="text-purple-600 mr-2" />
              <div className="text-sm font-medium">Credit Utilization</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">12%</div>
              <div className="text-xs text-purple-600 flex items-center">
                <TrendingDown size={14} className="mr-1" />
                -3% from avg
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <div className="flex items-center mb-1">
              <Calendar size={16} className="text-purple-600 mr-2" />
              <div className="text-sm font-medium">Payment Consistency</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">98%</div>
              <div className="text-xs text-purple-600 flex items-center">
                <TrendingUp size={14} className="mr-1" />
                +2% from avg
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <div className="flex items-center mb-1">
              <DollarSign size={16} className="text-purple-600 mr-2" />
              <div className="text-sm font-medium">Cash Flow Stability</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">High</div>
              <div className="text-xs text-purple-600 flex items-center">
                <CheckCircle size={14} className="mr-1" />
                Positive trend
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="space-y-4">
        {/* Financial Summary */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleSection('summary')}
          >
            <div className="flex items-center">
              <BarChart size={18} className="text-purple-600 mr-2" />
              <div className="font-medium">Financial Summary</div>
            </div>
            <ChevronDown
              size={18}
              className={`transform transition-transform ${expandedSection === 'summary' ? 'rotate-180' : ''}`}
            />
          </button>

          {expandedSection === 'summary' && (
            <div className="p-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Monthly Average Balances</h3>
                  <div className="h-48 w-full bg-gray-50 rounded flex items-center justify-center">
                    [Balance Chart Visualization]
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Key Financial Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="text-sm">Average Monthly Income</div>
                      <div className="font-medium">£42,680</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Average Monthly Expenses</div>
                      <div className="font-medium">£37,450</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Net Cash Flow</div>
                      <div className="font-medium text-purple-600">+£5,230</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Liquidity Ratio</div>
                      <div className="font-medium">2.4</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Recurring Revenue</div>
                      <div className="font-medium">£28,500</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Largest Expense Category</div>
                      <div className="font-medium">Inventory (42%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cash Flow Analysis */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleSection('cashflow')}
          >
            <div className="flex items-center">
              <TrendingUp size={18} className="text-purple-600 mr-2" />
              <div className="font-medium">Cash Flow Analysis</div>
            </div>
            <ChevronDown
              size={18}
              className={`transform transition-transform ${expandedSection === 'cashflow' ? 'rotate-180' : ''}`}
            />
          </button>

          {expandedSection === 'cashflow' && (
            <div className="p-4 border-t border-gray-100">
              <div className="h-64 w-full bg-gray-50 rounded mb-4 flex items-center justify-center">
                [Cash Flow Chart Visualization]
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500 mb-1">Income Stability</div>
                  <div className="font-medium">High</div>
                  <div className="text-xs text-purple-600">Consistent monthly patterns</div>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500 mb-1">Expense Predictability</div>
                  <div className="font-medium">Medium</div>
                  <div className="text-xs text-yellow-600">Some irregular expenses</div>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500 mb-1">Growth Trajectory</div>
                  <div className="font-medium">Positive</div>
                  <div className="text-xs text-purple-600">+7% over period</div>
                </div>
              </div>

              <div className="text-sm">
                <p className="mb-2"><strong>Analysis Notes:</strong></p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Consistent revenue stream with 92% reliability score</li>
                  <li>Regular supplier payments indicate healthy supply chain relationships</li>
                  <li>Seasonal variation in Q1 aligns with industry patterns</li>
                  <li>New revenue stream identified starting in March (£4,800)</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Risk Indicators */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleSection('risk')}
          >
            <div className="flex items-center">
              <AlertTriangle size={18} className="text-purple-600 mr-2" />
              <div className="font-medium">Risk Indicators</div>
            </div>
            <ChevronDown
              size={18}
              className={`transform transition-transform ${expandedSection === 'risk' ? 'rotate-180' : ''}`}
            />
          </button>

          {expandedSection === 'risk' && (
            <div className="p-4 border-t border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-purple-50 border border-purple-100 rounded-md">
                  <CheckCircle size={20} className="text-purple-500 mr-3" />
                  <div>
                    <div className="font-medium">No Unusual Transaction Patterns</div>
                    <div className="text-sm text-gray-600">Transaction patterns align with expected business activity</div>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-purple-50 border border-purple-100 rounded-md">
                  <CheckCircle size={20} className="text-purple-500 mr-3" />
                  <div>
                    <div className="font-medium">Healthy Balance Maintenance</div>
                    <div className="text-sm text-gray-600">Consistent minimum balance maintained throughout period</div>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                  <AlertCircle size={20} className="text-yellow-500 mr-3" />
                  <div>
                    <div className="font-medium">Minor Payment Delay Pattern</div>
                    <div className="text-sm text-gray-600">2 instances of delayed payments to suppliers (5-7 days)</div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-medium text-sm mb-2">Monitoring Recommendations</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>Continue regular statement reviews - no immediate concerns</li>
                  <li>Monitor supplier payment timeliness in next quarter</li>
                  <li>No additional security measures required at this time</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Additional Questions */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleSection('questions')}
          >
            <div className="flex items-center">
              <ArrowRight size={18} className="text-purple-600 mr-2" />
              <div className="font-medium">Additional Questions</div>
              <div className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">2</div>
            </div>
            <ChevronDown
              size={18}
              className={`transform transition-transform ${expandedSection === 'questions' ? 'rotate-180' : ''}`}
            />
          </button>

          {expandedSection === 'questions' && (
            <div className="p-4 border-t border-gray-100">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="font-medium mb-2">Large transaction on Mar 15, 2025</div>
                  <p className="text-sm text-gray-600 mb-3">A larger than normal transaction (£12,450) was processed on March 15. What was the purpose of this payment?</p>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter your response..."
                      className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">
                      Submit
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md p-4">
                  <div className="font-medium mb-2">New recurring payment</div>
                  <p className="text-sm text-gray-600 mb-3">A new recurring payment of £4,800 was identified starting in March. Is this a new supplier relationship or revenue stream?</p>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter your response..."
                      className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 flex justify-between">
        <button className="text-gray-500 text-sm flex items-center">
          <Clock size={14} className="mr-1" />
          Last updated: 2 hours ago
        </button>
        <div className="flex space-x-3">
          <button className="border border-gray-300 bg-white text-gray-600 px-4 py-2 rounded">
            Archive Analysis
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Approve Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankStatementAnalysisUI;