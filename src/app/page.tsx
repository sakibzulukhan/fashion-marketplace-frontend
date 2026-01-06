import Link from 'next/link';                    // ← ADD THIS
import { useCart } from '../contexts/CartContext'; // ← ADD THIS

export default function Home() {
  const { cart, getTotal } = useCart();          // ← ADD THIS
  
  return (
    <main style={{padding: '2rem'}}>
      {/* ← ADD THIS ENTIRE HEADER */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
        <h1>Fashion Marketplace</h1>
        <Link href="/cart" style={{position: 'relative', textDecoration: 'none'}}>
          <span style={{fontSize: '1.5rem'}}>🛒</span>
          {cart.length > 0 && (
            <span style={{
              position: 'absolute', top: '-8px', right: '-8px',
              background: '#e74c3c', color: 'white', borderRadius: '50%',
              width: '20px', height: '20px', fontSize: '0.8rem', display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}>
              {cart.length}
            </span>
          )}
          <span style={{marginLeft: '0.5rem'}}>${getTotal().toFixed(2)}</span>
        </Link>
      </div>
      
      {/* ← KEEP YOUR EXISTING CONTENT */}
      <Link href="/products">
        <button style={{/* your existing styles */}}>
          Shop Products
        </button>
      </Link>
    </main>
  );
}
