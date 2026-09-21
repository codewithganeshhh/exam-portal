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
      <div className="modal-content" style={{ maxWidth: '580px', textAlign: 'center', position: 'relative' }}>
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
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          boxShadow: isPassed ? '0 0 24px rgba(16, 185, 129, 0.3)' : '0 0 24px rgba(244, 63, 94, 0.3)',
        }}>
          <Award size={36} color={isPassed ? '#34d399' : '#fb7185'} />
        </div>

        <div style={{ marginBottom: '8px' }}>
          <span className={`badge ${isPassed ? 'badge-passed' : 'badge-failed'}`} style={{ fontSize: '0.85rem' }}>
            {isPassed ? 'EXAMINATION PASSED' : 'EXAMINATION NEEDS IMPROVEMENT'}
          </span>
        </div>

        <h2 style={{ fontSize: '1.8rem', marginBottom: '6px' }}>
          {isPassed ? 'Congratulations! 🎉' : 'Assessment Completed'}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Your answers for the <strong>{result.subject} Intermediate Exam</strong> have been evaluated and recorded into the database for admin review.
        </p>

        {/* Score Highlight Box */}
        <div style={{
          padding: '24px',
          background: 'rgba(15, 23, 42, 0.8)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '24px',
        }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Final Assessment Score
          </div>
          <div style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: isPassed ? '#34d399' : '#fb7185',
            margin: '4px 0',
          }}>
            {result.score}
            <span style={{ fontSize: '1.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {' '}/ {result.totalQuestions}
            </span>
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Overall Percentage: {result.percentage}%
          </div>
        </div>

        {/* 4 Statistics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '28px',
          textAlign: 'center',
        }}>
          <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.8rem' }}>
              <CheckCircle2 size={14} />
              <span>Correct</span>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '4px' }}>
              {result.correctAnswers}
            </div>
          </div>

          <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ color: '#fb7185', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.8rem' }}>
              <XCircle size={14} />
              <span>Wrong</span>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '4px' }}>
              {result.wrongAnswers}
            </div>
          </div>

          <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.8rem' }}>
              <Clock size={14} />
              <span>Time Spent</span>
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '4px' }}>
              {formatTime(result.timeSpentSeconds)}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="btn btn-primary btn-lg"
          style={{ width: '100%' }}
        >
          <span>Return to Dashboard</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
