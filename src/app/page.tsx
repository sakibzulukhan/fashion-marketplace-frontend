'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [status, setStatus] = useState('Checking backend...');

  useEffect(() => {
    fetch('https://fashion-marketplace-api.onrender.com/health')
      .then(res => res.json())
      .then(data => setStatus('✅ Backend Connected!'))
      .catch(() => setStatus('❌ Backend Offline'));
  }, []);

  return (
    <main style={{padding: '2rem', maxWidth: '800px', margin: '0 auto'}}>
      <h1 style={{fontSize: '3rem', marginBottom: '1rem', color: '#333'}}>
        Fashion Marketplace
      </h1>
      <p style={{fontSize: '1.2rem', color: '#666', marginBottom: '2rem'}}>
        Backend Status: <strong>{status}</strong>
      </p>
      <Link href="/products" style={{
        display: 'inline-block', padding: '1rem 2rem', background: '#3498db',
        color: 'white', textDecoration: 'none', borderRadius: '8px', fontSize: '1.1rem'
      }}>
        🛍️ Shop Products →
      </Link>
    </main>
  );
}
