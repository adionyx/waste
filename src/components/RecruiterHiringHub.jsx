import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  Award, 
  Zap, 
  Mail, 
  ExternalLink, 
  PlusCircle, 
  CheckCircle2, 
  X, 
  Send,
  GraduationCap,
  Briefcase,
  Sparkles
} from 'lucide-react';

export default function RecruiterHiringHub({ 
  students, 
  internships, 
  onPostInternship, 
  onSendOffer, 
  showToast 
}) {
  const [activeTab, setActiveTab] = useState('candidates'); // 'candidates' or 'internships'
  const [selectedSkillFilter, setSelectedSkillFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Hiring Offer Modal State
  const [hireModalCandidate, setHireModalCandidate] = useState(null);
  const [offerData, setOfferData] = useState({
    companyName: 'TechCorp Innovations',
    roleTitle: 'Frontend & React Engineering Intern',
    stipend: '$45 / hour',
    workType: 'Remote / Hybrid',
    message: 'We were thoroughly impressed by your verified qualifications and projects on EduHire! We would love to invite you for a direct interview for our Summer 2026 Internship program.'
  });

  // Post Job Listing Modal State
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [newJob, setNewJob] = useState({
    company: '',
    logo: '🏢',
    title: '',
    location: 'Remote',
    stipend: '$40 - $50 / hour',
    type: 'Full-Time Internship (Summer 2026)',
    skillsRequired: '',
    description: ''
  });

  const allSkills = ['All', 'React', 'Python', 'TypeScript', 'PyTorch', 'Docker', 'Figma', 'Node.js'];

  const filteredStudents = students.filter(student => {
    const matchesSkill = selectedSkillFilter === 'All' || student.skills.includes(selectedSkillFilter);
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.degree.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSkill && matchesSearch;
  });

  const handleSendOfferSubmit = (e) => {
    e.preventDefault();
    onSendOffer({
      candidateName: hireModalCandidate.name,
      candidateEmail: hireModalCandidate.contactEmail,
      ...offerData
    });
    showToast(`🚀 Internship Offer sent directly to ${hireModalCandidate.name} (${hireModalCandidate.contactEmail})!`, 'success');
    setHireModalCandidate(null);
  };

  const handlePostJobSubmit = (e) => {
    e.preventDefault();
    if (newJob.company && newJob.title) {
      const formattedJob = {
        ...newJob,
        id: `job-${Date.now()}`,
        skillsRequired: newJob.skillsRequired.split(',').map(s => s.trim()).filter(Boolean)
      };
      onPostInternship(formattedJob);
      showToast('🎉 New Internship listing posted to student network!', 'success');
      setShowPostJobModal(false);
      setNewJob({ company: '', logo: '🏢', title: '', location: 'Remote', stipend: '$40 - $50 / hour', type: 'Full-Time Internship (Summer 2026)', skillsRequired: '', description: '' });
    }
  };

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <Building2 size={14} /> EMPLOYER & RECRUITER PORTAL
          </span>
          <h2>Hire Verified Student Talent</h2>
          <p>
            Browse pre-vetted student qualification cards with verified skill badges and real projects. Extend direct internship interview offers in 1-click.
          </p>
        </div>

        {/* Header Navigation Pills & Actions */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '2.5rem',
          background: 'var(--bg-card)',
          padding: '1rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--bg-glass-border)'
        }}>
          
          {/* Sub Navigation */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => setActiveTab('candidates')}
              className={`btn ${activeTab === 'candidates' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.9rem' }}
            >
              <GraduationCap size={16} /> Browse Student Talent ({students.length})
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`btn ${activeTab === 'internships' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.9rem' }}
            >
              <Briefcase size={16} /> Internship Listings ({internships.length})
            </button>
          </div>

          {/* Action */}
          <button
            onClick={() => setShowPostJobModal(true)}
            className="btn btn-emerald"
          >
            <PlusCircle size={18} /> Post New Internship
          </button>

        </div>

        {/* CANDIDATE TALENT DIRECTORY VIEW */}
        {activeTab === 'candidates' && (
          <div>
            {/* Search & Skill Filters */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
              
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {allSkills.map(sk => (
                  <button
                    key={sk}
                    onClick={() => setSelectedSkillFilter(sk)}
                    style={{
                      padding: '0.4rem 0.9rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.82rem',
                      fontWeight: selectedSkillFilter === sk ? 600 : 500,
                      background: selectedSkillFilter === sk ? 'var(--gradient-cyan)' : 'var(--bg-tertiary)',
                      color: selectedSkillFilter === sk ? '#fff' : 'var(--text-secondary)',
                      border: '1px solid var(--bg-glass-border)'
                    }}
                  >
                    {sk}
                  </button>
                ))}
              </div>

              <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                <Search size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search student or university..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: '2.5rem', borderRadius: 'var(--radius-full)', fontSize: '0.88rem' }}
                />
              </div>

            </div>

            {/* Candidate Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
              {filteredStudents.map(student => (
                <div key={student.id} className="glass-card glass-card-interactive" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    
                    {/* Top Row Header */}
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                      <img 
                        src={student.avatar} 
                        alt={student.name}
                        style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-primary)' }} 
                      />
                      <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.1rem' }}>{student.name}</h3>
                        <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{student.university}</span>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{student.degree} • GPA: {student.gpa}</div>
                      </div>
                    </div>

                    {/* Availability Tag */}
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      padding: '0.4rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#6ee7b7',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginBottom: '1rem'
                    }}>
                      <Zap size={14} style={{ color: '#10b981' }} /> {student.availability}
                    </div>

                    {/* Bio */}
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {student.bio}
                    </p>

                    {/* Skill Badges */}
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem', textTransform: 'uppercase' }}>Verified Badges</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {student.badges.map(b => (
                          <span key={b} className="badge badge-warning" style={{ fontSize: '0.7rem' }}>
                            <Award size={11} /> {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technical Stack */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem', textTransform: 'uppercase' }}>Skills</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                        {student.skills.map(s => (
                          <span key={s} className="skill-pill" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Featured Projects */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem', textTransform: 'uppercase' }}>Top Project</div>
                      {student.projects && student.projects.length > 0 && (
                        <div style={{ background: 'var(--bg-tertiary)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{student.projects[0].title}: </span>
                          <span style={{ color: 'var(--text-secondary)' }}>{student.projects[0].desc}</span>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Hire Button */}
                  <button
                    onClick={() => setHireModalCandidate(student)}
                    className="btn btn-emerald"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    <Mail size={16} /> Extend Internship Offer
                  </button>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTERNSHIP JOB LISTINGS VIEW */}
        {activeTab === 'internships' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {internships.map(job => (
              <div key={job.id} className="glass-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    {job.logo}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem' }}>{job.title}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{job.company}</span>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div>📍 Location: <strong style={{ color: 'var(--text-primary)' }}>{job.location}</strong></div>
                  <div>💰 Stipend: <strong style={{ color: 'var(--accent-success)' }}>{job.stipend}</strong></div>
                  <div>⏳ Type: <strong>{job.type}</strong></div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {job.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {job.skillsRequired.map(sk => (
                    <span key={sk} className="badge badge-indigo" style={{ fontSize: '0.7rem' }}>{sk}</span>
                  ))}
                </div>

                <button 
                  onClick={() => showToast(`Applied to ${job.title} at ${job.company}! Recruiter will review your qualifications.`, 'info')}
                  className="btn btn-primary btn-sm" 
                  style={{ width: '100%' }}
                >
                  <Send size={15} /> Apply as Student
                </button>
              </div>
            ))}
          </div>
        )}

        {/* MODAL 1: Extend Direct Internship Offer */}
        {hireModalCandidate && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 250,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div className="glass-card" style={{ width: '100%', maxWidth: '600px', padding: '2rem', position: 'relative' }}>
              <button 
                onClick={() => setHireModalCandidate(null)}
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
              >
                <X size={22} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.6rem', background: 'var(--gradient-emerald)', borderRadius: 'var(--radius-md)', color: '#fff' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem' }}>Extend Internship Offer</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Sending to <strong style={{ color: 'var(--accent-cyan)' }}>{hireModalCandidate.name}</strong> ({hireModalCandidate.contactEmail})
                  </span>
                </div>
              </div>

              <form onSubmit={handleSendOfferSubmit}>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    value={offerData.companyName}
                    onChange={(e) => setOfferData({ ...offerData, companyName: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Internship Title</label>
                    <input
                      type="text"
                      value={offerData.roleTitle}
                      onChange={(e) => setOfferData({ ...offerData, roleTitle: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Offered Stipend</label>
                    <input
                      type="text"
                      value={offerData.stipend}
                      onChange={(e) => setOfferData({ ...offerData, stipend: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Invitation Message</label>
                  <textarea
                    rows={4}
                    value={offerData.message}
                    onChange={(e) => setOfferData({ ...offerData, message: e.target.value })}
                    className="form-textarea"
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                  <button type="button" onClick={() => setHireModalCandidate(null)} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-emerald">
                    <Send size={16} /> Dispatch Direct Offer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL 2: Post New Internship Listing */}
        {showPostJobModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 250,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div className="glass-card" style={{ width: '100%', maxWidth: '620px', padding: '2rem', position: 'relative' }}>
              <button 
                onClick={() => setShowPostJobModal(false)}
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
              >
                <X size={22} />
              </button>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>Post New Internship Opportunity</h3>

              <form onSubmit={handlePostJobSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Stripe, OpenAI, TechCorp"
                      value={newJob.company}
                      onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Internship Title</label>
                    <input
                      type="text"
                      placeholder="e.g. AI Research Intern"
                      value={newJob.title}
                      onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Location / Mode</label>
                    <input
                      type="text"
                      placeholder="Remote / San Francisco"
                      value={newJob.location}
                      onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Stipend Rate</label>
                    <input
                      type="text"
                      placeholder="e.g. $45 / hr or $5000 / mo"
                      value={newJob.stipend}
                      onChange={(e) => setNewJob({ ...newJob, stipend: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Required Skills (Comma separated)</label>
                  <input
                    type="text"
                    placeholder="React, TypeScript, Python, Docker"
                    value={newJob.skillsRequired}
                    onChange={(e) => setNewJob({ ...newJob, skillsRequired: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description & Responsibilities</label>
                  <textarea
                    rows={3}
                    placeholder="Describe the internship duties and learning opportunities..."
                    value={newJob.description}
                    onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                  <button type="button" onClick={() => setShowPostJobModal(false)} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-emerald">
                    Publish Internship Listing
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
