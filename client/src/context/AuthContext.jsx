import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiRequest } from '../api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Re-hydrate user session on page refresh
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('exam_portal_token');
      const storedUser = localStorage.getItem('exam_portal_user');

      if (token && storedUser) {
        try {
          setUser(JSON.parse(storedUser));
          // Verify with server in background
          const data = await apiRequest('/auth/me');
          if (data && data.user) {
            setUser(data.user);
            localStorage.setItem('exam_portal_user', JSON.stringify(data.user));
          }
        } catch (err) {
          console.warn('Session expired or invalid:', err.message);
          logout();
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (username, password) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (data.success && data.token) {
      localStorage.setItem('exam_portal_token', data.token);
      localStorage.setItem('exam_portal_user', JSON.stringify(data.user));
      setUser(data.user);
      return data.user;
    }
    throw new Error(data.message || 'Login failed');
  };

  const logout = () => {
    localStorage.removeItem('exam_portal_token');
    localStorage.removeItem('exam_portal_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAdmin: user?.role === 'admin', isStudent: user?.role === 'student' }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
