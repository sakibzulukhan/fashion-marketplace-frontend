export default function ProductsPage() {
  const products = [
    { id: 1, name: "Dress", price: 49.99, image: "https://picsum.photos/400/500?random=1", category: "Dresses" },
    { id: 2, name: "Shoes", price: 89.99, image: "https://picsum.photos/400/500?random=2", category: "Shoes" },
    { id: 3, name: "Bag", price: 129.99, image: "https://picsum.photos/400/500?random=3", category: "Accessories" },
    { id: 4, name: "Blouse", price: 39.99, image: "https://picsum.photos/400/500?random=4", category: "Tops" }
  ];

  console.log('SIMPLE PRODUCTS:', products);

  return (
    <main style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
      <h1>Shop Products</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem'}}>
        {products.map(product => (
          <div key={product.id} style={{border: '1px solid #eee', borderRadius: '8px', padding: '1rem', textAlign: 'center'}}>
            <img src={product.image} alt={product.name} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px'}} />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p style={{fontSize: '1.5rem', color: '#e74c3c'}}>${product.price}</p>
            <button style={{width: '100%', padding: '0.75rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px'}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
}
