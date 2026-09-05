import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Lightbulb, Folder, Sparkles, ArrowRight } from 'lucide-react';

function Dashboard({ authUser }) {
  const navigate = useNavigate();
  const [journeyStats, setJourneyStats] = useState({ saved: 0, selected: 0 });

  useEffect(() => {
    if (authUser?.email) {
      const savedProjects = JSON.parse(localStorage.getItem(`ai4u_saved_${authUser.email}`) || '[]');
      setJourneyStats({
        saved: savedProjects.length,
        selected: savedProjects.filter(p => p.status === 'Selected').length
      });
    }
  }, [authUser]);

  return (
    <div className="animate-fade-in pb-20">
      
      {/* Welcome Banner */}
      <div className="mb-16">
        <h1 className="text-5xl font-serif text-[#1a1f36] mb-4">Welcome back, {authUser?.name || 'Student'}.</h1>
        <p className="text-2xl text-muted">Let's turn your skills and interests into a project worth building.</p>
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-bold uppercase tracking-widest text-[#4a7c82] mb-6">What do you want to do?</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        
        <div 
          onClick={() => navigate('/form')}
          className="card cursor-pointer border-2 border-transparent hover:border-[#f26440] hover:bg-[#fdf2eb] transition-all bg-[#fdfbf7] flex items-start gap-6 p-8"
        >
          <div className="bg-[#f26440] p-4 rounded-2xl shrink-0 text-white shadow-sm">
            <Compass size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-[#1a1f36] mb-2">Find My Best Project</h3>
            <p className="text-muted text-[1.05rem] leading-relaxed mb-4">Get AI recommendations based directly on your skills, time, and goals.</p>
            <div className="text-sm font-bold text-[#f26440] uppercase tracking-widest flex items-center gap-2">Start Exploring <ArrowRight size={16}/></div>
          </div>
        </div>

        <div 
          onClick={() => navigate('/my-projects')}
          className="card cursor-pointer border-2 border-transparent hover:border-[#4a7c82] hover:bg-[#f2f7f5] transition-all bg-[#fdfbf7] flex items-start gap-6 p-8"
        >
          <div className="bg-[#4a7c82] p-4 rounded-2xl shrink-0 text-white shadow-sm">
            <Folder size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-[#1a1f36] mb-2">Open My Projects</h3>
            <p className="text-muted text-[1.05rem] leading-relaxed mb-4">
              {journeyStats.selected > 0 
                ? "Continue working on your selected project." 
                : "View the projects you've saved and shortlisted."}
            </p>
            <div className="text-sm font-bold text-[#4a7c82] uppercase tracking-widest flex items-center gap-2">View Saved ({journeyStats.saved}) <ArrowRight size={16}/></div>
          </div>
        </div>

      </div>

      {/* Status / Quotes Area */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-[#f2f7f5] border border-[#d1e3dd] rounded-[2rem] p-10 flex flex-col justify-center">
          <h3 className="text-xl font-bold uppercase tracking-widest text-[#88a096] mb-6">Your Journey</h3>
          <div className="flex items-center justify-between relative max-w-lg">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#d1e3dd] -z-10 -translate-y-1/2"></div>
            
            <div className="flex flex-col items-center gap-3 bg-[#f2f7f5] px-2">
              <div className="w-10 h-10 rounded-full bg-[#88a096] text-white flex items-center justify-center font-bold">1</div>
              <span className="font-bold text-[#1a1f36]">Discover</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 bg-[#f2f7f5] px-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${journeyStats.saved > 0 ? 'bg-[#88a096] text-white' : 'bg-white border-2 border-[#d1e3dd] text-muted'}`}>2</div>
              <span className={`font-bold ${journeyStats.saved > 0 ? 'text-[#1a1f36]' : 'text-muted'}`}>Choose</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 bg-[#f2f7f5] px-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${journeyStats.selected > 0 ? 'bg-[#88a096] text-white' : 'bg-white border-2 border-[#d1e3dd] text-muted'}`}>3</div>
              <span className={`font-bold ${journeyStats.selected > 0 ? 'text-[#1a1f36]' : 'text-muted'}`}>Plan</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 bg-[#f2f7f5] px-2">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[#d1e3dd] text-muted flex items-center justify-center font-bold">4</div>
              <span className="font-bold text-muted">Build</span>
            </div>
          </div>
        </div>

        <div className="bg-[#fdf2eb] border border-[#f7d6b8] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center">
          <Sparkles className="text-[#f26440] mb-4" size={32} />
          <p className="font-serif text-[#1a1f36] text-xl leading-relaxed italic">
            "Don't just choose a project. Choose a problem worth solving."
          </p>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
