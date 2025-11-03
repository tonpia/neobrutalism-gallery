export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold border-4 border-black px-6 py-4 bg-white mb-4 inline-block">
            Modules
          </h1>
          <p className="text-xl font-mono border-4 border-black px-4 py-2 bg-white max-w-3xl">
            Complex components and patterns
          </p>
        </div>
        
        <div className="border-4 border-black bg-white p-8">
          <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
          <p className="text-lg">
            Module components showcase will be implemented here including:
            accordions, modals, tooltips, notification banners, and other complex UI patterns.
          </p>
        </div>
      </div>
    </div>
  );
}
