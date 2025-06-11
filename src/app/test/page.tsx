export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🎉 Tailwind CSS Test
        </h1>
        <p className="text-gray-600 mb-6">
          If you can see this styled correctly, Tailwind CSS is working!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
          Click Me!
        </button>
      </div>
    </div>
  );
} 