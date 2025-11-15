export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            Coming Soon
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
        </div>
        
        <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Something amazing is on the way. Stay tuned!
        </p>
        
        <div className="flex items-center justify-center space-x-1 text-gray-500">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
        </div>
      </div>
    </div>
  );
}
