import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, LogIn, UserPlus } from 'lucide-react';

function Auth({ setAuthUser }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('promptx_users') || '{}');

    if (isLogin) {
      const user = users[formData.email];
      if (!user || user.password !== formData.password) {
        setError('Invalid email or password.');
        return;
      }
      localStorage.setItem('promptx_session', JSON.stringify(user));
      setAuthUser(user);
      navigate('/form');
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (users[formData.email]) {
        setError('An account with this email already exists.');
        return;
      }
      const newUser = { name: formData.name, email: formData.email, password: formData.password };
      users[formData.email] = newUser;
      localStorage.setItem('promptx_users', JSON.stringify(users));
      
      // Auto login after signup
      localStorage.setItem('promptx_session', JSON.stringify(newUser));
      setAuthUser(newUser);
      navigate('/form');
    }
  };

  return (
    <div className="container min-h-screen flex flex-col pt-8">
      <nav className="flex items-center gap-3 text-primary font-bold text-2xl font-serif mb-12 cursor-pointer w-fit" onClick={() => navigate('/')}>
        <Compass size={32} strokeWidth={2.5} />
        <span>AI 4 U</span>
      </nav>

      <div className="flex-1 flex items-center justify-center">
        <div className="card w-full max-w-md animate-fade-in shadow-xl bg-white border-2 border-[#f0eae1]">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif text-[#1a1f36] mb-2">{isLogin ? 'Welcome Back' : 'Join AI 4 U'}</h2>
            <p className="text-muted text-lg">{isLogin ? 'Login to continue your journey' : 'Create an account to start your journey'}</p>
          </div>

          {error && (
            <div className="bg-[#fdf2eb] text-[#f26440] p-4 rounded-xl mb-6 font-medium text-center border border-[#f7d6b8]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="form-group mb-0">
                <label className="form-label text-sm text-muted">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control rounded-xl py-3 text-lg" 
                  placeholder="Student Name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
            )}
            <div className="form-group mb-0">
              <label className="form-label text-sm text-muted">Email Address</label>
              <input 
                type="email" 
                name="email"
                className="form-control rounded-xl py-3 text-lg" 
                placeholder="you@university.edu"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group mb-0">
              <label className="form-label text-sm text-muted">Password</label>
              <input 
                type="password" 
                name="password"
                className="form-control rounded-xl py-3 text-lg" 
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
            {!isLogin && (
              <div className="form-group mb-0">
                <label className="form-label text-sm text-muted">Confirm Password</label>
                <input 
                  type="password" 
                  name="confirmPassword"
                  className="form-control rounded-xl py-3 text-lg" 
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required 
                />
              </div>
            )}

            <button type="submit" className="btn-primary w-full py-4 text-xl mt-4 flex items-center justify-center gap-2">
              {isLogin ? <><LogIn size={20} /> Login</> : <><UserPlus size={20} /> Create Account</>}
            </button>
          </form>

          <div className="mt-8 text-center text-muted border-t border-[#f0eae1] pt-6">
            {isLogin ? (
              <p>Don't have an account? <span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => {setIsLogin(false); setError('');}}>Create one</span></p>
            ) : (
              <p>Already have an account? <span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => {setIsLogin(true); setError('');}}>Login</span></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
