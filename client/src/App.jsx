import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { StudentDashboard } from './pages/StudentDashboard';
import { ExamPortal } from './pages/ExamPortal';
import { ResultModal } from './components/ResultModal';

const AppContent = () => {
  const { user, loading, isAdmin, isStudent } = useAuth();

  // Active student state
  const [activeExamSubject, setActiveExamSubject] = useState(null); // 'HTML' | 'CSS' | 'JS' | 'AIML' | null
  const [examResult, setExamResult] = useState(null);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '3px solid rgba(99, 102, 241, 0.2)',
          borderTopColor: '#6366f1',
          animation: 'spin 0.8s linear infinite',
        }} />
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Initializing Exam Portal...
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // 1. If not logged in, immediately show unified Login page
  if (!user) {
    return (
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <LoginPage />
        </main>
      </div>
    );
  }

  // 2. If logged in as Admin, show Admin Dashboard
  if (isAdmin) {
    return (
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AdminDashboard />
        </main>
      </div>
    );
  }

  // 3. If logged in as Student
  return (
    <div className="app-container">
      <Navbar onNavigate={() => setActiveExamSubject(null)} />
      <main className="main-content">
        {activeExamSubject ? (
          <ExamPortal
            subject={activeExamSubject}
            onCancel={() => setActiveExamSubject(null)}
            onFinishExam={(result) => {
              setActiveExamSubject(null);
              setExamResult(result);
            }}
          />
        ) : (
          <StudentDashboard
            onStartExam={(subject) => setActiveExamSubject(subject)}
          />
        )}
      </main>

      {/* Result Modal after exam submission */}
      {examResult && (
        <ResultModal
          result={examResult}
          onClose={() => setExamResult(null)}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      {/* Dynamic Background Mesh Orbs */}
      <div className="app-bg-glow">
        <div className="glow-orb-1" />
        <div className="glow-orb-2" />
        <div className="glow-orb-3" />
      </div>

      <AppContent />
    </AuthProvider>
  );
}
