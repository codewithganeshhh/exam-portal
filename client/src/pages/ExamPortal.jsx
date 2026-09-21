import React, { useState, useEffect, useRef } from 'react';
import { apiRequest } from '../api';
import { 
  Clock, AlertTriangle, ArrowLeft, ArrowRight, Bookmark, 
  CheckCircle2, RotateCcw, Send, HelpCircle, ShieldAlert 
} from 'lucide-react';

export const ExamPortal = ({ subject, onFinishExam, onCancel }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionNumber]: selectedOptionIndex }
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Timer: 60 minutes = 3600 seconds
  const TOTAL_TIME = 3600;
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const timerRef = useRef(null);

  // Load 50 Questions from API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const data = await apiRequest(`/exams/${subject}`);
        if (data.success && data.questions) {
          setQuestions(data.questions);
        }
      } catch (err) {
        alert(`Failed to load ${subject} exam questions: ${err.message}`);
        onCancel();
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [subject]);

  // Countdown Timer
  useEffect(() => {
    if (loading || questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading, questions]);

  const handleAutoSubmit = () => {
    alert('Time has expired! Your exam will now be submitted automatically.');
    performSubmit();
  };

  const handleSelectOption = (optionIndex) => {
    const qNum = questions[currentIndex]?.questionNumber;
    setAnswers((prev) => ({
      ...prev,
      [qNum]: optionIndex,
    }));
  };

  const handleClearAnswer = () => {
    const qNum = questions[currentIndex]?.questionNumber;
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[qNum];
      return copy;
    });
  };

  const toggleMarkReview = () => {
    const qNum = questions[currentIndex]?.questionNumber;
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(qNum)) {
        next.delete(qNum);
      } else {
        next.add(qNum);
      }
      return next;
    });
  };

  const performSubmit = async () => {
    try {
      setSubmitting(true);
      if (timerRef.current) clearInterval(timerRef.current);

      const timeSpentSeconds = TOTAL_TIME - timeLeft;

      const res = await apiRequest('/exams/submit', {
        method: 'POST',
        body: JSON.stringify({
          subject,
          answers,
          timeSpentSeconds,
        }),
      });

      if (res.success && res.result) {
        onFinishExam(res.result);
      }
    } catch (err) {
      alert(`Submission error: ${err.message || 'Failed to submit exam'}`);
      setSubmitting(false);
    }
  };

  // Formatted timer mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const isTimeCritical = timeLeft < 300; // less than 5 minutes

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const markedCount = markedForReview.size;
  const unattemptedCount = totalQuestions - answeredCount;

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '10px' }}>
          Loading {subject} Examination...
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>Preparing 50 intermediate questions and timer.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '30px' }}>
      {/* Top Header Bar: Subject + Timer + Submit CTA */}
      <div className="glass-panel" style={{
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        position: 'sticky',
        top: '74px',
        zIndex: 40,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span className={`badge badge-${subject.toLowerCase()}`} style={{ fontSize: '0.9rem', padding: '6px 14px' }}>
            {subject} ASSESSMENT
          </span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Question <strong>{currentIndex + 1}</strong> of <strong>{totalQuestions}</strong>
          </span>
        </div>

        {/* Countdown Timer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 18px',
          borderRadius: 'var(--radius-full)',
          background: isTimeCritical ? 'rgba(244, 63, 94, 0.2)' : 'rgba(15, 23, 42, 0.8)',
          border: `1px solid ${isTimeCritical ? '#f43f5e' : 'var(--border-subtle)'}`,
          color: isTimeCritical ? '#fb7185' : 'var(--text-primary)',
        }}>
          <Clock size={18} color={isTimeCritical ? '#fb7185' : '#6366f1'} />
          <span style={{
            fontFamily: 'monospace',
            fontSize: '1.2rem',
            fontWeight: 800,
            letterSpacing: '0.05em',
          }}>
            {timeFormatted}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>REMAINING</span>
        </div>

        {/* Submit Exam Button */}
        <button
          onClick={() => setIsSubmitModalOpen(true)}
          className="btn btn-primary"
          style={{ background: 'var(--grad-primary)', padding: '10px 24px' }}
        >
          <Send size={16} />
          <span>Submit Exam</span>
        </button>
      </div>

      {/* Main Examination Layout: Left (Question & Options) + Right (1-50 Palette) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) 320px',
        gap: '24px',
        alignItems: 'start',
      }}>
        {/* LEFT COLUMN: ACTIVE QUESTION CARD */}
        <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Question Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
            }}>
              <span>Question #{currentQ?.questionNumber}</span>
              <span>•</span>
              <span style={{ color: '#c084fc' }}>Basic to Intermediate</span>
              <span>•</span>
              <span>1 Mark</span>
            </div>

            <button
              onClick={toggleMarkReview}
              className={`btn btn-sm ${markedForReview.has(currentQ?.questionNumber) ? 'btn-primary' : 'btn-outline'}`}
              style={{
                borderColor: markedForReview.has(currentQ?.questionNumber) ? '#f59e0b' : 'var(--border-subtle)',
                background: markedForReview.has(currentQ?.questionNumber) ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
                color: markedForReview.has(currentQ?.questionNumber) ? '#facc15' : 'var(--text-secondary)',
              }}
            >
              <Bookmark size={14} />
              <span>{markedForReview.has(currentQ?.questionNumber) ? 'Marked for Review' : 'Mark for Review'}</span>
            </button>
          </div>

          {/* Question Statement */}
          <div style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            lineHeight: 1.6,
            color: '#f8fafc',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {currentQ?.questionText}
          </div>

          {/* Options List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {currentQ?.options.map((optionText, optIdx) => {
              const isSelected = answers[currentQ?.questionNumber] === optIdx;
              const optionLetters = ['A', 'B', 'C', 'D'];

              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                    border: `1.5px solid ${isSelected ? 'var(--primary)' : 'var(--border-subtle)'}`,
                    boxShadow: isSelected ? '0 0 16px rgba(99, 102, 241, 0.25)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    background: isSelected ? 'var(--grad-primary)' : 'rgba(255, 255, 255, 0.06)',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  }}>
                    {optionLetters[optIdx]}
                  </div>
                  <div style={{
                    fontSize: '0.98rem',
                    color: isSelected ? '#ffffff' : 'var(--text-primary)',
                    flex: 1,
                    lineHeight: 1.5,
                  }}>
                    {optionText}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons: Prev, Clear, Next */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)',
            marginTop: '8px',
          }}>
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="btn btn-secondary"
            >
              <ArrowLeft size={16} />
              <span>Previous</span>
            </button>

            {answers[currentQ?.questionNumber] !== undefined && (
              <button
                onClick={handleClearAnswer}
                className="btn btn-outline btn-sm"
              >
                <RotateCcw size={14} />
                <span>Clear Selection</span>
              </button>
            )}

            <button
              onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
              disabled={currentIndex === totalQuestions - 1}
              className="btn btn-secondary"
            >
              <span>Next</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: QUESTION PALETTE (1 to 50) */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Question Palette</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              Click any number to jump directly to that question.
            </p>
          </div>

          {/* Palette Legend */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            fontSize: '0.75rem',
            padding: '12px',
            background: 'rgba(15, 23, 42, 0.6)',
            borderRadius: 'var(--radius-sm)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--emerald)' }} />
              <span>Answered ({answeredCount})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--amber)' }} />
              <span>Marked ({markedCount})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(255,255,255,0.1)' }} />
              <span>Unanswered ({unattemptedCount})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', border: '2px solid var(--primary)' }} />
              <span>Current</span>
            </div>
          </div>

          {/* 1 - 50 Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            maxHeight: '380px',
            overflowY: 'auto',
            paddingRight: '4px',
          }}>
            {questions.map((q, idx) => {
              const isCurrent = idx === currentIndex;
              const isAnswered = answers[q.questionNumber] !== undefined;
              const isMarked = markedForReview.has(q.questionNumber);

              let bgColor = 'rgba(255, 255, 255, 0.05)';
              let textColor = 'var(--text-secondary)';
              let borderStyle = '1px solid var(--border-subtle)';

              if (isMarked) {
                bgColor = 'rgba(245, 158, 11, 0.25)';
                textColor = '#facc15';
                borderStyle = '1px solid rgba(245, 158, 11, 0.5)';
              } else if (isAnswered) {
                bgColor = 'rgba(16, 185, 129, 0.25)';
                textColor = '#34d399';
                borderStyle = '1px solid rgba(16, 185, 129, 0.5)';
              }

              if (isCurrent) {
                borderStyle = '2px solid var(--primary)';
                textColor = '#ffffff';
              }

              return (
                <button
                  key={q.questionNumber}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    padding: '8px 0',
                    borderRadius: 'var(--radius-sm)',
                    background: bgColor,
                    border: borderStyle,
                    color: textColor,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  title={`Question ${q.questionNumber} ${isAnswered ? '(Answered)' : '(Unanswered)'}`}
                >
                  {q.questionNumber}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
          >
            <Send size={16} />
            <span>Finish & Submit Exam</span>
          </button>
        </div>
      </div>

      {/* CONFIRMATION SUBMIT MODAL */}
      {isSubmitModalOpen && (
        <div className="modal-overlay" onClick={() => setIsSubmitModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(99, 102, 241, 0.15)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px',
              }}>
                <Send size={28} color="#6366f1" />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>
                Ready to Submit Your Exam?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Please review your submission status below before confirming. Once submitted, you cannot change your answers.
              </p>
            </div>

            {/* Submission Breakdown */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              padding: '16px',
              background: 'rgba(15, 23, 42, 0.8)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Questions</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{totalQuestions}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--emerald)' }}>Answered</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--emerald)' }}>{answeredCount}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--rose)' }}>Unanswered</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--rose)' }}>{unattemptedCount}</div>
              </div>
            </div>

            {unattemptedCount > 0 && (
              <div className="alert alert-error" style={{ fontSize: '0.8rem', marginBottom: '20px' }}>
                <AlertTriangle size={18} />
                <span>You still have {unattemptedCount} unattempted questions!</span>
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="btn btn-secondary"
                disabled={submitting}
              >
                Return to Exam
              </button>
              <button
                type="button"
                onClick={performSubmit}
                disabled={submitting}
                className="btn btn-primary"
              >
                {submitting ? 'Submitting & Evaluating...' : 'Confirm Submission'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
