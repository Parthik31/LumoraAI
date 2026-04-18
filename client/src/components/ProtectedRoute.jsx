import { Link } from 'react-router-dom';

const ProtectedRoute = ({ children, pageName }) => {
  const user = localStorage.getItem('lumora_user');
  
  if (!user) {
    return (
      <div className="relative w-full">
        {/* Render the actual page but blurred, disabled, and clipped */}
        <div className="h-[85vh] overflow-hidden filter blur-md opacity-30 pointer-events-none select-none">
          {children}
        </div>
        
        {/* The Overlay Box centered perfectly over it */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="bg-white/95 backdrop-blur-sm p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100 text-center max-w-lg mx-4 animate-fade-in-up">
            <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-green-100">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Sign in to use the {pageName}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Create a free account to unlock our AI-powered insights, customized saving calculations, and personalized solar strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="px-8 py-3.5 bg-green-600 text-white font-bold text-[15px] rounded-xl shadow-lg hover:bg-green-500 hover:-translate-y-1 transition-all">
                Sign In Now
              </Link>
              <Link to="/" className="px-8 py-3.5 bg-gray-100 text-gray-700 font-bold text-[15px] rounded-xl hover:bg-gray-200 transition-all border border-gray-200">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
