import React, { useState, useEffect } from 'react';
import { apiRequest } from '../api';
import { 
  Users, Award, BarChart3, UserPlus, Trash2, Search, Filter, 
  CheckCircle2, XCircle, Clock, Eye, RefreshCw, Sparkles, Shield
} from 'lucide-react';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('results'); // 'results' | 'students' | 'stats'
  const [stats, setStats] = useState(null);
  const [results, setResults] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters for Results
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Add Student Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', username: '', password: '' });
  const [addLoading, setAddLoading] = useState(false);
  const [addMessage, setAddMessage] = useState({ type: '', text: '' });

  // View Result Detail Modal
  const [selectedResult, setSelectedResult] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [statsRes, resultsRes, studentsRes] = await Promise.all([
        apiRequest('/admin/stats'),
        apiRequest('/admin/results'),
        apiRequest('/admin/students'),
      ]);

      if (statsRes.success) setStats(statsRes.stats);
      if (resultsRes.success) setResults(resultsRes.results);
      if (studentsRes.success) setStudents(studentsRes.students);
    } catch (err) {
      console.error('Failed to load admin data:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.username || !newStudent.password) {
      setAddMessage({ type: 'error', text: 'All fields are required' });
      return;
    }

    try {
      setAddLoading(true);
      setAddMessage({ type: '', text: '' });
      const res = await apiRequest('/admin/students', {
        method: 'POST',
        body: JSON.stringify(newStudent),
      });

      if (res.success) {
        setAddMessage({
          type: 'success',
          text: `Student "${newStudent.name}" created! Username: ${newStudent.username} | Password: ${newStudent.password}`,
        });
        setNewStudent({ name: '', username: '', password: '' });
        // Refresh students list & stats
        const updatedStudents = await apiRequest('/admin/students');
        if (updatedStudents.success) setStudents(updatedStudents.students);
        const updatedStats = await apiRequest('/admin/stats');
        if (updatedStats.success) setStats(updatedStats.stats);
      }
    } catch (err) {
      setAddMessage({ type: 'error', text: err.message || 'Failed to create student' });
    } finally {
      setAddLoading(false);
    }
  };

  const handleDeleteStudent = async (studentId, studentName) => {
    if (!window.confirm(`Are you sure you want to remove student "${studentName}" and all their exam scores?`)) {
      return;
    }

    try {
      await apiRequest(`/admin/students/${studentId}`, { method: 'DELETE' });
      setStudents(students.filter(s => s._id !== studentId));
      setResults(results.filter(r => r.studentId !== studentId));
      fetchData();
    } catch (err) {
      alert(err.message || 'Failed to delete student');
    }
  };

  // Filtered Results
  const filteredResults = results.filter((r) => {
    const matchesSubject = selectedSubject === 'ALL' || r.subject === selectedSubject;
    const matchesSearch = 
      r.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.studentUsername.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const formatTime = (seconds) => {
    if (!seconds && seconds !== 0) return 'N/A';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Banner */}
      <div className="glass-panel admin-header-panel" style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <span className="badge badge-admin">Administrator Dashboard</span>
          </div>
          <h1 className="admin-header-title">
            Exam Management & Live Scoreboard
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '4px' }}>
            Monitor student submissions, review answer sheets, and provision new student accounts.
          </p>
        </div>

        <div className="admin-header-actions" style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="btn btn-primary"
            style={{ minHeight: '42px' }}
          >
            <UserPlus size={18} />
            <span>Add Student</span>
          </button>
          <button 
            onClick={fetchData}
            className="btn btn-secondary"
            title="Refresh data"
            style={{ minHeight: '42px' }}
          >
            <RefreshCw size={18} className={loading ? 'spin' : ''} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Analytics Metric Cards */}
      <div className="admin-metrics-grid">
        <div className="glass-panel" style={{ padding: '16px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Total Students
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>
                {stats?.totalStudents ?? students.length}
              </div>
            </div>
            <div style={{ padding: '8px', background: 'rgba(6, 182, 212, 0.15)', borderRadius: '10px' }}>
              <Users size={20} color="#06b6d4" />
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Active student accounts registered
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '16px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Total Exams Taken
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>
                {stats?.totalExams ?? results.length}
              </div>
            </div>
            <div style={{ padding: '8px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '10px' }}>
              <Award size={20} color="#6366f1" />
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Total completed submissions across all tracks
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '16px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                HTML Exam Avg
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fb923c', marginTop: '2px' }}>
                {stats?.subjectStats?.HTML ? `${stats.subjectStats.HTML.avgScore} / 50` : '0 / 50'}
              </div>
            </div>
            <span className="badge badge-html">HTML</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            {stats?.subjectStats?.HTML?.count ?? 0} students completed
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '16px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                CSS Exam Avg
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#60a5fa', marginTop: '2px' }}>
                {stats?.subjectStats?.CSS ? `${stats.subjectStats.CSS.avgScore} / 50` : '0 / 50'}
              </div>
            </div>
            <span className="badge badge-css">CSS</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            {stats?.subjectStats?.CSS?.count ?? 0} students completed
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '16px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                JS Exam Avg
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#facc15', marginTop: '2px' }}>
                {stats?.subjectStats?.JS ? `${stats.subjectStats.JS.avgScore} / 50` : '0 / 50'}
              </div>
            </div>
            <span className="badge badge-js">JS</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            {stats?.subjectStats?.JS?.count ?? 0} students completed
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '16px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                AIML Exam Avg
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#c084fc', marginTop: '2px' }}>
                {stats?.subjectStats?.AIML ? `${stats.subjectStats.AIML.avgScore} / 50` : '0 / 50'}
              </div>
            </div>
            <span className="badge badge-aiml">AIML</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            {stats?.subjectStats?.AIML?.count ?? 0} students completed
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div style={{
        display: 'flex',
        gap: '8px',
        borderBottom: '1px solid var(--border-subtle)',
        paddingBottom: '12px',
        flexWrap: 'wrap',
      }}>
        <button
          onClick={() => setActiveTab('results')}
          className={`btn ${activeTab === 'results' ? 'btn-primary' : 'btn-outline'}`}
          style={{ flex: '1 1 auto', minHeight: '42px' }}
        >
          <Award size={18} />
          <span>Student Exam Scores ({filteredResults.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('students')}
          className={`btn ${activeTab === 'students' ? 'btn-primary' : 'btn-outline'}`}
          style={{ flex: '1 1 auto', minHeight: '42px' }}
        >
          <Users size={18} />
          <span>Manage Students ({students.length})</span>
        </button>
      </div>

      {/* TAB 1: EXAM SCORES & RESULTS */}
      {activeTab === 'results' && (
        <div className="glass-panel glass-panel-responsive">
          {/* Controls: Search & Subject Filters */}
          <div className="admin-controls-bar">
            {/* Subject Filters */}
            <div className="admin-filter-tabs">
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginRight: '4px' }}>
                Filter:
              </span>
              {['ALL', 'HTML', 'CSS', 'JS', 'AIML'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`btn btn-sm ${selectedSubject === sub ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ minHeight: '36px' }}
                >
                  {sub === 'ALL' ? 'All' : sub}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="admin-search-container">
              <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '36px', fontSize: '0.875rem', minHeight: '40px' }}
                placeholder="Search student or username..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Results Table */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
              Loading results...
            </div>
          ) : filteredResults.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 20px' }}>
              <Award size={48} color="var(--text-muted)" style={{ margin: '0 auto 12px', opacity: 0.5 }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>No Exam Submissions Found</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {searchQuery ? 'No results matched your search.' : 'Once students complete exams, their scores will appear here.'}
              </p>
            </div>
          ) : (
            <>
              {/* Desktop / Tablet Table View */}
              <div className="table-container hide-mobile">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Username</th>
                      <th>Subject</th>
                      <th>Score</th>
                      <th>Percentage</th>
                      <th>Status</th>
                      <th>Time Spent</th>
                      <th>Submitted On</th>
                      <th style={{ textAlign: 'center' }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResults.map((r) => (
                      <tr key={r._id}>
                        <td style={{ fontWeight: 600 }}>{r.studentName}</td>
                        <td style={{ color: 'var(--text-muted)' }}>@{r.studentUsername}</td>
                        <td>
                          <span className={`badge badge-${r.subject.toLowerCase()}`}>
                            {r.subject}
                          </span>
                        </td>
                        <td style={{ fontWeight: 700, fontSize: '1rem' }}>
                          {r.score} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ {r.totalQuestions}</span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontWeight: 600 }}>{r.percentage}%</span>
                            <div style={{
                              width: '50px',
                              height: '6px',
                              background: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '3px',
                              overflow: 'hidden',
                            }}>
                              <div style={{
                                width: `${r.percentage}%`,
                                height: '100%',
                                background: r.passed ? 'var(--emerald)' : 'var(--rose)',
                              }} />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`badge ${r.passed ? 'badge-passed' : 'badge-failed'}`}>
                            {r.passed ? 'Passed' : 'Failed'}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            <Clock size={14} />
                            <span>{formatTime(r.timeSpentSeconds)}</span>
                          </div>
                        </td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                          {formatDate(r.submittedAt)}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <button
                            onClick={() => setSelectedResult(r)}
                            className="btn btn-secondary btn-sm"
                            title="View detailed question breakdown"
                          >
                            <Eye size={14} />
                            <span>Review</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Native Card View */}
              <div className="show-mobile">
                {filteredResults.map((r) => (
                  <div key={r._id} className="mobile-history-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                          {r.studentName}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          @{r.studentUsername}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span className={`badge badge-${r.subject.toLowerCase()}`}>
                          {r.subject}
                        </span>
                        <span className={`badge ${r.passed ? 'badge-passed' : 'badge-failed'}`}>
                          {r.passed ? 'Passed' : 'Failed'}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '4px' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Score: </span>
                        <strong style={{ fontSize: '1.2rem', color: r.passed ? '#34d399' : '#fb7185' }}>
                          {r.score}
                        </strong>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}> / {r.totalQuestions}</span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '1rem' }}>
                        {r.percentage}%
                      </div>
                    </div>

                    <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${r.percentage}%`,
                        height: '100%',
                        background: r.passed ? 'var(--emerald)' : 'var(--rose)',
                        borderRadius: '3px',
                      }} />
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      paddingTop: '8px',
                      borderTop: '1px solid rgba(255,255,255,0.04)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} />
                        <span>{formatTime(r.timeSpentSeconds)}</span>
                      </div>
                      <button
                        onClick={() => setSelectedResult(r)}
                        className="btn btn-secondary btn-sm"
                        style={{ padding: '5px 12px', minHeight: '34px' }}
                      >
                        <Eye size={13} />
                        <span>Review</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* TAB 2: MANAGE STUDENTS */}
      {activeTab === 'students' && (
        <div className="glass-panel glass-panel-responsive">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 style={{ fontSize: '1.2rem' }}>Registered Student Accounts</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '2px' }}>
                Students use these credentials to log in and attempt exams.
              </p>
            </div>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="btn btn-primary btn-sm"
              style={{ minHeight: '38px' }}
            >
              <UserPlus size={16} />
              <span>Create Student</span>
            </button>
          </div>

          {students.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Users size={40} color="var(--text-muted)" style={{ margin: '0 auto 12px' }} />
              <p style={{ color: 'var(--text-secondary)' }}>No students registered yet. Click "Create Student" to add one.</p>
            </div>
          ) : (
            <>
              {/* Desktop / Tablet Table View */}
              <div className="table-container hide-mobile">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Username</th>
                      <th>Role</th>
                      <th>Exams Completed</th>
                      <th>Registered Date</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((st) => (
                      <tr key={st._id}>
                        <td style={{ fontWeight: 600 }}>{st.name}</td>
                        <td>
                          <code style={{ background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: '4px', color: '#22d3ee' }}>
                            @{st.username}
                          </code>
                        </td>
                        <td>
                          <span className="badge badge-student">Student</span>
                        </td>
                        <td>
                          <span style={{ fontWeight: 600 }}>{st.attemptsCount ?? 0}</span>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: '4px' }}>exams</span>
                        </td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                          {formatDate(st.createdAt)}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <button
                            onClick={() => handleDeleteStudent(st._id, st.name)}
                            className="btn btn-danger btn-sm"
                            title="Delete Student"
                          >
                            <Trash2 size={14} />
                            <span>Delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Native Card View */}
              <div className="show-mobile">
                {students.map((st) => (
                  <div key={st._id} className="mobile-history-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>{st.name}</div>
                      <span className="badge badge-student">Student</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
                      <code style={{ background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: '4px', color: '#22d3ee' }}>
                        @{st.username}
                      </code>
                      <span style={{ color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{st.attemptsCount ?? 0}</strong> exams completed
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      paddingTop: '8px',
                      borderTop: '1px solid rgba(255,255,255,0.04)',
                    }}>
                      <span>Registered: {formatDate(st.createdAt)}</span>
                      <button
                        onClick={() => handleDeleteStudent(st._id, st.name)}
                        className="btn btn-danger btn-sm"
                        style={{ padding: '4px 10px', minHeight: '32px' }}
                      >
                        <Trash2 size={13} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* MODAL: ADD STUDENT */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ padding: '8px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '10px' }}>
                  <UserPlus size={20} color="#6366f1" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Add New Student</h3>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    Provide credentials for the student to log in
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="btn btn-outline btn-sm"
                style={{ borderRadius: '50%', width: '32px', height: '32px', padding: 0 }}
              >
                ✕
              </button>
            </div>

            {addMessage.text && (
              <div className={`alert ${addMessage.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                {addMessage.type === 'success' ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                <span style={{ wordBreak: 'break-word', fontSize: '0.82rem' }}>{addMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleAddStudent}>
              <div className="form-group">
                <label className="form-label" htmlFor="std-name">Student Full Name</label>
                <input
                  id="std-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Rahul Sharma"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="std-username">Username</label>
                <input
                  id="std-username"
                  type="text"
                  className="form-input"
                  placeholder="e.g. rahul2026"
                  value={newStudent.username}
                  onChange={(e) => setNewStudent({ ...newStudent, username: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="std-pass">Password</label>
                <input
                  id="std-pass"
                  type="text"
                  className="form-input"
                  placeholder="Set initial password for student (e.g. rahul123)"
                  value={newStudent.password}
                  onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
                  required
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Student can immediately use this username & password to log in.
                </span>
              </div>

              <div className="modal-actions" style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="btn btn-secondary"
                  style={{ minHeight: '44px' }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={addLoading}
                  className="btn btn-primary"
                  style={{ minHeight: '44px' }}
                >
                  {addLoading ? 'Creating...' : 'Save & Create Student'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EXAM SUBMISSION REVIEW */}
      {selectedResult && (
        <div className="modal-overlay" onClick={() => setSelectedResult(null)}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '780px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className={`badge badge-${selectedResult.subject.toLowerCase()}`}>
                    {selectedResult.subject} Assessment
                  </span>
                  <span className={`badge ${selectedResult.passed ? 'badge-passed' : 'badge-failed'}`}>
                    {selectedResult.passed ? 'Passed' : 'Failed'}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>
                  {selectedResult.studentName} (@{selectedResult.studentUsername})
                </h3>
              </div>
              <button
                onClick={() => setSelectedResult(null)}
                className="btn btn-outline btn-sm"
                style={{ borderRadius: '50%', width: '32px', height: '32px', padding: 0 }}
              >
                ✕
              </button>
            </div>

            {/* Score Summary Row */}
            <div className="modal-grid-4" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
              padding: '14px',
              background: 'rgba(15, 23, 42, 0.6)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '16px',
              textAlign: 'center',
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Score</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {selectedResult.score} / {selectedResult.totalQuestions}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Percentage</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: selectedResult.passed ? '#34d399' : '#fb7185' }}>
                  {selectedResult.percentage}%
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Correct / Wrong</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  <span style={{ color: '#34d399' }}>{selectedResult.correctAnswers}</span>
                  <span style={{ color: 'var(--text-muted)', margin: '0 4px' }}>/</span>
                  <span style={{ color: '#fb7185' }}>{selectedResult.wrongAnswers}</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Time Spent</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {formatTime(selectedResult.timeSpentSeconds)}
                </div>
              </div>
            </div>

            {/* Answer items scrollable */}
            <div style={{ flex: 1, overflowY: 'auto', paddingRight: '4px' }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                Question Breakdown (50 Questions)
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(95px, 1fr))', gap: '6px' }}>
                {selectedResult.answers?.map((ans, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: ans.isCorrect 
                        ? 'rgba(16, 185, 129, 0.12)' 
                        : ans.selectedOption === null 
                        ? 'rgba(148, 163, 184, 0.08)' 
                        : 'rgba(244, 63, 94, 0.12)',
                      border: `1px solid ${
                        ans.isCorrect 
                           ? 'rgba(16, 185, 129, 0.3)' 
                          : ans.selectedOption === null 
                          ? 'rgba(148, 163, 184, 0.2)' 
                          : 'rgba(244, 63, 94, 0.3)'
                      }`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span>Q{ans.questionNumber}</span>
                    {ans.isCorrect ? (
                      <CheckCircle2 size={15} color="#34d399" />
                    ) : ans.selectedOption === null ? (
                      <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Skip</span>
                    ) : (
                      <XCircle size={15} color="#fb7185" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '16px', textAlign: 'right' }}>
              <button
                onClick={() => setSelectedResult(null)}
                className="btn btn-secondary"
                style={{ width: '100%', minHeight: '42px' }}
              >
                Close Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
