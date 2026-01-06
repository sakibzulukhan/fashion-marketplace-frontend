export default function BoutiquesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Designer Boutiques</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-indigo-500 rounded-full mb-4 mx-auto"></div>
            <h3 className="text-xl font-semibold mb-2 text-center">Paris Atelier</h3>
            <p className="text-gray-600 text-center mb-4">Luxury ready-to-wear</p>
            <div className="flex justify-center space-x-2 text-sm text-indigo-600">
              <span>12 products</span>
              <span>•</span>
              <span>France</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
