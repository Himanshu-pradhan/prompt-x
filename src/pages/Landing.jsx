import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, BookOpen, Search, ArrowRight, Stars } from 'lucide-react';

function Landing({ authUser, handleLogout }) {
  const navigate = useNavigate();
  return (
    <div className="container min-h-screen flex flex-col">
      <nav className="flex justify-between items-center mb-8 pt-8">
        <div className="flex items-center gap-3 text-primary font-bold text-2xl font-serif">
          <Compass size={32} strokeWidth={2.5} />
          <span>AI 4 U</span>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center text-center pb-20 pt-10">
        <div className="badge badge-primary mb-8 animate-fade-in uppercase tracking-widest text-sm font-bold shadow-sm">
          Your Project Compass
        </div>
        <h1 className="text-6xl font-bold mb-6 max-w-4xl animate-fade-in text-[#1a1f36]" style={{ animationDelay: '0.1s' }}>
          Find the Right Project.<br />
          <span className="text-primary italic font-serif">Build with Confidence.</span>
        </h1>
        <p className="text-xl text-muted mb-12 max-w-2xl animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Tell us what you know, what you love, and what you want to build. We'll help you find the project that fits you best.
        </p>
        {authUser ? (
          <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button 
              className="btn-primary flex items-center gap-3 text-xl py-5 px-10" 
              onClick={() => navigate('/dashboard')}
            >
              Continue My Journey <ArrowRight size={24} />
            </button>
            <button 
              className="btn-secondary text-xl py-5 px-8" 
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button 
            className="btn-primary flex items-center gap-3 text-xl py-5 px-10 animate-fade-in" 
            style={{ animationDelay: '0.3s' }}
            onClick={() => navigate('/auth')}
          >
            Start My Journey <ArrowRight size={24} />
          </button>
        )}

        {/* Custom SVG Hero Illustration */}
        <div className="mt-20 mb-12 w-full max-w-4xl animate-fade-in relative" style={{ animationDelay: '0.4s' }}>
          <svg viewBox="0 0 800 300" className="w-full h-auto drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Arch */}
            <path d="M100 300 C 100 100, 700 100, 700 300" fill="#fdf2eb" />
            
            {/* Path */}
            <path d="M400 300 C 450 200, 350 150, 400 100" stroke="#f26440" strokeWidth="8" strokeDasharray="12 12" />
            
            {/* Landscape Shapes */}
            <circle cx="200" cy="220" r="80" fill="#f2f7f5" />
            <circle cx="600" cy="240" r="60" fill="#f0f7f7" />
            
            {/* Signs / Waypoints */}
            <g transform="translate(370, 240)">
              <rect x="0" y="0" width="80" height="30" rx="8" fill="#1a1f36" />
              <text x="40" y="20" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Inter">IDEAS</text>
            </g>
            <g transform="translate(420, 180)">
              <rect x="0" y="0" width="80" height="30" rx="8" fill="#4a7c82" />
              <text x="40" y="20" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Inter">SKILLS</text>
            </g>
            <g transform="translate(320, 130)">
              <rect x="0" y="0" width="100" height="30" rx="8" fill="#88a096" />
              <text x="50" y="20" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Inter">PROJECTS</text>
            </g>
            
            {/* Student Silhouette */}
            <g transform="translate(380, 260)">
              <circle cx="20" cy="10" r="10" fill="#f26440" />
              <rect x="10" y="25" width="20" height="35" rx="10" fill="#f26440" />
              <rect x="5" y="30" width="10" height="25" rx="5" fill="#d95837" />
            </g>
            
            <circle cx="650" cy="80" r="30" fill="#f2d06b" />
          </svg>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-10 pt-12 border-t border-[#f0eae1] w-full text-left animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="card card-peach flex flex-col items-start border-none shadow-none hover:shadow-md">
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-sm">
              <UserCircle size={32} className="text-primary" />
            </div>
            <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">01</h3>
            <h4 className="text-xl font-serif mb-3">Tell Us About Yourself</h4>
            <p className="text-muted text-lg">Answer a few simple questions about what you study, what you know, and what you enjoy.</p>
          </div>
          <div className="card card-teal flex flex-col items-start border-none shadow-none hover:shadow-md">
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-sm">
              <Search size={32} className="text-[#4a7c82]" />
            </div>
            <h3 className="text-sm font-bold text-[#4a7c82] mb-2 uppercase tracking-widest">02</h3>
            <h4 className="text-xl font-serif mb-3">Discover Your Best Match</h4>
            <p className="text-muted text-lg">We explore 50+ curated possibilities and find the directions that fit your unique profile.</p>
          </div>
          <div className="card card-sage flex flex-col items-start border-none shadow-none hover:shadow-md">
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-sm">
              <Stars size={32} className="text-[#88a096]" />
            </div>
            <h3 className="text-sm font-bold text-[#88a096] mb-2 uppercase tracking-widest">03</h3>
            <h4 className="text-xl font-serif mb-3">Build With Confidence</h4>
            <p className="text-muted text-lg">Your AI mentor will help you plan your team, check feasibility, and build your roadmap.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

// Quick helper for missing icon
const UserCircle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="10" r="3"></circle>
    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
  </svg>
);

export default Landing;
