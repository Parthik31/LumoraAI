import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Tips = () => {
    const [formData, setFormData] = useState({ 
        systemSize: '', 
        locationTips: '', 
        usagePattern: '' 
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

        const prompt = `Act as an elite solar energy consultant for the Indian market. 
        Based STRICTLY on this user profile:
        - System Size: ${formData.systemSize} kW
        - Location Region: ${formData.locationTips} India
        - Primary Usage Pattern: ${formData.usagePattern}

        Provide 5 highly specific, non-random, actionable recommendations. You MUST explicitly connect your advice to their exact system size, their specific Indian region, and their exact usage pattern. 
        
        CRITICAL FORMATTING INSTRUCTIONS:
        Output ONLY valid HTML. Do not wrap in markdown blocks like \`\`\`html.
        Do NOT write opening paragraphs under the tip headers. Use ONLY bullet points (2-3 sentences each) for the actual advice.
        You MUST use the exact HTML structure and Tailwind CSS classes below:
        
        <div class="space-y-8">
          <div class="bg-linear-to-r from-green-800 to-green-600 rounded-3xl p-8 md:p-10 text-white shadow-xl">
            <h3 class="text-3xl font-extrabold mb-3">Your Strategic Solar Blueprint</h3>
            <p class="text-green-50 text-lg font-medium">Custom-engineered for a <span class="font-bold text-white border-b-2 border-white/30 pb-0.5">${formData.systemSize}kW</span> system in <span class="font-bold text-white border-b-2 border-white/30 pb-0.5">${formData.locationTips} India</span>, optimized for <span class="font-bold text-white border-b-2 border-white/30 pb-0.5">${formData.usagePattern}</span>.</p>
          </div>
          
          <div class="grid grid-cols-1 gap-6">
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-blue-500 hover:shadow-md transition-all">
              <div class="flex items-center gap-4 mb-5">
                <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-lg">1</span>
                <h4 class="text-2xl font-bold text-gray-900">Load Shifting Strategy</h4>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-700 leading-relaxed text-[15px]"><svg class="w-6 h-6 text-blue-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 1: 2-3 lines of highly specific reasoning based on their pattern]</span></li>
                <li class="flex items-start text-gray-700 leading-relaxed text-[15px]"><svg class="w-6 h-6 text-blue-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 2: Specific action 2 to take advantage of generation]</span></li>
              </ul>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-yellow-500 hover:shadow-md transition-all">
              <div class="flex items-center gap-4 mb-5">
                <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-100 text-yellow-700 font-extrabold text-lg">2</span>
                <h4 class="text-2xl font-bold text-gray-900">Regional Maintenance</h4>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-700 leading-relaxed text-[15px]"><svg class="w-6 h-6 text-yellow-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 1: 2-3 lines of specific advice for their chosen Indian region's weather]</span></li>
                <li class="flex items-start text-gray-700 leading-relaxed text-[15px]"><svg class="w-6 h-6 text-yellow-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 2: Specific cleaning action]</span></li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-purple-500 hover:shadow-md transition-all">
              <div class="flex items-center gap-4 mb-5">
                <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-700 font-extrabold text-lg">3</span>
                <h4 class="text-2xl font-bold text-gray-900">System Future-Proofing</h4>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-700 leading-relaxed text-[15px]"><svg class="w-6 h-6 text-purple-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 1: 2-3 lines of advice scaled exactly to their kW size]</span></li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-orange-500 hover:shadow-md transition-all">
              <div class="flex items-center gap-4 mb-5">
                <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-orange-700 font-extrabold text-lg">4</span>
                <h4 class="text-2xl font-bold text-gray-900">Seasonal Adjustments</h4>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-700 leading-relaxed text-[15px]"><svg class="w-6 h-6 text-orange-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 1: 2-3 lines of region-specific seasonal generation notes]</span></li>
              </ul>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-green-500 hover:shadow-md transition-all">
              <div class="flex items-center gap-4 mb-5">
                <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-700 font-extrabold text-lg">5</span>
                <h4 class="text-2xl font-bold text-gray-900">Financial & Net Metering</h4>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-700 leading-relaxed text-[15px]"><svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 1: 2-3 lines of specific net-metering advice based on their pattern]</span></li>
                <li class="flex items-start text-gray-700 leading-relaxed text-[15px]"><svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>[Bullet 2: Final specific financial optimization action]</span></li>
              </ul>
            </div>
          </div>
        </div>`;

        try {
            // NEW: Get the current logged-in user's email
            const currentUserEmail = localStorage.getItem('lumora_user');

            const response = await axios.post('http://localhost:5000/generate', { 
                prompt, 
                formData,
                type: 'tips',
                userEmail: currentUserEmail // SENDING THE EMAIL TO MONGODB 
            });
            
            const cleanHtml = response.data.result.replace(/```html|```/g, '');
            setResult(cleanHtml);
            
        } catch (err) {
            console.error("Error fetching tips:", err);
            setError(err.response?.data?.error || 'Could not generate personalized tips. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-gray-50 min-h-screen">
            <div className="w-[90%] max-w-5xl mx-auto">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 tracking-tight">Personalized Solar Intelligence</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">AI-driven actionable recommendations precision-tailored to your exact system size, location, and daily lifestyle.</p>
                </div>
                
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 max-w-2xl mx-auto mb-12 relative overflow-hidden">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                        <div>
                            <label htmlFor="systemSize" className="block text-gray-800 font-bold mb-2">System Size (kW)</label>
                            <input 
                                type="number" 
                                id="systemSize" 
                                value={formData.systemSize} 
                                onChange={handleChange} 
                                min="1" 
                                step="0.1" 
                                placeholder="e.g. 3.5"
                                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all bg-gray-50 hover:bg-gray-100" 
                                required 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="locationTips" className="block text-gray-800 font-bold mb-2">Region</label>
                            <select 
                                id="locationTips" 
                                value={formData.locationTips} 
                                onChange={handleChange} 
                                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all bg-gray-50 hover:bg-gray-100 cursor-pointer" 
                                required
                            >
                                <option value="" disabled>Select your region</option>
                                <option value="North">North India</option>
                                <option value="South">South India</option>
                                <option value="East">East India</option>
                                <option value="West">West India</option>
                                <option value="Central">Central India</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="usagePattern" className="block text-gray-800 font-bold mb-2">Usage Pattern</label>
                            <select 
                                id="usagePattern" 
                                value={formData.usagePattern} 
                                onChange={handleChange} 
                                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all bg-gray-50 hover:bg-gray-100 cursor-pointer" 
                                required
                            >
                                <option value="" disabled>Select primary usage time</option>
                                <option value="Mostly daytime (9 AM - 5 PM)">Mostly daytime (9 AM - 5 PM)</option>
                                <option value="Mostly nighttime (After 6 PM)">Mostly nighttime (After 6 PM)</option>
                                <option value="Balanced day/night usage">Balanced day/night</option>
                            </select>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={loading} 
                            className="w-full py-4 px-6 bg-green-600 text-white font-bold text-[15px] rounded-xl shadow-lg hover:bg-green-500 hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all disabled:bg-gray-400 disabled:transform-none mt-2"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating Custom Strategy...
                                </span>
                            ) : 'Get My Personalized Tips'}
                        </button>
                    </form>

                    {error && (
                        <div className="p-4 bg-red-50 text-red-700 border-l-4 border-red-500 rounded-md font-medium mt-6">
                            {error}
                        </div>
                    )}
                </div>

                {result && (
                    <div ref={resultRef} className="animate-fade-in-up mt-8">
                        <div dangerouslySetInnerHTML={{ __html: result }} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Tips;
