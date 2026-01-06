export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop All Products</h1>
          <p className="text-xl text-gray-600">Curated fashion from independent designers</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Product cards will load here from your database */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Designer Dress</h3>
            <p className="text-gray-600 mb-4">$89</p>
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

