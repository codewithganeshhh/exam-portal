import React from 'react';
import { Award, CheckCircle2, XCircle, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const ResultModal = ({ result, onClose }) => {
  if (!result) return null;

  const formatTime = (seconds) => {
    if (!seconds && seconds !== 0) return '0s';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const isPassed = result.passed;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '560px', textAlign: 'center', position: 'relative' }}>
        {/* Glow Accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: isPassed ? 'var(--emerald)' : 'var(--rose)',
        }} />

        {/* Big Icon */}
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '14px',
          boxShadow: isPassed ? '0 0 24px rgba(16, 185, 129, 0.3)' : '0 0 24px rgba(244, 63, 94, 0.3)',
        }}>
          <Award size={32} color={isPassed ? '#34d399' : '#fb7185'} />
        </div>

        <div style={{ marginBottom: '8px' }}>
          <span className={`badge ${isPassed ? 'badge-passed' : 'badge-failed'}`} style={{ fontSize: '0.8rem' }}>
            {isPassed ? 'EXAMINATION PASSED' : 'NEEDS IMPROVEMENT'}
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.35rem, 4vw, 1.75rem)', marginBottom: '6px' }}>
          {isPassed ? 'Congratulations! 🎉' : 'Assessment Completed'}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px', lineHeight: 1.5 }}>
          Your answers for the <strong>{result.subject} Intermediate Exam</strong> have been evaluated and recorded into the database.
        </p>

        {/* Score Highlight Box */}
        <div style={{
          padding: '18px',
          background: 'rgba(15, 23, 42, 0.8)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '20px',
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Final Assessment Score
          </div>
          <div style={{
            fontSize: 'clamp(2.4rem, 8vw, 3.4rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: isPassed ? '#34d399' : '#fb7185',
            margin: '2px 0',
            lineHeight: 1.1,
          }}>
            {result.score}
            <span style={{ fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {' '}/ {result.totalQuestions}
            </span>
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
            Overall Percentage: {result.percentage}%
          </div>
        </div>

        {/* 3 Statistics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          marginBottom: '24px',
          textAlign: 'center',
        }}>
          <div style={{ padding: '10px 8px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.75rem' }}>
              <CheckCircle2 size={13} />
              <span>Correct</span>
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '2px' }}>
              {result.correctAnswers}
            </div>
          </div>

          <div style={{ padding: '10px 8px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ color: '#fb7185', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.75rem' }}>
              <XCircle size={13} />
              <span>Wrong</span>
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '2px' }}>
              {result.wrongAnswers}
            </div>
          </div>

          <div style={{ padding: '10px 8px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.75rem' }}>
              <Clock size={13} />
              <span>Time</span>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, marginTop: '2px' }}>
              {formatTime(result.timeSpentSeconds)}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="btn btn-primary btn-lg"
          style={{ width: '100%', minHeight: '46px' }}
        >
          <span>Return to Dashboard</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
