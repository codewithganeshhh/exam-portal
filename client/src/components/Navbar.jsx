import React from 'react';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, LogOut, ShieldCheck, User } from 'lucide-react';

export const Navbar = ({ currentView, onNavigate }) => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <header className="navbar-wrapper">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate && onNavigate('dashboard')}
          className="navbar-brand"
          style={{ cursor: user ? 'pointer' : 'default' }}
        >
          <div className="navbar-brand-logo">
            <GraduationCap size={22} color="#ffffff" />
          </div>
          <div>
            <div className="navbar-brand-title">
              <span>EXAM</span>
              <span className="gradient-text">PORTAL</span>
            </div>
            <div className="navbar-brand-sub">
              HTML • CSS • JavaScript • AI/ML Assessments
            </div>
          </div>
        </div>

        {/* User Info & Actions */}
        {user && (
          <div className="navbar-right">
            <div className="navbar-user-chip" title={`${user.name} (@${user.username}) - ${user.role}`}>
              {isAdmin ? (
                <ShieldCheck size={16} color="#c084fc" />
              ) : (
                <User size={16} color="#22d3ee" />
              )}
              <div className="navbar-user-details" style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {user.name}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  @{user.username}
                </div>
              </div>
              <span className={`badge ${isAdmin ? 'badge-admin' : 'badge-student'}`}>
                {user.role}
              </span>
            </div>

            <button
              onClick={logout}
              className="btn btn-secondary btn-sm navbar-logout-btn"
              title="Logout from account"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

