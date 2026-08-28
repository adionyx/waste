import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Star, 
  Clock, 
  Users, 
  CheckCircle, 
  Award, 
  PlayCircle, 
  X, 
  ChevronRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function LearningPortal({ courses, setCourses, onClaimBadge, showToast }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCourseModal, setActiveCourseModal] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  const categories = ['All', 'Web Development', 'AI & Data Science', 'Design', 'Cloud & DevOps'];

  const filteredCourses = courses.filter(c => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleModuleCompletion = (courseId, moduleId) => {
    setCourses(prevCourses => prevCourses.map(course => {
      if (course.id === courseId) {
        const updatedModules = course.modules.map(mod => {
          if (mod.id === moduleId) {
            return { ...mod, completed: !mod.completed };
          }
          return mod;
        });
        return { ...course, modules: updatedModules };
      }
      return course;
    }));

    if (activeCourseModal && activeCourseModal.id === courseId) {
      setActiveCourseModal(prev => ({
        ...prev,
        modules: prev.modules.map(mod => mod.id === moduleId ? { ...mod, completed: !mod.completed } : mod)
      }));
    }
  };

  const handleClaimBadge = (course) => {
    onClaimBadge(course.badgeName);
    showToast(`🎉 Congratulations! You earned the "${course.badgeName}" Badge! Added to your Student Profile.`, 'success');
  };

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>
            <BookOpen size={14} /> SKILL ACCELERATOR
          </span>
          <h2>Student Learning Catalog</h2>
          <p>
            Master job-ready technologies. Complete hands-on course modules to automatically earn verified skill badges for company recruiters.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: selectedCategory === cat ? 600 : 500,
                  background: selectedCategory === cat ? 'var(--gradient-primary)' : 'var(--bg-card)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  border: `1px solid ${selectedCategory === cat ? 'transparent' : 'var(--bg-glass-border)'}`,
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search course title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.75rem', borderRadius: 'var(--radius-full)' }}
            />
          </div>

        </div>

        {/* Course Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredCourses.map(course => {
            const completedCount = course.modules.filter(m => m.completed).length;
            const totalCount = course.modules.length;
            const isCompleted = completedCount === totalCount;
            const progressPercent = Math.round((completedCount / totalCount) * 100);

            return (
              <div key={course.id} className="glass-card glass-card-interactive" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                
                {/* Course Banner */}
                <div style={{ position: 'relative', height: '180px' }}>
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 60%)'
                  }} />
                  <span className="badge badge-indigo" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    {course.category}
                  </span>
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0,0,0,0.7)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: '#f59e0b',
                    fontWeight: 600
                  }}>
                    <Star size={13} fill="#f59e0b" /> {course.rating}
                  </span>
                </div>

                {/* Course Info */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: 1.35 }}>{course.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {course.description}
                    </p>

                    {/* Metadata */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {course.duration}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Users size={14} /> {course.studentsEnrolled.toLocaleString()} Enrolled</span>
                    </div>

                    {/* Badge reward preview */}
                    <div style={{
                      background: 'rgba(99, 102, 241, 0.08)',
                      border: '1px border rgba(99, 102, 241, 0.2)',
                      padding: '0.6rem 0.8rem',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1.25rem'
                    }}>
                      <Award size={16} style={{ color: 'var(--accent-warning)' }} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        Badge: <span style={{ color: '#f59e0b' }}>{course.badgeName}</span>
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                        <span>Progress ({completedCount}/{totalCount} Modules)</span>
                        <span style={{ color: isCompleted ? 'var(--accent-success)' : 'var(--accent-primary)' }}>{progressPercent}%</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${progressPercent}%`,
                          height: '100%',
                          background: isCompleted ? 'var(--gradient-emerald)' : 'var(--gradient-primary)',
                          transition: 'width 0.3s ease'
                        }} />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                    <button 
                      onClick={() => setActiveCourseModal(course)}
                      className="btn btn-secondary btn-sm"
                      style={{ flex: 1 }}
                    >
                      <PlayCircle size={16} /> View Modules
                    </button>

                    {isCompleted ? (
                      <button 
                        onClick={() => handleClaimBadge(course)}
                        className="btn btn-emerald btn-sm"
                      >
                        <Award size={16} /> Claim Badge
                      </button>
                    ) : null}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Modal - Course Modules & Interactive Video Viewer */}
        {activeCourseModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div className="glass-card" style={{
              width: '100%',
              maxWidth: '780px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative'
            }}>
              <button 
                onClick={() => { setActiveCourseModal(null); setActiveLesson(null); }}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--text-secondary)' }}
              >
                <X size={24} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-indigo">{activeCourseModal.category}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Instructor: {activeCourseModal.instructor}</span>
              </div>

              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{activeCourseModal.title}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {activeCourseModal.description}
              </p>

              {/* Interactive Video Simulator Player */}
              <div style={{
                background: '#000000',
                borderRadius: 'var(--radius-md)',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid var(--bg-glass-border)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <PlayCircle size={48} style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', cursor: 'pointer' }} />
                  <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>
                    {activeLesson ? activeLesson.title : 'Select a lesson module below to launch video'}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                    {activeLesson ? `Module Duration: ${activeLesson.duration} • Interactive Code Lab Enabled` : 'Interactive HD Video & Live Code Exercise Studio'}
                  </p>
                </div>
              </div>

              {/* Modules Checklist */}
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Course Modules Checklist</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {activeCourseModal.modules.map((mod, idx) => (
                  <div 
                    key={mod.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1.1rem',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid ${mod.completed ? 'rgba(16, 185, 129, 0.4)' : 'var(--bg-glass-border)'}`
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <input 
                        type="checkbox"
                        checked={mod.completed}
                        onChange={() => toggleModuleCompletion(activeCourseModal.id, mod.id)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-success)' }}
                      />
                      <span style={{ fontWeight: 600, fontSize: '0.95rem', color: mod.completed ? 'var(--accent-success)' : 'var(--text-primary)' }}>
                        {idx + 1}. {mod.title}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{mod.duration}</span>
                      <button 
                        onClick={() => setActiveLesson(mod)}
                        className="btn btn-outline btn-sm"
                        style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                      >
                        Play Video
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Claim Action */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--bg-glass-border)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--accent-warning)' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                    Skill Badge: <span style={{ color: '#f59e0b' }}>{activeCourseModal.badgeName}</span>
                  </span>
                </div>

                <button 
                  onClick={() => {
                    handleClaimBadge(activeCourseModal);
                    setActiveCourseModal(null);
                  }}
                  className="btn btn-emerald"
                  disabled={activeCourseModal.modules.some(m => !m.completed)}
                  style={{ opacity: activeCourseModal.modules.some(m => !m.completed) ? 0.6 : 1 }}
                >
                  <Award size={18} /> Complete & Claim Badge
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
