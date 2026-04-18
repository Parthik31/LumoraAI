import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transform motion-safe:animate-pulse" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276')", animationDuration: '20s' }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-900/90"></div>
        <div className="relative z-10 max-w-4xl px-6 animate-fade-in-up mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 font-semibold tracking-wide text-sm mb-6">
            AI-POWERED ENERGY MANAGEMENT
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Intelligent Solar Solutions for a <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-600">Sustainable Future</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed font-light">
            Empowering Indian households to seamlessly transition to solar energy, maximize ROI, and navigate government subsidies with ease.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/calculator" className="px-8 py-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-500 hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)]">
              Calculate Your Savings
            </Link>
            <a href="#solution" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all shadow-lg">
              Explore the Ecosystem
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section (Request #8: Light Green Cards, No Circles) */}
      <section id="problem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Overcoming Barriers to Solar Adoption
          </h2>
          <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Transitioning to renewable energy can seem complex. We simplify the process by directly addressing the most common roadblocks faced by consumers today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-rupee-sign', title: 'Capital Investment', desc: 'Demystifying upfront costs with precise ROI forecasts and payback timelines.' },
              { icon: 'fa-battery-quarter', title: 'Storage Complexity', desc: 'Simplifying battery selection to ensure reliable, around-the-clock power availability.' },
              { icon: 'fa-home', title: 'Spatial Constraints', desc: 'Optimizing high-efficiency panel layouts for urban homes with limited terrace area.' },
              { icon: 'fa-question-circle', title: 'Information Deficit', desc: 'Bridging the knowledge gap with transparent data on subsidies and technical specs.' }
            ].map((item, index) => (
              <div key={index} className="bg-green-50/70 p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 border border-green-100 group text-left">
                <i className={`fas ${item.icon} text-4xl text-green-600 mb-5`}></i>
                <h3 className="text-xl font-extrabold text-green-900 mb-3">{item.title}</h3>
                <p className="text-green-800/80 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section (Updated Request #9) */}
      <section id="solution" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                A Comprehensive, <span className="text-green-600">AI-Powered</span> Solar Ecosystem
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Lumora eliminates the guesswork from your solar transition. Our intelligent platform provides tailored, actionable insights to make clean energy accessible and highly profitable.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'Predictive Savings Calculator', desc: 'Accurately forecast your ROI, payback period, and long-term financial benefits using local solar irradiance data.', link: '/calculator' },
                  { title: 'Streamlined Subsidy Guidance', desc: 'Navigate PM Surya Ghar Yojana and state-specific schemes with our automated, step-by-step documentation assistant.', link: '/subsidy' },
                  { title: 'AI-Driven Personalized Tips', desc: 'Receive custom recommendations on load shifting, maintenance, and system optimization based on your unique consumption patterns.', link: '/tips' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300 shadow-sm">
                        <svg className="w-5 h-5 text-green-700 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">
                        <Link to={feature.link}>{feature.title}</Link>
                      </h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              {/* UPDATED: Removed green tint from background and shadow */}
              <div className="relative w-full aspect-square md:aspect-4/3 group mt-8 md:mt-0">
                {/* Decorative background accent block changed from green to amber */}
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-100/70 rounded-3xl z-0 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 hidden md:block border border-amber-200"></div>
                
                {/* Main Image Container (Neutral gray shadow) */}
                <div className="relative z-10 w-full h-full rounded-3xl shadow-2xl shadow-black/10 overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500 bg-white border border-gray-100/50">
                  <img 
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d" 
                    alt="Modern solar panels on a residential roof in Surat" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle grey gradient overlay for premium depth */}
                  <div className="absolute inset-0 bg-linear-to-tr from-black/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section (Request #10: Bold text, remove extra line) */}
      <section id="sdg" className="py-24 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Advancing Sustainable Development Goal 7
          </h2>
          <img 
            src="https://static.wixstatic.com/media/94cc53_8a1a54acfa044b948526694ab1cb9c7c~mv2.png/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/94cc53_8a1a54acfa044b948526694ab1cb9c7c~mv2.png" 
            alt="SDG 7 - Affordable and Clean Energy" 
            className="w-56 mx-auto mb-10 shadow-sm rounded-xl hover:shadow-md transition-shadow"
          />
          <p className="text-xl text-gray-800 mb-10 leading-relaxed font-bold">
            Lumora is structurally aligned with the United Nations SDG 7: Ensuring access to affordable, reliable, sustainable, and modern energy for all.
          </p>
          <a href="https://sdgs.un.org/goals/goal7" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg">
            View SDG 7 Directives <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      {/* CTA Section (Request #11: Light orange background) */}
      <section className="relative py-24 bg-orange-100 flex items-center justify-center text-center border-t-4 border-orange-100">
        <div className="relative z-10 max-w-4xl px-6 text-gray-900">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-green-900">Ready to Harness the Power of the Sun?</h2>
          <p className="text-xl mb-10 text-green-800/80 font-medium">
            Join thousands of forward-thinking households achieving energy independence and drastically reducing their carbon footprint today.
          </p>
          <Link to="/calculator" className="px-10 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl hover:shadow-green-600/30 hover:-translate-y-1 inline-block">
            Start Your Solar Journey Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
