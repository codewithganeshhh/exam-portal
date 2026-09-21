// API Client for backend communication
const resolveApiBase = () => {
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (!envUrl) {
    // In production build (e.g. on Vercel), default automatically to your live Render backend!
    if (import.meta.env.PROD) {
      return 'https://exam-portal-5pqf.onrender.com/api';
    }
    return 'http://localhost:5000/api';
  }
  let cleaned = envUrl.trim().replace(/\/+$/, '');
  if (!cleaned.endsWith('/api')) {
    cleaned = `${cleaned}/api`;
  }
  return cleaned;
};

export const API_BASE = resolveApiBase();

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('exam_portal_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong with the request');
    }
    return data;
  } catch (error) {
    console.error(`API Error on [${options.method || 'GET'} ${endpoint}]:`, error.message);
    throw error;
  }
};
