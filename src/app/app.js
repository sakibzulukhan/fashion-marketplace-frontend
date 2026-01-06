// App.js
import { useEffect, useState } from 'react';
import { api } from './services/api';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    api.healthCheck()
      .then(data => setBackendStatus('✅ Backend LIVE!'))
      .catch(() => setBackendStatus('❌ Backend down'));
  }, []);

  return (
    <div>
      <h1>Fashion Marketplace</h1>
      <p>Backend: {backendStatus}</p>
    </div>
  );
}
