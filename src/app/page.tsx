'use client';
import { useEffect, useState } from 'react';
import { healthCheck } from '@/lib/api';

export default function Home() {
  const [status, setStatus] = useState('Checking backend...');

  useEffect(() => {
    healthCheck()
      .then(data => setStatus('✅ Backend Connected!'))
      .catch(() => setStatus('❌ Backend Offline'));
  }, []);

  return (
    <main>
      <h1>Fashion Marketplace</h1>
      <p>Backend Status: <strong>{status}</strong></p>
    </main>
  );
}
