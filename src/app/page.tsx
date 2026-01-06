import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <nav className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold">Global Fashion Marketplace</h1>
      </nav>
      
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Boutique Designers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Independent designers with global reach
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/boutiques" className="block p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">Browse Boutiques</h3>
            <p>Discover unique designers worldwide</p>
          </Link>
          <Link href="/products" className="block p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">Shop Products</h3>
            <p>Curated fashion & accessories</p>
          </Link>
          <Link href="/vendors/onboard" className="block p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">Sell Your Designs</h3>
            <p>Join as a designer (free first year)</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
