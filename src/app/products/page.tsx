'use client';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductsPage() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Summer Floral Dress",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1574251557236-5325e0d7b748?w=300",
      category: "Dresses"
    },
    {
      id: 2,
      name: "Classic White Sneakers", 
      price: 89.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
      category: "Shoes"
    },
    {
      id: 3,
      name: "Leather Handbag",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Silk Blouse",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1487222474749-6d22f09e2def?w=300",
      category: "Tops"
    }
  ]);

  return (
    <main style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
      <h1 style={{marginBottom: '2rem'}}>Shop Products</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem'}}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #eee', 
            borderRadius: '8px', 
            padding: '1rem',
            textAlign: 'center'
          }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px'}}
            />
            <h3 style={{margin: '1rem 0 0.5rem'}}>{product.name}</h3>
            <p style={{color: '#666', margin: '0.5rem 0'}}>{product.category}</p>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c'}}>
              ${product.price}
            </p>
            <button style={{
              width: '100%', 
              padding: '0.75rem', 
              background: '#e74c3c', 
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}






