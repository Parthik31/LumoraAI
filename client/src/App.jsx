import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'; 

// Pages
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Subsidy from './pages/Subsidy';
import Tips from './pages/Tips';
import Login from './pages/Login';   
import Signup from './pages/Signup'; 
import Settings from './pages/Settings'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
        
        <Navbar />
        
        <main className="grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/subsidy" element={<Subsidy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* Route added back */}

            {/* Protected Routes (Requires Login) */}
            <Route path="/calculator" element={
              <ProtectedRoute pageName="AI Calculator">
                <Calculator />
              </ProtectedRoute>
            } />
            <Route path="/tips" element={
              <ProtectedRoute pageName="AI Solar Tips">
                <Tips />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute pageName="Account Settings">
                <Settings />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
