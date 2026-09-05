import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Compass, ArrowLeft, Send, Sparkles, CheckCircle2, X, Star } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectDetails({ profile, authUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  
  const getSavedProject = () => {
    if (!authUser) return null;
    const saved = JSON.parse(localStorage.getItem(`ai4u_saved_${authUser.email}`) || '[]');
    return saved.find(p => p.id === id) || null;
  };
  
  const [savedStatus, setSavedStatus] = useState(getSavedProject()?.status || null);
  const [question, setQuestion] = useState('');
  
  const handleSaveToggle = () => {
    if (!authUser) return;
    const storageKey = `ai4u_saved_${authUser.email}`;
    let saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    if (savedStatus) {
      // Remove
      saved = saved.filter(p => p.id !== id);
      setSavedStatus(null);
    } else {
      // Add
      const newProj = { ...project, status: 'Interested', matchScore: project.matchScore || 85 }; // fallback score
      saved.push(newProj);
      setSavedStatus('Interested');
    }
    localStorage.setItem(storageKey, JSON.stringify(saved));
  };
  
  const handleSelectProject = () => {
    if (!authUser) return;
    const storageKey = `ai4u_saved_${authUser.email}`;
    let saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    const existingIndex = saved.findIndex(p => p.id === id);
    if (existingIndex >= 0) {
      saved[existingIndex].status = 'Selected';
    } else {
      saved.push({ ...project, status: 'Selected', matchScore: project.matchScore || 85 });
    }
    setSavedStatus('Selected');
    localStorage.setItem(storageKey, JSON.stringify(saved));
  };

  const [chat, setChat] = useState([
    { role: 'bot', text: `Hi! I'm your Project Mentor for "${project?.title}". What would you like to explore first?` }
  ]);
  const [activeModal, setActiveModal] = useState(null);

  if (!project) {
    return <div className="container mt-8 text-center text-xl font-bold">Project not found</div>;
  }

  // --- Helper calculations ---
  const studentSkills = profile.skills.map(s => s.toLowerCase().trim());
  const projSkills = project.skills.map(s => s.toLowerCase());
  const projTech = project.technologies.map(t => t.toLowerCase());
  
  const skillFit = Math.min(100, Math.max(30, Math.round((projSkills.filter(ps => studentSkills.some(ss => ss.includes(ps) || ps.includes(ss))).length / (projSkills.length || 1)) * 100) + 30));
  const techFit = Math.min(100, Math.max(20, Math.round((projTech.filter(pt => studentSkills.some(ss => ss.includes(pt) || pt.includes(ss))).length / (projTech.length || 1)) * 100) + 20));
  const parseDuration = (d) => parseInt(d) || 0;
  const timeFit = parseDuration(project.duration) <= parseDuration(profile.duration) ? 100 : 60;
  const teamFit = project.teamSize <= parseInt(profile.teamSize) ? 100 : 70;
  const overallFeasibility = ((skillFit + techFit + timeFit + teamFit) / 4);
  const feasibilityLabel = overallFeasibility >= 80 ? "Highly Feasible" : overallFeasibility >= 60 ? "Feasible" : "Challenging";

  // --- Chat Handler ---
  const handleAskMentor = (e, q = question, actionKey = null) => {
    if (e) e.preventDefault();
    if (!q.trim()) return;

    const newChat = [...chat, { role: 'user', text: q }];
    setChat(newChat);
    setQuestion('');

    if (actionKey) {
      setTimeout(() => {
        setActiveModal(actionKey);
        setChat([...newChat, { role: 'bot', text: `I've opened the ${q} panel for you.` }]);
      }, 500);
      return;
    }

    setTimeout(() => {
      let response = "That's a great question! ";
      const qLower = q.toLowerCase();
      
      if (qLower.includes('why') || qLower.includes('right')) {
        response += `Based on your profile, this project builds directly on your strengths while challenging you with new concepts.`;
      } else if (qLower.includes('divide') || qLower.includes('work')) {
        response += `Click "Plan Our Team" on the left to see a tailored breakdown for your ${profile.teamSize}-person team.`;
      } else if (qLower.includes('innovative')) {
        response += `Click "Make My Project Unique" to see specific ideas for this project.`;
      } else if (qLower.includes('time') || qLower.includes('roadmap')) {
        response += `I can generate a step-by-step roadmap for your timeframe. Click "Build My Roadmap".`;
      } else {
        response += `For this project, focus on the core features first. Let me know if you need more details.`;
      }

      setChat([...newChat, { role: 'bot', text: response }]);
    }, 1000);
  };

  const suggestedQuestions = [
    { text: "Check Feasibility", action: "feasibility" },
    { text: "Plan My Team", action: "team" },
    { text: "Make It Innovative", action: "innovation" },
    { text: "Build My Roadmap", action: "roadmap" }
  ];

  // --- Modal Content Renderers ---
  const renderFeasibility = () => (
    <div className="space-y-8">
      <p className="text-xl text-[#576077] leading-relaxed">Yes — this project is realistic for your current skills, {profile.teamSize}-member team and {profile.duration} timeline.</p>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#fdf2eb] p-6 rounded-[1.5rem]">
          <div className="text-sm font-bold text-[#f26440] uppercase tracking-widest mb-2">Skill Fit</div>
          <div className="text-4xl font-serif text-[#1a1f36]">{skillFit}%</div>
        </div>
        <div className="bg-[#f0f7f7] p-6 rounded-[1.5rem]">
          <div className="text-sm font-bold text-[#4a7c82] uppercase tracking-widest mb-2">Time Fit</div>
          <div className="text-4xl font-serif text-[#1a1f36]">{timeFit}%</div>
        </div>
        <div className="bg-[#f2f7f5] p-6 rounded-[1.5rem]">
          <div className="text-sm font-bold text-[#88a096] uppercase tracking-widest mb-2">Team Fit</div>
          <div className="text-4xl font-serif text-[#1a1f36]">{teamFit}%</div>
        </div>
        <div className="bg-[#fdfbf7] border border-[#f0eae1] p-6 rounded-[1.5rem]">
          <div className="text-sm font-bold text-muted uppercase tracking-widest mb-2">Technology Fit</div>
          <div className="text-4xl font-serif text-[#1a1f36]">{techFit}%</div>
        </div>
      </div>

      <div className="bg-white border-2 border-[#f0eae1] p-6 rounded-[2rem] flex items-center justify-between shadow-sm">
        <span className="font-serif text-[#1a1f36] text-2xl">Overall Assessment:</span>
        <span className="text-2xl font-bold text-primary uppercase tracking-wide">{feasibilityLabel}</span>
      </div>
    </div>
  );

  const renderTeamPlan = () => {
    const size = parseInt(profile.teamSize);
    let roles = [];
    if (size === 1) {
      roles = [{ name: "Member 1", tasks: ["Full Stack Development", "Database Setup", "Testing & Documentation"] }];
    } else if (size === 2) {
      roles = [
        { name: "Member 1", tasks: ["Frontend & UI", "User Experience", "Client-side logic"] },
        { name: "Member 2", tasks: ["Backend & APIs", "Database Architecture", "Data Processing"] }
      ];
    } else {
      roles = [
        { name: "Member 1", tasks: ["Frontend & UI", "User Experience"] },
        { name: "Member 2", tasks: ["Backend & APIs", "Database Architecture"] },
        { name: "Member 3", tasks: ["Machine Learning / Core Logic", "Data Analysis"] }
      ];
      for (let i = 4; i <= size; i++) {
        roles.push({ name: `Member ${i}`, tasks: ["Testing, DevOps & Documentation", "Research"] });
      }
    }
    
    return (
      <div className="space-y-8">
        <p className="text-xl text-[#576077] leading-relaxed">Here is a recommended division of labor tailored for your {size}-person team, based on the requirements of <strong>{project.title}</strong>.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r, i) => (
            <div key={i} className="bg-white border-2 border-[#f0eae1] p-6 rounded-[1.5rem] shadow-sm">
              <h4 className="font-bold text-[#f26440] mb-4 uppercase tracking-widest text-sm">{r.name}</h4>
              <ul className="space-y-3">
                {r.tasks.map((t, j) => (
                  <li key={j} className="flex items-center gap-3 text-[#1a1f36] text-[1.05rem] font-medium">
                    <CheckCircle2 size={20} className="text-[#88a096]" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderInnovation = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xl text-[#576077]">Base Project: <strong>{project.title}</strong></p>
        <div className="bg-[#f2d06b]/20 text-[#9e7d1c] px-4 py-2 rounded-full font-bold shadow-sm">
          Innovation Potential: 8.7 / 10
        </div>
      </div>
      
      <p className="text-[#1a1f36] font-medium text-xl">To make this project unique and stand out, consider implementing these specific ideas:</p>
      
      <div className="space-y-4">
        {project.innovationIdeas.map((idea, i) => (
          <div key={i} className="bg-white border-2 border-[#f0eae1] p-6 rounded-[1.5rem] flex gap-5 items-start">
            <div className="bg-[#f26440] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">{i + 1}</div>
            <div>
              <p className="text-[#1a1f36] font-bold mb-2 text-[1.1rem]">{idea}</p>
              <p className="text-[#576077]">This adds significant value by solving a real-world edge case and demonstrates advanced technical capability.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRoadmap = () => {
    const months = parseDuration(profile.duration) || 2;
    const weeks = Math.max(4, months * 4);
    
    const phases = [
      { w: Math.ceil(weeks * 0.1), title: "Requirements & Planning", desc: "Define architecture, database schema, and UI wireframes." },
      { w: Math.ceil(weeks * 0.2), title: "Dataset & Foundation", desc: "Setup database, gather datasets, configure dev environment." },
      { w: Math.ceil(weeks * 0.4), title: "Core Development", desc: "Build main backend APIs and frontend pages. Core ML integration." },
      { w: Math.ceil(weeks * 0.6), title: "Integration", desc: "Connect frontend and backend. Ensure data flows correctly." },
      { w: Math.ceil(weeks * 0.8), title: "Testing & Refinement", desc: "Fix bugs, improve UI, handle edge cases." },
      { w: weeks, title: "Deployment & Presentation", desc: "Deploy to cloud, write documentation, prepare demo." }
    ];

    let currentWeek = 1;
    const roadmapItems = phases.map(p => {
      const start = currentWeek;
      const end = p.w;
      currentWeek = end + 1;
      return { range: start === end ? `Week ${start}` : `Week ${start}-${end}`, ...p };
    });

    return (
      <div className="space-y-8">
        <p className="text-xl text-[#576077]">A practical, step-by-step development roadmap for your <strong>{profile.duration}</strong> timeline.</p>
        
        <div className="relative border-l-4 border-[#f0eae1] ml-6 space-y-8 py-4">
          {roadmapItems.map((item, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute -left-[14px] top-2 w-6 h-6 rounded-full bg-white border-4 border-[#4a7c82]"></div>
              <div className="bg-white border-2 border-[#f0eae1] p-6 rounded-[1.5rem]">
                <div className="text-sm font-bold text-[#4a7c82] uppercase tracking-widest mb-2">{item.range}</div>
                <h4 className="font-serif text-[#1a1f36] text-xl mb-2">{item.title}</h4>
                <p className="text-[#576077]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container pb-32 pt-8">


      <button className="flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 font-bold uppercase tracking-widest text-sm" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> Back to Discoveries
      </button>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          
          {/* Project Passport Header */}
          <div className="border-b-2 border-[#f0eae1] pb-12">
            <div className="flex justify-between items-start mb-4">
              <div className="text-[#f26440] font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <Star size={16} fill="#f26440" /> PROJECT PASSPORT
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={handleSaveToggle}
                  className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-colors ${savedStatus ? 'bg-[#f2f7f5] text-[#4a7c82] border-[#d1e3dd]' : 'bg-white text-muted border-[#f0eae1] hover:border-[#f26440] hover:text-[#f26440]'}`}
                >
                  {savedStatus ? 'Saved ✓' : 'Save Project'}
                </button>
              </div>
            </div>
            
            <h2 className="text-6xl font-serif mb-8 text-[#1a1f36] leading-tight">{project.title}</h2>
            
            {savedStatus === 'Selected' ? (
              <div className="bg-[#fdf2eb] border border-[#f7d6b8] p-6 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-[#1a1f36] text-2xl mb-1">Your project is selected!</h3>
                  <p className="text-[#f26440] font-medium">Now let's turn your idea into a project you can actually build.</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setActiveModal('roadmap')} className="btn-primary py-3 px-6 text-sm">Build My Roadmap</button>
                </div>
              </div>
            ) : (
              <button 
                onClick={handleSelectProject}
                className="btn-primary py-4 px-8 text-xl mb-8 flex items-center gap-2 shadow-sm"
              >
                <CheckCircle2 size={24} /> Select This Project
              </button>
            )}
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-center">
              <div className="bg-white border border-[#f0eae1] p-4 rounded-2xl shadow-sm">
                <span className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">Domain</span>
                <span className="font-bold text-[#1a1f36]">{project.interests[0]}</span>
              </div>
              <div className="bg-white border border-[#f0eae1] p-4 rounded-2xl shadow-sm">
                <span className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">Time</span>
                <span className="font-bold text-[#1a1f36]">{project.duration}</span>
              </div>
              <div className="bg-white border border-[#f0eae1] p-4 rounded-2xl shadow-sm">
                <span className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">Team</span>
                <span className="font-bold text-[#1a1f36]">{project.teamSize} members</span>
              </div>
              <div className="bg-[#fdf2eb] border border-[#f7d6b8] p-4 rounded-2xl shadow-sm">
                <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-1">Match</span>
                <span className="font-black text-primary text-xl">{project.matchScore}%</span>
              </div>
            </div>
          </div>

          {/* YOUR PROJECT PLAN - 4 Colorful Journey Stops */}
          <div>
            <h3 className="text-3xl font-serif mb-8 text-[#1a1f36]">Your Project Plan</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              
              <div className="journey-stop cursor-pointer" onClick={() => setActiveModal('feasibility')}>
                <div className="journey-number bg-[#fdf2eb] text-[#f26440]">1</div>
                <h4 className="font-serif text-[#1a1f36] text-2xl mb-2">Check</h4>
                <p className="text-muted mb-6">Can I build it?</p>
                <div className="text-sm font-bold text-[#f26440] uppercase tracking-widest">Feasibility &rarr;</div>
              </div>

              <div className="journey-stop cursor-pointer" onClick={() => setActiveModal('team')}>
                <div className="journey-number bg-[#f0f7f7] text-[#4a7c82]">2</div>
                <h4 className="font-serif text-[#1a1f36] text-2xl mb-2">Plan</h4>
                <p className="text-muted mb-6">Who does what?</p>
                <div className="text-sm font-bold text-[#4a7c82] uppercase tracking-widest">Team Split &rarr;</div>
              </div>

              <div className="journey-stop cursor-pointer" onClick={() => setActiveModal('innovation')}>
                <div className="journey-number bg-[#fff9e6] text-[#b38a12]">3</div>
                <h4 className="font-serif text-[#1a1f36] text-2xl mb-2">Improve</h4>
                <p className="text-muted mb-6">How to make it unique?</p>
                <div className="text-sm font-bold text-[#b38a12] uppercase tracking-widest">Innovate &rarr;</div>
              </div>

              <div className="journey-stop cursor-pointer" onClick={() => setActiveModal('roadmap')}>
                <div className="journey-number bg-[#f2f7f5] text-[#88a096]">4</div>
                <h4 className="font-serif text-[#1a1f36] text-2xl mb-2">Build</h4>
                <p className="text-muted mb-6">How do I build it?</p>
                <div className="text-sm font-bold text-[#88a096] uppercase tracking-widest">Roadmap &rarr;</div>
              </div>

            </div>
          </div>

        </div>

        {/* AI Mentor Sidebar */}
        <div className="lg:col-span-1">
          <div className="card border-2 border-[#f0eae1] sticky top-6 h-[850px] flex flex-col p-0 overflow-hidden shadow-lg bg-white">
            <div className="bg-[#fdfbf7] border-b-2 border-[#f0eae1] p-8 flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4 border border-[#f0eae1]">
                <Sparkles className="text-[#f2d06b]" size={32} />
              </div>
              <h3 className="text-3xl font-serif text-[#1a1f36] m-0">Your Project Mentor</h3>
              <p className="text-muted text-md mt-2">"Let's figure this out together."</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-[#fdfbf7]">
              {chat.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`chat-bubble ${msg.role} shadow-sm font-medium leading-relaxed`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t-2 border-[#f0eae1] bg-white">
              <div className="flex flex-col gap-2 mb-6">
                {suggestedQuestions.map((sq, i) => (
                  <button 
                    key={i}
                    onClick={() => handleAskMentor(null, sq.text, sq.action)}
                    className="bg-[#fdf2eb] hover:bg-[#f26440] text-[#f26440] hover:text-white text-sm font-bold px-4 py-3 rounded-2xl text-left transition-colors"
                  >
                    {sq.text}
                  </button>
                ))}
              </div>
              <form onSubmit={(e) => handleAskMentor(e)} className="flex gap-3">
                <input 
                  type="text" 
                  className="form-control flex-1 rounded-[1.5rem]" 
                  placeholder="Ask anything..." 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <button type="submit" className="btn-primary px-5 flex items-center justify-center rounded-[1.5rem]" disabled={!question.trim()}>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-[#1a1f36]/70 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-[#f0eae1] p-8 flex justify-between items-center z-10">
              <h2 className="text-4xl font-serif text-[#1a1f36]">
                {activeModal === 'feasibility' && 'Feasibility Assessment'}
                {activeModal === 'team' && 'Team Plan'}
                {activeModal === 'innovation' && 'Innovation Ideas'}
                {activeModal === 'roadmap' && 'Development Roadmap'}
              </h2>
              <button onClick={() => setActiveModal(null)} className="text-muted hover:text-[#1a1f36] bg-[#fdfbf7] p-3 rounded-full"><X size={28} /></button>
            </div>
            <div className="p-10">
              {activeModal === 'feasibility' && renderFeasibility()}
              {activeModal === 'team' && renderTeamPlan()}
              {activeModal === 'innovation' && renderInnovation()}
              {activeModal === 'roadmap' && renderRoadmap()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
