import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  UserCheck, 
  Briefcase, 
  Sun, 
  Moon, 
  User, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  Building2
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  theme, 
  toggleTheme, 
  userRole, 
  setUserRole, 
  currentUser, 
  onOpenAuth 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  const toggleRole = () => {
    const newRole = userRole === 'student' ? 'recruiter' : 'student';
    setUserRole(newRole);
    if (newRole === 'recruiter') {
      setActiveTab('recruiter');
    } else {
      setActiveTab('learning');
    }
  };

  return (
    <header className="navbar-wrapper" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-card)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--bg-glass-border)',
      height: 'var(--header-height)'
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleTabChange('concept')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <GraduationCap size={24} />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Edu<span className="text-gradient">Hire</span>
            </span>
            <span className="badge badge-cyan" style={{ marginLeft: '0.5rem', fontSize: '0.65rem' }}>
              STUDENT & RECRUITER HUB
            </span>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={() => handleTabChange('concept')} 
            className={`nav-link ${activeTab === 'concept' ? 'active' : ''}`}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              color: activeTab === 'concept' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              background: activeTab === 'concept' ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
              fontWeight: activeTab === 'concept' ? 600 : 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Sparkles size={16} /> How It Works
          </button>

          <button 
            onClick={() => handleTabChange('learning')} 
            className={`nav-link ${activeTab === 'learning' ? 'active' : ''}`}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              color: activeTab === 'learning' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              background: activeTab === 'learning' ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
              fontWeight: activeTab === 'learning' ? 600 : 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <BookOpen size={16} /> Learn Skills
          </button>

          <button 
            onClick={() => handleTabChange('profile')} 
            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              color: activeTab === 'profile' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              background: activeTab === 'profile' ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
              fontWeight: activeTab === 'profile' ? 600 : 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <UserCheck size={16} /> Student Qualifications
          </button>

          <button 
            onClick={() => handleTabChange('recruiter')} 
            className={`nav-link ${activeTab === 'recruiter' ? 'active' : ''}`}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              color: activeTab === 'recruiter' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              background: activeTab === 'recruiter' ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
              fontWeight: activeTab === 'recruiter' ? 600 : 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Briefcase size={16} /> Recruiter Hiring
          </button>
        </nav>

        {/* Right Actions & Control Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          
          {/* Role Switcher Pill */}
          <button 
            onClick={toggleRole}
            title="Toggle between Student Mode and Recruiter Mode"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              background: userRole === 'student' ? 'rgba(99, 102, 241, 0.15)' : 'rgba(6, 182, 212, 0.15)',
              border: `1px solid ${userRole === 'student' ? 'rgba(99, 102, 241, 0.4)' : 'rgba(6, 182, 212, 0.4)'}`,
              color: userRole === 'student' ? '#a5b4fc' : '#67e8f9',
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
          >
            {userRole === 'student' ? <GraduationCap size={14} /> : <Building2 size={14} />}
            <span>Mode: {userRole === 'student' ? 'Student' : 'Company'}</span>
            <ChevronRight size={14} style={{ opacity: 0.6 }} />
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="btn-secondary btn-sm"
            style={{ padding: '0.55rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? <Sun size={18} style={{ color: '#f59e0b' }} /> : <Moon size={18} style={{ color: '#6366f1' }} />}
          </button>

          {/* User Profile / Auth Action */}
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div 
                onClick={() => handleTabChange('profile')}
                title="View & Edit Qualifications Profile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--bg-glass-border)'
                }}
              >
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name} 
                  style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{currentUser.name}</span>
              </div>
              <button 
                onClick={onOpenAuth}
                className="btn btn-secondary btn-sm"
                title="Sign In with another Account or Role"
                style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
              >
                Switch Account
              </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="btn btn-primary btn-sm"
            >
              <User size={15} /> Sign In
            </button>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', color: 'var(--text-primary)', padding: '0.4rem' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--bg-glass-border)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <button onClick={() => handleTabChange('concept')} className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
            <Sparkles size={16} /> How It Works (Concept)
          </button>
          <button onClick={() => handleTabChange('learning')} className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
            <BookOpen size={16} /> Learn Skills & Courses
          </button>
          <button onClick={() => handleTabChange('profile')} className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
            <UserCheck size={16} /> Student Qualification Profile
          </button>
          <button onClick={() => handleTabChange('recruiter')} className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
            <Briefcase size={16} /> Recruiter Internship Hub
          </button>
        </div>
      )}
    </header>
  );
}
