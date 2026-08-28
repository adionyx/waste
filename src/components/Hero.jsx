import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Zap, 
  Users, 
  Building2 
} from 'lucide-react';

export default function Hero({ onNavigate }) {
  return (
    <section style={{
      position: 'relative',
      padding: '4rem 0 3rem 0',
      background: 'var(--gradient-hero)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Hero Pill Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="badge badge-indigo" style={{ padding: '0.4rem 1.1rem', fontSize: '0.82rem', borderRadius: 'var(--radius-full)' }}>
            <Zap size={14} style={{ color: '#f59e0b' }} /> Direct Student-to-Company Internship Pipeline
          </span>
        </div>

        {/* Hero Headline */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 2rem auto' }}>
          <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Learn In-Demand Skills. <br />
            <span className="text-gradient">Post Your Qualifications.</span> <br />
            Get Hired for Internships.
          </h1>
          
          <p style={{ fontSize: '1.18rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto' }}>
            The all-in-one platform where students complete verified skill modules, build an interactive qualification portfolio, and get directly recruited by top companies for high-paying internships.
          </p>
        </div>

        {/* Action CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <button 
            onClick={() => onNavigate('learning')} 
            className="btn btn-primary btn-lg"
          >
            <GraduationCap size={20} /> Start Learning Courses
            <ArrowRight size={18} />
          </button>
          
          <button 
            onClick={() => onNavigate('profile')} 
            className="btn btn-emerald btn-lg"
          >
            <Award size={20} /> Post Student Qualifications
          </button>

          <button 
            onClick={() => onNavigate('recruiter')} 
            className="btn btn-secondary btn-lg"
          >
            <Building2 size={20} /> Recruiter Hiring Portal
          </button>
        </div>

        {/* Interactive Stats Banner */}
        <div className="glass-card" style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '1.75rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center',
          border: '1px solid rgba(99, 102, 241, 0.2)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--accent-primary)', marginBottom: '0.2rem' }}>
              <Users size={20} />
              <span style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>12,400+</span>
            </div>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Active Student Learners</span>
          </div>

          <div style={{ borderLeft: '1px solid var(--bg-glass-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', marginBottom: '0.2rem' }}>
              <Building2 size={20} />
              <span style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>450+</span>
            </div>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Partner Tech Companies</span>
          </div>

          <div style={{ borderLeft: '1px solid var(--bg-glass-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--accent-success)', marginBottom: '0.2rem' }}>
              <CheckCircle2 size={20} />
              <span style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>94.8%</span>
            </div>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Internship Hiring Match Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
}
