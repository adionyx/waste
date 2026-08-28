import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Building2, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess, showToast }) {
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [role, setRole] = useState('student'); // 'student' or 'recruiter'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    universityOrCompany: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userPayload = {
      name: formData.name || (role === 'student' ? 'Alex Chen' : 'TechCorp Hiring Lead'),
      email: formData.email,
      role: role,
      university: role === 'student' ? (formData.universityOrCompany || 'Stanford University') : undefined,
      company: role === 'recruiter' ? (formData.universityOrCompany || 'TechCorp') : undefined,
      avatar: role === 'student' 
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
        : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    };

    onLoginSuccess(userPayload);
    showToast(`Welcome back, ${userPayload.name}! Logged in as ${role === 'student' ? 'Student' : 'Recruiter'}.`, 'success');
    onClose();
  };

  const handleQuickDemoLogin = (demoRole) => {
    const demoPayload = demoRole === 'student' ? {
      name: 'Alex Chen',
      email: 'alex.chen@stanford.edu',
      role: 'student',
      university: 'Stanford University',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      degree: 'B.S. Computer Science',
      gpa: '3.9 / 4.0',
      gradYear: '2026',
      bio: 'Passionate full-stack developer with 2+ years of experience building modern React web apps & REST APIs.',
      contactEmail: 'alex.chen@stanford.edu',
      availability: 'Open for Summer 2026 Internship',
      skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      badges: ['Full-Stack Web Architect', 'Verified Top 5% Coder'],
      projects: [
        { title: 'TaskFlow AI', link: 'https://github.com/example/taskflow', desc: 'AI-assisted task management platform built with React & FastAPI.' }
      ]
    } : {
      name: 'Sarah Connor',
      email: 'recruiter@techcorp.io',
      role: 'recruiter',
      company: 'TechCorp Innovations',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    };

    onLoginSuccess(demoPayload);
    showToast(`⚡ Quick 1-Click Demo Login as ${demoPayload.name} (${demoRole.toUpperCase()})`, 'success');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 300,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '460px',
        padding: '2.25rem',
        position: 'relative',
        boxShadow: 'var(--shadow-lg)'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
        >
          <X size={22} />
        </button>

        {/* Modal Title */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--gradient-primary)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            marginBottom: '0.75rem'
          }}>
            <GraduationCap size={26} />
          </div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>
            {authMode === 'login' ? 'Welcome Back' : 'Create EduHire Account'}
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            {authMode === 'login' ? 'Sign in to access courses and recruiter offers' : 'Join thousands of students getting hired'}
          </p>
        </div>

        {/* Role Switcher */}
        <div style={{
          display: 'flex',
          background: 'var(--bg-tertiary)',
          padding: '0.3rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem'
        }}>
          <button
            onClick={() => setRole('student')}
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              background: role === 'student' ? 'var(--gradient-primary)' : 'transparent',
              color: role === 'student' ? '#fff' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <GraduationCap size={15} /> Student
          </button>
          
          <button
            onClick={() => setRole('recruiter')}
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              background: role === 'recruiter' ? 'var(--gradient-cyan)' : 'transparent',
              color: role === 'recruiter' ? '#fff' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <Building2 size={15} /> Recruiter
          </button>
        </div>

        {/* 1-Click Demo Login Shortcuts */}
        <div style={{
          background: 'rgba(99, 102, 241, 0.08)',
          border: '1px dashed rgba(99, 102, 241, 0.3)',
          padding: '0.75rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.25rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '0.4rem' }}>
            ⚡ 1-CLICK QUICK DEMO LOGIN
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              type="button" 
              onClick={() => handleQuickDemoLogin('student')}
              className="btn btn-secondary btn-sm"
              style={{ flex: 1, fontSize: '0.75rem' }}
            >
              Demo Student
            </button>
            <button 
              type="button" 
              onClick={() => handleQuickDemoLogin('recruiter')}
              className="btn btn-secondary btn-sm"
              style={{ flex: 1, fontSize: '0.75rem' }}
            >
              Demo Recruiter
            </button>
          </div>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit}>
          {authMode === 'signup' && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  style={{ paddingLeft: '2.5rem' }}
                  required
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="email"
                placeholder={role === 'student' ? 'student@university.edu' : 'recruiter@company.com'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
                required
              />
            </div>
          </div>

          {authMode === 'signup' && (
            <div className="form-group">
              <label className="form-label">{role === 'student' ? 'University Name' : 'Company Name'}</label>
              <input
                type="text"
                placeholder={role === 'student' ? 'e.g. Stanford University' : 'e.g. Google, TechCorp'}
                value={formData.universityOrCompany}
                onChange={(e) => setFormData({ ...formData, universityOrCompany: e.target.value })}
                className="form-input"
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
            {authMode === 'login' ? 'Sign In to Account' : 'Register Account'}
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Footer Toggle Mode */}
        <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          {authMode === 'login' ? (
            <span>
              Don't have an account?{' '}
              <button onClick={() => setAuthMode('signup')} style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                Sign Up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button onClick={() => setAuthMode('login')} style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                Sign In
              </button>
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
