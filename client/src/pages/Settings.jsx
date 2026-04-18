import { useState, useEffect } from 'react';

const Settings = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('lumora_user');
    if (email) setUserEmail(email);
  }, []);

  return (
    <section className="py-20 bg-gray-50 min-h-[85vh]">
      <div className="w-[90%] max-w-4xl mx-auto animate-fade-in-up">
        
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Account Settings</h2>
          <p className="text-lg text-gray-600 mt-2">Manage your profile and application preferences.</p>
        </div>
        
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
          
          {/* Profile Section */}
          <div className="mb-10 pb-10 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4">
                <i className="fas fa-user"></i>
              </div>
              Profile Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Registered Email</label>
                <input 
                  type="email" 
                  value={userEmail} 
                  disabled 
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-100 text-gray-500 outline-none cursor-not-allowed" 
                />
                <p className="text-xs text-gray-400 mt-2 font-medium">Email cannot be changed right now.</p>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. John Doe" 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all bg-gray-50 hover:bg-gray-100" 
                />
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                <i className="fas fa-bell"></i>
              </div>
              Preferences
            </h3>
            
            <div className="space-y-4">
              <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <input type="checkbox" className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500" defaultChecked />
                <span className="ml-3 font-medium text-gray-700">Receive monthly solar savings reports</span>
              </label>
              
              <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <input type="checkbox" className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500" defaultChecked />
                <span className="ml-3 font-medium text-gray-700">Get notified about new government subsidies</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-100">
            <button className="py-4 px-8 bg-green-600 text-white font-bold text-[15px] rounded-xl shadow-lg hover:bg-green-500 hover:-translate-y-0.5 transition-all">
              Save Changes
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Settings;
