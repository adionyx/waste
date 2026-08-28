import React, { useState } from 'react';
import { 
  UserCheck, 
  Award, 
  GraduationCap, 
  Code, 
  ExternalLink, 
  Plus, 
  Trash2, 
  Save, 
  Globe, 
  Briefcase, 
  CheckCircle2,
  Sparkles,
  Mail,
  Zap
} from 'lucide-react';

export default function StudentQualificationHub({ currentUser, onSaveProfile, showToast }) {
  const [profileData, setProfileData] = useState({
    name: currentUser?.name || 'Alex Chen',
    university: currentUser?.university || 'Stanford University',
    degree: currentUser?.degree || 'B.S. Computer Science',
    gpa: currentUser?.gpa || '3.9 / 4.0',
    gradYear: currentUser?.gradYear || '2026',
    bio: currentUser?.bio || 'Passionate full-stack developer with 2+ years of experience building modern React web apps & REST APIs. Seeking Summer 2026 Software Engineering Internships.',
    contactEmail: currentUser?.contactEmail || 'alex.chen@stanford.edu',
    availability: currentUser?.availability || 'Open for Summer 2026 Internship',
    skills: currentUser?.skills || ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    badges: currentUser?.badges || ['Full-Stack Web Architect', 'Verified Top 5% Coder'],
    projects: currentUser?.projects || [
      { title: 'TaskFlow AI', link: 'https://github.com/example/taskflow', desc: 'AI-assisted task management platform built with React & FastAPI.' },
      { title: 'DevMetric Dashboard', link: 'https://github.com/example/devmetric', desc: 'Real-time analytics dashboard monitoring server health metrics.' }
    ]
  });

  const [newSkillInput, setNewSkillInput] = useState('');
  const [newProject, setNewProject] = useState({ title: '', link: '', desc: '' });
  const [showAddProject, setShowAddProject] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = () => {
    if (newSkillInput.trim() && !profileData.skills.includes(newSkillInput.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkillInput.trim()]
      }));
      setNewSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skillToRemove)
    }));
  };

  const handleAddProjectSubmit = (e) => {
    e.preventDefault();
    if (newProject.title && newProject.desc) {
      setProfileData(prev => ({
        ...prev,
        projects: [...prev.projects, { ...newProject }]
      }));
      setNewProject({ title: '', link: '', desc: '' });
      setShowAddProject(false);
      showToast('Project added to student profile!', 'success');
    }
  };

  const handleRemoveProject = (index) => {
    setProfileData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const handlePublish = (e) => {
    e.preventDefault();
    onSaveProfile(profileData);
    showToast('✨ Qualifications published successfully! Your profile is now visible to top tech recruiters.', 'success');
  };

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <UserCheck size={14} /> STUDENT QUALIFICATION MANAGER
          </span>
          <h2>Post & Update Qualifications</h2>
          <p>
            Build your verified student profile. Companies search this directory to extend direct internship interview offers based on your posted achievements.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2.5rem'
        }}>
          
          {/* Left Column: Qualification Editor Form */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--bg-glass-border)', paddingBottom: '1rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: 'var(--radius-md)', background: 'var(--gradient-primary)', color: '#fff' }}>
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem' }}>Edit Qualification Details</h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Instant live preview on the right</span>
              </div>
            </div>

            <form onSubmit={handlePublish}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">University / Institution</label>
                  <input
                    type="text"
                    name="university"
                    value={profileData.university}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Degree / Field of Study</label>
                  <input
                    type="text"
                    name="degree"
                    value={profileData.degree}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">GPA (Out of 4.0)</label>
                  <input
                    type="text"
                    name="gpa"
                    value={profileData.gpa}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Graduation Year</label>
                  <select
                    name="gradYear"
                    value={profileData.gradYear}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Internship Availability Status</label>
                  <select
                    name="availability"
                    value={profileData.availability}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Open for Summer 2026 Internship">Open for Summer 2026</option>
                    <option value="Open for Fall 2026 Internship">Open for Fall 2026</option>
                    <option value="Available Immediately (Part-Time)">Available Immediately (Part-Time)</option>
                    <option value="Open for Remote Internship">Open for Remote Internship</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Bio & Personal Headline</label>
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  rows={3}
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Contact Email for Recruiter Offers</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={profileData.contactEmail}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              {/* Skills Tags Manager */}
              <div className="form-group">
                <label className="form-label">Technical Skills Stack</label>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <input
                    type="text"
                    placeholder="Add a skill e.g. React, Python, Docker"
                    value={newSkillInput}
                    onChange={(e) => setNewSkillInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } }}
                    className="form-input"
                  />
                  <button type="button" onClick={handleAddSkill} className="btn btn-secondary btn-sm">
                    <Plus size={16} /> Add
                  </button>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {profileData.skills.map(skill => (
                    <span key={skill} className="skill-pill">
                      {skill}
                      <span 
                        style={{ cursor: 'pointer', marginLeft: '0.2rem', color: 'var(--accent-danger)' }} 
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        ×
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>Featured Portfolio Projects</label>
                  <button 
                    type="button" 
                    onClick={() => setShowAddProject(!showAddProject)}
                    className="btn btn-outline btn-sm"
                  >
                    <Plus size={14} /> Add Project
                  </button>
                </div>

                {showAddProject && (
                  <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                    <input
                      type="text"
                      placeholder="Project Title"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="form-input"
                      style={{ marginBottom: '0.5rem' }}
                    />
                    <input
                      type="url"
                      placeholder="GitHub or Live URL (https://...)"
                      value={newProject.link}
                      onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                      className="form-input"
                      style={{ marginBottom: '0.5rem' }}
                    />
                    <input
                      type="text"
                      placeholder="Short description of what you built"
                      value={newProject.desc}
                      onChange={(e) => setNewProject({ ...newProject, desc: e.target.value })}
                      className="form-input"
                      style={{ marginBottom: '0.75rem' }}
                    />
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button type="button" onClick={handleAddProjectSubmit} className="btn btn-emerald btn-sm">Save Project</button>
                      <button type="button" onClick={() => setShowAddProject(false)} className="btn btn-secondary btn-sm">Cancel</button>
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {profileData.projects.map((proj, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0.8rem', background: 'var(--bg-glass)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--bg-glass-border)' }}>
                      <div>
                        <strong style={{ fontSize: '0.9rem' }}>{proj.title}</strong>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{proj.desc}</p>
                      </div>
                      <button type="button" onClick={() => handleRemoveProject(idx)} style={{ color: 'var(--accent-danger)' }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Save size={18} /> Publish Qualifications to Platform
              </button>

            </form>
          </div>

          {/* Right Column: Live Recruiter Portfolio Card Preview */}
          <div>
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={18} className="text-gradient" /> Live Recruiter Card Preview
                </h3>
                <span className="badge badge-emerald">Verified Active Status</span>
              </div>

              {/* Glass Candidate Card */}
              <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--accent-primary)', position: 'relative' }}>
                
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: 800
                  }}>
                    {profileData.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem' }}>{profileData.name}</h3>
                    <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      {profileData.degree} • {profileData.university}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      GPA: <span style={{ color: 'var(--accent-success)', fontWeight: 600 }}>{profileData.gpa}</span> | Grad Year: {profileData.gradYear}
                    </div>
                  </div>
                </div>

                {/* Availability Pill */}
                <div style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '0.5rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  color: '#6ee7b7',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.25rem'
                }}>
                  <Zap size={15} style={{ color: '#10b981' }} />
                  {profileData.availability}
                </div>

                {/* Bio */}
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  "{profileData.bio}"
                </p>

                {/* Earned Badges */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Verified Platform Badges
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {profileData.badges.map(b => (
                      <span key={b} className="badge badge-warning">
                        <Award size={12} /> {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Skills */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Technical Skills
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {profileData.skills.map(s => (
                      <span key={s} className="skill-pill">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Featured Projects */}
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Posted Projects
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {profileData.projects.map((p, i) => (
                      <div key={i} style={{ background: 'var(--bg-tertiary)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{p.title}</span>
                          {p.link && (
                            <a href={p.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                              <ExternalLink size={12} /> Code
                            </a>
                          )}
                        </div>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
