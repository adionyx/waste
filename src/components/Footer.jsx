import React, { useState } from 'react';
import { 
  GraduationCap, 
  Globe, 
  Share2, 
  Mail, 
  ArrowRight, 
  Check 
} from 'lucide-react';

export default function Footer({ onNavigate, showToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      showToast('🎉 Subscribed to EduHire internship alerts & course updates!', 'success');
      setNewsletterEmail('');
    }
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--bg-glass-border)',
      padding: '4rem 0 2rem 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <GraduationCap size={20} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Edu<span className="text-gradient">Hire</span>
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Bridging the gap between student learning and tech industry hiring. Master verified skills, post qualifications, and land top internships.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#globe" style={{ color: 'var(--text-muted)' }} aria-label="Website"><Globe size={18} /></a>
              <a href="#share" style={{ color: 'var(--text-muted)' }} aria-label="Social Share"><Share2 size={18} /></a>
              <a href="#mail" style={{ color: 'var(--text-muted)' }} aria-label="Contact Email"><Mail size={18} /></a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1rem' }}>Platform Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => onNavigate('concept')} style={{ color: 'var(--text-secondary)' }}>How It Works</button>
              </li>
              <li>
                <button onClick={() => onNavigate('learning')} style={{ color: 'var(--text-secondary)' }}>Course Catalog & Badges</button>
              </li>
              <li>
                <button onClick={() => onNavigate('profile')} style={{ color: 'var(--text-secondary)' }}>Student Qualification Profile</button>
              </li>
              <li>
                <button onClick={() => onNavigate('recruiter')} style={{ color: 'var(--text-secondary)' }}>Employer Hiring Portal</button>
              </li>
            </ul>
          </div>

          {/* Skill Tracks */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1rem' }}>Popular Skill Tracks</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li>Modern Full-Stack Web Architecture</li>
              <li>Applied Neural Networks & PyTorch AI</li>
              <li>Figma UI/UX Systems & Micro-Interactions</li>
              <li>Cloud Kubernetes & Docker DevOps</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.75rem' }}>Stay Informed</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>Get weekly internship listings & new course drops directly in your inbox.</p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.4rem' }}>
              <input
                type="email"
                placeholder="student@university.edu"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="form-input"
                style={{ fontSize: '0.85rem', padding: '0.5rem 0.75rem' }}
                required
              />
              <button type="submit" className="btn btn-primary btn-sm">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid var(--bg-glass-border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem'
        }}>
          <div>© {new Date().getFullYear()} EduHire Platform Inc. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Verified Student Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
