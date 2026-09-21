import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../api';
import { Lock, User, Eye, EyeOff, LogIn, GraduationCap, Database } from 'lucide-react';

export const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dbStatus, setDbStatus] = useState(null);

  useEffect(() => {
    const checkDb = async () => {
      try {
        const res = await apiRequest('/health');
        setDbStatus(res.database);
      } catch (err) {
        setDbStatus('server_offline');
      }
    };
    checkDb();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await login(username, password);
      // AuthContext handles role state, App.jsx redirects to respective dashboard!
    } catch (err) {
      setError(err.message || 'Login failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '460px',
        padding: '36px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle Top Accent Glow Bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--grad-primary)',
        }} />

        {/* Portal Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'var(--grad-primary)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            boxShadow: '0 8px 24px var(--primary-glow)',
          }}>
            <GraduationCap size={32} color="#ffffff" />
          </div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>
            Exam Portal Sign In
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
            Single unified login for both <span style={{ color: '#c084fc', fontWeight: 600 }}>Admins</span> and <span style={{ color: '#22d3ee', fontWeight: 600 }}>Students</span>. You will be automatically routed according to your role.
          </p>
        </div>

        {/* DB Connection Guidance if Mongo URI not connected yet */}
        {dbStatus === 'disconnected' && (
          <div style={{
            padding: '12px 14px',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '18px',
            fontSize: '0.82rem',
            color: '#fde68a',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            lineHeight: 1.4,
          }}>
            <Database size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>MongoDB Link Required:</strong> Paste your MongoDB Atlas URL into <code style={{ color: '#fff', background: 'rgba(0,0,0,0.3)', padding: '1px 4px', borderRadius: '3px' }}>server/.env</code> as <code style={{ color: '#fff', background: 'rgba(0,0,0,0.3)', padding: '1px 4px', borderRadius: '3px' }}>MONGO_URI</code> and run <code style={{ color: '#fff', background: 'rgba(0,0,0,0.3)', padding: '1px 4px', borderRadius: '3px' }}>npm run seed</code> to enable database storage.
            </div>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="alert alert-error" style={{ marginBottom: '20px' }}>
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                display: 'flex',
              }}>
                <User size={18} />
              </span>
              <input
                id="username"
                type="text"
                className="form-input"
                style={{ paddingLeft: '42px' }}
                placeholder="Enter your username (e.g. admin or student)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                display: 'flex',
              }}>
                <Lock size={18} />
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                style={{ paddingLeft: '42px', paddingRight: '42px' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: '100%', padding: '13px', fontSize: '1rem' }}
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <LogIn size={18} />
                <span>Enter Portal</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
