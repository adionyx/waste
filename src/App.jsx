import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConceptSection from './components/ConceptSection';
import LearningPortal from './components/LearningPortal';
import StudentQualificationHub from './components/StudentQualificationHub';
import RecruiterHiringHub from './components/RecruiterHiringHub';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

import { 
  INITIAL_COURSES, 
  INITIAL_STUDENT_PROFILES, 
  INITIAL_INTERNSHIPS 
} from './data/mockData';

export default function App() {
  // Navigation & Theme State
  const [activeTab, setActiveTab] = useState('concept'); // 'concept', 'learning', 'profile', 'recruiter'
  const [theme, setTheme] = useState('dark');
  const [userRole, setUserRole] = useState('student'); // 'student' or 'recruiter'

  // Application Data State
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [students, setStudents] = useState(INITIAL_STUDENT_PROFILES);
  const [internships, setInternships] = useState(INITIAL_INTERNSHIPS);
  
  // Active Logged-In User
  const [currentUser, setCurrentUser] = useState({
    name: 'Alex Chen',
    email: 'alex.chen@stanford.edu',
    university: 'Stanford University',
    degree: 'B.S. Computer Science',
    gpa: '3.9 / 4.0',
    gradYear: '2026',
    bio: 'Passionate full-stack developer with 2+ years of experience building modern React web apps & REST APIs. Seeking Summer 2026 Software Engineering Internships.',
    contactEmail: 'alex.chen@stanford.edu',
    availability: 'Open for Summer 2026 Internship',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    badges: ['Full-Stack Web Architect', 'Verified Top 5% Coder'],
    projects: [
      { title: 'TaskFlow AI', link: 'https://github.com/example/taskflow', desc: 'AI-assisted task management platform built with React & FastAPI.' },
      { title: 'DevMetric Dashboard', link: 'https://github.com/example/devmetric', desc: 'Real-time analytics dashboard monitoring server health metrics.' }
    ]
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Apply Theme Attribute to HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Toast Notification Handler
  const showToast = (message, type = 'info') => {
    const toastId = Date.now();
    setToasts(prev => [...prev, { id: toastId, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== toastId));
    }, 4500);
  };

  // Claim Course Badge Handler
  const handleClaimBadge = (badgeName) => {
    if (!currentUser) return;

    if (!currentUser.badges.includes(badgeName)) {
      const updatedUser = {
        ...currentUser,
        badges: [...currentUser.badges, badgeName]
      };
      setCurrentUser(updatedUser);

      // Update in students directory
      setStudents(prev => prev.map(s => {
        if (s.contactEmail === currentUser.contactEmail || s.name === currentUser.name) {
          return { ...s, badges: [...s.badges, badgeName] };
        }
        return s;
      }));
    }
  };

  // Update Student Qualification Profile Handler
  const handleSaveProfile = (updatedProfile) => {
    const fullUser = {
      ...currentUser,
      ...updatedProfile
    };
    setCurrentUser(fullUser);

    // Sync into public students talent directory
    setStudents(prev => {
      const exists = prev.some(s => s.contactEmail === fullUser.contactEmail || s.name === fullUser.name);
      if (exists) {
        return prev.map(s => (s.contactEmail === fullUser.contactEmail || s.name === fullUser.name) ? { ...s, ...updatedProfile } : s);
      } else {
        return [{ id: `student-${Date.now()}`, avatar: fullUser.avatar, ...updatedProfile }, ...prev];
      }
    });
  };

  // Recruiter actions
  const handlePostInternship = (newJob) => {
    setInternships(prev => [newJob, ...prev]);
  };

  const handleSendOffer = (offerPayload) => {
    console.log('Internship Offer Dispatched:', offerPayload);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
        userRole={userRole}
        setUserRole={setUserRole}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Main View Router */}
      <main style={{ flex: 1 }}>
        {activeTab === 'concept' && (
          <>
            <Hero onNavigate={setActiveTab} />
            <ConceptSection onNavigate={setActiveTab} />
            <LearningPortal 
              courses={courses} 
              setCourses={setCourses} 
              onClaimBadge={handleClaimBadge} 
              showToast={showToast} 
            />
            <RecruiterHiringHub 
              students={students} 
              internships={internships} 
              onPostInternship={handlePostInternship}
              onSendOffer={handleSendOffer}
              showToast={showToast}
            />
          </>
        )}

        {activeTab === 'learning' && (
          <LearningPortal 
            courses={courses} 
            setCourses={setCourses} 
            onClaimBadge={handleClaimBadge} 
            showToast={showToast} 
          />
        )}

        {activeTab === 'profile' && (
          <StudentQualificationHub 
            currentUser={currentUser} 
            onSaveProfile={handleSaveProfile} 
            showToast={showToast} 
          />
        )}

        {activeTab === 'recruiter' && (
          <RecruiterHiringHub 
            students={students} 
            internships={internships} 
            onPostInternship={handlePostInternship}
            onSendOffer={handleSendOffer}
            showToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={setActiveTab} showToast={showToast} />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          setUserRole(user.role || 'student');
        }}
        showToast={showToast}
      />

      {/* Toast Overlay */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
