import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import ProfileForm from './pages/ProfileForm';
import Recommendations from './pages/Recommendations';
import ProjectDetails from './pages/ProjectDetails';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import MyProjects from './pages/MyProjects';
import AppLayout from './components/AppLayout';

function App() {
  const [profile, setProfile] = useState(null);
  const [authUser, setAuthUser] = useState(() => {
    const saved = localStorage.getItem('promptx_session');
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem('promptx_session');
    setAuthUser(null);
    setProfile(null);
  };

  const ProtectedRoute = ({ children }) => {
    if (!authUser) {
      return <Navigate to="/auth" replace />;
    }
    return (
      <AppLayout authUser={authUser} handleLogout={handleLogout}>
        {children}
      </AppLayout>
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing authUser={authUser} handleLogout={handleLogout} />} />
          <Route path="/auth" element={authUser ? <Navigate to="/dashboard" replace /> : <Auth setAuthUser={setAuthUser} />} />
          
          {/* Protected Routes inside AppLayout */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard authUser={authUser} /></ProtectedRoute>} />
          <Route path="/form" element={<ProtectedRoute><ProfileForm setProfile={setProfile} /></ProtectedRoute>} />
          <Route path="/recommendations" element={<ProtectedRoute><Recommendations profile={profile} /></ProtectedRoute>} />
          <Route path="/project/:id" element={<ProtectedRoute><ProjectDetails profile={profile} authUser={authUser} /></ProtectedRoute>} />
          <Route path="/my-projects" element={<ProtectedRoute><MyProjects authUser={authUser} /></ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
