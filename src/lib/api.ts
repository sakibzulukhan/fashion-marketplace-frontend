const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://fashion-marketplace-api.onrender.com'
  : 'http://localhost:10000';

export async function healthCheck() {
  const res = await fetch(`${API_BASE}/health`);
  return res.json();
}

export async function getProducts() {
  const res = await fetch(`${API_BASE}/api/products`);
  return res.json();
}
