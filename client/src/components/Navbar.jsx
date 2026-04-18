import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // NEW: Store user details
  const [userEmail, setUserEmail] = useState('');
  
  // Location States
  const [userLocation, setUserLocation] = useState({ cityState: 'Locating...', fullAddress: '' });
  const [showFullAddress, setShowFullAddress] = useState(false);
  const locationRef = useRef(null);

  // Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // Profile State
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Mock Database for Search
  const searchableItems = [
    { title: 'Solar Savings Calculator', path: '/calculator', type: 'Tool' },
    { title: 'Subsidy Guidance', path: '/subsidy', type: 'Guide' },
    { title: 'Personalized AI Tips', path: '/tips', type: 'Tool' },
    { title: 'Home Page', path: '/', type: 'Page' },
    { title: 'PM Surya Ghar Yojana', path: '/subsidy', type: 'Info' },
    { title: 'State Subsidies Info', path: '/subsidy', type: 'Info' },
    { title: 'System Size Estimator', path: '/calculator', type: 'Tool' },
    { title: 'Solar Maintenance', path: '/tips', type: 'Info' }
  ];

  useEffect(() => {
    // Check Auth and set User Email
    const user = localStorage.getItem('lumora_user');
    setIsLoggedIn(!!user);
    if (user) setUserEmail(user);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          const city = data.address.city || data.address.town || data.address.state_district || 'Unknown Location';
          const state = data.address.state || '';
          setUserLocation({ cityState: `${city}, ${state}`, fullAddress: data.display_name });
        } catch (error) {
          setUserLocation({ cityState: 'Location unavailable', fullAddress: 'Please enable location permissions.' });
        }
      }, () => {
         setUserLocation({ cityState: 'Surat, Gujarat', fullAddress: 'Surat, Gujarat, India (Default)' });
      });
    }

    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) setShowFullAddress(false);
      if (searchRef.current && !searchRef.current.contains(event.target)) setIsSearchOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setIsProfileOpen(false);
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('lumora_user');
    setIsLoggedIn(false);
    setUserEmail('');
    setIsProfileOpen(false);
    navigate('/');
  };
  
  const isActive = (path) => {
    return location.pathname === path 
      ? "bg-green-100 text-green-800 rounded-xl px-5 py-2.5 font-bold transition-all shadow-sm" 
      : "text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-xl px-5 py-2.5 font-semibold transition-all";
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim().length > 0) {
      setSearchResults(searchableItems.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.type.toLowerCase().includes(query.toLowerCase())));
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '' && searchResults.length > 0) {
      navigate(searchResults[0].path);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-[95%] max-w-7xl mx-auto py-5 flex justify-between items-center">
        
        <div className="text-3xl font-extrabold text-gray-900 tracking-tight shrink-0">
          <Link to="/">Lum<span className="text-green-600">ora</span></Link>
        </div>
        
        <div className="hidden lg:flex items-center space-x-4 grow max-w-2xl mx-10">
          <div className="relative" ref={locationRef}>
            <button onClick={() => setShowFullAddress(!showFullAddress)} className="flex items-center text-sm text-gray-700 font-medium whitespace-nowrap bg-gray-50 hover:bg-green-50 px-4 py-3 rounded-xl border border-gray-200 hover:border-green-300 transition-colors">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {userLocation.cityState}
              <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {showFullAddress && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 animate-fade-in-up">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Current Location</p>
                <p className="text-sm text-gray-800 leading-relaxed">{userLocation.fullAddress}</p>
              </div>
            )}
          </div>

          <div className="relative w-full" ref={searchRef}>
            <div className="flex items-center bg-gray-50 hover:bg-gray-100 focus-within:bg-white rounded-xl px-4 py-3 w-full border border-gray-200 transition-colors shadow-inner">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" placeholder="Search calculators, tips, subsidies..." className="bg-transparent outline-none w-full text-[15px] text-gray-800 placeholder-gray-400" value={searchQuery} onChange={handleSearchChange} onKeyDown={handleSearchSubmit} />
            </div>

            {isSearchOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-fade-in-up max-h-80 overflow-y-auto">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-5 py-2">Quick Results</p>
                {searchResults.map((result, idx) => (
                  <button key={idx} onClick={() => { navigate(result.path); setIsSearchOpen(false); setSearchQuery(''); }} className="w-full text-left px-5 py-3 hover:bg-green-50 transition-colors border-b border-gray-50 last:border-0 flex justify-between items-center group">
                    <span className="font-semibold text-gray-800 group-hover:text-green-700">{result.title}</span>
                    <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 text-gray-500 rounded uppercase group-hover:bg-green-200 group-hover:text-green-800 transition-colors">{result.type}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <nav className="flex items-center space-x-2">
          <ul className="hidden md:flex space-x-2 font-medium text-[15px] mr-4">
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/calculator" className={isActive('/calculator')}>Calculator</Link></li>
            <li><Link to="/subsidy" className={isActive('/subsidy')}>Subsidy</Link></li>
            <li><Link to="/tips" className={isActive('/tips')}>Tips</Link></li>
          </ul>

          <div className="border-l border-gray-200 pl-6 hidden sm:block">
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="w-11 h-11 rounded-full bg-green-100 text-green-700 flex items-center justify-center border-2 border-green-200 hover:bg-green-200 hover:scale-105 transition-all shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </button>
                
                {/* UPDATED: Profile Dropdown UI */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-fade-in-up">
                    <div className="px-5 py-4 border-b border-gray-100 mb-2 bg-gray-50/50 rounded-t-2xl">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Signed in as</p>
                      <p className="text-[15px] font-bold text-gray-800 truncate">{userEmail}</p>
                    </div>
                    
                    {/* Change the Account Settings button to this: */}
                    <button onClick={() => { navigate('/settings'); setIsProfileOpen(false); }} className="w-full text-left px-5 py-2.5 text-[15px] text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      Account Settings
                    </button>
                    
                    <button onClick={handleLogout} className="w-full text-left px-5 py-2.5 text-[15px] text-red-600 hover:bg-red-50 font-bold flex items-center transition-colors mt-1 border-t border-gray-50 pt-3">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="px-6 py-2.5 text-[15px] font-bold text-white bg-green-600 hover:bg-green-500 rounded-xl transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block">
                Sign In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
