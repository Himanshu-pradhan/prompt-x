import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Folder, Compass, CheckCircle2, Circle } from 'lucide-react';

function MyProjects({ authUser }) {
  const navigate = useNavigate();
  const [savedProjects, setSavedProjects] = useState([]);

  useEffect(() => {
    if (authUser?.email) {
      const saved = JSON.parse(localStorage.getItem(`ai4u_saved_${authUser.email}`) || '[]');
      setSavedProjects(saved);
    }
  }, [authUser]);

  const updateStatus = (id, newStatus) => {
    const updated = savedProjects.map(p => {
      if (p.id === id) {
        return { ...p, status: newStatus };
      }
      return p;
    });
    setSavedProjects(updated);
    localStorage.setItem(`ai4u_saved_${authUser.email}`, JSON.stringify(updated));
  };

  const removeProject = (id) => {
    const updated = savedProjects.filter(p => p.id !== id);
    setSavedProjects(updated);
    localStorage.setItem(`ai4u_saved_${authUser.email}`, JSON.stringify(updated));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Selected': return 'bg-[#fdf2eb] text-[#f26440] border-[#f7d6b8]';
      case 'In Progress': return 'bg-[#fff9e6] text-[#b38a12] border-[#f2d06b]';
      case 'Completed': return 'bg-[#f2f7f5] text-[#4a7c82] border-[#d1e3dd]';
      case 'Shortlisted': return 'bg-[#fdfbf7] text-[#576077] border-[#f0eae1]';
      default: return 'bg-white text-muted border-[#f0eae1]';
    }
  };

  const stats = {
    total: savedProjects.length,
    shortlisted: savedProjects.filter(p => p.status === 'Shortlisted' || p.status === 'Interested').length,
    selected: savedProjects.filter(p => p.status === 'Selected').length,
    inProgress: savedProjects.filter(p => p.status === 'In Progress').length,
    completed: savedProjects.filter(p => p.status === 'Completed').length,
  };

  return (
    <div className="animate-fade-in pb-20">
      
      <div className="flex items-center gap-4 mb-12">
        <div className="bg-[#f2f7f5] p-4 rounded-2xl text-[#4a7c82]">
          <Folder size={32} />
        </div>
        <div>
          <h1 className="text-4xl font-serif text-[#1a1f36]">My Projects</h1>
          <p className="text-xl text-muted">Your saved and selected projects.</p>
        </div>
      </div>

      {/* Summary Area */}
      <div className="bg-white border-2 border-[#f0eae1] rounded-[2rem] p-8 mb-12 flex flex-wrap gap-10">
        <div>
          <div className="text-sm font-bold text-muted uppercase tracking-widest mb-1">Total Saved</div>
          <div className="text-3xl font-serif text-[#1a1f36]">{stats.total}</div>
        </div>
        <div>
          <div className="text-sm font-bold text-muted uppercase tracking-widest mb-1">Shortlisted</div>
          <div className="text-3xl font-serif text-[#1a1f36]">{stats.shortlisted}</div>
        </div>
        <div>
          <div className="text-sm font-bold text-[#f26440] uppercase tracking-widest mb-1">Selected</div>
          <div className="text-3xl font-serif text-[#f26440]">{stats.selected}</div>
        </div>
        <div>
          <div className="text-sm font-bold text-[#b38a12] uppercase tracking-widest mb-1">In Progress</div>
          <div className="text-3xl font-serif text-[#b38a12]">{stats.inProgress}</div>
        </div>
        <div>
          <div className="text-sm font-bold text-[#4a7c82] uppercase tracking-widest mb-1">Completed</div>
          <div className="text-3xl font-serif text-[#4a7c82]">{stats.completed}</div>
        </div>
      </div>

      {savedProjects.length === 0 ? (
        <div className="text-center py-20 bg-[#fdfbf7] rounded-[2rem] border-2 border-dashed border-[#f0eae1]">
          <Compass size={48} className="mx-auto text-muted mb-4 opacity-50" />
          <h3 className="text-2xl font-serif text-[#1a1f36] mb-2">My Projects is empty.</h3>
          <p className="text-muted text-lg mb-8 max-w-md mx-auto">Explore project ideas and save the ones that interest you. They will appear here.</p>
          <button className="btn-primary" onClick={() => navigate('/form')}>Find My Best Project</button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {savedProjects.map(project => (
            <div key={project.id} className="card bg-white flex flex-col h-full border-2 border-[#f0eae1] hover:border-[#f7d6b8]">
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-4 ${getStatusColor(project.status)}`}>
                    {project.status === 'Selected' ? <CheckCircle2 size={14}/> : <Circle size={14}/>}
                    {project.status}
                  </div>
                  <h4 className="font-serif text-2xl text-[#1a1f36] leading-tight mb-2">{project.title}</h4>
                  <div className="text-sm font-medium text-muted">{project.interests[0]} • {project.difficulty} • {project.duration}</div>
                </div>
                <div className="bg-[#fdf2eb] px-3 py-1.5 rounded-full text-sm font-black text-primary shrink-0">{project.matchScore}%</div>
              </div>
              
              <p className="text-[#576077] mb-8 flex-1 text-[1.05rem] leading-relaxed">{project.shortDescription}</p>
              
              <div className="pt-6 border-t border-[#f0eae1] flex flex-wrap gap-4 items-center justify-between">
                <select 
                  className="bg-[#fdfbf7] border border-[#f0eae1] rounded-xl px-4 py-2 font-medium text-sm text-[#1a1f36] cursor-pointer outline-none"
                  value={project.status}
                  onChange={(e) => updateStatus(project.id, e.target.value)}
                >
                  <option value="Interested">Interested</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Selected">Selected</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
                
                <div className="flex items-center gap-4">
                  <button onClick={() => removeProject(project.id)} className="text-sm font-bold text-muted hover:text-red-500">Remove</button>
                  <button onClick={() => navigate(`/project/${project.id}`)} className="text-sm font-bold text-primary hover:text-[#d95837]">Open Passport &rarr;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default MyProjects;
