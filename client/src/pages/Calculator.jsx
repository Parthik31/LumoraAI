import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Calculator = () => {
    const [formData, setFormData] = useState({
        location: '', bill: '', rooftop: '', budget: ''
    });
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const resultRef = useRef(null);

    useEffect(() => {
        if (result && resultRef.current) {
            const yOffset = -100; 
            const element = resultRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [result]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResult('');

        const prompt = `Act as an expert solar energy financial analyst for the Indian market. 
        Calculate strict, realistic solar savings for a user in ${formData.location}, India. 
        Do NOT make up random numbers. You MUST base your calculations on approximate real-world solar irradiance, typical DISCOM electricity tariffs, and installation costs specific to ${formData.location}.
        
        User Input Data:
        - Monthly Electricity Bill: ₹${formData.bill}
        - Available Rooftop Area: ${formData.rooftop} sq ft
        - Installation Budget: ₹${formData.budget}
        
        CRITICAL FORMATTING INSTRUCTIONS:
        Output ONLY valid HTML. Do not wrap in markdown blocks like \`\`\`html.
        You MUST use the following exact HTML structure and Tailwind CSS classes for your response:
        
        <div class="space-y-6">
            <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-green-500 pb-2">Your Solar Estimate for ${formData.location}</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Recommended System Size</p>
                    <p class="text-2xl font-extrabold text-gray-800">[Size in kW]</p>
                    <p class="text-sm text-gray-500 mt-1">[Brief 1-line explanation based on their roof/bill]</p>
                </div>
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Estimated Monthly Savings</p>
                    <p class="text-2xl font-extrabold text-gray-800">₹[Amount]</p>
                    <p class="text-sm text-gray-500 mt-1">[Brief 1-line note on local ${formData.location} tariffs]</p>
                </div>
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-yellow-500 hover:shadow-md transition-shadow">
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Projected Payback Period</p>
                    <p class="text-2xl font-extrabold text-gray-800">[Years]</p>
                    <p class="text-sm text-gray-500 mt-1">[Brief 1-line ROI explanation]</p>
                </div>
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-purple-500 hover:shadow-md transition-shadow">
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Estimated CO2 Reduction</p>
                    <p class="text-2xl font-extrabold text-gray-800">[Tons/Year]</p>
                    <p class="text-sm text-gray-500 mt-1">Equivalent to planting [X] trees annually</p>
                </div>
            </div>

            <div class="bg-green-50 p-6 rounded-2xl border border-green-200 mt-6 shadow-sm">
                <h4 class="text-xl font-bold text-green-900 mb-4">Available Subsidies in ${formData.location}</h4>
                <ul class="space-y-4">
                    <li class="flex items-start text-gray-800 leading-relaxed"><svg class="w-6 h-6 text-green-600 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 1: Explain exact PM Surya Ghar Yojana central subsidy calculation for their system size]</span></li>
                    <li class="flex items-start text-gray-800 leading-relaxed"><svg class="w-6 h-6 text-green-600 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 2: Detail any state-specific subsidies available in ${formData.location}]</span></li>
                    <li class="flex items-start text-gray-800 leading-relaxed"><svg class="w-6 h-6 text-green-600 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 3: Explain exactly how much of their ₹${formData.budget} budget will be covered by these subsidies]</span></li>
                </ul>
            </div>
        </div>`;

        try {
            // NEW: Get the current logged-in user's email
            const currentUserEmail = localStorage.getItem('lumora_user');

            const response = await axios.post('http://localhost:5000/generate', { 
                prompt, 
                formData, 
                type: 'calculator',
                userEmail: currentUserEmail // SENDING THE EMAIL TO MONGODB
            });
            const cleanHtml = response.data.result.replace(/```html|```/g, '');
            setResult(cleanHtml);
        } catch (err) {
            setError(err.response?.data?.error || 'Could not fetch results. Please make sure the backend is running.');
        } finally {
            setLoading(false);
        }
    };

    const topCities = [
        "Ahmedabad", "Bengaluru", "Bhopal", "Chandigarh", "Chennai", 
        "Coimbatore", "Delhi", "Faridabad", "Gurugram", "Hyderabad", 
        "Indore", "Jaipur", "Jodhpur", "Kanpur", "Kochi", 
        "Kolkata", "Lucknow", "Ludhiana", "Mumbai", "Mysore", 
        "Nagpur", "Nashik", "Pune", "Rajkot", "Surat"
    ].sort();

    return (
        <section className="py-20 bg-gray-50 min-h-screen">
            <div className="w-[90%] max-w-5xl mx-auto">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 tracking-tight">Solar Savings Calculator</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Estimate your potential savings and payback period based on your exact city.</p>
                </div>
                
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 max-w-2xl mx-auto mb-12 relative overflow-hidden">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                        <div>
                            <label htmlFor="location" className="block text-gray-800 font-bold mb-2">Select your city</label>
                            <select id="location" value={formData.location} onChange={handleChange} className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white cursor-pointer" required>
                                <option value="" disabled>Choose a city</option>
                                {topCities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="bill" className="block text-gray-800 font-bold mb-2">Average Monthly Electricity Bill (₹)</label>
                            <input type="number" id="bill" value={formData.bill} onChange={handleChange} min="500" max="50000" placeholder="e.g. 2500" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white" required />
                        </div>
                        
                        <div>
                            <label htmlFor="rooftop" className="block text-gray-800 font-bold mb-2">Available Rooftop Area (sq ft)</label>
                            <input type="number" id="rooftop" value={formData.rooftop} onChange={handleChange} min="50" max="5000" placeholder="e.g. 500" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white" required />
                        </div>
                        
                        <div>
                            <label htmlFor="budget" className="block text-gray-800 font-bold mb-2">Installation Budget (₹)</label>
                            <input type="number" id="budget" value={formData.budget} onChange={handleChange} min="50000" max="1000000" placeholder="e.g. 150000" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white" required />
                        </div>
                        
                        <button type="submit" disabled={loading} className="w-full py-4 px-6 bg-green-600 text-white font-bold text-[15px] rounded-xl shadow-lg hover:bg-green-500 hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all disabled:bg-gray-400 disabled:transform-none mt-2">
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Analyzing Local Data...
                                </span>
                            ) : 'Calculate Savings'}
                        </button>
                    </form>
                    
                    {error && <div className="mt-6 p-4 bg-red-50 text-red-700 border-l-4 border-red-500 rounded-md font-medium">{error}</div>}
                </div>

                {result && (
                    <div ref={resultRef} className="bg-white p-6 md:p-10 rounded-3xl border border-gray-200 shadow-xl animate-fade-in text-left">
                        <div dangerouslySetInnerHTML={{ __html: result }} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Calculator;
