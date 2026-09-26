import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../api';
import { 
  GraduationCap, Award, Clock, ArrowRight, CheckCircle2, 
  HelpCircle, History, Sparkles, BookOpen, AlertCircle
} from 'lucide-react';

export const StudentDashboard = ({ onStartExam }) => {
  const { user } = useAuth();
  const [summary, setSummary] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudentData = async () => {
    try {
      setLoading(true);
      const [sumRes, histRes] = await Promise.all([
        apiRequest('/exams/student/summary'),
        apiRequest('/exams/student/my-results'),
      ]);

      if (sumRes.success) setSummary(sumRes.summary);
      if (histRes.success) setHistory(histRes.results);
    } catch (err) {
      console.error('Error fetching student data:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  const formatTime = (seconds) => {
    if (!seconds && seconds !== 0) return '0s';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const examCards = [
    {
      subject: 'HTML',
      title: 'HTML5 Foundation & Core Assessment',
      desc: 'Tags, Elements, Forms, Inputs, Attributes, Semantic HTML5, Links, Lists, Media, and Tables.',
      questions: 50,
      duration: '60 Minutes',
      gradient: 'var(--grad-html)',
      badgeClass: 'badge-html',
      iconColor: '#f97316',
    },
    {
      subject: 'CSS',
      title: 'CSS3 Styling & Layout Assessment',
      desc: 'Selectors, Box Model, Flexbox, Positioning, Colors, Units, Fonts, Borders, Transitions, and Media Queries.',
      questions: 50,
      duration: '60 Minutes',
      gradient: 'var(--grad-css)',
      badgeClass: 'badge-css',
      iconColor: '#38bdf8',
    },
    {
      subject: 'JS',
      title: 'JavaScript Essentials & DOM Assessment',
      desc: 'Variables (let/const), Data Types, Operators, Functions, Arrays, Objects, DOM manipulation, Events, and Loops.',
      questions: 50,
      duration: '60 Minutes',
      gradient: 'var(--grad-js)',
      badgeClass: 'badge-js',
      iconColor: '#facc15',
    },
    {
      subject: 'AIML',
      title: 'AI & Machine Learning Assessment',
      desc: 'NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn, GitHub, and Core Machine Learning Fundamentals.',
      questions: 50,
      duration: '60 Minutes',
      gradient: 'var(--grad-aiml)',
      badgeClass: 'badge-aiml',
      iconColor: '#c084fc',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Welcome Banner */}
      <div className="glass-panel student-banner">
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--grad-primary)',
        }} />

        <div className="student-banner-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span className="badge badge-student">Student Candidate</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Online Assessment Session</span>
            </div>
            <h1 className="student-banner-title">
              Welcome back, <span className="gradient-text">{user?.name}</span>! 👋
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '640px', lineHeight: 1.5 }}>
              Choose an exam module below. Each exam contains <strong>50 questions (Basic & Medium)</strong> designed to evaluate your technical competencies.
            </p>
          </div>

          {/* Quick Notice */}
          <div className="student-banner-notice" style={{
            padding: '12px 16px',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <Sparkles size={22} color="#a855f7" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.82rem' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Rules & Evaluation</div>
              <div style={{ color: 'var(--text-secondary)' }}>50 Qs • 60 Mins • Immediate Auto-grading</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 SEPARATE EXAM CARDS (HTML, CSS, JS) */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <BookOpen size={20} color="#6366f1" />
          <h2 style={{ fontSize: '1.35rem' }}>Available Examination Tracks</h2>
        </div>

        <div className="exam-cards-grid">
          {examCards.map((exam) => {
            const subSummary = summary ? summary[exam.subject] : null;
            const hasAttempted = subSummary?.attempted;
            const best = subSummary?.bestResult;

            return (
              <div
                key={exam.subject}
                className="glass-panel glass-panel-hover glass-panel-responsive"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Accent Strip */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: exam.gradient,
                }} />

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
                    <span className={`badge ${exam.badgeClass}`}>
                      {exam.subject} EXAM
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <Clock size={14} />
                      <span>{exam.duration}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', lineHeight: 1.3 }}>
                    {exam.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {exam.desc}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px 14px',
                    padding: '12px 14px',
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '22px',
                    fontSize: '0.82rem',
                  }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)' }}>Questions: </span>
                      <strong style={{ color: 'var(--text-primary)' }}>{exam.questions} Qs</strong>
                    </div>
                    <div>•</div>
                    <div>
                      <span style={{ color: 'var(--text-muted)' }}>Level: </span>
                      <strong style={{ color: '#c084fc' }}>Basic to Intermediate</strong>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Status / Previous Score Display */}
                  {hasAttempted && best ? (
                    <div style={{
                      padding: '12px 14px',
                      background: best.passed ? 'rgba(16, 185, 129, 0.12)' : 'rgba(244, 63, 94, 0.12)',
                      border: `1px solid ${best.passed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                    }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Best Score</div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: best.passed ? '#34d399' : '#fb7185' }}>
                          {best.score} / {best.totalQuestions} ({best.percentage}%)
                        </div>
                      </div>
                      <span className={`badge ${best.passed ? 'badge-passed' : 'badge-failed'}`}>
                        {best.passed ? 'Passed' : 'Failed'}
                      </span>
                    </div>
                  ) : (
                    <div style={{
                      padding: '10px 14px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '16px',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <AlertCircle size={15} />
                      <span>Not attempted yet</span>
                    </div>
                  )}

                  <button
                    onClick={() => onStartExam(exam.subject)}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      background: exam.gradient,
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                      minHeight: '44px',
                    }}
                  >
                    <span>{hasAttempted ? 'Retake Exam' : 'Start Assessment'}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PREVIOUS ATTEMPT HISTORY */}
      <div className="glass-panel glass-panel-responsive">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <History size={20} color="#6366f1" />
          <h2 style={{ fontSize: '1.3rem' }}>Your Assessment History</h2>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-secondary)' }}>
            Loading your exam records...
          </div>
        ) : history.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '36px', color: 'var(--text-muted)' }}>
            <Award size={40} style={{ margin: '0 auto 10px', opacity: 0.4 }} />
            <p>You have not submitted any exams yet. Pick an assessment above to get started!</p>
          </div>
        ) : (
          <>
            {/* Desktop / Tablet Table View */}
            <div className="table-container hide-mobile">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Questions</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Status</th>
                    <th>Time Taken</th>
                    <th>Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h) => (
                    <tr key={h._id}>
                      <td>
                        <span className={`badge badge-${h.subject.toLowerCase()}`}>
                          {h.subject}
                        </span>
                      </td>
                      <td>{h.totalQuestions}</td>
                      <td style={{ fontWeight: 700 }}>
                        {h.score} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ {h.totalQuestions}</span>
                      </td>
                      <td style={{ fontWeight: 600 }}>{h.percentage}%</td>
                      <td>
                        <span className={`badge ${h.passed ? 'badge-passed' : 'badge-failed'}`}>
                          {h.passed ? 'Passed' : 'Failed'}
                        </span>
                      </td>
                      <td>{formatTime(h.timeSpentSeconds)}</td>
                      <td style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        {formatDate(h.submittedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Native Card View */}
            <div className="show-mobile">
              {history.map((h) => (
                <div key={h._id} className="mobile-history-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className={`badge badge-${h.subject.toLowerCase()}`}>
                      {h.subject} Exam
                    </span>
                    <span className={`badge ${h.passed ? 'badge-passed' : 'badge-failed'}`}>
                      {h.passed ? 'Passed' : 'Failed'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '4px' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Score: </span>
                      <strong style={{ fontSize: '1.25rem', color: h.passed ? '#34d399' : '#fb7185' }}>
                        {h.score}
                      </strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}> / {h.totalQuestions}</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                      {h.percentage}%
                    </div>
                  </div>

                  {/* Visual percentage progress bar */}
                  <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${h.percentage}%`,
                      height: '100%',
                      background: h.passed ? 'var(--emerald)' : 'var(--rose)',
                      borderRadius: '3px',
                    }} />
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    paddingTop: '6px',
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} />
                      <span>{formatTime(h.timeSpentSeconds)}</span>
                    </div>
                    <div>{formatDate(h.submittedAt)}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
