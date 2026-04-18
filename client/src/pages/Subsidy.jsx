import { Link } from "react-router-dom";

const Subsidy = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="w-[90%] max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Solar Subsidy <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-green-700">Guidance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your step-by-step roadmap to claiming financial assistance under the PM Surya Ghar Yojana.
          </p>
        </div>
        
        {/* Modern Card Layout (No Timeline Lines) */}
        <div className="space-y-8">
          
          {/* Step 1 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 border-b border-gray-100 pb-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl font-extrabold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Check Eligibility</h3>
                <p className="text-gray-500 mt-1">Verify your qualification for national or state schemes.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-gray-700 font-medium">Valid electricity connection</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-gray-700 font-medium">Clear property ownership</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-gray-700 font-medium">Min. 100 sq ft rooftop space</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-gray-700 font-medium">No existing solar setup</span>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 border-b border-gray-100 pb-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-extrabold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
                <p className="text-gray-500 mt-1">Keep clear scanned copies ready before applying.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Identity proof (Aadhaar card)', 'Address proof & Latest electricity bill', 'Property ownership documents', 'Canceled cheque for direct transfer', 'Feasibility report from local DISCOM'].map((item, i) => (
                <li key={i} className="flex items-start text-gray-700 bg-gray-50 p-4 rounded-xl">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
             <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 border-b border-gray-100 pb-6">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center text-3xl font-extrabold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Application Process</h3>
                <p className="text-gray-500 mt-1">Follow these chronological steps securely.</p>
              </div>
            </div>
            <div className="space-y-3 text-gray-700">
              {[
                { text: 'Register on the National Portal for Rooftop Solar', link: 'https://pmsuryaghar.gov.in' },
                { text: 'Apply for feasibility approval from your local DISCOM' },
                { text: 'Select an empaneled vendor strictly from the portal' },
                { text: 'Execute installation through the chosen vendor' },
                { text: 'Submit project details and apply for final subsidy' }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-100">
                  <span className="shrink-0 w-8 h-8 bg-white text-gray-800 font-bold rounded-lg shadow-sm flex items-center justify-center border border-gray-200">{idx + 1}</span>
                  <p className="font-medium">
                    {step.link ? <a href={step.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2">{step.text}</a> : step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
             <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 border-b border-gray-100 pb-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl font-extrabold shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Subsidy Amount Structure</h3>
                <p className="text-gray-500 mt-1">Current financial assistance under PM Surya Ghar Yojana.</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <table className="min-w-full text-left bg-white">
                <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                  <tr>
                    <th className="p-5 font-bold tracking-wide">System Capacity</th>
                    <th className="p-5 font-bold tracking-wide">Central Financial Assistance (CFA)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-5 font-medium">Up to 3kW</td>
                    <td className="p-5 font-bold text-green-600">₹18,000 per kW</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="p-5 font-medium">Above 3kW to 10kW</td>
                    <td className="p-5">₹18,000 per kW (first 3kW) + ₹9,000 per kW thereafter</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-5 font-medium">Above 10kW</td>
                    <td className="p-5 font-bold text-green-600">₹1,17,000 (Maximum fixed cap)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
             <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 border-b border-gray-100 pb-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl font-extrabold shrink-0">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Tracking & Disbursement</h3>
                <p className="text-gray-500 mt-1">Final steps to receive your funds.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">After installation and meter integration, a physical inspection is conducted by officials. Once approved, the exact subsidy amount is credited directly to your registered bank account within <span className="font-bold text-green-700">30 working days</span>.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noreferrer" className="flex-1 text-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-500 hover:shadow-green-500/30 transition-all hover:-translate-y-1">
                Visit Official Portal <i className="fas fa-external-link-alt ml-2"></i>
              </a>
              <Link to="/calculator" className="flex-1 text-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-green-600 hover:text-green-700 transition-all">
                Check My Savings First
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Subsidy;
