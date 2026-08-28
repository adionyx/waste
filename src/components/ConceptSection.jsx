import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Briefcase, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  GraduationCap,
  Building2,
  Target,
  ShieldCheck
} from 'lucide-react';

export default function ConceptSection({ onNavigate }) {
  const [activePerspective, setActivePerspective] = useState('student');

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} /> PLATFORM ARCHITECTURE & WORKFLOW
          </span>
          <h2>How EduHire Works Simply</h2>
          <p>
            Eliminating lengthy resume black holes. We connect student skill acquisition directly with employer recruitment in 3 seamless steps.
          </p>
        </div>

        {/* 3 Step Workflow Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          
          {/* Step 1 */}
          <div className="glass-card glass-card-interactive" style={{ padding: '2rem', position: 'relative' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <BookOpen size={28} />
            </div>
            <div className="badge badge-indigo" style={{ position: 'absolute', top: '1.75rem', right: '1.75rem' }}>
              STEP 01
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>1. Learn & Gain Badges</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Students enroll in industry-aligned learning tracks (Web Dev, AI, Cloud, Design). Completing modules awards verified skill badges to your portfolio.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-primary)', fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--accent-success)' }} /> Project-based practical learning
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--accent-success)' }} /> Instant skill badge validation
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="glass-card glass-card-interactive" style={{ padding: '2rem', position: 'relative' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              color: 'var(--accent-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <Award size={28} />
            </div>
            <div className="badge badge-warning" style={{ position: 'absolute', top: '1.75rem', right: '1.75rem' }}>
              STEP 02
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>2. Post Qualifications</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Students publish their digital qualification card including university, GPA, verified skills, GitHub projects, and current internship availability.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-primary)', fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--accent-success)' }} /> 1-Click Profile update
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--accent-success)' }} /> Highlighting real GitHub projects
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="glass-card glass-card-interactive" style={{ padding: '2rem', position: 'relative' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <Briefcase size={28} />
            </div>
            <div className="badge badge-cyan" style={{ position: 'absolute', top: '1.75rem', right: '1.75rem' }}>
              STEP 03
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>3. Companies Recruit Directly</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Recruiters filter candidates by verified tech stacks and graduation year, extending direct internship interview invites without resume filtering delays.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-primary)', fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--accent-success)' }} /> Verified, pre-vetted candidates
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--accent-success)' }} /> Instant interview scheduling
              </li>
            </ul>
          </div>

        </div>

        {/* Dual Perspective Interactive Sandbox */}
        <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid var(--accent-primary)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>Interactive Platform Overview</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Toggle perspective to see how both students and recruiters benefit.
              </p>
            </div>

            {/* Switcher Pills */}
            <div style={{
              display: 'inline-flex',
              background: 'var(--bg-tertiary)',
              padding: '0.3rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--bg-glass-border)'
            }}>
              <button
                onClick={() => setActivePerspective('student')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: activePerspective === 'student' ? 'var(--gradient-primary)' : 'transparent',
                  color: activePerspective === 'student' ? '#fff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <GraduationCap size={16} /> For Students
              </button>

              <button
                onClick={() => setActivePerspective('recruiter')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: activePerspective === 'recruiter' ? 'var(--gradient-cyan)' : 'transparent',
                  color: activePerspective === 'recruiter' ? '#fff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Building2 size={16} /> For Employers & Recruiters
              </button>
            </div>
          </div>

          {/* Perspective Details Box */}
          {activePerspective === 'student' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', background: 'var(--bg-glass)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  <Target size={18} /> Learn Industry Skills
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Access structured modules engineered by industry engineers. Master modern tech stacks in weeks rather than months.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-secondary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  <ShieldCheck size={18} /> Show Verified Proof
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Your badges and real projects speak for you. No more writing endless customized cover letters.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={() => onNavigate('profile')} className="btn btn-primary btn-sm">
                  Build My Student Profile <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', background: 'var(--bg-glass)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  <Target size={18} /> Pre-Vetted Talent Pool
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Skip screening 1,000 resume PDFs. Search candidates with real GitHub code proof and verified skill badges.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-success)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  <ShieldCheck size={18} /> Direct Internship Offers
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Reach out directly to available students for Summer or Remote internships with 1-click interview requests.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={() => onNavigate('recruiter')} className="btn btn-emerald btn-sm">
                  Search Candidate Talent <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
