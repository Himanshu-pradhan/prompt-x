import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, ArrowRight, ArrowLeft } from 'lucide-react';

function ProfileForm({ setProfile }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    branch: 'CSE',
    skills: '',
    interests: 'Healthcare',
    skillLevel: 'Intermediate',
    teamSize: '1',
    duration: '2 months',
    goal: 'Academic'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleChipSelect = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const skillsArray = formData.skills.split(',').map(s => s.trim()).filter(s => s);
    setProfile({
      ...formData,
      skills: skillsArray.length > 0 ? skillsArray : ['General']
    });
    navigate('/recommendations');
  };

  return (
    <div className="container min-h-screen flex flex-col pt-8">
      <div className="max-w-3xl mx-auto w-full flex-1 pt-6">
        <div className="step-indicator">
          {[1, 2, 3, 4].map(s => (
            <div key={s} className={`step-dot ${s <= step ? 'active' : ''}`} />
          ))}
        </div>
        <div className="text-center mb-10">
          <span className="badge badge-primary uppercase tracking-widest text-sm font-bold shadow-sm">STEP {step} OF {totalSteps}</span>
        </div>

        <form onSubmit={step === totalSteps ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} className="animate-fade-in" key={step}>
          
          {step === 1 && (
            <div>
              <h2 className="text-5xl font-serif text-center mb-12 text-[#1a1f36]">What is your background?</h2>
              
              <div className="form-group mb-12">
                <label className="form-label text-center mb-6">What do you study?</label>
                <div className="chip-grid justify-center">
                  {['CSE', 'IT', 'ECE', 'EEE', 'Mechanical', 'Civil', 'BCA'].map(opt => (
                    <div 
                      key={opt} 
                      className={`chip ${formData.branch === opt ? 'selected' : ''}`}
                      onClick={() => handleChipSelect('branch', opt)}
                    >
                      {opt === 'CSE' ? 'Computer Science (CSE)' : opt}
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label text-center mb-6">How experienced are you?</label>
                <div className="grid md:grid-cols-3 gap-6">
                  {['Beginner', 'Intermediate', 'Advanced'].map(opt => (
                    <div 
                      key={opt} 
                      className={`card text-center cursor-pointer border-2 transition-colors ${formData.skillLevel === opt ? 'border-primary bg-[#fdf2eb]' : 'border-border-light hover:border-secondary'}`}
                      onClick={() => handleChipSelect('skillLevel', opt)}
                      style={{ padding: '2rem 1.5rem' }}
                    >
                      <h4 className="font-bold text-xl mb-2">{opt}</h4>
                      <p className="text-muted text-sm">
                        {opt === 'Beginner' && 'Learning the basics'}
                        {opt === 'Intermediate' && 'Can build simple things'}
                        {opt === 'Advanced' && 'Confident building systems'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-5xl font-serif text-center mb-12 text-[#1a1f36]">What can you do?</h2>
              <div className="form-group mb-12">
                <label className="form-label text-center mb-4">List your technical skills</label>
                <p className="text-center text-muted mb-6">Separate them with commas. (e.g. Python, SQL, React)</p>
                <input 
                  type="text" 
                  id="skills" 
                  name="skills" 
                  className="form-control text-xl text-center py-4 rounded-2xl" 
                  value={formData.skills} 
                  onChange={handleChange} 
                  placeholder="Type your skills here..." 
                  required 
                  autoFocus
                />
              </div>
              <div className="form-group mt-12">
                <label className="form-label text-center mb-6">What are you most interested in?</label>
                <div className="chip-grid justify-center">
                  {['Healthcare', 'Finance', 'Education', 'Agriculture', 'Environment', 'Cybersecurity', 'E-commerce', 'Smart City', 'Transportation', 'Data Science', 'Any'].map(opt => (
                    <div 
                      key={opt} 
                      className={`chip ${formData.interests === opt ? 'selected' : ''}`}
                      onClick={() => handleChipSelect('interests', opt)}
                    >
                      {opt === 'Any' ? "I'm open to anything" : opt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-5xl font-serif text-center mb-12 text-[#1a1f36]">How do you work?</h2>
              
              <div className="form-group mb-12">
                <label className="form-label text-center mb-6">How many people are on your team?</label>
                <div className="chip-grid justify-center">
                  {['1', '2', '3', '4', '5+'].map(opt => (
                    <div 
                      key={opt} 
                      className={`chip ${formData.teamSize === opt ? 'selected' : ''}`}
                      onClick={() => handleChipSelect('teamSize', opt)}
                      style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}
                    >
                      {opt === '1' ? 'Just me' : `${opt} people`}
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group mt-12">
                <label className="form-label text-center mb-6">How much time do you have?</label>
                <div className="chip-grid justify-center">
                  {['1 month', '2 months', '3 months', '6 months'].map(opt => (
                    <div 
                      key={opt} 
                      className={`chip ${formData.duration === opt ? 'selected' : ''}`}
                      onClick={() => handleChipSelect('duration', opt)}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-5xl font-serif text-center mb-12 text-[#1a1f36]">What is the goal?</h2>
              <div className="form-group">
                <label className="form-label text-center mb-8">What do you want this project to achieve?</label>
                <div className="grid md:grid-cols-2 gap-6">
                  {['Academic', 'Startup Idea', 'Research', 'Social Impact'].map(opt => (
                    <div 
                      key={opt} 
                      className={`card text-center cursor-pointer border-2 transition-colors ${formData.goal === opt ? 'border-primary bg-[#fdf2eb]' : 'border-border-light hover:border-secondary'}`}
                      onClick={() => handleChipSelect('goal', opt)}
                    >
                      <h4 className="font-bold text-xl mb-2">{opt}</h4>
                      <p className="text-muted text-sm">
                        {opt === 'Academic' && 'Good grades, standard requirements'}
                        {opt === 'Startup Idea' && 'Building a real product or SaaS'}
                        {opt === 'Research' && 'Exploring a new algorithm or paper'}
                        {opt === 'Social Impact' && 'Helping a community or environment'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-16 pt-8">
            {step > 1 ? (
              <button type="button" className="btn-secondary flex items-center gap-2" onClick={handlePrev}>
                <ArrowLeft size={20} /> Back
              </button>
            ) : <div></div>}
            
            <button type="submit" className="btn-primary flex items-center gap-2 text-xl px-10">
              {step === totalSteps ? 'Find My Project' : 'Continue'} <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
