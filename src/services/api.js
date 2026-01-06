// src/services/api.js
const API_BASE = 'https://fashion-marketplace-api.onrender.com';

export const api = {
  getProducts: async () => {
    const response = await fetch(`${API_BASE}/`);
    return response.json();
  },
  
  healthCheck: async () => {
    const response = await fetch(`${API_BASE}/health`);
    return response.json();
  }
};
