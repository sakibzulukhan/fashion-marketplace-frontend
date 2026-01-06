export default function VendorOnboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sell Your Designs</h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our global marketplace - <strong>FREE for first 12 months</strong>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Paris Atelier"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Slug (your store URL)
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-3 text-sm bg-gray-100 border border-r-0 rounded-l-lg">
                  yourmarketplace.com/boutiques/
                </span>
                <input 
                  type="text" 
                  className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="paris-atelier"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option>United States</option>
                  <option>France</option>
                  <option>United Kingdom</option>
                  <option>Italy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Can ship within 72 hours?
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="inventory" className="rounded" />
              <label htmlFor="inventory" className="text-sm text-gray-700">
                I have inventory management system/process
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Apply Now - Free Storefront
            </button>
          </form>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Why Join?</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• $1 per cart fee (not % of sales)</li>
              <li>• Free first 12 months</li>
              <li>• Global customer reach</li>
              <li>• Centralized shipping/logistics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
