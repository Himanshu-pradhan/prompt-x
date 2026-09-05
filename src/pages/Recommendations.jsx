import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Star, ArrowRight, CheckCircle2, XCircle, Scale, Check, X, AlertTriangle } from 'lucide-react';
import { getRecommendations } from '../data/projects';

function Recommendations({ profile }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [allRecommendations, setAllRecommendations] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const [showCompare, setShowCompare] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState([]);

  useEffect(() => {
    if (!profile) {
      navigate('/form');
      return;
    }
    const timer = setTimeout(() => {
      setAllRecommendations(getRecommendations(profile));
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [profile, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfbf7]">
        <Compass className="text-primary animate-pulse mb-8" size={80} strokeWidth={1.5} />
        <h2 className="text-4xl font-serif mb-4 text-[#1a1f36]">Charting your course...</h2>
        <p className="text-[#576077] text-xl">We are exploring 50+ possibilities to find your perfect direction.</p>
      </div>
    );
  }

  const bestProject = allRecommendations[0];
  const alternatives = allRecommendations.slice(1, displayCount);

  const toggleCompare = (project) => {
    if (selectedForCompare.find(p => p.id === project.id)) {
      setSelectedForCompare(selectedForCompare.filter(p => p.id !== project.id));
    } else if (selectedForCompare.length < 3) {
      setSelectedForCompare([...selectedForCompare, project]);
    }
  };

  // Helper to render abstract SVG based on domain
  const DomainIllustration = ({ domain }) => {
    let color = "#4a7c82"; // Default Teal
    if (domain.includes('Healthcare')) color = "#f26440"; // Coral
    else if (domain.includes('Finance') || domain.includes('E-commerce')) color = "#f2d06b"; // Yellow
    else if (domain.includes('Agriculture') || domain.includes('Environment')) color = "#88a096"; // Sage

    return (
      <svg viewBox="0 0 200 200" className="w-full h-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="#fdf2eb" />
        <rect x="50" y="50" width="100" height="100" rx="20" fill={color} opacity="0.1" />
        <circle cx="100" cy="100" r="40" fill={color} />
        <path d="M70 100 Q100 50 130 100 T190 100" stroke={color} strokeWidth="4" strokeDasharray="6 6" fill="none" opacity="0.5"/>
        <circle cx="130" cy="70" r="15" fill="#1a1f36" opacity="0.8" />
        <circle cx="70" cy="130" r="20" fill="#f7d6b8" />
      </svg>
    );
  };

  return (
    <div className="container pb-32 pt-8">


      <div className="text-center mb-16 animate-fade-in">
        <h3 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Your Project Compass</h3>
        <h2 className="text-5xl font-serif mb-6 max-w-4xl mx-auto leading-tight text-[#1a1f36]">
          We explored 50+ possibilities and found the directions that fit you best.
        </h2>
      </div>

      {/* Project DNA */}
      <div className="card mb-16 animate-fade-in border-none shadow-sm bg-white">
        <div className="flex items-center gap-3 mb-8">
          <Star className="text-[#f2d06b]" size={28} fill="#f2d06b" />
          <h3 className="text-2xl font-serif mb-0 text-[#1a1f36]">Your Project DNA</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold text-[#1a1f36] mb-4 text-lg">Your Profile</h4>
            <div className="grid grid-cols-2 gap-y-6 text-[1.05rem]">
              <div><span className="text-muted block mb-1">Study</span> <span className="font-bold text-[#1a1f36]">{profile.branch}</span></div>
              <div><span className="text-muted block mb-1">Goal</span> <span className="font-bold text-[#1a1f36]">{profile.goal}</span></div>
              <div><span className="text-muted block mb-1">Level</span> <span className="font-bold text-[#1a1f36]">{profile.skillLevel}</span></div>
              <div><span className="text-muted block mb-1">Constraints</span> <span className="font-bold text-[#1a1f36]">{profile.teamSize} members / {profile.duration}</span></div>
            </div>
            
            <h4 className="font-bold text-[#1a1f36] mt-10 mb-4 text-lg">Your Skills</h4>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, i) => (
                <div key={i} className="bg-[#f0f7f7] text-[#4a7c82] px-4 py-2 rounded-full font-semibold">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#1a1f36] mb-6 text-lg">Strongest Directions</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <span className="w-32 font-medium text-[#1a1f36] text-lg">{profile.interests}</span>
                <div className="flex-1 bg-[#f0eae1] rounded-full h-4">
                  <div className="bg-[#f26440] h-4 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="w-32 font-medium text-[#1a1f36] text-lg">{profile.branch === 'CSE' ? 'Software' : 'Hardware'}</span>
                <div className="flex-1 bg-[#f0eae1] rounded-full h-4">
                  <div className="bg-[#f2d06b] h-4 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Project */}
      <h3 className="text-3xl font-serif text-[#1a1f36] mb-8">Your Best Direction</h3>
      <div className="card border-none bg-white mb-20 animate-fade-in overflow-hidden relative p-0 shadow-[0_20px_50px_-20px_rgba(26,31,54,0.12)]">
        
        <div className="p-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
            <div className="w-48 h-48 mb-8">
              <DomainIllustration domain={bestProject.interests[0] || 'Tech'} />
            </div>
            <div className="text-center mb-8">
              <span className="text-6xl font-serif text-primary block mb-2">{bestProject.matchScore}%</span>
              <span className="text-sm font-bold text-muted uppercase tracking-widest">Match Score</span>
            </div>
            <button className="btn-primary w-full py-4 text-xl" onClick={() => navigate(`/project/${bestProject.id}`)}>
              Open Project Passport
            </button>
            <label className="flex items-center justify-center gap-2 mt-6 font-medium text-muted cursor-pointer hover:text-primary transition-colors">
              <input type="checkbox" checked={selectedForCompare.some(p => p.id === bestProject.id)} onChange={() => toggleCompare(bestProject)} className="w-5 h-5 accent-primary" />
              Compare this direction
            </label>
          </div>

          <div className="w-full md:w-2/3">
            <div className="badge badge-primary mb-4 uppercase tracking-widest text-xs font-bold">{bestProject.interests[0]}</div>
            <h3 className="text-5xl font-serif mb-6 text-[#1a1f36] leading-tight">{bestProject.title}</h3>
            <p className="text-[#576077] mb-10 text-xl leading-relaxed">{bestProject.shortDescription}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-center">
              <div className="bg-[#fdf2eb] p-4 rounded-2xl">
                <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-1">Time</span>
                <span className="font-bold text-[#1a1f36]">{bestProject.duration}</span>
              </div>
              <div className="bg-[#f2f7f5] p-4 rounded-2xl">
                <span className="block text-xs font-bold text-[#88a096] uppercase tracking-wider mb-1">Team</span>
                <span className="font-bold text-[#1a1f36]">{bestProject.teamSize}</span>
              </div>
              <div className="bg-[#f0f7f7] p-4 rounded-2xl">
                <span className="block text-xs font-bold text-[#4a7c82] uppercase tracking-wider mb-1">Diff</span>
                <span className="font-bold text-[#1a1f36]">{bestProject.difficulty}</span>
              </div>
            </div>

            <div className="bg-[#fdfbf7] border border-[#f0eae1] rounded-2xl p-8">
              <h4 className="font-serif text-[#1a1f36] text-xl mb-6">Why this fits you:</h4>
              <ul className="space-y-4">
                {bestProject.matchReasons.map((reason, i) => {
                  let cleanReason = reason
                    .replace('Perfectly aligns with your interest in', 'Matches your interest in')
                    .replace('Utilizes your core skills like', 'Uses your skills in')
                    .replace('Matches your preferred tech stack', 'Uses technologies you know')
                    .replace('Excellent fit for', 'Great for')
                    .replace('Fits within your', 'Fits your');
                  
                  return (
                    <li key={i} className="flex items-start gap-4 text-[#1a1f36] font-medium text-lg">
                      <CheckCircle2 className="text-[#f2d06b] shrink-0 mt-1" size={24} fill="#fdfbf7" />
                      <span>{cleanReason}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Options */}
      <h3 className="text-3xl font-serif text-[#1a1f36] mb-8">Other Directions to Explore</h3>
      
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {alternatives.map((project, index) => {
          let drawback = project.missedReasons && project.missedReasons.length > 0 ? project.missedReasons[0] : "Slightly weaker overall profile alignment.";
          drawback = drawback.replace('Domain mismatch', 'Different industry focus')
                             .replace('Requires skills you haven\'t listed', 'Needs skills you haven\'t listed')
                             .replace('Takes', 'Requires')
                             .replace('Difficulty is', 'The complexity is');

          return (
            <div key={project.id} className="card bg-white flex flex-col h-full animate-fade-in hover:border-primary/50" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <div className="flex justify-between items-start mb-6">
                <h4 className="font-serif text-2xl text-[#1a1f36] leading-tight pr-4">{project.title}</h4>
                <div className="bg-[#fdf2eb] px-3 py-1.5 rounded-full text-sm font-black text-primary shrink-0">{project.matchScore}%</div>
              </div>
              
              <p className="text-[#576077] mb-8 flex-1 text-lg">{project.shortDescription}</p>
              
              <div className="pt-6 border-t border-[#f0eae1]">
                <div className="text-sm font-bold text-[#1a1f36] mb-3 uppercase tracking-wider">Why did this rank lower?</div>
                <div className="text-[1.05rem] text-[#576077] flex items-start gap-3 mb-8 bg-[#fdfbf7] p-4 rounded-xl border border-[#f0eae1]">
                  <span>{drawback}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 font-medium text-muted cursor-pointer hover:text-primary transition-colors">
                    <input type="checkbox" checked={selectedForCompare.some(p => p.id === project.id)} onChange={() => toggleCompare(project)} className="accent-primary w-5 h-5" /> Compare
                  </label>
                  <button className="font-bold text-primary hover:text-primary-hover text-lg" onClick={() => navigate(`/project/${project.id}`)}>Passport &rarr;</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {displayCount < allRecommendations.length && (
        <div className="flex justify-center mt-12 mb-32">
          <button className="btn-secondary py-4 px-10 text-xl" onClick={() => setDisplayCount(prev => prev + 3)}>
            Explore More Options
          </button>
        </div>
      )}

      {/* Compare Drawer */}
      {selectedForCompare.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#f0eae1] p-6 z-40 shadow-[0_-15px_40px_rgba(26,31,54,0.08)]">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-serif text-2xl text-[#1a1f36] mr-4"><Scale className="inline mr-2 text-primary" size={28} /> Compare ({selectedForCompare.length}/3)</span>
              {selectedForCompare.map(p => (
                <span key={p.id} className="bg-[#fdfbf7] border border-[#f0eae1] text-[#1a1f36] text-[1.05rem] font-medium px-4 py-2 rounded-full inline-flex items-center gap-3 shadow-sm">
                  {p.title.substring(0, 20)}...
                  <XCircle size={18} className="cursor-pointer text-muted hover:text-primary" onClick={() => toggleCompare(p)} />
                </span>
              ))}
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="btn-secondary flex-1 md:flex-none" onClick={() => setSelectedForCompare([])}>Clear</button>
              <button className="btn-primary flex-1 md:flex-none px-10" disabled={selectedForCompare.length < 2} onClick={() => setShowCompare(true)}>
                Compare Directions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Modal */}
      {showCompare && selectedForCompare.length > 1 && (
        <div className="fixed inset-0 bg-[#1a1f36]/70 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <div className="bg-white rounded-[2rem] w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-[#f0eae1] p-8 flex justify-between items-center z-10">
              <h2 className="text-4xl font-serif text-[#1a1f36]">Compare Directions</h2>
              <button onClick={() => setShowCompare(false)} className="text-muted hover:text-[#1a1f36] bg-[#fdfbf7] p-3 rounded-full"><X size={28} /></button>
            </div>
            
            <div className="p-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-6 border-b-2 border-[#f0eae1] w-1/4"></th>
                      {selectedForCompare.map(p => (
                        <th key={p.id} className="p-6 border-b-2 border-[#f0eae1] w-1/4 align-top">
                          <div className="text-2xl font-serif text-[#1a1f36] mb-3 leading-tight">{p.title}</div>
                          <div className="text-3xl font-black text-primary">{p.matchScore}% Match</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-6 border-b border-[#fdfbf7] font-bold text-muted uppercase tracking-wider text-sm">Interest Fit</td>
                      {selectedForCompare.map(p => <td key={p.id} className="p-6 border-b border-[#fdfbf7] font-medium text-[1.05rem]">{p.interests.includes(profile.interests) || profile.interests === 'Any' ? <span className="text-[#4a7c82] flex items-center gap-2"><Check size={20}/> Great fit</span> : <span className="text-[#f2d06b] flex items-center gap-2"><AlertTriangle size={20}/> Different interest</span>}</td>)}
                    </tr>
                    <tr>
                      <td className="p-6 border-b border-[#fdfbf7] font-bold text-muted uppercase tracking-wider text-sm">Difficulty</td>
                      {selectedForCompare.map(p => <td key={p.id} className="p-6 border-b border-[#fdfbf7] font-medium text-[1.05rem] text-[#1a1f36]">{p.difficulty}</td>)}
                    </tr>
                    <tr>
                      <td className="p-6 border-b border-[#fdfbf7] font-bold text-muted uppercase tracking-wider text-sm">Time Needed</td>
                      {selectedForCompare.map(p => <td key={p.id} className="p-6 border-b border-[#fdfbf7] font-medium text-[1.05rem] text-[#1a1f36]">{p.duration}</td>)}
                    </tr>
                    <tr>
                      <td className="p-6 border-b border-[#fdfbf7] font-bold text-muted uppercase tracking-wider text-sm">Team Fit</td>
                      {selectedForCompare.map(p => <td key={p.id} className="p-6 border-b border-[#fdfbf7] font-medium text-[1.05rem] text-[#1a1f36]">Needs {p.teamSize} members</td>)}
                    </tr>
                    <tr>
                      <td className="p-6 border-b border-[#fdfbf7] font-bold text-muted uppercase tracking-wider text-sm">Technology</td>
                      {selectedForCompare.map(p => <td key={p.id} className="p-6 border-b border-[#fdfbf7]">
                        <div className="flex flex-wrap gap-2">
                          {p.technologies.slice(0, 4).map(t => <span key={t} className="bg-[#f0eae1] px-3 py-1.5 rounded-lg text-[#1a1f36] font-medium text-sm">{t}</span>)}
                        </div>
                      </td>)}
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-12 bg-[#fdf2eb] border border-[#f7d6b8] rounded-[2rem] p-10 text-center">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Recommendation</h3>
                <p className="text-[#1a1f36] text-2xl max-w-4xl mx-auto leading-relaxed font-serif">
                  We highly recommend <strong>{selectedForCompare.reduce((prev, current) => (prev.matchScore > current.matchScore) ? prev : current).title}</strong>. 
                  It is the safest and most rewarding choice because it aligns perfectly with what you already know, while easily fitting into your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recommendations;
