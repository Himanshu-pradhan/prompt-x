import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Compass, User, Lightbulb, Folder, Scale, Bot, Layout, Users, LogOut, Menu, X } from 'lucide-react';

function AppLayout({ children, authUser, handleLogout }) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  if (!authUser) return children;

  const initial = authUser.name ? authUser.name.charAt(0).toUpperCase() : authUser.email.charAt(0).toUpperCase();

  const navItems = [
    { path: '/dashboard', icon: Compass, label: 'My Compass', desc: 'Find your best project' },
    { path: '/form', icon: User, label: 'My Profile', desc: 'Your skills & interests' },
    { path: '/recommendations', icon: Lightbulb, label: 'Project Ideas', desc: 'AI-recommended projects' },
    { path: '/my-projects', icon: Folder, label: 'My Projects', desc: 'Saved & selected projects' },
  ];

  const Sidebar = () => (
    <div className="flex flex-col h-full bg-[#fdfbf7] border-r border-[#f0eae1]">
      <div className="p-6 pb-2 border-b border-[#f0eae1] flex items-center gap-3">
        <Compass size={32} className="text-[#f26440]" strokeWidth={2.5} />
        <span className="font-serif font-bold text-2xl text-[#1a1f36]">AI 4 U</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `flex items-start gap-4 p-4 rounded-2xl transition-all ${isActive ? 'bg-[#fdf2eb] border border-[#f7d6b8]' : 'hover:bg-[#f2f7f5] border border-transparent'}`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={24} className={`mt-0.5 ${isActive ? 'text-[#f26440]' : 'text-[#4a7c82]'}`} />
                <div>
                  <div className={`font-bold text-[1.05rem] ${isActive ? 'text-[#f26440]' : 'text-[#1a1f36]'}`}>{item.label}</div>
                  <div className="text-sm text-[#576077]">{item.desc}</div>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-[320px] shrink-0 h-full">
        <Sidebar />
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-[#1a1f36]/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="w-[300px] bg-white h-full relative z-10 shadow-2xl">
            <button className="absolute top-6 right-4 p-2 bg-[#fdfbf7] rounded-full text-muted" onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-[80px] shrink-0 border-b border-[#f0eae1] bg-white flex items-center justify-between px-6 z-20">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-[#1a1f36] bg-[#fdfbf7] rounded-xl" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="font-serif text-2xl font-bold text-[#1a1f36] lg:hidden flex items-center gap-2">
              <Compass size={24} className="text-[#f26440]" /> AI 4 U
            </h1>
          </div>

          <div className="relative">
            <button 
              className="w-12 h-12 rounded-full bg-[#fdf2eb] border-2 border-[#f26440] text-[#f26440] font-bold text-xl flex items-center justify-center hover:bg-[#f26440] hover:text-white transition-colors"
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            >
              {initial}
            </button>

            {profileMenuOpen && (
              <div className="absolute top-14 right-0 w-64 bg-white rounded-2xl shadow-xl border border-[#f0eae1] overflow-hidden animate-fade-in z-50">
                <div className="p-5 border-b border-[#f0eae1] bg-[#fdfbf7]">
                  <div className="font-bold text-[#1a1f36] text-lg">{authUser.name || 'Student'}</div>
                  <div className="text-sm text-[#576077] truncate">{authUser.email}</div>
                </div>
                <div className="p-2">
                  <button onClick={() => { setProfileMenuOpen(false); navigate('/form'); }} className="w-full text-left px-4 py-3 hover:bg-[#f2f7f5] rounded-xl font-medium flex items-center gap-3">
                    <User size={18} className="text-[#4a7c82]" /> My Profile
                  </button>
                  <button onClick={() => { setProfileMenuOpen(false); navigate('/my-projects'); }} className="w-full text-left px-4 py-3 hover:bg-[#f2f7f5] rounded-xl font-medium flex items-center gap-3">
                    <Folder size={18} className="text-[#4a7c82]" /> My Projects
                  </button>
                </div>
                <div className="p-2 border-t border-[#f0eae1]">
                  <button onClick={() => { setProfileMenuOpen(false); handleLogout(); }} className="w-full text-left px-4 py-3 hover:bg-[#fdf2eb] text-[#f26440] rounded-xl font-bold flex items-center gap-3">
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Workspace Scroll Area */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-6xl mx-auto p-4 md:p-8 lg:p-12">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}

export default AppLayout;
