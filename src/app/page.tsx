'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('Checking backend...');

  useEffect(() => {
    fetch('https://fashion-marketplace-api.onrender.com/health')
      .then(res => res.json())
      .then(data => setStatus('✅ Backend Connected!'))
      .catch(() => setStatus('❌ Backend Offline'));
  }, []);

  return (
    <main style={{padding: '2rem'}}>
      <h1>Fashion Marketplace</h1>
      <p>Backend Status: <strong>{status}</strong></p>
    </main>
  );
}
